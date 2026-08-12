/**
 * RentPower — Inventario de equipos reacondicionados
 *
 * Fuente: "DISTRIBUIDOR_1305 precios.docx" (LISTADO DE PRECIOS DISTRIBUIDOR)
 * Vigencia declarada en el documento: 11/05/2026 al 18/05/2026.
 *
 * IMPORTANTE — antes de publicar la pauta:
 * 1. Los valores del documento son PRECIO DISTRIBUIDOR (canal), no precio publico.
 *    Si la landing debe mostrar precio al publico, ajusta MARGEN_PUBLICO.
 * 2. Confirma con RentPower si los precios incluyen IVA (ver NOTA_PRECIOS).
 * 3. Las unidades corresponden al corte del documento; tres referencias venian
 *    sin dato de stock y quedan como `null` (se muestran como "Consultar stock").
 */

export type EquipoTipo = "portatil" | "cpu" | "aio"

export interface Equipo {
  id: string
  tipo: EquipoTipo
  marca: string
  modelo: string
  /** Chips cortos que se muestran en la tarjeta */
  specs: string[]
  /** Ficha tecnica completa tal como viene del listado del proveedor */
  detalle: string
  /** Precio de lista distribuidor en COP */
  precioLista: number
  /** Unidades disponibles al corte del listado. null = sin dato */
  unidades: number | null
  /** Nota operativa visible en la tarjeta (opcional) */
  nota?: string
  /** Ruta de la foto real cuando RentPower la entregue. Ej: /images/rentpower/equipos/latitude-5420.jpg */
  imagen?: string
}

/**
 * Multiplicador aplicado al precio de lista para mostrar el precio publico.
 * 1 = se muestra el precio del listado tal cual.
 * Ej: 1.25 = precio de lista + 25% de margen.
 */
export const MARGEN_PUBLICO = 1

/** Nota legal/comercial que acompana a todos los precios */
export const NOTA_PRECIOS =
  "Precios sujetos a disponibilidad de inventario. Confirma condiciones de IVA, garantía y despacho con un asesor."

/** Vigencia declarada en el listado entregado por RentPower */
export const VIGENCIA_LISTA = "11 al 18 de mayo de 2026"

/** WhatsApp comercial de la campana (Luz Angela Leon Rodriguez) */
export const WHATSAPP_NUMERO = "573508655681"
export const WHATSAPP_DISPLAY = "+57 350 865 5681"

export const TIPO_LABEL: Record<EquipoTipo, string> = {
  portatil: "Portátil",
  cpu: "CPU / Escritorio",
  aio: "Todo en uno",
}

/**
 * Imagen de referencia por categoria (acuerdo con RentPower mientras llegan las fotos
 * reales). Cualquier referencia que traiga su propia `imagen` la usa en lugar de esta.
 */
export const imagenPorTipo: Record<EquipoTipo, string> = {
  portatil: "/images/rentpower/equipos/portatil.webp",
  cpu: "/images/rentpower/equipos/cpu.webp",
  aio: "/images/rentpower/equipos/aio.webp",
}

export const equipos: Equipo[] = [
  // ─────────────────────────────── PORTATILES ───────────────────────────────
  {
    id: "hp-probook-240-g7",
    tipo: "portatil",
    marca: "HP",
    modelo: "ProBook 240 G7",
    specs: ["Core i5 8ª gen", "8 GB RAM", "1 TB + 256 GB SSD"],
    detalle: "Portatil HP ProBook 240 G7, Core i5 de 8ª generación, 8 GB RAM, disco 1 TB mas 256 GB SSD.",
    precioLista: 723000,
    unidades: 40,
  },
  {
    id: "dell-latitude-3410",
    tipo: "portatil",
    marca: "Dell",
    modelo: "Latitude 3410",
    specs: ["Core i7-10510U", "16 GB RAM", "512 GB SSD", '14"'],
    detalle:
      "Core i7-10510U 1.8 GHz, 512 GB SSD, 16 GB RAM, pantalla 14\", Wi-Fi, Gigabit Ethernet, Intel UHD Graphics.",
    precioLista: 1450000,
    unidades: 103,
  },
  {
    id: "dell-latitude-3420",
    tipo: "portatil",
    marca: "Dell",
    modelo: "Latitude 3420",
    specs: ["Core i5-1135G7", "8 GB RAM", "512 GB SSD", '14"'],
    detalle:
      "Core i5-1135G7 2.4 GHz, 512 GB SSD, 8 GB RAM, pantalla 14\", Wi-Fi, Gigabit, Intel Iris Xe, webcam, HDMI, lector SD, Bluetooth.",
    precioLista: 1388000,
    unidades: 23,
  },
  {
    id: "dell-latitude-5420",
    tipo: "portatil",
    marca: "Dell",
    modelo: "Latitude 5420",
    specs: ["Core i5-1145G7", "16 GB RAM", "256 GB SSD", '14"'],
    detalle:
      "Core i5-1145G7 2.6 GHz, 256 GB SSD, 16 GB RAM, pantalla 14\", Wi-Fi, Gigabit, Intel Iris Xe, webcam, teclado retroiluminado, WWAN, MicroSD, Bluetooth.",
    precioLista: 1388000,
    unidades: 186,
  },
  {
    id: "dell-latitude-5520",
    tipo: "portatil",
    marca: "Dell",
    modelo: "Latitude 5520",
    specs: ["Core i5-1135G7", "16 GB RAM", "512 GB SSD", '15.6"'],
    detalle:
      "Core i5-1135G7 2.4 GHz, 512 GB SSD, 16 GB RAM, pantalla 15.6\", Wi-Fi, Gigabit, Intel Iris Xe, webcam, teclado retroiluminado.",
    precioLista: 1388000,
    unidades: 136,
  },
  {
    id: "dell-latitude-7320",
    tipo: "portatil",
    marca: "Dell",
    modelo: "Latitude 7320",
    specs: ["Core i5-1145G7", "16 GB RAM", "256 GB SSD", '13.3"'],
    detalle:
      "Notebook Core i5-1145G7 2.6 GHz, 256 GB SSD, 16 GB RAM, pantalla 13.3\", Wi-Fi, Gigabit, Intel Iris Xe.",
    precioLista: 1388000,
    unidades: 7,
  },
  {
    id: "dell-latitude-7420",
    tipo: "portatil",
    marca: "Dell",
    modelo: "Latitude 7420 Ultrabook",
    specs: ["Core i7-1165G7", "16 GB RAM", "1 TB SSD", '14"'],
    detalle:
      "Ultrabook Core i7-1165G7 2.8 GHz, 1 TB SSD, 16 GB RAM, pantalla 14\", Wi-Fi, Intel Iris Xe, webcam, teclado retroiluminado, Bluetooth.",
    precioLista: 1388000,
    unidades: 13,
  },
  {
    id: "lenovo-thinkpad-l14",
    tipo: "portatil",
    marca: "Lenovo",
    modelo: "ThinkPad L14 Gen 1",
    specs: ["Core i5-10310U", "16 GB RAM", "512 GB SSD", '14" 1920x1200'],
    detalle:
      "Core i5-10310U 1.7 GHz, 512 GB SSD, 16 GB RAM, pantalla 14\" 1920x1200, Wi-Fi, Gigabit, Intel UHD, webcam, lector SD, Bluetooth, lector de huella, HDMI.",
    precioLista: 1388000,
    unidades: 104,
  },
  {
    id: "lenovo-thinkpad-l15",
    tipo: "portatil",
    marca: "Lenovo",
    modelo: "ThinkPad L15 Gen 1",
    specs: ["Core i7-10510U", "8 GB RAM", "512 GB SSD", '15.6" FHD'],
    detalle:
      "Core i7-10510U 1.8 GHz, 512 GB SSD, 8 GB RAM, pantalla 15.6\" 1920x1080, Wi-Fi, Gigabit, Intel UHD, webcam, lector SD, Bluetooth, WWAN, lector de huella, HDMI.",
    precioLista: 1500000,
    unidades: 8,
  },
  {
    id: "lenovo-thinkpad-t14-i5",
    tipo: "portatil",
    marca: "Lenovo",
    modelo: "ThinkPad T14 Gen 1",
    specs: ["Core i5-10210U", "16 GB RAM", "512 GB SSD", '14"'],
    detalle:
      "Core i5-10210U 1.6 GHz, 512 GB SSD, 16 GB RAM, pantalla 14\" 1366x768, Wi-Fi, Gigabit, Intel UHD, webcam, lector SD, lector de huella, Bluetooth, HDMI.",
    precioLista: 1400000,
    unidades: 4,
    nota: "Bateria al 78% de salud",
  },
  {
    id: "lenovo-thinkpad-t14-i7",
    tipo: "portatil",
    marca: "Lenovo",
    modelo: "ThinkPad T14 Gen 1",
    specs: ["Core i7-10610U", "8 GB RAM", "1 TB SSD", '14" FHD'],
    detalle:
      "Core i7-10610U 1.8 GHz, 1 TB SSD, 8 GB RAM, pantalla 14\" 1920x1080, Wi-Fi, Gigabit, Intel UHD, webcam, teclado retroiluminado, lector SD, Bluetooth, WWAN, lector de huella, HDMI.",
    precioLista: 1500000,
    unidades: 27,
  },

  // ────────────────────────────── CPU / ESCRITORIO ──────────────────────────
  {
    id: "lenovo-thinkcentre-m75q",
    tipo: "cpu",
    marca: "Lenovo",
    modelo: "ThinkCentre M75q Tiny",
    specs: ["Ryzen 5 Pro 3400GE", "8 GB RAM", "500 GB", "Radeon Vega"],
    detalle:
      "Ryzen 5 Pro 3400GE 3.3 GHz, 500 GB de almacenamiento, 8 GB RAM, gráfica AMD Radeon Vega, HDMI, adaptador AC.",
    precioLista: 1000000,
    unidades: 23,
  },
  {
    id: "dell-optiplex-3070",
    tipo: "cpu",
    marca: "Dell",
    modelo: "OptiPlex 3070 SFF",
    specs: ["Core i5-9500", "16 GB RAM", "1 TB HDD"],
    detalle: "Formato SFF, Intel Core i5-9500 3.00 GHz, 16 GB RAM, disco duro 1 TB.",
    precioLista: 1223000,
    unidades: 55,
  },
  {
    id: "dell-optiplex-3080",
    tipo: "cpu",
    marca: "Dell",
    modelo: "OptiPlex 3080 MFF",
    specs: ["Core i5-10500T", "16 GB RAM", "128 GB SSD + 1 TB"],
    detalle:
      "Formato micro (MFF), Core i5-10500T 2.3 GHz, 128 GB SSD mas 1 TB, 16 GB RAM, Intel UHD 630, adaptador AC.",
    precioLista: 1100000,
    unidades: 1,
  },
  {
    id: "lenovo-thinkcentre-m920q",
    tipo: "cpu",
    marca: "Lenovo",
    modelo: "ThinkCentre M920q Mini",
    specs: ["Core i5-8500T", "8 GB RAM", "256 GB SSD"],
    detalle: "Formato mini, Intel Core i5-8500T 2.10 GHz, 8 GB RAM, 256 GB SSD.",
    precioLista: 780000,
    unidades: 56,
  },
  {
    id: "lenovo-thinkcentre-m920s",
    tipo: "cpu",
    marca: "Lenovo",
    modelo: "ThinkCentre M920s SFF",
    specs: ["Core i5-8500T", "8 GB RAM", "256 GB SSD"],
    detalle: "Formato SFF, Intel Core i5-8500T 2.10 GHz, 8 GB RAM, 256 GB SSD.",
    precioLista: 723000,
    unidades: null,
  },
  {
    id: "hp-prodesk-400-g5",
    tipo: "cpu",
    marca: "HP",
    modelo: "ProDesk 400 G5",
    specs: ["Core i5-8500T", "8 GB RAM", "256 GB SSD"],
    detalle: "Intel Core i5-8500T 2.10 GHz, 8 GB RAM, 256 GB SSD.",
    precioLista: 723000,
    unidades: null,
  },
  {
    id: "dell-optiplex-3060",
    tipo: "cpu",
    marca: "Dell",
    modelo: "OptiPlex 3060",
    specs: ["8 GB RAM", "256 GB SSD"],
    detalle: "Dell OptiPlex 3060 con 8 GB RAM y 256 GB SSD.",
    precioLista: 723000,
    unidades: null,
  },
  {
    id: "lenovo-v50s",
    tipo: "cpu",
    marca: "Lenovo",
    modelo: "V50s-07IMB",
    specs: ["Core i3-10100", "8 GB RAM", "1 TB"],
    detalle: "Lenovo V50s-07IMB, Intel Core i3-10100 3.60 GHz, 8 GB RAM, 1 TB de almacenamiento.",
    precioLista: 670000,
    unidades: 600,
  },

  // ──────────────────────────────── TODO EN UNO ─────────────────────────────
  {
    id: "lenovo-v30a-22iil",
    tipo: "aio",
    marca: "Lenovo",
    modelo: "All in One V30a-22IIL",
    specs: ["Core i3-1005G1", "8 GB RAM", "1 TB", '21.5" FHD'],
    detalle:
      "Core i3-1005G1 1.2 GHz, 1 TB, 8 GB RAM, DVD-R, pantalla 21.5\" 1920x1080, Wi-Fi, Gigabit, Intel Iris Plus, Bluetooth, webcam, HDMI, adaptador AC.",
    precioLista: 912000,
    unidades: 53,
  },
  {
    id: "hp-proone-400-g6",
    tipo: "aio",
    marca: "HP",
    modelo: "ProOne 400 G6",
    specs: ["Core i3-10500", "8 GB RAM", "512 GB SSD", '24" FHD'],
    detalle:
      "Core i3-10500 3.1 GHz, 512 GB SSD, 8 GB RAM, pantalla 24\" 1920x1080, Wi-Fi, Gigabit, Intel UHD 630, webcam, HDMI, Bluetooth, adaptador AC.",
    precioLista: 950000,
    unidades: 72,
  },
  {
    id: "hp-205-g3-aio",
    tipo: "aio",
    marca: "HP",
    modelo: "205 G3 AIO Business PC",
    specs: ["AMD E2-9000", "4 GB RAM", "500 GB", '19.5"'],
    detalle:
      "AMD E2-9000 1.8 GHz, 500 GB, 4 GB RAM, DVD-R, pantalla 19.5\", gráfica AMD Radeon, webcam. Sin Wi-Fi ni tarjeta de red.",
    precioLista: 400000,
    unidades: 8,
  },
  {
    id: "dell-optiplex-7480-aio",
    tipo: "aio",
    marca: "Dell",
    modelo: "OptiPlex 7480 All in One",
    specs: ["Core i7-10700", "8 GB RAM", "256 GB SSD", '23.8" FHD'],
    detalle:
      "Core i7-10700 2.9 GHz, 256 GB SSD, 8 GB RAM, pantalla 23.8\" 1920x1080, Intel UHD 630, webcam, Bluetooth.",
    precioLista: 1500000,
    unidades: 10,
  },
]

// ─────────────────────────────────── Helpers ────────────────────────────────

export function precioPublico(equipo: Equipo): number {
  return Math.round((equipo.precioLista * MARGEN_PUBLICO) / 1000) * 1000
}

export function formatCOP(valor: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(valor)
}

/** Precio mas bajo del catalogo, para el "desde" del hero */
export const precioDesde = Math.min(...equipos.map(precioPublico))

/** Unidades totales reportadas en el listado */
export const unidadesTotales = equipos.reduce((total, e) => total + (e.unidades ?? 0), 0)

/** Referencias distintas disponibles */
export const referenciasTotales = equipos.length

export const conteoPorTipo: Record<EquipoTipo, number> = {
  portatil: equipos.filter((e) => e.tipo === "portatil").length,
  cpu: equipos.filter((e) => e.tipo === "cpu").length,
  aio: equipos.filter((e) => e.tipo === "aio").length,
}

/** Badge derivado del stock real: nunca inventamos etiquetas comerciales */
export function badgeDisponibilidad(equipo: Equipo): string | null {
  if (equipo.unidades === null) return null
  if (equipo.unidades <= 10) return `Últimas ${equipo.unidades} unidades`
  if (equipo.unidades >= 100) return "Alta disponibilidad"
  return null
}

export function mensajeWhatsApp(equipo?: Equipo): string {
  if (!equipo) {
    return "Hola, vi la página de equipos reacondicionados de RentPower y quiero conocer la disponibilidad."
  }
  return `Hola, me interesa el ${equipo.marca} ${equipo.modelo} (${equipo.specs.join(
    ", "
  )}) que vi en la página de RentPower. Quiero confirmar disponibilidad y precio.`
}

export function linkWhatsApp(equipo?: Equipo): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensajeWhatsApp(equipo))}`
}
