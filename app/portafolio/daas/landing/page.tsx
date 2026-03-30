import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Laptop, Headphones, RefreshCw, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KPIStrip } from "@/components/portafolio/shared/kpi-strip";
import { DaasFunnelForm } from "@/components/daas/daas-funnel-form";
import { ContactFormSection } from "@/components/nosotros/contact-form-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DaaS para Empresas | 1 equipo de backup GRATIS por cada 50 dispositivos",
  description:
    "Renta dispositivos Apple para tu empresa con soporte incluido. Por cada 50 dispositivos recibe 1 equipo de backup GRATIS. Apple Business Partner en Colombia.",
  alternates: {
    canonical: "/portafolio/daas/landing",
  },
  openGraph: {
    title: "DaaS para Empresas | MacPower IT Solutions",
    description:
      "Por cada 50 dispositivos recibe 1 equipo de backup GRATIS. Soporte técnico y gestión del ciclo de vida incluidos.",
    url: "https://www.macpower.com.co/portafolio/daas/landing",
    images: [{ url: "/images/macpower-logo-color.svg" }],
  },
};

const kpis = [
  { value: "+25", label: "Años de experiencia" },
  { value: "+1,000", label: "Proyectos ejecutados" },
  { value: "8", label: "Países" },
  { value: "+20", label: "Ciudades" },
];

const reasons = [
  {
    icon: Laptop,
    title: "Dispositivos empresariales",
    description: "Laptops y desktops para entornos corporativos",
  },
  {
    icon: Headphones,
    title: "Soporte técnico especializado",
    description: "Mesa de ayuda y mantenimiento preventivo",
  },
  {
    icon: RefreshCw,
    title: "Gestión del ciclo de vida",
    description: "Implementación, soporte, renovación y retiro de equipos",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad",
    description: "Aumenta o reduce dispositivos según tus necesidades",
  },
];

const softOrangeBtn =
  "bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-black font-bold border-0 shadow-lg shadow-orange-400/20 transition-all hover:scale-[1.02]";

export default function DaaSLandingPage() {
  return (
    <div className="daas-theme">

      {/* ── 1. HERO + FORMULARIO ── */}
      <section className="relative overflow-hidden min-h-[640px] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-principal-1500x600px%20%281%29-f2CCjowmxju73CkBC6hqROBDSMvEFQ.png"
            alt="DaaS — Device as a Service para empresas"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">

            {/* Columna izquierda: copy */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-400/10 px-4 py-1.5 text-sm font-semibold text-amber-400 backdrop-blur-sm">
                Oferta especial DaaS
              </span>

              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl text-balance drop-shadow-xl">
                ¿Tu empresa sigue comprando equipos que se{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
                  deprecian cada año?
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed text-pretty">
                Por cada{" "}
                <strong className="text-amber-400 font-bold">50 dispositivos</strong>{" "}
                recibe{" "}
                <strong className="text-white font-bold">1 equipo de backup GRATIS</strong>
              </p>

              <Button
                asChild
                size="lg"
                className={`hidden lg:inline-flex px-8 py-6 text-base rounded-full ${softOrangeBtn}`}
              >
                <Link href="#form">
                  Solicitar asesoría
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <p className="text-sm text-white/50">
                +25 años de experiencia · Apple Business Partner en Colombia
              </p>
            </div>

            {/* Columna derecha: formulario */}
            <div id="form" className="scroll-mt-24">
              <DaasFunnelForm />
            </div>
          </div>

          {/* CTA mobile */}
          <div className="mt-8 lg:hidden">
            <Button
              asChild
              size="lg"
              className={`w-full py-6 text-base rounded-full ${softOrangeBtn}`}
            >
              <Link href="#form">
                Solicitar asesoría
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 2. ¿POR QUÉ ELEGIRNOS? ── */}
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
              Más que renta: un servicio completo de gestión tecnológica.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:border-amber-400/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 group-hover:bg-amber-400/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground leading-snug">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. MÉTRICAS ── */}
      <KPIStrip
        kpis={kpis}
        valueClassName="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-amber-400 to-orange-400 group-hover:scale-110 transition-transform"
      />

      {/* ── 4. FRASE DE CONFIANZA ── */}
      <section className="py-14 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-xl md:text-2xl font-medium text-foreground text-balance leading-relaxed">
            Más de{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400 font-bold">
              25 años
            </span>{" "}
            contribuyendo al desarrollo tecnológico de la industria colombiana.
          </p>
        </div>
      </section>

      {/* ── 5. FORMULARIO FINAL ── */}
      <ContactFormSection
        submitButtonClassName="w-full bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-black font-bold"
      />

    </div>
  );
}
