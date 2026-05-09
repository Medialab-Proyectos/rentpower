"use client"

import Image from "next/image"
import { Building2, Globe2, Shield, Users } from "lucide-react"

const holdingStats = [
  { icon: Building2, value: "27+", label: "anos de trayectoria", description: "Respaldo del grupo DAGA Holding en tecnologia B2B" },
  { icon: Globe2, value: "LATAM", label: "operacion regional", description: "Base para activar Colombia y Peru desde una misma landing" },
  { icon: Users, value: "B2B", label: "enfoque de canal", description: "Modelo mayorista para resellers e integradores" },
  { icon: Shield, value: "DAGA", label: "respaldo corporativo", description: "Soporte operativo, financiero y comercial del grupo" },
]

export function RentPowerTrust() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1225] to-[#0a0e1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Respaldo corporativo
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            RentPower nace con el respaldo de{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              DAGA Holding
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
            Una plataforma mayorista para activar resellers en Colombia y Peru con portafolio tecnologico, soporte en espanol y operacion regional.
          </p>
        </div>

        <div className="relative mb-16 rounded-2xl overflow-hidden border border-white/5">
          <div className="relative h-[300px] md:h-[380px]">
            <Image
              src="/images/rentpower/daga-hq.png"
              alt="DAGA Holding - respaldo corporativo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/5" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {holdingStats.map((stat) => (
                <div key={stat.label} className="group p-4 rounded-xl border border-white/10 bg-[#0a0e1a]/60 backdrop-blur-xl hover:border-white/20 hover:bg-[#0a0e1a]/80 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="w-4 h-4 text-blue-400/60" />
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-white/70 mb-0.5" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-white/30 leading-tight hidden md:block" style={{ fontFamily: "var(--font-inter)" }}>
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-inter)" }}>
              Activacion comercial
            </p>
            <h3 className="text-2xl font-bold text-white/90 mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Una landing para Colombia y Peru
            </h3>
            <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              La experiencia mantiene el mismo look and feel y dirige el CTA al especialista correspondiente segun el pais del reseller.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-blue-500/10 bg-blue-500/[0.03]">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-inter)" }}>
              Modelo de negocio
            </p>
            <h3 className="text-2xl font-bold text-white/90 mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              RentPower no atiende cliente final
            </h3>
            <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              Codifica canales, habilita oportunidades y respalda a resellers para que revendan las soluciones del portafolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
