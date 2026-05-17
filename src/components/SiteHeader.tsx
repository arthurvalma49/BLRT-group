import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-symbol.png";
import { useLanguage } from "@/i18n/LanguageContext";
import MagneticButton from "@/components/MagneticButton";

const languages = ["EN", "RU", "ET"] as const;

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/activities", label: t("nav.activities") },
    { to: "/our-values", label: t("nav.values") },
    { to: "/contacts", label: t("nav.contacts") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[hsl(var(--background)/0.96)] backdrop-blur border-b border-border">
      <div className="container-pro flex items-center justify-between h-16">
        <Link to="/" onClick={close} className="flex items-center gap-3 py-2" aria-label="Tehnomet Survey home">
          <img
            src={logo}
            alt="Tehnomet Survey"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <div className="flex flex-col leading-none gap-0.5">
            <span className="text-sm font-bold text-primary tracking-tight">TEHNOMET SURVEY</span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-[0.15em] uppercase">
              BLRT Grupp
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
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
        </nav>

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
          <MagneticButton>
            <Link
              to="/contacts"
              className="bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold px-5 py-2.5 rounded transition-colors btn-tactile inline-block"
              style={{ boxShadow: "var(--shadow-red)" }}
            >
              {t("nav.requestSurvey")}
            </Link>
          </MagneticButton>
        </div>

        <button
          className="lg:hidden p-2 text-foreground rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu — full-screen overlay */}
      {mobileOpen && (
        <>
          {/* backdrop */}
          <div
            className="lg:hidden fixed inset-0 top-16 bg-black/20 z-40"
            onClick={close}
            aria-hidden
          />
          <div className="lg:hidden fixed left-0 right-0 top-16 z-50 bg-background border-t border-border shadow-lg">
            <nav className="container-pro py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
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
              <div className="flex items-center justify-between pt-3 border-t border-border mt-2">
                <div className="flex items-center gap-0.5 border border-border rounded-md p-0.5">
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
                <Link
                  to="/contacts"
                  onClick={close}
                  className="bg-brand-red text-white text-xs font-bold px-5 py-3 rounded"
                >
                  {t("nav.requestSurvey")}
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
