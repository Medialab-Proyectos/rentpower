"use client"

import { useState } from "react"
import { BookOpen, Cloud, Monitor, Wifi } from "lucide-react"
import { cn } from "@/lib/utils"

const units = [
  {
    icon: Monitor,
    name: "DaaS y reacondicionados",
    description: "Equipos como servicio, renovacion de flotas, garantias y logistica para proyectos de volumen.",
    color: "from-blue-500 to-cyan-500",
    features: ["DaaS", "Renovacion", "Garantia", "Logistica"],
  },
  {
    icon: BookOpen,
    name: "Digital Learning",
    description: "Plataformas y contenidos para proyectos de aprendizaje corporativo o educativo.",
    color: "from-purple-500 to-pink-500",
    features: ["LMS", "Capacitacion", "Certificaciones", "Analytics"],
  },
  {
    icon: Wifi,
    name: "Networking",
    description: "Conectividad, cloud networking y arquitectura para entornos distribuidos.",
    color: "from-amber-500 to-orange-500",
    features: ["Cloud networking", "SD-WAN", "WiFi", "NOC"],
  },
  {
    icon: Cloud,
    name: "Cloud y Cyber",
    description: "Cloud gestionado, endpoint, MDM, XDR, backup, compliance y continuidad.",
    color: "from-emerald-500 to-teal-500",
    features: ["Cloud", "Cyber", "MDM", "Backup"],
  },
]

export function RentPowerEcosystem() {
  const [active, setActive] = useState(0)
  const current = units[active]

  return (
    <section id="ecosistema" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0a0f20] to-[#0a0e1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs text-cyan-400/80 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Unidades de negocio
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Un ecosistema para que el reseller{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              venda mas valor
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
            RentPower organiza el portafolio en unidades complementarias para facilitar la venta cruzada y la expansion de cuentas.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-stretch">
          <div className="grid sm:grid-cols-2 gap-4">
            {units.map((unit, i) => (
              <button
                key={unit.name}
                onClick={() => setActive(i)}
                className={cn(
                  "p-5 rounded-2xl border text-left transition-all duration-300",
                  active === i ? "border-white/20 bg-white/[0.06]" : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                )}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${unit.color} p-[1px] mb-4`}>
                  <div className="w-full h-full rounded-xl bg-[#0a0e1a] flex items-center justify-center">
                    <unit.icon className="w-5 h-5 text-white/80" />
                  </div>
                </div>
                <h3 className="font-semibold text-white/85 mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {unit.name}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                  {unit.description}
                </p>
              </button>
            ))}
          </div>

          <div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.025] overflow-hidden">
            <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${current.color} rounded-full opacity-10 blur-3xl`} />
            <div className="relative">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${current.color} p-[1px] mb-5`}>
                <div className="w-full h-full rounded-2xl bg-[#0a0e1a] flex items-center justify-center">
                  <current.icon className="w-6 h-6 text-white/80" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {current.name}
              </h3>
              <p className="text-white/50 leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter)" }}>
                {current.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {current.features.map((feature) => (
                  <span key={feature} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-white/55" style={{ fontFamily: "var(--font-inter)" }}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
