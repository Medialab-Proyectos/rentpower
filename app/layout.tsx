import React from "react"
import type { Metadata, Viewport } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

import { StructuredData } from '@/components/structured-data'
import { CookieConsent } from '@/components/shared/cookie-consent'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rentpower.com.co'),
  title: {
    default: 'RentPower | Mayorista de soluciones tecnologicas para resellers',
    template: '%s | RentPower',
  },
  description: 'Mayorista de soluciones tecnologicas para resellers e integradores en LATAM. DaaS, cloud, networking, ciberseguridad, MDM y digital learning con respaldo de DAGA Corporate.',
  icons: {
    icon: [
      { url: '/images/rentpower/marcas/favicon-Rentpower.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/images/rentpower/marcas/favicon-Rentpower.svg',
    apple: '/images/rentpower/marcas/favicon-Rentpower.svg',
  },
  keywords: [
    'mayorista tecnologia LATAM',
    'DaaS Colombia',
    'Device as a Service',
    'canal tecnologia',
    'distribuidor IT',
    'reseller IT',
    'ciberseguridad enterprise',
    'networking empresas',
    'cloud LATAM',
    'RentPower',
    'DAGA Corporate',
  ],
  authors: [{ name: 'RentPower', url: 'https://www.rentpower.com.co' }],
  creator: 'RentPower',
  publisher: 'RentPower',
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
    title: 'RentPower | Mayorista tecnologico para resellers LATAM',
    description: 'RentPower codifica resellers y les entrega portafolio, acompanamiento comercial y soporte para revender soluciones tecnologicas en Colombia y Peru.',
    url: 'https://www.rentpower.com.co',
    siteName: 'RentPower',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/images/rentpower/rentpower-color.svg',
        width: 1200,
        height: 630,
        alt: 'RentPower - Mayorista tecnologico para resellers LATAM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RentPower | Mayorista tecnologico para resellers LATAM',
    description: 'RentPower codifica resellers y les entrega portafolio, acompanamiento comercial y soporte para revender soluciones tecnologicas en Colombia y Peru.',
    images: ['/images/rentpower/rentpower-color.svg'],
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MZ5PFVTK');`
          }}
        />
        {/* End Google Tag Manager */}
        {/* ContentSquare / Hotjar */}
        <script src="https://t.contentsquare.net/uxa/1a3415ef76f8a.js" async />
        {/* End ContentSquare / Hotjar */}
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZ5PFVTK"
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
          {children}
          <CookieConsent />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
