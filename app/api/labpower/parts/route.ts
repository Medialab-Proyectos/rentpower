import { NextResponse } from "next/server";
import { fetchLabPowerItems } from "@/lib/labpower/excel-repository";

/**
 * GET /api/labpower/parts
 *
 * Retorna los items del cotizador normalizados desde el Excel remoto.
 * Úsalo desde cualquier componente cliente:
 *
 *   const res = await fetch("/api/labpower/parts");
 *   const { items } = await res.json();
 */
export async function GET() {
  try {
    const items = await fetchLabPowerItems();
    return NextResponse.json({ items });
  } catch (error) {
    console.error("[API] /api/labpower/parts:", error);
    return NextResponse.json(
      { error: "No se pudieron cargar los datos de cotización." },
      { status: 500 }
    );
  }
}
