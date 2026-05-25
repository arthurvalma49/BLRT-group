import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import RevealSection from "@/components/RevealSection";
import heroVessel from "@/assets/hero-vessel.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { businesses, sectorGroups } from "@/data/businesses";

const sectorAccents: Record<string, string> = {
  repair:     "bg-sky-500/10 text-sky-700",
  building:   "bg-indigo-500/10 text-indigo-700",
  inspection: "bg-brand-red/8 text-brand-red",
  engineering:"bg-amber-500/10 text-amber-700",
  materials:  "bg-emerald-500/10 text-emerald-700",
  port:       "bg-cyan-500/10 text-cyan-700",
};

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { value: "17",     label: t("blrt.stat.companies") },
    { value: "5",      label: t("blrt.stat.countries") },
    { value: "6",      label: t("blrt.stat.sectors") },
    { value: "1912",   label: t("blrt.stat.founded") },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[100dvh] bg-[hsl(var(--primary-deep))] text-white overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden />

        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[44%] pointer-events-none">
          <img
            src={heroVessel}
            alt="Baltic industrial shipyard"
            width={1920}
            height={1088}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-deep))] via-[hsl(218_68%_12%/0.7)] to-[hsl(218_68%_12%/0.05)]" />
        </div>

        <div className="container-pro relative min-h-[100dvh] flex items-center">
          <div className="w-full lg:w-[60%] py-24 lg:py-0">
            <div className="hero-in hero-in-1 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/12 bg-white/5 text-[10px] font-semibold uppercase tracking-[0.2em] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              {t("blrt.badge")}
            </div>

            <h1 className="hero-in hero-in-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-none text-white mb-6">
              {t("blrt.heroTitle1")}
              <br />
              <span className="text-brand-red">{t("blrt.heroTitle2")}</span>
            </h1>

            <p className="hero-in hero-in-3 text-base text-white/60 max-w-[50ch] mb-10 leading-relaxed font-normal">
              {t("blrt.heroDesc")}
            </p>

            <div className="hero-in hero-in-4 flex flex-wrap gap-3">
              <MagneticButton>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-semibold px-6 py-3 rounded text-sm btn-tactile transition-colors"
                  style={{ boxShadow: "var(--shadow-red)" }}
                >
                  {t("blrt.learnMore")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
              <Link
                to="/contacts"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold px-6 py-3 rounded text-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                {t("blrt.contactUs")}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center" aria-hidden>
          <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent animate-float" />
        </div>
      </section>

      {/* ─── Stats ─── */}
      <RevealSection as="section" className="bg-background border-b border-border">
        <div className="container-pro">
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
            {stats.map((s, i) => (
              <div
                key={i}
                className="py-10 px-6 lg:px-8 flex flex-col gap-1.5 border-b border-r border-border"
              >
                <div className="text-4xl lg:text-5xl font-bold tracking-tighter text-primary leading-none">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── Companies ─── */}
      <RevealSection as="section" className="py-24 bg-background">
        <div className="container-pro">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="overline mb-3">{t("blrt.companiesLabel")}</p>
              <h2 className="text-3xl tracking-tighter text-primary">{t("blrt.companiesTitle")}</h2>
            </div>
          </div>

          <div className="space-y-12">
            {sectorGroups.map((sector) => {
              const sectorBiz = sector.slugs
                .map((s) => businesses.find((b) => b.slug === s))
                .filter(Boolean);
              const accentClass = sectorAccents[sector.id] ?? "bg-brand-red/8 text-brand-red";

              return (
                <div key={sector.id}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded ${accentClass}`}>
                      {sector.label}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {sectorBiz.map((biz) => biz && (
                      <Link
                        key={biz.slug}
                        to={`/company/${biz.slug}`}
                        className="group flex flex-col gap-1.5 p-4 border border-border rounded-xl hover:border-brand-red/30 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-primary group-hover:text-brand-red transition-colors duration-200 leading-tight">
                            {biz.name}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-border group-hover:text-brand-red transition-colors duration-200 shrink-0" />
                        </div>
                        <span className="text-xs text-muted-foreground">{biz.countries}</span>
                        <span className="text-xs text-muted-foreground leading-snug line-clamp-2">{biz.tagline}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── About preview ─── */}
      <RevealSection as="section" className="py-24 bg-surface">
        <div className="container-pro grid lg:grid-cols-[1.15fr_1fr] gap-16 items-start">
          <div className="lg:pt-4">
            <p className="overline mb-4">{t("blrt.aboutLabel")}</p>
            <h2 className="text-3xl lg:text-4xl mb-7 tracking-tighter heading-underline">
              {t("blrt.aboutTitle")}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-[65ch]">
              {t("blrt.aboutP1")}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-[65ch]">
              {t("blrt.aboutP2")}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-brand-red text-brand-red font-semibold px-5 py-2.5 rounded text-sm hover:bg-brand-red hover:text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] btn-tactile"
            >
              {t("blrt.learnMore")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Key facts */}
          <div className="lg:pt-4 divide-y divide-border">
            {[
              { label: "Headquarters", value: "Kopli, Tallinn, Estonia" },
              { label: "Founded", value: "1912" },
              { label: "Companies", value: "17 across 6 sectors" },
              { label: "Markets", value: "EE · LV · LT · FI · NO" },
            ].map((fact) => (
              <div key={fact.label} className="py-4 flex items-baseline justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground shrink-0">{fact.label}</span>
                <span className="text-sm font-semibold text-primary text-right">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </>
  );
}
