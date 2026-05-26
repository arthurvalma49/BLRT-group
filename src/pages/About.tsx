import { Link } from "react-router-dom";
import { Anchor, Wrench, Search, Zap, Layers, Ship, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import RevealSection from "@/components/RevealSection";

const sectors = [
  { icon: Anchor,  label: "Ship Repair",             desc: "Three repair yards across Estonia, Lithuania and Finland." },
  { icon: Ship,    label: "Shipbuilding",             desc: "Large-block construction and LNG ferry newbuilding." },
  { icon: Search,  label: "Inspection & Testing",     desc: "Marine NDT, UTM and certified laboratory services." },
  { icon: Zap,     label: "Engineering",              desc: "Marine electrical, machine building and offshore structures." },
  { icon: Layers,  label: "Steel & Materials",        desc: "Rolled steel distribution, galvanizing and industrial gases." },
  { icon: Wrench,  label: "Port & Marine Services",   desc: "Port operations, towage and life-saving equipment service." },
];

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { v: "17",    l: t("blrt.about.stat.companies") },
    { v: "5",     l: t("blrt.about.stat.countries") },
    { v: "1912",  l: t("blrt.about.stat.founded") },
    { v: "6",     l: t("blrt.about.stat.sectors") },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-[hsl(var(--primary-deep))] text-white py-24 overflow-hidden relative">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden />
        <div className="container-pro relative">
          <p className="hero-in hero-in-1 overline text-white/45 mb-5">{t("blrt.about.label")}</p>
          <h1 className="hero-in hero-in-2 text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-white max-w-2xl">
            {t("blrt.about.heroTitle")}
          </h1>
        </div>
      </section>

      {/* ─── Story ─── */}
      <RevealSection as="section" className="py-24 bg-background">
        <div className="container-pro grid lg:grid-cols-[1fr_260px] gap-16">
          <div className="space-y-5">
            <h2 className="text-2xl lg:text-3xl tracking-tighter heading-underline">
              {t("blrt.about.ourStory")}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">
              {t("blrt.about.storyP1")}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">
              {t("blrt.about.storyP2")}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">
              {t("blrt.about.storyP3")}
            </p>
          </div>

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

      {/* ─── Sectors ─── */}
      <RevealSection as="section" className="py-24 bg-surface">
        <div className="container-pro">
          <p className="overline mb-3">Our Sectors</p>
          <h2 className="text-3xl tracking-tighter text-primary mb-12">Six areas of industrial expertise</h2>
          <div className="divide-y divide-border">
            {sectors.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="group flex items-center gap-6 lg:gap-10 py-6 rounded-lg transition-colors duration-200 hover:bg-background -mx-2 px-2"
                >
                  <div className="w-8 shrink-0 text-xl font-bold tabular-nums text-muted-foreground/25 group-hover:text-brand-red transition-colors duration-300 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-brand-red/8 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-red" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-primary mb-0.5">{s.label}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{s.desc}</div>
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
              {t("blrt.about.ctaTitle")}
            </h3>
            <p className="text-white/55 text-sm max-w-md">{t("blrt.about.ctaDesc")}</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/"
              className="btn-shine btn-tactile inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold px-6 py-3 rounded text-sm transition-all duration-300"
            >
              {t("blrt.about.ctaBrowse")}
            </Link>
            <Link
              to="/contacts"
              className="btn-shine btn-tactile inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-semibold px-6 py-3 rounded text-sm transition-colors whitespace-nowrap"
              style={{ boxShadow: "var(--shadow-red)" }}
            >
              {t("nav.contacts")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
