import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import {
  Anchor, Ship, Wrench, Zap, Shield, Package, Truck, Layers, Ruler,
  Globe2, Award, Clock, Waves, Cpu, FileText, Droplets, Magnet,
  TrendingUp, Building2, Gauge, FlaskConical, HardHat, Flame,
  Phone, Mail, MapPin, ExternalLink, ArrowLeft, ChevronRight, ChevronDown,
} from "lucide-react";
import { businesses, sectorGroups, type ServiceIcon } from "@/data/businesses";
import RevealSection from "@/components/RevealSection";

const iconMap: Record<ServiceIcon, React.ComponentType<{ className?: string }>> = {
  anchor: Anchor,
  ship: Ship,
  wrench: Wrench,
  zap: Zap,
  shield: Shield,
  package: Package,
  truck: Truck,
  layers: Layers,
  ruler: Ruler,
  eye: Gauge,
  globe: Globe2,
  award: Award,
  clock: Clock,
  waves: Waves,
  circuit: Cpu,
  file: FileText,
  droplets: Droplets,
  magnet: Magnet,
  trending: TrendingUp,
  building: Building2,
  gauge: Gauge,
  beaker: FlaskConical,
  "hard-hat": HardHat,
  flame: Flame,
};

function ServiceCard({
  icon,
  title,
  desc,
  fullDesc,
}: {
  icon: ServiceIcon;
  title: string;
  desc: string;
  fullDesc?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const Comp = iconMap[icon] ?? FileText;

  return (
    <div className="group bg-card border border-border rounded-xl p-6 hover:border-brand-red/25 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col">
      <div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-brand-red/8 flex items-center justify-center mb-4 shrink-0 transition-colors duration-300">
        <Comp className="w-4 h-4 text-brand-red" />
      </div>
      <h3 className="text-sm font-semibold tracking-tight text-primary mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>

      {fullDesc && (
        <>
          <div
            className={`overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              expanded ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            {fullDesc.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-2 last:mb-0">
                {para}
              </p>
            ))}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red hover:text-brand-red/70 transition-colors self-start min-h-[44px] -ml-1 px-1"
            aria-expanded={expanded}
          >
            {expanded ? "Show Less" : "Read More"}
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </>
      )}
    </div>
  );
}

export default function BusinessPage() {
  const { slug } = useParams<{ slug: string }>();
  const biz = businesses.find((b) => b.slug === slug);

  if (!biz) return <Navigate to="/" replace />;

  const sector = sectorGroups.find((s) => s.id === biz.sectorId);
  const related = sector
    ? sector.slugs
        .filter((s) => s !== slug)
        .map((s) => businesses.find((b) => b.slug === s))
        .filter(Boolean)
    : [];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-[hsl(var(--primary-deep))] text-white pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden />
        <div className="container-pro relative">
          <Link
            to="/"
            className="hero-in hero-in-1 inline-flex items-center gap-1.5 text-white/45 hover:text-white/75 text-xs font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            BLRT Grupp
          </Link>

          <div className="hero-in hero-in-1 flex items-center gap-3 mb-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 px-2.5 py-1 border border-white/12 rounded">
              {biz.sector}
            </span>
            <span className="text-[10px] font-medium text-white/35 uppercase tracking-wider">{biz.countries}</span>
          </div>

          <h1 className="hero-in hero-in-2 text-5xl lg:text-6xl font-bold tracking-tighter text-white max-w-2xl mb-5 leading-tight">
            {biz.fullName ?? biz.name}
          </h1>
          <p className="hero-in hero-in-3 text-base text-white/55 max-w-[52ch] leading-relaxed">
            {biz.heroDesc}
          </p>

          {biz.contact.website && (
            <div className="hero-in hero-in-4 mt-8">
              <a
                href={biz.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine btn-tactile inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white text-sm font-medium px-5 py-2.5 rounded transition-all duration-200"
              >
                Visit website
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ─── About ─── */}
      <RevealSection as="section" className="py-24 bg-background">
        <div className="container-pro grid lg:grid-cols-[1fr_260px] gap-16">
          <div>
            <p className="overline mb-4">About {biz.name}</p>
            <div className="space-y-5">
              <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">{biz.aboutP1}</p>
              {biz.aboutP2 && (
                <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">{biz.aboutP2}</p>
              )}
            </div>
          </div>

          <aside className="divide-y divide-border">
            <div className="pb-5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1.5">Sector</div>
              <div className="text-sm font-semibold text-primary">{biz.sector}</div>
            </div>
            <div className="py-5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1.5">Countries</div>
              <div className="text-sm font-semibold text-primary">{biz.countries}</div>
            </div>
            <div className="py-5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1.5">Group</div>
              <div className="text-sm font-semibold text-primary">BLRT Grupp</div>
            </div>
            {biz.contact.website && (
              <div className="pt-5">
                <a
                  href={biz.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-brand-red hover:text-brand-red-hover font-medium transition-colors duration-200"
                >
                  Company website
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </aside>
        </div>
      </RevealSection>

      {/* ─── Services ─── */}
      {biz.services.length > 0 && (
        <RevealSection as="section" className="py-24 bg-surface">
          <div className="container-pro">
            <p className="overline mb-3">What we do</p>
            <h2 className="text-3xl tracking-tighter text-primary mb-12">Services & Capabilities</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {biz.services.map((svc, i) => (
                <ServiceCard
                  key={i}
                  icon={svc.icon}
                  title={svc.title}
                  desc={svc.desc}
                  fullDesc={svc.fullDesc}
                />
              ))}
            </div>
          </div>
        </RevealSection>
      )}

      {/* ─── Contact ─── */}
      {(biz.contact.address || biz.contact.phone || biz.contact.email || biz.contact.website) && (
        <RevealSection as="section" className="py-24 bg-background">
          <div className="container-pro">
            <p className="overline mb-3">Get in touch</p>
            <h2 className="text-3xl tracking-tighter text-primary mb-10">Contact {biz.name}</h2>
            <div className="flex flex-col sm:flex-row flex-wrap gap-5">
              {biz.contact.phone && (
                <a
                  href={`tel:${biz.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-red/8 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-brand-red" />
                  </div>
                  {biz.contact.phone}
                </a>
              )}
              {biz.contact.email && (
                <a
                  href={`mailto:${biz.contact.email}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-red/8 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-brand-red" />
                  </div>
                  {biz.contact.email}
                </a>
              )}
              {biz.contact.address && (
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-9 h-9 rounded-lg bg-brand-red/8 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-brand-red" />
                  </div>
                  {biz.contact.address}
                </div>
              )}
              {biz.contact.website && (
                <a
                  href={biz.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-red/8 flex items-center justify-center shrink-0">
                    <Globe2 className="w-4 h-4 text-brand-red" />
                  </div>
                  {biz.contact.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </a>
              )}
            </div>
          </div>
        </RevealSection>
      )}

      {/* ─── Related ─── */}
      {related.length > 0 && (
        <RevealSection as="section" className="py-16 bg-surface border-t border-border">
          <div className="container-pro">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">
              More in {biz.sector}
            </p>
            <div className="flex flex-wrap gap-3">
              {related.map((r) => r && (
                <Link
                  key={r.slug}
                  to={`/company/${r.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
                >
                  {r.name}
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </RevealSection>
      )}
    </>
  );
}
