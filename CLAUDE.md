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

# Claude Workspace

## Read first

Always read these files before doing design or audit work:

- ./context/project-context.md
- ./context/business-rules.md
- ./context/design-principles.md

These files are the source of truth for:

- product context
- business constraints
- design expectations
- UX principles
- domain rules

Do not skip them.

## Main agents

Primary agents for UX work:

- ux-interface-orchestrator
- ux-auditor-orchestrator

## When to use each agent

### Use `ux-interface-orchestrator` when the user asks to:

- create a new interface
- redesign a screen
- propose a flow
- generate structure, wireframes or UI direction
- define layout, components or interaction model

### Use `ux-auditor-orchestrator` when the user asks to:

- audit a screen, flow or product
- evaluate usability
- detect friction, anti-patterns or UX risks
- review accessibility, microcopy or IA
- prioritize UX findings and recommendations

## Available skills

- behavioral-ux
- creative-ui-landing
- ia-ux-architect
- ui-master-audit
- ux-accessibility-ergonomics
- ux-core-cognitive-biases
- ux-engagement
- ux-iso-ieee
- ux-klm-goms
- ux-microcopy-audit
- ux-ui-patterns
- zero-ui-game-ux
- ux-narrative-hero-journey
- cx-digital-experience

## Skill selection rules

Do not use all skills at once.
Select only the skills that materially improve the task.

### For interface creation

Prioritize:

- ia-ux-architect
- ux-ui-patterns
- ui-master-audit
- ux-accessibility-ergonomics
- ux-microcopy-audit

Add only if relevant:

- behavioral-ux
- ux-engagement
- zero-ui-game-ux
- creative-ui-landing
- ux-narrative-hero-journey
- cx-digital-experience

### For UX audits

Prioritize:

- ux-ui-patterns
- ux-accessibility-ergonomics
- ux-microcopy-audit
- ia-ux-architect
- ux-klm-goms
- ux-iso-ieee

Add only if relevant:

- behavioral-ux
- ux-core-cognitive-biases
- ux-engagement
- zero-ui-game-ux
- ux-narrative-hero-journey
- ui-master-audit
- cx-digital-experience

## Agent behavior

When asked to create an interface:

1. Read context files
2. Identify product, user, device and flow type
3. Select only relevant skills
4. Build structure and task flow first
5. Refine with interaction patterns, microcopy, accessibility and visual quality
6. Self-audit before final output

When asked to audit an interface or flow:

1. Read context files
2. Identify the user goal and task being evaluated
3. Detect which UX layers need review:
   - UI
   - IA
   - accessibility
   - microcopy
   - efficiency
   - behavioral design
   - CX
4. Select only the relevant skills
5. Produce evidence-based findings
6. Prioritize by severity and impact
7. Recommend concrete actions, not generic advice

## Audit output format

When using `ux-auditor-orchestrator`, always return:

- Executive summary
- Prioritized findings
- Evidence
- Why it is a problem
- User impact
- Business impact
- Severity
- Recommendation
- Quick wins
- Strategic improvements
- Skills used and why

## Quality bar

Always:

- be specific
- justify findings
- connect recommendations to evidence
- avoid generic UX advice
- avoid theory dumping
- prioritize actionable output
