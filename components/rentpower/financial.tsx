"use client"

import { TrendingUp, DollarSign, BarChart3, RefreshCw, Headphones } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Ingresos recurrentes",
    value: "MRR",
    description: "Cada contrato genera revenue mensual predecible. Sin depender de la próxima venta.",
    visual: [30, 45, 40, 55, 60, 72, 68, 80, 85, 92, 95, 100],
  },
  {
    icon: DollarSign,
    title: "Sin CAPEX",
    value: "OPEX",
    description: "Tu cliente no compra. Paga una cuota mensual. Vos facturás mensual con margen incluido.",
    visual: [100, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
  },
  {
    icon: BarChart3,
    title: "Optimización fiscal",
    value: "100%",
    description: "En la mayoría de legislaciones LATAM, el OPEX es deducible al 100%. Beneficio fiscal directo.",
    visual: null,
  },
  {
    icon: RefreshCw,
    title: "Renovación automática",
    value: "Cíclica",
    description: "Cada 24-48 meses el equipo se renueva. Nuevo contrato, nuevo margen, mismo cliente.",
    visual: null,
  },
  {
    icon: Headphones,
    title: "Soporte incluido",
    value: "24/7",
    description: "No vendés y desaparecés. El soporte está incluido en el contrato. Tu cliente siempre atendido.",
    visual: null,
  },
]

export function RentPowerFinancial() {
  return (
    <section id="beneficios" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0a1218] to-[#0a0e1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs text-emerald-400/80 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Modelo financiero
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-[-0.03em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            El dinero habla.
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
              Los números convencen.
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
            El modelo recurrente no es solo mejor para tu cliente. Es exponencialmente
            mejor para tu negocio.
          </p>
        </div>

        {/* Comparison chart */}
        <div className="max-w-4xl mx-auto mb-16 p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div>
              <h3 className="font-semibold text-white/60 mb-4 text-sm uppercase tracking-widest" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Modelo Transaccional
              </h3>
              <div className="flex items-end gap-1 h-32">
                {[85, 30, 60, 15, 90, 25, 50, 10, 70, 35, 20, 55].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-red-500/30 to-red-400/10 border-t border-red-400/20"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-white/30" style={{ fontFamily: "var(--font-inter)" }}>
                <span>Ene</span>
                <span>Dic</span>
              </div>
              <p className="text-sm text-red-400/60 mt-3" style={{ fontFamily: "var(--font-inter)" }}>
                Ingresos impredecibles. Picos y valles.
              </p>
            </div>

            {/* Recurring */}
            <div>
              <h3 className="font-semibold text-emerald-400/80 mb-4 text-sm uppercase tracking-widest" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Modelo RentPower (Recurrente)
              </h3>
              <div className="flex items-end gap-1 h-32">
                {[30, 38, 42, 48, 52, 58, 63, 68, 72, 78, 85, 92].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-emerald-500/40 to-cyan-400/20 border-t border-emerald-400/30"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-white/30" style={{ fontFamily: "var(--font-inter)" }}>
                <span>Ene</span>
                <span>Dic</span>
              </div>
              <p className="text-sm text-emerald-400/60 mt-3" style={{ fontFamily: "var(--font-inter)" }}>
                Crecimiento compuesto. Predecible y escalable.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-emerald-500/20 hover:bg-emerald-500/[0.02] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold text-emerald-400/80" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {benefit.value}
                </div>
              </div>
              <h3 className="font-semibold text-white/90 mb-2 tracking-[-0.01em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {benefit.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
