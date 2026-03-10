/**
 * excel-repository.ts
 * --------------------
 * Fuente de datos para el cotizador de LabPower.
 * Lee el archivo Excel desde una URL remota, lo parsea con SheetJS
 * y retorna los items normalizados listos para UI.
 *
 * CONFIGURACIÓN:
 *   Agrega en tu .env.local:
 *     LABPOWER_EXCEL_URL=<URL pública del archivo .xlsx>
 *
 *   Si el archivo es un Google Sheet, exporta como xlsx:
 *     https://docs.google.com/spreadsheets/d/SHEET_ID/export?format=xlsx
 *
 * COLUMNAS ESPERADAS EN EL EXCEL (ajusta COLUMN_MAP si los encabezados difieren):
 *   - Nombre del Producto
 *   - Descripción de la Pieza
 *   - Número de Pieza
 *   - Pieza Secundaria
 *   - Precio de Intercambio
 */

import * as XLSX from "xlsx";
import type { RawLabPowerRow, LabPowerItem } from "./types";
import { normalizeRows } from "./normalizer";

/** URL del Excel. Configurable vía variable de entorno (solo server-side). */
const EXCEL_URL = process.env.LABPOWER_EXCEL_URL ?? "";

/**
 * Mapeo de encabezados del Excel → claves internas.
 * Las claves deben coincidir EXACTAMENTE con los encabezados de la fila 2 del archivo.
 * El archivo tiene una fila de título en la fila 1 que se omite al parsear.
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
 * Obtiene y normaliza los items del cotizador desde el Excel remoto.
 *
 * - Los datos se revalidan cada hora (Next.js ISR via fetch cache).
 * - Si LABPOWER_EXCEL_URL no está configurada, retorna array vacío con advertencia.
 * - Lanza error si el fetch falla, para que el llamador decida cómo manejarlo.
 */
export async function fetchLabPowerItems(): Promise<LabPowerItem[]> {
  if (!EXCEL_URL) {
    console.warn(
      "[LabPower] LABPOWER_EXCEL_URL no está configurada. " +
      "Agrega la variable de entorno en .env.local para habilitar el cotizador."
    );
    return [];
  }

  const response = await fetch(EXCEL_URL, {
    next: { revalidate: 3600 }, // revalida cada 1 hora
  });

  if (!response.ok) {
    throw new Error(
      `[LabPower] Error al obtener el Excel: ${response.status} ${response.statusText}`
    );
  }

  const buffer    = await response.arrayBuffer();
  const workbook  = XLSX.read(buffer, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const sheet     = workbook.Sheets[sheetName];

  // El archivo tiene una fila de título en la fila 1 (e.g. "Precios para página WEB").
  // Los encabezados reales están en la fila 2. Leemos todo como arrays y
  // construimos los objetos manualmente usando la fila 1 (índice 1) como cabecera.
  const allRows = XLSX.utils.sheet_to_json<unknown[]>(sheet, {
    header: 1,
    defval: "",
  });

  // Buscar la fila que contiene los encabezados reales (la que tiene "Nombre del producto")
  const headerRowIndex = allRows.findIndex(
    (row) => Array.isArray(row) && String(row[0]).trim() === "Nombre del producto"
  );

  if (headerRowIndex === -1) {
    console.warn("[LabPower] No se encontró la fila de encabezados en el Excel.");
    return [];
  }

  const headers = (allRows[headerRowIndex] as unknown[]).map((h) => String(h).trim());
  const dataRows = allRows.slice(headerRowIndex + 1) as unknown[][];

  const rawRows = dataRows
    .filter((row) => Array.isArray(row) && row.some((cell) => cell !== ""))
    .map((row) => {
      const obj: Record<string, unknown> = {};
      headers.forEach((header, i) => {
        obj[header] = row[i] ?? "";
      });
      return obj;
    });

  const mappedRows = rawRows.map(mapRawRow);
  return normalizeRows(mappedRows);
}
