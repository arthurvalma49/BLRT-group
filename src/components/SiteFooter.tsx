import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-navy.png";
import { useLanguage } from "@/i18n/LanguageContext";

export default function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[hsl(var(--primary-deep))] text-white mt-auto">
      <div className="h-px bg-brand-red/40 w-full" />

      <div className="container-pro pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr] gap-10">
        <div>
          <img
            src={logo}
            alt="Tehnomet Survey"
            width={180}
            height={64}
            className="h-20 w-auto object-contain brightness-0 invert mb-6"
            loading="lazy"
          />
          <p className="text-sm leading-relaxed text-white/45 max-w-xs">
            {t("footer.tagline")}
          </p>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35 mb-5">
            {t("footer.pages")}
          </h4>
          <ul className="space-y-3 text-sm text-white/55">
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
              <Link to="/activities" className="hover:text-white transition-colors duration-200">
                {t("nav.activities")}
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:text-white transition-colors duration-200">
                {t("nav.contacts")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35 mb-5">
            {t("footer.services")}
          </h4>
          <ul className="space-y-3 text-sm text-white/55">
            <li>{t("footer.service.ndt")}</li>
            <li>{t("footer.service.utm")}</li>
            <li>{t("footer.service.steel")}</li>
            <li>{t("footer.service.class")}</li>
            <li>{t("footer.service.repair")}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35 mb-5">
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
                href="mailto:info@tehnometsurvey.ee"
                className="hover:text-white transition-colors duration-200 break-all"
              >
                info@tehnometsurvey.ee
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
        <div className="container-pro py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/28">
          <span>© {new Date().getFullYear()} Tehnomet Survey OÜ. {t("footer.rights")}</span>
          <span className="font-semibold tracking-[0.2em] uppercase text-[10px]">
            {t("footer.motto")}
          </span>
        </div>
      </div>
    </footer>
  );
}
