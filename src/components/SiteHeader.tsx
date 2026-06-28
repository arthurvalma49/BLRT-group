import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/BLRT-LOGO.png";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const languages: Lang[] = ["EN", "ET", "RU", "LT", "LV", "FI", "PL"];


function LangPicker() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onMouse = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onMouse);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouse);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Select language"
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`flex items-center gap-0.5 px-1.5 py-1 rounded text-[11px] font-bold tracking-widest transition-all duration-150 ${
          open
            ? "text-foreground bg-muted"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
        }`}
      >
        {lang}
        <ChevronDown
          className={`w-2.5 h-2.5 opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-[calc(100%+6px)] bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden py-0.5"
        >
          {languages.map((l) => {
            const isActive = l === lang;
            return (
              <button
                key={l}
                role="option"
                aria-selected={isActive}
                onClick={() => { setLang(l); setOpen(false); }}
                className={`w-full px-3 py-1 text-[11px] font-bold tracking-widest text-left transition-colors duration-100 ${
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {l}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative py-1 text-sm font-medium transition-colors duration-200 group ${
    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
  }`;

function NavUnderline({ isActive }: { isActive: boolean }) {
  return (
    <span
      className={`absolute bottom-0 left-0 h-[1.5px] bg-brand-red transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isActive ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  const navBefore = [
    { to: "/about",          label: t("nav.about"),          end: false },
    { to: "/sustainability", label: t("nav.sustainability"), end: false },
    { to: "/news",           label: t("nav.news"),           end: false },
  ];

  const navAfter = [
    { to: "/careers",  label: t("nav.careers"),  end: false },
    { to: "/contacts", label: t("nav.contacts"), end: false },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-[hsl(var(--background)/0.96)] backdrop-blur border-b border-border"
    >
      <div className="container-pro flex items-center justify-between h-16">
        {/* ─── Left: Logo + primary nav ─── */}
        <div className="hidden lg:flex items-center gap-7">
          <Link to="/" onClick={close} className="group flex items-center gap-3 py-2 shrink-0 transition-opacity duration-200 hover:opacity-80" aria-label="BLRT Grupp home">
            <img src={logo} alt="BLRT Grupp" width={36} height={36} className="h-9 w-9 object-contain transition-transform duration-200 group-hover:scale-110" />
            <div className="flex flex-col leading-none gap-0.5">
              <span className="text-sm font-bold text-primary tracking-tight">BLRT grupp</span>
              <span className="text-[10px] font-medium text-muted-foreground tracking-[0.12em] uppercase">
                Industrial Group · Est. 1912
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-7">
            {navBefore.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={navLinkClass}>
                {({ isActive }) => (<>{item.label}<NavUnderline isActive={isActive} /></>)}
              </NavLink>
            ))}

            <NavLink to="/companies" end={false} className={navLinkClass}>
              {({ isActive }) => (<>{t("nav.companies")}<NavUnderline isActive={isActive} /></>)}
            </NavLink>
          </nav>
        </div>

        {/* ─── Mobile: Logo only ─── */}
        <Link to="/" onClick={close} className="lg:hidden group flex items-center gap-3 py-2 shrink-0 transition-opacity duration-200 hover:opacity-80" aria-label="BLRT Grupp home">
          <img src={logo} alt="BLRT Grupp" width={36} height={36} className="h-9 w-9 object-contain transition-transform duration-200 group-hover:scale-110" />
          <div className="flex flex-col leading-none gap-0.5">
            <span className="text-sm font-bold text-primary tracking-tight">BLRT grupp</span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-[0.12em] uppercase">
              Industrial Group · Est. 1912
            </span>
          </div>
        </Link>

        {/* ─── Right: secondary nav + language ─── */}
        <div className="hidden lg:flex items-center gap-7">
          <nav className="flex items-center gap-7">
            {navAfter.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={navLinkClass}>
                {({ isActive }) => (<>{item.label}<NavUnderline isActive={isActive} /></>)}
              </NavLink>
            ))}
          </nav>
          <LangPicker />
        </div>

        {/* ─── Mobile right: language + hamburger ─── */}
        <div className="lg:hidden flex items-center gap-2">
          <LangPicker />
          <button
            className="p-2 text-foreground rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ─── Mobile menu ─── */}
      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 top-16 bg-[hsl(218_35%_4%/0.55)] z-40"
            onClick={close}
            aria-hidden
          />
          <div className="lg:hidden fixed left-0 right-0 top-16 z-50 bg-background border-t border-border shadow-lg max-h-[calc(100dvh-4rem)] overflow-y-auto">
            <nav className="container-pro py-4 flex flex-col gap-1">
              {navBefore.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={close}
                  className={({ isActive }) =>
                    `px-3 py-3 text-sm font-medium rounded-md transition-colors ${
                      isActive ? "bg-brand-red/6 text-brand-red" : "text-foreground hover:bg-muted"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <NavLink
                to="/companies"
                end={false}
                onClick={close}
                className={({ isActive }) =>
                  `px-3 py-3 text-sm font-medium rounded-md transition-colors ${
                    isActive ? "bg-brand-red/6 text-brand-red" : "text-foreground hover:bg-muted"
                  }`
                }
              >
                {t("nav.companies")}
              </NavLink>

              {navAfter.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={close}
                  className={({ isActive }) =>
                    `px-3 py-3 text-sm font-medium rounded-md transition-colors ${
                      isActive ? "bg-brand-red/6 text-brand-red" : "text-foreground hover:bg-muted"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
