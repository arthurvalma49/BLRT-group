import { useLanguage } from "@/i18n/LanguageContext";

const societies = ["LR", "DNV", "BV", "ABS", "RINA", "KR", "IR", "NKK", "WTA"];

// doubled for seamless marquee loop (0 → -50%)
const doubled = [...societies, ...societies];

export default function ClassSocietiesStrip() {
  const { t } = useLanguage();

  return (
    <section className="bg-[hsl(var(--primary-deep))] border-b border-white/5 py-5 overflow-hidden">
      <div className="container-pro mb-4">
        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/35">
          {t("class.accepted")}
        </p>
      </div>

      {/* fade edges — both standard and webkit for Safari */}
      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max will-change-transform">
          {doubled.map((abbr, i) => (
            <div
              key={i}
              className="flex items-center px-10 border-r border-white/8"
            >
              <span className="text-white/70 font-bold tracking-[0.2em] text-sm whitespace-nowrap">
                {abbr}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
