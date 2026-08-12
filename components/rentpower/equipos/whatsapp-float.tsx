"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { WhatsAppCTA, WhatsAppIcon } from "./whatsapp-cta"

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-5 right-4 sm:right-6 z-50 transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <WhatsAppCTA
        origen="boton_flotante"
        ariaLabel="Comprar por WhatsApp"
        className="px-5 py-3.5 rounded-full bg-gradient-to-r from-[#7c5cff] to-[#4f7cff] shadow-2xl shadow-[#7c5cff]/30 hover:scale-[1.03]"
      >
        <WhatsAppIcon className="w-5 h-5" />
        <span
          className="text-[15px] font-semibold"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Comprar por WhatsApp
        </span>
      </WhatsAppCTA>
    </div>
  )
}
