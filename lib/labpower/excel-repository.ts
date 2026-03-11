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
 *     https://docs.google.com/spreadsheets/d/10Cw0lWedvBFUyEYAIkyevjL3IcOfrxN6/edit?usp=sharing&ouid=107499327040843539985&rtpof=true&sd=true
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
 * Si el Excel tiene nombres de columna distintos, ajusta aquí.
 */
const COLUMN_MAP: Record<string, keyof RawLabPowerRow> = {
  "Nombre del Producto":    "nombreProducto",
  "Descripción de la Pieza":"descripcionPieza",
  "Número de Pieza":        "numeroPieza",
  "Pieza Secundaria":       "piezaSecundaria",
  "Precio de Intercambio":  "precioIntercambio",
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

  const rawRows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, {
    defval: "", // valor por defecto para celdas vacías
  });

  const mappedRows = rawRows.map(mapRawRow);
  return normalizeRows(mappedRows);
}
