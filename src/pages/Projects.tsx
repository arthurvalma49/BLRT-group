import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import RevealSection from "@/components/RevealSection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { sectorGroups } from "@/data/businesses";
import { cn } from "@/lib/utils";

const INITIAL_VISIBLE = 6;

export default function Projects() {
  const { t } = useLanguage();
  const [sectorFilter, setSectorFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);

  const featured = projects.find((p) => p.featured);
  const nonFeatured = projects.filter((p) => !p.featured || p.id !== featured?.id);

  const filtered = sectorFilter === "all"
    ? nonFeatured
    : nonFeatured.filter((p) => p.sectorId === sectorFilter);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);

  const filters = [
    { key: "all", label: t("projects.filter.all") },
    ...sectorGroups.map((s) => ({ key: s.id, label: s.label })),
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1604506522146-316c8bedd874?w=1400&q=75&auto=format&fit=crop"
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
          <p className="hero-in hero-in-1 overline text-white/45 mb-5">{t("nav.projects")}</p>
          <h1 className="hero-in hero-in-2 text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-white max-w-2xl">
            {t("projects.hero.title")}
          </h1>
          <p className="hero-in hero-in-3 mt-4 text-base text-white/55 max-w-xl">
            {t("projects.hero.sub")}
          </p>
        </div>
      </section>

      {/* ─── Featured ─── */}
      {featured && (
        <RevealSection as="section" className="py-16 bg-background border-b border-border/50">
          <div className="container-pro">
            <p className="overline text-brand-red text-[10px] font-semibold tracking-widest mb-5 uppercase">
              {t("projects.featured")}
            </p>
            <ProjectCard project={featured} variant="featured" />
          </div>
        </RevealSection>
      )}

      {/* ─── Filter + Grid ─── */}
      <RevealSection as="section" className="py-20 bg-background">
        <div className="container-pro">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => { setSectorFilter(key); setShowAll(false); }}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border",
                  sectorFilter === key
                    ? "bg-brand-red text-white border-brand-red"
                    : "bg-transparent text-muted-foreground border-border hover:border-brand-red/40 hover:text-foreground",
                )}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-16">{t("projects.empty")}</p>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {visible.map((p) => (
                  <ProjectCard key={p.id} project={p} variant="grid" />
                ))}
              </div>

              {!showAll && filtered.length > INITIAL_VISIBLE && (
                <div className="mt-10 text-center">
                  <button
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:border-brand-red/40 hover:text-foreground transition-all duration-200"
                  >
                    {t("projects.viewall")}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </RevealSection>
    </>
  );
}
