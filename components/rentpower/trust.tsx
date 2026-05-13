"use client"

import Image from "next/image"
import { Building2, Globe2, Route, ShieldCheck } from "lucide-react"

const holdingStats = [
  { icon: Building2, value: "27+", label: "anos de trayectoria", description: "Base corporativa para operar tecnologia B2B con continuidad." },
  { icon: Globe2, value: "CO / PE", label: "mercados activos", description: "Un mismo flujo comercial con derivacion por pais del reseller." },
  { icon: Route, value: "Canal", label: "modelo indirecto", description: "RentPower habilita resellers; el reseller conserva la relacion final." },
  { icon: ShieldCheck, value: "Soporte", label: "respaldo operativo", description: "Preventa, condiciones, escalamiento y seguimiento comercial." },
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
              DAGA Corporate
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
            Una plataforma mayorista para activar resellers en Colombia y Peru con portafolio tecnologico, soporte en espanol y una estructura corporativa clara.
          </p>
        </div>

        <div className="mb-16 grid lg:grid-cols-[0.95fr_1.4fr] gap-6 items-stretch">
          <div className="relative min-h-[280px] rounded-2xl border border-emerald-400/15 bg-white/[0.025] p-8 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div>
                <p className="text-xs text-white/35 uppercase tracking-widest mb-5" style={{ fontFamily: "var(--font-inter)" }}>
                  Respaldo del grupo
                </p>
                <div className="rounded-2xl border border-white/10 bg-[#0f1c2b] px-5 py-6 shadow-2xl shadow-emerald-950/20">
                  <Image
                    src="/images/rentpower/marcas/daga-corporate.png"
                    alt="DAGA Corporate"
                    width={720}
                    height={220}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                El respaldo se comunica con la marca corporativa correcta y se conecta con lo que el canal necesita: estructura, proceso y continuidad.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {holdingStats.map((stat) => (
              <div key={stat.label} className="group p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/5">
                    <stat.icon className="w-5 h-5 text-blue-300/80" />
                  </div>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm font-semibold text-white/75 mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {stat.label}
                </div>
                <div className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
