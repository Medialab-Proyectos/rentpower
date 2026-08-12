"use client"

import { useMemo, useState } from "react"
import {
  badgeDisponibilidad,
  conteoPorTipo,
  equipos,
  formatCOP,
  NOTA_PRECIOS,
  precioPublico,
  TIPO_LABEL,
  type Equipo,
  type EquipoTipo,
} from "@/lib/rentpower-inventory"
import { DeviceVisual } from "./device-visual"
import { WhatsAppCTA } from "./whatsapp-cta"
import { trackFiltro } from "./track"
import { cn } from "@/lib/utils"

type Filtro = "todos" | EquipoTipo

const filtros: { id: Filtro; label: string }[] = [
  { id: "todos", label: `Todos (${equipos.length})` },
  { id: "portatil", label: `Portátiles (${conteoPorTipo.portatil})` },
  { id: "cpu", label: `CPU / escritorio (${conteoPorTipo.cpu})` },
  { id: "aio", label: `Todo en uno (${conteoPorTipo.aio})` },
]

function EquipoCard({ equipo }: { equipo: Equipo }) {
  const badge = badgeDisponibilidad(equipo)
  const escaso = equipo.unidades !== null && equipo.unidades <= 10

  return (
    <article className="group flex flex-col rounded-2xl border border-white/[0.08] bg-[#0b0d18] overflow-hidden transition-all duration-300 hover:border-[#7c5cff]/35 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#7c5cff]/10">
      <div className="relative aspect-[4/3] bg-[#0f1120] border-b border-white/[0.06]">
        <DeviceVisual equipo={equipo} />
        <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-[#07080f]/85 border border-white/10 text-[10px] uppercase tracking-[0.14em] text-white/65">
          Reacondicionado
        </span>
        {badge && (
          <span
            className={cn(
              "absolute top-3 right-3 px-2 py-1 rounded-md text-[10px] uppercase tracking-[0.1em] border",
              escaso
                ? "bg-[#07080f]/85 border-white/15 text-white/70"
                : "bg-[#7c5cff]/18 border-[#7c5cff]/35 text-[#c4b5fd]"
            )}
          >
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="text-[11px] uppercase tracking-[0.16em] text-white/50 mb-2">
          {TIPO_LABEL[equipo.tipo]}
        </div>
        <h3
          className="text-lg sm:text-xl font-semibold text-white leading-tight mb-3"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {equipo.marca} {equipo.modelo}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {equipo.specs.map((spec) => (
            <span
              key={spec}
              className="px-2.5 py-1 rounded-md border border-white/[0.08] bg-white/[0.03] text-[12px] text-white/65"
            >
              {spec}
            </span>
          ))}
        </div>

        {equipo.nota && (
          <p
            className="text-[11px] text-amber-200/60 mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {equipo.nota}
          </p>
        )}

        <details className="group/ficha mb-4 mt-auto">
          <summary
            className="cursor-pointer list-none text-[12px] font-medium text-white/50 hover:text-white/80 transition-colors"
          >
            <span className="group-open/ficha:hidden">+ Ficha técnica</span>
            <span className="hidden group-open/ficha:inline">- Ocultar ficha</span>
          </summary>
          <p
            className="mt-2 text-[12px] leading-relaxed text-white/45"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {equipo.detalle}
          </p>
        </details>

        <div className="pt-4 border-t border-white/[0.06]">
          <div className="flex items-end justify-between gap-3 mb-4">
            <div>
              <div
                className="text-2xl sm:text-[1.7rem] font-bold text-white leading-none"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {formatCOP(precioPublico(equipo))}
              </div>
              <div className="text-[12px] text-white/55 mt-1.5">
                {equipo.unidades !== null
                  ? `${equipo.unidades} ${equipo.unidades === 1 ? "unidad" : "unidades"} en stock`
                  : "Consultar stock"}
              </div>
            </div>
          </div>

          <WhatsAppCTA
            origen="tarjeta_producto"
            equipo={equipo}
            ariaLabel={`Consultar por WhatsApp el ${equipo.marca} ${equipo.modelo}`}
            className="w-full py-3 rounded-xl font-semibold text-[15px] bg-gradient-to-r from-[#7c5cff] to-[#4f7cff] hover:shadow-lg hover:shadow-[#7c5cff]/25"
          >
            <span style={{ fontFamily: "var(--font-space-grotesk)" }}>Quiero este equipo</span>
          </WhatsAppCTA>
        </div>
      </div>
    </article>
  )
}

export function EquiposCatalogo() {
  const [filtro, setFiltro] = useState<Filtro>("todos")

  const visibles = useMemo(
    () => (filtro === "todos" ? equipos : equipos.filter((e) => e.tipo === filtro)),
    [filtro]
  )

  return (
    <section id="catalogo" className="relative py-20 sm:py-28 scroll-mt-16 bg-[#07080f]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-medium text-white/40">01</span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#a78bfa]">
                Catálogo
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-[1.05] tracking-[-0.02em] mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Encuentra tu próximo equipo
            </h2>
            <p
              className="max-w-lg text-base text-white/50 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Opciones para trabajar, estudiar o actualizar tu tecnología por mucho menos.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar equipos por tipo">
            {filtros.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setFiltro(f.id)
                  trackFiltro(f.id)
                }}
                aria-pressed={filtro === f.id}
                className={cn(
                  "px-4 py-2.5 rounded-full text-sm font-medium border transition-all",
                  filtro === f.id
                    ? "bg-[#7c5cff] border-[#7c5cff] text-white shadow-lg shadow-[#7c5cff]/25"
                    : "bg-white/[0.03] border-white/10 text-white/60 hover:text-white hover:border-white/25"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {visibles.map((equipo) => (
            <EquipoCard key={equipo.id} equipo={equipo} />
          ))}
        </div>

        <p
          className="mt-10 text-center text-[12px] text-white/45 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Las fotos son imágenes de referencia de cada categoría; el equipo entregado
          corresponde a la referencia y las especificaciones publicadas. {NOTA_PRECIOS}
        </p>
      </div>
    </section>
  )
}
