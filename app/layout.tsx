import React from "react"
import type { Metadata, Viewport } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { PageIntro } from "@/components/layout/page-intro"

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

import { StructuredData } from '@/components/structured-data'
import { WatiWidget } from '@/components/shared/wati-widget'
import { CookieConsent } from '@/components/shared/cookie-consent'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.macpower.com.co'),
  title: {
    default: 'MacPower IT Solutions | Apple Business Partner y Soluciones Empresariales',
    template: '%s | MacPower IT Solutions',
  },
  description: 'Somos tu aliado estratégico en tecnología. Apple Business Partner en Colombia, soluciones de infraestructura IT, ciberseguridad, y gestión MDM para empresas.',
  keywords: [
    'Apple Business Partner Colombia',
    'Mac para empresas',
    'Soluciones IT empresariales',
    'Infraestructura tecnológica',
    'Ciberseguridad empresarial',
    'MDM Apple',
    'Arrendamiento de computadores',
    'Soporte técnico Apple certificado',
    'Consultoría IT',
    'Transformación digital',
  ],
  authors: [{ name: 'MacPower IT Solutions', url: 'https://macpower.com.co' }],
  creator: 'MacPower IT Solutions',
  publisher: 'MacPower IT Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'es-CO': '/es-CO',
    },
  },
  openGraph: {
    title: 'MacPower IT Solutions | Expertos en Tecnología Apple para Empresas',
    description: 'Transformamos tu empresa con el ecosistema Apple y soluciones IT de clase mundial. Ciberseguridad, infraestructura y soporte especializado.',
    url: 'https://www.macpower.com.co',
    siteName: 'MacPower IT Solutions',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/images/macpower-logo-color.svg', // Idealmente usar una imagen específica para OG (1200x630)
        width: 1200,
        height: 630,
        alt: 'MacPower IT Solutions - Apple Business Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MacPower IT Solutions | Apple Business Partner',
    description: 'Soluciones IT empresariales, Mac para empresas y soporte certificado en Colombia.',
    creator: '@macpower_it', // Si existe
    images: ['/images/macpower-logo-color.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N2XD595J');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${lato.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2XD595J"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <PageIntro />
          {children}
          <CookieConsent />
          <WatiWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}
