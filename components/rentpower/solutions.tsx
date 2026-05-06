"use client"

import { useState } from "react"
import { Globe, Shield, Monitor, Cloud, Smartphone, Wifi, Lock, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

const solutions = [
  {
    id: "wayground",
    name: "WayGround",
    category: "DaaS Platform",
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
    tagline: "Hardware as a Service, reinventado",
    description: "Plataforma DaaS que permite ofrecer equipos como servicio con gestión de ciclo de vida completa. Sin CAPEX para tu cliente, con margen recurrente para tu canal.",
    forWhom: "Canales que venden a corporativos, gobierno y educación",
    differentiator: "Único DaaS con renovación automática y logística inversa incluida en LATAM",
    metrics: [
      { label: "Margen mensual", value: "15-25%" },
      { label: "Retención", value: "94%" },
      { label: "Ciclo promedio", value: "36 meses" },
    ],
  },
  {
    id: "alkira",
    name: "Alkira",
    category: "Cloud Networking",
    icon: Globe,
    color: "from-purple-500 to-blue-500",
    tagline: "Network as a Service, multi-cloud",
    description: "Infraestructura de red cloud-native. Conectá cualquier nube, cualquier ubicación, en minutos. Sin hardware, sin complejidad.",
    forWhom: "Empresas multi-cloud y canales con clientes enterprise",
    differentiator: "Networking cloud desplegado en minutos, no semanas",
    metrics: [
      { label: "Deploy time", value: "<15 min" },
      { label: "Nubes soportadas", value: "3+" },
      { label: "Uptime SLA", value: "99.99%" },
    ],
  },
  {
    id: "seqrite",
    name: "SEQRITE",
    category: "Cybersecurity",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    tagline: "Ciberseguridad enterprise accesible",
    description: "Suite completa de ciberseguridad: endpoint, XDR, DLP y Zero Trust. Protección enterprise sin complejidad enterprise.",
    forWhom: "Canales con clientes medianos y grandes que necesitan compliance",
    differentiator: "Suite completa al costo de una solución puntual",
    metrics: [
      { label: "Threats blocked", value: "99.7%" },
      { label: "False positives", value: "<0.1%" },
      { label: "Deploy", value: "24h" },
    ],
  },
  {
    id: "reacondicionados",
    name: "Reacondicionados",
    category: "Hardware Circular",
    icon: Monitor,
    color: "from-emerald-500 to-teal-500",
    tagline: "Premium certified. Fracción del costo.",
    description: "Equipos reacondicionados grado A con garantía extendida. Ideal para DaaS, renovación de flotas y proyectos con presupuesto ajustado.",
    forWhom: "Canales con proyectos de volumen, educación y gobierno",
    differentiator: "Grado A certificado con 40-60% menos costo y garantía completa",
    metrics: [
      { label: "Ahorro vs nuevo", value: "40-60%" },
      { label: "Garantía", value: "12 meses" },
      { label: "Disponibilidad", value: "48h" },
    ],
  },
  {
    id: "luma",
    name: "Luma Cloud",
    category: "Cloud Platform",
    icon: Cloud,
    color: "from-sky-500 to-blue-500",
    tagline: "Cloud gestionado para LATAM",
    description: "Infraestructura cloud con data residency en LATAM. Backup, disaster recovery y migración incluidos.",
    forWhom: "Canales con clientes que necesitan cloud con compliance local",
    differentiator: "Cloud con residencia de datos LATAM y soporte en español",
    metrics: [
      { label: "Uptime", value: "99.95%" },
      { label: "Data centers", value: "5 LATAM" },
      { label: "Migración", value: "Incluida" },
    ],
  },
  {
    id: "quickheal",
    name: "Quick Heal",
    category: "Endpoint Security",
    icon: Lock,
    color: "from-amber-500 to-red-500",
    tagline: "Protección endpoint simplificada",
    description: "Antivirus y endpoint protection con gestión centralizada. Ideal para PYMEs y despliegues masivos.",
    forWhom: "Canales con base instalada PYME y contratos de volumen",
    differentiator: "Licenciamiento flexible con margen superior al 40%",
    metrics: [
      { label: "Margen canal", value: ">40%" },
      { label: "Endpoints", value: "Ilimitados" },
      { label: "Gestión", value: "Cloud" },
    ],
  },
  {
    id: "scalefusion",
    name: "Scalefusion",
    category: "MDM / UEM",
    icon: Smartphone,
    color: "from-violet-500 to-purple-500",
    tagline: "Gestión de dispositivos enterprise",
    description: "MDM y Unified Endpoint Management. Control total de flotas móviles, kioscos y dispositivos corporativos.",
    forWhom: "Canales con clientes en retail, logística y field services",
    differentiator: "UEM multi-OS con kiosk mode y geofencing incluido",
    metrics: [
      { label: "Dispositivos", value: "Multi-OS" },
      { label: "Deploy", value: "Same day" },
      { label: "Features", value: "200+" },
    ],
  },
  {
    id: "pulsus",
    name: "Pulsus",
    category: "MDM LATAM",
    icon: Wifi,
    color: "from-teal-500 to-cyan-500",
    tagline: "MDM nativo para Latinoamérica",
    description: "Gestión de dispositivos móviles diseñada para LATAM. Soporte local, interfaz en español, compliance regional.",
    forWhom: "Canales que necesitan MDM con soporte nativo en LATAM",
    differentiator: "Único MDM con soporte nativo en español y compliance LATAM",
    metrics: [
      { label: "Idioma", value: "Nativo ES" },
      { label: "Soporte", value: "LATAM" },
      { label: "Compliance", value: "Local" },
    ],
  },
]

export function RentPowerSolutions() {
  const [active, setActive] = useState(0)
  const current = solutions[active]

  return (
    <section id="soluciones" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0a0f1d] to-[#0a0e1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs text-blue-400/80 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Portafolio de soluciones
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-[-0.03em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Soluciones que{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              venden solas
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
            Cada solución incluye preventa, demos, POC y soporte técnico. Vos vendés, nosotros respaldamos.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Solution tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {solutions.map((sol, i) => (
              <button
                key={sol.id}
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal min-w-max lg:min-w-0",
                  active === i
                    ? "bg-white/[0.06] border border-white/10 shadow-lg"
                    : "border border-transparent hover:bg-white/[0.03]"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all",
                  active === i ? `bg-gradient-to-br ${sol.color}` : "bg-white/5"
                )}>
                  <sol.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className={cn(
                    "text-sm font-semibold transition-colors tracking-[-0.01em]",
                    active === i ? "text-white" : "text-white/50"
                  )} style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {sol.name}
                  </div>
                  <div className="text-xs text-white/30 hidden lg:block" style={{ fontFamily: "var(--font-inter)" }}>
                    {sol.category}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Solution detail */}
          <div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
            {/* Background glow */}
            <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${current.color} rounded-full opacity-5 blur-3xl`} />

            <div className="relative">
              {/* Header */}
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
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-[-0.02em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {current.name}
                  </h3>
                  <p className="text-sm text-white/60 mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                    {current.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/50 leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
                {current.description}
              </p>

              {/* For whom + Differentiator */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                    Ideal para
                  </p>
                  <p className="text-sm text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
                    {current.forWhom}
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                    Diferenciador
                  </p>
                  <p className="text-sm text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
                    {current.differentiator}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-4">
                {current.metrics.map((metric) => (
                  <div key={metric.label} className="flex-1 min-w-[100px] p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center">
                    <div className={`text-xl font-bold bg-gradient-to-r ${current.color} bg-clip-text text-transparent`} style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-white/30 mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
