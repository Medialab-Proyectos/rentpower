"use client"

import { useState } from "react"
import { Cloud, Globe, Lock, Monitor, Shield, Smartphone, Wifi } from "lucide-react"
import { cn } from "@/lib/utils"

const solutions = [
  {
    id: "wayground",
    name: "WayGround",
    category: "DaaS Platform",
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
    tagline: "Device as a Service para ciclos de renovacion",
    description: "Plataforma para ofrecer equipos como servicio, controlar el ciclo de vida y construir contratos recurrentes.",
    resellerUse: "Resellers con clientes corporativos, gobierno, educacion o proyectos de flota.",
    support: "Arquitectura de oferta, pricing, onboarding y soporte de renovacion.",
  },
  {
    id: "alkira",
    name: "Alkira",
    category: "Cloud Networking",
    icon: Globe,
    color: "from-purple-500 to-blue-500",
    tagline: "Networking cloud para entornos multi-nube",
    description: "Red cloud-native para conectar nubes, sedes y usuarios sin depender de infraestructura fisica compleja.",
    resellerUse: "Integradores con cuentas enterprise, multi-cloud o proyectos de conectividad critica.",
    support: "Preventa tecnica, demos, diseno de arquitectura y acompanamiento comercial.",
  },
  {
    id: "seqrite",
    name: "SEQRITE",
    category: "Cybersecurity",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    tagline: "Ciberseguridad empresarial para el canal",
    description: "Suite de seguridad para endpoint, XDR, DLP y controles Zero Trust con enfoque corporativo.",
    resellerUse: "Canales con clientes que necesitan cumplimiento, proteccion endpoint o proyectos de seguridad.",
    support: "Dimensionamiento, POC, propuesta tecnica y escalamiento especializado.",
  },
  {
    id: "luma",
    name: "Luma Cloud",
    category: "Cloud Platform",
    icon: Cloud,
    color: "from-sky-500 to-blue-500",
    tagline: "Cloud gestionado con soporte regional",
    description: "Infraestructura cloud para backup, continuidad, migracion y cargas gestionadas en LATAM.",
    resellerUse: "Resellers que quieren sumar servicios cloud sin montar equipo propio de infraestructura.",
    support: "Migracion, soporte tecnico, seguimiento y gobierno de servicio.",
  },
  {
    id: "quickheal",
    name: "Quick Heal",
    category: "Endpoint Security",
    icon: Lock,
    color: "from-amber-500 to-red-500",
    tagline: "Proteccion endpoint simple de vender",
    description: "Seguridad endpoint con administracion centralizada para PYMEs, corporativos y despliegues masivos.",
    resellerUse: "Canales con base instalada que requieren licenciamiento flexible y gestion sencilla.",
    support: "Material comercial, demos y acompanamiento en oportunidades de volumen.",
  },
  {
    id: "scalefusion",
    name: "Scalefusion",
    category: "MDM / UEM",
    icon: Smartphone,
    color: "from-violet-500 to-purple-500",
    tagline: "Gestion empresarial de dispositivos",
    description: "MDM y UEM para administrar flotas moviles, kioscos y dispositivos corporativos multi-OS.",
    resellerUse: "Canales con clientes en retail, logistica, field services, educacion o salud.",
    support: "Casos de uso, demo guiada, POC y soporte de despliegue.",
  },
  {
    id: "pulsus",
    name: "Pulsus",
    category: "MDM LATAM",
    icon: Wifi,
    color: "from-teal-500 to-cyan-500",
    tagline: "MDM con soporte cercano a LATAM",
    description: "Gestion de dispositivos moviles con enfoque regional, interfaz en espanol y soporte local.",
    resellerUse: "Resellers que buscan una alternativa MDM cercana para clientes de Latinoamerica.",
    support: "Onboarding, capacitacion comercial y apoyo en implementacion.",
  },
]

const brandStrip = ["WayGround", "Alkira", "SEQRITE", "Quick Heal", "Scalefusion", "Pulsus", "Luma Cloud"]

export function RentPowerSolutions() {
  const [active, setActive] = useState(0)
  const current = solutions[active]

  return (
    <section id="soluciones" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0a0f1d] to-[#0a0e1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs text-blue-400/80 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Portafolio multi-marca
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Marcas y soluciones que{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              habilitan al reseller
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
            El peso de la marca importa en distribucion. Por eso RentPower agrupa fabricantes y plataformas con acompanamiento comercial, tecnico y operativo.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {brandStrip.map((brand) => (
            <div key={brand} className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-sm text-white/65" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              {brand}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {solutions.map((sol, i) => (
              <button
                key={sol.id}
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal min-w-max lg:min-w-0",
                  active === i ? "bg-white/[0.06] border border-white/10 shadow-lg" : "border border-transparent hover:bg-white/[0.03]"
                )}
              >
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all", active === i ? `bg-gradient-to-br ${sol.color}` : "bg-white/5")}>
                  <sol.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className={cn("text-sm font-semibold transition-colors", active === i ? "text-white" : "text-white/50")} style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {sol.name}
                  </div>
                  <div className="text-xs text-white/30 hidden lg:block" style={{ fontFamily: "var(--font-inter)" }}>
                    {sol.category}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
            <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${current.color} rounded-full opacity-5 blur-3xl`} />
            <div className="relative">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${current.color} p-[1px] flex-shrink-0`}>
                  <div className="w-full h-full rounded-2xl bg-[#0a0e1a] flex items-center justify-center">
                    <current.icon className="w-6 h-6 text-white/80" />
                  </div>
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                    {current.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {current.name}
                  </h3>
                  <p className="text-sm text-white/60 mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                    {current.tagline}
                  </p>
                </div>
              </div>

              <p className="text-white/50 leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter)" }}>
                {current.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-inter)" }}>Para que reseller</p>
                  <p className="text-sm text-white/60" style={{ fontFamily: "var(--font-inter)" }}>{current.resellerUse}</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-inter)" }}>Respaldo RentPower</p>
                  <p className="text-sm text-white/60" style={{ fontFamily: "var(--font-inter)" }}>{current.support}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
