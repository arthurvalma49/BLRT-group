# BLRT Group — Design System Conventions

## Design tokens

| Token | Value | Usage |
|---|---|---|
| `--primary` | `hsl(218 58% 20%)` | Navy — primary brand colour, buttons, headings |
| `--brand-red` | `hsl(4 68% 36%)` | Accent red — icons, badges, play buttons, active states |
| `--background` | dark near-black | Card and section backgrounds |
| `--foreground` | near-white | Body text on dark backgrounds |
| `--muted-foreground` | muted grey | Secondary text, metadata, captions |

Defined as CSS custom properties in `src/index.css` and mapped to Tailwind via `tailwind.config.ts`.

## Typography

- **Font family:** Outfit (Google Fonts, loaded at runtime — not bundled)
- Headings: `font-semibold` or `font-bold`, navy or white
- Body: `font-normal`, `text-sm` / `text-base`
- Metadata / labels: `text-xs text-muted-foreground`

## Layout utilities

- `container-pro` — standard horizontal padding + `max-w-7xl` for all page sections
- Cards use `rounded-xl` corners and `bg-card` (dark) backgrounds
- Spacing: `gap-4` between grid items, `p-6` internal card padding

## Providers

All components require two providers, combined in `DesignProviders`:

```tsx
import { DesignProviders } from 'BLRT-group-website'

<DesignProviders>
  <YourComponent />
</DesignProviders>
```

`DesignProviders` wraps `LanguageProvider` (i18n) + `MemoryRouter` (React Router context). Components that render `<Link>` or `useNavigate` will crash without the router; components that call `useLanguage()` will crash without the language context.

## Multilingual fields

Many data objects carry `{ EN: string; RU: string; ET: string }` shapes — the active language is resolved by `useLanguage()` at render time. Always pass all three keys when constructing preview data:

```ts
const title = { EN: 'Marine Engineer', RU: 'Морской инженер', ET: 'Meretehnik' }
```

The `loc(s: string)` helper (defined in preview files) fills all keys with the same string for quick dev stubs.

## Component categories

### Cards (dark background, rounded)
- `ProductCard` — title + optional image + description
- `NewsCard` — image + category badge + date + excerpt
- `ProjectCard` — image + sector tag + year + tags strip; `variant="featured"` for wide layout
- `JobCard` — collapsible accordion with location, type, requirements
- `CertificateBlock` — horizontal strip of certification badges with red icon + name + issuer + year

### Display blocks
- `ImageGallery` — responsive grid of images (lightbox-ready)
- `VideoBlock` — dark embed frame with red play button; optional `caption` prop
- `TechDataTable` — two-column spec table, bold labels left, values right

### Layout / chrome
- `SiteHeader` — sticky nav with megamenu (reads from `businesses.ts`)
- `SiteFooter` — multi-column footer with links and contact
- `RevealSection` — scroll-triggered fade-in wrapper; use `delay` prop for stagger
- `MagneticButton` — Framer Motion magnetic hover; wraps any clickable element
- `ClassSocietiesStrip` — auto-scrolling logo marquee

## Re-sync

Run from the project root whenever source components change:

```bash
# 1. Recompile CSS if Tailwind classes changed
./node_modules/.bin/tailwindcss -c tailwind.config.ts -i src/index.css -o .design-sync/.cache/compiled.css

# 2. Rebuild the bundle
node .ds-sync/package-build.mjs \
  --config .design-sync/config.json \
  --node-modules ./node_modules \
  --entry ./src/ds-entry.ts \
  --out ./ds-bundle

# 3. Capture changed components and grade
node .ds-sync/package-capture.mjs --out ./ds-bundle

# 4. Push via DesignSync tool (finalize_plan → write_files)
```

See `.design-sync/NOTES.md` for known caveats (TOKENS_MISSING warning, `--entry` flag requirement).
