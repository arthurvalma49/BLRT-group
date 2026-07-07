import { useState } from "react";
import { TrendingUp, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import RevealSection from "@/components/RevealSection";
import JobCard from "@/components/JobCard";
import { jobs } from "@/data/jobs";
import { cn } from "@/lib/utils";

const benefitIcons = [TrendingUp, Shield, Zap];

export default function Careers() {
  const { t } = useLanguage();
  const [companyFilter, setCompanyFilter] = useState<string>("all");

  const companies = Array.from(new Set(jobs.map((j) => j.companySlug))).map((slug) => ({
    slug,
    name: jobs.find((j) => j.companySlug === slug)!.companyName,
  }));

  const filtered = companyFilter === "all"
    ? jobs
    : jobs.filter((j) => j.companySlug === companyFilter);

  const benefits = [
    {
      icon: benefitIcons[0],
      title: t("careers.why.growth"),
      desc: t("careers.why.growth.desc"),
    },
    {
      icon: benefitIcons[1],
      title: t("careers.why.stability"),
      desc: t("careers.why.stability.desc"),
    },
    {
      icon: benefitIcons[2],
      title: t("careers.why.innovation"),
      desc: t("careers.why.innovation.desc"),
    },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=75&auto=format&fit=crop"
            alt=""
            aria-hidden
            fetchpriority="high"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.6) brightness(0.25)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-deep))] via-[hsl(218_68%_9%/0.85)] to-[hsl(218_68%_9%/0.55)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" aria-hidden />
        <div className="container-pro relative">
          <p className="hero-in hero-in-1 overline text-white/45 mb-5">{t("nav.careers")}</p>
          <h1 className="hero-in hero-in-2 text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-white max-w-2xl">
            {t("careers.hero.title")}
          </h1>
          <p className="hero-in hero-in-3 mt-4 text-base text-white/55 max-w-xl">
            {t("careers.hero.sub")}
          </p>
        </div>
      </section>

      {/* ─── Why work with us ─── */}
      <RevealSection as="section" className="py-24 bg-background border-b border-border/50">
        <div className="container-pro">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter heading-underline mb-12">
            {t("careers.why.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card border border-border rounded-xl p-6 hover:border-brand-red/25 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-red/8 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-red" />
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── Open positions ─── */}
      <RevealSection as="section" className="py-20 bg-background">
        <div className="container-pro">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold tracking-tighter">{t("careers.positions")}</h2>

            {/* Company filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCompanyFilter("all")}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border",
                  companyFilter === "all"
                    ? "bg-brand-red text-white border-brand-red"
                    : "bg-transparent text-muted-foreground border-border hover:border-brand-red/40",
                )}
              >
                {t("careers.filter.all")}
              </button>
              {companies.map(({ slug, name }) => (
                <button
                  key={slug}
                  onClick={() => setCompanyFilter(slug)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border",
                    companyFilter === slug
                      ? "bg-brand-red text-white border-brand-red"
                      : "bg-transparent text-muted-foreground border-border hover:border-brand-red/40",
                  )}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-16">{t("careers.empty")}</p>
          ) : (
            <div className="flex flex-col gap-3">
              {filtered.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}

          {/* Fallback CTA */}
          <div className="mt-12 bg-card border border-border rounded-xl p-8 text-center">
            <h3 className="text-base font-semibold text-foreground mb-2">
              {t("careers.fallback.title")}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t("careers.fallback.desc")}{" "}
              <a
                href="mailto:info@blrt.ee"
                className="text-brand-red hover:underline font-medium"
              >
                info@blrt.ee
              </a>
            </p>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
