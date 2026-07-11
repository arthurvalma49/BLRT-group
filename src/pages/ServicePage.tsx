import { useParams, Navigate, Link } from "react-router-dom";
import { FileText, ArrowLeft, ChevronRight } from "lucide-react";
import { businesses } from "@/data/businesses";
import { serviceContent } from "@/data/serviceContent";
import { serviceIconMap } from "@/lib/serviceIcons";
import RevealSection from "@/components/RevealSection";
import ServiceContent from "@/components/ServiceContent";

export default function ServicePage() {
  const { slug, serviceSlug } = useParams<{ slug: string; serviceSlug: string }>();
  const biz = businesses.find((b) => b.slug === slug);

  if (!biz) return <Navigate to="/" replace />;

  const service = biz.services.find((s) => s.slug === serviceSlug);

  if (!service) return <Navigate to={`/company/${biz.slug}`} replace />;

  const Comp = serviceIconMap[service.icon] ?? FileText;
  const otherServices = biz.services.filter((s) => s.slug !== service.slug);
  const content = serviceContent[biz.slug]?.[service.slug] ?? service.fullDesc ?? service.desc;

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-[hsl(var(--primary-deep))] text-white pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden />
        <div className="container-pro relative">
          <Link
            to={`/company/${biz.slug}`}
            className="hero-in hero-in-1 inline-flex items-center gap-1.5 text-white/45 hover:text-white/75 text-xs font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {biz.name}
          </Link>

          <div className="hero-in hero-in-1 flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center shrink-0">
              <Comp className="w-4 h-4 text-white/80" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 px-2.5 py-1 border border-white/12 rounded">
              {biz.sector}
            </span>
          </div>

          <h1 className="hero-in hero-in-2 text-4xl lg:text-5xl font-bold tracking-tighter text-white max-w-2xl mb-5 leading-tight">
            {service.title}
          </h1>
          <p className="hero-in hero-in-3 text-base text-white/55 max-w-[52ch] leading-relaxed">
            {service.desc}
          </p>
        </div>
      </section>

      {/* ─── Full description ─── */}
      <RevealSection as="section" className="py-24 bg-background">
        <div className="container-pro">
          <p className="overline mb-4">{biz.name}</p>
          <ServiceContent markdown={content} />
        </div>
      </RevealSection>

      {/* ─── Other services ─── */}
      {otherServices.length > 0 && (
        <RevealSection as="section" className="py-16 bg-surface border-t border-border">
          <div className="container-pro">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">
              More services at {biz.name}
            </p>
            <div className="flex flex-wrap gap-3">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/company/${biz.slug}/services/${s.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
                >
                  {s.title}
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
            <Link
              to={`/company/${biz.slug}`}
              className="inline-flex items-center gap-1.5 mt-8 text-sm font-semibold text-brand-red hover:text-brand-red/70 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to {biz.name}
            </Link>
          </div>
        </RevealSection>
      )}
    </>
  );
}
