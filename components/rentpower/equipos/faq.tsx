import { WHATSAPP_DISPLAY } from "@/lib/rentpower-inventory"
import { WhatsAppCTA } from "./whatsapp-cta"

/**
 * TODO RentPower: confirmar antes de lanzar la pauta las respuestas de
 * garantía, formas de pago, cobertura de envíos y política de devolución.
 */
export const faqs = [
  {
    q: "¿Qué significa que un equipo sea reacondicionado?",
    a: "Es un equipo que ya fue usado, se revisa y se prepara para volver a funcionar correctamente. Puede presentar señales de uso propias de un equipo reacondicionado, como pequeños detalles estéticos, y su desempeño corresponde a la configuración publicada en cada ficha.",
  },
  {
    q: "¿Qué equipos tienen disponibles?",
    a: "Portátiles, equipos de escritorio (CPU) y todo en uno de marcas empresariales como Dell, Lenovo y HP, con configuraciones desde Core i3 hasta Core i7 y memorias de 4 a 16 GB. El listado de esta página corresponde al último corte de inventario.",
  },
  {
    q: "¿Cómo puedo comprar?",
    a: `Escríbenos por WhatsApp al ${WHATSAPP_DISPLAY} indicando el equipo que te interesa. Un asesor confirma disponibilidad, precio final y condiciones de entrega, y te acompaña durante todo el proceso.`,
  },
  {
    q: "¿Puedo consultar las especificaciones antes de comprar?",
    a: "Sí. Cada equipo muestra su ficha técnica con procesador, memoria, almacenamiento y pantalla. Si necesitas más detalle, un asesor puede ampliarte la información de la referencia específica antes de que tomes la decisión.",
  },
  {
    q: "¿Los equipos tienen garantía?",
    a: "Sí. Las condiciones y el tiempo de garantía dependen de la referencia y del estado del equipo, por eso un asesor te confirma la cobertura exacta antes de cerrar la compra.",
  },
  {
    q: "¿Puedo comprar varias unidades para mi empresa?",
    a: "Sí. Hay referencias con inventario en volumen, ideales para dotar oficinas, puntos de venta o áreas administrativas completas. Cuéntanos cuántos equipos necesitas y te armamos la propuesta.",
  },
]

export function EquiposFaq() {
  return (
    <section id="faq" className="relative py-20 sm:py-28 scroll-mt-16 bg-[#07080f]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-medium text-white/40">05</span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#a78bfa]">
                Preguntas frecuentes
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-[1.05] tracking-[-0.02em] mb-5"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Lo que suelen preguntarnos antes de comprar
            </h2>
            <p
              className="text-base text-white/55 leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Si tu pregunta no está aquí, escríbenos por WhatsApp y un asesor te responde.
            </p>
            <WhatsAppCTA
              origen="faq"
              className="px-6 py-3 rounded-xl border border-white/12 text-white/80 font-medium hover:border-white/30 hover:bg-white/[0.04] hover:text-white"
            >
              <span style={{ fontFamily: "var(--font-inter)" }}>Escribir a un asesor</span>
            </WhatsAppCTA>
          </div>

          <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3
                    className="text-base sm:text-[17px] font-medium text-white/85 leading-snug group-hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {faq.q}
                  </h3>
                  <span
                    className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center text-white/45 group-hover:text-white/75 transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M8 3v10M3 8h10" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p
                  className="mt-3 pr-10 text-sm text-white/55 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
