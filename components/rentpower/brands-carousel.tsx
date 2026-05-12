"use client"

import Image from "next/image"

const brands = [
  { name: "Quick Heal", logo: "/images/rentpower/marcas/quick-heal.png" },
  { name: "LUMA", logo: "/images/rentpower/marcas/luma.png" },
  { name: "Alkira", logo: "/images/rentpower/marcas/alkira.png" },
  { name: "Pulsus", logo: "/images/rentpower/marcas/pulsus.png" },
  { name: "Scalefusion", logo: "/images/rentpower/marcas/scalefusion.png" },
  { name: "Seqrite", logo: "/images/rentpower/marcas/seqrite.png" },
]

export function RentPowerBrands() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0c1020] to-[#0a0e1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Portafolio de marcas
          </div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/90"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Marcas que{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              respaldan
            </span>{" "}
            su negocio
          </h2>
          <p
            className="mt-3 text-sm text-white/40 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Soluciones de marcas lideres en ciberseguridad, gestion de
            dispositivos y cloud listas para su canal.
          </p>
        </div>
      </div>

      {/* Carousel - full width, outside max-w container */}
      <div className="relative z-10">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-r from-[#0a0e1a] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-l from-[#0a0e1a] to-transparent pointer-events-none" />

        {/* Scrolling track */}
        <div className="overflow-hidden">
          <div
            className="animate-marquee flex items-center gap-8 md:gap-12"
            style={{ width: "max-content" }}
          >
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="group flex-shrink-0 flex items-center justify-center h-16 md:h-20 w-36 md:w-44 rounded-xl border border-white/5 bg-white/[0.02] px-6 py-4 transition-all duration-500 hover:border-white/15 hover:bg-white/[0.05]"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={160}
                  height={48}
                  className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-40 transition-all duration-500 group-hover:opacity-90 group-hover:brightness-100 group-hover:invert-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
