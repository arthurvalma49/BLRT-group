import { Link } from "react-router-dom";
import { Building2, Ship, Clock, Award, Globe2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import RevealSection from "@/components/RevealSection";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { v: "300+", l: t("about.stat.vessels") },
    { v: "24/7", l: t("about.stat.availability") },
    { v: "27",   l: t("about.stat.experience") },
    { v: t("about.stat.worldwide"), l: t("about.stat.coverage") },
  ];

  const features = [
    { icon: Ship,      label: t("about.card.shipyard") },
    { icon: Award,     label: t("about.card.industrial") },
    { icon: Globe2,    label: t("about.card.baltic") },
    { icon: Clock,     label: t("about.card.decades") },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-[hsl(var(--primary-deep))] text-white py-24 overflow-hidden relative">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden />
        <div className="container-pro relative">
          <p className="hero-in hero-in-1 overline text-white/45 mb-5">{t("about.label")}</p>
          <h1 className="hero-in hero-in-2 text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-white max-w-2xl">
            {t("about.heroTitle")}
          </h1>
        </div>
      </section>

      {/* ─── Story ─── */}
      <RevealSection as="section" className="py-24 bg-background">
        <div className="container-pro grid lg:grid-cols-[1fr_260px] gap-16">
          <div className="space-y-5">
            <h2 className="text-2xl lg:text-3xl tracking-tighter heading-underline">
              {t("about.ourStory")}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">
              {t("about.storyP1")}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">
              {t("about.storyP2")}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">
              {t("about.storyP3")}
            </p>
          </div>

          {/* Stats sidebar — divide-y, no boxed cards */}
          <aside className="divide-y divide-border">
            {stats.map((s) => (
              <div key={s.l} className="py-6 first:pt-0">
                <div className="text-4xl font-bold tracking-tighter text-primary leading-none mb-1.5">
                  {s.v}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{s.l}</div>
              </div>
            ))}
          </aside>
        </div>
      </RevealSection>

      {/* ─── BLRT Grupp ─── */}
      <RevealSection as="section" className="py-24 bg-surface">
        <div className="container-pro grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <Building2 className="w-4 h-4 text-brand-red" />
              <span className="overline">{t("about.parentLabel")}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl tracking-tighter heading-underline mb-7">
              {t("about.parentTitle")}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-[65ch]">
              {t("about.parentP1")}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">
              {t("about.parentP2")}
            </p>
          </div>

          {/* Feature list — no boxed cards */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:pt-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-brand-red/8 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-brand-red" />
                  </div>
                  <div className="text-sm font-semibold text-primary leading-snug mt-1.5">
                    {f.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── CTA ─── */}
      <RevealSection
        as="section"
        className="py-20 bg-[hsl(var(--primary-deep))] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden />
        <div className="container-pro relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
              {t("about.ctaTitle")}
            </h3>
            <p className="text-white/55 text-sm max-w-md">{t("about.ctaDesc")}</p>
          </div>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-semibold px-6 py-3 rounded text-sm btn-tactile transition-colors whitespace-nowrap shrink-0"
            style={{ boxShadow: "var(--shadow-red)" }}
          >
            {t("nav.requestSurvey")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </RevealSection>
    </>
  );
}
