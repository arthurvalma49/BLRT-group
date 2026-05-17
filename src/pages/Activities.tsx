import { useState } from "react";
import {
  Waves, Magnet, Droplets, Eye, Zap, CircuitBoard,
  Ruler, AlertTriangle, FileText, Anchor,
  Clock, ShieldCheck, BadgeCheck, ChevronDown,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { TranslationKey } from "@/i18n/translations";
import RevealSection from "@/components/RevealSection";

function ExpandableCard({
  icon: Icon,
  abbr,
  title,
  desc,
  fullText,
}: {
  icon: React.ElementType;
  abbr: string;
  title: string;
  desc: string;
  fullText?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="group bg-card border border-border rounded-xl p-6 hover:border-brand-red/30 hover:shadow-[var(--shadow-card)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <div className="w-10 h-10 rounded-lg bg-primary/5 group-hover:bg-brand-red/8 flex items-center justify-center transition-colors duration-300">
          <Icon className="w-5 h-5 text-brand-red" />
        </div>
        <span className="text-[10px] font-bold tracking-[0.2em] text-brand-red bg-brand-red/8 px-2.5 py-1 rounded">
          {abbr}
        </span>
      </div>
      <h3 className="text-base font-semibold tracking-tight mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>

      {fullText && (
        <>
          <div
            className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              expanded ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            {fullText.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-2 last:mb-0">
                {para}
              </p>
            ))}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red hover:text-brand-red/75 transition-colors self-start min-h-[44px] -ml-1 px-1"
            aria-expanded={expanded}
          >
            {expanded ? t("activities.readLess") : t("activities.readMore")}
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </>
      )}
    </div>
  );
}

export default function Activities() {
  const { t } = useLanguage();

  const tabs = [
    {
      id: "ndt" as const,
      label: t("activities.ndt.label"),
      intro: t("activities.ndt.intro"),
      methods: [
        { icon: Waves,       abbr: "UT",  title: t("activities.ut.title"), desc: t("activities.ut.desc"), fullText: t("activities.ut.full" as TranslationKey) },
        { icon: Magnet,      abbr: "MT",  title: t("activities.mt.title"), desc: t("activities.mt.desc"), fullText: t("activities.mt.full" as TranslationKey) },
        { icon: Droplets,    abbr: "PT",  title: t("activities.pt.title"), desc: t("activities.pt.desc"), fullText: t("activities.pt.full" as TranslationKey) },
        { icon: Eye,         abbr: "VT",  title: t("activities.vt.title"), desc: t("activities.vt.desc"), fullText: t("activities.vt.full" as TranslationKey) },
        { icon: Zap,         abbr: "RT",  title: t("activities.rt.title"), desc: t("activities.rt.desc"), fullText: t("activities.rt.full" as TranslationKey) },
        { icon: CircuitBoard, abbr: "ET", title: t("activities.et.title"), desc: t("activities.et.desc"), fullText: t("activities.et.full" as TranslationKey) },
      ],
    },
    {
      id: "utm" as const,
      label: t("activities.utm.label"),
      intro: t("activities.utm.intro"),
      methods: [
        { icon: Ruler,         abbr: "UTM", title: t("activities.utm.utmTitle" as TranslationKey),    desc: t("activities.utm.utmDesc" as TranslationKey),    fullText: t("activities.utm.utmFull" as TranslationKey) },
        { icon: FileText,      abbr: "RSC", title: t("activities.utm.repairTitle"),                   desc: t("activities.utm.repairDesc" as TranslationKey), fullText: t("activities.utm.repairFull" as TranslationKey) },
        { icon: AlertTriangle, abbr: "PCD", title: t("activities.utm.pittingTitle" as TranslationKey), desc: t("activities.utm.pittingDesc" as TranslationKey), fullText: t("activities.utm.pittingFull" as TranslationKey) },
        { icon: Anchor,        abbr: "ACC", title: t("activities.utm.anchorTitle" as TranslationKey),  desc: t("activities.utm.anchorDesc" as TranslationKey), fullText: t("activities.utm.anchorFull" as TranslationKey) },
      ],
    },
  ];

  const whyMob   = { title: t("activities.why.mobilisation"),   desc: t("activities.why.mobilisationDesc") };
  const whyClass = { title: t("activities.why.classSocieties"), desc: t("activities.why.classSocietiesDesc") };
  const whyCert  = { title: t("activities.why.certified"),      desc: t("activities.why.certifiedDesc") };

  const [active, setActive] = useState<"ndt" | "utm">("ndt");
  const tab = tabs.find((tb) => tb.id === active)!;

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-[hsl(var(--primary-deep))] text-white py-24 overflow-hidden relative">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden />
        <div className="container-pro relative">
          <p className="hero-in hero-in-1 overline text-white/45 mb-5">{t("activities.label")}</p>
          <h1 className="hero-in hero-in-2 text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-white max-w-2xl">
            {t("activities.heroTitle")}
          </h1>
        </div>
      </section>

      {/* ─── Methods ─── */}
      <RevealSection as="section" className="py-20 bg-background">
        <div className="container-pro">
          {/* border-bottom tab selector */}
          <div className="border-b border-border flex gap-8 mb-12">
            {tabs.map((tb) => (
              <button
                key={tb.id}
                onClick={() => setActive(tb.id)}
                className={`pb-4 text-sm font-semibold border-b-2 -mb-px transition-colors duration-200 min-h-[44px] ${
                  active === tb.id
                    ? "border-brand-red text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tb.label}
              </button>
            ))}
          </div>

          <div key={tab.id} className="animate-fade-in">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl lg:text-3xl tracking-tighter heading-underline mb-4">
                {tab.label}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base max-w-[65ch]">
                {tab.intro}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tab.methods.map((m) => (
                <ExpandableCard
                  key={m.abbr}
                  icon={m.icon}
                  abbr={m.abbr}
                  title={m.title}
                  desc={m.desc}
                  fullText={m.fullText}
                />
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ─── Why choose us — asymmetric 2-col ─── */}
      <RevealSection as="section" className="py-24 bg-surface">
        <div className="container-pro">
          <div className="mb-12">
            <p className="overline mb-3">{t("activities.whyLabel")}</p>
            <h2 className="text-3xl tracking-tighter">{t("activities.whyTitle")}</h2>
          </div>

          <div className="grid md:grid-cols-[1.4fr_1fr] gap-4">
            {/* Mobilisation — featured, spans 2 rows */}
            <div className="bg-card border border-border rounded-xl p-10 flex flex-col md:row-span-2">
              <div className="w-12 h-12 rounded-xl bg-brand-red/8 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-3">{whyMob.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">{whyMob.desc}</p>
              <div className="mt-auto pt-8 border-t border-border">
                <div className="text-4xl font-bold tracking-tighter text-primary leading-none mb-1">24h</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Mobilisation window
                </div>
              </div>
            </div>

            {/* Class Societies */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-10 h-10 rounded-lg bg-brand-red/8 flex items-center justify-center mb-5">
                <BadgeCheck className="w-5 h-5 text-brand-red" />
              </div>
              <h3 className="text-base font-semibold tracking-tight mb-2">{whyClass.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{whyClass.desc}</p>
            </div>

            {/* Certified */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-10 h-10 rounded-lg bg-brand-red/8 flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5 text-brand-red" />
              </div>
              <h3 className="text-base font-semibold tracking-tight mb-2">{whyCert.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{whyCert.desc}</p>
            </div>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
