"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Pasamos de vender hardware una vez al año a facturar mensual con márgenes protegidos. RentPower cambió nuestro modelo de negocio.",
    author: "Director Comercial",
    company: "Integrador IT, Colombia",
    metric: "+340% revenue recurrente",
  },
  {
    quote: "El soporte en preventa es real. Nos acompañan a presentar, hacer demos y cerrar. No es un mayorista que te manda un PDF.",
    author: "Gerente de Canal",
    company: "VAR, México",
    metric: "85% win rate en licitaciones",
  },
  {
    quote: "Con la solución 360° dejamos de depender de 5 proveedores. Un contrato, un soporte, un margen. Simple.",
    author: "CEO",
    company: "Distribuidor Regional, Perú",
    metric: "-60% complejidad operativa",
  },
]

const partnerLogos = [
  "Microsoft", "Cisco", "HP", "Dell", "Lenovo", "Apple",
  "AWS", "Google Cloud", "Fortinet", "VMware",
]

export function RentPowerProof() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0a0e1a] to-[#0a0e1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Canales que confían
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-[-0.03em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            No lo decimos nosotros.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Lo dicen ellos.
            </span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-white/60 leading-relaxed mb-6 italic" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Metric */}
              <div className="mb-4 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 inline-block">
                <span className="text-xs font-semibold text-emerald-400" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {testimonial.metric}
                </span>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-white/5">
                <div className="text-sm font-semibold text-white/70" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {testimonial.author}
                </div>
                <div className="text-xs text-white/30" style={{ fontFamily: "var(--font-inter)" }}>
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div className="text-center">
          <p className="text-xs text-white/30 uppercase tracking-widest mb-6" style={{ fontFamily: "var(--font-inter)" }}>
            Ecosistema de aliados tecnológicos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {partnerLogos.map((logo) => (
              <div
                key={logo}
                className="px-4 py-2 rounded-lg border border-white/5 bg-white/[0.02] text-sm text-white/20 hover:text-white/40 hover:border-white/10 transition-all"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
