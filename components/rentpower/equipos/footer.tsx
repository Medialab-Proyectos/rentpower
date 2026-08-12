import Image from "next/image"
import { MedialabCredit } from "@/components/layout/medialab-credit"
import { NOTA_PRECIOS, WHATSAPP_DISPLAY } from "@/lib/rentpower-inventory"
import { WhatsAppCTA, WhatsAppIcon } from "./whatsapp-cta"

export function EquiposFooter() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#06070d]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-14">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 mb-12">
          <div>
            <Image
              src="/images/rentpower/rentpower-white.svg"
              alt="RentPower"
              width={200}
              height={56}
              className="h-12 w-auto mb-4"
            />
            <p
              className="max-w-sm text-sm text-white/50 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Venta de equipos reacondicionados de marcas empresariales, con inventario disponible y
              acompañamiento comercial directo.
            </p>
          </div>

          <div>
            <h4
              className="text-sm font-semibold text-white/70 mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Navegación
            </h4>
            <ul
              className="space-y-2.5 text-sm text-white/55"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <li>
                <a href="#catalogo" className="hover:text-white/75 transition-colors">
                  Equipos disponibles
                </a>
              </li>
              <li>
                <a href="#reacondicionado" className="hover:text-white/75 transition-colors">
                  ¿Por qué reacondicionados?
                </a>
              </li>
              <li>
                <a href="#rentpower" className="hover:text-white/75 transition-colors">
                  Sobre RentPower
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white/75 transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="text-sm font-semibold text-white/70 mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Contacto
            </h4>
            <WhatsAppCTA
              origen="footer"
              className="px-4 py-2.5 rounded-lg border border-white/12 text-sm text-white/75 hover:border-white/30 hover:text-white hover:bg-white/[0.04] mb-3"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span style={{ fontFamily: "var(--font-inter)" }}>{WHATSAPP_DISPLAY}</span>
            </WhatsAppCTA>
            <p className="text-[12px] text-white/45" style={{ fontFamily: "var(--font-inter)" }}>
              Atención comercial por WhatsApp.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] space-y-4">
          <p
            className="text-[11px] text-white/40 leading-relaxed max-w-3xl"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {NOTA_PRECIOS} Las imágenes y referencias son ilustrativas y corresponden al inventario
            de equipos reacondicionados vigente al momento de la consulta.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-[12px] text-white/45" style={{ fontFamily: "var(--font-inter)" }}>
              &copy; {new Date().getFullYear()} RentPower · DAGA Corporate. Todos los derechos
              reservados.
            </p>
            <MedialabCredit />
          </div>
        </div>
      </div>
    </footer>
  )
}
