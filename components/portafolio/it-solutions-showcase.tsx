"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Cloud,
  ShieldCheck,
  RotateCcw,
  Headset,
  Network,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Solution data with visual config
   ───────────────────────────────────────────── */
interface ITSolution {
  title: string;
  icon: React.ReactNode;
  frontDescription: string;
  backTitle: string;
  backDescription: string;
  backBullets: string[];
  gradient: string;
  glowColor: string;
  pattern: "grid" | "circuits" | "waves" | "hexagons" | "nodes";
  accentHex: string;
}

const solutions: ITSolution[] = [
  {
    title: "Infraestructura y Servicios en la Nube",
    icon: <Cloud className="h-7 w-7" />,
    frontDescription:
      "Arquitecturas cloud que reducen riesgos, optimizan costos y preparan tu empresa para escalar sin fricción.",
    backTitle: "Cloud Infrastructure",
    backDescription:
      "Diseñamos y operamos entornos de nube pública, privada e híbrida con Data Centers Tier III y IV, garantizando alta disponibilidad y rendimiento.",
    backBullets: [
      "Escalabilidad inmediata bajo demanda",
      "Alta disponibilidad garantizada",
      "Reducción de CAPEX con modelo OpEx",
      "Arquitectura optimizada para cargas críticas",
      "Nube pública, privada e híbrida",
      "Data Center Tier III y Tier IV",
    ],
    gradient: "from-[#0a2540] via-[#0d3868] to-[#0a4d6e]",
    glowColor: "rgba(0,166,214,0.4)",
    pattern: "grid",
    accentHex: "#00a6d6",
  },
  {
    title: "Ciber Recuperación",
    icon: <RotateCcw className="h-7 w-7" />,
    frontDescription:
      "Garantizamos la continuidad operativa frente a ataques, fallas o desastres mediante estrategias avanzadas de respaldo y recuperación.",
    backTitle: "Continuidad y Recuperación",
    backDescription:
      "Estrategias de Backup, DRP, réplica y pruebas de control que aseguran la recuperación rápida de datos críticos y la continuidad de tu negocio.",
    backBullets: [
      "Backup inmutable protegido contra ransomware",
      "Plan de recuperación ante desastres (DRP)",
      "Réplica de datos en tiempo real",
      "Pruebas de control y validación periódica",
      "Bóveda de datos aislada de la red principal",
      "Recuperación de datos críticos en minutos",
    ],
    gradient: "from-[#1a0a3e] via-[#2d1b69] to-[#1a2d5e]",
    glowColor: "rgba(139,92,246,0.4)",
    pattern: "circuits",
    accentHex: "#8b5cf6",
  },
  {
    title: "Ciber Protección",
    icon: <ShieldCheck className="h-7 w-7" />,
    frontDescription:
      "Soluciones de ciberseguridad empresarial que previenen, detectan y responden ante amenazas reales.",
    backTitle: "Protección Activa y Continua",
    backDescription:
      "Defensa multicapa que cubre antivirus, DLP, seguridad perimetral y WAF, complementada con monitoreo SOC 24/7 para respuesta en tiempo real.",
    backBullets: [
      "Antivirus y antimalware de última generación",
      "Prevención de pérdida de datos (DLP)",
      "Seguridad perimetral y firewall avanzado",
      "Web Application Firewall (WAF)",
      "Monitoreo SOC 24/7/365",
      "Detección, análisis y respuesta a incidentes (SIEM)",
    ],
    gradient: "from-[#0a2e2e] via-[#0d4a4a] to-[#0a3d3d]",
    glowColor: "rgba(0,255,227,0.35)",
    pattern: "hexagons",
    accentHex: "#00ffe3",
  },
  {
    title: "Servicios Profesionales",
    icon: <Headset className="h-7 w-7" />,
    frontDescription:
      "No solo administramos tu infraestructura. Nos convertimos en tu aliado tecnológico estratégico.",
    backTitle: "Tu Aliado Tecnológico",
    backDescription:
      "Equipo especializado con soporte 24/7 en español, flexibilidad financiera y recursos dedicados para la operación continua de tu negocio.",
    backBullets: [
      "Data Center Tier III y Tier IV",
      "Soporte en vivo 24/7 en español",
      "Flexibilidad financiera (OpEx / suscripción)",
      "Tráfico ilimitado sin restricciones",
      "Protección anti-DDoS incluida",
      "Recursos dedicados y escalabilidad bajo demanda",
    ],
    gradient: "from-[#1a1a2e] via-[#2a2a4a] to-[#1a2a3e]",
    glowColor: "rgba(59,130,246,0.4)",
    pattern: "waves",
    accentHex: "#3b82f6",
  },
  {
    title: "Administración de Nubes",
    icon: <Network className="h-7 w-7" />,
    frontDescription:
      "Conecta nubes, data centers y sucursales desde una sola plataforma sin hardware, con Alkira.",
    backTitle: "Alkira · Administración de Nubes",
    backDescription:
      "Diseña, despliega y gestiona toda tu red desde una sola plataforma, sin infraestructura física. Modelo flexible, escalable y bajo suscripción.",
    backBullets: [
      "Red global simple y sin hardware",
      "Conectividad total: multi-cloud + on-premise en una sola red segura",
      "Implementación rápida: servicios de red en minutos, sin configuraciones manuales",
    ],
    gradient: "from-[#0a1628] via-[#162a50] to-[#0a2040]",
    glowColor: "rgba(6,182,212,0.4)",
    pattern: "nodes",
    accentHex: "#06b6d4",
  },
];

/* ─────────────────────────────────────────────
   SVG Patterns for card headers
   ───────────────────────────────────────────── */
function PatternOverlay({ pattern, color }: { pattern: string; color: string }) {
  switch (pattern) {
    case "grid":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={color} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          {/* Animated pulse dots at intersections */}
          <circle cx="40" cy="40" r="2" fill={color} opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="120" cy="80" r="2" fill={color} opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="40" r="1.5" fill={color} opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      );
    case "circuits":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L30 20 M30 40 L30 60 M0 30 L20 30 M40 30 L60 30" fill="none" stroke={color} strokeWidth="0.8" />
              <circle cx="30" cy="30" r="3" fill="none" stroke={color} strokeWidth="0.8" />
              <circle cx="30" cy="30" r="1" fill={color} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      );
    case "waves":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" width="200" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 Q50 0 100 20 Q150 40 200 20" fill="none" stroke={color} strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      );
    case "hexagons":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-12" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-pattern" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(0.7)">
              <path d="M28 0 L56 15 56 45 28 60 0 45 0 15Z" fill="none" stroke={color} strokeWidth="0.8" />
              <path d="M28 60 L56 75 56 105 28 120 0 105 0 75Z" fill="none" stroke={color} strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>
      );
    case "nodes":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20%" cy="30%" r="3" fill={color} opacity="0.5">
            <animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="50%" cy="20%" r="2" fill={color} opacity="0.4" />
          <circle cx="80%" cy="40%" r="3" fill={color} opacity="0.6">
            <animate attributeName="r" values="3;4;3" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="35%" cy="70%" r="2" fill={color} opacity="0.3" />
          <circle cx="65%" cy="60%" r="2.5" fill={color} opacity="0.5" />
          <line x1="20%" y1="30%" x2="50%" y2="20%" stroke={color} strokeWidth="0.5" opacity="0.3" />
          <line x1="50%" y1="20%" x2="80%" y2="40%" stroke={color} strokeWidth="0.5" opacity="0.3" />
          <line x1="35%" y1="70%" x2="65%" y2="60%" stroke={color} strokeWidth="0.5" opacity="0.3" />
          <line x1="20%" y1="30%" x2="35%" y2="70%" stroke={color} strokeWidth="0.5" opacity="0.2" />
          <line x1="80%" y1="40%" x2="65%" y2="60%" stroke={color} strokeWidth="0.5" opacity="0.2" />
        </svg>
      );
    default:
      return null;
  }
}

/* ─────────────────────────────────────────────
   Single Solution Card
   ───────────────────────────────────────────── */
function SolutionCard({ solution, index }: { solution: ITSolution; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group cursor-pointer transition-all duration-700",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      )}
      style={{ perspective: "1200px" }}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${solution.title}. Click to ${isFlipped ? "see overview" : "learn more"}`}
    >
      <div
        className="relative w-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "420px",
        }}
      >
        {/* ───── FRONT ───── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Card className="h-full border-0 rounded-2xl overflow-hidden bg-transparent shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
            {/* Image/Visual Header */}
            <div
              className={cn(
                "relative h-[180px] overflow-hidden bg-gradient-to-br",
                solution.gradient
              )}
            >
              {/* Animated gradient glow */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[60px] transition-all duration-700 group-hover:scale-150 group-hover:blur-[80px]"
                style={{ backgroundColor: solution.glowColor }}
              />
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-[50px] opacity-50 transition-all duration-700 group-hover:opacity-80"
                style={{ backgroundColor: solution.glowColor }}
              />
              {/* SVG pattern overlay */}
              <PatternOverlay pattern={solution.pattern} color={solution.accentHex} />

              {/* Centered floating icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="relative flex items-center justify-center w-20 h-20 rounded-2xl backdrop-blur-md border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    backgroundColor: `${solution.accentHex}15`,
                    borderColor: `${solution.accentHex}40`,
                    boxShadow: `0 0 30px ${solution.glowColor}, inset 0 0 20px ${solution.accentHex}10`,
                  }}
                >
                  <div style={{ color: solution.accentHex }}>{solution.icon}</div>
                </div>
              </div>

              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
            </div>

            {/* Text content */}
            <div className="p-6 flex flex-col flex-1 bg-card">
              <h3 className="text-lg lg:text-xl font-bold mb-2 text-foreground leading-snug text-balance">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty flex-1">
                {solution.frontDescription}
              </p>
              <div
                className="flex items-center gap-2 text-sm font-semibold mt-4 transition-all duration-300 group-hover:gap-3"
                style={{ color: solution.accentHex }}
              >
                <span>Descubrir más</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Card>
        </div>

        {/* ───── BACK ───── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Card
            className="h-full border rounded-2xl overflow-hidden p-5 flex flex-col"
            style={{
              borderColor: `${solution.accentHex}30`,
              background: `linear-gradient(135deg, ${solution.accentHex}08 0%, ${solution.accentHex}04 50%, transparent 100%)`,
            }}
          >
            {/* Back header bar */}
            <div
              className="flex items-center gap-3 mb-3 pb-3 border-b"
              style={{ borderColor: `${solution.accentHex}20` }}
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg"
                style={{
                  backgroundColor: `${solution.accentHex}15`,
                  color: solution.accentHex,
                }}
              >
                {solution.icon}
              </div>
              <h3
                className="text-lg font-bold"
                style={{ color: solution.accentHex }}
              >
                {solution.backTitle}
              </h3>
            </div>

            <p className="text-sm text-foreground/85 leading-relaxed mb-3 text-pretty">
              {solution.backDescription}
            </p>

            {/* Bullets */}
            <div className="flex-1 overflow-y-auto">
              <ul className="space-y-2">
                {solution.backBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: solution.accentHex }}
                    />
                    <span className="text-sm text-foreground/85 leading-snug">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back footer */}
            <div
              className="flex items-center gap-2 text-xs font-medium pt-3 mt-2 border-t flex-shrink-0"
              style={{
                borderColor: `${solution.accentHex}20`,
                color: solution.accentHex,
              }}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Click para volver</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Section Component
   ───────────────────────────────────────────── */
export function ITSolutionsShowcase() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="mb-16 lg:mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <ShieldCheck className="h-4 w-4" />
            Portafolio de Soluciones
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-5 text-foreground">
            Nuestras{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffe3] to-[#00a6d6]">
              Soluciones IT
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Haz click en cada tarjeta para descubrir cómo protegemos y
            potenciamos tu operación con tecnología de clase mundial.
          </p>
        </div>

        {/* Bento-style grid: row 1 → 3 cards, row 2 → 2 wider cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={cn(
                index < 3
                  ? "lg:col-span-2" /* First 3: each takes 2 of 6 cols */
                  : "lg:col-span-3" /* Last 2: each takes 3 of 6 cols */
              )}
            >
              <SolutionCard solution={solution} index={index} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
