"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

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
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const init = () => {
      resize()
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    const animate = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 140, 255, ${p.opacity})`
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(99, 140, 255, ${0.08 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    init()
    animate()
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1529] to-[#0a0e1a]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[100px]" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/60 tracking-wide" style={{ fontFamily: "var(--font-inter)" }}>
                Respaldado por DAGA Holding · Presencia en 7+ países LATAM
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.03em] mb-6 animate-fade-in [animation-delay:200ms]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              <span className="block text-white">No vendemos cajas.</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Construimos ecosistemas
              </span>
              <span className="block text-white/90 text-[0.85em]">que generan ingreso recurrente.</span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-white/50 font-light leading-relaxed mb-10 animate-fade-in [animation-delay:400ms]" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
              DaaS · Cloud · Networking · Ciberseguridad · Digital Learning.
              <br className="hidden sm:block" />
              El wholesaler que convierte tu canal en un negocio escalable y recurrente.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12 animate-fade-in [animation-delay:600ms]">
              <a
                href="#contacto"
                className="group relative px-8 py-3.5 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden"
                style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.01em" }}
              >
                <span className="relative z-10">Conviértete en canal</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#ecosistema"
                className="px-8 py-3.5 font-medium text-white/70 border border-white/10 rounded-xl hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Explorar soluciones
              </a>
            </div>

            {/* Floating metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-in [animation-delay:800ms]">
              {[
                { value: "7+", label: "Países LATAM" },
                { value: "15+", label: "Soluciones" },
                { value: "500+", label: "Canales activos" },
                { value: "98%", label: "Retención" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-3 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
                >
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative animate-fade-in [animation-delay:500ms] hidden lg:block">
            {/* Glow behind image */}
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-500/15 rounded-3xl blur-3xl" />
            
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20">
              <Image
                src="/images/rentpower/hero-team.png"
                alt="Equipo profesional de tecnología B2B colaborando en soluciones enterprise"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/5" />
            </div>

            {/* Floating badges on image */}
            <div className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl bg-[#0a0e1a]/90 border border-white/10 backdrop-blur-xl shadow-xl animate-fade-in [animation-delay:1000ms]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white/90" style={{ fontFamily: "var(--font-space-grotesk)" }}>+340%</div>
                  <div className="text-[10px] text-white/40" style={{ fontFamily: "var(--font-inter)" }}>Revenue recurrente</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-3 -right-3 px-4 py-2.5 rounded-xl bg-[#0a0e1a]/90 border border-white/10 backdrop-blur-xl shadow-xl animate-fade-in [animation-delay:1200ms]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-white/70" style={{ fontFamily: "var(--font-inter)" }}>500+ canales activos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  )
}
