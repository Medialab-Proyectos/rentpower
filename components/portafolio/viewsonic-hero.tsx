"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Monitor, Projector, Layers, Tv2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ViewSonicLogo } from "./viewsonic-logo";

const trustPoints = [
  "Distribuidor autorizado ViewSonic en Colombia",
  "Soporte técnico especializado post-venta",
  "Integración y acompañamiento de MacPower",
];

const productBadges = [
  { icon: Projector, label: "Proyectores Láser" },
  { icon: Monitor, label: "Pantallas Interactivas" },
  { icon: Layers, label: "Monitores Pro" },
  { icon: Tv2, label: "Digital Signage" },
];

export function ViewSonicHero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden py-10 md:py-16 lg:py-20 bg-gradient-to-br from-white via-[#fdf4f4] to-[#fce4e4] dark:from-[#0f0002] dark:via-[#150005] dark:to-[#1a0002]">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-[#CD2027]/15 dark:bg-[#CD2027]/8 blur-[130px]" />
        <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-[#52678D]/10 blur-[120px]" />
        <div className="absolute right-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-[#CD2027]/8 dark:bg-[#CD2027]/5 blur-[90px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #CD2027 1px, transparent 1px), linear-gradient(to bottom, #CD2027 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── Left: copy ── */}
          <div className="space-y-8">


            {/* ── Dual brand logos — ViewSonic PNG + MacPower adaptive ── */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="rounded-lg bg-[#07111a]/70 px-2 py-1 dark:bg-transparent dark:px-0 dark:py-0">
                <ViewSonicLogo className="h-6 sm:h-7 md:h-9 w-auto shrink-0 max-w-[120px] sm:max-w-[180px]" color="#ffffff" />
              </div>

              <span className="h-6 sm:h-8 w-px bg-foreground/15" />

              {/* MacPower: color en light, blanco en dark */}
              <Image
                src="/images/macpower-logo-original.png"
                alt="MacPower IT Solutions"
                width={130}
                height={30}
                className="h-5 sm:h-6 md:h-7 w-auto object-contain opacity-80 shrink-0 max-w-[100px] sm:max-w-[130px] dark:hidden"
              />
              <Image
                src="/images/macpower-logo-white.png"
                alt="MacPower IT Solutions"
                width={130}
                height={30}
                className="hidden h-5 sm:h-6 md:h-7 w-auto object-contain opacity-80 shrink-0 max-w-[100px] sm:max-w-[130px] dark:block"
              />
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
                Soluciones de{" "}
                <span className="bg-gradient-to-r from-[#CD2027] via-[#e02b32] to-[#f05060] bg-clip-text text-transparent">
                  Visualización
                </span>{" "}
                que transforman sus espacios
              </h1>

              <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                ViewSonic ofrece soluciones visuales diseñadas para optimizar la productividad,
                la comunicación y la colaboración en entornos empresariales y educativos.
                A través de MacPower, acceda a tecnologías confiables, fáciles de implementar y
                adaptadas a las necesidades de su operación.
              </p>
            </div>

            {/* Trust points */}
            <ul className="space-y-3">
              {trustPoints.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground md:text-base">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#CD2027]" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="group w-full sm:w-auto h-auto py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#CD2027] to-[#e85960] px-6 md:px-8 text-sm md:text-base font-bold text-white shadow-lg shadow-[#CD2027]/30 transition-all hover:from-[#b01a20] hover:to-[#CD2027] hover:scale-[1.04] hover:shadow-xl hover:shadow-[#CD2027]/40 active:scale-95"
              >
                <Link href="#contacto" className="flex items-center justify-center whitespace-normal text-center flex-wrap">
                  Solicitar asesoría gratuita
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto h-auto py-3.5 md:py-4 rounded-full border-foreground/20 bg-background px-6 md:px-8 text-sm md:text-base font-semibold hover:bg-foreground/5 hover:border-[#CD2027]/40 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Link href="#portafolio" className="flex justify-center whitespace-normal text-center">Ver portafolio</Link>
              </Button>
            </div>

          </div>

          {/* ── Right: hero image + floating overlays ── */}
          <div className="relative hidden lg:block">
            {/* Main image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-foreground/10">
              {/* Skeleton colour while loading */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#CD2027]/20 to-[#52678D]/20 transition-opacity duration-700 ${imgLoaded ? "opacity-0" : "opacity-100"}`}
              />
              <Image
                src="/images/viewsonic-team-interactive.png"
                alt="Equipo usando solución ViewSonic interactiva en sala corporativa"
                width={680}
                height={480}
                className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                onLoad={() => setImgLoaded(true)}
                priority
              />
              {/* Bottom fade */}
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating ViewSonic logo badge (top-right) */}
            <div className="absolute -right-4 -top-6 z-20 flex items-center gap-3 rounded-2xl border border-[#CD2027]/30 bg-[#07111a]/95 backdrop-blur-md px-5 py-3 shadow-xl shadow-[#CD2027]/20">
              <ViewSonicLogo className="h-6 w-auto" color="#ffffff" />
            </div>

            {/* Floating product category pills (left) */}
            <div className="absolute -left-8 top-12 z-20 space-y-2 max-w-[200px]">
              {productBadges.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className="group flex items-center gap-2 rounded-xl border border-foreground/10 bg-white/95 dark:bg-background/90 backdrop-blur-md px-4 py-2.5 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#CD2027]/30 hover:shadow-[#CD2027]/20"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="rounded-lg bg-[#CD2027]/10 p-1.5 transition-colors group-hover:bg-[#CD2027]/20">
                    <Icon className="h-3.5 w-3.5 text-[#CD2027]" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">{label}</span>
                </div>
              ))}
            </div>

            {/* Social proof floating (bottom-right) */}
            <div className="absolute -bottom-5 right-4 z-20 rounded-2xl border border-foreground/10 bg-white dark:bg-background/90 px-5 py-3 shadow-xl backdrop-blur-md">
              <p className="text-xs text-muted-foreground">Confianza empresarial</p>
              <p className="text-sm font-bold text-foreground">+500 empresas en Colombia</p>
              <div className="mt-1 flex -space-x-2">
                {["#CD2027", "#52678D", "#2EAFC7", "#10454F"].map((c) => (
                  <div key={c} className="h-5 w-5 rounded-full border-2 border-white dark:border-background" style={{ background: c }} />
                ))}
                <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white dark:border-background bg-muted text-[8px] font-bold text-foreground">+</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
