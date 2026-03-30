"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, Video, Users, ArrowRight } from "lucide-react";
import { events } from "@/lib/data";
import { cn } from "@/lib/utils";

const typeIcons = {
  webinar: Video,
  evento: Users,
  capacitacion: Calendar,
};

const typeLabels = {
  webinar: "Webinar",
  evento: "Evento presencial",
  capacitacion: "Capacitación",
};

export function EventsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [translatePx, setTranslatePx] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const gap = 24; // gap-6 = 24px

  const updateLayout = () => {
    const w = window.innerWidth;
    const newItems = w < 768 ? 1 : w < 1024 ? 2 : 3;
    setItemsPerView(newItems);
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const maxIndex = Math.max(0, events.length - itemsPerView);

  // Clamp when itemsPerView changes
  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Recalculate translate whenever activeIndex or container size changes
  useEffect(() => {
    if (!carouselRef.current) return;
    const containerWidth = carouselRef.current.offsetWidth;
    const cardWidth = (containerWidth - (itemsPerView - 1) * gap) / itemsPerView;
    setTranslatePx(activeIndex * (cardWidth + gap));
  }, [activeIndex, itemsPerView]);

  const next = () => setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

  // Card width based on items per view (for first render before ref is measured)
  const cardWidthClass =
    itemsPerView === 1
      ? "w-full"
      : itemsPerView === 2
      ? "w-[calc(50%-12px)]"
      : "w-[calc(33.333%-16px)]";

  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Eventos
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Espacios diseñados para líderes y equipos de TI donde compartimos tendencias, casos reales y soluciones tecnológicas aplicables al negocio.
          </p>
        </div>

        {/* Events carousel */}
        <div className="relative px-6">
          <div className="overflow-hidden" ref={carouselRef}>
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${translatePx}px)` }}
            >
              {events.map((event) => {
                const TypeIcon = typeIcons[event.type];
                return (
                  <Card
                    key={event.id}
                    className={cn(
                      "flex-shrink-0 overflow-hidden border-border/50 bg-secondary/30",
                      cardWidthClass
                    )}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0" />

                      {/* Date badge */}
                      <div className="absolute left-4 top-4 rounded-lg bg-background/90 px-3 py-2 text-center backdrop-blur">
                        <p className="text-2xl font-bold text-foreground">{event.day}</p>
                        <p className="text-xs text-muted-foreground">{event.month}</p>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2">
                        <TypeIcon className="mr-1 h-3 w-3" />
                        {typeLabels[event.type]}
                      </Badge>
                      <h3 className="font-semibold text-foreground line-clamp-2">
                        {event.title}
                      </h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Navigation arrows — positioned outside overflow-hidden, inside px-6 padding */}
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-50"
            aria-label="Eventos anteriores"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            disabled={activeIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-50"
            aria-label="Siguientes eventos"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                activeIndex === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Ir a grupo ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="#">
              Ver más
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
