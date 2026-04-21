"use client";

import { useState } from "react";
import { Monitor, Projector, Layers, Tv2, ArrowRight, CheckCircle, Award, Wrench, ShieldCheck, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const categories = [
  {
    id: "proyectores",
    icon: Projector,
    title: "Proyectores Láser",
    subtitle: "Alta durabilidad · DLP Technology",
    description:
      "Proyectores con tecnología láser DLP diseñados para entornos que requieren alto desempeño, continuidad operativa y bajo mantenimiento. Ofrecen imágenes brillantes, larga vida útil y flexibilidad de instalación para espacios corporativos, educativos y de gran formato.",
    features: [
      "Hasta 30,000 horas de vida útil láser",
      "Brillo superior sin degradación de imagen",
      "Instalación flexible (corta, ultracorta, larga distancia)",
      "Bajo costo de mantenimiento total",
    ],
    useCases: ["Salas de conferencias", "Auditorios y teatros", "Aulas universitarias"],
    accent: "#CD2027",
    lightAccent: "rgba(205, 32, 39, 0.08)",
    stat: "30K h",
    statLabel: "Vida útil láser",
    image: "/images/viewsonic-projector-room.png",
    imageAlt: "Proyector láser ViewSonic en auditorio corporativo",
  },
  {
    id: "interactivas",
    icon: Monitor,
    title: "Pantallas Interactivas",
    subtitle: "ViewBoard® · Colaboración inteligente",
    description:
      "Las pantallas interactivas ViewBoard permiten optimizar la colaboración y la productividad con una experiencia táctil intuitiva, integración de software y herramientas que facilitan la gestión de contenidos y el trabajo en equipo.",
    features: [
      "Pantalla táctil multiusuario simultáneo",
      "Software de colaboración integrado incluido",
      "Compatible con videoconferencia (Zoom, Teams)",
      "Integración con dispositivos móviles y PC",
    ],
    useCases: ["Salas de juntas ejecutivas", "Aulas interactivas", "Centro de operaciones"],
    accent: "#0070C0",
    lightAccent: "rgba(0, 112, 192, 0.08)",
    stat: "4K UHD",
    statLabel: "Resolución Ultra HD",
    image: "/images/viewsonic-team-interactive.png",
    imageAlt: "Equipo usando pantalla interactiva ViewBoard en reunión",
  },
  {
    id: "monitores",
    icon: Layers,
    title: "Monitores Profesionales",
    subtitle: "Edición · Videoconferencia · Gaming",
    description:
      "Un portafolio completo que cubre desde necesidades básicas de oficina hasta entornos profesionales exigentes. Incluye monitores para edición, soluciones con docking USB-C para videoconferencia y equipos de alto desempeño para aplicaciones especializadas y gaming.",
    features: [
      "Monitores USB-C con docking integrado",
      "Calibración de color profesional certificada",
      "Pantallas ergonómicas para largas jornadas",
      "Gaming con alta tasa de refresco",
    ],
    useCases: ["Diseño gráfico y edición", "Trabajo remoto", "Estaciones de desarrollo"],
    accent: "#2EAFC7",
    lightAccent: "rgba(46, 175, 199, 0.08)",
    stat: "144Hz",
    statLabel: "Tasa de refresco",
    image: "/images/viewsonic-monitor-workstation.png",
    imageAlt: "Estación de trabajo con monitores profesionales ViewSonic",
  },
  {
    id: "signage",
    icon: Tv2,
    title: "Digital Signage",
    subtitle: "Señalización digital · 24/7 operation",
    description:
      "Soluciones de señalización digital diseñadas para operación continua y gestión eficiente de contenidos. Ideales para entornos comerciales y corporativos que requieren comunicar de forma clara, dinámica y con alto impacto visual.",
    features: [
      "Operación 24/7 sin interrupciones",
      "Gestión remota de contenidos centralizada",
      "Alta luminosidad para ambientes iluminados",
      "Formatos horizontales y verticales disponibles",
    ],
    useCases: ["Retail y tiendas", "Lobbies corporativos", "Menús digitales y hospitality"],
    accent: "#F59E0B",
    lightAccent: "rgba(245, 158, 11, 0.08)",
    stat: "700 nit",
    statLabel: "Brillo máximo",
    image: "/images/viewsonic-digital-signage.png",
    imageAlt: "Pantalla de digital signage ViewSonic en lobby comercial",
  },
];

export function ViewSonicProducts() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const cat = categories[active];
  const Icon = cat.icon;

  const handleTabChange = (i: number) => {
    if (i === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(i);
      setAnimating(false);
    }, 180);
  };

  return (
    <section id="portafolio" className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-muted/5 to-background">
      {/* Subtle bg decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#CD2027]/30 bg-[#CD2027]/8 px-4 py-1.5 text-sm font-semibold text-[#CD2027] dark:text-[#f87171]">
            Portafolio ViewSonic
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-balance text-foreground">
            Soluciones para cada{" "}
            <span className="bg-gradient-to-r from-[#CD2027] to-[#e85960] bg-clip-text text-transparent">
              espacio de trabajo
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Desde proyectores láser hasta pantallas interactivas — ViewSonic tiene la solución visual que su organización necesita.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((c, i) => {
            const TabIcon = c.icon;
            const isActive = active === i;
            return (
              <button
                key={c.id}
                id={`viewsonic-tab-${c.id}`}
                onClick={() => handleTabChange(i)}
                aria-selected={isActive}
                role="tab"
                className={cn(
                  "group flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                  isActive
                    ? "border-transparent text-white shadow-lg scale-[1.04]"
                    : "border-foreground/15 bg-background text-muted-foreground hover:bg-foreground/5 hover:text-foreground hover:scale-[1.02]"
                )}
                style={
                  isActive
                    ? {
                        background: `linear-gradient(135deg, ${c.accent}, ${c.accent}cc)`,
                        boxShadow: `0 8px 24px ${c.accent}40`,
                      }
                    : {}
                }
              >
                <TabIcon className={cn("h-4 w-4 transition-transform", isActive ? "scale-110" : "group-hover:scale-110")} />
                <span className="hidden sm:inline">{c.title}</span>
                <span className="sm:hidden">{c.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Main content card */}
        <div
          className={cn(
            "grid gap-8 rounded-3xl border bg-card/50 backdrop-blur-sm shadow-2xl lg:grid-cols-2 lg:gap-0 overflow-hidden transition-all duration-300",
            animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          )}
          style={{ borderColor: `${cat.accent}25` }}
        >
          {/* Left: info */}
          <div className="flex flex-col justify-between space-y-8 p-8 md:p-10 lg:p-12">
            {/* Icon + title */}
            <div className="space-y-4">
              <div
                className="inline-flex items-center justify-center rounded-2xl p-4 shadow-lg transition-transform hover:scale-105"
                style={{ background: cat.lightAccent, border: `1px solid ${cat.accent}25` }}
              >
                <Icon className="h-8 w-8 transition-all" style={{ color: cat.accent }} />
              </div>

              <div>
                <p className="text-sm font-semibold mb-1 tracking-wide" style={{ color: cat.accent }}>
                  {cat.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground">
                  {cat.title}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed text-pretty">
                {cat.description}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3">
              {cat.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground group">
                  <CheckCircle
                    className="h-4 w-4 flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                    style={{ color: cat.accent }}
                  />
                  <span className="group-hover:text-foreground transition-colors">{f}</span>
                </li>
              ))}
            </ul>

            {/* Use cases */}
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">
                Casos de uso
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.useCases.map((u) => (
                  <span
                    key={u}
                    className="rounded-full border px-3 py-1 text-xs font-medium text-foreground transition-all hover:scale-105"
                    style={{ borderColor: `${cat.accent}30`, background: cat.lightAccent }}
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat + CTA */}
            <div className="flex items-center gap-6">
              <div
                className="flex-shrink-0 rounded-2xl border px-5 py-3 text-center"
                style={{ borderColor: `${cat.accent}30`, background: cat.lightAccent }}
              >
                <div className="text-3xl font-black tracking-tight" style={{ color: cat.accent }}>
                  {cat.stat}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{cat.statLabel}</div>
              </div>

              <Button
                asChild
                size="lg"
                className="group flex-1 rounded-full font-bold text-white shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl active:scale-95"
                style={{
                  background: `linear-gradient(135deg, ${cat.accent}, ${cat.accent}cc)`,
                  boxShadow: `0 8px 24px ${cat.accent}30`,
                }}
              >
                <Link href="#contacto">
                  Solicitar información
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: image panel */}
          <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden">
            <Image
              src={cat.image}
              alt={cat.imageAlt}
              fill
              className="object-cover transition-all duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay con accent color */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, ${cat.accent}30 0%, transparent 60%)`,
              }}
            />
            {/* Bottom info overlay */}
            <div className="absolute bottom-0 inset-x-0 p-6">
              <div className="rounded-2xl border border-white/20 bg-white/10 dark:bg-background/60 backdrop-blur-md p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white/70 dark:text-muted-foreground uppercase tracking-wider">
                      Tecnología ViewSonic
                    </p>
                    <p className="text-sm font-bold text-white dark:text-foreground">{cat.title}</p>
                  </div>
                  <div className="flex gap-1">
                    {["Garantía", "Soporte", "Instalación"].map((b) => (
                      <div
                        key={b}
                        className="rounded-lg border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-semibold text-white dark:text-foreground"
                      >
                        ✓ {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {[
            {
              icon: Award,
              text: "Distribuidor Autorizado ViewSonic",
              color: "#F59E0B",
              bg: "rgba(245, 158, 11, 0.08)",
            },
            {
              icon: Wrench,
              text: "Soporte T\u00e9cnico Especializado",
              color: "#0070C0",
              bg: "rgba(0, 112, 192, 0.08)",
            },
            {
              icon: ShieldCheck,
              text: "Garant\u00eda Oficial de F\u00e1brica",
              color: "#22C55E",
              bg: "rgba(34, 197, 94, 0.08)",
            },
            {
              icon: GraduationCap,
              text: "Capacitaci\u00f3n Incluida",
              color: "#A855F7",
              bg: "rgba(168, 85, 247, 0.08)",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="group flex items-center gap-2.5 rounded-full border border-foreground/10 bg-background px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all hover:scale-[1.03] hover:shadow-md"
                style={{
                  borderColor: `${item.color}30`,
                }}
              >
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: item.bg }}
                >
                  <Icon className="h-3.5 w-3.5" style={{ color: item.color }} />
                </div>
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
