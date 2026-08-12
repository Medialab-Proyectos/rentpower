import { TrendingUp, Boxes, Recycle } from "lucide-react"

const razones = [
  {
    icon: TrendingUp,
    title: "Aprovecha mejor tu presupuesto",
    text: "Obtén equipos funcionales de marcas empresariales a precios más accesibles que un equipo nuevo equivalente.",
  },
  {
    icon: Boxes,
    title: "Equipos para diferentes necesidades",
    text: "Opciones para oficina, estudio, operación o uso personal, con configuraciones desde Core i3 hasta Core i7.",
  },
  {
    icon: Recycle,
    title: "Extiende la vida útil de la tecnología",
    text: "Darle una segunda vida a un dispositivo también permite aprovechar mejor los recursos tecnológicos existentes.",
  },
]

export function EquiposReacondicionado() {
  return (
    <section id="reacondicionado" className="relative py-20 sm:py-28 scroll-mt-16 bg-[#07080f]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-medium text-white/40">03</span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#a78bfa]">
              ¿Por qué reacondicionado?
            </span>
          </div>
          <h2
            className="max-w-2xl text-4xl sm:text-5xl font-bold text-white leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Una forma inteligente de comprar tecnología
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {razones.map((razon, i) => (
            <div
              key={razon.title}
              className="relative rounded-2xl border border-white/[0.08] bg-[#0b0d18] p-7 sm:p-8 transition-colors hover:border-[#7c5cff]/30"
            >
              <span className="absolute top-6 right-7 text-[11px] text-white/15">
                0{i + 1}
              </span>
              <div className="w-11 h-11 rounded-xl bg-[#7c5cff]/12 border border-[#7c5cff]/20 flex items-center justify-center mb-6">
                <razon.icon className="w-5 h-5 text-[#a78bfa]" strokeWidth={1.6} />
              </div>
              <h3
                className="text-xl font-semibold text-white leading-snug mb-3"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {razon.title}
              </h3>
              <p
                className="text-sm text-white/45 leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {razon.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
