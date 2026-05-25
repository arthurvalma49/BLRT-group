import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-symbol.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { businesses, sectorGroups } from "@/data/businesses";

const languages = ["EN", "RU", "ET"] as const;

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);
  const [mobileCompaniesOpen, setMobileCompaniesOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!companiesOpen) return;
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setCompaniesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [companiesOpen]);

  // Close dropdown on ESC
  useEffect(() => {
    if (!companiesOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCompaniesOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [companiesOpen]);

  const close = () => {
    setMobileOpen(false);
    setMobileCompaniesOpen(false);
  };

  const mainNavItems = [
    { to: "/",          label: t("nav.home"),    end: true },
    { to: "/about",     label: t("nav.about"),   end: false },
    { to: "/our-values",label: t("nav.values"),  end: false },
    { to: "/contacts",  label: t("nav.contacts"),end: false },
  ];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[hsl(var(--background)/0.96)] backdrop-blur border-b border-border"
    >
      <div className="container-pro flex items-center justify-between h-16">
        {/* ─── Logo ─── */}
        <Link to="/" onClick={close} className="flex items-center gap-3 py-2 shrink-0" aria-label="BLRT Grupp home">
          <img
            src={logo}
            alt="BLRT Grupp"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <div className="flex flex-col leading-none gap-0.5">
            <span className="text-sm font-bold text-primary tracking-tight">BLRT GRUPP</span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-[0.12em] uppercase">
              Industrial Group · Est. 1912
            </span>
          </div>
        </Link>

        {/* ─── Desktop nav ─── */}
        <nav className="hidden lg:flex items-center gap-7">
          {mainNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `relative py-1 text-sm font-medium transition-colors duration-200 group ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-brand-red transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* Companies dropdown trigger */}
          <button
            onClick={() => setCompaniesOpen((v) => !v)}
            className={`relative flex items-center gap-1 py-1 text-sm font-medium transition-colors duration-200 group ${
              companiesOpen ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("nav.companies")}
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${companiesOpen ? "rotate-180" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] bg-brand-red transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                companiesOpen ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </button>
        </nav>

        {/* ─── Desktop right ─── */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-0.5 border border-border rounded-md p-0.5">
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 text-[11px] font-semibold rounded transition-colors ${
                  lang === l
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Mobile hamburger ─── */}
        <button
          className="lg:hidden p-2 text-foreground rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ─── Megadropdown (desktop) ─── */}
      {companiesOpen && (
        <div className="hidden lg:block absolute left-0 right-0 top-full bg-background border-b border-border z-50"
          style={{ boxShadow: "var(--shadow-elevated)" }}
        >
          <div className="container-pro py-8">
            <div className="grid grid-cols-3 gap-x-12 gap-y-8">
              {sectorGroups.map((sector) => {
                const sectorBiz = sector.slugs
                  .map((s) => businesses.find((b) => b.slug === s))
                  .filter(Boolean);
                return (
                  <div key={sector.id}>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3 pb-2 border-b border-border">
                      {sector.label}
                    </div>
                    <ul className="space-y-0.5">
                      {sectorBiz.map((biz) => biz && (
                        <li key={biz.slug}>
                          <Link
                            to={`/company/${biz.slug}`}
                            onClick={() => setCompaniesOpen(false)}
                            className="flex items-center gap-2 py-1.5 px-1 text-sm text-muted-foreground hover:text-primary rounded transition-colors duration-150 group"
                          >
                            <span className="w-1 h-1 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-150 shrink-0" />
                            {biz.name}
                            {biz.countries.length > 2 && (
                              <span className="ml-auto text-[10px] text-muted-foreground/60 font-medium">{biz.countries}</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ─── Mobile menu ─── */}
      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 top-16 bg-black/20 z-40"
            onClick={close}
            aria-hidden
          />
          <div className="lg:hidden fixed left-0 right-0 top-16 z-50 bg-background border-t border-border shadow-lg max-h-[calc(100dvh-4rem)] overflow-y-auto">
            <nav className="container-pro py-4 flex flex-col gap-1">
              {mainNavItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={close}
                  className={({ isActive }) =>
                    `px-3 py-3 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "bg-brand-red/6 text-brand-red"
                        : "text-foreground hover:bg-muted"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Companies accordion */}
              <button
                onClick={() => setMobileCompaniesOpen((v) => !v)}
                className="flex items-center justify-between px-3 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
              >
                {t("nav.companies")}
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                    mobileCompaniesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileCompaniesOpen && (
                <div className="pl-3 pr-2 pb-2 space-y-4">
                  {sectorGroups.map((sector) => {
                    const sectorBiz = sector.slugs
                      .map((s) => businesses.find((b) => b.slug === s))
                      .filter(Boolean);
                    return (
                      <div key={sector.id}>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground px-3 py-1.5">
                          {sector.label}
                        </div>
                        {sectorBiz.map((biz) => biz && (
                          <NavLink
                            key={biz.slug}
                            to={`/company/${biz.slug}`}
                            onClick={close}
                            className={({ isActive }) =>
                              `block px-3 py-2.5 text-sm rounded-md transition-colors ${
                                isActive
                                  ? "text-brand-red bg-brand-red/6"
                                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
                              }`
                            }
                          >
                            {biz.name}
                          </NavLink>
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="pt-3 border-t border-border mt-2">
                <div className="flex items-center gap-0.5 border border-border rounded-md p-0.5 w-fit">
                  {languages.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-3 py-1.5 text-[11px] font-semibold rounded transition-colors min-h-[36px] ${
                        lang === l ? "bg-primary text-white" : "text-muted-foreground"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
