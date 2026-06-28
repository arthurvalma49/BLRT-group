import { Award } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Certificate {
  name: string;
  issuer: string;
  year?: number;
}

export default function CertificateBlock({
  certificates,
  className,
}: {
  certificates: Certificate[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {certificates.map((cert, i) => (
        <div
          key={i}
          className="group flex items-center gap-2.5 bg-card border border-border rounded-lg px-3.5 py-2.5 hover:border-brand-red/25 hover:shadow-[var(--shadow-card)] transition-all duration-200"
        >
          <div className="w-7 h-7 rounded-md bg-brand-red/8 flex items-center justify-center shrink-0">
            <Award className="w-3.5 h-3.5 text-brand-red" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-foreground leading-tight">{cert.name}</span>
            <span className="text-[10px] text-muted-foreground leading-tight">
              {cert.issuer}{cert.year ? ` · ${cert.year}` : ""}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
