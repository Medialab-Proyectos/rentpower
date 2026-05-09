"use client"

import { ClipboardCheck, FileText, Handshake, Rocket } from "lucide-react"

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Recoleccion de documentos",
    description: "El reseller entrega la informacion legal y comercial requerida para iniciar el proceso de alta.",
    detail: "Documentacion + datos de contacto",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Validacion y cupo",
    description: "RentPower revisa el perfil del partner, valida condiciones comerciales y define el cupo aplicable.",
    detail: "Validacion comercial + credito",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Alta de partner",
    description: "El canal queda codificado para operar el portafolio, registrar oportunidades y recibir soporte.",
    detail: "Codificacion + reglas de canal",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Objetivo comercial y onboarding",
    description: "Se acuerda foco de negocio, marcas prioritarias y plan de salida al mercado con el equipo RentPower.",
    detail: "Onboarding + plan comercial",
  },
]

export function RentPowerProcess() {
  return (
    <section id="proceso" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0a0e20] to-[#0a0e1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Proceso de codificacion
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Como su empresa se convierte en{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              reseller RentPower
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
            Un proceso simple para habilitar al partner, proteger oportunidades y empezar a mover el portafolio.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div key={step.number} className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <step.icon className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-xs font-bold text-white/25" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white/90 mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {step.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed mb-4" style={{ fontFamily: "var(--font-inter)" }}>
                {step.description}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-white/35" style={{ fontFamily: "var(--font-inter)" }}>
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
