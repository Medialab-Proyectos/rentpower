"use client"

import { Handshake, RefreshCw, Shield, TrendingUp } from "lucide-react"

const pillars = [
  {
    icon: TrendingUp,
    title: "Maximizacion de rentabilidad",
    headline: "Portafolio para vender con mejor margen",
    description:
      "RentPower estructura ofertas, bundles y modelos comerciales para que su canal compita con una propuesta mas solida.",
    benefits: ["Modelos OPEX", "Margen protegido", "Cross-selling", "Pricing consultivo"],
    gradient: "from-emerald-500 to-cyan-500",
  },
  {
    icon: RefreshCw,
    title: "Ecosistema de negocios recurrentes",
    headline: "Mas que productos sueltos",
    description:
      "DaaS, SaaS, cloud, networking, ciberseguridad y digital learning conectados desde un solo mayorista.",
    benefits: ["Contratos mensuales", "Renovacion ciclica", "Facturacion consolidada", "Expansion de cuenta"],
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: Handshake,
    title: "Ventaja competitiva por sinergia",
    headline: "Marcas, equipo y acompanamiento",
    description:
      "Su canal llega al cliente final con respaldo de preventa, demos, POCs y conocimiento especializado por unidad de negocio.",
    benefits: ["Preventa experta", "Demos y POCs", "Material comercial", "Onboarding"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Blindaje y soporte al canal",
    headline: "Un proceso claro para proteger la oportunidad",
    description:
      "Codificacion, validacion, registro de oportunidades y acompanamiento para que el reseller trabaje con reglas claras.",
    benefits: ["Registro de deals", "Alta de partner", "Soporte L1-L3", "Escalamiento"],
    gradient: "from-amber-500 to-orange-500",
  },
]

export function RentPowerValue() {
  return (
    <section id="pilares" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0a1420] to-[#0a0e1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs text-emerald-400/80 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Pilares RentPower
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            La propuesta de valor para{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              su canal
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
            RentPower opera como mayorista: no vende al cliente final, codifica resellers y les entrega el respaldo para revender soluciones tecnologicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-500 overflow-hidden">
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${pillar.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} p-[1px] mb-5`}>
                <div className="w-full h-full rounded-xl bg-[#0a0e1a] flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 text-white/80" />
                </div>
              </div>

              <p className="text-xs uppercase tracking-widest text-white/30 mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                {pillar.title}
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {pillar.headline}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter)" }}>
                {pillar.description}
              </p>

              <div className="grid grid-cols-2 gap-2">
                {pillar.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-xs text-white/50" style={{ fontFamily: "var(--font-inter)" }}>
                    <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${pillar.gradient}`} />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
