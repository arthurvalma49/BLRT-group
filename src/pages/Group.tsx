import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Anchor, Wrench, Zap, Package, ShipWheel } from "lucide-react";
import RevealSection from "@/components/RevealSection";

/* ─── Data ─── */

type Company = {
  name: string;
  country: string;
  description: string;
  href?: string;
  featured?: boolean;
};

type Tab = {
  id: string;
  label: string;
  icon: React.ElementType;
  intro: string;
  companies: Company[];
};

const tabs: Tab[] = [
  {
    id: "maritime",
    label: "Maritime Operations",
    icon: Anchor,
    intro:
      "BLRT operates three full-service repair yards across the Baltic and Northern Europe under the BLRT Repair Yards umbrella, alongside specialist shipbuilding capabilities for LNG ferries and large-block construction.",
    companies: [
      {
        name: "Tallinn Shipyard",
        country: "EE",
        description:
          "One of Northern Europe's largest ship repair facilities. Three dry docks up to 265 × 70 m. Full-cycle repair, conversion and maintenance for all vessel types.",
        href: "https://blrtyards.com/en/",
        featured: true,
      },
      {
        name: "Western Shiprepair",
        country: "LT",
        description:
          "Ship maintenance, repair and conversion in Klaipeda. Part of BLRT Repair Yards with experienced engineering and steel teams.",
        href: "https://blrtyards.com/en/",
      },
      {
        name: "Turku Repair Yard",
        country: "FI",
        description:
          "Ship repair and dry docking in Naantali, Finland. One of the largest repair facilities in Scandinavia.",
        href: "http://www.turkurepairyard.com/",
      },
      {
        name: "Western Baltic Shipbuilding",
        country: "LT",
        description:
          "Construction of grand blocks for cruise ships, multifunctional vessels and offshore supply ships. 50,000 m² of covered workshop space.",
        href: "https://wbs.lt/en/",
        featured: true,
      },
      {
        name: "BLRT Fiskerstrand",
        country: "NO",
        description:
          "50/50 joint venture with Fiskerstrand Verft AS. Specialists in LNG-powered ferries; delivered the world's largest LNG ferry in 2011.",
        href: "https://www.fiskerstrand.no/en/",
      },
    ],
  },
  {
    id: "inspection",
    label: "Inspection & Testing",
    icon: ShipWheel,
    intro:
      "Class-society-approved inspection and material testing capabilities, covering both on-board hull surveys and laboratory analysis for the maritime and industrial sectors.",
    companies: [
      {
        name: "Tehnomet Survey OÜ",
        country: "EE",
        description:
          "Independent NDT and hull inspection for marine vessels. Approved by LR, DNV, BV, ABS, RINA, KR, IR, NKK and WTA. Mobilised to any port worldwide within 24 hours.",
        href: "/",
        featured: true,
      },
      {
        name: "Western Central Laboratory",
        country: "LT",
        description:
          "Accredited laboratory for destructive and non-destructive material testing. Serves shipbuilding, ship repair and industrial clients from Klaipeda.",
        href: "https://wcl.lt/",
      },
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    icon: Zap,
    intro:
      "Electrical, mechanical and structural engineering companies spanning marine, offshore and industrial sectors. BLRT engineering subsidiaries hold decades of specialist expertise.",
    companies: [
      {
        name: "BLRT ERA AS",
        country: "EE",
        description:
          "Electrical engineering works for shipbuilding, ship repair, offshore energy and industrial facilities. Founded 1948; part of BLRT Grupp since 1996.",
        href: "https://blrtera.ee/en/",
        featured: true,
      },
      {
        name: "Bars Elekter",
        country: "EE · NO",
        description:
          "Electrical engineering, installation and commissioning for the offshore and marine industry. Offices in Tallinn and Norway.",
        href: "https://barselekter.com/en/",
      },
      {
        name: "BLRT Masinaehitus",
        country: "EE",
        description:
          "Machine building for power generation, transport and paper processing industries. Products exported across Central Europe and Scandinavia.",
        href: "https://masinaehitus.ee/en/",
      },
      {
        name: "Marketex Marine",
        country: "EE",
        description:
          "Turn-key carbon steel barges for the fish farming industry. More than 350 barges built; 850-tonne crane capacity.",
        href: "https://marketexmarine.net/en/",
      },
      {
        name: "Marketex Offshore Constructions",
        country: "EE",
        description:
          "High-tech large-scale metal structures, aluminium service vessels and offshore wind energy foundations.",
        href: "https://www.marketex.ee/",
      },
    ],
  },
  {
    id: "materials",
    label: "Materials & Logistics",
    icon: Package,
    intro:
      "From Baltic-wide rolled steel distribution to industrial gas production and international road transport, BLRT's materials and logistics companies underpin the group's manufacturing backbone.",
    companies: [
      {
        name: "Elme Metall",
        country: "EE · LV · LT · FI · PL",
        description:
          "Leader in Baltic States rolled steel sales and metal processing. Galvanization, prefabrication and structural sections across five countries.",
        href: "https://elmemetall.eu/en/",
        featured: true,
      },
      {
        name: "Elme Messer Gaas",
        country: "EE",
        description:
          "Production and sale of industrial and medical gases. Joint venture with Germany's Messer Group since 1999.",
        href: "https://www.elmemesser.ee/",
      },
      {
        name: "Elme Trans",
        country: "EE",
        description:
          "International road transport and equipment rental across Estonia, Ukraine, and Central and Northern Europe.",
        href: "https://elmetrans.ee/en/",
      },
    ],
  },
  {
    id: "port",
    label: "Port & Marine Services",
    icon: Wrench,
    intro:
      "Port operations, towing, safety equipment maintenance and marine safety services that form the operational infrastructure of the Baltic maritime ecosystem.",
    companies: [
      {
        name: "Vene-Balti Sadam",
        country: "EE",
        description:
          "Port operations hub for the BLRT Grupp ecosystem. Towing, mooring, berth management and water traffic services in Tallinn.",
        href: "https://portvenebalti.ee/en/",
        featured: true,
      },
      {
        name: "Mereabi",
        country: "EE",
        description:
          "Marine safety services provider since 1975. Maintenance of life-saving appliances and fire-fighting equipment; serves Finland, Sweden, Belgium and Norway.",
        href: "https://mereabi.ee/en/",
      },
    ],
  },
];

const stats = [
  { value: "1912", label: "Founded" },
  { value: "50+",  label: "Group companies" },
  { value: "4,000+", label: "Employees" },
  { value: "7",    label: "Countries" },
];

const countries = [
  { flag: "🇪🇪", name: "Estonia",   note: "Headquarters & largest operations cluster" },
  { flag: "🇱🇻", name: "Latvia",    note: "Steel distribution and processing" },
  { flag: "🇱🇹", name: "Lithuania", note: "Shipbuilding, repair and laboratory services" },
  { flag: "🇵🇱", name: "Poland",    note: "Rolled steel sales and distribution" },
  { flag: "🇫🇮", name: "Finland",   note: "Turku Repair Yard and steel distribution" },
  { flag: "🇳🇴", name: "Norway",    note: "BLRT Fiskerstrand and Bars Elekter" },
  { flag: "🇺🇦", name: "Ukraine",   note: "Elme Trans transport operations" },
];

/* ─── Company card ─── */

function CompanyCard({ company }: { company: Company }) {
  const isInternal = company.href === "/";
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-brand-red/30 hover:shadow-[var(--shadow-card)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground bg-muted px-2.5 py-1 rounded">
          {company.country}
        </span>
        {company.href && (
          isInternal ? (
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-xs font-semibold text-brand-red hover:text-brand-red/75 transition-colors shrink-0"
            >
              Visit <ArrowRight className="w-3 h-3" />
            </Link>
          ) : (
            <a
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-brand-red hover:text-brand-red/75 transition-colors shrink-0"
            >
              Website <ExternalLink className="w-3 h-3" />
            </a>
          )
        )}
      </div>
      <h3 className="text-base font-semibold tracking-tight text-primary mb-2 leading-snug">
        {company.name}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{company.description}</p>
    </div>
  );
}

/* ─── Page ─── */

export default function Group() {
  const [active, setActive] = useState("maritime");
  const tab = tabs.find((t) => t.id === active)!;
  const Icon = tab.icon;

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-[hsl(var(--primary-deep))] text-white py-24 overflow-hidden relative">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden />
        {/* Decorative year */}
        <div
          className="absolute right-0 top-0 bottom-0 flex items-center pr-8 pointer-events-none select-none"
          aria-hidden
        >
          <span
            className="text-[clamp(6rem,18vw,18rem)] font-bold tracking-tighter text-white/[0.04] leading-none"
          >
            1912
          </span>
        </div>
        <div className="container-pro relative">
          <p className="hero-in hero-in-1 overline text-white/45 mb-5">BLRT Grupp</p>
          <h1 className="hero-in hero-in-2 text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-white max-w-2xl">
            The industrial backbone of the Baltic Sea region.
          </h1>
          <p className="hero-in hero-in-3 text-white/50 mt-4 max-w-xl text-base font-normal leading-relaxed">
            Founded in 1912, BLRT Grupp is one of the largest industrial holding companies in the
            Baltic region — spanning shipbuilding, repair, engineering, materials and marine services
            across seven countries.
          </p>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <RevealSection as="section" className="bg-background border-b border-border">
        <div className="container-pro">
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
            {stats.map((s) => (
              <div
                key={s.label}
                className="py-10 px-6 lg:px-8 flex flex-col gap-1.5 border-b border-r border-border"
              >
                <div className="text-4xl lg:text-5xl font-bold tracking-tighter text-primary leading-none">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── Company directory ─── */}
      <RevealSection as="section" className="py-20 bg-background">
        <div className="container-pro">
          <div className="mb-10">
            <p className="overline mb-3">Group Companies</p>
            <h2 className="text-3xl tracking-tighter text-primary max-w-xl">
              Eighteen companies. One group.
            </h2>
          </div>

          {/* Tab bar */}
          <div className="border-b border-border flex gap-2 sm:gap-6 mb-12 overflow-x-auto pb-px scrollbar-none">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`pb-4 text-xs sm:text-sm font-semibold border-b-2 -mb-px transition-colors duration-200 min-h-[44px] whitespace-nowrap ${
                  active === t.id
                    ? "border-brand-red text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div key={tab.id} className="animate-fade-in">
            {/* Section intro */}
            <div className="flex items-start gap-4 mb-10 max-w-3xl">
              <div className="w-10 h-10 rounded-lg bg-brand-red/8 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-5 h-5 text-brand-red" />
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">{tab.intro}</p>
            </div>

            {/* Company grid — featured items span 2 cols on md+ */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tab.companies.map((company) => (
                <div
                  key={company.name}
                  className={company.featured ? "sm:col-span-2 lg:col-span-1" : ""}
                >
                  <CompanyCard company={company} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ─── Geographic reach ─── */}
      <RevealSection as="section" className="py-20 bg-surface border-t border-border">
        <div className="container-pro">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
            <div>
              <p className="overline mb-3">Geographic Reach</p>
              <h2 className="text-3xl tracking-tighter heading-underline mb-6">
                Operating across seven countries
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                From the Baltic shipyards to Norway's fjords, BLRT Grupp's network of companies
                spans the maritime corridor of Northern Europe.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
              {countries.map((c) => (
                <div key={c.name} className="bg-card p-5 flex items-start gap-4">
                  <span className="text-2xl leading-none mt-0.5" aria-hidden>{c.flag}</span>
                  <div>
                    <div className="text-sm font-semibold text-primary mb-1">{c.name}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{c.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ─── CTA ─── */}
      <RevealSection
        as="section"
        className="py-20 bg-[hsl(var(--primary-deep))] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden />
        <div className="container-pro relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="overline text-white/45 mb-3">Tehnomet Survey OÜ</p>
            <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
              Need a vessel inspection?
            </h3>
            <p className="text-white/55 text-sm max-w-md">
              Tehnomet Survey is BLRT Grupp's marine NDT and hull inspection specialist. Class-society
              approved, mobilised worldwide within 24 hours.
            </p>
          </div>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-semibold px-6 py-3 rounded text-sm btn-tactile transition-colors whitespace-nowrap shrink-0"
            style={{ boxShadow: "var(--shadow-red)" }}
          >
            Request a Survey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </RevealSection>
    </>
  );
}
