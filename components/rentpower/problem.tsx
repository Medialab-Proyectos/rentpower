"use client"

import { AlertTriangle, TrendingDown, Clock, DollarSign, Layers, ShieldOff } from "lucide-react"

const problems = [
  {
    icon: TrendingDown,
    title: "Ingresos volátiles",
    description: "Dependencia de ventas transaccionales sin recurrencia. Un mes vendés, el siguiente no.",
    metric: "-40%",
    metricLabel: "variabilidad en ingresos trimestrales",
  },
  {
    icon: DollarSign,
    title: "CAPEX insostenible",
    description: "Tus clientes no quieren comprar hardware. Quieren usarlo. El modelo de compra ya murió.",
    metric: "73%",
    metricLabel: "prefieren OPEX sobre CAPEX",
  },
  {
    icon: Clock,
    title: "Soporte lento y genérico",
    description: "Los mayoristas tradicionales te ven como un número. Sin acompañamiento, sin estrategia.",
    metric: "48h+",
    metricLabel: "tiempo promedio de respuesta",
  },
  {
    icon: Layers,
    title: "Múltiples proveedores",
    description: "Cloud por un lado, networking por otro, seguridad por otro. Fragmentación total.",
    metric: "5-8",
    metricLabel: "proveedores promedio por canal",
  },
  {
    icon: ShieldOff,
    title: "Sin protección de canal",
    description: "Te capacitas, llevas el deal, y otro canal te lo roba. Sin registro, sin blindaje.",
    metric: "30%",
    metricLabel: "deals perdidos por conflicto de canal",
  },
  {
    icon: AlertTriangle,
    title: "Complejidad cloud",
    description: "Vender cloud requiere preventa, arquitectura y soporte que no tenés internamente.",
    metric: "62%",
    metricLabel: "canales sin capacidad cloud interna",
  },
]

export function RentPowerProblem() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#100a1a] to-[#0a0e1a]" />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-xs text-red-400/80 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            <AlertTriangle className="w-3 h-3" />
            El problema del mercado
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-[-0.03em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Los canales están{" "}
            <span className="text-red-400/90">perdiendo dinero</span>
            <br />
            con el modelo tradicional
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
            El mercado cambió. Los mayoristas que solo venden cajas están dejando
            a sus canales sin herramientas para competir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-red-500/20 hover:bg-red-500/[0.03] transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                <problem.icon className="w-5 h-5 text-red-400" />
              </div>

              <h3 className="text-lg font-semibold mb-2 text-white/90 tracking-[-0.02em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {problem.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-4" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
                {problem.description}
              </p>

              {/* Metric */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-2xl font-bold text-red-400/80" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {problem.metric}
                </span>
                <span className="block text-xs text-white/30 mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                  {problem.metricLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
