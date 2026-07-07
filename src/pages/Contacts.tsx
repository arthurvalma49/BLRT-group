import { useState } from "react";
import { Phone, Mail, MapPin, Hash, CheckCircle2, Linkedin, Facebook } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import RevealSection from "@/components/RevealSection";
import { cn } from "@/lib/utils";

const personnel = [
  {
    name: "Kristina Uustalu",
    role: "Office Manager",
    phone: "+372 610 2408",
    email: "blrt@blrt.ee",
  },
  {
    name: "Karina Kond",
    role: "Director of Communication",
    phone: "+372 610 2403",
    email: "karina.kond@blrt.ee",
  },
  {
    name: "Inga Stern",
    role: "Communications Specialist",
    phone: "+372 610 2593",
    email: "inga.stern@blrt.ee",
  },
  {
    name: "Algerd Andruškevičius",
    role: "Member of the Management Board",
    phone: "+372 511 2272",
    email: "blrt@blrt.ee",
  },
];

const inputCls =
  "w-full mt-1 px-3 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brand-red/40 focus:border-brand-red/40 transition-colors";
const labelCls = "block text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground";

export default function Contacts() {
  const { t } = useLanguage();

  const [fields, setFields] = useState({
    firstName: "", lastName: "", company: "", email: "",
    phone: "", service: "", vessel: "", details: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1200);
  }

  const contactItems = [
    {
      icon: MapPin,
      label: t("contacts.address"),
      value: "Kopli 103, 11712 Tallinn",
      sub: "Estonia · BLRT Grupp AS",
      href: "https://maps.google.com/?q=Kopli+103+Tallinn+Estonia",
    },
    {
      icon: Phone,
      label: t("contacts.phone"),
      value: "+372 610 2408",
      href: "tel:+3726102408",
    },
    {
      icon: Mail,
      label: t("contacts.email"),
      value: "blrt@blrt.ee",
      href: "mailto:blrt@blrt.ee",
    },
    {
      icon: Hash,
      label: "Reg. code",
      value: "10068499",
      href: undefined,
    },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1531972111231-7482a960e109?w=1400&q=75&auto=format&fit=crop"
            alt=""
            aria-hidden
            fetchpriority="high"
            className="w-full h-full object-cover object-center"
            style={{ filter: "saturate(0.7) brightness(0.22)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-deep))] via-[hsl(218_68%_9%/0.88)] to-[hsl(218_68%_9%/0.5)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" aria-hidden />
        <div className="container-pro relative">
          <p className="hero-in hero-in-1 overline text-white/45 mb-5">{t("contacts.label")}</p>
          <h1 className="hero-in hero-in-2 text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-white max-w-2xl">
            {t("contacts.heroTitle")}
          </h1>
          <p className="hero-in hero-in-3 text-white/50 mt-4 max-w-xl text-base font-normal">
            {t("contacts.heroDesc")}
          </p>
        </div>
      </section>

      {/* ─── Info panel ─── */}
      <RevealSection as="section" className="py-20 bg-background">
        <div className="container-pro max-w-2xl">
          <div className="bg-[hsl(var(--primary-deep))] text-white rounded-2xl p-8 lg:p-10 relative overflow-hidden">
            <div
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-brand-red/8 blur-3xl pointer-events-none"
              aria-hidden
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2.5 bg-success/12 border border-success/25 px-3 py-1.5 rounded-full mb-8">
                <span className="pulse-dot bg-success" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  {t("contacts.available")}
                </span>
              </div>

              <h2 className="text-xl font-bold tracking-tight text-white mb-1">BLRT Grupp</h2>
              <p className="text-white/50 text-sm mb-8">Industrial Group · Kopli, Tallinn</p>

              <ul className="space-y-6">
                {contactItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-brand-red" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-semibold mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("https") ? "_blank" : undefined}
                          rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                          className="text-white font-semibold hover:text-brand-red transition-colors duration-200 text-sm"
                        >
                          {item.value}
                          {"sub" in item && item.sub && (
                            <div className="text-white/45 text-sm font-normal mt-0.5">{item.sub}</div>
                          )}
                        </a>
                      ) : (
                        <div className="text-white font-semibold text-sm">{item.value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Social media */}
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-semibold">Follow</span>
                <a
                  href="https://www.linkedin.com/company/blrt-grupp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-white/8 flex items-center justify-center hover:bg-brand-red/80 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 text-white" />
                </a>
                <a
                  href="https://www.facebook.com/blrtgrupp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-white/8 flex items-center justify-center hover:bg-brand-red/80 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ─── Klaipėda hub ─── */}
      <RevealSection as="section" className="pb-8 bg-background">
        <div className="container-pro max-w-2xl">
          <div className="bg-[hsl(218_40%_13%)] text-white rounded-2xl p-8 lg:p-10 relative overflow-hidden border border-white/6">
            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-semibold mb-4">Klaipėda / Lithuania Hub</p>
              <h2 className="text-xl font-bold tracking-tight text-white mb-1">Western Shipyard Group</h2>
              <p className="text-white/50 text-sm mb-6">Minijos st. 180, LT-93269 Klaipėda, Lithuania</p>
              <div className="flex flex-wrap gap-6">
                <a href="tel:+37046483600" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-brand-red" />
                  +370 46 483 600
                </a>
                <a href="mailto:info@wsy.lt" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-brand-red" />
                  info@wsy.lt
                </a>
                <a
                  href="https://maps.google.com/?q=Minijos+st+180+Klaipeda+Lithuania"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-brand-red" />
                  View on map
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ─── Form + Map ─── */}
      <RevealSection as="section" className="py-20 bg-surface border-t border-border/50">
        <div className="container-pro grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Contact form */}
          <div>
            <p className="overline mb-3">{t("contacts.formTitle")}</p>
            <h2 className="text-2xl tracking-tighter text-foreground mb-8">{t("contacts.formTitle")}</h2>

            {submitted ? (
              <div className="flex flex-col items-start gap-3 py-10">
                <CheckCircle2 className="w-10 h-10 text-success" />
                <p className="text-base font-semibold text-foreground">{t("contacts.toastTitle")}</p>
                <p className="text-sm text-muted-foreground">{t("contacts.toastDesc")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>{t("contacts.firstName")}</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={fields.firstName}
                      onChange={handleChange}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>{t("contacts.lastName")}</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={fields.lastName}
                      onChange={handleChange}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>{t("contacts.company")}</label>
                  <input
                    type="text"
                    name="company"
                    value={fields.company}
                    onChange={handleChange}
                    className={inputCls}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>{t("contacts.emailField")}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={fields.email}
                      onChange={handleChange}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>{t("contacts.phoneField")}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={fields.phone}
                      onChange={handleChange}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>{t("contacts.serviceRequired")}</label>
                  <select
                    name="service"
                    value={fields.service}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    <option value="">{t("contacts.selectService")}</option>
                    <option value="ndt">{t("contacts.service.ndt")}</option>
                    <option value="utm">{t("contacts.service.utm")}</option>
                    <option value="steel">{t("contacts.service.steel")}</option>
                    <option value="class">{t("contacts.service.class")}</option>
                    <option value="repair">{t("contacts.service.repair")}</option>
                    <option value="other">{t("contacts.service.other")}</option>
                  </select>
                </div>

                <div>
                  <label className={labelCls}>{t("contacts.vesselField")}</label>
                  <input
                    type="text"
                    name="vessel"
                    value={fields.vessel}
                    onChange={handleChange}
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls}>{t("contacts.detailsLabel")}</label>
                  <textarea
                    name="details"
                    rows={4}
                    value={fields.details}
                    onChange={handleChange}
                    placeholder={t("contacts.detailsPlaceholder")}
                    className={cn(inputCls, "resize-none")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded bg-brand-red text-white text-sm font-semibold hover:bg-brand-red/90 transition-colors shadow-[var(--shadow-red)]",
                    submitting && "opacity-60 cursor-not-allowed",
                  )}
                >
                  {submitting ? t("contacts.sending") : t("contacts.sendRequest")}
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div>
            <p className="overline mb-3">{t("contacts.map.title")}</p>
            <h2 className="text-2xl tracking-tighter text-foreground mb-8">{t("contacts.map.title")}</h2>
            <div className="rounded-xl overflow-hidden border border-border/50" style={{ height: 420 }}>
              <iframe
                title="BLRT Grupp — Kopli 103, Tallinn"
                src="https://www.openstreetmap.org/export/embed.html?bbox=24.710%2C59.441%2C24.748%2C59.462&layer=mapnik&marker=59.4489%2C24.7259"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Kopli 103, 11712 Tallinn, Estonia ·{" "}
              <a
                href="https://www.openstreetmap.org/?mlat=59.4489&mlon=24.7259#map=15/59.4489/24.7259"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline underline-offset-2"
              >
                Open in OpenStreetMap
              </a>
            </p>
          </div>
        </div>
      </RevealSection>

      {/* ─── Key contacts ─── */}
      <RevealSection as="section" className="py-16 bg-background border-t border-border">
        <div className="container-pro">
          <p className="overline mb-8">Key Contacts</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {personnel.map((p) => (
              <div key={p.name} className="bg-card p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-red mb-3">
                  {p.role}
                </div>
                <div className="text-sm font-bold text-primary mb-4 leading-snug">{p.name}</div>
                <div className="space-y-1.5">
                  <a
                    href={`tel:${p.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-3 h-3 shrink-0" />
                    {p.phone}
                  </a>
                  <a
                    href={`mailto:${p.email}`}
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors break-all"
                  >
                    <Mail className="w-3 h-3 shrink-0" />
                    {p.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </>
  );
}
