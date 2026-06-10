import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RentPower | Mayorista tecnologico para resellers',
    short_name: 'RentPower',
    description: 'Mayorista de soluciones tecnologicas para resellers e integradores en LATAM.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0e1a',
    theme_color: '#0a0e1a',
    icons: [
      {
        src: '/images/rentpower/marcas/favicon-Rentpower.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/images/rentpower/rentpower-color.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        src: '/images/rentpower/rentpower-color.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
  }
}
