# BLRT Grupp Website

Corporate website for [BLRT Grupp](https://www.blrt.ee), an Estonian industrial holding group operating in shipbuilding, ship repair, port & marine services, metal structures, and engineering.

## Stack

- **React 18** + **TypeScript** + **Vite**
- **TailwindCSS v3** + **shadcn/ui** (Radix primitives)
- **Framer Motion** for animations
- **React Router v6** for client-side routing
- **TanStack Query** for server state
- **i18n**: Estonian, English, Russian (flat key-value translations in `src/i18n/translations.ts`)

## Getting started

```bash
bun install      # install dependencies
bun dev          # start dev server at http://localhost:8080
```

## Commands

```bash
bun dev          # dev server
bun build        # production build → dist/
bun build:dev    # dev-mode build
bun preview      # preview production build
bun lint         # ESLint
bun test         # run tests once (Vitest)
bun test:watch   # Vitest in watch mode
```

## Project structure

```
src/
  assets/          # logo variants, hero images
  components/      # shared components (SiteHeader, SiteFooter, RevealSection, …)
  components/ui/   # shadcn/ui generated components — do not edit directly
  data/            # static data (businesses.ts, projects.ts, news.ts, …)
  i18n/            # LanguageContext + translations
  lib/             # cn() utility
  pages/           # route-level page components
```

## Adding a company

1. Add a `Business` entry to `src/data/businesses.ts`
2. Add its slug to the appropriate `sectorGroup` in the same file
3. The megamenu and `/company/:slug` route pick it up automatically

## Adding translations

Add a key to `src/i18n/translations.ts` with `EN`, `RU`, and `ET` values, then use `t("your.key")` via the `useLanguage()` hook.
