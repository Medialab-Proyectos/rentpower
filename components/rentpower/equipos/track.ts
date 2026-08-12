/**
 * Eventos de la landing de equipos reacondicionados.
 * Se envian al dataLayer de GTM (GTM-N2XD595J ya esta cargado en el layout raiz).
 */
export function trackWhatsApp(origen: string, equipo?: string) {
  if (typeof window === "undefined") return
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({
    event: "whatsapp_click",
    landing: "rentpower_equipos",
    origen,
    equipo: equipo ?? null,
  })
}

export function trackFiltro(filtro: string) {
  if (typeof window === "undefined") return
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({
    event: "filtro_catalogo",
    landing: "rentpower_equipos",
    filtro,
  })
}
