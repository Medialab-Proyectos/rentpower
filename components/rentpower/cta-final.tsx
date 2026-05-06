"use client"

import Image from "next/image"
import { ArrowRight, Zap } from "lucide-react"

export function RentPowerCTA() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/rentpower/cybersecurity.png"
          alt="Tecnología enterprise y ciberseguridad"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1030]/90 to-[#0a0e1a]" />
      </div>
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
            Cupos limitados por país · 2026
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-[-0.03em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          El canal que no evoluciona,{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
            desaparece.
          </span>
        </h2>

        <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
          Los que se transforman hoy, dominan mañana.
          <br />
          Convertite en canal RentPower y empezá a construir ingreso recurrente desde el primer mes.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://wa.me/573001234567?text=Quiero%20ser%20canal%20RentPower"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.01em" }}
          >
            Hablar con un especialista
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#soluciones"
            className="px-8 py-4 font-medium text-white/70 border border-white/10 rounded-xl hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Ver portafolio completo
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/30" style={{ fontFamily: "var(--font-inter)" }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            Sin compromiso inicial
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            Respuesta en 24h
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            Assessment gratuito
          </div>
        </div>
      </div>
    </section>
  )
}
