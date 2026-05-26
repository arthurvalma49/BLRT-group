# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # start dev server
bun build        # production build (outputs to dist/)
bun build:dev    # dev-mode production build
bun lint         # ESLint
bun test         # run tests once (vitest)
bun test:watch   # vitest in watch mode
bun preview      # preview production build locally
```

Run a single test file: `bun test src/test/example.test.ts`

## Architecture

**Stack:** React 18 + Vite + TypeScript, TailwindCSS v3, shadcn/ui (Radix primitives), Framer Motion, React Router v6, TanStack Query.

**Path alias:** `@/` maps to `src/` — use it for all internal imports.

**App shell** ([src/App.tsx](src/App.tsx)): `LanguageProvider` → `BrowserRouter` → `SiteLayout` wraps all routes. `SiteLayout` renders `SiteHeader` + `<main>` + `SiteFooter`.

**Routing** (defined in `App.tsx`):
- `/` → `Home`
- `/about`, `/activities`, `/contacts`, `/our-values` → corresponding page components
- `/company/:slug` → `BusinessPage` — driven by the `businesses` array in [src/data/businesses.ts](src/data/businesses.ts)
- `/group` redirects to `/`
- `GlobalReach.tsx` exists in `src/pages/` but is **not routed** — treat as unused/in-progress.

**i18n** ([src/i18n/](src/i18n/)): Three languages — `EN`, `RU`, `ET`. All strings live in [src/i18n/translations.ts](src/i18n/translations.ts) as a flat `Record<key, { EN, RU, ET }>`. Consume with the `useLanguage()` hook: `const { t, lang, setLang } = useLanguage()`. Adding a new translatable string means adding a key to `translations.ts` and using `t("your.key")` in components.

**Business data** ([src/data/businesses.ts](src/data/businesses.ts)): Static array of `Business` objects (slug, name, sector, services, contact info, etc.) and `sectorGroups` that organise slugs into nav categories. The header megamenu and `BusinessPage` both read from this file. To add a BLRT Group company, add a `Business` entry and reference its slug in the appropriate `sectorGroup`.

**Utility:** `cn(...classes)` from `@/lib/utils` — combines `clsx` + `tailwind-merge`. Use it everywhere for conditional className strings.

**Custom components:**
- `RevealSection` — scroll-triggered fade-in via `IntersectionObserver`; adds `visible` class from CSS. Use `as` prop to change the rendered element. Accepts `delay` prop: `"delay-100" | "delay-200" | "delay-300"`.
- `MagneticButton` — cursor-tracking magnetic hover effect via Framer Motion.
- `ClassSocietiesStrip` — marquee strip of classification society logos.
- `ScrollToTop` — resets scroll position on route change; already mounted in `App.tsx`.

**Assets** ([src/assets/](src/assets/)): logo variants (`logo.png`, `logo-white.png`, `logo-symbol.png`, `logo-navy.png`, etc.) and hero images. Import directly — Vite handles bundling.

**shadcn/ui components** are in [src/components/ui/](src/components/ui/) — these are generated files, do not edit them directly; re-generate via the shadcn CLI if updates are needed.

## Styling conventions

- Primary color is navy (`--primary: 218 58% 20%`); accent is `--brand-red: 4 68% 36%`.
- Font: `Outfit` (sans-serif).
- Use `container-pro` utility class for consistent horizontal padding/max-width on page sections.
- `reveal` + `visible` CSS classes (defined in `index.css`) drive scroll animations — always wrap new content sections in `<RevealSection>`.
- Design tokens (gradients, shadows, colors) are CSS custom properties defined in [src/index.css](src/index.css) and mapped to Tailwind in [tailwind.config.ts](tailwind.config.ts).
