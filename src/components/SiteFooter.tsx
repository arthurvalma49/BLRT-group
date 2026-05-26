import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoSail from "@/assets/logo-sail-white.svg";
import { useLanguage } from "@/i18n/LanguageContext";
import { businesses } from "@/data/businesses";

// A short curated list of notable companies for the footer
const featuredSlugs = [
  "tallinn-shipyard",
  "tehnomet-survey",
  "elme-metall",
  "blrt-era",
  "marketex-marine",
  "mereabi",
];

export default function SiteFooter() {
  const { t } = useLanguage();
  const featuredCompanies = featuredSlugs
    .map((s) => businesses.find((b) => b.slug === s))
    .filter(Boolean);

  return (
    <footer className="bg-[hsl(var(--primary-deep))] text-white mt-auto">
      <div className="h-px bg-brand-red/40 w-full" />

      <div className="container-pro pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr] gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[hsl(var(--primary))] flex items-center justify-center shrink-0">
              <img
                src={logoSail}
                alt="BLRT Grupp"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col leading-none gap-0.5">
              <span className="text-sm font-bold tracking-tight text-white">BLRT GRUPP</span>
              <span className="text-[10px] font-medium text-white/60 tracking-[0.12em] uppercase">
                Industrial Group · Est. 1912
              </span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/65 max-w-xs">
            {t("footer.blrtTagline")}
          </p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 mb-5">
            {t("footer.pages")}
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <Link to="/" className="hover:text-white transition-colors duration-200">
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors duration-200">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link to="/our-values" className="hover:text-white transition-colors duration-200">
                {t("nav.values")}
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:text-white transition-colors duration-200">
                {t("nav.contacts")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Companies */}
        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 mb-5">
            {t("footer.companies")}
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            {featuredCompanies.map((biz) => biz && (
              <li key={biz.slug}>
                <Link
                  to={`/company/${biz.slug}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {biz.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 mb-5">
            {t("footer.contact")}
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 text-white/55">
              <Phone className="w-4 h-4 mt-0.5 text-brand-red shrink-0" />
              <a href="tel:+3726102997" className="hover:text-white transition-colors duration-200">
                +372 610 2997
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/55">
              <Mail className="w-4 h-4 mt-0.5 text-brand-red shrink-0" />
              <a
                href="mailto:info@blrt.ee"
                className="hover:text-white transition-colors duration-200 break-all"
              >
                info@blrt.ee
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/55">
              <MapPin className="w-4 h-4 mt-0.5 text-brand-red shrink-0" />
              <span>
                Kopli 103, Tallinn
                <br />
                Estonia · BLRT Grupp
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-pro py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <span>© {new Date().getFullYear()} BLRT Grupp. {t("footer.rights")}</span>
          <span className="font-semibold tracking-[0.2em] uppercase text-[10px]">
            {t("footer.blrtMotto")}
          </span>
        </div>
      </div>
    </footer>
  );
}
