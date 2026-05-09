import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"

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
    "Mayorista de soluciones tecnologicas para resellers e integradores en LATAM. DaaS, cloud, networking, ciberseguridad, MDM y digital learning con respaldo de DAGA Holding.",
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
    "DAGA Holding",
  ],
  openGraph: {
    title: "RentPower | Mayorista tecnologico para resellers LATAM",
    description:
      "RentPower codifica resellers y les entrega portafolio, acompanamiento comercial y soporte para revender soluciones tecnologicas en Colombia y Peru.",
    type: "website",
  },
}

export default function RentPowerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden`}
    >
      {children}
    </div>
  )
}
