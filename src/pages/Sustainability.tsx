import { Leaf, Wind, Droplets, Flame, Zap, Building2, RefreshCw, Filter, Plug } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import RevealSection from "@/components/RevealSection";
import CertificateBlock from "@/components/CertificateBlock";
import type { Certificate } from "@/components/CertificateBlock";

const groupCertificates: Certificate[] = [
  { name: "ISO 9001:2015",    issuer: "Lloyd's Register",        year: 2025 },
  { name: "ISO 14001:2015",   issuer: "Lloyd's Register",        year: 2024 },
  { name: "ISO 45001:2018",   issuer: "Lloyd's Register",        year: 2024 },
  { name: "Lloyd's Register", issuer: "Class Society Acceptance"             },
  { name: "DNV",              issuer: "Class Society Acceptance"             },
  { name: "Bureau Veritas",   issuer: "Class Society Acceptance"             },
  { name: "ABS",              issuer: "Class Society Acceptance"             },
];

const pillars = [
  {
    icon: Leaf,
    titleKey: "sustainability.pillar.environment",
    heading: "sustainability.env.title",
    desc: "sustainability.env.desc",
    stat: "100%",
    statLabel: "emission-free blasting chambers",
  },
  {
    icon: Wind,
    titleKey: "sustainability.pillar.people",
    heading: "sustainability.people.title",
    desc: "sustainability.people.desc",
    stat: "World's 1st",
    statLabel: "rotor sail passenger vessel globally",
  },
  {
    icon: Droplets,
    titleKey: "sustainability.pillar.community",
    heading: "sustainability.community.title",
    desc: "sustainability.community.desc",
    stat: "Zero",
    statLabel: "discharge policy in dock operations",
  },
];

const yardInitiatives = [
  { icon: Flame,      titleKey: "sustainability.yard.blasting.title", descKey: "sustainability.yard.blasting.desc" },
  { icon: Building2,  titleKey: "sustainability.yard.sheds.title",    descKey: "sustainability.yard.sheds.desc"    },
  { icon: Zap,        titleKey: "sustainability.yard.energy.title",   descKey: "sustainability.yard.energy.desc"   },
  { icon: Droplets,   titleKey: "sustainability.yard.water.title",    descKey: "sustainability.yard.water.desc"    },
  { icon: RefreshCw,  titleKey: "sustainability.yard.waste.title",    descKey: "sustainability.yard.waste.desc"    },
  { icon: Wind,       titleKey: "sustainability.yard.wind.title",     descKey: "sustainability.yard.wind.desc"     },
] as const;

const solutions = [
  { icon: Filter,   titleKey: "sustainability.sol.scrubber.title", descKey: "sustainability.sol.scrubber.desc" },
  { icon: Plug,     titleKey: "sustainability.sol.shore.title",    descKey: "sustainability.sol.shore.desc"    },
  { icon: Droplets, titleKey: "sustainability.sol.bwts.title",     descKey: "sustainability.sol.bwts.desc"     },
  { icon: Wind,     titleKey: "sustainability.sol.rotor.title",    descKey: "sustainability.sol.rotor.desc"    },
  { icon: Leaf,     titleKey: "sustainability.sol.decarb.title",   descKey: "sustainability.sol.decarb.desc"   },
] as const;

export default function Sustainability() {
  const { t } = useLanguage();

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1400&q=75&auto=format&fit=crop"
            alt=""
            aria-hidden
            fetchpriority="high"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.5) brightness(0.25)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-deep))] via-[hsl(218_68%_9%/0.85)] to-[hsl(218_68%_9%/0.55)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" aria-hidden />
        <div className="container-pro relative">
          <p className="hero-in hero-in-1 overline text-white/45 mb-5">{t("nav.sustainability")}</p>
          <h1 className="hero-in hero-in-2 text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-white max-w-2xl">
            {t("sustainability.hero.title")}
          </h1>
          <p className="hero-in hero-in-3 mt-4 text-base text-white/55 max-w-xl">
            {t("sustainability.hero.sub")}
          </p>
        </div>
      </section>

      {/* ─── Three Pillars ─── */}
      <RevealSection as="section" className="py-24 bg-background">
        <div className="container-pro">
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, titleKey, heading, desc, stat, statLabel }) => (
              <div
                key={titleKey}
                className="bg-card border border-border rounded-xl p-7 hover:border-brand-red/25 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-red/8 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-red" />
                  </div>
                  <span className="overline text-[10px] font-semibold tracking-widest text-brand-red uppercase">
                    {t(titleKey)}
                  </span>
                </div>
                <div className="text-3xl font-bold tracking-tighter text-foreground leading-none">
                  {stat}
                  <span className="block text-xs font-normal text-muted-foreground mt-1 tracking-normal">
                    {statLabel}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{t(heading)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── Green Deal in Ship Repair ─── */}
      <RevealSection as="section" className="py-24 bg-surface/30 border-t border-border/50">
        <div className="container-pro">
          <p className="overline mb-4">{t("sustainability.deal.label")}</p>
          <h2 className="text-3xl font-bold tracking-tighter heading-underline mb-4">
            {t("sustainability.deal.title")}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-12 max-w-[65ch]">
            {t("sustainability.deal.sub")}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yardInitiatives.map(({ icon: Icon, titleKey, descKey }) => (
              <div
                key={titleKey}
                className="bg-card border border-border rounded-xl p-6 hover:border-brand-red/20 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-red/8 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{t(titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── Green Solutions for Shipowners ─── */}
      <RevealSection as="section" className="py-24 bg-[hsl(var(--navy-section))] border-t border-white/8">
        <div className="container-pro">
          <p className="overline text-white/45 mb-4">{t("sustainability.solutions.label")}</p>
          <h2 className="text-3xl font-bold tracking-tighter text-white mb-4">
            {t("sustainability.solutions.title")}
          </h2>
          <p className="text-white/55 text-sm leading-relaxed mb-12 max-w-[65ch]">
            {t("sustainability.solutions.sub")}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map(({ icon: Icon, titleKey, descKey }, i) => (
              <div
                key={titleKey}
                className={`bg-white/5 border border-white/10 rounded-xl p-6 hover:border-brand-red/30 hover:bg-white/8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col gap-4${i === 4 ? " lg:col-start-2" : ""}`}
              >
                <div className="w-10 h-10 rounded-lg bg-brand-red/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-2">{t(titleKey)}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{t(descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── Certifications ─── */}
      <RevealSection as="section" className="py-20 bg-surface/30 border-t border-border/50">
        <div className="container-pro">
          <h2 className="text-2xl font-bold tracking-tighter heading-underline mb-8">
            {t("sustainability.certs.title")}
          </h2>
          <CertificateBlock certificates={groupCertificates} />
        </div>
      </RevealSection>

      {/* ─── Shipowner solutions CTA ─── */}
      <RevealSection as="section" className="py-20 bg-background">
        <div className="container-pro max-w-2xl text-center mx-auto">
          <h2 className="text-2xl font-bold tracking-tighter mb-4">
            {t("sustainability.report.title")}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {t("sustainability.report.desc")}
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-red text-white text-sm font-semibold hover:bg-brand-red/90 transition-colors duration-200 shadow-[var(--shadow-red)]"
          >
            {t("blrt.contactUs")}
          </Link>
        </div>
      </RevealSection>
    </>
  );
}
