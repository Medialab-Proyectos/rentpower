# MacPower IT Solutions — CLAUDE.md

## Project Overview

B2B/B2C website for **MacPower IT Solutions**, Apple Business Partner in Colombia. Built with Next.js App Router, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 16 (App Router, React 19)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + shadcn/ui (new-york style) + Lucide icons
- **Forms**: React Hook Form + Zod
- **Package manager**: pnpm (prefer `pnpm` over `npm`)
- **Analytics**: Vercel Analytics + custom `track()` helpers in `/analytics`

## Common Commands

```bash
pnpm dev       # Start dev server
pnpm build     # Build for production
pnpm lint      # Run ESLint
```

## Directory Structure

```
app/                  # Next.js App Router pages
  apple/
  apple-educacion/
  comparar/
  contacto-empresas/
  labpower/           # Apple Authorized Service Center
    herramientas/     # Service estimator, order tracking
  mac/
  mac-para-empresas/
  nosotros/
  portafolio/
components/
  ui/                 # shadcn/ui primitives
  home/               # Home page sections
  layout/             # Header, footer, page intro
  labpower/           # LabPower-specific components
  apple/
  shared/             # Reusable cross-feature components
  contact/
  pdp/
  daas/
lib/
  data.ts             # Type definitions + mock data (Product, Service, Testimonial, etc.)
hooks/                # Custom hooks (use-toast, use-mobile)
analytics/            # Event tracking helpers
public/               # Static assets
```

## Conventions

- **Components**: PascalCase exports, files in kebab-case (e.g., `hero-section.tsx`)
- **Routes**: folder name = URL segment (Next.js App Router)
- **Styling**: Tailwind utility-first; use `cn()` (clsx + tailwind-merge) for conditional classes
- **Colors**: OKLCH CSS variables in `globals.css`; dark mode via `next-themes`
- **Font**: Lato (300, 400, 700, 900)
- **Icons**: Lucide React only
- **Images**: `next/image` with `unoptimized: true` (set in next.config.mjs)

## Key Notes

- `next.config.mjs` has `ignoreBuildErrors: true` — TypeScript errors won't block builds
- Path alias `@/*` maps to the project root
- No database — data lives in `/lib/data.ts` as mock/static data
- External integrations: Google Tag Manager (GTM-N2XD595J), WATI (WhatsApp widget), cookie consent
- SEO: server-side metadata, OpenGraph, JSON-LD structured data per page
