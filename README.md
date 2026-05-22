# Resonant Studios — Website

The public marketing site for [Resonant Studios](https://resonantstudios.com.au) — a boutique, NDIS-aligned music production studio in Werribee, Melbourne's west, founded and run by **Tony Rako**.

Built with Next.js 15 (App Router) + TypeScript, deployed on Vercel. Forms, calendar, lead capture, and CRM all live in Go High Level — embedded into the site via iframes inside the design system's `FormShell` and `SchedulerShell` wrappers.

## Stack

- **Next.js 15** App Router · **React 18** · **TypeScript**
- CSS custom properties (tokens) — no Tailwind, no CSS-in-JS runtime
- `lucide-react` for icons (1.5 px stroke, `currentColor`)
- Self-hosted fonts: DM Serif Display, Manrope, Atkinson Hyperlegible (opt-in a11y)

## Design system (source of truth)

This site **consumes** the locked design system at:

- Source: [`teamos-ai/resonant-studios-design-system`](https://github.com/teamos-ai/resonant-studios-design-system)
- Live styleguide: <https://resonant-studios-design-system.vercel.app/design-system>
- Local: `T:\Claude_Code_Root\resonant-studios-design-system\`

`app/globals.css`, all `app/components/ui/` primitives, and the public fonts/logos were copied across at scaffold time. When the design system updates, sync the relevant files. (A future iteration may publish the design system as an npm package for a cleaner dependency.)

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Folder structure

```
app/
├── components/
│   ├── ui/            # Design-system primitives (copied from the DS repo)
│   └── site/          # Marketing one-offs: Nav, Footer
├── globals.css        # Three-tier token system (source: DS repo)
├── site.css           # Marketing-site styles (nav, footer, page utilities)
├── layout.tsx         # Root layout: skip link, Nav, Footer, anti-FOUC script
├── page.tsx           # /
├── about/page.tsx     # /about
├── how-it-works/page.tsx
├── sessions/page.tsx
├── ndis-funding/page.tsx
├── for-support-coordinators/page.tsx
├── contact/page.tsx
└── book/page.tsx
public/
├── fonts/             # DM Serif Display + Manrope (self-hosted)
├── library/
│   ├── logos/         # nav-logo-square.png, footer-logo-wide.png, plus DS logos
│   └── photos/        # Studio + Tony photography (Music Studio, Tony Mixing Profile, etc.)
└── assets/            # paper-grain.svg + supporting marks
```

## Go High Level integration

Forms (discovery call, contact, referral) and the booking calendar live in GHL. Each page has an `.rs-embed-slot` placeholder marked with `// TODO: replace with GHL ... iframe embed code`. To wire up:

1. Generate the embed code in GHL for the target form/calendar.
2. Paste the `<iframe>` (or GHL's embed snippet) inside the corresponding `.rs-embed-slot` div.
3. The surrounding card chrome is already token-styled.

A GHL → tokens CSS mapping (for inline-embedded forms instead of iframes) lives in the design system repo at `handoff/integrations/ghl-form.css`.

## House rules (inherited from the design system)

- **Tokens:** components consume tier-2 only (`var(--primary)`, `var(--ink)` …). No hex in component files. No primitive tokens (`--terra-300`, `--linen-100`) in component files. Mode switching = swap tier-2 values; never edit components.
- **Shape language:** rounded squares, not pills. `--r-pill` is reserved for genuinely circular elements (avatars, switch tracks, status dots).
- **Motion:** out-expo only — `cubic-bezier(0.22, 1, 0.36, 1)`. Three durations: `140ms` micro · `220ms` component · `420ms` scene. No springs, no bounces.
- **Accessibility:** WCAG 2.2 AA across all interactive surfaces; AAA body contrast for long-form. 48 px touch targets. Focus rings always visible — `outline: none` is forbidden. `prefers-reduced-motion`, `prefers-contrast: more`, `prefers-reduced-data` all honoured.
- **Voice:** sentence case, no trailing `!`, no clinical register. Founder name is **Tony Rako** (never "Antony"). Brand is **Resonant Studios** (never "Resonance").

## Sitemap (v1)

- `/` — Home
- `/about` — Tony's story + studio space
- `/how-it-works` — 5-step journey + 3-hour session breakdown
- `/sessions` — What a session looks like + pricing
- `/ndis-funding` — Funding paths + NDIS-compliant rates
- `/for-support-coordinators` — Referral case + outcomes + referral form
- `/contact` — Contact methods + general enquiry form
- `/book` — Free discovery call + GHL calendar embed

## License

Proprietary — Resonant Studios.
