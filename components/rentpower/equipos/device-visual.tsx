import Image from "next/image"
import { imagenPorTipo, TIPO_LABEL, type Equipo } from "@/lib/rentpower-inventory"

/**
 * Visual del equipo.
 *
 * Por ahora se usa una imagen de referencia por categoria (portatil / CPU / todo en uno),
 * segun lo acordado con RentPower mientras llegan las fotos reales del inventario.
 * Cuando lleguen: basta con agregar `imagen` a la referencia en lib/rentpower-inventory.ts
 * y esa foto reemplaza a la de categoria automaticamente.
 */
export function DeviceVisual({
  equipo,
  priority = false,
  className = "",
}: {
  equipo: Equipo
  priority?: boolean
  className?: string
}) {
  const propia = Boolean(equipo.imagen)
  const src = equipo.imagen ?? imagenPorTipo[equipo.tipo]
  const alt = propia
    ? `${equipo.marca} ${equipo.modelo} reacondicionado`
    : `${TIPO_LABEL[equipo.tipo]} reacondicionado — imagen de referencia`

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(124,92,255,0.16),transparent_70%)]" />
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={750}
        priority={priority}
        className="relative w-full h-full object-contain p-4 sm:p-5 transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <span className="absolute bottom-3 right-4 text-[10px] uppercase tracking-[0.18em] text-white/30">
        {equipo.marca}
      </span>
    </div>
  )
}
