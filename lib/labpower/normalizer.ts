import type { RawLabPowerRow, LabPowerItem, ProductType, UICategory } from "./types";
import { PRODUCT_TYPE_RULES, CATEGORY_RULES } from "./category-rules";

function detectProductType(producto: string): ProductType {
  for (const { type, pattern } of PRODUCT_TYPE_RULES) {
    if (pattern.test(producto)) return type;
  }
  return "Otro";
}

function detectCategory(descripcion: string): UICategory {
  for (const { category, pattern } of CATEGORY_RULES) {
    if (pattern.test(descripcion)) return category;
  }
  return "Otros componentes";
}

function parsePrice(raw: string | number | undefined | null): number | null {
  if (raw === undefined || raw === null || raw === "") return null;
  if (typeof raw === "number") return isNaN(raw) ? null : raw;
  // Elimina símbolos de moneda, espacios y normaliza separadores
  const cleaned = String(raw)
    .replace(/[$\s]/g, "")
    .replace(/\.(?=\d{3}(?:[.,]|$))/g, "") // quita puntos de miles
    .replace(",", ".");                       // normaliza decimal
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? null : parsed;
}

function formatPrice(price: number | null): string {
  if (price === null) return "Consultar";
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/** Normaliza una fila cruda del Excel en un LabPowerItem.
 *  Retorna null si la fila está vacía o no tiene nombre de producto. */
export function normalizeRow(raw: RawLabPowerRow): LabPowerItem | null {
  const producto = raw.nombreProducto?.toString().trim();
  if (!producto) return null;

  const descripcionPieza = raw.descripcionPieza?.toString().trim() ?? "";
  const numeroPieza      = raw.numeroPieza?.toString().trim() ?? "";
  const piezaSecundaria  = raw.piezaSecundaria?.toString().trim() ?? "";
  const precio           = parsePrice(raw.precioIntercambio);

  return {
    producto,
    tipoProducto:    detectProductType(producto),
    categoriaUI:     detectCategory(descripcionPieza),
    descripcionPieza,
    numeroPieza,
    piezaSecundaria,
    precio,
    precioFormateado: formatPrice(precio),
  };
}

/** Normaliza un array de filas crudas, descartando las vacías. */
export function normalizeRows(rows: RawLabPowerRow[]): LabPowerItem[] {
  return rows.flatMap((row) => {
    const item = normalizeRow(row);
    return item ? [item] : [];
  });
}
