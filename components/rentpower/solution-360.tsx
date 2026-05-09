"use client"

import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

export function RentPower360() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1025] to-[#0a0e1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs text-purple-400/80 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Solucion 360
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Un proveedor mayorista.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Un ciclo comercial.
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
            RentPower integra marcas, soporte y procesos para que el reseller no tenga que coordinar multiples proveedores por separado.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-white/5 mb-8 h-[210px] md:h-[270px]">
            <Image
              src="/images/rentpower/infrastructure.png"
              alt="Infraestructura tecnologica enterprise"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/50 to-[#0a0e1a]/20" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-lg md:text-xl font-bold text-white/90 mb-1" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Portafolio listo para llevar al mercado
              </p>
              <p className="text-sm text-white/50" style={{ fontFamily: "var(--font-inter)" }}>
                Arquitectura, preventa, implementacion y soporte bajo un mismo frente.
              </p>
            </div>
          </div>

          <div className="relative p-8 md:p-12 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm mb-8">
            <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-8">
              <div className="text-center p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5">
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>Reseller</h3>
                <p className="text-xs text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
                  Cliente, relacion comercial y ejecucion de oportunidad.
                </p>
              </div>

              <div className="hidden md:flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-white/30" style={{ fontFamily: "var(--font-inter)" }}>Habilitado por</span>
              </div>

              <div className="text-center p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5">
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>RentPower</h3>
                <p className="text-xs text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
                  Marcas, soporte, arquitectura, condiciones y escalamiento.
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Un solo frente mayorista",
              "Preventa tecnica incluida",
              "Registro de oportunidades",
              "Soporte y escalamiento",
              "Portafolio multi-marca",
              "Modelos recurrentes",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors">
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
