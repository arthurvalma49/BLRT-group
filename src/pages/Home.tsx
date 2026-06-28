import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight,
  Building2, Globe2, Layers, Landmark,
  Leaf, Wind, Droplets,
} from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import RevealSection from "@/components/RevealSection";
import NewsCard from "@/components/NewsCard";
import ProjectCard from "@/components/ProjectCard";
import PresenceMap from "@/components/PresenceMap";
import heroVessel from "@/assets/hero-vessel.jpg";
import inspectorWork from "@/assets/inspector-work.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { sectorGroups } from "@/data/businesses";
import { news } from "@/data/news";
import { projects } from "@/data/projects";

const facts = [
  { label: "Headquarters", value: "Kopli, Tallinn" },
  { label: "Founded",      value: "1912" },
  { label: "Companies",    value: "24 across 6 sectors" },
  { label: "Markets",      value: "EE · LV · LT · FI" },
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
    { value: 24,   label: t("blrt.stat.companies"), animate: true,  Icon: Building2 },
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

      {/* ─── Presence Map ─── */}
      <PresenceMap />

      {/* ─── Sustainability teaser ─── */}
      <RevealSection as="section" className="py-20 bg-[hsl(var(--primary-deep))] border-t border-white/8">
        <div className="container-pro grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          <div>
            <p className="overline text-white/45 mb-4">{t("home.sustain.label")}</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter leading-tight text-white mb-5">
              {t("home.sustain.title")}
            </h2>
            <p className="text-sm text-white/55 leading-relaxed max-w-[52ch] mb-8">
              {t("home.sustain.desc")}
            </p>
            <Link
              to="/sustainability"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-brand-red text-white text-sm font-semibold hover:bg-brand-red/90 transition-colors shadow-[var(--shadow-red)]"
            >
              {t("home.sustain.cta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { Icon: Leaf,     stat: "2,150 m²",    label: t("sustainability.pillar.environment"), sub: "Enclosed weatherproof treatment sheds" },
              { Icon: Wind,     stat: "World's 1st", label: t("sustainability.pillar.people"),      sub: "Rotor sail ferry fitted at BLRT yards" },
              { Icon: Droplets, stat: "MC4000",      label: t("sustainability.pillar.community"),   sub: "First autonomous dock cleaning robot" },
            ].map(({ Icon, stat, label, sub }) => (
              <div key={stat} className="flex items-center gap-5 bg-white/5 border border-white/8 rounded-xl px-5 py-4">
                <div className="w-9 h-9 rounded-lg bg-brand-red/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-red" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35 mb-0.5">{label}</div>
                  <div className="text-xl font-bold tracking-tighter text-white leading-none">{stat}</div>
                  <div className="text-xs text-white/40 mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── News preview ─── */}
      <RevealSection as="section" className="py-24 bg-background border-t border-border/50">
        <div className="container-pro">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="overline mb-3">{t("nav.news")}</p>
              <h2 className="text-3xl tracking-tighter text-foreground heading-underline">
                {t("home.news.title")}
              </h2>
            </div>
            <Link
              to="/news"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red/70 transition-colors shrink-0"
            >
              {t("home.news.viewall")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {news.slice(0, 3).map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red/70 transition-colors"
            >
              {t("home.news.viewall")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* ─── Projects preview ─── */}
      <RevealSection as="section" className="py-24 bg-surface/30 border-t border-border/50">
        <div className="container-pro">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="overline mb-3">{t("nav.projects")}</p>
              <h2 className="text-3xl tracking-tighter text-foreground heading-underline">
                {t("home.projects.title")}
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red/70 transition-colors shrink-0"
            >
              {t("home.projects.viewall")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.filter((p) => p.featured).slice(0, 3).map((p) => (
              <ProjectCard key={p.id} project={p} variant="grid" />
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red/70 transition-colors"
            >
              {t("home.projects.viewall")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* ─── Careers CTA band ─── */}
      <RevealSection as="section" className="py-20 bg-[hsl(var(--primary-deep))] border-t border-white/8">
        <div className="container-pro flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="overline text-white/45 mb-3">{t("nav.careers")}</p>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter text-white mb-2">
              {t("home.careers.title")}
            </h2>
            <p className="text-sm text-white/60 max-w-xl leading-relaxed">
              {t("home.careers.sub")}
            </p>
          </div>
          <Link
            to="/careers"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded bg-brand-red text-white text-sm font-semibold hover:bg-brand-red/90 transition-colors shadow-[var(--shadow-red)] whitespace-nowrap"
          >
            {t("home.careers.cta")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </RevealSection>
    </>
  );
}
