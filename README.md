# Horizon Properties

A premium real-estate website for a boutique brokerage: architectural residences,
waterfront estates and prime-city investments. Built as a real production app —
typed data layer, reusable components, working search, filtering and enquiry flows.

## Stack

- **React 18 + TypeScript** (strict), bundled by **Vite 6**
- **React Router 6** for routing (`/`, `/properties`, `/properties/:slug`, `/about`, `/services`, `/team`, `/contact`)
- **Tailwind CSS 3** with design tokens in `tailwind.config.ts` (navy / champagne / ivory palette, display + sans type scale)
- **lucide-react** for icons; no carousel, gallery or animation library — those are built in-house
- Self-hosted fonts in `public/fonts` (Jost for display, Inter for UI) with no runtime font CDN

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Type-check (`tsc --noEmit`) then production build to `dist/` |
| `npm run preview` | Serve the production build |
| `npm run typecheck` | Types only |

## Structure

```
src/
  components/
    forms/         inquiry form, schedule-a-viewing dialog, newsletter signup
    layout/        header (transparent → sticky), footer, brand mark, scroll reset
    properties/    property card, filter browser, gallery + lightbox, carousel
    sections/      hero, who we are, featured, services, why choose, team, CTA, page hero
    ui/            button, field, dialog, reveal-on-scroll, section heading
  data/
    properties.ts  property records + selectors (price formatting, similar homes)
    site.ts        navigation, contact details, services, team, section copy
  lib/             class-name helper, filter/sort/URL-param logic
  pages/           one file per route
```

## Content and data

All copy and records live in `src/data`. Property records are deliberately flat and
database-ready — a string `id`, scalar search fields (price, beds, baths, type,
location) and an ordered image list — so `PROPERTIES` can later be replaced by an
API or database loader returning the same `Property` shape without touching a
single component.

## Interaction notes

- **Search/filter** state is stored in the URL, so results are shareable and the
  browser Back button behaves as expected (`/properties?type=Villa&price=over-5m`).
- **Saved properties** persist in `localStorage` (`horizon:favorites`).
- **Carousel** uses native scroll-snap: pointer dragging on desktop, swipe on
  touch, arrow buttons and keyboard scrolling, with click suppression after a drag.
- **Gallery** has thumbnail navigation and a full-screen viewer (arrow keys,
  Escape, focus returned to the trigger).
- **Forms** validate on submit, announce success through `role="status"`, and never
  leave the user on a dead end.
- Motion is gated behind `prefers-reduced-motion`, and every image carries
  `loading="lazy"` (except the hero) with intrinsic `width`/`height` to avoid shift.

## Accessibility

Semantic landmarks and headings, a skip link, labelled form fields with inline
errors, `aria-pressed` save buttons, `aria-live` result counts, keyboard-operable
carousel and gallery, visible focus rings and alt text on every meaningful image.
