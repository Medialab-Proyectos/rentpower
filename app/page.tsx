import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { RentPowerHero } from "@/components/rentpower/hero"
import { RentPowerBrands } from "@/components/rentpower/brands-carousel"
import { RentPowerTrust } from "@/components/rentpower/trust"
import { RentPowerValue } from "@/components/rentpower/value-proposition"
import { RentPowerEcosystem } from "@/components/rentpower/ecosystem"
import { RentPowerSolutions } from "@/components/rentpower/solutions"
import { RentPower360 } from "@/components/rentpower/solution-360"
import { RentPowerFinancial } from "@/components/rentpower/financial"
import { RentPowerProcess } from "@/components/rentpower/process"
import { RentPowerCTA } from "@/components/rentpower/cta-final"
import { RentPowerFooter } from "@/components/rentpower/footer"
import { RentPowerNav } from "@/components/rentpower/nav"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "RentPower | Mayorista de soluciones tecnologicas para resellers",
  description:
    "Mayorista de soluciones tecnologicas para resellers e integradores en LATAM. DaaS, cloud, networking, ciberseguridad, MDM y digital learning con respaldo de DAGA Corporate.",
  keywords: [
    "mayorista tecnologia LATAM",
    "DaaS Colombia",
    "Device as a Service",
    "canal tecnologia",
    "distribuidor IT",
    "reseller IT",
    "ciberseguridad enterprise",
    "networking empresas",
    "cloud LATAM",
    "RentPower",
    "DAGA Corporate",
  ],
  openGraph: {
    title: "RentPower | Mayorista tecnologico para resellers LATAM",
    description:
      "RentPower codifica resellers y les entrega portafolio, acompanamiento comercial y soporte para revender soluciones tecnologicas en Colombia y Peru.",
    type: "website",
    images: [
      {
        url: "/files/logooscuro.png",
        width: 3222,
        height: 912,
        alt: "RentPower",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RentPower | Mayorista tecnologico para resellers LATAM",
    description:
      "RentPower codifica resellers y les entrega portafolio, acompanamiento comercial y soporte para revender soluciones tecnologicas en Colombia y Peru.",
    images: ["/files/logooscuro.png"],
  },
}

export default function HomePage() {
  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden`}
    >
      <RentPowerNav />
      <RentPowerHero />
      <RentPowerBrands />
      <RentPowerTrust />
      <RentPowerValue />
      <RentPowerEcosystem />
      <RentPowerSolutions />
      <RentPower360 />
      <RentPowerFinancial />
      <RentPowerProcess />
      <RentPowerCTA />
      <RentPowerFooter />
    </div>
  )
}
