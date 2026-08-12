import { equipos, formatCOP, precioPublico, TIPO_LABEL, type EquipoTipo } from "@/lib/rentpower-inventory"
import { WhatsAppCTA } from "./whatsapp-cta"

function desdePorTipo(tipo: EquipoTipo) {
  const delTipo = equipos.filter((e) => e.tipo === tipo)
  const minimo = Math.min(...delTipo.map(precioPublico))
  const equipo = delTipo.find((e) => precioPublico(e) === minimo)!
  return { minimo, equipo }
}

const tipos: EquipoTipo[] = ["portatil", "cpu", "aio"]

export function EquiposOportunidad() {
  const anclas = tipos.map((tipo) => ({ tipo, ...desdePorTipo(tipo) }))

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d1f] via-[#100e2e] to-[#07080f]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[420px] bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.18),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-medium text-white/40">02</span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#a78bfa]">
                Oportunidad
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-[1.05] tracking-[-0.02em] mb-5"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Más tecnología por tu presupuesto.
            </h2>
            <p
              className="max-w-lg text-base text-white/50 leading-relaxed mb-9"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Accede a equipos funcionales y reacondicionados con precios pensados para hacer más
              fácil tu próxima compra, ya sea para tu casa, tu oficina o todo tu equipo de trabajo.
            </p>

            <div className="space-y-3 mb-10">
              {anclas.map(({ tipo, minimo, equipo }) => (
                <div
                  key={tipo}
                  className="flex items-center justify-between gap-4 py-3.5 border-b border-white/[0.07]"
                >
                  <div>
                    <div
                      className="text-[10px] uppercase tracking-[0.18em] text-white/35 mb-1"
                    >
                      {TIPO_LABEL[tipo]}
                    </div>
                    <div className="text-sm text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
                      desde {equipo.marca} {equipo.modelo}
                    </div>
                  </div>
                  <div
                    className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent whitespace-nowrap"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {formatCOP(minimo)}
                  </div>
                </div>
              ))}
            </div>

            <WhatsAppCTA
              origen="oportunidad"
              className="group px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-[#7c5cff] to-[#4f7cff] hover:shadow-2xl hover:shadow-[#7c5cff]/25"
            >
              <span style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Consultar equipos disponibles
              </span>
              <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </WhatsAppCTA>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-8 sm:p-10">
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/35 mb-3">
                Precio más bajo del catálogo
              </div>
              <div
                className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#8b6cff] to-[#4f8bff] bg-clip-text text-transparent leading-none mb-6"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {formatCOP(Math.min(...anclas.map((a) => a.minimo)))}
              </div>
              <p
                className="text-sm text-white/45 leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Equipos listos para tareas de oficina, estudio, punto de venta o uso administrativo.
                La disponibilidad cambia con el inventario, por eso confirmamos cada compra con un
                asesor.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/[0.07] bg-[#0b0d18] px-4 py-4">
                  <div
                    className="text-[10px] uppercase tracking-[0.16em] text-white/35 mb-2"
                  >
                    Marcas
                  </div>
                  <div
                    className="text-base font-semibold text-white/85"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Dell · Lenovo · HP
                  </div>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-[#0b0d18] px-4 py-4">
                  <div
                    className="text-[10px] uppercase tracking-[0.16em] text-white/35 mb-2"
                  >
                    Líneas
                  </div>
                  <div
                    className="text-base font-semibold text-white/85"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Latitude · ThinkPad · ProBook
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
