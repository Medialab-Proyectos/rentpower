import Image from "next/image"
import type { Equipo, EquipoTipo } from "@/lib/rentpower-inventory"

/**
 * Visual del equipo.
 * Si RentPower entrega la foto, basta con agregar `imagen` en lib/rentpower-inventory.ts
 * y esta se usa automaticamente. Mientras tanto se muestra una ilustracion de marca
 * segun el tipo de equipo (nunca un placeholder roto).
 */

function LaptopArt() {
  return (
    <svg viewBox="0 0 200 130" fill="none" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="rp-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect x="38" y="22" width="124" height="76" rx="6" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
      <rect x="45" y="29" width="110" height="62" rx="3" fill="url(#rp-screen)" />
      <path d="M18 104h164l-8 10H26l-8-10Z" stroke="rgba(255,255,255,0.28)" strokeWidth="2" strokeLinejoin="round" />
      <line x1="84" y1="109" x2="116" y2="109" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function DesktopArt() {
  return (
    <svg viewBox="0 0 200 130" fill="none" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="rp-tower" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <rect x="56" y="18" width="88" height="94" rx="8" stroke="rgba(255,255,255,0.28)" strokeWidth="2" fill="url(#rp-tower)" />
      <circle cx="76" cy="36" r="4" fill="rgba(124,92,255,0.9)" />
      <line x1="90" y1="36" x2="126" y2="36" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
      <rect x="72" y="54" width="56" height="4" rx="2" fill="rgba(255,255,255,0.16)" />
      <rect x="72" y="66" width="40" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="72" y="86" width="56" height="12" rx="3" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
    </svg>
  )
}

function AioArt() {
  return (
    <svg viewBox="0 0 200 130" fill="none" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="rp-aio" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <rect x="26" y="16" width="148" height="86" rx="7" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
      <rect x="33" y="23" width="134" height="66" rx="3" fill="url(#rp-aio)" />
      <path d="M88 102h24v10H88z" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
      <line x1="66" y1="118" x2="134" y2="118" stroke="rgba(255,255,255,0.28)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

const art: Record<EquipoTipo, () => React.JSX.Element> = {
  portatil: LaptopArt,
  cpu: DesktopArt,
  aio: AioArt,
}

export function DeviceVisual({ equipo, className = "" }: { equipo: Equipo; className?: string }) {
  if (equipo.imagen) {
    return (
      <Image
        src={equipo.imagen}
        alt={`${equipo.marca} ${equipo.modelo} reacondicionado`}
        width={520}
        height={360}
        className={`w-full h-full object-cover ${className}`}
      />
    )
  }

  const Art = art[equipo.tipo]

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(124,92,255,0.18),transparent_70%)]" />
      <div className="relative w-[62%] max-w-[210px] opacity-90 transition-transform duration-500 group-hover:scale-[1.04]">
        <Art />
      </div>
      <span className="absolute bottom-3 right-4 text-[9px] uppercase tracking-[0.2em] text-white/25">
        {equipo.marca}
      </span>
    </div>
  )
}
