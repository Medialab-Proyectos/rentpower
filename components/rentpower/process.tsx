"use client"

import { Search, PenTool, Presentation, Rocket, Headphones, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos tu canal, tu mercado y tus clientes. Identificamos oportunidades inmediatas.",
    detail: "Assessment de madurez + pipeline review",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Arquitectura",
    description: "Diseñamos la solución técnica y comercial. Pricing, bundling y propuesta de valor.",
    detail: "Diseño de solución + business case",
  },
  {
    icon: Presentation,
    number: "03",
    title: "Preventa",
    description: "Te acompañamos frente al cliente final. Demos, POCs y presentaciones técnicas.",
    detail: "Demo + POC + propuesta comercial",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Implementación",
    description: "Desplegamos la solución con metodología probada. Onboarding completo del cliente.",
    detail: "Deploy + onboarding + capacitación",
  },
  {
    icon: Headphones,
    number: "05",
    title: "Soporte",
    description: "Soporte técnico continuo incluido. Tu cliente siempre atendido, vos siempre cubierto.",
    detail: "Soporte L1-L3 + SLA garantizado",
  },
  {
    icon: TrendingUp,
    number: "06",
    title: "Escalamiento",
    description: "Identificamos oportunidades de upselling y cross-selling. Tu cuenta crece con nosotros.",
    detail: "QBR + expansion planning",
  },
]

export function RentPowerProcess() {
  return (
    <section id="proceso" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0a0e20] to-[#0a0e1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Metodología
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-[-0.03em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Así trabajamos.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Consultivo, no transaccional.
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
            No te vendemos y desaparecemos. Te acompañamos en cada paso del ciclo comercial.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line - desktop */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative grid md:grid-cols-[64px_1fr] gap-4 md:gap-8"
              >
                {/* Number node */}
                <div className="hidden md:flex items-start justify-center pt-6">
                  <div className="relative w-10 h-10 rounded-full border border-white/10 bg-[#0a0e1a] flex items-center justify-center group-hover:border-blue-500/30 transition-colors z-10">
                    <span className="text-xs font-bold text-white/40 group-hover:text-blue-400 transition-colors" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <step.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="md:hidden text-xs text-white/30 font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                          {step.number}
                        </span>
                        <h3 className="text-lg font-semibold text-white/90 tracking-[-0.02em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-white/40 leading-relaxed mb-3" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
                        {step.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-white/30" style={{ fontFamily: "var(--font-inter)" }}>
                        {step.detail}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
