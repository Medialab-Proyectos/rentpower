"use client"

import { TrendingUp, Shield, RefreshCw, Zap } from "lucide-react"

const propositions = [
  {
    icon: TrendingUp,
    title: "Maximización de rentabilidad",
    headline: "De transaccional a recurrente",
    description:
      "Transforma cada venta en un contrato mensual. Modelos DaaS, SaaS y managed services que generan ingreso predecible mes a mes.",
    benefits: [
      "Contratos de 24-48 meses",
      "Margen protegido",
      "Revenue recurrente garantizado",
      "Upselling integrado",
    ],
    gradient: "from-emerald-500 to-cyan-500",
    glowColor: "emerald",
  },
  {
    icon: Shield,
    title: "Blindaje y protección de canal",
    headline: "Tu deal, tu cliente, tu margen",
    description:
      "Registro de oportunidades, protección territorial, y soporte consultivo exclusivo. Nadie más toca tus deals.",
    benefits: [
      "Registro de oportunidades",
      "Exclusividad territorial",
      "Soporte preventa dedicado",
      "Capacitación técnica incluida",
    ],
    gradient: "from-blue-500 to-purple-500",
    glowColor: "blue",
  },
  {
    icon: RefreshCw,
    title: "Ecosistemas recurrentes",
    headline: "Un proveedor. Todo el stack.",
    description:
      "Cloud, networking, seguridad, DaaS y digital learning. Todo desde un solo punto de contacto, un solo contrato, un solo ciclo de pago.",
    benefits: [
      "Stack unificado",
      "Facturación consolidada",
      "Soporte centralizado",
      "Escalamiento simplificado",
    ],
    gradient: "from-purple-500 to-pink-500",
    glowColor: "purple",
  },
  {
    icon: Zap,
    title: "Ventaja competitiva real",
    headline: "Vendé lo que otros no pueden",
    description:
      "Acceso a soluciones exclusivas, preventa técnica, demos y POCs que tus competidores no tienen. Diferenciá tu propuesta en cada licitación.",
    benefits: [
      "Soluciones exclusivas LATAM",
      "POC y demos incluidos",
      "Material de preventa",
      "Certificaciones aceleradas",
    ],
    gradient: "from-amber-500 to-orange-500",
    glowColor: "amber",
  },
]

export function RentPowerValue() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0a1420] to-[#0a0e1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs text-emerald-400/80 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Propuesta de valor
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-[-0.03em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Por qué los canales eligen{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              RentPower
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
            No somos un catálogo. Somos tu partner estratégico para escalar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {propositions.map((prop) => (
            <div
              key={prop.title}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${prop.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`}
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prop.gradient} p-[1px] mb-5`}
              >
                <div className="w-full h-full rounded-xl bg-[#0a0e1a] flex items-center justify-center">
                  <prop.icon className="w-5 h-5 text-white/80" />
                </div>
              </div>

              {/* Content */}
              <p className="text-xs uppercase tracking-widest text-white/30 mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                {prop.title}
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 tracking-[-0.02em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {prop.headline}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
                {prop.description}
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-2">
                {prop.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-xs text-white/50"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${prop.gradient}`} />
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
