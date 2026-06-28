import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import { sectorGroups } from "@/data/businesses";
import type { Project } from "@/data/projects";

function getSectorLabel(sectorId: string): string {
  return sectorGroups.find((s) => s.id === sectorId)?.label ?? sectorId;
}

function loc(obj: { EN: string; RU: string; ET: string }, lang: string): string {
  return (obj as Record<string, string>)[lang] ?? obj.EN;
}

export default function ProjectCard({
  project,
  variant = "grid",
  className,
}: {
  project: Project;
  variant?: "grid" | "featured";
  className?: string;
}) {
  const { lang } = useLanguage();

  if (variant === "featured") {
    return (
      <div
        className={cn(
          "group grid md:grid-cols-2 gap-0 bg-card border border-border rounded-xl overflow-hidden",
          "hover:border-brand-red/25 hover:shadow-[var(--shadow-elevated)]",
          "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          className,
        )}
      >
        {/* Image */}
        <div className="relative h-64 md:h-auto overflow-hidden bg-surface">
          <img
            src={project.image}
            alt={loc(project.title, lang)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="overline text-[10px] font-semibold tracking-widest text-brand-red uppercase">
              {getSectorLabel(project.sectorId)}
            </span>
            <span className="text-muted-foreground/40 text-xs">·</span>
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold tracking-tight text-foreground mb-3 leading-snug">
              {loc(project.title, lang)}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
              {loc(project.description, lang)}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/5 text-muted-foreground border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
      <div className="relative h-44 overflow-hidden bg-surface">
        <img
          src={project.image}
          alt={loc(project.title, lang)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Year badge */}
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2 py-0.5 rounded-md">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <span className="overline text-[10px] font-semibold tracking-widest text-brand-red uppercase">
          {getSectorLabel(project.sectorId)}
        </span>

        <h3 className="text-sm font-semibold tracking-tight text-foreground leading-snug line-clamp-2 flex-1 group-hover:text-brand-red transition-colors duration-200">
          {loc(project.title, lang)}
        </h3>

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {loc(project.description, lang)}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border/50">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/5 text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
