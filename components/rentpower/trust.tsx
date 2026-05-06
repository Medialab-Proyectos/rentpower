"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Building2, Globe2, Users, Shield } from "lucide-react"

const countries = [
  { name: "México", cx: 88, cy: 95 },
  { name: "Costa Rica", cx: 115, cy: 135 },
  { name: "Panamá", cx: 125, cy: 145 },
  { name: "Colombia", cx: 140, cy: 170 },
  { name: "Ecuador", cx: 125, cy: 200 },
  { name: "Perú", cx: 130, cy: 240 },
  { name: "Chile", cx: 140, cy: 320 },
]

const holdingStats = [
  { icon: Building2, value: "10+", label: "Años de experiencia", description: "Más de una década construyendo soluciones enterprise" },
  { icon: Globe2, value: "7", label: "Países con operación", description: "Presencia activa en toda Latinoamérica" },
  { icon: Users, value: "4", label: "Unidades de negocio", description: "Diversificación estratégica del portafolio" },
  { icon: Shield, value: "1000+", label: "Empresas atendidas", description: "Clientes corporativos y de gobierno" },
]

export function RentPowerTrust() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1225] to-[#0a0e1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Respaldo corporativo
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-[-0.03em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Parte de{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              DAGA Holding
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
            Un grupo corporativo con más de una década de experiencia en soluciones
            tecnológicas B2B en Latinoamérica. Infraestructura local, soporte en español y compliance regional.
          </p>
        </div>

        {/* DAGA Holding visual showcase */}
        <div className="relative mb-16 rounded-2xl overflow-hidden border border-white/5">
          {/* Background image */}
          <div className="relative h-[280px] md:h-[360px]">
            <Image
              src="/images/rentpower/daga-hq.png"
              alt="DAGA Holding - Sede corporativa principal"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/5" />
          </div>
          
          {/* Overlaid content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {holdingStats.map((stat) => (
                <div
                  key={stat.label}
                  className="group p-4 rounded-xl border border-white/10 bg-[#0a0e1a]/60 backdrop-blur-xl hover:border-white/20 hover:bg-[#0a0e1a]/80 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="w-4 h-4 text-blue-400/60" />
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-white/70 mb-0.5" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-white/30 leading-tight hidden md:block" style={{ fontFamily: "var(--font-inter)" }}>
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map + Details grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LATAM Map with real background */}
          <div className="relative max-w-md mx-auto lg:max-w-none w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl" />

            <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
              {/* Map background image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/rentpower/latam-network.png"
                  alt="Red de operaciones DAGA Holding en Latinoamérica"
                  fill
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-[#0a0e1a]/60" />
              </div>

              <div className="relative p-6 md:p-8">
                <svg
                  viewBox="0 0 300 420"
                  className="w-full h-auto max-h-[450px] mx-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Simplified LATAM landmass shapes */}
                  {/* Mexico */}
                  <path
                    d="M60 70 L100 65 L120 80 L125 100 L115 120 L105 130 L95 125 L80 110 L65 95 Z"
                    className={cn(
                      "transition-all duration-300",
                      hovered === "México" ? "fill-blue-500/30 stroke-blue-400" : "fill-white/[0.04] stroke-white/10"
                    )}
                    strokeWidth="0.8"
                  />
                  {/* Central America */}
                  <path
                    d="M105 130 L115 128 L125 135 L130 145 L125 150 L115 145 L108 138 Z"
                    className={cn(
                      "transition-all duration-300",
                      (hovered === "Costa Rica" || hovered === "Panamá") ? "fill-blue-500/30 stroke-blue-400" : "fill-white/[0.04] stroke-white/10"
                    )}
                    strokeWidth="0.8"
                  />
                  {/* Colombia */}
                  <path
                    d="M125 150 L145 148 L165 155 L170 175 L160 190 L145 195 L130 188 L120 175 L125 160 Z"
                    className={cn(
                      "transition-all duration-300",
                      hovered === "Colombia" ? "fill-blue-500/30 stroke-blue-400" : "fill-white/[0.04] stroke-white/10"
                    )}
                    strokeWidth="0.8"
                  />
                  {/* Ecuador */}
                  <path
                    d="M110 190 L130 188 L140 198 L135 215 L118 215 L108 205 Z"
                    className={cn(
                      "transition-all duration-300",
                      hovered === "Ecuador" ? "fill-blue-500/30 stroke-blue-400" : "fill-white/[0.04] stroke-white/10"
                    )}
                    strokeWidth="0.8"
                  />
                  {/* Peru */}
                  <path
                    d="M108 215 L135 215 L150 225 L155 250 L145 275 L130 280 L115 270 L105 250 L100 230 Z"
                    className={cn(
                      "transition-all duration-300",
                      hovered === "Perú" ? "fill-blue-500/30 stroke-blue-400" : "fill-white/[0.04] stroke-white/10"
                    )}
                    strokeWidth="0.8"
                  />
                  {/* Chile (long strip) */}
                  <path
                    d="M130 280 L140 278 L145 295 L143 320 L140 345 L137 365 L132 380 L128 370 L130 345 L132 320 L133 295 Z"
                    className={cn(
                      "transition-all duration-300",
                      hovered === "Chile" ? "fill-blue-500/30 stroke-blue-400" : "fill-white/[0.04] stroke-white/10"
                    )}
                    strokeWidth="0.8"
                  />
                  {/* Brazil (background, not active) */}
                  <path
                    d="M165 180 L200 170 L230 180 L245 200 L240 230 L230 260 L210 280 L180 290 L160 275 L150 250 L155 220 L160 195 Z"
                    className="fill-white/[0.02] stroke-white/[0.05]"
                    strokeWidth="0.5"
                  />
                  {/* Argentina (background) */}
                  <path
                    d="M145 280 L175 285 L180 310 L170 340 L160 360 L150 380 L140 385 L135 370 L138 340 L140 310 Z"
                    className="fill-white/[0.02] stroke-white/[0.05]"
                    strokeWidth="0.5"
                  />

                  {/* Country nodes with labels */}
                  {countries.map((country) => {
                    const isActive = hovered === country.name
                    return (
                      <g
                        key={country.name}
                        onMouseEnter={() => setHovered(country.name)}
                        onMouseLeave={() => setHovered(null)}
                        className="cursor-pointer"
                      >
                        {/* Pulse ring */}
                        <circle
                          cx={country.cx}
                          cy={country.cy}
                          r={isActive ? 12 : 8}
                          className={cn(
                            "transition-all duration-500",
                            isActive ? "fill-blue-500/20" : "fill-blue-500/5"
                          )}
                        />
                        {/* Glow */}
                        {isActive && (
                          <circle
                            cx={country.cx}
                            cy={country.cy}
                            r={16}
                            className="fill-blue-400/10 animate-pulse"
                          />
                        )}
                        {/* Dot */}
                        <circle
                          cx={country.cx}
                          cy={country.cy}
                          r={isActive ? 5 : 3.5}
                          className={cn(
                            "transition-all duration-300",
                            isActive ? "fill-cyan-400" : "fill-blue-400"
                          )}
                        />
                        {/* Label */}
                        <text
                          x={country.cx + 14}
                          y={country.cy + 4}
                          className={cn(
                            "text-[10px] transition-all duration-300",
                            isActive ? "fill-white/90" : "fill-white/40"
                          )}
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {country.name}
                        </text>
                      </g>
                    )
                  })}

                  {/* Connection lines from Colombia (HQ) to other countries */}
                  {countries.filter(c => c.name !== "Colombia").map((country) => (
                    <line
                      key={`line-${country.name}`}
                      x1={140}
                      y1={170}
                      x2={country.cx}
                      y2={country.cy}
                      className={cn(
                        "transition-all duration-300",
                        hovered === country.name
                          ? "stroke-blue-400/40"
                          : "stroke-white/[0.06]"
                      )}
                      strokeWidth="0.5"
                      strokeDasharray="3 3"
                    />
                  ))}
                </svg>

                {/* Legend */}
                <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-white/30" style={{ fontFamily: "var(--font-inter)" }}>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    Operación activa
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    Expansión planeada
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Holding companies + value */}
          <div className="space-y-6">
            {/* Holding companies - enhanced */}
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-5" style={{ fontFamily: "var(--font-inter)" }}>
                Empresas del grupo DAGA Holding
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "MacPower", desc: "Apple Business Partner", color: "from-blue-500 to-cyan-500" },
                  { name: "RentPower", desc: "Wholesaler tecnológico", color: "from-purple-500 to-blue-500" },
                  { name: "LabPower", desc: "Servicio técnico enterprise", color: "from-emerald-500 to-teal-500" },
                  { name: "DAGA Corp", desc: "Holding estratégico", color: "from-amber-500 to-orange-500" },
                ].map((company) => (
                  <div
                    key={company.name}
                    className="group p-4 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/20 hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${company.color} p-[1px] mb-3`}>
                      <div className="w-full h-full rounded-lg bg-[#0a0e1a] flex items-center justify-center">
                        <span className="text-xs font-bold text-white/80" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                          {company.name[0]}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-white/80 mb-0.5" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {company.name}
                    </div>
                    <div className="text-[11px] text-white/30" style={{ fontFamily: "var(--font-inter)" }}>
                      {company.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Value statement - enhanced */}
            <div className="relative p-6 rounded-2xl border border-blue-500/10 bg-blue-500/[0.03] overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white/90" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    Respaldo corporativo real
                  </h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
                  Con sede principal en <span className="text-white/80 font-medium">Colombia</span> y operaciones en 7 países, DAGA Holding respalda cada operación con infraestructura local, soporte en español y compliance regional. No es un nombre en un PDF — es un grupo corporativo con músculo operativo en toda LATAM.
                </p>
              </div>
            </div>

            {/* Partnership image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/5 h-[180px]">
              <Image
                src="/images/rentpower/partnership.png"
                alt="Partnership estratégico B2B en tecnología"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 via-[#0a0e1a]/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold text-white/90" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  Partner real, no solo proveedor
                </p>
                <p className="text-xs text-white/50 mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>
                  Acompañamiento consultivo en cada operación
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
