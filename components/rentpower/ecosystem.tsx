"use client"

import { BookOpen, Cloud, Monitor, Wifi } from "lucide-react"

const units = [
  {
    icon: Monitor,
    name: "DaaS y reacondicionados",
    description: "Equipos como servicio, renovacion de flotas, garantias y logistica para proyectos de volumen.",
    color: "from-blue-500 to-cyan-500",
    focus: "Ideal para cuentas con flotas, renovacion periodica o necesidad de convertir CAPEX en servicio.",
    features: ["DaaS", "Renovacion", "Garantia", "Logistica"],
  },
  {
    icon: BookOpen,
    name: "Digital Learning",
    description: "Plataformas y contenidos para proyectos de aprendizaje corporativo o educativo.",
    color: "from-purple-500 to-pink-500",
    focus: "Complementa proyectos de adopcion tecnologica, capacitacion y programas de aprendizaje continuo.",
    features: ["LMS", "Capacitacion", "Certificaciones", "Analytics"],
  },
  {
    icon: Wifi,
    name: "Networking",
    description: "Conectividad, cloud networking y arquitectura para entornos distribuidos.",
    color: "from-amber-500 to-orange-500",
    focus: "Para integradores con clientes multi-sede, operaciones distribuidas o necesidades de conectividad critica.",
    features: ["Cloud networking", "SD-WAN", "WiFi", "NOC"],
  },
  {
    icon: Cloud,
    name: "Cloud y Cyber",
    description: "Cloud gestionado, endpoint, MDM, XDR, backup, compliance y continuidad.",
    color: "from-emerald-500 to-teal-500",
    focus: "Agrupa servicios recurrentes de proteccion, administracion y continuidad para ampliar la cuenta.",
    features: ["Cloud", "Cyber", "MDM", "Backup"],
  },
]

export function RentPowerEcosystem() {
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

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {units.map((unit) => (
            <article
              key={unit.name}
              className="group relative min-h-[330px] p-5 rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div className={`absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gradient-to-br ${unit.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`} />
              <div className="relative flex h-full flex-col">
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
                <p className="mt-4 text-xs text-white/50 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                  {unit.focus}
                </p>
                <div className="mt-auto pt-5 flex flex-wrap gap-2">
                  {unit.features.map((feature) => (
                    <span key={feature} className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] text-white/55" style={{ fontFamily: "var(--font-inter)" }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
