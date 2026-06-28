import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import type { News, NewsCategory } from "@/data/news";

const categoryLabels: Record<NewsCategory, { EN: string; RU: string; ET: string }> = {
  press:   { EN: "Press Release", RU: "Пресс-релиз",     ET: "Pressiteade"    },
  company: { EN: "Company News",  RU: "Новости компании", ET: "Ettevõtte uudis" },
  project: { EN: "Project",       RU: "Проект",           ET: "Projekt"         },
};

function formatDate(dateStr: string, lang: string): string {
  const date = new Date(dateStr);
  const locales: Record<string, string> = { EN: "en-GB", RU: "ru-RU", ET: "et-EE" };
  return date.toLocaleDateString(locales[lang] ?? "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function loc(obj: { EN: string; RU: string; ET: string }, lang: string): string {
  return (obj as Record<string, string>)[lang] ?? obj.EN;
}

export default function NewsCard({
  news,
  className,
}: {
  news: News;
  className?: string;
}) {
  const { lang, t } = useLanguage();
  const catLabel = loc(categoryLabels[news.category], lang);

  return (
    <article
      className={cn(
        "group bg-card border border-border rounded-xl overflow-hidden flex flex-col",
        "hover:border-brand-red/25 hover:shadow-[var(--shadow-elevated)]",
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        className,
      )}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-surface">
        <img
          src={news.image}
          alt={loc(news.title, lang)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Meta row */}
        <div className="flex items-center gap-3">
          <span className="overline text-[10px] font-semibold tracking-widest text-brand-red uppercase">
            {catLabel}
          </span>
          <span className="text-muted-foreground/40 text-xs">·</span>
          <span className="flex items-center gap-1 text-muted-foreground text-xs">
            <Calendar className="w-3 h-3" />
            {formatDate(news.date, lang)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold tracking-tight text-foreground leading-snug line-clamp-2 group-hover:text-brand-red transition-colors duration-200">
          {loc(news.title, lang)}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {loc(news.excerpt, lang)}
        </p>

        {/* Read more */}
        <div className="pt-1 border-t border-border/50 mt-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red group-hover:gap-2.5 transition-all duration-200">
            {t("news.readmore")}
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
