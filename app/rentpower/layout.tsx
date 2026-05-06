import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"

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
  title: "RentPower | Ecosistemas Tecnológicos Recurrentes para Canales",
  description:
    "Wholesaler de soluciones tecnológicas. DaaS, Cloud, Networking, Ciberseguridad y Digital Learning para canales y distribuidores en LATAM. Respaldado por DAGA Holding.",
  keywords: [
    "wholesaler tecnología LATAM",
    "DaaS Colombia",
    "Device as a Service",
    "canal tecnología",
    "distribuidor IT",
    "ciberseguridad enterprise",
    "networking empresas",
    "cloud LATAM",
    "RentPower",
    "DAGA Holding",
  ],
  openGraph: {
    title: "RentPower | Ecosistemas Tecnológicos para Canales LATAM",
    description:
      "No somos un mayorista tradicional. Construimos ecosistemas tecnológicos recurrentes para canales que quieren escalar.",
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
