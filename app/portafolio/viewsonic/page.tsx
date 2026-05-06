import { ViewSonicHero } from "@/components/portafolio/viewsonic-hero";
import { ViewSonicProducts } from "@/components/portafolio/viewsonic-products";
import { KPIStrip } from "@/components/portafolio/shared/kpi-strip";
import { PortfolioForm } from "@/components/portafolio/shared/portfolio-form";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Soluciones de Visualización ViewSonic | MacPower IT Solutions",
  description: "Descubra cómo las soluciones visuales y de colaboración de ViewSonic, respaldadas por MacPower en Colombia, pueden transformar su empresa. Proyectores, pantallas ViewBoard y monitores profesionales.",
  keywords: [
    "ViewSonic Colombia",
    "MacPower ViewSonic",
    "Pantallas Interactivas ViewBoard",
    "Proyectores Láser para empresas",
    "Monitores Profesionales ViewSonic",
    "Digital Signage ViewSonic",
    "Soluciones visuales empresariales",
    "Distribuidor autorizado ViewSonic",
    "Audiovisual corporativo",
    "Colaboración educativa",
  ],
  alternates: {
    canonical: "/portafolio/viewsonic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ViewSonic & MacPower | Soluciones Visuales Empresariales",
    description: "Proyectores, pantallas interactivas y soluciones de colaboración ViewSonic con el respaldo experto de MacPower IT Solutions. Visite nuestro portafolio.",
    url: "https://www.macpower.com.co/portafolio/viewsonic",
    siteName: "MacPower IT Solutions",
    images: [
      { 
        url: "/images/viewsonic-team-interactive.png",
        width: 1200,
        height: 630,
        alt: "Equipo usando soluciones ViewSonic en oficina" 
      }
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ViewSonic & MacPower | Soluciones Visuales",
    description: "Equipe su empresa con tecnología visual avanzada de ViewSonic en Colombia.",
    images: ["/images/viewsonic-team-interactive.png"],
  },
};

const viewsonicKpis = [
  { value: "Empresa", label: "Salas de juntas y colaboración" },
  { value: "Educación", label: "Aulas interactivas y auditorios" },
  { value: "Retail", label: "Comunicación visual comercial" },
  { value: "Operación", label: "Centros de control y señalización" },
];

const viewsonicInterests = [
  { value: "proyectores", label: "Proyectores Láser DLP" },
  { value: "interactivas", label: "Pantallas Interactivas ViewBoard" },
  { value: "monitores", label: "Monitores Profesionales" },
  { value: "signage", label: "Digital Signage" },
  { value: "varios", label: "Múltiples soluciones" },
  { value: "otro", label: "Otro" },
];

export default function ViewSonicPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Soluciones de Visualización ViewSonic | MacPower IT Solutions",
    "description": "MacPower es distribuidor oficial autorizado de ViewSonic en Colombia, ofreciendo integración de pantallas VewBoard, proyectores láser y señalización digital empresarial.",
    "publisher": {
      "@type": "Organization",
      "name": "MacPower IT Solutions",
      "url": "https://www.macpower.com.co",
      "logo": "https://www.macpower.com.co/images/macpower-logo-original.png"
    },
    "brand": {
      "@type": "Brand",
      "name": "ViewSonic",
      "logo": "https://www.macpower.com.co/files/ViewSonic_logo.png"
    },
    "offers": {
      "@type": "AggregateOffer",
      "itemOffered": [
        {
          "@type": "Product",
          "name": "Pantallas Interactivas ViewBoard"
        },
        {
          "@type": "Product",
          "name": "Proyectores Láser"
        },
        {
          "@type": "Product",
          "name": "Monitores Profesionales"
        },
        {
          "@type": "Product",
          "name": "Digital Signage"
        }
      ]
    }
  };

  return (
    <div className="viewsonic-theme">
      {/* JSON-LD Script para descubribilidad en IA y Motores de Búsqueda (AEO/SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Theme override: ViewSonic crimson accent + light-mode safe background */}
      <style dangerouslySetInnerHTML={{__html: `
        .viewsonic-theme {
          --accent: #CD2027;
          --accent-foreground: #ffffff;
        }
        .dark .viewsonic-theme {
          --accent: #e03038;
          --accent-foreground: #ffffff;
        }
      `}} />

      {/* Hero Principal con imagen real, logo ViewSonic y micro-interacciones */}
      <ViewSonicHero />

      {/* KPIs Rápidos — colores adaptados para modo claro */}
      <KPIStrip 
        kpis={viewsonicKpis} 
        valueClassName="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[#CD2027] to-[#e85960] group-hover:scale-110 transition-transform" 
      />

      {/* Portafolio de productos con imágenes reales y tabs animados */}
      <ViewSonicProducts />

      {/* Formulario de contacto — "¿Listo para transformar tu empresa?" */}
      <div className="relative overflow-hidden">
        {/* Decoración de fondo clara y oscura */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#CD2027]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#52678D]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <PortfolioForm
          title="¿Listo para transformar tu empresa?"
          subtitle="Descubra cómo las soluciones de ViewSonic pueden integrarse en su operación con el respaldo y acompañamiento de MacPower."
          badgeText="Optimice sus espacios con soluciones ViewSonic"
          accentColor="#CD2027"
          accentColorLight="rgba(205, 32, 39, 0.08)"
          interests={viewsonicInterests}
          ctaLabel="Solicite asesoría especializada"
        />
      </div>
    </div>
  );
}
