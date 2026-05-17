import { useLanguage } from "@/i18n/LanguageContext";
import { Heart, Shield, Zap, TrendingUp } from "lucide-react";
import RevealSection from "@/components/RevealSection";

const values = [
  {
    icon: Heart,
    titleKey: "values.people.title" as const,
    subtitleKey: "values.people.subtitle" as const,
    items: [
      "values.people.1" as const,
      "values.people.2" as const,
      "values.people.3" as const,
      "values.people.4" as const,
    ],
  },
  {
    icon: Shield,
    titleKey: "values.reliability.title" as const,
    subtitleKey: "values.reliability.subtitle" as const,
    items: [
      "values.reliability.1" as const,
      "values.reliability.2" as const,
      "values.reliability.3" as const,
    ],
  },
  {
    icon: Zap,
    titleKey: "values.efficiency.title" as const,
    subtitleKey: "values.efficiency.subtitle" as const,
    items: [
      "values.efficiency.1" as const,
      "values.efficiency.2" as const,
      "values.efficiency.3" as const,
    ],
  },
  {
    icon: TrendingUp,
    titleKey: "values.development.title" as const,
    subtitleKey: "values.development.subtitle" as const,
    items: [
      "values.development.1" as const,
      "values.development.2" as const,
      "values.development.3" as const,
      "values.development.4" as const,
      "values.development.5" as const,
    ],
  },
];

export default function OurValues() {
  const { t } = useLanguage();
  const [people, reliability, efficiency, development] = values;
  const PeopleIcon = people.icon;
  const ReliabilityIcon = reliability.icon;
  const EfficiencyIcon = efficiency.icon;
  const DevelopmentIcon = development.icon;

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-[hsl(var(--primary-deep))] text-white py-24 overflow-hidden relative">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden />
        <div className="container-pro relative">
          <p className="hero-in hero-in-1 overline text-white/45 mb-5">{t("values.label")}</p>
          <h1 className="hero-in hero-in-2 text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-white max-w-2xl">
            {t("values.heroTitle")}
          </h1>
        </div>
      </section>

      {/* ─── Bento Values Grid ─── */}
      <RevealSection as="section" className="py-24 bg-background">
        <div className="container-pro">
          {/*
            gap-px bg-border creates 1px grid lines between cells.
            People spans 2 rows (desktop). Development spans 2 cols (desktop).
            No extra border-t on Efficiency — the gap handles it.
          */}
          <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {/* People — dark, spans 2 rows */}
            <div className="bg-primary text-white p-10 md:row-span-2">
              <div className="w-11 h-11 rounded-xl bg-white/12 flex items-center justify-center mb-6">
                <PeopleIcon className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white mb-1">
                {t(people.titleKey)}
              </h2>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/45 font-semibold mb-6">
                {t(people.subtitleKey)}
              </p>
              <ul className="space-y-3">
                {people.items.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-sm text-white/65">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/35 shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reliability */}
            <div className="bg-card p-8">
              <div className="w-10 h-10 rounded-lg bg-brand-red/8 flex items-center justify-center mb-5">
                <ReliabilityIcon className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="text-lg font-bold tracking-tight text-primary mb-1">
                {t(reliability.titleKey)}
              </h2>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-5">
                {t(reliability.subtitleKey)}
              </p>
              <ul className="space-y-2.5">
                {reliability.items.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-red shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Efficiency — no manual border-t; gap-px handles the separator */}
            <div className="bg-card p-8">
              <div className="w-10 h-10 rounded-lg bg-brand-red/8 flex items-center justify-center mb-5">
                <EfficiencyIcon className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="text-lg font-bold tracking-tight text-primary mb-1">
                {t(efficiency.titleKey)}
              </h2>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-5">
                {t(efficiency.subtitleKey)}
              </p>
              <ul className="space-y-2.5">
                {efficiency.items.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-red shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Development — full-width bottom */}
            <div className="bg-surface p-10 md:col-span-2">
              <div className="grid sm:grid-cols-[auto_1fr] gap-8 items-start">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-brand-red/8 flex items-center justify-center mb-5">
                    <DevelopmentIcon className="w-5 h-5 text-brand-red" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-primary mb-1">
                    {t(development.titleKey)}
                  </h2>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold whitespace-nowrap">
                    {t(development.subtitleKey)}
                  </p>
                </div>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2.5 pt-1">
                  {development.items.map((key) => (
                    <li key={key} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-red shrink-0" />
                      {t(key)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
