import { Link } from "react-router-dom";
import { ArrowUpRight, Wrench, Ship, Search, Zap, Anchor, Layers } from "lucide-react";
import { motion } from "framer-motion";
import RevealSection from "@/components/RevealSection";
import { useLanguage } from "@/i18n/LanguageContext";
import { businesses, sectorGroups } from "@/data/businesses";

const BASE = "https://images.unsplash.com/";
const Q    = "?w=400&h=150&fit=crop&auto=format";

const businessImages: Record<string, string> = {
  // Ship Repair
  "tallinn-shipyard":            `${BASE}photo-1662727665591-f61fd470dd00${Q}`,
  "western-shiprepair":          `${BASE}photo-1663674673014-94aab93c83db${Q}`,
  "turku-repair-yard":           `${BASE}photo-1703226741497-6de4f67c6e11${Q}`,
  "blrt-rekato":                 `${BASE}photo-1757573538081-c469f75cdd7a${Q}`,
  // Shipbuilding
  "western-baltic-shipbuilding": `${BASE}photo-1663674673181-5903909424fc${Q}`,
  // Inspection & Testing
  "tehnomet-survey":             `${BASE}photo-1745448797901-2a4c9d9af1c1${Q}`,
  "western-central-laboratory":  `${BASE}photo-1646956141021-d687dcfe5fb9${Q}`,
  "elme-tks":                    `${BASE}photo-1620203853151-496c7228306c${Q}`,
  // Engineering
  "blrt-era":                    `${BASE}photo-1758101755915-462eddc23f57${Q}`,
  "bars-elekter":                `${BASE}photo-1503427315916-2ba435dee667${Q}`,
  "blrt-masinaehitus":           `${BASE}photo-1570207344214-c60ad57f3c00${Q}`,
  "marketex-marine":             `${BASE}photo-1519122295308-bdb40916b529${Q}`,
  "marketex-offshore":           `${BASE}photo-1722183704200-e96339975ba4${Q}`,
  "blrt-valukoda":               `${BASE}photo-1697281679321-a9ce55ce0a8f${Q}`,
  "moc":                         `${BASE}photo-1648555394313-494797ad48fc${Q}`,
  "western-tech-solutions":      `${BASE}photo-1545996403-9aeb66a8066f${Q}`,
  "western-baltic-engineering":  `${BASE}photo-1503387837-b154d5074bd2${Q}`,
  // Steel & Materials
  "elme-metall":                 `${BASE}photo-1763771420303-0f11ccf613d1${Q}`,
  "elme-messer-gaas":            `${BASE}photo-1510467181625-c419e443bdfa${Q}`,
  "elme-trans":                  `${BASE}photo-1501700493788-fa1a4fc9fe62${Q}`,
  "elme":                        `${BASE}photo-1745921204896-c2011440a4e2${Q}`,
  // Port & Marine Services
  "vene-balti-sadam":            `${BASE}photo-1544615661-a3d9fab31677${Q}`,
  "mereabi":                     `${BASE}photo-1592816653949-79d33f0e761d${Q}`,
  "western-ships-agency":        `${BASE}photo-1566449781267-88f21cc4af19${Q}`,
};

const sectorThemes: Record<string, {
  accentBg: string;
  accentText: string;
  nameHover: string;
  borderHover: string;
}> = {
  repair:      { accentBg: "bg-sky-500/12",     accentText: "text-sky-300",     nameHover: "group-hover:text-sky-400",     borderHover: "group-hover:border-sky-400/30"     },
  building:    { accentBg: "bg-slate-500/12",   accentText: "text-slate-300",   nameHover: "group-hover:text-slate-300",   borderHover: "group-hover:border-slate-400/30"   },
  inspection:  { accentBg: "bg-rose-500/12",    accentText: "text-rose-300",    nameHover: "group-hover:text-rose-400",    borderHover: "group-hover:border-rose-400/30"    },
  engineering: { accentBg: "bg-orange-500/12",  accentText: "text-orange-300",  nameHover: "group-hover:text-orange-400",  borderHover: "group-hover:border-orange-400/30"  },
  materials:   { accentBg: "bg-indigo-500/12",  accentText: "text-indigo-300",  nameHover: "group-hover:text-indigo-400",  borderHover: "group-hover:border-indigo-400/30"  },
  port:        { accentBg: "bg-cyan-500/12",    accentText: "text-cyan-300",    nameHover: "group-hover:text-cyan-400",    borderHover: "group-hover:border-cyan-400/30"    },
};

const sectorIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  repair:      Wrench,
  building:    Ship,
  inspection:  Search,
  engineering: Zap,
  materials:   Layers,
  port:        Anchor,
};

export default function Companies() {
  const { t } = useLanguage();

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544615661-a3d9fab31677?w=1400&q=75&auto=format&fit=crop"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.7) brightness(0.22)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-deep))] via-[hsl(218_68%_9%/0.85)] to-[hsl(218_68%_9%/0.55)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" aria-hidden />
        <div className="container-pro relative">
          <p className="hero-in hero-in-1 overline text-white/45 mb-5">{t("blrt.companiesLabel")}</p>
          <h1 className="hero-in hero-in-2 text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-white max-w-2xl">
            {t("blrt.companiesTitle")}
          </h1>
          <p className="hero-in hero-in-3 mt-4 text-base text-white/55 max-w-xl">
            {t("nav.companies")} — BLRT Grupp
          </p>
        </div>
      </section>

      {/* ─── Companies grid ─── */}
      <RevealSection as="section" className="py-24 bg-background">
        <div className="container-pro">
          {/* Sector quick-jump */}
          <div className="flex flex-wrap gap-2 mb-10">
            {sectorGroups.map((sector) => {
              const qTheme = sectorThemes[sector.id] ?? sectorThemes.inspection;
              const QIcon = sectorIcons[sector.id] ?? Anchor;
              return (
                <a
                  key={sector.id}
                  href={`#sector-${sector.id}`}
                  className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-lg transition-opacity duration-150 hover:opacity-75 ${qTheme.accentBg} ${qTheme.accentText}`}
                >
                  <QIcon className="w-3 h-3" />
                  {sector.label}
                </a>
              );
            })}
          </div>

          <div className="space-y-12">
            {sectorGroups.map((sector) => {
              const theme = sectorThemes[sector.id] ?? sectorThemes.inspection;
              const SectorIcon = sectorIcons[sector.id] ?? Anchor;
              const sectorBiz = sector.slugs
                .map((s) => businesses.find((b) => b.slug === s))
                .filter(Boolean);

              return (
                <div key={sector.id} id={`sector-${sector.id}`}>
                  <motion.div
                    className="flex items-center gap-3 mb-5"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-lg ${theme.accentBg} ${theme.accentText}`}
                      initial={{ opacity: 0, scale: 0.86 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <SectorIcon className="w-3 h-3" />
                      {sector.label}
                    </motion.span>
                    <span className="text-[10px] font-medium tabular-nums text-muted-foreground/70">
                      {sectorBiz.length}
                    </span>
                    <div className="flex-1 h-px bg-brand-red/35" />
                  </motion.div>

                  <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.07, delayChildren: 0 },
                      },
                    }}
                  >
                    {sectorBiz.map((biz) => biz && (
                      <motion.div
                        key={biz.slug}
                        variants={{
                          hidden: { opacity: 0, y: 18, scale: 0.97 },
                          visible: {
                            opacity: 1, y: 0, scale: 1,
                            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                          },
                        }}
                        className="group"
                      >
                        <Link
                          to={`/company/${biz.slug}`}
                          className={`flex flex-col overflow-hidden rounded-xl border border-border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-elevated hover:-translate-y-0.5 h-full ${theme.borderHover}`}
                        >
                          <div className="relative h-[72px] overflow-hidden flex-shrink-0 bg-[hsl(218_28%_12%)]">
                            <img
                              src={businessImages[biz.slug]}
                              alt=""
                              aria-hidden
                              className="absolute inset-0 w-full h-full object-cover"
                              style={{ filter: "saturate(1.1) brightness(0.38)" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(218_68%_8%/0.55)] to-transparent" />
                            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-white/5" />
                            <div className="absolute -top-5 -left-5 w-14 h-14 rounded-full bg-[hsl(218_68%_5%/0.25)]" />
                            <span className="absolute top-2 right-2.5 text-[9px] font-bold tracking-[0.14em] text-white/35 uppercase">
                              {biz.countries}
                            </span>
                            <div className="absolute bottom-2 left-3 w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center">
                              <SectorIcon className="w-3.5 h-3.5 text-muted-foreground" />
                            </div>
                          </div>

                          <div className="p-4 flex flex-col gap-1.5 flex-1 bg-card">
                            <div className="flex items-start justify-between gap-2">
                              <span className={`text-sm font-semibold text-primary transition-colors duration-200 leading-tight ${theme.nameHover}`}>
                                {biz.name}
                              </span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/35 group-hover:text-brand-red transition-colors duration-200 shrink-0 mt-0.5" />
                            </div>
                            <span className="text-xs text-muted-foreground leading-snug line-clamp-2">{biz.tagline}</span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>
    </>
  );
}
