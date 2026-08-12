"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { linkWhatsApp, WHATSAPP_DISPLAY } from "@/lib/rentpower-inventory"
import { trackWhatsApp } from "./track"

const links = [
  { href: "#catalogo", label: "Equipos" },
  { href: "#reacondicionado", label: "¿Por qué reacondicionados?" },
  { href: "#rentpower", label: "Sobre RentPower" },
]

export function EquiposNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "bg-[#07080f]/90 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/rentpower/rentpower-white.svg"
            alt="RentPower"
            width={200}
            height={56}
            priority
            className="h-10 sm:h-12 w-auto"
          />
          <span
            className="hidden sm:inline-block text-[9px] uppercase tracking-[0.18em] text-white/35 border border-white/10 px-1.5 py-0.5 rounded"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Equipos
          </span>
        </a>

        <div
          className="hidden lg:flex items-center gap-8 text-sm text-white/65"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span
            className="hidden xl:inline text-[11px] uppercase tracking-[0.16em] text-white/50"
            aria-hidden="true"
          >
            {WHATSAPP_DISPLAY}
          </span>
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp("nav")}
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#7c5cff] to-[#4f7cff] hover:shadow-lg hover:shadow-[#7c5cff]/25 transition-all"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Comprar por WhatsApp
          </a>
        </div>
      </div>
    </nav>
  )
}
