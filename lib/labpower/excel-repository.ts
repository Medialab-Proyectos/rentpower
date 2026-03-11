/**
 * excel-repository.ts
 * --------------------
 * Fuente de datos para el cotizador de LabPower.
 * Lee el archivo Excel desde /data/precios-web.xlsx (incluido en el proyecto),
 * lo parsea con SheetJS y retorna los items normalizados listos para UI.
 *
 * Para actualizar precios: reemplaza /data/precios-web.xlsx y redeploya.
 *
 * COLUMNAS ESPERADAS EN EL EXCEL (ajusta COLUMN_MAP si los encabezados difieren):
 *   - Nombre del Producto
 *   - Descripción de la Pieza
 *   - Número de Pieza
 *   - Pieza Secundaria
 *   - Precio de Intercambio
 */

import * as fs from "fs";
import * as path from "path";
import * as XLSX from "xlsx";
import type { RawLabPowerRow, LabPowerItem } from "./types";
import { normalizeRows } from "./normalizer";

/** Ruta al archivo Excel dentro del proyecto. */
const EXCEL_PATH = path.join(process.cwd(), "data", "precios-web.xlsx");

/**
 * Mapeo de encabezados del Excel → claves internas.
 * Si el Excel tiene nombres de columna distintos, ajusta aquí.
 */
const COLUMN_MAP: Record<string, keyof RawLabPowerRow> = {
  "Nombre del producto":     "nombreProducto",
  "Descripción de la pieza": "descripcionPieza",
  "Número de pieza":         "numeroPieza",
  "Pieza secundaria":        "piezaSecundaria",
  "Precio de intercambio":   "precioIntercambio",
};

function mapRawRow(row: Record<string, unknown>): RawLabPowerRow {
  const result = {} as Record<keyof RawLabPowerRow, string | number>;
  for (const [excelKey, internalKey] of Object.entries(COLUMN_MAP)) {
    result[internalKey] = (row[excelKey] ?? "") as string | number;
  }
  return result as RawLabPowerRow;
}

/**
 * Lee y normaliza los items del cotizador desde el Excel local.
 * Lanza error si el archivo no existe o no puede parsearse.
 */
export async function fetchLabPowerItems(): Promise<LabPowerItem[]> {
  if (!fs.existsSync(EXCEL_PATH)) {
    console.warn(`[LabPower] Archivo no encontrado: ${EXCEL_PATH}`);
    return [];
  }

  const buffer    = fs.readFileSync(EXCEL_PATH);
  const workbook  = XLSX.read(buffer, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];
  const sheet     = workbook.Sheets[sheetName];

  // La fila 0 es un título ("Precios para página WEB"), los encabezados reales están en la fila 1.
  // Leemos como arrays para construir los objetos manualmente.
  const allRows = XLSX.utils.sheet_to_json<unknown[]>(sheet, { header: 1, defval: "" });
  const headers = (allRows[1] as string[]).map((h) => String(h).trim());
  const dataRows = allRows.slice(2) as unknown[][];

  const rawRows = dataRows
    .filter((row) => Array.isArray(row) && row.some((cell) => cell !== ""))
    .map((row) => {
      const obj: Record<string, unknown> = {};
      headers.forEach((header, i) => { obj[header] = (row as unknown[])[i] ?? ""; });
      return obj;
    });

  const mappedRows = rawRows.map(mapRawRow);
  return normalizeRows(mappedRows);
}
