import { Leaf, Wind, Droplets, Flame, Zap, Building2, RefreshCw, Filter, Plug, GraduationCap, Music, Trophy, BookOpen, Download, ExternalLink, Factory, Cpu, Anchor } from "lucide-react";
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
  { name: "RINA",             issuer: "Registro Italiano Navale"             },
  { name: "NATO AQAP 2110",   issuer: "Allied Quality Assurance Publication" },
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

const csrPillars = [
  {
    icon: Trophy,
    title: "Sport Sponsorship",
    items: [
      "Estonian national men's and women's basketball teams",
      "Lithuanian BC Neptūnas basketball club",
      "Estonian men's tennis national team",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education Partnerships",
    items: [
      "TalTech (Tallinn University of Technology)",
      "Estonian Maritime Academy",
      "Lithuanian Maritime Academy",
      "University of Klaipėda",
    ],
  },
  {
    icon: Music,
    title: "Culture Support",
    items: [
      "Sudalinna Theater",
      "Saaremaa Opera Days",
      "Days of the Sea festival",
    ],
  },
  {
    icon: BookOpen,
    title: "BLRT Fond Scholarship",
    items: [
      "Annual €2,000 scholarship for engineering and maritime students",
      "Awarded via the Estonian National Culture Foundation",
      "Applications at ankeet.erkf.ee",
    ],
  },
];

const greenInitiatives = [
  {
    icon: Plug,
    year: "2022–2024",
    company: "Bars Elekter",
    title: "Norway Grants Shore Power Programme",
    desc: "Two Enterprise Estonia Green ICT Programme grants (~€218,772 total) to develop shore power technology aligned with EU 'Fit for 55' CO₂ reduction goals. Completed connections for M/S SILJA EUROPA, M/S VICTORIA I, and M/S Isabelle.",
  },
  {
    icon: Factory,
    year: "2024–2026",
    company: "BLRT Valukoda",
    title: "EU Cohesion Fund Foundry Upgrade",
    desc: "€860,845.50 EU Cohesion Fund investment in a new induction melting furnace (5–7% energy savings), automated sand mixer and waste heat recovery system. CO₂ target: from 3.44 → 3.20 t CO₂-eq per tonne of output.",
  },
  {
    icon: Cpu,
    year: "Ongoing",
    company: "Western Technological Solutions",
    title: "Industrial Carbon Capture Systems",
    desc: "WTS manufactures stainless steel CO₂ capture absorbers and flue gas treatment systems (scrubbers, electrostatic precipitators) for European industrial decarbonisation customers.",
  },
  {
    icon: Anchor,
    year: "2022",
    company: "Western Stevedoring",
    title: "Hydroelectric Crane — EU Green Deal",
    desc: "One of the first hydroelectric cranes deployed at the Port of Klaipėda as part of EU Green Deal compliance commitments, improving cargo handling efficiency and reducing emissions.",
  },
  {
    icon: Droplets,
    year: "2024",
    company: "Vene-Balti Sadam",
    title: "KIK Marine Pollution Control Upgrade",
    desc: "KIK Marine Environment Programme-funded upgrade of pollution control equipment at the Kopli 103 port, with new pollution incident response scenarios approved February 2024.",
  },
];

const reports = [
  {
    title: "WSY Corporate SR Report 2025",
    desc: "Western Shipyard Group Annual Sustainability & Responsibility Report",
    href: "https://wbs.lt/wp-content/uploads/2025/07/wsy_srr_2025.pdf",
  },
  {
    title: "WSY Corporate SR Policy",
    desc: "Western Shipyard Group Social Responsibility Policy",
    href: "https://wbs.lt/wp-content/uploads/2021/09/corporate_sr_policy.pdf",
  },
  {
    title: "BLRT Grupp Code of Conduct",
    desc: "Group-wide ethical standards and conduct guidelines (EN, 2020)",
    href: "https://blrt.ee/wp-content/uploads/2023/02/blrt-grupp-code-of-conduct-en_2020.pdf",
  },
];

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

      {/* ─── Group Social Responsibility ─── */}
      <RevealSection as="section" className="py-24 bg-surface border-t border-border">
        <div className="container-pro">
          <p className="overline mb-3">Group Social Responsibility</p>
          <h2 className="text-3xl font-bold tracking-tighter heading-underline mb-4">
            Community, Culture &amp; Education
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-12 max-w-[65ch]">
            BLRT Grupp supports sport, education and culture across the Baltic region, and offers annual scholarships through the BLRT Fond programme.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {csrPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-red/8 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-3">{pillar.title}</h3>
                    <ul className="space-y-1.5">
                      {pillar.items.map((item) => (
                        <li key={item} className="text-xs text-muted-foreground leading-snug flex items-start gap-1.5">
                          <span className="text-brand-red mt-0.5 shrink-0">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── Green Deal in Ship Repair ─── */}
      <RevealSection as="section" className="py-24 bg-background border-t border-border/50">
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

      {/* ─── Group Green Initiatives ─── */}
      <RevealSection as="section" className="py-24 bg-surface border-t border-border">
        <div className="container-pro">
          <p className="overline mb-3">Group Green Initiatives</p>
          <h2 className="text-3xl font-bold tracking-tighter heading-underline mb-4">
            Decarbonisation Across the Group
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-12 max-w-[65ch]">
            Sustainability commitments span the entire BLRT Grupp — from EU-funded foundry upgrades and shore power R&amp;D to industrial carbon capture manufacturing and port decarbonisation.
          </p>
          <div className="space-y-4">
            {greenInitiatives.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-card border border-border rounded-xl p-6 flex gap-5 hover:border-brand-red/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-brand-red/8 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-brand-red" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-brand-red">{item.company}</span>
                      <span className="text-[10px] text-muted-foreground ml-auto">{item.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Memberships */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-4">Group Industry Memberships</p>
            <div className="flex flex-wrap gap-3">
              {["Estonian Wind Power Association", "Lithuanian Cluster of Liquefied Natural Gas"].map((name) => (
                <span key={name} className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-background text-xs font-medium text-foreground">
                  {name}
                </span>
              ))}
            </div>
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

      {/* ─── Downloads ─── */}
      <RevealSection as="section" className="py-20 bg-background border-t border-border">
        <div className="container-pro">
          <p className="overline mb-3">Reports &amp; Governance</p>
          <h2 className="text-2xl font-bold tracking-tighter mb-10">Downloads</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reports.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-brand-red/30 hover:shadow-[var(--shadow-elevated)] transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-red/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Download className="w-4 h-4 text-brand-red" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-sm font-semibold text-foreground leading-snug">{r.title}</span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">{r.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </RevealSection>
    </>
  );
}
