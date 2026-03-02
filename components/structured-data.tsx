export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MacPower IT Solutions",
    "url": "https://www.macpower.com.co",
    "logo": "https://www.macpower.com.co/images/macpower-logo-color.svg",
    "sameAs": [
      "https://facebook.com/macpoweritsolutions",
      "https://instagram.com/macpower_itsolutions",
      "https://linkedin.com/company/macpower-it-solutions"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57-300-123-4567",
      "contactType": "customer service",
      "areaServed": "CO",
      "availableLanguage": ["Es", "En"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle 74 # 15-80, Oficina 101, Edificio Osaka Center",
      "addressLocality": "Bogotá, Colombia",
      "addressRegion": "DC",
      "postalCode": "110221",
      "addressCountry": "CO"
    },
    "description": "Expertos en soluciones IT empresariales y Apple Business Partner en Colombia."
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
