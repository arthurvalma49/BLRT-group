import { useState } from "react";
import { MapPin, Clock, ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Job, JobType } from "@/data/jobs";

const typeLabels: Record<JobType, { EN: string; RU: string; ET: string }> = {
  "full-time": { EN: "Full-time", RU: "Полная занятость", ET: "Täistööaeg" },
  "part-time": { EN: "Part-time", RU: "Частичная занятость", ET: "Osaline tööaeg" },
  contract:    { EN: "Contract",  RU: "Договор",            ET: "Leping"          },
};

function loc(obj: { EN: string; RU: string; ET: string }, lang: string): string {
  return (obj as Record<string, string>)[lang] ?? obj.EN;
}

function locList(obj: { EN: string[]; RU: string[]; ET: string[] }, lang: string): string[] {
  return (obj as Record<string, string[]>)[lang] ?? obj.EN;
}

export default function JobCard({
  job,
  className,
}: {
  job: Job;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const { lang, t } = useLanguage();
  const typeLabel = loc(typeLabels[job.type], lang);

  return (
    <div
      className={cn(
        "bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        expanded ? "border-brand-red/25 shadow-[var(--shadow-elevated)]" : "hover:border-border/80",
        className,
      )}
    >
      {/* Header — always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-5 flex items-start justify-between gap-4 min-h-[44px] group"
        aria-expanded={expanded}
      >
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <h3 className="text-sm font-semibold tracking-tight text-foreground group-hover:text-brand-red transition-colors duration-200 pr-2">
            {loc(job.title, lang)}
          </h3>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-xs text-muted-foreground font-medium">{job.companyName}</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3 shrink-0" />
              {job.location}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3 shrink-0" />
              {typeLabel}
            </span>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-muted-foreground shrink-0 mt-0.5 transition-transform duration-300",
            expanded && "rotate-180 text-brand-red",
          )}
        />
      </button>

      {/* Expanded content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
          expanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-5 pb-5 flex flex-col gap-4 border-t border-border/50 pt-4">
          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {loc(job.description, lang)}
          </p>

          {/* Requirements */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
              Requirements
            </h4>
            <ul className="flex flex-col gap-1.5">
              {locList(job.requirements, lang).map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Apply CTA */}
          <div className="pt-2 border-t border-border/50">
            <a
              href={`mailto:info@blrt.ee?subject=Application: ${job.title.EN}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-red/70 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {t("careers.apply")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
