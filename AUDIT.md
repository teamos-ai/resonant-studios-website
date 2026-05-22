# Resonant Studios website — audit

**Date:** 2026-05-22
**Commit at audit time:** `0990135` (footer column titles → terra in dark mode)
**Live URL:** <https://resonant-studios-website.vercel.app>
**Rubric:** Design system BRIEF.md (`Claude_Code_Root/resonant-studios-design-system/BRIEF.md`) and the locked Direction-B Field Recording tokens.

---

## How to read this

Each finding has a severity, the file/line where it lives (or `live` if a deploy-only artefact), and a fix. P0 blocks shipping to the customer demo. P1 should land before the demo if possible. P2/P3 are polish.

| Severity | Meaning |
|---|---|
| **P0** | Visibly broken or 404s. Ship-blocker. |
| **P1** | Quality issue that will be noticed during the demo. Fix today if possible. |
| **P2** | Polish — improves the site but won't embarrass you. |
| **P3** | Nice-to-have / future iteration. |

Counts: **3 P0**, **5 P1**, **6 P2**, **7 P3**.

---

## P0 — ship-blockers

### P0-01 · Footer legal links return 404

The footer renders Privacy / Terms / Accessibility links pointing to `/privacy`, `/terms`, `/accessibility`. None of those pages exist. Anyone who clicks gets Next.js's default 404.

**Location:** `app/components/site/Footer.tsx:89-93`
**Fix (either):** stub the three pages with placeholder content ("Privacy notice — coming soon. Email hello@resonantstudios.com.au for our current policy.") OR remove the links from the footer until the pages exist. Stubbing is safer for the demo because legal links missing entirely also raises eyebrows.

### P0-02 · `/contact` form is a dashed placeholder

The Contact page's "Send a message" section is a styled empty box with a `// TODO` comment instead of an actual GHL form. A visitor expecting to submit a contact enquiry will see nothing functional.

**Location:** `app/contact/page.tsx:74-78`
**Fix:** ask Tumai for the GHL contact-form iframe code and wire it in the same way the booking calendar was wired (Script loader + sized iframe inside `.rs-embed-slot`).

### P0-03 · `/for-support-coordinators` referral form is a dashed placeholder

Same shape as P0-02 — the "Refer a participant" form is an empty placeholder. Support coordinators looking to make a referral can't.

**Location:** `app/for-support-coordinators/page.tsx:90-95`
**Fix:** same as above — get the GHL referral form iframe and wire it.

---

## P1 — fix today if possible

### P1-01 · Image weights are enormous (46 MB total, hero JPEGs 3–5 MB each)

Cold-loading `/` pulls the Music Studio hero at **3.35 MB** (verified live, 1.6 s transfer on a fast connection — much worse on 3G/4G). The Tony Mixing Profile photo on `/` is 5.4 MB. The control room hero on `/contact` is 3.4 MB.

| Page | Hero image | Size |
|---|---|---|
| `/` hero | music-studio.jpg | 3.35 MB |
| `/` problem section | tony-mixing-profile.jpg | 5.4 MB |
| `/about` hero | tony-mixing-profile.jpg | 5.4 MB |
| `/about` body | tony-console.jpg | 3.8 MB |
| `/how-it-works` hero | tony-synth-piano.jpg | 2.3 MB |
| `/sessions` hero | tony-hands-on-console.jpg | 2.9 MB |
| `/sessions` body | tony-vocal-booth.jpg | 4.0 MB |
| `/ndis-funding` hero | console-fader-detail.jpg | 2.3 MB |
| `/for-support-coordinators` hero | founder-client.jpg | 2.7 MB |
| `/contact` hero | control-room-wide.jpg | 3.4 MB |
| `/book` hero | tony-hands-on-console.jpg | 2.9 MB |
| Closing CTA bands | studio-side.jpg | 2.5 MB |

**Fix:** convert each photo to WebP at ~1600 px wide max, target 150–300 KB per file. Drop them in `public/library/photos/` with the same filenames (or `-1600.webp` suffix and update refs). Should hit 90–95 % size reduction with no visible quality loss.

**Quick win without a build step:** open each image in [Squoosh](https://squoosh.app) → MozJPEG 75 → resize to 1600 px wide → save. Then `git mv` over the existing JPEGs.

### P1-02 · Heroes use CSS `background-image: url()`, bypassing Next/Image

Every page hero sets the photo via inline `style={{ backgroundImage: "url('/library/photos/...jpg')" }}`. Next.js's `Image` component can't optimise these. The browser loads the original JPEG regardless of viewport.

**Location:** every `app/*/page.tsx` has 1–2 `backgroundImage` calls.
**Fix:** keep the hero photo as a CSS background for now (the vignette + scrim layering needs it), but couple with P1-01 (small WebP source files). Long-term, refactor heroes to render the photo as an `<Image fill>` with the scrim as a sibling element.

### P1-03 · Footer social links go to `href="#"`

Instagram, Facebook, Spotify icons are present in the footer with `href="#"`. Clicking them jumps the page to the top — looks unfinished and is bad for SEO (search crawlers will follow them and find nothing).

**Location:** `app/components/site/Footer.tsx:83-85`
**Fix:** either paste the real social URLs once Tony has accounts, or remove the icons until then. Half-wired social is worse than absent.

### P1-04 · "ABN coming soon" in footer copyright

Footer line: `© 2026 Resonant Studios · Tony Rako · ABN coming soon`. Fine internally; on a public site it reads like an unfinished business.

**Location:** `app/components/site/Footer.tsx:96`
**Fix:** drop "ABN coming soon" until the ABN is registered, or replace with the real ABN.

### P1-05 · No robots.txt or sitemap.xml

Search engines (Google in particular) need a `sitemap.xml` to index all 8 pages reliably. Next.js 15 generates both from `app/sitemap.ts` and `app/robots.ts` files — a tiny one-time addition.

**Location:** missing — `app/sitemap.ts`, `app/robots.ts`
**Fix:** add both files. Sitemap lists all 8 routes; robots.txt allows everything except `/api` (we have none) and points at the sitemap.

---

## P2 — polish

### P2-01 · Inline `rgba(245,239,228,0.4)` cream values bypass tokens

Five inline style attributes set `borderColor: "rgba(245,239,228,0.4)"` on the outline buttons that sit on photographic hero backgrounds. The colour is `--ink-on-image` at 40 % alpha — should be tokenised.

**Locations:** `app/page.tsx:24`, `app/about/page.tsx:22`, `app/contact/page.tsx:23`, `app/for-support-coordinators/page.tsx:22`, `app/sessions/page.tsx:22`
**Fix:** add `--ink-on-image-rgb: 245, 239, 228;` to tokens.css, then `borderColor: "rgba(var(--ink-on-image-rgb), 0.4)"`. Or define a `.btn-secondary.on-photo` class in `site.css` and use that instead of inline styles.

### P2-02 · Sessions page pricing tiles have no `<h3>`

The three pricing cards on `/sessions` use a `.eyebrow` div for the tier label ("Single", "8 sessions", "12 sessions") instead of `<h3>`. Screen-reader users navigating by heading land in the heading-heading-paragraph rhythm everywhere else, but skip these tile names entirely.

**Location:** `app/sessions/page.tsx` pricing grid section
**Fix:** wrap each tier label in `<h3 className="rs-feature-h">` so the heading outline stays intact.

### P2-03 · Footer Studio column sub-eyebrows could be `<h4>`

VISIT / PHONE / EMAIL sub-labels in the Studio column are `<span class="rs-footer-eyebrow">`. They're acting as sub-headings to the column title. Promote to `<h4>` so screen-reader users can navigate to them.

**Location:** `app/components/site/Footer.tsx:57-71`
**Fix:** change three `<span>` to `<h4>` with the same class. Visual styling stays.

### P2-04 · "Coordinators" nav label is terse alone

The desktop nav abbreviates "For support coordinators" → "Coordinators" to fit the bar. Reads cleanly in context but slightly cryptic for a first-time visitor.

**Location:** `app/components/site/Nav.tsx:15` (`links` array)
**Fix (optional):** lengthen to "For coordinators" — would still fit at 1240 px max.

### P2-05 · No favicon.ico (only icon.png)

`app/icon.png` is 1.9 MB (the source PNG). Next.js generates the favicon from this on the fly. Browsers fetching `/favicon.ico` directly will 404 (some legacy clients try). Modern browsers find the Next-generated icon via the manifest, so this is invisible in practice. Still worth adding a 32×32 `favicon.ico` to silence any 404 warnings in DevTools.

**Location:** `app/icon.png` — replace with smaller files or add `app/icon-32.png` / `favicon.ico` alongside.
**Fix:** export the square logo at 32×32 and 180×180 (Apple touch icon) and place under `app/icon-32.png` / `app/apple-icon.png`. Drop the 1.9 MB source from the `app/` directory and store it under `public/library/logos/` only.

### P2-06 · Acknowledgement of Country wording is the BRIEF's default

The footer AOC uses the generic Wadawurrung + Bunurong default text. The design system BRIEF flags this as TBD pending Tony's preferred phrasing — same gap remains here.

**Location:** `app/components/site/Footer.tsx:12-14`
**Fix:** confirm with Tony whether the current Wadawurrung + Bunurong phrasing is accurate for the Yarraville studio location (Yarraville sits on Wurundjeri / Boon Wurrung country specifically — the current wording may need adjustment). Replace with Tony's preferred text.

---

## P3 — nice-to-have

### P3-01 · No JSON-LD structured data
Add `LocalBusiness` + `Service` schema to the site root. Surfaces in Google rich results, especially useful for "NDIS music studio Melbourne" intent. ~50 lines in `app/layout.tsx`.

### P3-02 · No custom 404 page
Next default. Brand a `app/not-found.tsx` with the floating nav + a short friendly message + a "Back to home" CTA.

### P3-03 · No custom loading state
Default Next spinner. `app/loading.tsx` with the brand mark would smooth the first navigation.

### P3-04 · FAQ page missing
The design system BRIEF lists FAQ as a confirmed page. We shipped 8 pages but skipped FAQ. The masterfile has 10–15 candidate questions ready to use.

### P3-05 · Sitemap diverges from BRIEF
DS BRIEF says 6 pages: Home, For Participants, For Support Coordinators, How It Works, FAQ, Contact/Book. We shipped 8: Home, About, How It Works, Sessions, NDIS Funding, For Support Coordinators, Contact, Book. The expansion was a deliberate scope decision earlier — worth noting that "For Participants" was effectively split into About + Sessions + NDIS Funding.

### P3-06 · No Spotify embed
BRIEF integrations section calls for "every participant's finished track lives on Spotify under their name — surfaced via the audio player and `<PullQuote>` patterns." No tracks exist yet (v1.1) but the slot for one isn't reserved. The home Testimonial section is the natural place for it.

### P3-07 · No participant testimonials anywhere
Founder pull-quote stands in. Real participant quotes (with consent + ideally Spotify track embed) are the single highest-conversion content type for an NDIS service. Capture as soon as the first cohort releases.

---

## What's working well

- **Heading hierarchy:** every page has exactly 1 H1, no skipped levels. Verified across all 8 pages.
- **Brand voice:** no "Antony", no "Resonance", no banned register (`therapy`, `intervention`, `clients`), no trailing `!`. Verified via grep.
- **Token discipline:** zero raw hex codes in TSX files. Five inline `rgba(...)` instances flagged in P2-01 but no other token bypasses.
- **Consistent CTA routing:** all 16 "Book a call" / "Book your discovery call" CTAs route to `/book`. No orphan CTAs.
- **Theme system:** dark default, manual `data-theme` override, `prefers-color-scheme` follow, all three theme paths honoured. Anti-FOUC script applies stored prefs before first paint.
- **Accessibility menu:** Reading (Default / Easy read / Dyslexia) + Motion (reduce) + Contrast (more) all wired and persistent via `rs-a11y` localStorage.
- **Mobile drawer:** working at <880 px viewport. Scroll-lock on body when open. Esc + click-outside dismiss. Focus management correct.
- **Light/dark CTA swap:** primary `.btn` is sage in light, terra in dark — matches the brand-loud convention.
- **Footer column titles:** correctly swap to terra in dark mode per recent feedback.
- **Image alt text:** all three raw `<img>` tags have descriptive alt. Background images correctly lack alt (decorative).
- **Meta tags:** title + description + OG title + OG description + Twitter description all present at root. Verified live.
- **Address + phone:** wired in footer and `/contact` with `tel:` and `mailto:` links. Google Maps directions link works.
- **GHL booking calendar:** loaded with `next/script strategy="lazyOnload"`, doesn't block first paint, has a fallback "open in new tab" link.
- **Skip link:** first focusable element on every page, visible on focus.
- **`lang="en-AU"`** set correctly on `<html>`.

---

## Suggested ship order

If you have 1 hour before the customer demo:

1. **P0-01** (stub `/privacy`, `/terms`, `/accessibility`): ~15 min
2. **P1-03** (remove social `#` links): ~2 min
3. **P1-04** (drop "ABN coming soon"): ~1 min
4. **P0-02 + P0-03** (wire the remaining two GHL forms when Tumai sends the embed codes): ~10 min after embeds arrive
5. **P1-01** (compress the 4 worst hero images via Squoosh): ~20 min
6. **P1-05** (add `app/sitemap.ts` + `app/robots.ts`): ~10 min

Everything else can land post-demo.
