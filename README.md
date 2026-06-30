# Giver Army — giverarmy.com

The consumer-facing marketing site for the **Giver Army**, a generosity movement.
Built on StoryBrand: **the giver is the hero, Giver Army is the guide.**

> **A Crowd for the Crowdless** — Some people in need have no crowd. Giver Army
> is a movement of everyday givers who fund them, follow their stories, and share
> the hope of Jesus through generosity — so no one faces their hardest moment alone.

This site is **marketing only**. It does **not** process payments. Every giving
action is an outbound link to the GiveSendGo Charities donor site.

---

## Stack

- **Next.js 14 (App Router) + TypeScript**
- **Tailwind CSS** with the 2026 brand tokens encoded in `tailwind.config.ts`
- **lucide-react** for icons
- **Inter** via `next/font/google` (weights 400–900)
- Deployment target: **Cloudflare Pages** (`@cloudflare/next-on-pages`-compatible;
  edge routes avoid Node-only APIs)

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint

# Cloudflare Pages preview (requires wrangler):
npm run pages:build
npm run preview
```

---

## Where the content lives

All content is centralized so it can be edited without touching components:

| File | What it holds |
|---|---|
| `lib/causes.ts` | The 12 causes (name, description, campaign URL). Drives the carousel. |
| `lib/stories.ts` | Story objects (`slug`, `title`, `teaser`, `body`, `cause`, `image`, `consentConfirmed`, `placeholder`). |
| `lib/links.ts` | **All** outbound givesendgo.org / givesendgo.com URLs — swap in one place. |
| `lib/stats.ts` | Homepage / impact metrics (all placeholders). |
| `lib/site.ts` | Site name, nav, and the exact entity-separation statement. |

Routes:

```
/                     Home
/movement             The Movement (who we are, mission/vision/values, entity bridge)
/stories              Stories index — top-level pillar, filterable by cause
/stories/[slug]       Individual story template (SSG)
/impact               Impact (metrics, 12 causes carousel, transparency, Candid Platinum)
/multiply             Multiply (Pray · Share · Recruit + Dispatch signup)
/about                About / Trust (entity relationship, FAQ, offline/complex giving)
```

---

## ⚠️ Entity separation (compliance — do not deviate)

Giver Army is a **movement of GiveSendGo Charities, Inc.**, a Florida 501(c)(3)
public charity (**EIN 88-3776392**). Giver Army is **not** a separate legal entity
and does **not** itself receive funds.

- **GiveSendGo Charities (givesendgo.org)** is the legal/donor entity. All gifts
  are made to and stewarded by GiveSendGo Charities.
- **GiveSendGo.com LLC** is a **separate company** (the crowdfunding platform). It
  is **not** the recipient of gifts and must never be presented as the giving
  entity. Do not conflate the two anywhere.
- Every page footer carries the exact statement (see `lib/site.ts`):
  > "Giver Army is a movement of GiveSendGo Charities, Inc., a 501(c)(3) public
  > charity. All gifts are made to and stewarded by GiveSendGo Charities." + EIN.

Do not invent new legal/tax claims, ROI multipliers, percentage guarantees, or
income projections. If a stat or claim isn't explicitly provided, it stays a
clearly-marked placeholder.

---

## What is a placeholder (route through compliance/ops before launch)

These are intentionally fake/unset and flagged in code with `TODO` or a visible
note. **Do not present any of these as real.**

- **Stats** (`lib/stats.ts`) — every figure is a placeholder (`—`). A visible note
  renders next to them. Replace with verified reporting only.
- **Stories** (`lib/stories.ts`) — all seed stories are **fictional**, with invented
  names and generated SVG art (`/public/stories/*.svg`). `consentConfirmed: false`
  and `placeholder: true`. **Real testimonies require documented written consent**
  before publishing — set `consentConfirmed: true` and `placeholder: false`.
- **Logo assets** (`/public/logos/*.svg` + `components/Logo.tsx`) — placeholder
  winged-emblem marks. Swap for the official brand files (horizontal slate,
  horizontal gold/white, vertical).
- **Newsletter** — `components/NewsletterForm.tsx` POSTs to `app/api/subscribe`,
  a placeholder edge handler that validates the email shape and returns 200 but
  **persists/sends nothing**. `TODO`: wire to MailerLite.
- **Cause campaign URLs** (`lib/causes.ts`) — verify each resolves before launch;
  any 404 routes through compliance/ops.
- **Outbound give/join URLs** (`lib/links.ts`) — placeholder `givesendgo.org/join`
  and `/give`; swap for production checkout URLs.
- **OG image** — metadata is set, but no custom raster OpenGraph image ships yet.

---

## Brand notes

- **60:30:10 ratio** — Slate dominant (60%), Cream/neutral secondary (30%), Gold
  accent (10%). Gold is an accent only; never a dominant surface.
- Tokens live in `tailwind.config.ts` (`slate.*`, `gold.*`, `cream.*`, `cool.*`).
- The signature visual is the winged emblem on a Slate hero with a soft radial
  Antique-Gold glow (`bg-hero-glow`). Boldness is concentrated there.

## Accessibility & performance

- Responsive from 360px; verified no horizontal overflow across pages.
- Semantic landmarks, skip link, visible gold focus rings, aria-labelled carousel
  buttons, alt text on all images.
- `prefers-reduced-motion` disables smooth-scroll and transitions.
- Per-page `<title>` / meta description / OpenGraph; `sitemap.xml` + `robots.txt`.
- Images via `next/image` (`unoptimized` for the edge — swap to a Cloudflare image
  loader if/when real raster art is added).
