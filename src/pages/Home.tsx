import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight,
  Building2, Globe2, Layers, Landmark,
  Wrench, Ship, Search, Zap, Anchor,
} from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import RevealSection from "@/components/RevealSection";
import heroVessel from "@/assets/hero-vessel.jpg";
import inspectorWork from "@/assets/inspector-work.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { businesses, sectorGroups } from "@/data/businesses";

const sectorThemes: Record<string, {
  accentBg: string;
  accentText: string;
  nameHover: string;
  borderHover: string;
}> = {
  repair:      { accentBg: "bg-sky-500/12",     accentText: "text-sky-300",     nameHover: "group-hover:text-sky-400",     borderHover: "group-hover:border-sky-400/30"     },
  building:    { accentBg: "bg-slate-500/12",   accentText: "text-slate-300",   nameHover: "group-hover:text-slate-300",   borderHover: "group-hover:border-slate-400/30"   },
  inspection:  { accentBg: "bg-rose-500/12",    accentText: "text-rose-300",    nameHover: "group-hover:text-rose-400",    borderHover: "group-hover:border-rose-400/30"    },
  engineering: { accentBg: "bg-amber-500/12",   accentText: "text-amber-300",   nameHover: "group-hover:text-amber-400",   borderHover: "group-hover:border-amber-400/30"   },
  materials:   { accentBg: "bg-emerald-500/12", accentText: "text-emerald-300", nameHover: "group-hover:text-emerald-400", borderHover: "group-hover:border-emerald-400/30" },
  port:        { accentBg: "bg-cyan-500/12",    accentText: "text-cyan-300",    nameHover: "group-hover:text-cyan-400",    borderHover: "group-hover:border-cyan-400/30"    },
};

const sectorIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  repair:      Wrench,
  building:    Ship,
  inspection:  Search,
  engineering: Zap,
  materials:   Layers,
  port:        Anchor,
};

const facts = [
  { label: "Headquarters", value: "Kopli, Tallinn" },
  { label: "Founded",      value: "1912" },
  { label: "Companies",    value: "17 across 6 sectors" },
  { label: "Markets",      value: "EE · LV · LT · FI · NO" },
];

function StatNumber({ target, animate }: { target: number; animate: boolean }) {
  const [display, setDisplay] = useState(animate ? 0 : target);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!animate) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const t0 = performance.now();
        const dur = 900;
        const tick = (now: number) => {
          const p = Math.min((now - t0) / dur, 1);
          setDisplay(Math.round((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, animate]);

  return <span ref={ref}>{display}</span>;
}

const tickerItems = [...sectorGroups, ...sectorGroups].map((s) => s.label);

export default function Home() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);

  const { scrollY } = useScroll();
  const heroImgY = useTransform(scrollY, [0, 700], [0, 160]);
  const heroTextY = useTransform(scrollY, [0, 700], [0, -55]);

  // Direction B: animate SVG turbulence baseFrequency for organic hull-steel displacement
  useEffect(() => {
    if (prefersReducedMotion || !turbulenceRef.current) return;
    const el = turbulenceRef.current;
    let frame: number;
    let t = 0;
    const tick = () => {
      t += 0.0003;
      const freqX = 0.008 + Math.sin(t) * 0.003;
      const freqY = 0.010 + Math.cos(t * 0.71) * 0.0025;
      el.setAttribute("baseFrequency", `${freqX.toFixed(5)} ${freqY.toFixed(5)}`);
      frame = requestAnimationFrame(tick);
    };
    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else frame = requestAnimationFrame(tick);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [prefersReducedMotion]);

  const stats = [
    { value: 17,   label: t("blrt.stat.companies"), animate: true,  Icon: Building2 },
    { value: 5,    label: t("blrt.stat.countries"),  animate: true,  Icon: Globe2    },
    { value: 6,    label: t("blrt.stat.sectors"),    animate: true,  Icon: Layers    },
    { value: 1912, label: t("blrt.stat.founded"),    animate: false, Icon: Landmark  },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[100dvh] bg-[hsl(var(--primary-deep))] text-white overflow-hidden">
        {/* SVG filter definition — Direction B */}
        <svg style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }} aria-hidden>
          <defs>
            <filter
              id="hero-displacement"
              x="-8%" y="-8%" width="116%" height="116%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                ref={turbulenceRef}
                type="fractalNoise"
                baseFrequency="0.008 0.010"
                numOctaves={4}
                seed={7}
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale={14}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>

        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden />

        {/* Ship — scroll parallax + hull displacement filter */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[48%] pointer-events-none overflow-hidden">
          <motion.div
            style={{ y: heroImgY }}
            className="absolute -top-[12%] left-0 right-0 h-[124%]"
          >
            {/* Displacement applied to wrapper div to avoid combining CSS filter functions with url() */}
            <div
              className="w-full h-full"
              style={{ filter: prefersReducedMotion ? undefined : "url(#hero-displacement)" }}
            >
              <img
                src={heroVessel}
                alt="Marine vessel at sea"
                width={1920}
                height={1088}
                className="w-full h-full object-cover"
                style={{ filter: "saturate(1.3) brightness(0.78) contrast(1.05)" }}
              />
            </div>
          </motion.div>

          {/* Gradient blends */}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-deep))] via-[hsl(218_68%_12%/0.62)] to-[hsl(218_68%_12%/0.04)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(218_68%_12%/0.45)] via-transparent to-[hsl(218_68%_12%/0.58)]" />

          {/* Wave layer 1 — deep navy, slowest */}
          <div className="absolute bottom-10 left-0 right-0 overflow-hidden" style={{ height: "110px" }}>
            <div className="wave-slow w-[200%] h-full flex">
              {[0, 1].map((k) => (
                <svg key={k} viewBox="0 0 720 110" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0">
                  <path d="M0,55 C90,110 180,0 270,55 C360,110 450,0 540,55 C630,110 720,55 720,55 L720,110 L0,110Z"
                        fill="hsl(218 68% 10% / 0.65)" />
                </svg>
              ))}
            </div>
          </div>

          {/* Wave layer 2 — sky blue tint, medium speed */}
          <div className="absolute bottom-10 left-0 right-0 overflow-hidden" style={{ height: "75px" }}>
            <div className="wave-medium w-[200%] h-full flex" style={{ animationDelay: "-4s" }}>
              {[0, 1].map((k) => (
                <svg key={k} viewBox="0 0 720 75" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0">
                  <path d="M0,38 C120,75 240,0 360,38 C480,75 600,0 720,38 L720,75 L0,75Z"
                        fill="hsl(210 75% 52% / 0.15)" />
                </svg>
              ))}
            </div>
          </div>

          {/* Wave layer 3 — lightest, fastest */}
          <div className="absolute bottom-10 left-0 right-0 overflow-hidden" style={{ height: "48px" }}>
            <div className="wave-fast w-[200%] h-full flex" style={{ animationDelay: "-2s" }}>
              {[0, 1].map((k) => (
                <svg key={k} viewBox="0 0 720 48" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0">
                  <path d="M0,24 C60,48 120,0 180,24 C240,48 300,0 360,24 C420,48 480,0 540,24 C600,48 660,0 720,24 L720,48 L0,48Z"
                        fill="hsl(210 80% 65% / 0.09)" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="container-pro relative min-h-[100dvh] flex items-center">
          <motion.div
            style={{ y: heroTextY }}
            className="w-full lg:w-[58%] py-24 lg:py-0"
          >
            <div className="hero-in hero-in-1 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/12 bg-white/5 text-[10px] font-semibold uppercase tracking-[0.2em] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              {t("blrt.badge")}
            </div>

            <h1 className="hero-in hero-in-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-none text-white mb-6">
              {t("blrt.heroTitle1")}
              <br />
              <span className="text-brand-red">{t("blrt.heroTitle2")}</span>
            </h1>

            <p className="hero-in hero-in-3 text-base text-white/60 max-w-[50ch] mb-10 leading-relaxed font-normal">
              {t("blrt.heroDesc")}
            </p>

            <div className="hero-in hero-in-4 flex flex-wrap gap-3">
              <MagneticButton>
                <Link
                  to="/about"
                  className="btn-shine btn-tactile inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-semibold px-6 py-3 rounded text-sm transition-colors"
                  style={{ boxShadow: "var(--shadow-red)" }}
                >
                  {t("blrt.learnMore")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
              <Link
                to="/contacts"
                className="btn-shine inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold px-6 py-3 rounded text-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                {t("blrt.contactUs")}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center" aria-hidden>
          <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent animate-float" />
        </div>

        {/* Sector ticker */}
        <div className="absolute bottom-0 left-0 right-0 h-10 border-t border-white/6 overflow-hidden flex items-center" aria-hidden>
          <div className="marquee-track">
            {tickerItems.map((name, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 px-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30"
              >
                <span className="w-1 h-1 rounded-full bg-brand-red/50 shrink-0" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats — 3D entrance + Direction A: blueprint annotation lines ─── */}
      <RevealSection as="section" className="py-16 bg-[hsl(var(--navy-section))]">
        <div className="container-pro" style={{ perspective: "1200px" }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ value, label, animate, Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: 22 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "center top" }}
                className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/8 p-7 flex flex-col gap-2"
              >
                <Icon className="absolute right-3 top-1/2 -translate-y-1/2 w-20 h-20 text-white/5 pointer-events-none" aria-hidden />
                <div className="w-10 h-10 rounded-xl bg-brand-red/20 flex items-center justify-center mb-1 shrink-0">
                  <Icon className="w-5 h-5 text-brand-red" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-none">
                  <StatNumber target={value} animate={animate} />
                </div>
                <div className="text-sm text-white/60 font-medium">{label}</div>

                {/* Direction A: blueprint dimension annotation */}
                {!prefersReducedMotion && (
                  <motion.svg
                    className="w-full mt-3 pointer-events-none"
                    style={{ height: 14 }}
                    viewBox="0 0 100 14"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    {/* Main measurement line */}
                    <motion.line
                      x1="4" y1="7" x2="96" y2="7"
                      stroke="hsla(4,82%,58%,0.28)"
                      strokeWidth="0.6"
                      vectorEffect="non-scaling-stroke"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, amount: 1 }}
                      transition={{ duration: 0.9, delay: i * 0.12 + 0.65, ease: [0.16, 1, 0.3, 1] }}
                    />
                    {/* Left terminator */}
                    <motion.line
                      x1="4" y1="2" x2="4" y2="12"
                      stroke="hsla(4,82%,58%,0.28)"
                      strokeWidth="0.6"
                      vectorEffect="non-scaling-stroke"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: i * 0.12 + 1.5 }}
                    />
                    {/* Right terminator */}
                    <motion.line
                      x1="96" y1="2" x2="96" y2="12"
                      stroke="hsla(4,82%,58%,0.28)"
                      strokeWidth="0.6"
                      vectorEffect="non-scaling-stroke"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: i * 0.12 + 1.5 }}
                    />
                  </motion.svg>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── Companies — Direction C: classification manifest ─── */}
      <RevealSection as="section" className="py-24 bg-background">
        <div className="container-pro">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="overline mb-3">{t("blrt.companiesLabel")}</p>
              <h2 className="text-3xl tracking-tighter text-foreground heading-underline">{t("blrt.companiesTitle")}</h2>
            </div>
          </div>

          {/* Sector quick-jump */}
          <div className="flex flex-wrap gap-2 mb-10">
            {sectorGroups.map((sector) => {
              const qTheme = sectorThemes[sector.id] ?? sectorThemes.inspection;
              const QIcon = sectorIcons[sector.id] ?? Anchor;
              return (
                <a
                  key={sector.id}
                  href={`#sector-${sector.id}`}
                  className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-lg transition-opacity duration-150 hover:opacity-75 ${qTheme.accentBg} ${qTheme.accentText}`}
                >
                  <QIcon className="w-3 h-3" />
                  {sector.label}
                </a>
              );
            })}
          </div>

          <div className="space-y-12">
            {sectorGroups.map((sector) => {
              const theme = sectorThemes[sector.id] ?? sectorThemes.inspection;
              const SectorIcon = sectorIcons[sector.id] ?? Anchor;
              const sectorBiz = sector.slugs
                .map((s) => businesses.find((b) => b.slug === s))
                .filter(Boolean);

              return (
                <div key={sector.id} id={`sector-${sector.id}`}>
                  {/* Sector badge stamps in */}
                  <motion.div
                    className="flex items-center gap-3 mb-5"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-lg ${theme.accentBg} ${theme.accentText}`}
                      initial={{ opacity: 0, scale: 0.86 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <SectorIcon className="w-3 h-3" />
                      {sector.label}
                    </motion.span>
                    <span className="text-[10px] font-medium tabular-nums text-muted-foreground/70">
                      {sectorBiz.length}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </motion.div>

                  {/* Card grid with scanner sweep */}
                  <div className="relative">
                    {/* Direction C: scanner line sweeps left→right before cards assemble */}
                    {!prefersReducedMotion && (
                      <motion.div
                        className="absolute inset-x-0 h-px pointer-events-none z-10"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, hsl(4 82% 58% / 0.55) 50%, transparent 100%)",
                          top: 0,
                          originX: 0,
                        }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        aria-hidden
                      />
                    )}

                    {/* Cards assemble after scanner completes */}
                    <motion.div
                      className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.07,
                            delayChildren: prefersReducedMotion ? 0 : 0.55,
                          },
                        },
                      }}
                    >
                      {sectorBiz.map((biz) => biz && (
                        <motion.div
                          key={biz.slug}
                          variants={{
                            hidden: { opacity: 0, y: 18, scale: 0.97 },
                            visible: {
                              opacity: 1, y: 0, scale: 1,
                              transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                            },
                          }}
                          className="group"
                        >
                          <Link
                            to={`/company/${biz.slug}`}
                            className={`flex flex-col overflow-hidden rounded-xl border border-border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-elevated hover:-translate-y-0.5 h-full ${theme.borderHover}`}
                          >
                            {/* Card header — dark steel plate */}
                            <div className="relative h-[72px] bg-gradient-to-br from-[hsl(218_25%_16%)] to-[hsl(218_28%_12%)] overflow-hidden flex-shrink-0">
                              <div
                                className="absolute inset-0"
                                style={{
                                  backgroundImage: "radial-gradient(hsl(218 18% 55% / 0.12) 1px, transparent 1px)",
                                  backgroundSize: "18px 18px",
                                }}
                              />
                              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-white/5" />
                              <div className="absolute -top-5 -left-5 w-14 h-14 rounded-full bg-[hsl(218_68%_5%/0.35)]" />
                              <span className="absolute top-2 right-2.5 text-[9px] font-bold tracking-[0.14em] text-white/35 uppercase">
                                {biz.countries}
                              </span>
                              <div className="absolute bottom-2 left-3 w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center">
                                <SectorIcon className="w-3.5 h-3.5 text-muted-foreground" />
                              </div>
                            </div>

                            {/* Card body */}
                            <div className="p-4 flex flex-col gap-1.5 flex-1 bg-card">
                              <div className="flex items-start justify-between gap-2">
                                <span className={`text-sm font-semibold text-primary transition-colors duration-200 leading-tight ${theme.nameHover}`}>
                                  {biz.name}
                                </span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/35 group-hover:text-brand-red transition-colors duration-200 shrink-0 mt-0.5" />
                              </div>
                              <span className="text-xs text-muted-foreground leading-snug line-clamp-2">{biz.tagline}</span>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── Photo band divider ─── */}
      <div className="relative h-36 overflow-hidden">
        <img
          src={heroVessel}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "saturate(1.5) brightness(0.42)" }}
        />
        <div className="absolute inset-0" style={{ background: "hsl(218 68% 12% / 0.52)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/65 text-[11px] font-bold tracking-[0.35em] uppercase">
            BLRT Grupp · Industrial Group · Est. 1912
          </span>
        </div>
      </div>

      {/* ─── About preview ─── */}
      <RevealSection as="section" className="py-24 bg-[hsl(var(--navy-section))]">
        <div className="container-pro grid lg:grid-cols-[1.15fr_1fr] gap-16 items-start">
          <div className="lg:pt-4">
            <p className="overline mb-4">{t("blrt.aboutLabel")}</p>
            <h2 className="text-3xl lg:text-4xl mb-7 tracking-tighter heading-underline text-white">
              {t("blrt.aboutTitle")}
            </h2>
            <p className="text-base text-white/65 leading-relaxed mb-4 max-w-[65ch]">
              {t("blrt.aboutP1")}
            </p>
            <p className="text-base text-white/65 leading-relaxed mb-8 max-w-[65ch]">
              {t("blrt.aboutP2")}
            </p>
            <Link
              to="/about"
              className="btn-fill btn-tactile inline-flex items-center gap-2 border border-brand-red text-brand-red font-semibold px-5 py-2.5 rounded text-sm"
            >
              {t("blrt.learnMore")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Inspector photo with overlaid fact badges */}
          <div className="relative rounded-2xl overflow-hidden min-h-[340px] lg:min-h-[420px]">
            <img
              src={inspectorWork}
              alt="Inspector at work on a marine vessel"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "saturate(1.15) brightness(0.85)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218_68%_10%/0.90)] via-[hsl(218_68%_12%/0.35)] to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-3 py-2.5"
                >
                  <div className="text-white text-sm font-bold leading-tight">{fact.value}</div>
                  <div className="text-white/55 text-xs mt-0.5">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
