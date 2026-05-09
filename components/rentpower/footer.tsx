export function RentPowerFooter() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-[#080b14]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                R
              </div>
              <span className="font-semibold text-lg" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                RentPower
              </span>
              <span className="text-[10px] text-white/30 border border-white/10 px-1.5 py-0.5 rounded" style={{ fontFamily: "var(--font-inter)" }}>
                by DAGA Holding
              </span>
            </div>
            <p className="text-sm text-white/40 max-w-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-inter)" }}>
              Mayorista de soluciones tecnologicas para resellers, distribuidores e integradores en Latinoamerica.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/30" style={{ fontFamily: "var(--font-inter)" }}>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Activacion comercial en Colombia y Peru
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-white/70 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Soluciones
            </h4>
            <ul className="space-y-2 text-sm text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
              <li><a href="#soluciones" className="hover:text-white/70 transition-colors">WayGround</a></li>
              <li><a href="#soluciones" className="hover:text-white/70 transition-colors">Alkira</a></li>
              <li><a href="#soluciones" className="hover:text-white/70 transition-colors">SEQRITE</a></li>
              <li><a href="#soluciones" className="hover:text-white/70 transition-colors">Scalefusion</a></li>
              <li><a href="#soluciones" className="hover:text-white/70 transition-colors">Pulsus</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-white/70 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
              <li>canales@rentpower.co</li>
              <li>Colombia / Peru</li>
              <li className="pt-2">
                <a href="#contacto" className="text-blue-400/70 hover:text-blue-400 transition-colors">
                  Quiero ser reseller
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/20" style={{ fontFamily: "var(--font-inter)" }}>
            2026 RentPower - DAGA Holding. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6 text-xs text-white/20" style={{ fontFamily: "var(--font-inter)" }}>
            <a href="#" className="hover:text-white/40 transition-colors">Politica de privacidad</a>
            <a href="#" className="hover:text-white/40 transition-colors">Terminos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
