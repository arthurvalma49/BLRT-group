import { Phone, Mail, MapPin, Hash } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import RevealSection from "@/components/RevealSection";

const personnel = [
  {
    name: "Renat Hassanov",
    role: "Board Member",
    phone: "+372 510 3350",
    email: "renat.hassanov@blrt.ee",
  },
  {
    name: "Ivan Pshenychnyi",
    role: "Technical Manager",
    phone: "+372 5696 8143",
    email: "ivan.pshenychnyi@blrt.ee",
  },
  {
    name: "Diana Tulus",
    role: "Marketing Manager",
    phone: "+372 5343 2898",
    email: "diana.tulus@blrt.ee",
  },
  {
    name: "Pavel Magazov",
    role: "Marketing Manager",
    phone: "+372 5333 1505",
    email: "pavel.magazov@blrt.ee",
  },
];

export default function Contacts() {
  const { t } = useLanguage();

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
      value: "info@blrt.ee",
      href: "mailto:info@blrt.ee",
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
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1531972111231-7482a960e109?w=1400&q=75&auto=format&fit=crop"
            alt=""
            aria-hidden
            fetchPriority="high"
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
            </div>
          </div>
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
