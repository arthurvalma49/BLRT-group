# Design Sync Notes — BLRT Group Website

## Setup facts
- This is a website (not a library): no library dist, synth-entry mode from `src/components`.
- Desired components: ProductCard, NewsCard, ProjectCard, JobCard, CertificateBlock, ImageGallery, VideoBlock, TechDataTable, MagneticButton, RevealSection, ClassSocietiesStrip, SiteHeader, SiteFooter, NavLink.
- Excluded: ScrollToTop (utility), SiteLayout (layout wrapper), all shadcn/ui components in src/components/ui/.
- Provider: DesignProviders (src/providers/DesignProviders.tsx) chains LanguageProvider + MemoryRouter.
  - LanguageProvider needed by: ClassSocietiesStrip, TechDataTable, NewsCard, ProjectCard, JobCard, SiteFooter.
  - MemoryRouter needed by: NewsCard (Link), NavLink, SiteFooter (Link), SiteHeader (NavLink/Link).
- Font: Outfit is served by Google Fonts at runtime — runtimeFontPrefixes set, no font file to ship.
- CSS: Tailwind v3 — must compile src/index.css via tailwindcss CLI before the converter runs.
  - buildCmd produces .design-sync/.cache/compiled.css from src/index.css.
- tsconfig: tsconfig.app.json (has paths @/* -> src/*, jsx: react-jsx).

## Known render warns (legitimate — do not chase)
- [TOKENS_MISSING] --radix-navigation-menu-viewport-height, --radix-select-trigger-height, --radix-select-trigger-width: Set by Radix UI primitives at runtime via JavaScript — expected absent in static CSS. SiteHeader uses NavigationMenu which triggers these.
- [TOKENS_MISSING] --sidebar-width, --sidebar-border, --skeleton-width: From shadcn/ui component CSS in src/components/ui/ (compiled into Tailwind CSS because content glob scans all src/). Our bundle doesn't include those shadcn/ui components — these vars are simply unused.
- [TOKENS_MISSING] --color-border, --color-bg: Likely from ClassSocietiesStrip or SiteHeader/Footer using Radix overlay vars. Non-blocking — renders verified clean.

## Entry setup
- Use --entry ./src/ds-entry.ts (barrel file) so the converter resolves PKG_DIR to project root and reads the real package.json. Without --entry, PKG_DIR = node_modules/BLRT-group-website (doesn't exist) → crash.
- buildCmd only compiles CSS. The JS entry is always passed via --entry CLI flag.

## Re-sync risks
- Compiled CSS (.design-sync/.cache/compiled.css) is gitignored; must re-run buildCmd on fresh clone.
- DesignProviders.tsx is committed in src/providers/ — keep in sync with LanguageProvider signature.
- If new components are added to src/components/ (non-ui), add them to componentSrcMap.
- If shadcn/ui adds new components, the scanner may pick them up — add null entries.
- SiteHeader and SiteFooter import image assets (@/assets/logo-symbol.png etc.) — if assets move, previews break.
