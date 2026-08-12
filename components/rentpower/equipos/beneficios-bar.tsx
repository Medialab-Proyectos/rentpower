import { BadgeDollarSign, Layers, PackageCheck, Headset } from "lucide-react"

const items = [
  {
    icon: BadgeDollarSign,
    title: "Precios asequibles",
    text: "Tecnología funcional sin pagar de más.",
  },
  {
    icon: PackageCheck,
    title: "Equipos reacondicionados",
    text: "Dispositivos revisados y preparados para seguir trabajando.",
  },
  {
    icon: Layers,
    title: "Diferentes configuraciones",
    text: "Procesador, memoria y almacenamiento según lo que necesitas.",
  },
  {
    icon: Headset,
    title: "Asesoría directa",
    text: "Consulta disponibilidad y compra por WhatsApp.",
  },
]

export function EquiposBeneficios() {
  return (
    <section className="relative border-y border-white/[0.06] bg-[#080a12]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`py-8 lg:py-10 lg:px-8 ${
                i > 0 ? "lg:border-l border-white/[0.06]" : ""
              } ${i % 2 === 1 ? "sm:border-l sm:border-white/[0.06] lg:border-l" : ""} ${
                i < 2 ? "sm:border-b lg:border-b-0 sm:border-white/[0.06]" : ""
              } sm:px-6`}
            >
              <div className="w-10 h-10 rounded-lg bg-[#7c5cff]/12 border border-[#7c5cff]/20 flex items-center justify-center mb-4">
                <item.icon className="w-[18px] h-[18px] text-[#a78bfa]" strokeWidth={1.6} />
              </div>
              <h3
                className="text-[17px] font-semibold text-white mb-2 leading-snug"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm text-white/45 leading-relaxed max-w-[26ch]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
