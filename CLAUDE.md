# CLAUDE.md

Guidance for Claude Code in this repository.

## What this project is

Corporate website for **BLRT Grupp**, an Estonian industrial conglomerate (shipbuilding, ship repair, engineering, steel, port services) with 50+ subsidiary companies across the Baltics. The deliverable is defined in [PROCUREMENT.md](PROCUREMENT.md) — read it before scope decisions; it is the source of truth for required features (content blocks, plugin compatibility, languages).

**Tehnomet Survey is one subsidiary page** (`/company/tehnomet-survey`), not a standalone site. The repo began as a Tehnomet-only site; the leftovers were purged in July 2026. Don't reintroduce Tehnomet marine-inspection copy as group-wide content — the group-level Activities and Contacts pages still carry inspection-flavoured wording, so treat those as Tehnomet-scoped until rewritten.

## Two parallel tracks — know which one you're on

1. **`main` — React prototype.** React 18 + Vite + TypeScript, TailwindCSS v3, shadcn/ui, Framer Motion, React Router v6. **Vercel auto-deploys every push to `main` via GitHub.**
2. **`demo-no-acf` — WordPress conversion.** Native PHP theme in [wordpress-theme/](wordpress-theme/), hand-converted from the React prototype. No build step. Must stay **WPML- and ACF PRO-compatible** while also rendering fully with zero plugins installed (the "no-ACF demo mode").

### Branch rules

- **Never commit directly to `main`.** React-site work goes on a feature branch → PR into `main`. Remember: merging to `main` deploys to production immediately.
- WordPress theme work (`wordpress-theme/**`) belongs on `demo-no-acf`.
- **Run `git branch --show-current` before every commit** and confirm the change belongs there.

## Commands

```bash
npm run dev      # dev server at http://localhost:8080
npm run build    # production build → dist/  (run before claiming any React change done)
npm run lint     # ESLint
npm test         # vitest run   (single file: npm test -- src/test/example.test.ts)
```

npm is the package manager (`package-lock.json` is the only lockfile; bun is not installed on the dev machine).

## Hard rules

- **Escape all PHP output.** Every echoed value goes through `esc_html()`, `esc_attr()`, or `esc_url()` — see [block-block_hero.php](wordpress-theme/template-parts/block-block_hero.php) for the pattern. No bare `echo $var`.
- **Wrap every fixed UI string for WPML** with the `blrt` text domain: `esc_html_e( 'First name', 'blrt' )`, `__( 'Get in Touch', 'blrt' )`. Editor-entered ACF content is not wrapped; hardcoded labels always are.
- **Never fabricate company facts** — stats, founding years, dock dimensions, certifications, tonnage. This data was painstakingly verified against the companies' live sites (see CONTENT_AUDIT.md and commits like `a06b3e0` removing an invented 265 m dock). If a fact is missing, leave it out or ask.
- **No emojis in UI** — neither React components nor PHP templates.
- **Verify before claiming done:** `bun build` must pass for React changes; for PHP run `php -l` on changed files if PHP is available locally, otherwise say the syntax check was not run.

## React conventions (observed in this codebase)

- Import internal modules via the `@/` alias (`@/components/SiteHeader`, `@/data/businesses`) — see [src/App.tsx](src/App.tsx).
- Pages are PascalCase default-export components in [src/pages/](src/pages/); shared components in [src/components/](src/components/); routes are declared only in `App.tsx`. `SiteLayout` (header + `<main>` + footer) wraps all routes.
- **Static content lives in [src/data/](src/data/)**, not in components. [businesses.ts](src/data/businesses.ts) (~1750 lines) drives the header megamenu, `/company/:slug` (`BusinessPage`), and `/company/:slug/services/:serviceSlug` (`ServicePage`). To add a company: add a `Business` entry + its slug to a `sectorGroup` in the same file.
- Service icons are a string union (`ServiceIcon`) mapped to lucide-react components in [src/lib/serviceIcons.tsx](src/lib/serviceIcons.tsx). New icon = extend the union in `businesses.ts`, the map in `serviceIcons.tsx`, **and** the matching inline SVG in `blrt_icon()` in `functions.php`.
- i18n: flat `Record<key, { EN, RU, ET }>` in [translations.ts](src/i18n/translations.ts), consumed via `const { t, lang, setLang } = useLanguage()`. The `Lang` type also lists LT/LV/FI/PL (procurement requires them), but only EN/RU/ET have strings — `t()` falls back to EN.
- Use `cn()` from `@/lib/utils` for conditional classNames. Use `container-pro` for section width/padding. Wrap new page sections in `<RevealSection>` (scroll fade-in). Design tokens are CSS custom properties in [src/index.css](src/index.css), mapped in [tailwind.config.ts](tailwind.config.ts); primary navy `--primary: 218 58% 20%`, accent `--brand-red`; font Outfit.
- [src/components/ui/](src/components/ui/) is shadcn-generated — never hand-edit.

## WordPress theme conventions (observed)

- Pages render ACF **Flexible Content** (`content_blocks`); each layout `block_<name>` dispatches to `template-parts/block-block_<name>.php` via `get_template_part( 'template-parts/block', $block['acf_fc_layout'], [ 'block' => $block ] )` — see [front-page.php](wordpress-theme/front-page.php) / [page.php](wordpress-theme/page.php). New block = ACF layout in `functions.php` §5 + matching template part.
- Template parts read fields from `$args['block']` with `??` defaults at the top of the file (see any `template-parts/block-*.php`).
- **Never call `get_field()` bare in templates.** Use `blrt_option()` (options page) and `blrt_field()` (post fields) from [functions.php](wordpress-theme/functions.php) — they fall back to `blrt_defaults()` / passed defaults when ACF is absent. This is what makes the zero-plugin demo work; a bare `get_field()` call breaks it.
- Everything registers in the single `functions.php` (CPTs `project`/`job`, ACF field groups, options pages, AJAX contact handler, `blrt_icon()`). Styles/JS live in [wordpress-theme/assets/](wordpress-theme/assets/) (`theme.css` mirrors the React design tokens; `theme.js` handles reveal animations, counters, menus).

## Do not touch without asking

- **Scroll/overflow setup**: `overflow-x-hidden` on the `SiteLayout` wrapper and the deliberate *absence* of `overflow-x` on `html`/`body` in `index.css`. Commit `46547ab` fixed a bug where body overflow silently killed scrolling — the CSS comment there explains it. Do not "clean up" either side.
- **[vercel.json](vercel.json)** — the SPA rewrite is what makes deep links work on Vercel.
- **`resolve.dedupe` in [vite.config.ts](vite.config.ts)** — prevents duplicate React instances.
- **The `blrt_option()` / `blrt_field()` / `blrt_defaults()` fallback contract** in `functions.php`.
- Factual content in `businesses.ts` (verified, see Hard rules) and the company lists duplicated in `blrt_defaults()`.
- `src/components/ui/` (generated) and `package-lock.json` (regenerate via npm, never hand-edit).

## Known pitfalls

- **Import path casing breaks Vercel builds.** Dev machine is Windows (case-insensitive); Vercel builds on Linux. Asset filenames are inconsistently cased (`BLRT-LOGO.png` vs `logo-symbol.png`) — an import that works locally can fail in CI. Match filename casing exactly.
- The React company data (`businesses.ts` sectorGroups) and the PHP `blrt_defaults()` sector list are **manually kept in sync** — changing one without the other silently forks the two demos.
- Dead code was purged in July 2026 (unrouted pages, unused components, 65 unused translation keys, tracked tooling artifacts). Before adding a translation key or component, check whether an equivalent live one already exists — and delete anything your own change orphans.
- `.playwright-mcp/`, `.superpowers/`, `.design-sync/` etc. are gitignored tooling output — never commit them.
