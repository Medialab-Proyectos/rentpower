import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Wrench, GraduationCap, Users, Briefcase, Award, Star, Package, BadgeCheck, Cpu, ClipboardCheck, Settings2, UserCheck, Microscope, Zap, Monitor, BookOpen, Presentation, Smartphone, Battery, Camera, Code2, HeadphonesIcon, Activity } from "lucide-react";

export function ServicesContent() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Garantías Extendidas */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Badge className="mb-4 px-3 py-1 text-xs font-semibold bg-[#00ffe3]/10 text-[#00ffe3] border border-[#00ffe3]/30 rounded-full">
              Certificado Apple
            </Badge>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Garantías extendidas Apple
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Extiende la protección de tus dispositivos Apple más allá de la garantía original. Ofrecemos{" "}
              <span className="text-foreground font-semibold">Garantía Limitada</span> y{" "}
              <span className="text-foreground font-semibold">Garantía Extendida</span>, ambas respaldadas por los más altos estándares de Apple.
            </p>
            <p className="text-xl font-semibold text-[#00ffe3] mt-5">
              Más tiempo. Más protección. Más tranquilidad.
            </p>
          </div>

          {/* Tipos de Garantía */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="relative group overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-[#00ffe3]/40 hover:shadow-[0_0_30px_rgba(0,255,227,0.08)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffe3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#00ffe3]/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-[#00ffe3]" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Garantía Limitada</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Amplía la garantía limitada de Apple por uno, dos o tres años adicionales, manteniendo las mismas condiciones de cobertura y calidad de servicio.
              </p>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-[#00ffe3]/40 hover:shadow-[0_0_30px_rgba(0,255,227,0.08)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffe3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#00ffe3]/10 flex items-center justify-center">
                  <Star className="h-5 w-5 text-[#00ffe3]" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Garantía Extendida</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Además de extender la garantía, incluye cobertura ante daños accidentales, brindando mayor protección frente a imprevistos del uso diario.
              </p>
            </div>
          </div>

          {/* 4 Tarjetas de Atributos Clave */}
          <div className="mb-6">
            <p className="text-center text-sm font-semibold text-[#00ffe3] uppercase tracking-widest mb-8">
              Lo que incluye tu garantía
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* Card 1 — Centro Autorizado */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00ffe3]/50 hover:shadow-[0_8px_40px_rgba(0,255,227,0.12)] cursor-default">
                <div className="absolute inset-0 bg-gradient-to-b from-[#00ffe3]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                {/* Icon */}
                <div className="mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00ffe3]/20 to-[#00a6d6]/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Award className="h-7 w-7 text-[#00ffe3]" />
                </div>
                {/* Content */}
                <h4 className="text-base font-bold text-foreground mb-2 leading-tight">
                  Centro de Servicio Autorizado
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Somos un centro oficialmente autorizado por Apple para gestionar garantías y reparaciones certificadas.
                </p>
                {/* CTA */}
                <div className="mt-5 pt-4 border-t border-border/30">
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-center w-full text-muted-foreground/30 font-semibold text-xs cursor-default select-none"
                  >
                    Consultar garantía →
                  </span>
                </div>
              </div>

              {/* Card 2 — Estándares Oficiales */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00ffe3]/50 hover:shadow-[0_8px_40px_rgba(0,255,227,0.12)] cursor-default">
                <div className="absolute inset-0 bg-gradient-to-b from-[#00ffe3]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00ffe3]/20 to-[#00a6d6]/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <BadgeCheck className="h-7 w-7 text-[#00ffe3]" />
                </div>
                <h4 className="text-base font-bold text-foreground mb-2 leading-tight">
                  Atención bajo estándares oficiales
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Cada servicio sigue los protocolos y procedimientos oficiales definidos por Apple para garantizar resultados confiables.
                </p>
                <div className="mt-5 pt-4 border-t border-border/30">
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-center w-full text-muted-foreground/30 font-semibold text-xs cursor-default select-none"
                  >
                    Consultar garantía →
                  </span>
                </div>
              </div>

              {/* Card 3 — Repuestos Originales */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00ffe3]/50 hover:shadow-[0_8px_40px_rgba(0,255,227,0.12)] cursor-default">
                <div className="absolute inset-0 bg-gradient-to-b from-[#00ffe3]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00ffe3]/20 to-[#00a6d6]/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Package className="h-7 w-7 text-[#00ffe3]" />
                </div>
                <h4 className="text-base font-bold text-foreground mb-2 leading-tight">
                  Repuestos originales Apple
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Trabajamos exclusivamente con piezas originales certificadas por Apple, asegurando la integridad y el rendimiento de tu dispositivo.
                </p>
                <div className="mt-5 pt-4 border-t border-border/30">
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-center w-full text-muted-foreground/30 font-semibold text-xs cursor-default select-none"
                  >
                    Consultar garantía →
                  </span>
                </div>
              </div>

              {/* Card 4 — Técnicos Certificados */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00ffe3]/50 hover:shadow-[0_8px_40px_rgba(0,255,227,0.12)] cursor-default">
                <div className="absolute inset-0 bg-gradient-to-b from-[#00ffe3]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00ffe3]/20 to-[#00a6d6]/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <GraduationCap className="h-7 w-7 text-[#00ffe3]" />
                </div>
                <h4 className="text-base font-bold text-foreground mb-2 leading-tight">
                  Técnicos certificados por Apple
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Nuestro equipo cuenta con certificaciones Apple oficiales que garantizan el más alto nivel de expertise técnico en cada intervención.
                </p>
                <div className="mt-5 pt-4 border-t border-border/30">
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-center w-full text-muted-foreground/30 font-semibold text-xs cursor-default select-none"
                  >
                    Consultar garantía →
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Nota legal + CTA principal */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-border/30 bg-card/30 px-6 py-4">
            <p className="text-xs text-muted-foreground italic">
              *Aplican términos y condiciones según el plan seleccionado.
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <Button
                disabled
                aria-disabled="true"
                className="bg-gradient-to-r from-[#00ffe3]/30 to-[#00a6d6]/30 text-foreground/30 font-bold cursor-not-allowed pointer-events-none"
              >
                Ver planes de garantía
              </Button>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/25 uppercase tracking-widest whitespace-nowrap">
                Próximamente
              </span>
            </div>
          </div>
        </section>

        {/* Servicios Profesionales */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Badge className="mb-4 px-3 py-1 text-xs font-semibold bg-[#00ffe3]/10 text-[#00ffe3] border border-[#00ffe3]/30 rounded-full">
              Servicio certificado
            </Badge>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Servicios profesionales Apple
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-3">
              Experiencia de servicio simple, clara y eficiente. Soluciones respaldadas por repuestos originales, técnicos certificados y los más altos estándares Apple.
            </p>
            <p className="text-sm text-muted-foreground/70 max-w-2xl mx-auto">
              Para uso personal, educativo o empresarial — tu tecnología siempre funcionando.
            </p>
          </div>

          {/* ¿Qué nos diferencia? — Microinteracción: pill fill-in hover */}
          <div className="rounded-2xl border border-border/40 bg-card/50 p-8">
            <p className="text-sm font-semibold text-[#00ffe3] uppercase tracking-widest mb-6">¿Qué nos diferencia?</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { icon: HeadphonesIcon, label: "Atención técnica especializada" },
                { icon: Activity,       label: "Procesos claros y eficientes" },
                { icon: Microscope,     label: "Diagnósticos precisos" },
                { icon: Package,        label: "Repuestos originales" },
                { icon: BadgeCheck,     label: "Técnicos certificados" },
                { icon: Award,          label: "Estándares oficiales Apple" }
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  className="group relative flex items-center gap-3 rounded-xl border border-border/30 bg-transparent px-4 py-3 overflow-hidden cursor-default transition-all duration-300 hover:border-[#00ffe3]/40"
                >
                  {/* Fill-in background on hover */}
                  <span className="absolute inset-0 bg-[#00ffe3]/8 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-xl" />
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-lg bg-[#00ffe3]/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#00ffe3]/20">
                    <Icon className="h-4 w-4 text-[#00ffe3]" />
                  </div>
                  <span className="relative z-10 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-200">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios Disponibles */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Badge className="mb-4 px-3 py-1 text-xs font-semibold bg-[#00ffe3]/10 text-[#00ffe3] border border-[#00ffe3]/30 rounded-full">
              Portafolio de servicios
            </Badge>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Servicios disponibles
            </h2>
          </div>

          {/* Microinteracción: Cards con borde izquierdo accent + slide content */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Wrench,
                title: "Diagnóstico y Soporte",
                accent: "from-[#00ffe3] to-[#00a6d6]",
                items: [
                  "Diagnósticos técnicos",
                  "Soporte remoto",
                  "Soporte VIP (Ejecutivos)",
                  "Optimización de equipos",
                  "Migración de datos",
                  "Hardening de seguridad"
                ]
              },
              {
                icon: Settings2,
                title: "Mantenimiento y Operación",
                accent: "from-[#00a6d6] to-[#0075b3]",
                items: [
                  "Mantenimientos preventivos",
                  "Programa préstamo de equipos"
                ]
              },
              {
                icon: Shield,
                title: "Extensiones y Coberturas",
                accent: "from-[#00ffe3] to-[#00c4a7]",
                items: [
                  "Garantía Extendida Apple",
                  "Garantía por Daño Accidental",
                  "Servicio extendido"
                ]
              }
            ].map(({ icon: Icon, title, accent, items }, gi) => (
              <div
                key={gi}
                className="group relative flex flex-col rounded-2xl border border-border/40 bg-card/60 overflow-hidden transition-all duration-300 hover:border-[#00ffe3]/40 hover:shadow-[0_4px_32px_rgba(0,255,227,0.1)]"
              >
                {/* Animated left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${accent} scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-top rounded-l-2xl`} />
                <div className="p-6 pl-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00ffe3]/15 to-[#00a6d6]/10 flex items-center justify-center transition-all duration-300 group-hover:from-[#00ffe3]/25 group-hover:to-[#00a6d6]/20">
                      <Icon className="h-6 w-6 text-[#00ffe3]" />
                    </div>
                    <h3 className="font-bold text-foreground text-base leading-tight">{title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm group/item"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00ffe3]/50 flex-shrink-0 transition-all duration-200 group-hover/item:bg-[#00ffe3] group-hover/item:scale-125" />
                        <span className="text-muted-foreground transition-colors duration-200 group-hover/item:text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto px-7 pb-5 pt-4 border-t border-border/20">
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-center w-full text-muted-foreground/30 font-semibold text-xs cursor-default select-none"
                  >
                    Consultar servicio →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Servicios Gestionados y Empresariales */}
        {/* Microinteracción: Cards horizontales con reveal de descripción en hover */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <Badge className="mb-2 px-3 py-1 text-xs font-semibold bg-[#00ffe3]/10 text-[#00ffe3] border border-[#00ffe3]/30 rounded-full">Empresas</Badge>
              <h3 className="text-2xl font-bold text-foreground">Servicios gestionados y empresariales</h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Button
                disabled
                aria-disabled="true"
                size="sm"
                className="bg-gradient-to-r from-[#00ffe3]/30 to-[#00a6d6]/30 text-foreground/30 font-bold cursor-not-allowed pointer-events-none"
              >
                Cotizar plan
              </Button>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/25 uppercase tracking-widest whitespace-nowrap">
                Próximamente
              </span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Settings2,
                label: "Servicio gestionado",
                desc: "Cobertura técnica integral con SLA definido para mantener tu infraestructura Apple siempre operativa."
              },
              {
                icon: ClipboardCheck,
                label: "Bolsa de horas",
                desc: "Paquetes de horas técnicas prepagadas para usar según las necesidades de tu empresa."
              },
              {
                icon: Monitor,
                label: "Gestión MDM avanzada",
                desc: "Administración remota de dispositivos Apple con Apple Business Manager y soluciones MDM certificadas."
              },
              {
                icon: Briefcase,
                label: "Onboarding empresarial Apple",
                desc: "Proceso estructurado de incorporación de equipos y usuarios Apple en el entorno corporativo."
              }
            ].map(({ icon: Icon, label, desc }, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 rounded-2xl border border-border/40 bg-card/60 p-5 transition-all duration-300 hover:border-[#00ffe3]/40 hover:bg-card/80 hover:shadow-[0_2px_20px_rgba(0,255,227,0.08)]"
              >
                {/* Icon with pulse ring on hover */}
                <div className="relative flex-shrink-0">
                  <div className="w-11 h-11 rounded-xl bg-[#00ffe3]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#00ffe3]/20">
                    <Icon className="h-5 w-5 text-[#00ffe3]" />
                  </div>
                  <div className="absolute inset-0 rounded-xl border border-[#00ffe3]/0 group-hover:border-[#00ffe3]/30 group-hover:scale-125 transition-all duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground mb-1 text-sm">{label}</p>
                  {/* Description slides down on hover */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-300 ease-out">
                    <p className="text-xs text-muted-foreground leading-relaxed pt-0.5">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Educación */}
        {/* Microinteracción: Cards numeradas con barra de progreso animada */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <Badge className="mb-2 px-3 py-1 text-xs font-semibold bg-[#00ffe3]/10 text-[#00ffe3] border border-[#00ffe3]/30 rounded-full">Instituciones educativas</Badge>
              <h3 className="text-2xl font-bold text-foreground">Educación</h3>
            </div>
            <Button
              disabled
              aria-disabled="true"
              size="sm"
              className="bg-gradient-to-r from-[#00ffe3]/30 to-[#00a6d6]/30 text-foreground/30 font-bold cursor-not-allowed pointer-events-none shrink-0"
            >
              Conocer programa
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: BookOpen,
                label: "Acceso a software educativo",
                desc: "Licencias y aplicaciones oficiales Apple disponibles para instituciones educativas."
              },
              {
                icon: UserCheck,
                label: "Punto técnico permanente (In House)",
                desc: "Técnico Apple dedicado en tus instalaciones para soporte continuo y preventivo."
              },
              {
                icon: GraduationCap,
                label: "Plan de adopción educativa Apple",
                desc: "Programa estructurado para integrar dispositivos Apple en el modelo pedagógico de tu institución."
              },
              {
                icon: ClipboardCheck,
                label: "Evaluación del laboratorio",
                desc: "Diagnóstico completo del estado técnico de equipos y red para instituciones educativas."
              }
            ].map(({ icon: Icon, label, desc }, i) => (
              <div
                key={i}
                className="group relative flex gap-4 rounded-2xl border border-border/40 bg-card/60 p-5 overflow-hidden transition-all duration-300 hover:border-[#00ffe3]/40 hover:shadow-[0_4px_24px_rgba(0,255,227,0.1)] cursor-default"
              >
                {/* Animated bottom progress bar */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] group-hover:w-full transition-all duration-500 ease-out" />
                {/* Number badge */}
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#00ffe3]/10 border border-[#00ffe3]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#00ffe3]/20 group-hover:border-[#00ffe3]/40">
                  <span className="text-sm font-bold text-[#00ffe3]">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="h-4 w-4 text-[#00ffe3]/70 flex-shrink-0" />
                    <p className="font-semibold text-foreground text-sm">{label}</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Capacitación y Formación */}
        {/* Microinteracción: Cards con glow spotlight radial pulsante */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <Badge className="mb-2 px-3 py-1 text-xs font-semibold bg-[#00ffe3]/10 text-[#00ffe3] border border-[#00ffe3]/30 rounded-full">Formación</Badge>
              <h3 className="text-2xl font-bold text-foreground">Capacitación y formación</h3>
            </div>
            <Button
              disabled
              aria-disabled="true"
              size="sm"
              className="bg-gradient-to-r from-[#00ffe3]/30 to-[#00a6d6]/30 text-foreground/30 font-bold cursor-not-allowed pointer-events-none shrink-0"
            >
              Ver programas
            </Button>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: Cpu,
                label: "Capacitación técnico–TI",
                desc: "Formación especializada en soporte, administración y gestión de ecosistemas Apple para equipos TI.",
                tag: "Técnica"
              },
              {
                icon: Users,
                label: "Capacitación usuario final",
                desc: "Programa Mac Adoption para que los usuarios de tu organización aprovechen al máximo sus dispositivos Apple.",
                tag: "Mac Adoption"
              },
              {
                icon: Presentation,
                label: "Workshops temáticos",
                desc: "Talleres intensivos sobre temas específicos del ecosistema Apple: seguridad, productividad, MDM y más.",
                tag: "Workshops"
              }
            ].map(({ icon: Icon, label, desc, tag }, i) => (
              <div
                key={i}
                className="group relative flex flex-col rounded-2xl border border-border/40 bg-card/60 p-6 overflow-hidden transition-all duration-300 hover:border-[#00ffe3]/50 cursor-default"
              >
                {/* Radial glow spotlight from top-center on hover */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full bg-[#00ffe3]/0 group-hover:bg-[#00ffe3]/12 blur-2xl transition-all duration-500" />
                {/* Tag pill */}
                <span className="self-start mb-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#00ffe3]/10 text-[#00ffe3] border border-[#00ffe3]/20 transition-colors duration-300 group-hover:bg-[#00ffe3]/20">
                  {tag}
                </span>
                {/* Icon */}
                <div className="mb-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00ffe3]/15 to-[#00a6d6]/5 flex items-center justify-center transition-all duration-300 group-hover:from-[#00ffe3]/25 group-hover:scale-105">
                  <Icon className="h-6 w-6 text-[#00ffe3]" />
                </div>
                <h4 className="font-bold text-foreground mb-2 text-sm leading-tight">{label}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{desc}</p>
                <div className="mt-5 pt-4 border-t border-border/20">
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-center w-full text-muted-foreground/30 font-semibold text-xs cursor-default select-none"
                  >
                    Consultar programa →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Centro de Servicio Autorizado */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Badge className="mb-4 px-3 py-1 text-xs font-semibold bg-[#00ffe3]/10 text-[#00ffe3] border border-[#00ffe3]/30 rounded-full">
              AASP — Apple Authorized Service Provider
            </Badge>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Centro de Servicio Autorizado Apple
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-3">
              Diagnóstico y reparación certificada de dispositivos Apple bajo estándares oficiales. Procesos seguros, trazables y confiables desde la recepción hasta la entrega.
            </p>
            <p className="text-sm text-muted-foreground/70 max-w-2xl mx-auto">
              Repuestos originales · Herramientas oficiales · Técnicos certificados por Apple
            </p>
          </div>

          {/* Microinteracción: Timeline vertical con step-reveal */}
          <div className="rounded-2xl border border-[#00ffe3]/20 bg-card/80 p-8">
            <p className="text-sm font-semibold text-[#00ffe3] uppercase tracking-widest mb-8">Servicios de reparación</p>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-0">
              {[
                { icon: Microscope,       label: "Diagnóstico técnico",          desc: "iPhone, iPad, Mac, Apple Watch y AirPods" },
                { icon: CheckCircle,      label: "Reparaciones en garantía",      desc: "Cobertura oficial Apple sin costo adicional" },
                { icon: Wrench,           label: "Reparaciones fuera de garantía",desc: "Soluciones certificadas con presupuesto previo" },
                { icon: Battery,          label: "Cambio de batería y pantalla",  desc: "Componentes originales con garantía de instalación" },
                { icon: Camera,           label: "Componentes internos",          desc: "Cámaras, puertos y partes internas certificadas" },
                { icon: Code2,            label: "Software y actualizaciones",    desc: "Soporte, restauración y actualización de sistema" },
                { icon: HeadphonesIcon,   label: "Asesoría técnica previa",       desc: "Revisión inicial sin compromiso para evaluar el equipo" }
              ].map(({ icon: Icon, label, desc }, i) => (
                <div
                  key={i}
                  className="group relative flex gap-4 py-4 border-b border-border/20 last:border-0 transition-all duration-200"
                >
                  {/* Animated left line indicator */}
                  <div className="relative flex flex-col items-center">
                    <div className="w-8 h-8 rounded-xl bg-[#00ffe3]/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#00ffe3]/25 group-hover:scale-110">
                      <Icon className="h-4 w-4 text-[#00ffe3]" />
                    </div>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <p className="font-semibold text-foreground text-sm mb-0.5 transition-colors duration-200 group-hover:text-[#00ffe3]">{label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                  {/* Hover indicator arrow */}
                  <span className="self-center opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-[-4px] group-hover:translate-x-0 text-[#00ffe3] text-xs font-bold">→</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <Button
                  disabled
                  aria-disabled="true"
                  className="bg-gradient-to-r from-[#00ffe3]/30 to-[#00a6d6]/30 text-foreground/30 font-bold cursor-not-allowed pointer-events-none"
                >
                  Agendar diagnóstico
                </Button>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/25 uppercase tracking-widest whitespace-nowrap">
                  Próximamente
                </span>
              </div>
              <Button
                disabled
                aria-disabled="true"
                variant="outline"
                className="border-border/30 text-muted-foreground/40 font-semibold cursor-not-allowed pointer-events-none"
              >
                Ver precios de reparación
              </Button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
