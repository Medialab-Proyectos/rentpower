"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function RentPowerNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0a0e1a]/85 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            R
          </div>
          <span className="font-semibold text-lg" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            RentPower
          </span>
          <span className="hidden sm:inline-block text-[10px] text-white/30 border border-white/10 px-1.5 py-0.5 rounded ml-1" style={{ fontFamily: "var(--font-inter)" }}>
            by DAGA Holding
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
          <a href="#pilares" className="hover:text-white transition-colors">Pilares</a>
          <a href="#ecosistema" className="hover:text-white transition-colors">Ecosistema</a>
          <a href="#soluciones" className="hover:text-white transition-colors">Soluciones</a>
          <a href="#proceso" className="hover:text-white transition-colors">Codificacion</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#soluciones"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-white/80 border border-white/10 rounded-lg hover:border-white/30 hover:text-white transition-all"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Portafolio
          </a>
          <a
            href="#contacto"
            className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Ser reseller
          </a>
        </div>
      </div>
    </nav>
  )
}
