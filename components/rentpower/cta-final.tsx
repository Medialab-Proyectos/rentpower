"use client"

import Image from "next/image"
import { ArrowRight, MapPin, Zap } from "lucide-react"

const countryCtas = [
  {
    country: "Colombia",
    owner: "Especialista RentPower Colombia",
    flag: "/images/rentpower/marcas/bandera-colombia.png",
    flagAlt: "Bandera de Colombia",
    href: "https://wa.me/16452234898?text=Hola%2C%20quiero%20codificarme%20como%20reseller%20RentPower%20en%20Colombia",
  },
  {
    country: "Peru",
    owner: "Especialista RentPower Peru",
    flag: "/images/rentpower/marcas/bandera-peru.png",
    flagAlt: "Bandera de Peru",
    href: "https://wa.me/51974311109?text=Hola%2C%20quiero%20codificarme%20como%20reseller%20RentPower%20en%20Peru",
  },
]

export function RentPowerCTA() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/rentpower/cybersecurity.png"
          alt="Soluciones tecnologicas enterprise"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1030]/90 to-[#0a0e1a]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
            Activacion para resellers en Colombia y Peru
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          Hable con el especialista de{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
            su pais
          </span>
        </h2>

        <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
          Seleccione el mercado donde quiere codificar su empresa como reseller RentPower y active la conversacion por WhatsApp.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {countryCtas.map((cta) => (
            <a
              key={cta.country}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-blue-400/30 transition-all text-left"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <Image
                    src={cta.flag}
                    alt={cta.flagAlt}
                    width={56}
                    height={56}
                    className="h-12 w-12 rounded-full object-cover ring-1 ring-white/15 shadow-lg shadow-black/20"
                  />
                  <div>
                    <div className="flex items-center gap-2 text-white/90 mb-2">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span className="text-xl font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                        {cta.country}
                      </span>
                    </div>
                    <p className="text-sm text-white/45" style={{ fontFamily: "var(--font-inter)" }}>
                      {cta.owner}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/35 group-hover:text-blue-300 group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/30" style={{ fontFamily: "var(--font-inter)" }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            Codificacion de canal
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            Respuesta comercial
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            Onboarding de portafolio
          </div>
        </div>
      </div>
    </section>
  )
}
