import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Hash, Receipt, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";
import MagneticButton from "@/components/MagneticButton";
import RevealSection from "@/components/RevealSection";

const personnel = [
  {
    name: "Renat Hassanov",
    role: "Board Member",
    phone: "+372 510 3350",
    email: "renat.hassanov@tehnometsurvey.ee",
  },
  {
    name: "Ivan Pshenychnyi",
    role: "Technical Manager",
    phone: "+372 5696 8143",
    email: "ivan.pshenychnyi@tehnometsurvey.ee",
  },
  {
    name: "Diana Tulus",
    role: "Marketing Manager",
    phone: "+372 5343 2898",
    email: "diana.tulus@tehnometsurvey.ee",
  },
  {
    name: "Pavel Magazov",
    role: "Marketing Manager",
    phone: "+372 5333 1505",
    email: "pavel.magazov@tehnometsurvey.ee",
  },
];

export default function Contacts() {
  const [submitting, setSubmitting] = useState(false);
  const { t } = useLanguage();

  const services = [
    t("contacts.service.ndt"),
    t("contacts.service.utm"),
    t("contacts.service.steel"),
    t("contacts.service.class"),
    t("contacts.service.repair"),
    t("contacts.service.other"),
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: t("contacts.toastTitle"),
        description: t("contacts.toastDesc"),
      });
    }, 600);
  };

  const contactItems = [
    {
      icon: MapPin,
      label: t("contacts.address"),
      value: "Kopli 103, 11712 Tallinn",
      sub: "Estonia · BLRT Grupp",
      href: "https://maps.google.com/?q=Kopli+103+Tallinn+Estonia",
    },
    {
      icon: Phone,
      label: t("contacts.phone"),
      value: "+372 610 2997",
      href: "tel:+3726102997",
    },
    {
      icon: Mail,
      label: t("contacts.email"),
      value: "info@tehnometsurvey.ee",
      href: "mailto:info@tehnometsurvey.ee",
    },
    {
      icon: Receipt,
      label: "Invoices",
      value: "arved@tehnometsurvey.ee",
      href: "mailto:arved@tehnometsurvey.ee",
    },
    {
      icon: Hash,
      label: "Reg. code",
      value: "10910683",
      href: undefined,
    },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-[hsl(var(--primary-deep))] text-white py-24 overflow-hidden relative">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden />
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

      {/* ─── Info + Form ─── */}
      <RevealSection as="section" className="py-20 bg-background">
        <div className="container-pro grid lg:grid-cols-[5fr_7fr] gap-8 items-start">
          {/* Info panel */}
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

              <h2 className="text-xl font-bold tracking-tight text-white mb-1">
                {t("contacts.companyName")}
              </h2>
              <p className="text-white/50 text-sm mb-8 max-w-xs">{t("contacts.companyDesc")}</p>

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
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-8 lg:p-10"
          >
            <h2 className="text-2xl font-bold tracking-tight mb-1">{t("contacts.formTitle")}</h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-[55ch]">
              {t("contacts.formDesc")}
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label={t("contacts.firstName")} name="firstName" required />
              <Field label={t("contacts.lastName")} name="lastName" required />
              <Field label={t("contacts.company")} name="company" />
              <Field label={t("contacts.emailField")} name="email" type="email" required />
              <Field label={t("contacts.phoneField")} name="phone" type="tel" />

              <div>
                <FieldLabel>{t("contacts.serviceRequired")}</FieldLabel>
                <select
                  name="service"
                  required
                  className="w-full bg-background border border-input rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/50 transition-colors"
                >
                  <option value="">{t("contacts.selectService")}</option>
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <Field label={t("contacts.vesselField")} name="vessel" />
              </div>

              <div className="sm:col-span-2">
                <FieldLabel>{t("contacts.detailsLabel")}</FieldLabel>
                <textarea
                  name="details"
                  rows={5}
                  required
                  placeholder={t("contacts.detailsPlaceholder")}
                  className="w-full bg-background border border-input rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/50 resize-none transition-colors"
                />
              </div>
            </div>

            <div className="mt-8">
              <MagneticButton>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover disabled:opacity-60 text-white font-semibold px-7 py-3 rounded text-sm btn-tactile transition-colors"
                  style={{ boxShadow: "var(--shadow-red)" }}
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t("contacts.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t("contacts.sendRequest")}
                    </>
                  )}
                </button>
              </MagneticButton>
            </div>
          </form>
        </div>
      </RevealSection>

      {/* ─── Key contacts ─── */}
      <RevealSection as="section" className="py-16 bg-surface border-t border-border">
        <div className="container-pro">
          <p className="overline mb-8">Key Contacts</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {personnel.map((p) => (
              <div key={p.email} className="bg-card p-6">
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

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <FieldLabel>
        {label}
        {required && <span className="text-brand-red ml-1">*</span>}
      </FieldLabel>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-background border border-input rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/50 transition-colors"
      />
    </div>
  );
}
