import Image from "next/image"
import { referenciasTotales, unidadesTotales } from "@/lib/rentpower-inventory"

const datos = [
  {
    valor: "+27",
    label: "años de respaldo",
    detalle: "Trayectoria de DAGA Corporate en tecnología empresarial",
  },
  {
    valor: `+${unidadesTotales.toLocaleString("es-CO")}`,
    label: "unidades en inventario",
    detalle: "Disponibilidad reportada en el último corte de stock",
  },
  {
    valor: `${referenciasTotales}`,
    label: "referencias distintas",
    detalle: "Portátiles, equipos de escritorio y todo en uno",
  },
]

export function EquiposSobre() {
  return (
    <section
      id="rentpower"
      className="relative py-20 sm:py-28 scroll-mt-16 border-t border-white/[0.06] bg-[#0a0c16]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-medium text-white/40">04</span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#a78bfa]">
                Sobre RentPower
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-[1.05] tracking-[-0.02em] mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Tecnología respaldada por RentPower
            </h2>
            <div
              className="space-y-4 max-w-lg text-base text-white/50 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <p>
                RentPower es el mayorista de soluciones tecnológicas de DAGA Corporate: trabajamos
                con resellers, empresas y usuarios para facilitar el acceso, la administración y el
                aprovechamiento de la tecnología.
              </p>
              <p>
                Esa misma operación es la que hoy libera inventario de equipos reacondicionados de
                marcas empresariales como Dell, Lenovo y HP.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-9 pt-8 border-t border-white/[0.07]">
              <Image
                src="/images/rentpower/rentpower-white.svg"
                alt="RentPower"
                width={180}
                height={50}
                className="h-10 w-auto opacity-80"
              />
              <span
                className="text-[10px] uppercase tracking-[0.16em] text-white/30 border border-white/10 px-2 py-1 rounded"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                by DAGA Corporate
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {datos.map((dato) => (
              <div
                key={dato.label}
                className="flex items-center gap-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-6 sm:px-8"
              >
                <div
                  className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent leading-none min-w-[110px]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {dato.valor}
                </div>
                <div>
                  <div
                    className="text-base font-semibold text-white/90 leading-snug"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {dato.label}
                  </div>
                  <div
                    className="text-[12px] text-white/35 leading-relaxed mt-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {dato.detalle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
