import { Link } from "react-router-dom";
import { Anchor, Wrench, Search, Zap, Layers, Ship, ArrowRight, Eye, Target, Compass, Users, ShieldCheck, TrendingUp, Trophy, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import RevealSection from "@/components/RevealSection";
import CertificateBlock from "@/components/CertificateBlock";
import { type Certificate } from "@/components/CertificateBlock";

const sectors = [
  { icon: Anchor,  label: "Ship Repair",             desc: "Four repair yards across Estonia, Lithuania and Finland." },
  { icon: Ship,    label: "Shipbuilding",             desc: "Large-block construction and LNG ferry newbuilding." },
  { icon: Search,  label: "Inspection & Testing",     desc: "Marine NDT, UTM and certified laboratory services." },
  { icon: Zap,     label: "Engineering",              desc: "Marine electrical, machine building, offshore structures and cable handling." },
  { icon: Layers,  label: "Steel & Materials",        desc: "Rolled steel distribution, galvanizing and industrial gases." },
  { icon: Wrench,  label: "Port & Marine Services",   desc: "Port operations, stevedoring, towage and marine equipment service." },
];

const groupCertificates: Certificate[] = [
  { name: "ISO 9001:2015", issuer: "Quality Management System", year: 2023 },
  { name: "ISO 14001:2015", issuer: "Environmental Management System", year: 2023 },
  { name: "ISO 45001:2018", issuer: "Occupational Health & Safety", year: 2023 },
  { name: "Lloyd's Register", issuer: "Classification Society Approval" },
  { name: "DNV", issuer: "Det Norske Veritas Approval" },
  { name: "Bureau Veritas", issuer: "Classification & Certification" },
  { name: "ABS", issuer: "American Bureau of Shipping" },
  { name: "RINA", issuer: "Registro Italiano Navale" },
  { name: "NATO AQAP 2110", issuer: "Allied Quality Assurance Publication" },
];

const values = [
  {
    icon: Users,
    title: "Focus on People",
    sub: "Recognition and Respect",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    sub: "Responsibility and Competence",
  },
  {
    icon: TrendingUp,
    title: "Efficiency",
    sub: "Spend Minimum, Reach Maximum",
  },
  {
    icon: Target,
    title: "Development",
    sub: "Growth and Progress",
  },
];

const leadership = [
  {
    name: "Algerd Andruškevičius",
    role: "Member of the Management Board",
    phone: "+372 511 2272",
    email: "blrt@blrt.ee",
  },
  {
    name: "Karina Kond",
    role: "Director of Communication",
    phone: "+372 610 2403",
    email: "karina.kond@blrt.ee",
  },
  {
    name: "Inga Stern",
    role: "Communications Specialist",
    phone: "+372 610 2593",
    email: "inga.stern@blrt.ee",
  },
];

const awards = [
  { year: "2026", title: "Shippax RoRo Award", body: "BLRT Grupp Shipyard" },
  { year: "2025", title: "Friend of Culture", body: "Estonian Ministry of Culture" },
  { year: "2024", title: "Friend of Culture", body: "Estonian Ministry of Culture" },
  { year: "2023", title: "Friend of Culture", body: "Estonian Ministry of Culture" },
  { year: "2018", title: "Friend of Culture", body: "Estonian Ministry of Culture" },
  { year: "2014", title: "Friend of Culture", body: "Estonian Ministry of Culture" },
];

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { v: "50+",   l: t("blrt.about.stat.companies") },
    { v: "7",     l: t("blrt.about.stat.countries") },
    { v: "1912",  l: t("blrt.about.stat.founded") },
    { v: "4,000+", l: "Employees" },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400&q=75&auto=format&fit=crop"
            alt=""
            aria-hidden
            fetchpriority="high"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.7) brightness(0.28)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-deep))] via-[hsl(218_68%_9%/0.85)] to-[hsl(218_68%_9%/0.55)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" aria-hidden />
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
                <div className="text-4xl font-bold tracking-tighter text-foreground leading-none mb-1.5">
                  {s.v}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{s.l}</div>
              </div>
            ))}
          </aside>
        </div>
      </RevealSection>

      {/* ─── Photo band ─── */}
      <div className="relative h-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504890396-66f1d15f7440?w=1400&q=75&auto=format&fit=crop"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "saturate(1.2) brightness(0.35)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--background))] via-[hsl(218_40%_8%/0.6)] to-[hsl(var(--background))]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/50 text-[10px] font-bold tracking-[0.35em] uppercase">
            50+ Companies · 7 Countries · Est. 1912
          </span>
        </div>
      </div>

      {/* ─── Mission / Vision / Strategy ─── */}
      <RevealSection as="section" className="py-24 bg-background">
        <div className="container-pro">
          <p className="overline mb-3">Our Purpose</p>
          <h2 className="text-3xl tracking-tighter text-foreground mb-12">Vision, Mission &amp; Strategy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                label: "Vision",
                text: "BLRT Grupp is the largest industrial holding in the countries of the Baltic region.",
              },
              {
                icon: Compass,
                label: "Mission",
                text: "We contribute to the development of our clients' businesses by providing services, manufacturing industrial products and supplying materials.",
              },
              {
                icon: Target,
                label: "Strategy",
                text: "Focus on marine transport, renewable energy, engineering, offshore oil & gas and fish farming — while continuously developing our organisation, technology and people.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-surface border border-border rounded-xl p-7 flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-red/8 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-red mb-2">
                      {item.label}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── Sectors ─── */}
      <RevealSection as="section" className="py-24 bg-surface">
        <div className="container-pro">
          <p className="overline mb-3">Our Sectors</p>
          <h2 className="text-3xl tracking-tighter text-foreground mb-12">Six areas of industrial expertise</h2>
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

      {/* ─── Group Values teaser ─── */}
      <RevealSection as="section" className="py-20 bg-background border-t border-border">
        <div className="container-pro">
          <p className="overline mb-3">Group Values</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <h2 className="text-3xl tracking-tighter text-foreground">Four principles that guide us</h2>
            <Link
              to="/our-values"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-red/80 transition-colors shrink-0"
            >
              Read more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-surface border border-border rounded-xl p-6">
                  <div className="w-9 h-9 rounded-lg bg-brand-red/8 flex items-center justify-center mb-4">
                    <Icon className="w-4.5 h-4.5 text-brand-red" />
                  </div>
                  <div className="text-sm font-bold text-foreground mb-1">{v.title}</div>
                  <div className="text-xs text-muted-foreground">{v.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── Leadership ─── */}
      <RevealSection as="section" className="py-20 bg-surface border-t border-border">
        <div className="container-pro">
          <p className="overline mb-3">Leadership</p>
          <h2 className="text-2xl tracking-tighter text-foreground mb-10">Group Management &amp; Communications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
            {leadership.map((p) => (
              <div key={p.email} className="bg-card p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-red mb-3">
                  {p.role}
                </div>
                <div className="text-sm font-bold text-primary mb-4 leading-snug">{p.name}</div>
                <div className="space-y-1.5">
                  <a
                    href={`tel:${p.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-3 h-3 shrink-0" />
                    {p.phone}
                  </a>
                  <a
                    href={`mailto:${p.email}`}
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors break-all"
                  >
                    <Mail className="w-3 h-3 shrink-0" />
                    {p.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── Group Certifications ─── */}
      <RevealSection as="section" className="py-20 bg-surface border-t border-border/50">
        <div className="container-pro">
          <p className="overline mb-3">{t("about.certs.title")}</p>
          <h2 className="text-2xl tracking-tighter text-foreground heading-underline mb-10">
            {t("about.certs.title")}
          </h2>
          <CertificateBlock
            certificates={groupCertificates}
          />
        </div>
      </RevealSection>

      {/* ─── Awards ─── */}
      <RevealSection as="section" className="py-20 bg-background border-t border-border">
        <div className="container-pro">
          <p className="overline mb-3">Recognition</p>
          <h2 className="text-2xl tracking-tighter text-foreground mb-10">Awards &amp; Honours</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((a) => (
              <div key={`${a.year}-${a.title}`} className="flex items-start gap-4 bg-surface border border-border rounded-xl p-5">
                <div className="w-9 h-9 rounded-lg bg-brand-red/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Trophy className="w-4 h-4 text-brand-red" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-1">{a.year}</div>
                  <div className="text-sm font-bold text-foreground mb-0.5">{a.title}</div>
                  <div className="text-xs text-muted-foreground">{a.body}</div>
                </div>
              </div>
            ))}
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
              to="/#companies"
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
