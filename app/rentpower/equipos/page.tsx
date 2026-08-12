import type { Metadata } from "next"
import { EquiposNav } from "@/components/rentpower/equipos/nav"
import { EquiposHero } from "@/components/rentpower/equipos/hero"
import { EquiposBeneficios } from "@/components/rentpower/equipos/beneficios-bar"
import { EquiposCatalogo } from "@/components/rentpower/equipos/catalogo"
import { EquiposOportunidad } from "@/components/rentpower/equipos/oportunidad"
import { EquiposReacondicionado } from "@/components/rentpower/equipos/reacondicionado"
import { EquiposSobre } from "@/components/rentpower/equipos/sobre-rentpower"
import { EquiposCtaBanda } from "@/components/rentpower/equipos/cta-banda"
import { EquiposFaq, faqs } from "@/components/rentpower/equipos/faq"
import { EquiposFooter } from "@/components/rentpower/equipos/footer"
import { WhatsAppFloat } from "@/components/rentpower/equipos/whatsapp-float"
import { equipos, formatCOP, precioDesde, precioPublico } from "@/lib/rentpower-inventory"

export const metadata: Metadata = {
  title: `Equipos reacondicionados desde ${formatCOP(precioDesde)} | RentPower`,
  description:
    "Portátiles, equipos de escritorio y todo en uno reacondicionados de Dell, Lenovo y HP con inventario disponible en Colombia. Consulta y compra por WhatsApp.",
  keywords: [
    "equipos reacondicionados Colombia",
    "portátiles reacondicionados",
    "computadores reacondicionados",
    "all in one reacondicionado",
    "Dell Latitude reacondicionado",
    "ThinkPad reacondicionado",
    "computadores baratos Colombia",
    "RentPower",
  ],
  openGraph: {
    title: `Equipos reacondicionados desde ${formatCOP(precioDesde)} | RentPower`,
    description:
      "Inventario disponible de portátiles, CPU y todo en uno reacondicionados. Asesoría y compra por WhatsApp.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Equipos reacondicionados desde ${formatCOP(precioDesde)} | RentPower`,
    description:
      "Inventario disponible de portátiles, CPU y todo en uno reacondicionados. Asesoría y compra por WhatsApp.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "Equipos reacondicionados RentPower",
      numberOfItems: equipos.length,
      itemListElement: equipos.map((equipo, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: `${equipo.marca} ${equipo.modelo}`,
          description: equipo.detalle,
          brand: { "@type": "Brand", name: equipo.marca },
          itemCondition: "https://schema.org/RefurbishedCondition",
          offers: {
            "@type": "Offer",
            price: precioPublico(equipo),
            priceCurrency: "COP",
            availability:
              equipo.unidades === null || equipo.unidades > 0
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
            seller: { "@type": "Organization", name: "RentPower" },
          },
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
}

export default function RentPowerEquiposPage() {
  return (
    // Inter como fuente base de toda la landing (los titulos usan Space Grotesk).
    // Sin esto los textos sin estilo explicito heredarian Lato del layout raiz.
    <div style={{ fontFamily: "var(--font-inter)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EquiposNav />
      <main>
        <EquiposHero />
        <EquiposBeneficios />
        <EquiposCatalogo />
        <EquiposOportunidad />
        <EquiposReacondicionado />
        <EquiposSobre />
        <EquiposCtaBanda />
        <EquiposFaq />
      </main>
      <EquiposFooter />
      <WhatsAppFloat />
    </div>
  )
}
