
import { ValorITHero } from "@/components/portafolio/valor-it-hero";
import { ITSolutionsShowcase } from "@/components/portafolio/it-solutions-showcase";
import { TransformationJourney } from "@/components/portafolio/transformation-journey";
import { Stepper } from "@/components/portafolio/shared/stepper";
import { AccordionSection } from "@/components/portafolio/shared/accordion-section";
import { CTABanner } from "@/components/portafolio/shared/cta-banner";
import { ServiceStructuredData, FAQStructuredData } from "@/components/seo-structured-data";
import { ContactFormSection } from "@/components/nosotros/contact-form-section";
import { ImageHighlight } from "@/components/portafolio/shared/image-highlight";
import { ValorITPartnersSection } from "@/components/portafolio/valor-it-partners";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Soluciones IT Empresariales | Ciberseguridad e Infraestructura",
  description: "Infraestructura en la nube, ciberprotección, ciber recuperación y servicios profesionales IT para empresas. Apple Business Partner en Colombia.",
  alternates: {
    canonical: '/portafolio/valor-it',
  },
  openGraph: {
    title: "Soluciones IT Empresariales | MacPower Valor IT",
    description: "Infraestructura robusta + ciberseguridad + continuidad para tu empresa.",
    url: 'https://www.macpower.com.co/portafolio/valor-it',
    images: [{ url: '/images/macpower-logo-color.svg' }],
  },
};

/* ─────────────────────────────────────────────
   1. IT SOLUTIONS — Visual showcase (self-contained component)
   ───────────────────────────────────────────── */

/* ─────────────────────────────────────────────
   2. DETALLE — Modelos de nube, migración,
      hiperconvergencia, VPS
   ───────────────────────────────────────────── */
const infrastructureDetail = [
  {
    question: "Nube Pública",
    answer: "Infraestructura escalable y ágil sin inversión inicial. Ideal para empresas que necesitan crecer rápido.\n\n✓ Escalabilidad rápida según demanda\n✓ Sin inversión inicial en hardware\n✓ Despliegue ágil de aplicaciones y servicios\n✓ Pago por uso real",
  },
  {
    question: "Nube Privada",
    answer: "Entorno dedicado con el máximo nivel de control y seguridad para datos sensibles y cargas reguladas.\n\n✓ Mayor control sobre datos y configuración\n✓ Seguridad avanzada y cumplimiento normativo\n✓ Recursos dedicados garantizados\n✓ Ideal para industrias reguladas",
  },
  {
    question: "Nube Híbrida",
    answer: "Combina lo mejor de la nube pública y privada, permitiendo migrar gradualmente y mantener continuidad operativa.\n\n✓ Combina cloud pública y privada\n✓ Ideal para migraciones progresivas\n✓ Continuidad operativa garantizada\n✓ Flexibilidad para cargas de trabajo dinámicas",
  },
  {
    question: "Hiperconvergencia",
    answer: "Unificamos cómputo, almacenamiento y virtualización en una sola plataforma para simplificar la operación.\n\n✓ Infraestructura flexible y consolidada\n✓ Alta disponibilidad integrada\n✓ Operación simplificada desde un solo panel\n✓ Arquitectura versátil para cualquier carga de trabajo",
  },
  {
    question: "VPS / Infraestructura Dedicada",
    answer: "Servidores virtuales con recursos garantizados, almacenamiento SSD y protección integrada.\n\n✓ Tráfico ilimitado sin restricciones\n✓ Escalabilidad bajo demanda\n✓ Protección anti-DDoS incluida\n✓ Recursos garantizados y almacenamiento SSD\n✓ Soporte 24/7 en español",
  },
];

/* ─────────────────────────────────────────────
   3. MIGRACIÓN CLOUD — Stepper
   ───────────────────────────────────────────── */
const migrationSteps = [
  { title: "Evaluación", description: "Diagnóstico completo de tu infraestructura TI actual, identificando riesgos, dependencias y oportunidades de optimización." },
  { title: "Diseño", description: "Arquitectura cloud a medida: selección de proveedores, modelos de nube y estrategia de migración sin interrupciones." },
  { title: "Migración", description: "Traslado controlado de cargas de trabajo, datos y aplicaciones con validación en cada etapa para garantizar continuidad." },
  { title: "Optimización", description: "Ajuste de rendimiento, costos y seguridad post-migración, con soporte continuo y monitoreo proactivo." },
];

/* ─────────────────────────────────────────────
   4. NIST — Estrategia de Ciberseguridad
   ───────────────────────────────────────────── */
const nistSteps = [
  { title: "Identify", description: "Identificamos activos críticos, evaluamos riesgos y vulnerabilidades en tu infraestructura para entender tu postura de seguridad actual." },
  { title: "Protect", description: "Implementamos controles de seguridad, políticas de acceso y capacitación para prevenir incidentes antes de que ocurran." },
  { title: "Detect", description: "Monitoreamos continuamente tu infraestructura 24/7 para detectar anomalías, amenazas y comportamientos sospechosos en tiempo real." },
  { title: "Respond", description: "Activamos protocolos de respuesta inmediata ante incidentes, contenemos amenazas y minimizamos el impacto en tu operación." },
  { title: "Recover", description: "Restauramos servicios, recuperamos datos afectados y mejoramos defensas para prevenir futuros incidentes similares." },
];

/* ─────────────────────────────────────────────
   5. CASOS DE USO SOC
   ───────────────────────────────────────────── */
const socUseCases = [
  {
    question: "Protección contra Ransomware",
    answer: "Detectamos patrones de cifrado anómalos y comportamientos sospechosos en tiempo real. Nuestro SOC bloquea ataques de ransomware antes de que paralicen tu operación.\n\n✓ Detección de actividad de cifrado masivo\n✓ Aislamiento automático de dispositivos comprometidos\n✓ Respuesta inmediata en menos de 15 minutos\n✓ Análisis forense post-incidente\n✓ Recuperación coordinada con Ciber Recuperación",
  },
  {
    question: "Suplantación de Marca e Identidad (Phishing)",
    answer: "Monitoreamos la web superficial y profunda (dark web) para detectar uso no autorizado de tu marca, dominios similares fraudulentos y credenciales comprometidas.\n\n✓ Escaneo de dominios falsos que imitan tu marca\n✓ Monitoreo de dark web para credenciales filtradas\n✓ Detección de campañas de phishing dirigidas\n✓ Alertas inmediatas de amenazas de suplantación\n✓ Acciones legales y takedown de sitios fraudulentos",
  },
  {
    question: "Detección de Intrusiones y Accesos no Autorizados",
    answer: "Identificamos intentos de acceso no autorizado, movimientos laterales dentro de tu red y exfiltración de datos antes de que causen daño.\n\n✓ Monitoreo de intentos de login fallidos y brute force\n✓ Detección de privilegios elevados anormales\n✓ Alertas de acceso desde ubicaciones geográficas inusuales\n✓ Análisis de comportamiento de usuarios (UBA)\n✓ Respuesta automática con bloqueo de cuentas comprometidas",
  },
  {
    question: "Cumplimiento Normativo y Auditorías",
    answer: "Ayudamos a cumplir con regulaciones como ISO 27001, NIST, PCI-DSS y regulaciones locales mediante monitoreo continuo y reportes detallados.\n\n✓ Reportes automáticos de cumplimiento normativo\n✓ Auditoría de logs y trazabilidad completa\n✓ Documentación lista para inspecciones\n✓ Alertas de eventos que requieren reporte obligatorio\n✓ Dashboard ejecutivo con métricas de seguridad",
  },
];

/* ─────────────────────────────────────────────
   6. FAQs
   ───────────────────────────────────────────── */
const faqs = [
  { question: "¿Qué incluye el servicio de infraestructura cloud?", answer: "Incluye diseño de arquitectura, migración, operación, monitoreo 24/7 y soporte continuo en nube pública, privada o híbrida." },
  { question: "¿Cómo funciona la Ciber Recuperación?", answer: "Implementamos backups inmutables, réplica de datos y planes DRP que permiten recuperar tu operación en minutos tras un incidente." },
  { question: "¿Qué diferencia hay entre Ciber Protección y el SOC?", answer: "Ciber Protección son las herramientas (antivirus, DLP, firewall, WAF). El SOC es el equipo de especialistas que monitorea 24/7 y responde ante incidentes usando esas herramientas." },
  { question: "¿Cuáles son los tiempos de respuesta?", answer: "Nuestros SLAs garantizan respuesta inicial en menos de 15 minutos para incidentes críticos." },
  { question: "¿Se integra con mi infraestructura actual?", answer: "Sí, nuestras soluciones son agnósticas y se integran con entornos on-premise, multi-cloud e híbridos." },
  { question: "¿Cómo iniciamos?", answer: "Comenzamos con un diagnóstico de tu infraestructura para identificar brechas, diseñar una estrategia a medida y definir un plan de implementación." },
];

export default function ValorITPage() {
  return (
    <div className="valor-it-theme">
      <ServiceStructuredData
        name="Soluciones IT Empresariales"
        description="Infraestructura en la nube, ciberprotección, ciber recuperación y servicios profesionales IT para empresas en Colombia."
        serviceType="IT Solutions"
      />
      <FAQStructuredData items={faqs} />

      {/* ── Hero ── */}
      <ValorITHero
        title={<><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffe3] to-[#00a6d6]">Soluciones </span>IT</>}
        subtitle="Infraestructura robusta + ciberseguridad + continuidad."
        primaryCtaText="Habla con un experto TI"
        primaryCtaHref="#contacto"
        secondaryCtaText="Solicitar propuesta"
        secondaryCtaHref="#contacto"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-principal-1500x600px%20%282%29-PTNxcg0iJMDnyPpMaPDJiGoNmcMR1F.png"
      />

      {/* ── Soluciones principales (visual showcase) ── */}
      <ITSolutionsShowcase />

      {/* ── Partners ── */}
      <ValorITPartnersSection />

      {/* ── Detalle: Modelos de nube, hiperconvergencia, VPS ── */}
      <AccordionSection
        title="Infraestructura Cloud en Detalle"
        items={infrastructureDetail}
      />

      {/* ── Migración Cloud (stepper) ── */}
      <Stepper
        title="Migración de Infraestructura a la Nube"
        steps={migrationSteps}
      />

      {/* ── Transformación Digital (proceso visual) ── */}
      <TransformationJourney />

      {/* ── NIST Ciberseguridad ── */}
      <Stepper
        title="Estrategia de Ciberseguridad (NIST)"
        steps={nistSteps}
      />

      {/* ── Casos de uso SOC ── */}
      <AccordionSection
        title="Casos de Uso: ¿Cómo te protege nuestro SOC?"
        items={socUseCases}
      />

      {/* ── Banner visual ── */}
      <ImageHighlight
        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-complemento-1500x600px%20%281%29-y3qiHaveyxXsXsxJEZkSiJK1kmYVV2.png"
        text="Seguridad y eficiencia sin compromisos."
        className="min-h-[240px] md:min-h-[300px] lg:min-h-[360px] py-12 md:py-16"
      />

      {/* ── FAQs ── */}
      <AccordionSection
        title="Preguntas frecuentes"
        items={faqs}
      />

      {/* ── Formulario de contacto ── */}
      <ContactFormSection />
    </div>
  );
}
