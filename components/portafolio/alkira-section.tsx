"use client";

import { Cloud, Network, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const alkiraCards = [
  {
    icon: <Network className="h-8 w-8" />,
    title: "Red global simple y sin hardware",
    description:
      "Diseña, despliega y gestiona toda tu red desde una sola plataforma, sin infraestructura física. Modelo flexible, escalable y bajo suscripción.",
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Conectividad total (multi-cloud + on-premise)",
    description:
      "Integra AWS, Azure, data centers, sucursales y usuarios en una sola red segura, sin complejidad.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Implementación rápida y sin fricción",
    description:
      "Despliega servicios de red en minutos (no semanas), eliminando configuraciones manuales y acelerando la operación.",
  },
];

/**
 * LOGOS DEL CARRUSEL
 * Para reemplazar los placeholders por logotipos reales:
 *   1. Coloca los archivos SVG/PNG en /public/images/logos/
 *   2. Cambia `src: null` por `src: "/images/logos/nombre-archivo.svg"`
 *   3. Ajusta `width` y `height` según las dimensiones reales de cada logo.
 */
const carouselLogos: { name: string; src: string | null; width: number; height: number }[] = [
  { name: "ALKIRA",        src: null, width: 100, height: 32 },
  { name: "AWS",           src: null, width: 80,  height: 32 },
  { name: "Microsoft Azure", src: null, width: 120, height: 32 },
  { name: "Google Cloud",  src: null, width: 110, height: 32 },
  { name: "Oracle Cloud",  src: null, width: 100, height: 32 },
  { name: "Cisco",         src: null, width: 80,  height: 32 },
];

// Duplicamos para el loop infinito
const loopedLogos = [...carouselLogos, ...carouselLogos];

export function AlkiraSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/40 relative overflow-hidden">
      {/* Blob decorativo */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Encabezado */}
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-4 text-foreground">
            Alianza{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffe3] to-[#00a6d6]">
              ALKIRA
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Administración de Nubes.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {alkiraCards.map((card, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-card to-card/80 border border-border/50 flex flex-col p-6 group hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-accent/10 text-accent w-fit transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed text-pretty flex-1">
                {card.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Carrusel de logotipos */}
        <div>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Compatible con las principales plataformas cloud
          </p>

          {/* Contenedor con fade en los bordes */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-muted/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-muted/40 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-8 items-center animate-marquee">
              {loopedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center h-14 px-6 rounded-xl bg-card border border-border/60 shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-200"
                  style={{ minWidth: logo.width + 48 }}
                >
                  {logo.src ? (
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={logo.width}
                      height={logo.height}
                      className="object-contain max-h-8"
                      unoptimized
                    />
                  ) : (
                    <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                      {logo.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
