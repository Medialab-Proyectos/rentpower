"use client"

import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"

export function RentPower360() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1025] to-[#0a0e1a]" />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/8 to-purple-600/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs text-purple-400/80 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Solución 360°
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-[-0.03em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Un contrato. Un proveedor.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Un ciclo de pago.
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
            DaaS + WayGround = la solución integrada que simplifica todo.
            Tu cliente recibe hardware, software, soporte y renovación en un solo contrato mensual.
          </p>
        </div>

        {/* Visual flow with image */}
        <div className="max-w-4xl mx-auto">
          {/* Infrastructure image banner */}
          <div className="relative rounded-2xl overflow-hidden border border-white/5 mb-8 h-[200px] md:h-[260px]">
            <Image
              src="/images/rentpower/infrastructure.png"
              alt="Infraestructura enterprise - Data center y cloud computing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/50 to-[#0a0e1a]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 to-purple-600/10" />
            
            {/* Overlay text */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-lg md:text-xl font-bold text-white/90 mb-1" style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}>
                Infraestructura enterprise de clase mundial
              </p>
              <p className="text-sm text-white/50" style={{ fontFamily: "var(--font-inter)" }}>
                Respaldada por data centers en LATAM con SLA garantizado
              </p>
            </div>
          </div>

          {/* Integration diagram */}
          <div className="relative p-8 md:p-12 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm mb-8">
            <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-8">
              {/* DaaS block */}
              <div className="text-center p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-[1px] mb-4">
                  <div className="w-full h-full rounded-2xl bg-[#0a0e1a] flex items-center justify-center">
                    <span className="font-bold text-lg text-blue-400" style={{ fontFamily: "var(--font-space-grotesk)" }}>D</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>DaaS</h3>
                <p className="text-xs text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
                  Hardware como servicio con renovación automática
                </p>
              </div>

              {/* Connector */}
              <div className="hidden md:flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-white/30" style={{ fontFamily: "var(--font-inter)" }}>Integrado</span>
              </div>

              {/* WayGround block */}
              <div className="text-center p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-[1px] mb-4">
                  <div className="w-full h-full rounded-2xl bg-[#0a0e1a] flex items-center justify-center">
                    <span className="font-bold text-lg text-purple-400" style={{ fontFamily: "var(--font-space-grotesk)" }}>W</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>WayGround</h3>
                <p className="text-xs text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
                  Plataforma de gestión y ciclo de vida
                </p>
              </div>
            </div>

            {/* Result arrow */}
            <div className="mt-8 pt-8 border-t border-white/5 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white/80" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  Solución 360° activa
                </span>
              </div>
            </div>
          </div>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Sin inversión inicial (CAPEX cero)",
              "Renovación tecnológica automática",
              "Soporte y garantía incluidos",
              "Facturación mensual unificada",
              "Logística y retoma incluida",
              "Escalamiento flexible",
            ].map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-sm text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
