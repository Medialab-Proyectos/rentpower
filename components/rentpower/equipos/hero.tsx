import {
  equipos,
  formatCOP,
  precioDesde,
  referenciasTotales,
  unidadesTotales,
} from "@/lib/rentpower-inventory"
import { DeviceVisual } from "./device-visual"
import { WhatsAppCTA, WhatsAppIcon } from "./whatsapp-cta"

const chips = [
  "Equipos reacondicionados",
  "Disponibilidad inmediata",
  "Precios de mayorista",
]

export function EquiposHero() {
  const laptop = equipos.find((e) => e.id === "dell-latitude-5420")!
  const aio = equipos.find((e) => e.id === "hp-proone-400-g6")!

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0c1024] to-[#07080f]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.22),transparent_65%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-10 items-center">
          {/* Columna de mensaje */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7c5cff]/30 bg-[#7c5cff]/10 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
              <span
                className="text-[11px] sm:text-xs uppercase tracking-[0.16em] text-white/75"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Venta de equipos reacondicionados
              </span>
            </div>

            <h1
              className="text-[2.6rem] leading-[1.03] sm:text-6xl lg:text-[4.2rem] font-bold tracking-[-0.02em] mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              <span className="block text-white">Tecnología que cabe</span>
              <span className="block text-white">
                en tu{" "}
                <span className="bg-gradient-to-r from-[#8b6cff] to-[#4f8bff] bg-clip-text text-transparent">
                  presupuesto.
                </span>
              </span>
            </h1>

            <p
              className="max-w-xl text-base sm:text-lg text-white/55 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Portátiles, equipos de escritorio y todo en uno reacondicionados, con inventario
              disponible y asesoría directa por WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-9">
              <a
                href="#catalogo"
                className="group px-7 py-3.5 text-center font-semibold rounded-xl bg-gradient-to-r from-[#7c5cff] to-[#4f7cff] hover:shadow-2xl hover:shadow-[#7c5cff]/25 transition-all"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Ver equipos disponibles
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
              <WhatsAppCTA
                origen="hero"
                className="px-7 py-3.5 font-medium text-white/80 border border-white/12 rounded-xl hover:border-white/30 hover:bg-white/[0.04] hover:text-white"
              >
                <WhatsAppIcon className="w-[18px] h-[18px]" />
                Comprar por WhatsApp
              </WhatsAppCTA>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-[13px] sm:text-sm text-white/70"
                >
                  <span className="w-1 h-1 rounded-full bg-[#a78bfa]" aria-hidden="true" />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Composicion visual */}
          <div className="relative">
            <div
              className="hidden lg:block absolute -top-8 right-0 text-[10px] uppercase tracking-[0.28em] text-white/25"
              aria-hidden="true"
            >
              Stock reacondicionado
            </div>

            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden aspect-[4/3] group">
              <DeviceVisual equipo={laptop} />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#07080f] via-[#07080f]/70 to-transparent">
                <div
                  className="text-sm font-semibold text-white/90"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {laptop.marca} {laptop.modelo}
                </div>
                <div className="text-[11px] text-white/45" style={{ fontFamily: "var(--font-inter)" }}>
                  {laptop.specs.slice(0, 3).join(" · ")}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden aspect-[4/3] group">
                <DeviceVisual equipo={aio} />
                <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-[#07080f] to-transparent">
                  <div className="text-[11px] text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
                    Todo en uno
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#7c5cff]/25 bg-gradient-to-br from-[#150f3a] to-[#0b0d1f] p-5 flex flex-col justify-center">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/45 mb-2">
                  Equipos desde
                </div>
                <div
                  className="text-3xl sm:text-[2.4rem] font-bold leading-none bg-gradient-to-r from-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {formatCOP(precioDesde)}
                </div>
                <div
                  className="text-[10px] uppercase tracking-[0.14em] text-white/35 mt-3 leading-relaxed"
                >
                  Sujeto a disponibilidad
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
                <div
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {referenciasTotales}
                </div>
                <div className="text-[11px] text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
                  referencias disponibles
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
                <div
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  +{unidadesTotales.toLocaleString("es-CO")}
                </div>
                <div className="text-[11px] text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
                  unidades en inventario
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
