# MX Electric — Marketing Website

A mobile-first marketing site for **MX Electric Inc.**, a veteran-owned electrical
contractor in Ogden, Illinois serving Champaign, Urbana and surrounding Central
Illinois.

Built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS**, and
ready to deploy to Vercel with no additional configuration.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # optional — see "Lead form wiring" below
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint 9 flat config (next/core-web-vitals + next/typescript)
npm run typecheck  # tsc --noEmit
```

## Deploying to Vercel

1. Import the repository in Vercel — the framework is detected automatically.
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain (e.g.
   `https://www.mxelectric.net`). This drives canonical URLs, `sitemap.xml`,
   `robots.txt` and the schema.org markup.
3. Set the lead-form delivery variables (below).
4. Deploy.

Every content page is statically pre-rendered at build time; only the lead API
route runs on demand.

---

## Editing content without touching components

All copy lives in `src/data/`, so the site can be updated without opening a
component file:

| File | What it controls |
| --- | --- |
| `src/data/business.ts` | Name, address, phone, email, hours, license/insurance, trust-band stats, "why choose us" cards |
| `src/data/services.ts` | All nine services — cards, page copy, "what's included", FAQs, dropdown options |
| `src/data/reviews.ts` | Customer reviews (real, verbatim — see the warning below) |
| `src/data/team.ts` | Max Painter, Scott Lamb, Dan Goyne — roles and bios |
| `src/data/projects.ts` | Recent-work gallery entries, before/after slots, filter categories |
| `src/data/serviceAreas.ts` | Per-city landing pages and the footer/contact service-area list |

The phone number appears everywhere as a real `tel:` link and is defined once in
`business.ts` (`phone.display` and `phone.href`) — change it there and it
changes site-wide.

> **Reviews are real customer statements.** The five reviews in `reviews.ts` are
> verbatim quotes from actual MX Electric customers. Style them however you
> like, but do not edit the wording or attribution, and do not add invented
> reviews.

## Routes

```
/                              Home
/about                         About + team
/services                      Services overview
/services/[slug]               9 service pages, statically generated:
                                 panel-upgrades, generators, remodels-rewires,
                                 ceiling-fans, ev-chargers, lighting,
                                 new-construction, knob-and-tube-removal,
                                 efficiency-consultations
/projects                      Recent work gallery, filterable by service
/reviews                       All customer reviews
/contact                       Lead form + contact card + map slot + service area
/service-areas/[slug]          Local SEO pages: champaign, urbana, ogden
/privacy, /terms               Legal boilerplate (needs review — see below)
/sitemap.xml, /robots.txt      Generated from the data files
/api/lead                      Lead form endpoint
```

Adding a service or a city is a data edit, not a code change: add an entry to
`services.ts` or `serviceAreas.ts` and the route, sitemap entry, nav item and
structured data all follow automatically.

## Lead form wiring

The form (`src/components/LeadForm.tsx`) is a three-step wizard — project →
contact → details — validated client-side, posting JSON to `/api/lead`.

Set **one** of these in Vercel's environment variables:

```bash
# Option A — Formspree
LEAD_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx

# Option B — Resend
RESEND_API_KEY=re_xxxxxxxxxxxx
LEAD_TO_EMAIL=office@mxelectric.net
LEAD_FROM_EMAIL=website@mxelectric.net
```

With neither set, submissions are logged to the server console and the form
still reports success, so the flow can be tested end to end in development.
**Configure one before launch or leads will not be delivered.**

The form includes a honeypot field for basic spam filtering. If spam becomes a
problem, add a CAPTCHA (hCaptcha or Cloudflare Turnstile) in the API route.

## Design system

MX Electric's own brand colors, defined once in `tailwind.config.ts`:

| Token | Value | Used for |
| --- | --- | --- |
| `brand-600` | `#d81f24` | Primary buttons, CTA bands, accents on light cards |
| `volt-400` | `#ffd400` | Nav strip, headings on dark/red, stat numbers, highlights |
| `ink-900` / `ink-950` | `#171717` / `#0b0b0b` | Header, dark sections, body text |

Typography uses the system UI font stack — no webfont request, so there is no
render-blocking font fetch and no layout shift. To switch to a webfont, add
`next/font` in `src/app/layout.tsx` and point the `fontFamily` tokens at it.

Reusable components live in `src/components/`: `Header`, `Footer`, `Logo`,
`CTAButton`, `ServiceCard`, `ReviewCard`, `ReviewsCarousel`, `LeadForm`,
`PlaceholderImage`, `SectionHeading`, `StatsBand`, `ValueProps`, `TrustChips`,
`FaqAccordion`, `ProjectGallery`, `ContactInfoCard`, `ServiceAreaTemplate`,
`PageHero`, `CTABand`, `Breadcrumbs`, `StickyMobileCTA`.

## SEO notes

- The favicon is `src/app/icon.svg` — a yellow bolt on black. Replace it with
  the real logo mark when the client supplies one.
- Every page is a **server component**; text content is in the server-rendered
  HTML, not gated behind client JavaScript. The three client components
  (header, reviews carousel, projects filter, lead form) still render their
  content server-side — the interactivity is progressive enhancement.
- schema.org `Electrician` / `LocalBusiness` structured data with the real NAP
  is emitted site-wide from `src/lib/schema.ts`, plus `Service`, `FAQPage`,
  `Review` and `BreadcrumbList` markup on the relevant pages.
- `aggregateRating` is deliberately **not** emitted. Publishing an unverified
  rating in structured data violates Google's policy — add it only once the
  real rating and review count are confirmed.
- Metadata, canonicals, Open Graph tags, `sitemap.xml` and `robots.txt` are all
  generated from the data files.

## Accessibility

Skip link, visible focus rings, labeled form fields with inline errors, ARIA
state on menus and filters, `prefers-reduced-motion` support, and semantic
landmarks throughout.

---

# ⚠️ PLACEHOLDERS — real client input still needed

Everything below is a deliberate placeholder. Search the codebase for
`PLACEHOLDER` to find every instance.

## Photography (all of it)

**No images are included.** Every image slot is an `<ImageSlot />` that looks
for a file in `/public/images` and falls back to a labeled placeholder box at
the same aspect ratio when the file is missing.

**To publish a photo, drop it in with the right filename — that is the whole
process.** No component edits, no broken images in between, and no layout shift
when it appears, because the slot was already sized.

| File to add (under `public/images/`) | Slot it fills | Ratio |
| --- | --- | --- |
| `hero.jpg` | Homepage hero background | wide, 1920px+ |
| `crew.jpg` | "Let MX Electric take charge" band | 4:5 |
| `team.jpg` | About page team photo | 4:3 |
| `team/max-painter.jpg` | Headshot — Max Painter | 4:5 |
| `team/scott-lamb.jpg` | Headshot — Scott Lamb | 4:5 |
| `team/dan-goyne.jpg` | Headshot — Dan Goyne | 4:5 |
| `services/<slug>.jpg` | Service page hero — one per service | 16:9 |
| `areas/<slug>.jpg` | Service area page — champaign, urbana, ogden | 16:9 |
| `projects/<slug>-before.jpg` | Projects gallery, before shot | 4:3 |
| `projects/<slug>-after.jpg` | Projects gallery, after shot | 4:3 |

Service slugs: `panel-upgrades`, `generators`, `remodels-rewires`,
`ceiling-fans`, `ev-chargers`, `lighting`, `new-construction`,
`knob-and-tube-removal`, `efficiency-consultations`. Project slugs are in
`src/data/projects.ts`.

`.avif`, `.webp`, `.jpg`, `.jpeg` and `.png` are all recognized (in that order
of preference). Everything renders through `next/image`, so responsive variants
are generated automatically.

The logo is still a typographic stand-in in `src/components/Logo.tsx` — replace
it with the real logo file when supplied. The favicon is `src/app/icon.svg`.

### A caution on reusing photos from the old site

Photos that MX Electric took themselves — real job sites, the crew, the van —
are theirs to move onto the new site freely. But a typical contractor site also
carries **licensed stock photography**, and that license usually belongs to the
web vendor or is tied to the old site specifically. The model-in-overalls type
of image is almost always stock. Carrying those across without checking the
license can mean a bill from the stock agency, so confirm the origin of each
image before republishing it, and record what you find in `IMAGE-CREDITS.md`.

## Video

`src/data/videos.ts` holds the YouTube video IDs. The homepage embeds one
through `<VideoEmbed />`, a click-to-load facade: nothing is requested from
YouTube until the visitor presses play, so there is no third-party script on
first paint and no cookies for people who never watch. The poster is drawn
locally, so the panel costs zero network requests at rest.

The title and caption in `videos.ts` are marked `[PLACEHOLDER]` — they were set
without being able to view the video, so confirm them.

## Business facts to confirm

| Item | Where | Note |
| --- | --- | --- |
| **License number** | `src/data/business.ts` → `credentials.licenseNumber` | Shown in the footer, contact card and terms page |
| **Insurance wording** | `credentials.insured` | Confirm exact carrier language |
| **Jobs completed** | `stats` array | Currently `[PLACEHOLDER]` in the red trust band |
| **Google rating + review count** | `credentials.googleRating` | Shown as a hero trust badge; also gates `aggregateRating` schema |
| **BBB accreditation / rating** | `credentials.bbb` | Hero trust badge — remove the chip if not accredited |
| **Email address** | `business.email` | Currently a guess (`info@mxelectric.net`) |
| **Business hours** | `business.hours` + `openingHours` | Also affects structured data; confirm after-hours/emergency policy |
| **Map coordinates** | `business.geo` | Approximate for Ogden — replace with the exact pin |
| **Facebook URL** | `business.social.facebook` | Currently a generic Facebook link |

## Guarantee / service promise

The homepage "Our service promise" section has a marked block asking for a
**quantified** promise — e.g. "calls returned within one business day",
"1-year workmanship warranty", or "on time or the trip charge is on us". A
specific promise converts meaningfully better than a general one. Confirm the
exact terms MX Electric is willing to publish, then replace the placeholder
block in `src/app/page.tsx`.

## Other placeholders

- **Military discount terms** — amount and eligibility (homepage FAQ).
- **Pricing ranges** — several service FAQs ask whether MX wants to publish
  ranges; leave them out or fill them in.
- **Estimate policy** — are estimates free? Is there a trip charge?
- **Generator fuel-line work** — in-house or subcontracted?
- **EV charger rebates** — confirm current Ameren Illinois and federal incentives
  before publishing any figures.
- **Efficiency consultation fee** — free visit or paid?
- **Projects gallery** — all nine entries are scaffolding. Replace with real
  jobs.
- **Team bios** — written from the supplied roles; have Max, Scott and Dan
  review them.
- **Google Maps embed** — the contact card has a map slot; drop in the real
  embed iframe.
- **Privacy Policy and Terms** — boilerplate. Have the client's attorney or
  insurer review before launch, and describe any analytics/tracking actually in
  use.
- **Google review link** — the reviews page links to Facebook; add the direct
  Google review URL.
