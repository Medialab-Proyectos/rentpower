import { ValorITLandingHero } from "@/components/portafolio/valor-it-landing-hero";
import { KPIStrip } from "@/components/portafolio/shared/kpi-strip";
import { ContactFormSection } from "@/components/nosotros/contact-form-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Server, Settings2, TrendingUp, ArrowRight, BadgePercent } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infraestructura Cloud para Empresas | MacPower Valor IT",
  description:
    "Soluciones IaaS, administración cloud y escalabilidad empresarial. Paga solo por lo que usas, sin inversión inicial. Apple Business Partner en Colombia.",
  alternates: {
    canonical: "/portafolio/valor-it-landing",
  },
  openGraph: {
    title: "Infraestructura Cloud para Empresas | MacPower Valor IT",
    description:
      "Infraestructura flexible, escalable y segura para tu empresa. Sin hardware, sin inversión inicial.",
    url: "https://www.macpower.com.co/portafolio/valor-it-landing",
  },
};

/* ─── Datos ─────────────────────────────────────────────────── */

const kpis = [
  { value: "25+",    label: "Años de experiencia" },
  { value: "1.000+", label: "Proyectos ejecutados" },
  { value: "8",      label: "Países" },
  { value: "20+",    label: "Ciudades con impacto" },
];

const serviceCards = [
  {
    icon: Server,
    title: "Infrastructure-as-a-Service (IaaS)",
    description:
      "Recursos de TI bajo demanda para empresas que necesitan escalar sin asumir costos de infraestructura física.",
  },
  {
    icon: Settings2,
    title: "Administración y optimización",
    description:
      "Supervisa, ajusta y mejora tu infraestructura cloud con una operación más ágil, estable y eficiente.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad empresarial",
    description:
      "Crece con una arquitectura flexible que se adapta a nuevas cargas, equipos y necesidades del negocio.",
  },
];

/* ─── Page ───────────────────────────────────────────────────── */

export default function ValorITLandingPage() {
  return (
    <div className="valor-it-theme">

      {/* 1 ── Hero principal */}
      <ValorITLandingHero />

      {/* 2 ── Bloque promocional */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent p-6 md:p-8">
            {/* Blob decorativo */}
            <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-xl bg-accent/15 p-3 text-accent">
                  <BadgePercent className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">
                    Oferta especial
                  </p>
                  <h2 className="text-xl font-bold text-foreground md:text-2xl">
                    Recibe una evaluación de infraestructura con{" "}
                    <span className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] bg-clip-text text-transparent">
                      15% de descuento.
                    </span>
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Diagnóstico completo de tu infraestructura actual, sin compromiso.
                  </p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="flex-shrink-0 rounded-full bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] px-8 font-bold text-black shadow-md shadow-accent/20 transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/30 sm:self-center"
              >
                <Link href="#contacto">
                  Aprovechar oferta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── Cards de servicios */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Soluciones diseñadas para{" "}
              <span className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] bg-clip-text text-transparent">
                tu empresa
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Tecnología robusta, sin la complejidad de gestionarla tú mismo.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map(({ icon: Icon, title, description }, i) => (
              <Card
                key={i}
                className="group flex flex-col border border-border/50 bg-gradient-to-br from-card to-card/80 p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex w-fit rounded-xl bg-accent/10 p-3 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
                <p className="flex-1 text-pretty text-base leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4 ── Formulario de contacto (componente existente) */}
      <div id="contacto">
        <ContactFormSection />
      </div>

      {/* 5 ── Franja de métricas / credibilidad */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-pretty text-base text-muted-foreground md:text-lg">
            Más de 25 años contribuyendo al desarrollo tecnológico de la industria colombiana.
          </p>
        </div>
        <KPIStrip kpis={kpis} />
      </section>

    </div>
  );
}
