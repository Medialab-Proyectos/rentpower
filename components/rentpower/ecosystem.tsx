"use client"

import { useState } from "react"
import Image from "next/image"
import { Monitor, BookOpen, Wifi, Cloud } from "lucide-react"
import { cn } from "@/lib/utils"

const units = [
  {
    icon: Monitor,
    name: "Reacondicionados",
    description: "Hardware certificado como servicio. DaaS con garantía y ciclo de renovación.",
    color: "from-blue-500 to-cyan-500",
    features: ["DaaS", "Renovación cíclica", "Garantía extendida", "Logística incluida"],
  },
  {
    icon: BookOpen,
    name: "Digital Learning",
    description: "Plataformas de aprendizaje y capacitación enterprise. LMS as a Service.",
    color: "from-purple-500 to-pink-500",
    features: ["LMS Enterprise", "Contenido on-demand", "Certificaciones", "Analytics"],
  },
  {
    icon: Wifi,
    name: "Networking",
    description: "Infraestructura de red enterprise. SD-WAN, WiFi 6/7, switching inteligente.",
    color: "from-amber-500 to-orange-500",
    features: ["SD-WAN", "WiFi Enterprise", "Switching", "NOC incluido"],
  },
  {
    icon: Cloud,
    name: "Cloud & Cyber",
    description: "Ciberseguridad y cloud gestionado. SOC, MDM, XDR, backup y compliance.",
    color: "from-emerald-500 to-teal-500",
    features: ["SOC/XDR", "MDM", "Cloud gestionado", "Compliance"],
  },
]

export function RentPowerEcosystem() {
  const [active, setActive] = useState<number | null>(null)
  const current = active !== null ? units[active] : null

  return (
    <section id="ecosistema" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0a0f20] to-[#0a0e1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs text-cyan-400/80 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Ecosistema conectado
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-[-0.03em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            No son productos separados.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Es un ecosistema integrado.
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
            Cuatro unidades de negocio que se potencian entre sí. Haz clic en cada una para explorar.
          </p>
        </div>

        {/* Orbit visualization with center info */}
        <div className="relative max-w-lg mx-auto aspect-square mb-16 hidden sm:block">
          {/* Orbit rings */}
          <div className="absolute inset-8 rounded-full border border-white/[0.06]" />
          <div className="absolute inset-16 rounded-full border border-white/[0.04]" />
          <div className="absolute inset-24 rounded-full border border-dashed border-white/[0.03]" />

          {/* Center content - shows selected unit info */}
          <div className="absolute inset-24 sm:inset-28 rounded-full bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] backdrop-blur-sm flex items-center justify-center p-4">
            {current ? (
              <div className="text-center animate-fade-in" key={current.name}>
                <div className={`w-10 h-10 mx-auto rounded-xl bg-gradient-to-br ${current.color} p-[1px] mb-3`}>
                  <div className="w-full h-full rounded-xl bg-[#0a0e1a] flex items-center justify-center">
                    <current.icon className="w-5 h-5 text-white/80" />
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white/90 mb-1" style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}>
                  {current.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-white/50 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                  {current.description}
                </p>
                <div className="mt-2 flex flex-wrap justify-center gap-1">
                  {current.features.map((f) => (
                    <span key={f} className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="font-bold text-base sm:text-lg text-white/80" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  Rent<span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Power</span>
                </div>
                <p className="text-[10px] sm:text-xs text-white/30 mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                  Toca una unidad
                </p>
              </div>
            )}
          </div>

          {/* Orbit nodes - positioned at 4 corners */}
          {units.map((unit, i) => {
            const angle = (i * 90 - 90) * (Math.PI / 180)
            const radius = 44
            const x = 50 + radius * Math.cos(angle)
            const y = 50 + radius * Math.sin(angle)
            const isActive = active === i

            return (
              <button
                key={unit.name}
                onClick={() => setActive(active === i ? null : i)}
                className="absolute group cursor-pointer"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                aria-label={`Ver detalles de ${unit.name}`}
              >
                {/* Pulse ring when active */}
                {isActive && (
                  <div className={`absolute -inset-3 rounded-2xl bg-gradient-to-br ${unit.color} opacity-20 animate-pulse`} />
                )}

                {/* Connection line to center */}
                <svg
                  className="absolute pointer-events-none"
                  style={{
                    width: "200px",
                    height: "200px",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: -1,
                  }}
                >
                  <line
                    x1="100" y1="100"
                    x2={100 + (50 - x) * 2.5}
                    y2={100 + (50 - y) * 2.5}
                    stroke={isActive ? "rgba(99,200,255,0.3)" : "rgba(99,180,255,0.08)"}
                    strokeWidth="1"
                    strokeDasharray={isActive ? "0" : "4 4"}
                  />
                </svg>

                {/* Node */}
                <div className={cn(
                  "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br p-[1px] transition-all duration-300",
                  unit.color,
                  isActive ? "scale-110 shadow-lg shadow-blue-500/20" : "group-hover:scale-105"
                )}>
                  <div className={cn(
                    "w-full h-full rounded-2xl flex items-center justify-center transition-colors",
                    isActive ? "bg-[#0a0e1a]/80" : "bg-[#0a0e1a]"
                  )}>
                    <unit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
                  </div>
                </div>

                {/* Label below node */}
                <div className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-center transition-all",
                  isActive ? "opacity-100" : "opacity-60"
                )}>
                  <span className="text-[10px] sm:text-xs font-semibold text-white/80" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {unit.name}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Card grid for all viewports (was mobile only) */}
        <div className="sm:hidden grid grid-cols-2 gap-3 mt-8">
          {units.map((unit, i) => (
            <button
              key={unit.name}
              onClick={() => setActive(active === i ? null : i)}
              className={cn(
                "p-4 rounded-xl border text-left transition-all duration-300",
                active === i
                  ? "border-white/20 bg-white/[0.05]"
                  : "border-white/5 bg-white/[0.02]"
              )}
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${unit.color} p-[1px] mb-2`}>
                <div className="w-full h-full rounded-lg bg-[#0a0e1a] flex items-center justify-center">
                  <unit.icon className="w-4 h-4 text-white/80" />
                </div>
              </div>
              <span className="text-xs font-semibold text-white/80" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {unit.name}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile detail display */}
        {current && (
          <div className="sm:hidden mt-4 p-5 rounded-xl border border-white/10 bg-white/[0.03] animate-fade-in">
            <h3 className="font-bold text-white/90 mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              {current.name}
            </h3>
            <p className="text-xs text-white/50 leading-relaxed mb-3" style={{ fontFamily: "var(--font-inter)" }}>
              {current.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {current.features.map((f) => (
                <span key={f} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
                  {f}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
