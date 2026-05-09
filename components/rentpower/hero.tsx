"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const stats = [
  { value: "27+", label: "anos de respaldo DAGA" },
  { value: "Colombia", label: "operacion comercial" },
  { value: "Peru", label: "expansion regional" },
  { value: "B2B", label: "modelo para resellers" },
]

export function RentPowerHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * ratio
      canvas.height = canvas.offsetHeight * ratio
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    resize()
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    for (let i = 0; i < 46; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.45 + 0.08,
      })
    }

    const animate = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(120, 105, 255, ${p.opacity})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1328] to-[#0a0e1a]" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/60 tracking-wide" style={{ fontFamily: "var(--font-inter)" }}>
                Mayorista tecnologico respaldado por DAGA Holding
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 animate-fade-in" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              <span className="block text-white">Codifique su canal.</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Venda soluciones
              </span>
              <span className="block text-white/90 text-[0.85em]">con respaldo mayorista.</span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-white/55 font-light leading-relaxed mb-10" style={{ fontFamily: "var(--font-inter)" }}>
              RentPower conecta resellers e integradores con marcas, portafolio, preventa, soporte y modelos recurrentes para competir en Colombia y Peru.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12">
              <a
                href="#contacto"
                className="group relative px-8 py-3.5 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                <span className="relative z-10">Quiero ser reseller</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#soluciones"
                className="px-8 py-3.5 font-medium text-white/70 border border-white/10 rounded-xl hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Ver portafolio
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="px-3 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                  <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-500/15 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20">
              <Image
                src="/images/rentpower/hero-team.png"
                alt="Equipo B2B trabajando con resellers tecnologicos"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/65 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl bg-[#0a0e1a]/90 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="text-xs font-bold text-white/90" style={{ fontFamily: "var(--font-space-grotesk)" }}>Portafolio multi-marca</div>
              <div className="text-[10px] text-white/40" style={{ fontFamily: "var(--font-inter)" }}>DaaS, cloud, cyber, MDM y learning</div>
            </div>

            <div className="absolute -top-3 -right-3 px-4 py-2.5 rounded-xl bg-[#0a0e1a]/90 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-white/70" style={{ fontFamily: "var(--font-inter)" }}>Programa para resellers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
