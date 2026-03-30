"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   SVG Illustrations for each step
   ───────────────────────────────────────────── */

function DiagnosticoIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background glow */}
      <defs>
        <radialGradient id="diag-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00ffe3" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00ffe3" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="diag-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00ffe3" />
          <stop offset="100%" stopColor="#00a6d6" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="280" height="200" fill="url(#diag-glow)" rx="20" />

      {/* Monitor frame */}
      <rect x="50" y="25" width="180" height="120" rx="8" fill="#0d1b2a" stroke="#1e3a5f" strokeWidth="1.5" />
      <rect x="50" y="25" width="180" height="14" rx="8" fill="#1e3a5f" />
      {/* Window dots */}
      <circle cx="62" cy="32" r="2.5" fill="#ff5f56" />
      <circle cx="72" cy="32" r="2.5" fill="#ffbd2e" />
      <circle cx="82" cy="32" r="2.5" fill="#27c93f" />

      {/* Dashboard content */}
      {/* Bar chart */}
      <rect x="65" y="105" width="14" height="30" rx="2" fill="url(#diag-bar)" opacity="0.6">
        <animate attributeName="height" values="20;30;20" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y" values="115;105;115" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="85" y="90" width="14" height="45" rx="2" fill="url(#diag-bar)" opacity="0.8">
        <animate attributeName="height" values="35;45;35" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="y" values="100;90;100" dur="3.5s" repeatCount="indefinite" />
      </rect>
      <rect x="105" y="80" width="14" height="55" rx="2" fill="url(#diag-bar)" opacity="1">
        <animate attributeName="height" values="45;55;45" dur="4s" repeatCount="indefinite" />
        <animate attributeName="y" values="90;80;90" dur="4s" repeatCount="indefinite" />
      </rect>
      <rect x="125" y="95" width="14" height="40" rx="2" fill="url(#diag-bar)" opacity="0.7">
        <animate attributeName="height" values="30;40;30" dur="3.2s" repeatCount="indefinite" />
        <animate attributeName="y" values="105;95;105" dur="3.2s" repeatCount="indefinite" />
      </rect>

      {/* Pie chart */}
      <circle cx="180" cy="95" r="25" fill="none" stroke="#1e3a5f" strokeWidth="8" />
      <circle cx="180" cy="95" r="25" fill="none" stroke="#00ffe3" strokeWidth="8" strokeDasharray="100 57" strokeDashoffset="0" strokeLinecap="round">
        <animate attributeName="strokeDasharray" values="80 77;100 57;80 77" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="95" r="25" fill="none" stroke="#00a6d6" strokeWidth="8" strokeDasharray="40 117" strokeDashoffset="-100" strokeLinecap="round" />

      {/* Trend line */}
      <polyline points="60,55 90,65 110,50 130,60 155,45" fill="none" stroke="#00ffe3" strokeWidth="1.5" opacity="0.5" />
      <circle cx="155" cy="45" r="3" fill="#00ffe3" opacity="0.8">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Magnifying glass */}
      <g transform="translate(205, 120)">
        <circle cx="15" cy="15" r="14" fill="none" stroke="#00ffe3" strokeWidth="2" opacity="0.6" />
        <line x1="25" y1="25" x2="35" y2="35" stroke="#00ffe3" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <path d="M10 15 L20 15" stroke="#00ffe3" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M15 10 L15 20" stroke="#00ffe3" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </g>

      {/* Monitor stand */}
      <rect x="120" y="145" width="40" height="6" rx="2" fill="#1e3a5f" />
      <rect x="130" y="151" width="20" height="3" rx="1" fill="#1e3a5f" opacity="0.6" />

      {/* Status indicators */}
      <circle cx="62" cy="170" r="4" fill="#00ffe3" opacity="0.7">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <rect x="72" y="167" width="45" height="6" rx="3" fill="#1e3a5f" opacity="0.5" />
      <circle cx="62" cy="185" r="4" fill="#00a6d6" opacity="0.5" />
      <rect x="72" y="182" width="35" height="6" rx="3" fill="#1e3a5f" opacity="0.4" />
    </svg>
  );
}

function PropuestaIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="prop-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00a6d6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00a6d6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="prop-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00ffe3" />
          <stop offset="100%" stopColor="#00a6d6" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="280" height="200" fill="url(#prop-glow)" rx="20" />

      {/* Document stack */}
      {/* Back doc */}
      <rect x="80" y="22" width="130" height="165" rx="6" fill="#0d1b2a" stroke="#1e3a5f" strokeWidth="1" transform="rotate(3 145 100)" />
      {/* Front doc */}
      <rect x="70" y="18" width="130" height="165" rx="6" fill="#0f2237" stroke="#1e3a5f" strokeWidth="1.5" />

      {/* Document header */}
      <rect x="85" y="30" width="65" height="4" rx="2" fill="#00ffe3" opacity="0.7" />
      <rect x="85" y="40" width="45" height="3" rx="1.5" fill="#1e3a5f" opacity="0.8" />

      {/* Divider */}
      <line x1="85" y1="52" x2="185" y2="52" stroke="#1e3a5f" strokeWidth="0.5" />

      {/* Architecture diagram on doc */}
      {/* Cloud box */}
      <rect x="95" y="60" width="40" height="22" rx="4" fill="none" stroke="#00ffe3" strokeWidth="1" opacity="0.6" />
      <text x="115" y="74" textAnchor="middle" fill="#00ffe3" fontSize="7" opacity="0.7" fontFamily="sans-serif">Cloud</text>

      {/* Security box */}
      <rect x="145" y="60" width="40" height="22" rx="4" fill="none" stroke="#00a6d6" strokeWidth="1" opacity="0.6" />
      <text x="165" y="74" textAnchor="middle" fill="#00a6d6" fontSize="7" opacity="0.7" fontFamily="sans-serif">Security</text>

      {/* Connection lines */}
      <line x1="135" y1="71" x2="145" y2="71" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="3 2" />

      {/* Lower block */}
      <rect x="115" y="90" width="50" height="22" rx="4" fill="none" stroke="#00ffe3" strokeWidth="1" opacity="0.4" />
      <text x="140" y="104" textAnchor="middle" fill="#00ffe3" fontSize="7" opacity="0.5" fontFamily="sans-serif">Backup</text>

      {/* Vertical connectors */}
      <line x1="115" y1="82" x2="130" y2="90" stroke="#1e3a5f" strokeWidth="0.8" strokeDasharray="3 2" />
      <line x1="165" y1="82" x2="150" y2="90" stroke="#1e3a5f" strokeWidth="0.8" strokeDasharray="3 2" />

      {/* Text lines */}
      <rect x="85" y="122" width="95" height="3" rx="1.5" fill="#1e3a5f" opacity="0.5" />
      <rect x="85" y="130" width="70" height="3" rx="1.5" fill="#1e3a5f" opacity="0.4" />
      <rect x="85" y="138" width="85" height="3" rx="1.5" fill="#1e3a5f" opacity="0.3" />

      {/* Investment summary */}
      <rect x="85" y="150" width="100" height="20" rx="4" fill="#00ffe3" fillOpacity="0.08" stroke="#00ffe3" strokeWidth="0.5" strokeOpacity="0.3" />
      <text x="135" y="163" textAnchor="middle" fill="#00ffe3" fontSize="8" opacity="0.6" fontFamily="sans-serif">Propuesta a medida</text>

      {/* Checkmarks floating */}
      <g opacity="0.7">
        <circle cx="215" cy="45" r="12" fill="#00ffe3" opacity="0.1" />
        <path d="M209 45 L213 49 L221 41" stroke="#00ffe3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
        </path>
      </g>

      <g opacity="0.5">
        <circle cx="225" cy="85" r="10" fill="#00a6d6" opacity="0.1" />
        <path d="M220 85 L223 88 L230 81" stroke="#00a6d6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite" />
        </path>
      </g>

      <g opacity="0.4">
        <circle cx="220" cy="125" r="10" fill="#00ffe3" opacity="0.08" />
        <path d="M215 125 L218 128 L225 121" stroke="#00ffe3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Pencil icon */}
      <g transform="translate(35, 85)" opacity="0.5">
        <rect x="0" y="5" width="6" height="25" rx="1" fill="#00a6d6" transform="rotate(-30 3 17)" />
        <polygon points="0,32 -2,38 6,34" fill="#00ffe3" transform="rotate(-30 3 17)" opacity="0.6" />
      </g>
    </svg>
  );
}

function ImplementacionIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="impl-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00ffe3" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#00ffe3" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="impl-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00ffe3" />
          <stop offset="100%" stopColor="#00a6d6" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="280" height="200" fill="url(#impl-glow)" rx="20" />

      {/* Central rocket */}
      <g transform="translate(140, 100)">
        {/* Exhaust particles */}
        <circle cx="-5" cy="42" r="3" fill="#00ffe3" opacity="0.3">
          <animate attributeName="cy" values="42;55;42" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="5" cy="45" r="2" fill="#00a6d6" opacity="0.2">
          <animate attributeName="cy" values="45;60;45" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="40" r="4" fill="#00ffe3" opacity="0.2">
          <animate attributeName="cy" values="40;58;40" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="1.8s" repeatCount="indefinite" />
        </circle>

        {/* Rocket body */}
        <path d="M0 -35 C-12 -20 -12 15 -8 30 L8 30 C12 15 12 -20 0 -35Z" fill="#0f2237" stroke="#1e3a5f" strokeWidth="1.5" />
        {/* Rocket nose cone */}
        <path d="M0 -35 C-6 -28 -8 -20 -8 -12 L8 -12 C8 -20 6 -28 0 -35Z" fill="url(#impl-gradient)" opacity="0.6" />
        {/* Window */}
        <circle cx="0" cy="0" r="6" fill="#0a1628" stroke="#00ffe3" strokeWidth="1" opacity="0.8" />
        <circle cx="0" cy="0" r="3" fill="#00ffe3" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Fins */}
        <path d="M-8 20 L-18 32 L-8 28Z" fill="#00a6d6" opacity="0.4" />
        <path d="M8 20 L18 32 L8 28Z" fill="#00a6d6" opacity="0.4" />
        {/* Flame */}
        <path d="M-6 30 Q0 45 6 30" fill="#00ffe3" opacity="0.5">
          <animate attributeName="d" values="M-6 30 Q0 45 6 30;M-6 30 Q0 50 6 30;M-6 30 Q0 45 6 30" dur="0.5s" repeatCount="indefinite" />
        </path>
        <path d="M-4 30 Q0 40 4 30" fill="#fff" opacity="0.3">
          <animate attributeName="d" values="M-4 30 Q0 40 4 30;M-4 30 Q0 44 4 30;M-4 30 Q0 40 4 30" dur="0.4s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Orbit ring */}
      <ellipse cx="140" cy="100" rx="85" ry="25" fill="none" stroke="#1e3a5f" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4" />

      {/* Orbiting nodes */}
      <circle cx="55" cy="100" r="5" fill="#00ffe3" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="225" cy="100" r="5" fill="#00a6d6" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.2;0.4" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Progress bar */}
      <rect x="45" y="158" width="190" height="6" rx="3" fill="#0d1b2a" />
      <rect x="45" y="158" width="170" height="6" rx="3" fill="url(#impl-gradient)" opacity="0.7">
        <animate attributeName="width" values="140;170;140" dur="4s" repeatCount="indefinite" />
      </rect>

      {/* Percentage */}
      <text x="140" y="180" textAnchor="middle" fill="#00ffe3" fontSize="11" fontFamily="sans-serif" fontWeight="bold" opacity="0.6">
        Operación activa
      </text>

      {/* Server nodes left */}
      <g transform="translate(30, 35)">
        <rect x="0" y="0" width="28" height="18" rx="3" fill="#0d1b2a" stroke="#1e3a5f" strokeWidth="0.8" />
        <circle cx="8" cy="9" r="2" fill="#00ffe3" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <rect x="14" y="7" width="10" height="2" rx="1" fill="#1e3a5f" />
      </g>
      <g transform="translate(30, 58)">
        <rect x="0" y="0" width="28" height="18" rx="3" fill="#0d1b2a" stroke="#1e3a5f" strokeWidth="0.8" />
        <circle cx="8" cy="9" r="2" fill="#27c93f" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.3;0.5" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <rect x="14" y="7" width="10" height="2" rx="1" fill="#1e3a5f" />
      </g>

      {/* Shield right */}
      <g transform="translate(222, 35)">
        <path d="M15 0 L30 8 L30 20 C30 28 23 34 15 38 C7 34 0 28 0 20 L0 8Z" fill="#0d1b2a" stroke="#00ffe3" strokeWidth="0.8" opacity="0.5" />
        <path d="M10 18 L14 22 L22 14" stroke="#00ffe3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Floating dots */}
      <circle cx="75" cy="140" r="2" fill="#00ffe3" opacity="0.3" />
      <circle cx="200" cy="145" r="1.5" fill="#00a6d6" opacity="0.4" />
      <circle cx="250" cy="130" r="2" fill="#00ffe3" opacity="0.2" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Process Step data
   ───────────────────────────────────────────── */
interface ProcessStep {
  number: string;
  title: string;
  description: string;
  illustration: React.ReactNode;
  accentColor: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos tu infraestructura actual, identificamos brechas de seguridad y mapeamos oportunidades de optimización para construir una línea base sólida.",
    illustration: <DiagnosticoIllustration />,
    accentColor: "#00ffe3",
  },
  {
    number: "02",
    title: "Propuesta",
    description:
      "Diseñamos una estrategia personalizada con la arquitectura, costos, cronograma y partners ideales para tu operación empresarial.",
    illustration: <PropuestaIllustration />,
    accentColor: "#00a6d6",
  },
  {
    number: "03",
    title: "Implementación",
    description:
      "Desplegamos, configuramos y monitoreamos tu nueva infraestructura con soporte continuo 24/7 para garantizar cero interrupciones.",
    illustration: <ImplementacionIllustration />,
    accentColor: "#00ffe3",
  },
];

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */
export function TransformationJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-transparent to-muted/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent/3 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section header */}
        <div
          className={cn(
            "text-center mb-16 lg:mb-20 max-w-3xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground dark:from-white dark:to-gray-300">
              Tu camino hacia la{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffe3] to-[#00a6d6]">
              transformación digital
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Un proceso probado en tres fases que transforma tu operación sin
            riesgos ni interrupciones.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "group relative transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{
                transitionDelay: isVisible ? `${(index + 1) * 200}ms` : "0ms",
              }}
            >
              {/* Connection line between cards (desktop only) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-[110px] -right-4 w-8 z-20">
                  <svg viewBox="0 0 32 20" fill="none" className="w-full">
                    <path
                      d="M0 10 L24 10"
                      stroke="#1e3a5f"
                      strokeWidth="2"
                      strokeDasharray="4 3"
                    />
                    <path
                      d="M20 5 L28 10 L20 15"
                      stroke={step.accentColor}
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.6"
                    />
                  </svg>
                </div>
              )}

              {/* Card */}
              <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5">
                {/* Illustration area */}
                <div className="relative h-[200px] bg-gradient-to-br from-[#080f1a] via-[#0d1b2a] to-[#0a1628] overflow-hidden">
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${step.accentColor}10 0%, transparent 70%)`,
                    }}
                  />
                  {/* SVG Illustration */}
                  <div className="relative z-10 p-4">
                    {step.illustration}
                  </div>
                  {/* Bottom fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card/80 to-transparent" />
                </div>

                {/* Text content */}
                <div className="p-6 lg:p-8">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold"
                      style={{
                        background: `${step.accentColor}15`,
                        color: step.accentColor,
                        border: `1px solid ${step.accentColor}30`,
                      }}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={cn(
            "mt-14 text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold rounded-full px-10 py-6 text-base shadow-lg shadow-[#00ffe3]/15 transition-all hover:scale-105 border-0"
          >
            <Link href="#contacto">Habla con un experto TI</Link>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Sin compromiso · Respuesta en menos de 24 horas
          </p>
        </div>
      </div>
    </section>
  );
}
