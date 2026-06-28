import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import RevealSection from "@/components/RevealSection";
import NewsCard from "@/components/NewsCard";
import { news } from "@/data/news";
import type { NewsCategory } from "@/data/news";
import { cn } from "@/lib/utils";

type Filter = "all" | NewsCategory;

export default function News() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? news : news.filter((n) => n.category === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: "all",     label: t("news.filter.all")     },
    { key: "press",   label: t("news.filter.press")   },
    { key: "company", label: t("news.filter.company") },
    { key: "project", label: t("news.filter.project") },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1670121180530-cfcba4438038?w=1400&q=75&auto=format&fit=crop"
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
          <p className="hero-in hero-in-1 overline text-white/45 mb-5">{t("nav.news")}</p>
          <h1 className="hero-in hero-in-2 text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-white max-w-2xl">
            {t("news.hero.title")}
          </h1>
          <p className="hero-in hero-in-3 mt-4 text-base text-white/55 max-w-xl">
            {t("news.hero.sub")}
          </p>
        </div>
      </section>

      {/* ─── Filter + Grid ─── */}
      <RevealSection as="section" className="py-20 bg-background">
        <div className="container-pro">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border",
                  filter === key
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
            <p className="text-muted-foreground text-center py-16">{t("news.empty")}</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((item) => (
                <NewsCard key={item.id} news={item} />
              ))}
            </div>
          )}
        </div>
      </RevealSection>
    </>
  );
}
