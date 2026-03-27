import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyCTA } from "@/components/shared/sticky-cta";
import { ContactFormSection } from "@/components/nosotros/contact-form-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Microscope,
  Shield,
  Battery,
  Code2,
  Wrench,
  CalendarDays,
  Activity,
  Smartphone,
  HeadphonesIcon,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "LabPower - Servicio Técnico Autorizado Apple | MacPower",
  description:
    "Diagnóstico profesional, reparación certificada y seguimiento de tu dispositivo Apple. Centro de Servicio Autorizado con técnicos certificados y repuestos originales.",
};

export default function LabPowerLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pb-24 min-h-[450px] md:min-h-[600px] flex items-center">
          <div className="absolute inset-0 z-0 bg-black">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-principal-1500x600px%20%283%29-6WdePWoKHw2NOkRSrp8Jd8nSKEyWe0.png"
              alt="LabPower Hero Background"
              fill
              className="object-cover sm:object-cover object-right lg:object-[right_center]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 md:via-black/70 to-transparent sm:to-black/30" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
            <div className="max-w-2xl">
              <div className="flex flex-col items-start space-y-6 lg:space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2 text-balance leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffe3] to-[#00a6d6]">
                    LabPower
                  </span>
                  <br />
                  Servicio técnico autorizado
                </h1>
                <p className="text-xl sm:text-2xl leading-relaxed text-white/90 text-pretty text-left">
                  Diagnóstico profesional, reparación certificada y seguimiento
                  transparente de tu dispositivo Apple.
                </p>

                <div className="pt-2 flex items-center gap-3 flex-wrap">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold rounded-full px-10 py-6 text-lg"
                  >
                    <Link href="/contacto-empresas">
                      Contáctanos
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. CTAs RÁPIDAS ──────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Reservar Cita */}
              <div className="relative group overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 transition-all duration-300 hover:border-[#00ffe3]/40 hover:shadow-[0_0_30px_rgba(0,255,227,0.08)] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ffe3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00ffe3]/20 to-[#00a6d6]/10 flex items-center justify-center flex-shrink-0">
                    <CalendarDays className="h-6 w-6 text-[#00ffe3]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Reservar Cita
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                  Agenda una visita con nuestro equipo de técnicos certificados
                  Apple para diagnóstico o reparación de tu dispositivo.
                </p>
                <div>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold"
                  >
                    <Link href="/contacto-empresas">
                      Más información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Estado de la garantía */}
              <div className="relative group overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 transition-all duration-300 hover:border-[#00ffe3]/40 hover:shadow-[0_0_30px_rgba(0,255,227,0.08)] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ffe3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00ffe3]/20 to-[#00a6d6]/10 flex items-center justify-center flex-shrink-0">
                    <Activity className="h-6 w-6 text-[#00ffe3]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Estado de la garantía
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                  Consulta en tiempo real el estado de la garantía de tu
                  dispositivo Apple y el seguimiento de tu orden de servicio.
                </p>
                <div>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold"
                  >
                    <Link href="/labpower/herramientas">
                      Más información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. NUESTROS SERVICIOS ────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 border-t border-border/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 px-3 py-1 text-xs font-semibold bg-[#00ffe3]/10 text-[#00ffe3] border border-[#00ffe3]/30 rounded-full">
                Certificado Apple
              </Badge>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Atención certificada con repuestos originales Apple y técnicos
                especializados para cada tipo de intervención.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Microscope,
                  label: "Diagnóstico técnico",
                  desc: "Evaluación profesional de iPhone, iPad, Mac, Apple Watch y AirPods.",
                },
                {
                  icon: Shield,
                  label: "Reparaciones en garantía",
                  desc: "Cobertura oficial Apple sin costo adicional para dispositivos en garantía.",
                },
                {
                  icon: Battery,
                  label: "Cambio de batería y pantalla",
                  desc: "Componentes originales con garantía de instalación certificada.",
                },
                {
                  icon: Code2,
                  label: "Software y actualizaciones",
                  desc: "Soporte, restauración y actualización de sistema operativo Apple.",
                },
                {
                  icon: Wrench,
                  label: "Reparaciones fuera de garantía",
                  desc: "Soluciones certificadas con presupuesto previo y repuestos originales.",
                },
              ].map(({ icon: Icon, label, desc }, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00ffe3]/50 hover:shadow-[0_8px_40px_rgba(0,255,227,0.12)] cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#00ffe3]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00ffe3]/20 to-[#00a6d6]/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-[#00ffe3]" />
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-2 leading-tight">
                    {label}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. SERVICIOS DESTACADOS ──────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 border-t border-border/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 px-3 py-1 text-xs font-semibold bg-[#00ffe3]/10 text-[#00ffe3] border border-[#00ffe3]/30 rounded-full">
                Servicios más solicitados
              </Badge>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
                Servicios Destacados
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Las reparaciones más frecuentes, resueltas con estándares
                oficiales Apple.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Smartphone,
                  label: "Reparar Pantalla iPhone",
                  desc: "Reemplazamos tu pantalla con componentes originales Apple. Garantía de instalación incluida.",
                  tag: "iPhone",
                  image: "/images/labpower/services/iphone-screen-repair.png",
                },
                {
                  icon: Battery,
                  label: "Cambiar Batería iPhone",
                  desc: "Restaura la autonomía de tu iPhone con batería original certificada por Apple.",
                  tag: "iPhone",
                  image: "/images/labpower/services/iphone-battery-replace.png",
                },
                {
                  icon: HeadphonesIcon,
                  label: "Servicio AirPods",
                  desc: "Diagnóstico y reparación especializada de AirPods y AirPods Pro con respaldo Apple.",
                  tag: "AirPods",
                  image: "/images/labpower/services/airpods-service.png",
                },
              ].map(({ icon: Icon, label, desc, tag, image }, i) => (
                <Link
                  key={i}
                  href="/labpower"
                  className="group relative flex flex-col rounded-2xl border border-border/40 bg-card/60 overflow-hidden transition-all duration-300 hover:border-[#00ffe3]/50 hover:shadow-[0_8px_40px_rgba(0,255,227,0.12)] no-underline"
                >
                  {/* Visual header with image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={image}
                      alt={label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/40 backdrop-blur-sm text-[#00ffe3] border border-[#00ffe3]/30 z-10">
                      {tag}
                    </span>
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-sm border border-[#00ffe3]/20 flex items-center justify-center z-10">
                      <Icon className="h-6 w-6 text-[#00ffe3]" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="font-bold text-foreground mb-2">{label}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {desc}
                    </p>
                    <div className="mt-5 pt-4 border-t border-border/20">
                      <span className="flex items-center justify-center w-full text-[#00ffe3]/50 font-semibold text-xs group-hover:text-[#00ffe3] transition-colors duration-200">
                        Consultar servicio
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. FORMULARIO ────────────────────────────────────────────────────── */}
        <ContactFormSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
