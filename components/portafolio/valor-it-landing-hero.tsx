"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Server, ShieldCheck, Activity } from "lucide-react";

const checkList = [
  "Sin costos de infraestructura física",
  "Escala en minutos, no en semanas",
  "Soporte técnico especializado incluido",
];

const dashboardFeatures = [
  { icon: Server,      label: "IaaS bajo demanda" },
  { icon: ShieldCheck, label: "Ciberseguridad multicapa" },
  { icon: Activity,    label: "SOC 24/7" },
];

const dashboardStats = [
  { val: "99.9%", lbl: "Uptime" },
  { val: "<15m",  lbl: "Respuesta" },
  { val: "256-bit", lbl: "Cifrado" },
];

export function ValorITLandingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 py-20 md:py-28 lg:py-32">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-accent/8 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: texto ── */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Apple Business Partner · Colombia
            </div>

            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-balance md:text-5xl lg:text-6xl">
              Infraestructura Cloud{" "}
              <span className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] bg-clip-text text-transparent">
                paga por lo que usas
              </span>{" "}
              sin inversión inicial.
            </h1>

            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Impulsa tu operación con una solución flexible, escalable y diseñada para crecer con tu empresa.
            </p>

            <ul className="space-y-3">
              {checkList.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground md:text-base">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] px-8 font-bold text-black shadow-lg shadow-accent/25 transition-all hover:from-[#00e6cc] hover:to-[#0090bb] hover:scale-105 hover:shadow-xl hover:shadow-accent/35"
            >
              <Link href="#contacto">
                Solicitar asesoría gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* ── Right: dashboard decorativo ── */}
          <div className="relative hidden lg:block">
            {/* Badge flotante */}
            <div className="absolute -right-4 -top-4 z-10 rounded-full bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] px-4 py-2 text-xs font-bold text-black shadow-lg">
              MacPower · Apple Business Partner
            </div>

            <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-card via-card to-muted/50 p-8 shadow-2xl">
              {/* Barra título */}
              <div className="mb-6 flex items-center gap-3 border-b border-border/50 pb-4">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  MacPower · Valor IT Dashboard
                </span>
              </div>

              {/* Estado */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  Estado de infraestructura
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-semibold text-green-500">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  Operando
                </span>
              </div>

              {/* Filas de servicio */}
              <div className="mb-6 space-y-3">
                {dashboardFeatures.map(({ icon: Icon, label }, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-xl border border-border/40 bg-muted/50 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-accent/10 p-2 text-accent">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{label}</span>
                    </div>
                    <span className="text-xs font-semibold text-accent">Activo</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {dashboardStats.map(({ val, lbl }) => (
                  <div
                    key={lbl}
                    className="rounded-xl border border-accent/15 bg-accent/5 p-3 text-center"
                  >
                    <div className="bg-gradient-to-b from-[#00ffe3] to-[#00a6d6] bg-clip-text text-base font-bold text-transparent">
                      {val}
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
