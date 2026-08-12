import { WHATSAPP_DISPLAY } from "@/lib/rentpower-inventory"
import { WhatsAppCTA, WhatsAppIcon } from "./whatsapp-cta"

export function EquiposCtaBanda() {
  return (
    <section id="contacto" className="relative py-16 sm:py-20 scroll-mt-16 bg-[#07080f]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#6d4dff] via-[#6a5cff] to-[#3b82f6] p-8 sm:p-12 lg:p-14">
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                <span className="text-[11px] uppercase tracking-[0.16em] text-white/90">
                  Asesores disponibles
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.08] tracking-[-0.02em] mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                ¿Viste un equipo que te interesa?
              </h2>
              <p
                className="text-base text-white/80 leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Consulta disponibilidad, características y condiciones de compra directamente con
                nuestro equipo comercial.
              </p>
              <div className="text-[13px] uppercase tracking-[0.14em] text-white/70">
                {WHATSAPP_DISPLAY}
              </div>
            </div>

            <WhatsAppCTA
              origen="banda_cta"
              className="shrink-0 px-8 py-5 rounded-2xl bg-white text-[#4c2fd6] font-bold text-lg sm:text-xl hover:scale-[1.02] hover:shadow-2xl"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span style={{ fontFamily: "var(--font-space-grotesk)" }}>Hablar por WhatsApp</span>
            </WhatsAppCTA>
          </div>
        </div>
      </div>
    </section>
  )
}
