import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ClassSocietiesStrip from "@/components/ClassSocietiesStrip";
import MagneticButton from "@/components/MagneticButton";
import RevealSection from "@/components/RevealSection";
import heroVessel from "@/assets/hero-vessel.jpg";
import inspectorWork from "@/assets/inspector-work.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { value: "300+", label: t("home.stat.vessels") },
    { value: "24/7", label: t("home.stat.mobilisation") },
    { value: "27",   label: t("home.stat.experience") },
    { value: t("home.stat.worldwide"), label: t("home.stat.coverage") },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[100dvh] bg-[hsl(var(--primary-deep))] text-white overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden />

        {/* vessel image — right 44% */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[44%] pointer-events-none">
          <img
            src={heroVessel}
            alt="Commercial cargo vessel undergoing inspection"
            width={1920}
            height={1088}
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-deep))] via-[hsl(218_68%_12%/0.65)] to-[hsl(218_68%_12%/0.1)]" />
        </div>

        {/* content */}
        <div className="container-pro relative min-h-[100dvh] flex items-center">
          <div className="w-full lg:w-[58%] py-24 lg:py-0">
            <div className="hero-in hero-in-1 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/12 bg-white/5 text-[10px] font-semibold uppercase tracking-[0.2em] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              {t("home.badge")}
            </div>

            <h1 className="hero-in hero-in-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-none text-white mb-6">
              {t("home.heroTitle1")}
              <br />
              {t("home.heroTitle2")}
              <br />
              <span className="text-brand-red">{t("home.heroTitle3")}</span>
            </h1>

            <p className="hero-in hero-in-3 text-base text-white/60 max-w-[50ch] mb-10 leading-relaxed font-normal">
              {t("home.heroDesc")}
            </p>

            <div className="hero-in hero-in-4 flex flex-wrap gap-3">
              <MagneticButton>
                <Link
                  to="/contacts"
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-semibold px-6 py-3 rounded text-sm btn-tactile transition-colors"
                  style={{ boxShadow: "var(--shadow-red)" }}
                >
                  {t("nav.requestSurvey")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
              <Link
                to="/activities"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold px-6 py-3 rounded text-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                {t("home.viewActivities")}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center" aria-hidden>
          <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent animate-float" />
        </div>
      </section>

      {/* ─── Class Societies ─── */}
      <ClassSocietiesStrip />

      {/* ─── Stats ─── */}
      {/*
        Full-border grid trick: parent has border-t + border-l,
        each cell has border-b + border-r. Works on any column count.
      */}
      <RevealSection as="section" className="bg-background border-b border-border">
        <div className="container-pro">
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
            {stats.map((s, i) => (
              <div
                key={i}
                className="py-10 px-6 lg:px-8 flex flex-col gap-1.5 border-b border-r border-border"
              >
                <div className="text-4xl lg:text-5xl font-bold tracking-tighter text-primary leading-none">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── About preview ─── */}
      <RevealSection as="section" className="py-24 bg-background">
        <div className="container-pro grid lg:grid-cols-[1.15fr_1fr] gap-16 items-start">
          <div className="lg:pt-4">
            <p className="overline mb-4">{t("home.aboutLabel")}</p>
            <h2 className="text-3xl lg:text-4xl mb-7 tracking-tighter heading-underline">
              {t("home.aboutTitle")}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-[65ch]">
              {t("home.aboutP1")}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-[65ch]">
              {t("home.aboutP2")}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-brand-red text-brand-red font-semibold px-5 py-2.5 rounded text-sm hover:bg-brand-red hover:text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] btn-tactile"
            >
              {t("home.readMore")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative pb-8">
            <div
              className="absolute -top-6 -right-6 w-48 h-48 bg-brand-red/6 rounded-full blur-3xl pointer-events-none"
              aria-hidden
            />
            <img
              src={inspectorWork}
              alt="Certified technician performing ultrasonic thickness measurement"
              width={1280}
              height={896}
              loading="lazy"
              className="relative rounded-xl w-full aspect-[4/3] object-cover"
              style={{ boxShadow: "var(--shadow-diffuse)" }}
            />
            {/* floating stat — pb-8 on parent prevents clipping */}
            <div
              className="absolute -bottom-5 left-6 bg-card border border-border rounded-xl px-5 py-3.5 flex items-center gap-3.5"
              style={{ boxShadow: "var(--shadow-elevated)" }}
            >
              <span className="text-3xl font-bold tracking-tighter text-primary leading-none">27</span>
              <div className="text-xs text-muted-foreground leading-snug">
                years of
                <br />
                experience
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ─── Activities preview ─── */}
      <RevealSection as="section" className="py-24 bg-surface">
        <div className="container-pro">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="overline mb-3">{t("home.activitiesLabel")}</p>
              <h2 className="text-3xl tracking-tighter text-primary">{t("home.activitiesTitle")}</h2>
            </div>
            <Link
              to="/activities"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-[1.618fr_1fr] gap-4">
            {/* NDT */}
            <Link
              to="/activities"
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-brand-red/30 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red px-2.5 py-1 bg-brand-red/8 rounded">
                  NDT
                </span>
                <ArrowRight className="w-4 h-4 text-border group-hover:text-brand-red group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-3">{t("home.ndt.title")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t("home.ndt.desc")}</p>
            </Link>

            {/* UTM */}
            <Link
              to="/activities"
              className="group relative bg-primary rounded-xl p-8 hover:opacity-95 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 px-2.5 py-1 bg-white/10 rounded">
                  UTM
                </span>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-3 text-white">{t("home.utm.title")}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{t("home.utm.desc")}</p>
            </Link>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
