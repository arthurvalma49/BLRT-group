import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

export interface TechDataRow {
  label: Record<Lang, string>;
  value: string;
}

export default function TechDataTable({
  rows,
  className,
}: {
  rows: TechDataRow[];
  className?: string;
}) {
  const { lang } = useLanguage();

  return (
    <div className={cn("rounded-xl border border-border overflow-hidden", className)}>
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={cn(
                "border-b border-border/50 last:border-0",
                i % 2 === 0 ? "bg-card" : "bg-surface/50",
              )}
            >
              <td className="px-4 py-3 font-medium text-foreground w-1/2">{row.label[lang]}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
