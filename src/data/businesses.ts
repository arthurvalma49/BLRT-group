export type ServiceIcon =
  | "anchor" | "ship" | "wrench" | "zap" | "shield" | "package"
  | "truck" | "layers" | "ruler" | "eye" | "globe" | "award"
  | "clock" | "waves" | "circuit" | "file" | "droplets" | "magnet"
  | "trending" | "building" | "gauge" | "beaker" | "hard-hat" | "flame";

export interface Service {
  icon: ServiceIcon;
  slug: string;
  title: string;
  desc: string;
  fullDesc?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  year?: number;
}

export interface TechDataRow {
  label: { EN: string; RU: string; ET: string };
  value: string;
}

export interface Product {
  name: string;
  desc: string;
  image?: string;
}

export interface Personnel {
  name: string;
  role: string;
  phone?: string;
  email?: string;
}

export interface Business {
  slug: string;
  name: string;
  fullName?: string;
  sector: string;
  sectorId: string;
  countries: string;
  tagline: string;
  heroDesc: string;
  aboutP1: string;
  aboutP2?: string;
  services: Service[];
  contact: {
    address?: string;
    phone?: string;
    email?: string;
    website?: string;
  };
  personnel?: Personnel[];
  certificates?: Certificate[];
  techData?: TechDataRow[];
  products?: Product[];
}

export const sectorGroups: { id: string; label: string; slugs: string[] }[] = [
  {
    id: "repair",
    label: "Ship Repair",
    slugs: ["tallinn-shipyard", "western-shiprepair", "turku-repair-yard", "blrt-rekato"],
  },
  {
    id: "building",
    label: "Shipbuilding",
    slugs: ["western-baltic-shipbuilding"],
  },
  {
    id: "inspection",
    label: "Inspection & Testing",
    slugs: ["tehnomet-survey", "western-central-laboratory", "elme-tks"],
  },
  {
    id: "engineering",
    label: "Engineering",
    slugs: [
      "blrt-era", "bars-elekter", "blrt-masinaehitus", "marketex-marine", "marketex-offshore",
      "blrt-valukoda", "moc", "western-tech-solutions", "western-baltic-engineering",
      "marine-technology-lt",
    ],
  },
  {
    id: "materials",
    label: "Steel & Materials",
    slugs: ["elme-metall", "elme-messer-gaas", "elme-trans", "elme"],
  },
  {
    id: "port",
    label: "Port & Marine Services",
    slugs: ["vene-balti-sadam", "mereabi", "western-ships-agency", "western-stevedoring"],
  },
];

export const businesses: Business[] = [
  /* ── SHIP REPAIR ── */
  {
    slug: "tallinn-shipyard",
    name: "Tallinn Shipyard",
    sector: "Ship Repair",
    sectorId: "repair",
    countries: "EE",
    tagline: "Three dry docks in the Port of Tallinn",
    heroDesc:
      "Ship repair, conversion and dry docking at the Port of Tallinn, Estonia. Three dry docks with the largest at 165 m × 30 m, plus 2,300 m of berths.",
    aboutP1:
      "The BLRT Repair Yards team is dedicated to delivering quality results through precise planning and seamless collaboration. Tallinn Shipyard operates from Kopli 103 in Tallinn, Estonia, as part of BLRT Repair Yards — a group of ship repair yards serving the international maritime market from three strategic locations in the Baltic Sea region.",
    aboutP2:
      "The yard's mission is to ensure the seaworthiness and performance of the global fleet, helping shipowners and operators maintain existing vessels, improve efficiency, meet regulatory requirements and move towards more sustainable maritime operations. Three dry docks accommodate vessels from coastal craft to large tankers, with the largest dock (Dock 22) measuring 165 m × 30 m at 10,000 t lifting capacity.",
    services: [
      {
        icon: "anchor",
        slug: "ship-repair-and-dry-docking",
        title: "Ship Repair & Dry Docking",
        desc: "Three dry docks — the largest (Dock 22) at 165 m × 30 m, 10,000 t — with 2,300 m of berths and vessels up to 200 m alongside.",
        fullDesc:
          "Tallinn Shipyard operates three dry docks: Dock 2 (4,500 t, 101.00 m × 22.00 m), Dock 34 (8,500 t, 139.50 m × 23.80 m), and Dock 22 (10,000 t, 165.00 m × 30.00 m). Supporting equipment includes a floating crane of 100 t capacity, a mobile crane of 850 t, and lifting platforms rated at 250 t and 500 t.\n\nWith 2,300 m of berths and 1,200 m of quays fully equipped with fresh water, compressed air and electrical power, the yard accommodates vessels up to 200 m in length alongside. Hull blasting, coating and structural steel works are performed in the dry dock to classification society requirements.",
      },
      {
        icon: "waves",
        slug: "afloat-repairs-and-voyage-repair-services",
        title: "Afloat Repairs & Voyage Repair Services",
        desc: "Repairs carried out while vessels remain in water, including steel, piping, deck machinery, propulsion, electrical and emergency technical assistance.",
        fullDesc:
          "Tallinn Shipyard provides afloat repair services covering: minor steel repairs and structural works in accessible areas; piping repairs, renewal and installation; valve repairs, overhaul and pressure testing where systems can be safely isolated; replacement or maintenance of anchor chains and related deck equipment; selected stern tube seal works depending on vessel design; deck machinery repairs including mooring equipment, winches and windlasses; hatch cover, ramp and cargo access equipment repairs; safety and lifesaving equipment maintenance; engines and auxiliary machinery repairs including pumps and heat exchangers; electrical, automation, control and instrumentation works; inspection, troubleshooting and repair preparation before dry docking; and emergency technical assistance and voyage repair support.",
      },
      {
        icon: "layers",
        slug: "conversion-and-modernization",
        title: "Conversion and Modernization",
        desc: "Vessel upgrades, structural modifications, cargo area modifications, propulsion and energy-efficiency upgrades, and class-related modernisation.",
        fullDesc:
          "Whether the goal is to improve vessel performance, meet new regulatory requirements, increase operational flexibility, or extend the service life of an existing asset, BLRT Repair Yards provides practical ship conversion and modernisation solutions across our multi-yard network.\n\nTypical projects include: vessel upgrades and life-extension work; structural modifications and steel fabrication; cargo area modifications and capacity improvements; new equipment and system installation; propulsion and energy-efficiency upgrades; electrical, automation and control system modernisation; accommodation, deck and service area modifications; and class-related modernisation and inspection support.",
      },
      {
        icon: "wrench",
        slug: "retrofit",
        title: "Retrofit",
        desc: "Equipment and system retrofits to meet new regulatory requirements and improve vessel performance.",
        fullDesc:
          "Tallinn Shipyard performs vessel retrofit projects to help owners meet changing regulatory requirements and improve operational efficiency. Retrofit work is delivered using the yard's ship repair expertise, engineering support, project management and multi-disciplinary production capabilities. The yard coordinates with sister companies within BLRT Grupp for specialist electrical, NDT and engineering scope.",
      },
      {
        icon: "eye",
        slug: "inspections",
        title: "Inspections",
        desc: "Vessel condition assessment, repair scope evaluation, class renewal and docking preparation support.",
        fullDesc:
          "Inspection services at Tallinn Shipyard include: vessel condition assessment before dry docking or repair; repair scope evaluation based on inspection findings; class renewal and class survey preparation support; hull, deck, tank, piping, machinery and equipment inspection support; identifying steel renewal needs, pipe work requirements, coating repairs and mechanical repair needs; and docking preparation and technical clarification of repair specifications.\n\nThese services help determine vessel condition, establish repair requirements, estimate work scope and select appropriate repair approaches — improving cost management, enabling safer execution and minimising downtime.",
      },
      {
        icon: "ruler",
        slug: "design-and-engineering",
        title: "Design & Engineering",
        desc: "Technical planning and engineering support for repair, conversion and modernisation projects.",
        fullDesc:
          "The yard's engineering support capability covers technical planning, design development and project management for repair, conversion and modernisation scopes. Engineering support is combined with the yard's multi-disciplinary production capabilities to deliver practical solutions. Close coordination with BLRT Grupp's specialist companies — including BLRT ERA for electrical engineering and Tehnomet Survey for NDT — allows complex, multi-discipline projects to be managed under a single commercial interface.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2252",
      email: "info@blrtgrupp.ee",
      website: "https://blrtyards.com/en/",
    },
    personnel: [
      { name: "Andrejus Babachinas", role: "CEO, BLRT Repair Yards", phone: "+370 46 483 764" },
      { name: "Sergei Kravtsenko",   role: "Managing Director, Tallinn Shipyard", phone: "+372 610 2252", email: "sergei.kravtsenko@blrtyards.com" },
      { name: "Gabrielius Jasas",    role: "Head of Sales & Marketing", phone: "+370 61 494 651", email: "gabrielius.jasas@blrtyards.com" },
    ],
    certificates: [
      { name: "ISO 9001:2015",   issuer: "Lloyd's Register", year: 2025 },
      { name: "ISO 14001:2015",  issuer: "Lloyd's Register", year: 2024 },
      { name: "Lloyd's Register", issuer: "Class Acceptance"             },
      { name: "DNV",              issuer: "Class Acceptance"             },
      { name: "Bureau Veritas",   issuer: "Class Acceptance"             },
      { name: "ABS",              issuer: "Class Acceptance"             },
    ],
    techData: [
      { label: { EN: "Dock 22 — Length",    RU: "Сухой Dok 22 — Длина",    ET: "Kuivdokk 22 — Pikkus"   }, value: "165.00 m" },
      { label: { EN: "Dock 22 — Width",     RU: "Сухой Dok 22 — Ширина",   ET: "Kuivdokk 22 — Laius"   }, value: "30.00 m"  },
      { label: { EN: "Dock 22 — Capacity",  RU: "Сухой Dok 22 — Грузоподъёмность", ET: "Kuivdokk 22 — Kandejõud" }, value: "10,000 t" },
      { label: { EN: "Berths total",        RU: "Всего причалов",           ET: "Kaie kokku"             }, value: "2,300 m"  },
      { label: { EN: "Floating crane",      RU: "Плавкран",                 ET: "Ujurkraana"             }, value: "100 t"    },
      { label: { EN: "Max vessel length alongside", RU: "Макс. длина судна у причала", ET: "Max laeva pikkus kai ääres" }, value: "200 m" },
    ],
  },
  {
    slug: "western-shiprepair",
    name: "Western Shiprepair",
    sector: "Ship Repair",
    sectorId: "repair",
    countries: "LT",
    tagline: "Ship repair in Klaipėda, Lithuania",
    heroDesc:
      "Ship repair, dry docking and conversion at Klaipėda, Lithuania. Part of BLRT Repair Yards — serving the international maritime market from three strategic Baltic Sea locations.",
    aboutP1:
      "The BLRT Repair Yards team is dedicated to delivering quality results through precise planning and seamless collaboration. Western Shiprepair is BLRT Repair Yards' facility in Klaipėda, Lithuania, one of three strategic ship repair locations operated by the group across Estonia, Lithuania and Finland.",
    aboutP2:
      "Western Shiprepair's mission is to ensure the seaworthiness and performance of the global fleet, helping shipowners and operators maintain existing vessels, improve efficiency, meet regulatory requirements and move towards more sustainable maritime operations. The yard operates as part of a multi-yard network with 7 docks combined, including the largest floating dock in the Baltics at 235 m × 44 m.",
    services: [
      {
        icon: "anchor",
        slug: "ship-repair-and-dry-docking",
        title: "Ship Repair & Dry Docking",
        desc: "Dry docking capacity at Klaipėda including the largest floating dock in the Baltics at 235 m × 44 m.",
        fullDesc:
          "Western Shiprepair operates docking infrastructure at the Port of Klaipėda, Lithuania, as part of the BLRT Repair Yards network which collectively operates 7 docks across Estonia, Lithuania and Finland. The network's largest floating dock measures 235 m × 44 m.\n\nHull blasting and coating are carried out to classification society and coating manufacturer requirements. The yard handles a range of vessel types serving Baltic, North Sea and Atlantic trade routes, with dock scheduling coordinated across the multi-yard network to minimise waiting time for fleet operators.",
      },
      {
        icon: "waves",
        slug: "afloat-repairs-and-voyage-repair-services",
        title: "Afloat Repairs & Voyage Repair Services",
        desc: "Repairs carried out while vessels remain in water, including steel, piping, deck machinery, propulsion, electrical and emergency technical assistance.",
        fullDesc:
          "Western Shiprepair provides afloat repair services covering: minor steel repairs and structural works in accessible areas; piping repairs, renewal and installation; valve repairs, overhaul and pressure testing where systems can be safely isolated; replacement or maintenance of anchor chains and related deck equipment; selected stern tube seal works depending on vessel design; deck machinery repairs including mooring equipment, winches and windlasses; hatch cover, ramp and cargo access equipment repairs; safety and lifesaving equipment maintenance; engines and auxiliary machinery repairs including pumps and heat exchangers; electrical, automation, control and instrumentation works; inspection, troubleshooting and repair preparation before dry docking; and emergency technical assistance and voyage repair support.",
      },
      {
        icon: "layers",
        slug: "conversion-and-modernization",
        title: "Conversion and Modernization",
        desc: "Vessel upgrades, structural modifications, cargo area modifications, propulsion and energy-efficiency upgrades, and class-related modernisation.",
        fullDesc:
          "Whether the goal is to improve vessel performance, meet new regulatory requirements, increase operational flexibility, or extend the service life of an existing asset, BLRT Repair Yards provides practical ship conversion and modernisation solutions across our multi-yard network.\n\nTypical projects include: vessel upgrades and life-extension work; structural modifications and steel fabrication; cargo area modifications and capacity improvements; new equipment and system installation; propulsion and energy-efficiency upgrades; electrical, automation and control system modernisation; accommodation, deck and service area modifications; and class-related modernisation and inspection support.",
      },
      {
        icon: "wrench",
        slug: "retrofit",
        title: "Retrofit",
        desc: "Equipment and system retrofits to meet new regulatory requirements and improve vessel performance.",
        fullDesc:
          "Western Shiprepair performs vessel retrofit projects to help owners meet changing regulatory requirements and improve operational efficiency. Retrofit work is delivered using the yard's ship repair expertise, engineering support, project management and multi-disciplinary production capabilities, coordinated across the BLRT Repair Yards multi-yard network.",
      },
      {
        icon: "eye",
        slug: "inspections",
        title: "Inspections",
        desc: "Vessel condition assessment, repair scope evaluation, class renewal and docking preparation support.",
        fullDesc:
          "Inspection services at Western Shiprepair include: vessel condition assessment before dry docking or repair; repair scope evaluation based on inspection findings; class renewal and class survey preparation support; hull, deck, tank, piping, machinery and equipment inspection support; identifying steel renewal needs, pipe work requirements, coating repairs and mechanical repair needs; and docking preparation and technical clarification of repair specifications.\n\nThese services help determine vessel condition, establish repair requirements, estimate work scope and select appropriate repair approaches — improving cost management, enabling safer execution and minimising downtime.",
      },
      {
        icon: "ruler",
        slug: "design-and-engineering",
        title: "Design & Engineering",
        desc: "Technical planning and engineering support for repair, conversion and modernisation projects.",
        fullDesc:
          "Engineering support at Western Shiprepair covers technical planning, design development and project management for repair, conversion and modernisation scopes. The yard combines ship repair expertise, engineering support, project management and multi-disciplinary production capabilities as part of the BLRT Repair Yards network.",
      },
    ],
    contact: {
      address: "Minijos str. 180, LT-93269 Klaipėda, Lithuania",
      phone: "+370 46 483 764",
      email: "info@blrtgrupp.ee",
      website: "https://blrtyards.com/en/",
    },
  },
  {
    slug: "turku-repair-yard",
    name: "Turku Repair Yard",
    sector: "Ship Repair",
    sectorId: "repair",
    countries: "FI",
    tagline: "Ship repair in Finland, part of BLRT Repair Yards",
    heroDesc:
      "Ship repair, dry docking and conversion in Finland. Turku Repair Yard is part of BLRT Repair Yards — a group serving the international maritime market from three strategic Baltic Sea locations.",
    aboutP1:
      "The BLRT Repair Yards team is dedicated to delivering quality results through precise planning and seamless collaboration. Turku Repair Yard is BLRT Repair Yards' facility in Finland, one of three strategic ship repair locations operated by the group across Estonia, Lithuania and Finland.",
    aboutP2:
      "Turku Repair Yard's mission is to ensure the seaworthiness and performance of the global fleet, helping shipowners and operators maintain existing vessels, improve efficiency, meet regulatory requirements and move towards more sustainable maritime operations. The yard operates as part of a multi-yard network with 7 docks combined across the Baltic Sea region.",
    services: [
      {
        icon: "anchor",
        slug: "ship-repair-and-dry-docking",
        title: "Ship Repair & Dry Docking",
        desc: "Dry docking capacity in Finland as part of the BLRT Repair Yards network of 7 docks across Estonia, Lithuania and Finland.",
        fullDesc:
          "Turku Repair Yard operates docking infrastructure in Finland as part of the BLRT Repair Yards network, which collectively operates 7 docks across three countries. The network includes one of Northern Europe's largest dry docks at 265 m × 70 m × 7.1 m (Naantali, Finland) and the largest floating dock in the Baltics at 235 m × 44 m.\n\nHull blasting and coating are carried out to classification society and coating manufacturer requirements. Dock scheduling is coordinated across the multi-yard network — Tallinn Shipyard in Estonia, Western Shiprepair in Lithuania and Turku Repair Yard in Finland — to minimise waiting time for fleet operators.",
      },
      {
        icon: "waves",
        slug: "afloat-repairs-and-voyage-repair-services",
        title: "Afloat Repairs & Voyage Repair Services",
        desc: "Repairs carried out while vessels remain in water, including steel, piping, deck machinery, propulsion, electrical and emergency technical assistance.",
        fullDesc:
          "Turku Repair Yard provides afloat repair services covering: minor steel repairs and structural works in accessible areas; piping repairs, renewal and installation; valve repairs, overhaul and pressure testing where systems can be safely isolated; replacement or maintenance of anchor chains and related deck equipment; selected stern tube seal works depending on vessel design; deck machinery repairs including mooring equipment, winches and windlasses; hatch cover, ramp and cargo access equipment repairs; safety and lifesaving equipment maintenance; engines and auxiliary machinery repairs including pumps and heat exchangers; electrical, automation, control and instrumentation works; inspection, troubleshooting and repair preparation before dry docking; and emergency technical assistance and voyage repair support.",
      },
      {
        icon: "layers",
        slug: "conversion-and-modernization",
        title: "Conversion and Modernization",
        desc: "Vessel upgrades, structural modifications, cargo area modifications, propulsion and energy-efficiency upgrades, and class-related modernisation.",
        fullDesc:
          "Whether the goal is to improve vessel performance, meet new regulatory requirements, increase operational flexibility, or extend the service life of an existing asset, BLRT Repair Yards provides practical ship conversion and modernisation solutions across our multi-yard network.\n\nTypical projects include: vessel upgrades and life-extension work; structural modifications and steel fabrication; cargo area modifications and capacity improvements; new equipment and system installation; propulsion and energy-efficiency upgrades; electrical, automation and control system modernisation; accommodation, deck and service area modifications; and class-related modernisation and inspection support.",
      },
      {
        icon: "wrench",
        slug: "retrofit",
        title: "Retrofit",
        desc: "Equipment and system retrofits to meet new regulatory requirements and improve vessel performance.",
        fullDesc:
          "Turku Repair Yard performs vessel retrofit projects to help owners meet changing regulatory requirements and improve operational efficiency. Retrofit work is delivered using the yard's ship repair expertise, engineering support, project management and multi-disciplinary production capabilities, coordinated across the BLRT Repair Yards multi-yard network.",
      },
      {
        icon: "eye",
        slug: "inspections",
        title: "Inspections",
        desc: "Vessel condition assessment, repair scope evaluation, class renewal and docking preparation support.",
        fullDesc:
          "Inspection services at Turku Repair Yard include: vessel condition assessment before dry docking or repair; repair scope evaluation based on inspection findings; class renewal and class survey preparation support; hull, deck, tank, piping, machinery and equipment inspection support; identifying steel renewal needs, pipe work requirements, coating repairs and mechanical repair needs; and docking preparation and technical clarification of repair specifications.\n\nThese services help determine vessel condition, establish repair requirements, estimate work scope and select appropriate repair approaches — improving cost management, enabling safer execution and minimising downtime.",
      },
      {
        icon: "ruler",
        slug: "design-and-engineering",
        title: "Design & Engineering",
        desc: "Technical planning and engineering support for repair, conversion and modernisation projects.",
        fullDesc:
          "Engineering support at Turku Repair Yard covers technical planning, design development and project management for repair, conversion and modernisation scopes. The yard combines ship repair expertise, engineering support, project management and multi-disciplinary production capabilities as part of the BLRT Repair Yards network.",
      },
    ],
    contact: {
      address: "Navirentie, 21100 Naantali, Finland",
      phone: "+358 400 669 713",
      email: "antti.simula@turunkorjaustelakka.fi",
      website: "https://blrtyards.com/en/",
    },
  },

  /* ── SHIPBUILDING ── */
  {
    slug: "western-baltic-shipbuilding",
    name: "Western Baltic Shipbuilding",
    sector: "Shipbuilding",
    sectorId: "building",
    countries: "LT",
    tagline: "Let's build future ships together",
    heroDesc:
      "A modern shipyard offering a full range of services from conceptual design to turn-key solutions. 70+ years of experience, 600+ ships built, 50,000 m² of covered workshop space in Klaipeda.",
    aboutP1:
      "Western Baltic Shipbuilding is a modern shipyard offering a full range of services from conceptual design to turn-key solutions. Part of Western Shipyard Group, owned by BLRT Grupp — the leading industrial holding in the Baltic Sea region. With roots tracing to 1946 in Klaipeda, Lithuania, the yard has grown into one of the most experienced shipyards in the Baltic region.",
    aboutP2:
      "With 70+ years of shipbuilding experience, 600+ ships constructed and more than 350 highly skilled employees, the team brings accumulated experience and new ideas that are recognised and valued by world-known customers. The facility spans 25 hectares and holds ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 and NATO AQAP 2110 certifications.",
    services: [
      {
        icon: "ship",
        slug: "turn-key-vessel-construction",
        title: "Turn-Key Vessel Construction",
        desc: "Complete newbuilding from conceptual design to delivery — ferries, tugboats, research vessels and more.",
        fullDesc:
          "Western Baltic Shipbuilding delivers complete turn-key vessel construction across a wide range of vessel types: double-ended ferries (including battery-powered models), multipurpose vessels, cargo vessels, dredgers, trawlers, tugboats, research vessels and specialised offshore structures.\n\nThe yard's turn-key service covers every stage from conceptual design through engineering, steel construction, outfitting and sea trials to final delivery. The ice-free Klaipeda port location enables year-round operations, and the facility's 120 × 21 m covered hull assembly hall, four robotic stations and three covered blasting/painting chambers support efficient parallel production.",
      },
      {
        icon: "layers",
        slug: "hull-manufacturing",
        title: "Hull Manufacturing",
        desc: "Hull construction for commercial, passenger, fishing and military vessels to classification society standards.",
        fullDesc:
          "Western Baltic Shipbuilding's hull manufacturing capability covers a broad portfolio: LNG-powered double-ended ferries up to 129.90 m, freezer trawlers and research fishing vessels, multipurpose vessels up to 105 m, split hopper dredgers, patrol ships and support vessels.\n\nAll hulls are built to classification society rules — including DNV — with in-house NDT inspection, hydrostatic testing and dimensional control at every stage. The 50,000 m² covered workshop area ensures production continuity regardless of season, and the 800 m outfitting and launching area allows for efficient final-stage work alongside the quay.",
      },
      {
        icon: "building",
        slug: "steel-block-production",
        title: "Steel Block Production",
        desc: "Superstructure, hotel, volume, double bottom, fore and aft, and bulb blocks for major shipyards.",
        fullDesc:
          "Western Baltic Shipbuilding manufactures a full range of steel block types for delivery to major shipyards worldwide: superstructure blocks, hotel blocks, volume blocks, double bottom blocks, fore and aft blocks, and bulb blocks.\n\nBlock production is supported by four robotic welding stations and a highly skilled workforce, enabling precise, repeatable fabrication to tight dimensional tolerances. Each block is inspected and certified before despatch, simplifying the receiving yard's integration process.",
      },
    ],
    contact: {
      address: "Pilies str. 8, LT-91503, Klaipeda, Lithuania",
      phone: "+370 46 398 249",
      email: "info@wbs.lt",
      website: "https://wbs.lt/en/",
    },
    personnel: [
      { name: "Ilja Andrusenko",  role: "Marketing & Sales",   phone: "+370 610 424 38" },
      { name: "Dmitrij Martynov", role: "Project Management",  phone: "+370 688 963 83" },
    ],
  },

  /* ── INSPECTION & TESTING ── */
  {
    slug: "tehnomet-survey",
    name: "Tehnomet Survey",
    fullName: "Tehnomet Survey OÜ",
    sector: "Inspection & Testing",
    sectorId: "inspection",
    countries: "EE",
    tagline: "Be aware. Be confident. Be safe.",
    heroDesc:
      "An actively developing service company specialising in ship repair and inspection of hull structures of marine vessels. Operating worldwide — 300 vessels inspected per year, 24/7 at your service.",
    aboutP1:
      "Tehnomet Survey is an actively developing service company, operating in the field of ship repair and inspection of hull structures of marine vessels, founded in 1998. We operate globally, with certified technicians holding all documents necessary for rapid international mobilisation to vessel locations on client request.",
    aboutP2:
      "Our quality management system is ISO 9001:2015 certified. We are approved by all major classification societies — BV, LR, DNV, RINA, ABS, KR, IR, NKK and WTA — ensuring every report and certificate we produce is accepted globally. Our vision is to become the most sought-after and successful company in the field of hull structure inspection.",
    services: [
      {
        icon: "waves",
        slug: "non-destructive-testing-ndt",
        title: "Non-Destructive Testing (NDT)",
        desc: "UT, MT, PT, VT, RT and ET methods performed by certified Level II and III technicians.",
        fullDesc:
          "Inspection of hull structures and welds without interrupting vessel operations. Our certified technicians detect surface and sub-surface defects to confirm structural integrity, with reports accepted by all major classification societies.\n\nUltrasonic Testing (UT) uses high-frequency sound waves to detect internal flaws in welds and hull structures. Magnetic Particle Testing (MT) reveals surface and near-surface discontinuities in ferromagnetic materials. Penetrant Testing (PT) uses capillary action of dye penetrants to identify surface-breaking defects. Visual Testing (VT) provides systematic examination of welds, structures and coatings. Radiographic Testing (RT) uses X-ray and gamma-ray imaging for full volumetric weld inspection. Eddy Current (ET) uses electromagnetic induction to detect surface and sub-surface flaws in conductive materials.\n\nAll technicians are certified to Level II and III under internationally recognised schemes. Reports are issued in accordance with classification society requirements and are accepted by BV, LR, DNV, RINA, ABS, KR, IR, NKK and WTA.",
      },
      {
        icon: "ruler",
        slug: "ultrasonic-thickness-measurement-utm-and-steel-supervision",
        title: "Ultrasonic Thickness Measurement (UTM) & Steel Supervision",
        desc: "Residual thickness mapping of hull structures, repair sketches, pitting survey and anchor chain calibration.",
        fullDesc:
          "Pursuant to the international rules of classification societies, all vessels are subject to periodical survey in connection with the technical condition of the hull. In the course of survey, the hull is inspected for deformations, cracks or structural breaches, and the obligatory measurement of residual thickness of the hull structures is carried out. The results of survey and measurements are compared with a relevant normative value.\n\nBased on the obtained results, the customer receives a full picture of work required or recommended to be carried out on board. Residual thickness of hull structures is measured by the most widely used UTM method.\n\nOur technicians are top-ranking experts with comprehensive training. Most hold higher education in the field of shipbuilding and ship repair. Inspection and survey can be carried out to the customer's preference — either a pre-docking inspection or dock-side on short notice. Reporting documentation is always submitted to the customer immediately upon completion.\n\nBeyond thickness measurements, our technicians provide repair sketches and weight calculations for steel renewal, pitting corrosion surveys in ballast and cargo tanks (with IACS-compliant reporting), and anchor chain calibration from the second special survey onwards — all in strict accordance with applicable classification society rules.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2997",
      email: "info@tehnometsurvey.ee",
      website: "https://tehnometsurvey.ee/en/",
    },
    certificates: [
      { name: "ISO 9001:2015",  issuer: "Bureau Veritas",     year: 2025 },
      { name: "Lloyd's Register", issuer: "Class Approval"               },
      { name: "DNV",              issuer: "Class Approval"               },
      { name: "Bureau Veritas",   issuer: "Class Approval"               },
      { name: "RINA",             issuer: "Class Approval"               },
      { name: "ABS",              issuer: "Class Approval"               },
    ],
    techData: [
      { label: { EN: "Vessels inspected/year", RU: "Судов в год",          ET: "Laevu aastas"          }, value: "300+"       },
      { label: { EN: "Mobilisation",           RU: "Мобилизация",          ET: "Mobilisatsioon"        }, value: "24/7"       },
      { label: { EN: "Coverage",               RU: "Охват",                ET: "Tegevuspiirkond"       }, value: "Worldwide"  },
      { label: { EN: "Founded",                RU: "Основана",             ET: "Asutatud"              }, value: "1998"       },
      { label: { EN: "NDT Level",              RU: "Уровень НК",           ET: "NDT tase"              }, value: "II & III"   },
    ],
  },
  {
    slug: "western-central-laboratory",
    name: "Western Central Laboratory",
    sector: "Inspection & Testing",
    sectorId: "inspection",
    countries: "LT",
    tagline: "Destructive and non-destructive testing, UTM, chemical analysis and welding certification",
    heroDesc:
      "Destructive and non-destructive testing, ultrasonic thickness measurement, chemical analysis, welding process control and welder certification. 40+ services, 1,500 projects annually.",
    aboutP1:
      "Western Central Laboratory is a modern laboratory that conducts destructive testing and non-destructive testing using various methods, ultrasonic thickness measurement, quality control and inspection, control of welding processes and other tests, measurements and analyses. A daughter company of Western Shipyard Group within BLRT Grupp, the laboratory was formally established in 2003, building on experience that traces back to 1969.",
    aboutP2:
      "With 35+ highly qualified specialists and over 1,500 projects completed annually, our strength is the ability to deliver high-quality services and consultations focused on customer needs that are provided worldwide — not only in our laboratories but also at customer sites including ships, factories and construction units. Staff hold IRATA certification for rope access work, reducing scaffolding costs. The laboratory is accredited by Lithuania's National Accreditation Bureau and recognised by Bureau Veritas, DNV, Lloyd's Register and Registro Italiano Navale.",
    services: [
      {
        icon: "eye",
        slug: "non-destructive-testing-ndt",
        title: "Non-Destructive Testing (NDT)",
        desc: "Visual (VT), ultrasonic (UT), magnetic particle (MT), penetrant (PT), radiographic (RT) and leak testing (LT) methods.",
        fullDesc:
          "Western Central Laboratory performs a full suite of NDT methods in accordance with LST EN ISO, ASTM, AWS and DNV standards. The laboratory is accredited by Lithuania's National Accreditation Bureau and recognised by Bureau Veritas, DNV-GL and Lloyd's Register.\n\nVisual Testing (VT) — systematic weld and structure examination. Ultrasonic Testing (UT) — high-frequency sound waves to detect internal flaws. Magnetic Particle Testing (MT) — surface and near-surface discontinuities in ferromagnetic materials. Penetrant Testing (PT) — capillary dye method to reveal surface-breaking defects. Radiographic Testing (RT) — X-ray and gamma-ray imaging for volumetric weld inspection. Leak Testing (LT) — verification of pressure-tight integrity.\n\nServices are carried out both in the laboratory and at customer sites — including ships, factories and construction units. Technicians hold IRATA certification and can perform testing by rope access, reducing the need for scaffolding.",
      },
      {
        icon: "beaker",
        slug: "destructive-testing-dt",
        title: "Destructive Testing (DT)",
        desc: "Tensile, bend, impact, hardness, microstructure and chemical composition tests to EN and ASTM standards.",
        fullDesc:
          "The laboratory conducts destructive (mechanical) testing to quickly and efficiently assess the mechanical properties and characteristics of materials, verifying compliance with technical documentation and standards. The laboratory is recognised by Bureau Veritas for destructive testing.\n\nTest methods include: tensile, bend, flattening and stretching tests; impact resistance (Charpy) tests; hardness tests; microstructure and macrostructure analysis; determination of chemical composition of metals and alloys; and other mechanical tests.\n\nTest reports are issued with full documentation and are suitable for submission to classification societies. The laboratory has extensive experience with ship structural steels, stainless steels and aluminium alloys.",
      },
      {
        icon: "ruler",
        slug: "ultrasonic-thickness-measurement-utm",
        title: "Ultrasonic Thickness Measurement (UTM)",
        desc: "Hull and structure thickness surveys for Class Renewal, CAP assessments and special surveys — over 2,000 ships tested.",
        fullDesc:
          "Ultrasonic thickness measurement is a non-destructive testing method to measure the thickness of an integral solid element based on the ultrasonic pulse return time to the surface. Western Central Laboratory performs UTM testing on commercial vessels, platforms, metal structures, pipelines, pressure vessels, cranes and bridges. The laboratory has tested over 2,000 ships throughout its history.\n\nThe laboratory is recognised by Bureau Veritas, DNV, Lloyd's Register and Registro Italiano Navale. Technicians comply with ISO 9712 international standards and carry GE and Cygnus instruments. Testing is conducted globally at shipyards, ports and at sea.\n\nService programmes include: Condition Assessment Program (CAP) — overall ship condition evaluation, operational inspections and hull strength assessment; Special Survey / Class Renewal — compliance with classification society requirements and IACS standards.",
      },
      {
        icon: "droplets",
        slug: "chemical-laboratory",
        title: "Chemical Laboratory",
        desc: "Air, water and petroleum product analysis; salt and dust contamination testing on metal surfaces.",
        fullDesc:
          "The chemical laboratory conducts testing across five primary domains: air pollution, water, petroleum products, determination of salt concentration on metal surfaces, and determination of dustiness of metal surfaces.\n\nUnder permit No. 1AT-293 from Lithuania's Environmental Protection Agency, the lab performs air testing (dust, nitrogen dioxide, sulphur dioxide, and industrial emission gases including NOₓ, CO, NH₃ and HCl) and water testing (pH, metals, phosphorus, BOD₇, suspended solids, chlorides, sulphates and nitrogen).\n\nPetroleum product analysis covers density, viscosity, mechanical impurities, water content and flash point. Surface contamination testing is accredited to ISO 8502-9:2001 (salt) and ISO 8502-3:2017 (dust) — essential for coating quality control in shipbuilding and ship repair.",
      },
      {
        icon: "shield",
        slug: "control-of-welding-processes-and-welder-certification",
        title: "Control of Welding Processes & Welder Certification",
        desc: "WPS/WPQR development, welding supervision, material inspection and welder qualification testing to ISO and EN standards.",
        fullDesc:
          "Western Central Laboratory provides comprehensive welding process control services: product welding work coordination, welding work supervision, welding work documentation management and related procedures.\n\nServices include development and approval of Welding Procedure Specifications (WPS) and Welding Procedure Qualification Records (WPQR) per LST EN ISO 15609 and LST EN ISO 15612; material inspection with preparation of Type 3.2 certificates per LST EN 10204; product quality control before, during and after welding; and expert consultation by internationally certified Welding Engineers (IWE) and Welding Inspectors (IWI/CSWIP).\n\nWelder certification is carried out under LST EN ISO / IEC 17024 standard, covering qualification testing per LST EN ISO 9606-1 (fusion welding, steels) and LST EN ISO 14732 (welding operators and weld setters for mechanised and automatic welding). The laboratory works in collaboration with Bureau Veritas, Lloyd's Register and DNV.",
      },
    ],
    contact: {
      address: "Minijos st. 180, 93269 Klaipėda, Lithuania",
      phone: "+370 46 483 666",
      email: "wcl@wcl.lt",
      website: "https://wcl.lt/",
    },
    personnel: [
      { name: "Rosvaldas Janušaitis", role: "Director",       phone: "+370 614 315 22", email: "r.janusaitis@wcl.lt" },
      { name: "Arūnas Toliušis",      role: "Head of Sales",  phone: "+370 650 408 04", email: "a.toliusis@wcl.lt"   },
    ],
  },

  /* ── ENGINEERING ── */
  {
    slug: "blrt-era",
    name: "BLRT ERA",
    fullName: "BLRT ERA OÜ",
    sector: "Engineering",
    sectorId: "engineering",
    countries: "EE",
    tagline: "Electrical engineering for shipbuilding, offshore energy and industry",
    heroDesc:
      "BLRT ERA was established in Tallinn in 1948 and since 1996 is a subsidiary of BLRT Grupp, one of the largest industrial holdings in the Baltic Sea region. Operating in the fields of shipbuilding and ship repair, offshore energy, and the industrial sector.",
    aboutP1:
      "BLRT ERA OÜ has been delivering electrical engineering solutions since 1948 — one of the most experienced marine electrical contractors in the Baltic region. The company operates branches across Estonia, Lithuania and Finland, with mobile teams capable of providing worldwide service. Core business covers shipbuilding and ship repair, offshore energy and industrial operations.",
    aboutP2:
      "BLRT ERA is the official key partner for Moteurs Leroy-Somer SAS (Nidec Group), holding exclusive rights to upgrade, maintain and repair their electric generators and alternators across Estonia, Latvia, Lithuania and Finland. The company is also an authorised Danfoss distributor for variable speed motor control equipment. Certified to ISO 9001, 14001, 18001 and 45001 in Estonia and Lithuania, and additionally holds RINA and EASA (Electrical Apparatus Service Association) accreditations.",
    services: [
      {
        icon: "wrench",
        slug: "electrical-machine-repair-and-maintenance",
        title: "Electrical Machine Repair & Maintenance",
        desc: "Repair and maintenance of AC/DC electrical machines, including generators and motors.",
        fullDesc:
          "BLRT ERA performs repair and maintenance of AC/DC electrical machines including generators, motors and alternators. The company operates a balancing machine with 3,500 kg load capacity and a dedicated testing stand for AC/DC engines and generators (10 t + 5 t crane lifting capacity), enabling thorough overhaul and verification of repaired units before return to service.\n\nAs the official key partner for Moteurs Leroy-Somer SAS (Nidec Group), BLRT ERA holds exclusive regional rights to service their electric generators and alternators across Estonia, Latvia, Lithuania and Finland. Over 70,000 engines and generators have been repaired and serviced throughout the company's history.",
      },
      {
        icon: "zap",
        slug: "switchboard-manufacturing-and-modification",
        title: "Switchboard Manufacturing & Modification",
        desc: "Manufacturing of new switchboards and regulating stations; modifications and upgrades of existing switchboards.",
        fullDesc:
          "BLRT ERA manufactures switchboards and regulating stations to customer specifications, and carries out modifications and upgrades to existing installations. Switchboard testing and testing of protection settings are performed in connection with classification society surveys.\n\nThe company's electricians carry out assembly and installation of electrotechnical equipment and cable works, including cable route installation on new vessels and during repair projects. All work is performed to classification society requirements.",
      },
      {
        icon: "circuit",
        slug: "automation-system-repair-and-adjustment",
        title: "Automation System Repair & Adjustment",
        desc: "Repair, adjustment and upgrade of automation systems and radio navigation equipment.",
        fullDesc:
          "BLRT ERA's automation engineers repair, adjust and upgrade automation systems installed on vessels and industrial facilities. Services include adjustment of automation systems, repair of automation systems, and troubleshooting of complex control installations.\n\nRadio navigation equipment adjustment is provided with the aid of specialist partners. Infrared thermography (IRT) and thermal imaging of electrical switchboards and components is performed as a predictive maintenance and fault-finding service, identifying hotspots and anomalies before they cause failures.",
      },
      {
        icon: "gauge",
        slug: "generator-and-drive-services",
        title: "Generator & Drive Services",
        desc: "Delivery, retrofitting and AVR servicing of generators; drive delivery and installation for propulsion, cranes, pumps and winches.",
        fullDesc:
          "BLRT ERA supplies and retrofits generators to vessels and industrial facilities, and provides troubleshooting, service and upgrade of generator voltage regulation systems (AVRs). The company is the authorised Danfoss distributor in the region, offering the complete range of variable speed motor control equipment and products.\n\nDrive delivery and retrofitting covers most applications — propulsion, cranes, pumps and winches — with experienced engineers handling installation and commissioning. These services extend across the marine, offshore energy and industrial sectors served by the company.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2307",
      email: "info@blrtera.ee",
      website: "https://blrtera.ee/en/",
    },
    personnel: [
      { name: "Oleg Pljusnin",  role: "Board Member",   phone: "+372 610 2307", email: "o.pljusnin@blrtera.ee" },
      { name: "Andrei Miklin",  role: "Head of Sales",  phone: "+372 56047847", email: "a.miklin@blrtera.ee"   },
    ],
  },
  {
    slug: "bars-elekter",
    name: "Bars Elekter",
    sector: "Engineering",
    sectorId: "engineering",
    countries: "EE · NO",
    tagline: "Multidisciplinary engineering services for the offshore and marine industry",
    heroDesc:
      "A subsidiary of BLRT Grupp operating branches in Estonia and Norway. 500+ successfully completed projects worldwide, 10 types of multidisciplinary services, 3 patented products.",
    aboutP1:
      "Bars Elekter is a subsidiary of BLRT Grupp, one of the largest industrial holdings in the Baltic Sea region. The company specialises in electrical engineering, installation and commissioning for the offshore and marine industries, with branches in Estonia and Norway serving both the Norwegian offshore sector and Baltic marine clients.",
    aboutP2:
      "With a team of professionals with extensive experience in the offshore and marine industry, Bars Elekter delivers Services, Products and Solutions centred on customer satisfaction and environmental responsibility. The company is ISO 9001:2015 certified (LRQA) and holds 3 patents for its products. Core values: Focus on People, Reliability, Efficiency and Development.",
    services: [
      {
        icon: "circuit",
        slug: "products",
        title: "Products",
        desc: "A complete range of reliable, very compact shore connection (HVSC) shipsets for Ro-Ro, tanker and marine-unit vessels — retrofit or new-build.",
      },
      {
        icon: "zap",
        slug: "services",
        title: "Services",
        desc: "Turnkey engineering: pre-project feasibility and basic design, project management and detailed design, FAT, site commissioning and after-sales.",
      },
      {
        icon: "gauge",
        slug: "solutions",
        title: "Solutions",
        desc: "Integrated Energy Conversion Solutions — PTI, PTH, PTO and Energy Storage Solutions for power balancing, peak shaving and grid stability.",
      },
      {
        icon: "droplets",
        slug: "green-ict-projects",
        title: "Green ICT Projects",
        desc: "Norwegian Green ICT-supported R&D developing shore-connection switchboard solutions that cut ships' CO₂ emissions in port.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 5326 9035",
      email: "info@barselekter.com",
      website: "https://barselekter.com/en/",
    },
  },
  {
    slug: "blrt-masinaehitus",
    name: "BLRT Masinaehitus",
    sector: "Engineering",
    sectorId: "engineering",
    countries: "EE",
    tagline: "Serial production and machining of metal products and structures",
    heroDesc:
      "A modern and dynamically developing machine building company established in 2004. 6,000 m² production area, 50 specialists, 14 CNC machines — serving Central Europe and Scandinavia.",
    aboutP1:
      "BLRT Masinaehitus is a modern and dynamically developing machine building company established in 2004, operating as a subsidiary of BLRT Grupp — the leading industrial holding in the Baltics. The company specialises in series production and machining of metal products and structures for power and transport engineering, cellulose and paper, wood, and other industrial sectors.",
    aboutP2:
      "Operating from a 6,000 m² production facility in Tallinn with 50 specialists and 14 CNC machines, BLRT Masinaehitus serves primary markets in Central Europe and Scandinavia. The company is certified to ISO 9001:2015, ISO 14001:2015, EN 1090-1 and EN ISO 3834-2:2021 (welding capability).",
    services: [
      {
        icon: "layers",
        slug: "series-production-and-metal-structures",
        title: "Series Production & Metal Structures",
        desc: "Serial production and machining of metal components and structures for power, transport, cellulose and paper, and wood industries.",
        fullDesc:
          "BLRT Masinaehitus specialises in series production and machining of metal products and structures for industrial applications. The company works from client drawings to manufacture components and assemblies for power and transport engineering, cellulose and paper production, wood processing and related sectors.\n\nThe 6,000 m² Tallinn production facility houses vertical milling machines, horizontal milling machines, turning machines and welding equipment. All welding is performed under EN ISO 3834-2:2021 certification, and structural steel fabrication meets EN 1090-1 requirements. Manufacturing documentation, material traceability and certificate packages accompany every delivery.",
      },
      {
        icon: "gauge",
        slug: "cnc-machining",
        title: "CNC Machining",
        desc: "Precision CNC milling and turning on 14 machines for tight-tolerance components.",
        fullDesc:
          "With 14 CNC machines covering vertical milling, horizontal milling and turning operations, BLRT Masinaehitus delivers precision-machined components to tight dimensional tolerances for demanding industrial customers. Components are produced to client-approved engineering drawings with full dimensional inspection records.\n\nCNC machining capability supports both series production runs and smaller batch orders, making the company a flexible partner for OEM clients in the power generation, transport and process industries of Central Europe and Scandinavia.",
      },
      {
        icon: "wrench",
        slug: "welding-and-fabrication",
        title: "Welding & Fabrication",
        desc: "Certified welding and structural fabrication to EN ISO 3834-2 and EN 1090-1.",
        fullDesc:
          "BLRT Masinaehitus performs welded fabrication certified to EN ISO 3834-2:2021 and structural steel fabrication to EN 1090-1. Welded assemblies range from precision sub-components to larger structural frames and weldments, produced by certified welders working to qualified procedures.\n\nThe company's welding and fabrication capability is integral to its series production business — components combining machined and welded elements are a common product. Export customers in Central Europe and Scandinavia receive full certificate packages including material certificates, welding records and dimensional inspection reports.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2113",
      email: "info@masinaehitus.ee",
      website: "https://masinaehitus.ee/en/",
    },
    personnel: [
      { name: "Priit Lind",            role: "Board Member",  email: "priit.lind@masinaehitus.ee" },
      { name: "Veronika Demeskevits",  role: "Sales Manager", phone: "+372 528 6511"               },
    ],
  },
  {
    slug: "marketex-marine",
    name: "Marketex Marine",
    sector: "Engineering",
    sectorId: "engineering",
    countries: "EE",
    tagline: "Sophisticated large-sized carbon steel solutions for fish farming and small shipbuilding",
    heroDesc:
      "Marketex Marine offers solutions for the small shipbuilding and fish farming markets from project design and development through to the finished product delivery. Over 400 barges built, in the Norwegian market since 2000.",
    aboutP1:
      "Established in 2013 as a subsidiary of BLRT Grupp, Marketex Marine is the leading European manufacturer of carbon steel feed barges for the aquaculture industry. The company has served the Norwegian market since 2000, building over 400 feed barges and leveraging more than 120 qualified specialists, state-of-the-art equipment and direct sea access at its Tallinn facility.",
    aboutP2:
      "Marketex Marine delivers sophisticated large-sized carbon steel solutions as fully customised turnkey projects covering design development, construction, painting, piping, electrical works, hydraulic and pneumatic equipment installation, lining and outfitting. Feed barges operate globally — in Norway, Chile, Japan and Greece — with feed storage capacities from 100 to 900 tonnes. Certified to ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, EN ISO 3834-2, DNV 402B and NS 9415.",
    services: [
      {
        icon: "ship",
        slug: "feed-storage-barge-construction",
        title: "Feed Storage Barges",
        desc: "Turnkey carbon steel feed barges for aquaculture, in capacities up to 900 tonnes across Classic, Comfort, Panorama and Basic barge types.",
      },
      {
        icon: "layers",
        slug: "offshore-projects",
        title: "Offshore Projects",
        desc: "Feed barges built to operate offshore — roll-and-pitch control, V-shape hull and hybrid waterborne feeding for exposed, rough sea conditions.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2553",
      email: "info@marketexmarine.net",
      website: "https://marketexmarine.net/en/",
    },
    personnel: [
      { name: "Fjodor Kvich",         role: "Chairman",               phone: "+372 505 2516", email: "fjodor.kvich@marketexmarine.net"       },
      { name: "Dmitri Gornostajev",   role: "Board Member, Sales",    phone: "+372 524 7518", email: "dmitri.gornostajev@marketexmarine.net" },
    ],
  },
  {
    slug: "marketex-offshore",
    name: "Marketex Offshore",
    fullName: "Marketex Offshore Constructions",
    sector: "Engineering",
    sectorId: "engineering",
    countries: "EE",
    tagline: "High-tech metal structures and offshore energy solutions",
    heroDesc:
      "Large-scale metal structures, aluminium service vessels and offshore wind energy foundations.",
    aboutP1:
      "Marketex Offshore Constructions specialises in the design and manufacture of high-complexity metal structures for the offshore energy sector. The company produces aluminium service vessels, offshore wind energy foundations and heavy steel structures for demanding marine environments.",
    services: [
      {
        icon: "layers",
        slug: "offshore-steel-structures",
        title: "Offshore Steel Structures",
        desc: "Large-scale structural steel for offshore platforms and energy foundations.",
        fullDesc:
          "Marketex Offshore Constructions produces large-scale structural steel assemblies for offshore oil and gas platforms, floating production units and offshore renewable energy installations. The company's fabrication capability covers everything from individual structural members and node joints to complex multi-tonne modules and frames.\n\nAll fabrication is performed to applicable offshore industry standards, with welding procedure qualifications, NDT inspection and dimensional control records forming part of the delivery documentation. Materials traceability is maintained from mill certificate through fabrication to final inspection.",
      },
      {
        icon: "ship",
        slug: "aluminium-vessels",
        title: "Aluminium Vessels",
        desc: "High-speed aluminium crew transfer and service vessels for offshore wind farms.",
        fullDesc:
          "The offshore wind industry's need for fast, seaworthy crew transfer and service vessels has created strong demand for high-quality aluminium workboats. Marketex Offshore designs and builds aluminium vessels optimised for the offshore wind service market — lightweight, fast and stable in choppy sea conditions.\n\nAluminium construction requires specialised welding and fabrication skills distinct from steel work. The Marketex Offshore team has accumulated these capabilities through successive vessel contracts, delivering craft that meet the stringent requirements of classification societies and wind farm operators for crew safety and availability.",
      },
      {
        icon: "zap",
        slug: "offshore-wind-foundations",
        title: "Offshore Wind Foundations",
        desc: "Transition pieces and secondary steel for wind turbine foundations.",
        fullDesc:
          "Transition pieces and secondary steel structures are critical components of offshore wind turbine foundations. Marketex Offshore manufactures these precision-fit steel components to the exact dimensional tolerances required for successful installation on monopile foundations at sea.\n\nManufacturing quality and dimensional accuracy are paramount in this application, as installation is performed at sea with limited scope for field adjustment. All components are manufactured to approved drawings, inspected by NDT and dimensionally checked before despatch, with full documentation packages provided to the wind farm developer and installation contractor.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      website: "https://www.marketex.ee/",
    },
  },

  /* ── STEEL & MATERIALS ── */
  {
    slug: "elme-metall",
    name: "Elme Metall",
    sector: "Steel & Materials",
    sectorId: "materials",
    countries: "EE · LV · LT · FI · PL",
    tagline: "Comprehensive solutions for rolled steel products and processing services",
    heroDesc:
      "Elme Metall is a company offering a wide range of rolled steel products and processing services in its service centres equipped with state-of-the-art high-performance equipment. 5 countries, 6 service centres, 10 warehouses, 1,000 t/day, 20,000+ customers.",
    aboutP1:
      "Elme Metall was founded on 31 May 2001 and has grown into the largest metal service centre in the Baltic States, with 400 employees and 195 million euros in sales volume. Operating in Estonia, Lithuania, Latvia, Poland and Finland, the company leverages extensive experience and effective procurement and logistics to deliver comprehensive solutions depending on clients' specific needs for rolled steel products and processing services.",
    aboutP2:
      "The company's vision is to become the largest metal service centre in the Baltic States and Scandinavia, providing services in the processing and pre-processing of metal products. Elme Metall serves the energy, steel structures fabrication, infrastructure, shipbuilding and ship repair, construction, and mechanical engineering sectors. Its mission is to facilitate the long-term development of customers' business and increase their competitiveness in the market.",
    services: [
      {
        icon: "layers",
        slug: "flat-products-prefabrication",
        title: "Flat Products Prefabrication",
        desc: "Plasma, oxyfuel, water jet and laser cutting; sheet bending and rolling for carbon steel, stainless steel and aluminium.",
        fullDesc:
          "Elme Metall's flat products prefabrication service covers processing and fabrication of parts from sheet metal materials using multiple cutting and forming technologies.\n\nPlasma cutting handles 3–50 mm thick material across a 3,500 × 22,000 mm operating area to ISO 9013–432 tolerances. Oxyfuel gas cutting processes thicker materials from 15–200 mm across a 3,600 × 34,000 mm area using dual portals with three cutters. Water jet cutting operates on materials up to 200 mm thick across a 3,000 × 8,000 mm area at 5,200 bar, accommodating aluminium alloys, stainless steel and carbon steel. Laser cutting with 6 or 10 kW systems processes carbon steel, stainless steel and aluminium across a 2,500 × 8,000 mm area to ISO 9013–221/331 tolerances.\n\nForming capabilities include sheet bending (1–50 mm, 400–1,250-tonne presses producing angles, ducts, U-channels, cones and Z-profiles) and sheet rolling (7–50 mm, up to 30,000 mm length, using four 4,000 mm-wide rolls). An automated blank manufacturing line provides integrated drilling, threading (M8–M30) and cutting. All operations are certified to ISO and EN 1090.",
      },
      {
        icon: "building",
        slug: "prefabrication-of-structural-tube-and-merchant-sections",
        title: "Prefabrication of Structural, Tube and Merchant Sections",
        desc: "Robotic processing, profile bending and cutting of structural sections, round pipes and hollow sections up to 18,000 mm.",
        fullDesc:
          "Elme Metall provides comprehensive prefabrication services for processing and fabrication of parts from profiled steel products, including structural sections, tubes and merchant bars.\n\nProfile bending is performed with a 400-tonne press accommodating profiles up to HEM 1000 size and part weights up to 9,000 kg. Three machining robot systems handle different material types: sections processing (10–600 mm thickness, 60–1,250 mm width, up to 18,000 mm length), round pipe processing (diameters 60–1,150 mm, maximum 16,000 mm length), and hollow sections processing (square 60 × 60 to 350 × 350 mm and rectangular sections, up to 16,000 mm length).\n\nFinishing operations include profile cutting to size, drilling of orifices in profiles, and oxyfuel or plasma cutting. Marking capabilities include machine stamping with fonts up to 10 mm. The operation holds ISO Cutcentre and EN 1090 certifications.",
      },
      {
        icon: "ruler",
        slug: "reinforcement-products-prefabrication",
        title: "Reinforcement Products Prefabrication",
        desc: "Welded mesh, reinforcement cages and cold-formed rebar for construction; laboratory testing per EN ISO 15630.",
        fullDesc:
          "Elme Metall's reinforcement products prefabrication service covers processing and fabrication of parts from reinforcing bars for construction applications.\n\nReinforcement mesh is fabricated on high-performance equipment from cold-formed materials per EN 10080 standards, with meshes up to 6,000 mm length and 2,400 mm width, rod diameters 4–12 mm. Reinforcement cages are manufactured by three methods: resistance welding (round, square and rectangular sections up to 12,000 mm), semiautomatic CO₂ welding per EN ISO 17660-1 (diameters up to 1,400 mm), and manual assembly with modern welding equipment.\n\nCold-formed riffled reinforcing bars are produced in diameters 5–12 mm in rolls weighing approximately 2.5 tonnes, complying with EN 10080:2006 and SFS1300:2014. Cutting and bending equipment handles automatic cutting from rolls (Ø 4–16 mm) and straight stock (Ø 8–40 mm) with 2D/3D bending. A service centre laboratory fitted with modern equipment offers testing per EN ISO 15630-1:2010 and EN ISO 15630-2:2010 with Swedish calibration certification.",
      },
      {
        icon: "shield",
        slug: "surface-treatment-and-hot-dip-galvanization",
        title: "Surface Treatment and Hot-Dip Galvanization",
        desc: "Shotblasting, priming and hot-dip galvanizing of parts and steel structures to EVS EN ISO 1461:2022.",
        fullDesc:
          "Elme Metall provides surface treatment and hot-dip galvanizing of parts and steel structures across several integrated processes.\n\nFlat products are processed on an automatic shotblasting and priming line accepting materials 5–600 mm thick and up to 3,200 mm wide, lengths 3,000–16,000 mm, with zinc silicate and epoxy primers applied at 20 ± 5 µm. A dedicated automatic line processes structural profiles up to 18,000 mm in length (6 mm minimum thickness) using 6 turbines at 18.5 kW. Heating infrastructure includes a pre-heater reaching 300 °C and a fabrication painting system with 4 spray guns for profiles up to 18,000 mm.\n\nThe main hot-dip galvanizing bath measures 13 m long, 3 m deep and 1.6 m wide, applying coatings up to 400 µm per EVS EN ISO 1461:2022 standard, with 12-tonne crane capacity. Services are delivered by affiliated companies Toorik, Metalgama, Cutcentre and Elme metalas, all holding the required ISO quality certifications.",
      },
    ],
    contact: {
      address: "Vana-Narva mnt 24a, 74114 Maardu, Estonia",
      phone: "+372 610 2554",
      email: "elmemetall@blrt.ee",
      website: "https://elmemetall.eu/en/",
    },
    personnel: [
      { name: "Georgiy Grigoryan",  role: "Chairman",            phone: "+372 610 2801" },
      { name: "Maksim Malanjins",   role: "Commercial Director", phone: "+371 2322 9596" },
    ],
    certificates: [
      { name: "ISO 9001:2015",     issuer: "Bureau Veritas", year: 2025 },
      { name: "ISO 14001:2015",    issuer: "Bureau Veritas", year: 2024 },
      { name: "EN 1090-1:2009+A1", issuer: "EXC 3 Execution Class"      },
      { name: "ISO Cutcentre",     issuer: "Cutting Quality Certification" },
    ],
    techData: [
      { label: { EN: "Countries",          RU: "Страны",            ET: "Riigid"           }, value: "EE · LV · LT · FI · PL" },
      { label: { EN: "Service Centres",    RU: "Сервисные центры",  ET: "Teeninduskeskused" }, value: "6"                       },
      { label: { EN: "Warehouses",         RU: "Склады",            ET: "Laod"             }, value: "10"                      },
      { label: { EN: "Daily throughput",   RU: "Суточная мощность", ET: "Päevane läbilaskevõime" }, value: "1,000 t/day"       },
      { label: { EN: "Customers",          RU: "Клиенты",           ET: "Kliendid"         }, value: "20,000+"                 },
      { label: { EN: "Employees",          RU: "Сотрудники",        ET: "Töötajad"         }, value: "400"                     },
    ],
    products: [
      {
        name: "Hot-Rolled Steel Sheets & Plates",
        desc: "S235–S355 hot-rolled plates and coils stocked in thicknesses from 3 mm to 150 mm; laser and plasma cut to order.",
        image: "https://images.unsplash.com/photo-1568347877321-f8935c7dc5a3?w=600&q=75&auto=format&fit=crop",
      },
      {
        name: "Structural Profiles & Beams",
        desc: "IPE, HEA/HEB, UPN, UPE and L-profiles in carbon and weathering steel grades — available from stock or cut to length.",
        image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=600&q=75&auto=format&fit=crop",
      },
      {
        name: "Laser & Plasma Cut Parts",
        desc: "Precision laser (up to 25 mm) and plasma (up to 100 mm) cutting, bending, drilling and shot-blasting to customer drawings.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=75&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "elme-messer-gaas",
    name: "Elme Messer Gaas",
    sector: "Steel & Materials",
    sectorId: "materials",
    countries: "EE",
    tagline: "Leading gas company in the Baltic region",
    heroDesc:
      "A reliable supplier of technical gases for your continuous production process. Joint venture with Germany's Messer Group since 1999 — 3,000+ Estonian clients, 130+ gas types.",
    aboutP1:
      "The name ELME MESSER GAAS has been associated with expertise in industrial gases for more than 25 years. Established in 1999 as a joint venture between AS BLRT Grupp (Estonia) and MESSER GROUP (Germany), the company manufactures and supplies oxygen, nitrogen, argon, carbon dioxide, hydrogen, helium, inert welding gases, specialty gases, medical-grade gases and gas mixtures, together with application equipment.",
    aboutP2:
      "Elme Messer Gaas serves over 3,000 customers in Estonia across the steel and metals, chemicals, food and pharmaceuticals, automotive, electronics, medicine, research and environmental technology sectors. Messer Group is the world's largest independent industrial gas specialist, bringing global production and logistics expertise to the joint venture. Customers benefit from fast next-day delivery (orders before 15:00), 130+ gas types, a 24/7 web shop at GasBox.ee, and a broad sales network across Estonia.",
    services: [
      {
        icon: "beaker",
        slug: "gas-in-cylinders-and-packages",
        title: "Gas in Cylinders and Packages",
        desc: "Compressed gas cylinders and bundles for smaller-quantity needs — technical, welding, food, medical, specialty and breathing gases.",
        fullDesc:
          "Cylinders or bundles are suitable for supplying gas in smaller quantities. The size range varies from very small cylinders for mobile use up to bundles for big demands. Cylinders vary in case materials (steel, aluminium, plastic) and valve configurations (standard valve or built-in pressure regulator), operating at a typical working pressure of 200 bar.\n\nRecent developments — including the modern MEGAPACK C4 bundles featuring Duplex technology — turn this supply format into a modern and attractive alternative for customers requiring reliable, flexible access to gas without bulk infrastructure. Available product categories include technical gases, welding and cutting gases, gases for the food industry, medical gases, specialty gases, and breathing gases.",
      },
      {
        icon: "droplets",
        slug: "liquefied-gases",
        title: "Liquefied Gases",
        desc: "Cryogenic liquid gas supply in tanks for medium and large-volume industrial customers.",
        fullDesc:
          "Liquefied gases are supplied in cryogenic form for medium and large-volume customers, providing a cost-effective alternative to cylinder deliveries for high-consumption operations. Liquid oxygen, nitrogen, argon and CO₂ are delivered by tanker to customer-site cryogenic tanks, where they are vaporised on demand to supply process and welding gases at the required flow rates.\n\nElme Messer Gaas manages bulk tank installation, maintenance and telemetry monitoring, enabling automatic reordering to ensure uninterrupted supply. This supply model is particularly suited to industrial production, welding fabrication, food processing and medical facility applications requiring continuous, high-volume gas availability.",
      },
      {
        icon: "layers",
        slug: "dry-ice",
        title: "Dry Ice",
        desc: "Solid CO₂ at −79 °C for cooling and dry ice blasting — supplied in pellets and blocks.",
        fullDesc:
          "Dry ice is solid CO₂ with a temperature of approximately −79 °C at atmospheric pressure. It is non-toxic, non-flammable, inert, tasteless and odourless, with a density of approximately 1,500 kg/m³ in compact form. Dry ice evaporates without leaving residue, making it ideal for applications where no secondary waste is acceptable.\n\nElme Messer Gaas manufactures dry ice by expanding liquid carbon dioxide through a pelletiser, forming dry ice snow that is pressed through an extruder plate into pellets or larger blocks. Applications include cooling (blocks and larger pellets serve as an effective cooling medium with high cooling capacity) and dry ice blasting (a powerful, gentle, dry and ecologically friendly cleaning method producing no secondary waste). Standard pellet diameter for blasting is 3 mm, with 1.7 mm pellets available for delicate surfaces. The company provides convenient full service including supply in insulated boxes and cost-effective all-in-one rental concepts.",
      },
      {
        icon: "wrench",
        slug: "gas-equipment-and-supply-systems",
        title: "Gas Equipment and Supply Systems",
        desc: "Fittings, regulators, valves and complete gas supply systems from cylinder connections to gas cabinets.",
        fullDesc:
          "Elme Messer Gaas supplies the full range of gas equipment and supply systems — from individual fittings and pressure regulators to complete piped gas installations. The product range covers valves, regulators, hoses, manifolds, flow meters and gas cabinets configured for the customer's specific gas types and consumption profile.\n\nBeyond equipment supply, the company offers consultations, training, audits, installation and optimisation of production processes. E-services enable customers to manage their account, view invoices and control documentation online. The technical team advises on supply system design and safe gas handling, ensuring compliance with applicable standards and minimising operational risk at customer sites.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2052",
      email: "info@elmemesser.ee",
      website: "https://www.elmemesser.ee/",
    },
    products: [
      {
        name: "Technical & Welding Gases",
        desc: "Oxygen, nitrogen, argon, CO₂, hydrogen and acetylene in cylinders, bundles and bulk — covering technical, welding and cutting applications.",
        image: "https://images.unsplash.com/photo-1589211188318-737e59cdb411?w=600&q=75&auto=format&fit=crop",
      },
      {
        name: "Specialty & Medical Gases",
        desc: "High-purity calibration gas mixtures, medical oxygen, nitrous oxide, helium and breathing gases for healthcare, lab and research customers.",
      },
      {
        name: "Dry Ice (Solid CO₂)",
        desc: "Dry ice pellets (3 mm / 1.7 mm) and blocks at −79 °C for cooling chains and dry-ice blasting — supplied with insulated containers.",
        image: "https://images.unsplash.com/photo-1590953850766-32da74e5e3c8?w=600&q=75&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "elme-trans",
    name: "Elme Trans",
    sector: "Steel & Materials",
    sectorId: "materials",
    countries: "EE · LV · LT · UA",
    tagline: "International transportation and equipment rental services",
    heroDesc:
      "Transport company ELME Trans provides international and local transportation and equipment rental services. Established 2001, EU Authorised Economic Operator since 2014, with branches in Estonia, Latvia, Lithuania and Ukraine.",
    aboutP1:
      "Elme Trans renders international transportation and equipment rental services as part of BLRT Grupp. Established in 2001, the company operates branches in Estonia, Latvia, Lithuania and Ukraine, covering the Baltic States, Scandinavia, and Eastern and Western Europe. Since 2014 the company has held authorised economic operator status within the European Union, reflecting compliance with EU standards for dangerous goods transportation.",
    aboutP2:
      "Elme Trans specialises in shipping dangerous, bulky and heavy cargo, with all vehicles carrying ADR certification for dangerous goods. The company manages over 300 equipment units across Estonia and Lithuania — including telescopic loaders, scissor lifts, diesel and battery-powered lifts up to 41 metres, forklift tracks, office cabins and scaffolding systems — and also offers car rental.",
    services: [
      {
        icon: "truck",
        slug: "international-and-local-transport",
        title: "International and Local Transport",
        desc: "Dangerous, bulky and heavy cargo across the Baltic States, Scandinavia, Eastern and Western Europe — ADR-certified fleet.",
        fullDesc:
          "Elme Trans provides international and local transportation services with specialisation in hazardous materials. The company handles dangerous, bulky and heavy cargo shipping in the Baltic States, Scandinavia, Eastern and Western Europe. All vehicles carry ADR modification and are certified to transport dangerous goods.\n\nThe fleet operates lorries with tanks designed for liquefied gas transport, curtain-sided vehicles and bed trucks. Branch offices in Estonia, Latvia, Lithuania and Ukraine enable service delivery throughout the Baltic region and into broader European markets. Since 2014 the company has held authorised economic operator status within the EU, reflecting compliance with EU standards for dangerous goods transportation.",
      },
      {
        icon: "gauge",
        slug: "equipment-rental",
        title: "Equipment Rental",
        desc: "Over 300 units across Estonia and Lithuania — telescopic loaders, scissor lifts, aerial work platforms to 41 m, forklifts, cranes and construction cabins.",
        fullDesc:
          "Elme Trans manages over 300 equipment units for rental across Estonia and Lithuania. The fleet covers a comprehensive range of equipment for industrial and construction operations: telescopic equipment including JLG 450-AJ aerial work platforms (16 m reach); scissor lifts reaching up to 12 metres; diesel and battery-powered work platforms reaching up to 41 metres; telescopic trailers for extended reach; heavy-duty lifting equipment including Liebherr 55 LTM cranes; earthmoving equipment including JCB 4CX; portable office and accommodation cabins (2.5 × 6 m); portable fencing (3.5 × 2 m); and specialised tools including diesel heating units (Master BV 690, 200 kW).\n\nRental is available for short and long-term periods across Estonia and Lithuania, with multilingual support teams (Estonian, English, Russian, Lithuanian).",
      },
      {
        icon: "package",
        slug: "car-rental",
        title: "Car Rental",
        desc: "Peugeot Partner and Peugeot Expert vehicles available for short and long-term rental.",
        fullDesc:
          "Elme Trans offers car rental services alongside its transport and equipment rental operations. Available vehicle categories include cars (Peugeot Partner) and minivans (Peugeot Expert), suitable for business use and site mobility needs. Rental is operated from the company's Tallinn base at Kopli 103.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2408",
      email: "info@elmetrans.ee",
      website: "https://elmetrans.ee/en/",
    },
    personnel: [
      { name: "Ilja Šustrov",        role: "Sales Manager (Equipment Rental)", phone: "+372 5683 6297" },
      { name: "Vadim Kolenchenko",   role: "International Transport",           phone: "+372 5302 1726" },
      { name: "Ricards Vaitonis",    role: "Director, Latvia",                  phone: "+371 29602961"  },
      { name: "Zygimantas Kristutis",role: "Head of Rental, Lithuania",         phone: "+370 655 79634" },
    ],
  },

  /* ── PORT & MARINE SERVICES ── */
  {
    slug: "vene-balti-sadam",
    name: "Vene-Balti Sadam",
    fullName: "Vene-Balti Sadam OÜ",
    sector: "Port & Marine Services",
    sectorId: "port",
    countries: "EE",
    tagline: "Port authority and towing services on the Kopli peninsula, Tallinn",
    heroDesc:
      "Port and towing services on the Kopli peninsula in Tallinn — 168.3 ha water area, 2,360 m of berths, two tugs and a 100-tonne floating crane available year-round.",
    aboutP1:
      "Founded in 2000, Vene-Balti Sadam OÜ is a subsidiary of BLRT Grupp, the largest industrial holding in the Baltics. The port occupies the Kopli peninsula in Tallinn with a water area of 168.3 hectares and 2,360 metres of total berth length, offering year-round safe navigation and a full range of towing, mooring and crane services.",
    aboutP2:
      "As port authority, Vene-Balti Sadam manages berth operations and water traffic coordination for the BLRT Grupp maritime cluster. The port serves vessels up to 30,000 DWT and supports cargo handling, vessel repair and maintenance, short-term lay-up, ship scrapping, and industrial offshore construction activities.",
    services: [
      {
        icon: "anchor",
        slug: "berths",
        title: "Berths",
        desc: "2,360 m of berths with fresh water, compressed air and electrical supply connections for vessels up to 30,000 DWT.",
        fullDesc:
          "Vene-Balti Sadam operates 2,360 metres of total berth length on the Kopli peninsula, with individual berths ranging from 37 to 158 metres and depths of 4.3 to 10.6 metres. Each berth is equipped with fresh water supply, compressed air and electrical power connections.\n\nThe port features a North Basin (max vessel 185 m × 35 m, draft 10.2 m) and a South Basin (max vessel 200 m × 35 m, draft 7.1 m), both with a minimum capacity of 7,500 tonnes. Three floating docks with deck lengths of 110–180 metres accommodate vessels of 4,500–12,000 DWT. Berths support cargo handling, vessel repair and maintenance, short-term lay-up, ship scrapping, launching aquaculture barges, main engine trials and industrial offshore construction.",
      },
      {
        icon: "ship",
        slug: "tugs",
        title: "Tugs",
        desc: "Two tugs available in port for mooring and manoeuvring assistance, extendable to other Estonian ports on request.",
        fullDesc:
          "Vene-Balti Sadam operates two tugs available around the clock for mooring and manoeuvring assistance within the port, with services extendable to other Estonian ports on request.\n\nThe fleet includes AGAR, an azimuth-propulsion tug (Rolls-Royce system) rated at 3,042 BHP / 2,237 kW with a bollard pull of 45 tonnes and ice class 1A. AGAR measures 25.4 m × 8.8 m with a draft of 3.24 m, carries a fore towing winch rated at 100 tonnes with 180 m of 50 mm towing line, and is equipped with a Palfinger PC 2700 M deck crane and a Volvo Penta fire-fighting system. Tug orders within the port are placed directly via Vene-Balti Sadam OÜ.",
      },
      {
        icon: "layers",
        slug: "floating-crane",
        title: "Floating Crane",
        desc: "Floating crane HERACLES — 100-tonne capacity, 33 m boom height, available within the port and at other Estonian ports.",
        fullDesc:
          "The port's floating crane HERACLES provides heavy-lift services within the Kopli port area and at other Estonian ports upon request. HERACLES has a lifting capacity of 100 tonnes, a working radius of 35 m at 25 tonnes and 20 m at full 100-tonne capacity, and a maximum boom height of 33 m above water level.\n\nThe vessel measures 40 m in length and 20 m in breadth with a draft of 1.95 m (gross tonnage 637 / net tonnage 191) and is powered by twin engines (2 × 132.5 kW). In addition to the floating crane, the port operates portal cranes of 10–32 tonnes and a crawler crane with an 850-tonne lifting capacity, as well as a 500-tonne KAMAG transporter system for heavy cargo movements ashore.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2753",
      email: "info@portvenebalti.ee",
      website: "https://portvenebalti.ee/en/",
    },
    personnel: [
      { name: "Marek Rauk", role: "Board Member / Harbourmaster", phone: "+372 610 2205", email: "marek.rauk@portvenebalti.ee" },
      { name: "Port Dispatcher (24/7)", role: "Operations", phone: "+372 5341 9708", email: "dispatcher@portvenebalti.ee" },
    ],
  },
  {
    slug: "mereabi",
    name: "Mereabi",
    sector: "Port & Marine Services",
    sectorId: "port",
    countries: "EE",
    tagline: "Minding your safety and saving environment",
    heroDesc:
      "The oldest and top-demanded marine safety service provider in the Baltic region — supply, rental, servicing and sales of life-saving and fire-fighting equipment since 1975.",
    aboutP1:
      "Mereabi traces its origins to 1975 as a shipyard safety-equipment division; the company name was registered in 1996. Today it is a fully owned subsidiary of BLRT Grupp (acquired 2017) and operates two service stations in the Baltic region, serving clients across Finland, Sweden, Belgium and Norway with 24/7 availability.",
    aboutP2:
      "Approved by all major IACS classification societies and ISO 9001:2015 certified, Mereabi offers integrated comprehensive service, specialised solutions and modern technologies for marine equipment and appliances maintenance. The company holds Estonian Maritime Administration certificates and complies with the SOLAS Convention and IMO Resolutions throughout all operations.",
    services: [
      {
        icon: "package",
        slug: "supply",
        title: "Supply",
        desc: "Maritime provisioning across 43 IMPA catalogue categories — safety gear, deck equipment, tools, paint, rigging and more.",
        fullDesc:
          "Mereabi supplies goods in accordance with the IMPA catalogue across 43 product categories, covering all essential maritime provisioning needs. Categories include safety equipment and protective gear, cleaning materials and chemicals, hand tools and electrical tools, rope, rigging and nautical equipment, marine paints and painting supplies, metal components, pipes and fittings, welding equipment and machinery.\n\nCustomers can request quotations directly through the company's online form. The supply service is supported by Mereabi's deep stock knowledge and its network of approved global brand representatives, ensuring competitive lead times for both routine orders and urgent vessel requirements.",
      },
      {
        icon: "clock",
        slug: "rent",
        title: "Rent",
        desc: "Short- and long-term rental of life rafts, fire extinguishers, breathing apparatus and air cylinders for commercial and yacht fleets.",
        fullDesc:
          "Mereabi provides rental of marine safety equipment for both commercial fleet operators and yacht owners, covering life rafts (commercial and yacht grades), fire extinguishers, breathing apparatus and air cylinders.\n\nRental is a practical solution for vessels with infrequent trading patterns, vessels undergoing survey, or operators who wish to maintain SOLAS compliance without the capital cost of ownership. Equipment is maintained in service-ready condition by Mereabi's certified technicians and can be collected from the Tallinn service station or arranged for delivery to Baltic region ports.",
      },
      {
        icon: "wrench",
        slug: "service",
        title: "Service",
        desc: "OEM and multi-brand annual and 5-year servicing of lifeboats, rescue boats, davits, fire-fighting systems, GMDSS and navigation equipment.",
        fullDesc:
          "Mereabi's service division covers the full range of marine safety appliances. Life-saving appliance services include OEM and multi-brand annual and 5-year servicing, testing and repairs of lifeboats, rescue boats, davits and hooks; gangway inspections; deck crane load testing up to 600 tonnes; lifeboat engine overhauls; and fibreglass repairs. Life rafts (commercial fleet and yachts), inflatable rescue boats, inflatable lifejackets (SOLAS and non-SOLAS) and immersion suits are also inspected and repacked.\n\nFire-fighting services encompass modernisation and installation of fire suppression systems, maintenance of fire extinguishers, foam applicators, fixed systems (CO₂, dry powder, foam, water mist), breathing apparatus, oxygen cylinders and fireman's outfits. Additional services include annual GMDSS radio surveys, navigation equipment testing, measuring device calibration and Oil Discharge Monitoring Equipment (ODME) service. The company operates a 100-tonne crane for load testing at its Tallinn facility.",
      },
      {
        icon: "shield",
        slug: "products",
        title: "Products",
        desc: "Sales of lifeboats, life rafts, fire-fighting equipment, GMDSS and navigation equipment from leading global manufacturers.",
        fullDesc:
          "Mereabi sells marine safety and navigation products across four main categories. Life-saving appliances include lifeboats, rescue boats, davits and hooks, gangways, accommodation ladders, lifting tools, chain blocks, wire ropes and boat engines. Fire-fighting products cover fire extinguishers, foam applicators, breathing apparatus, Emergency Escape Breathing Devices (EEBD), air cylinders, diving equipment, medical resuscitators, oxygen cylinders, fireman outfits, and fire hoses with nozzles.\n\nLife rafts and safety equipment include life rafts for commercial and yacht use, inflatable rescue boats, inflatable and standard lifejackets (SOLAS and non-SOLAS), lifebuoys, immersion suits, chemical and thermal protective suits, safety harnesses with lines and snap hooks, plus pilot and embarkation ladders. The product range is completed by navigation equipment. All products are sourced from approved global manufacturers and comply with applicable SOLAS and IMO requirements.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 660 2320",
      email: "info@mereabi.ee",
      website: "https://mereabi.ee/en/",
    },
    personnel: [
      { name: "Marina Skljarova",    role: "Board Member",          phone: "+372 5307 3883"                    },
      { name: "Irina Laskova",       role: "Director, Lithuania",   phone: "+370 630 05 991", email: "info@mereabi.lt" },
      { name: "Uljana Prosvetova",   role: "Sales Manager, Estonia",phone: "+372 534 59 753"                    },
    ],
  },

  /* ── BLRT REKATO ── */
  {
    slug: "blrt-rekato",
    name: "BLRT Rekato",
    fullName: "BLRT Rekato OÜ",
    sector: "Ship Repair",
    sectorId: "repair",
    countries: "EE",
    tagline: "Ship repair and pipelines manufacturing",
    heroDesc:
      "Founded in 2000, BLRT Rekato operates in ship repair, shipbuilding, Oil & Gas and renewable energy from a 6,420 m² production facility at Kopli 103, Tallinn. 100 specialists, 45 tonnes/month production capacity.",
    aboutP1:
      "BLRT Rekato OÜ was founded in 2000 as a subsidiary of BLRT Grupp, the leading industrial holding in the Baltics. With 100 specialists and a production capacity of 45 tonnes per month, the company operates in ship repair, shipbuilding, Oil & Gas and renewable energy, with a 6,420 m² production hall equipped with specialised machine tools for manufacturing pipelines, profile structures and metal processing.",
    services: [
      {
        icon: "anchor",
        slug: "ship-repair",
        title: "Ship repair",
        desc: "Diagnostics, repair, replacement and supply of valves and other devices; comprehensive repair and maintenance of pipelines.",
      },
      {
        icon: "ship",
        slug: "shipbuilding",
        title: "Shipbuilding",
        desc: "Pipeline system installation for dry cargo ships, tugs, ferries and barges; ship conversions and BWTS, fuel-system and scrubber upgrades.",
      },
      {
        icon: "waves",
        slug: "oil-gas-and-renewable-energy",
        title: "Oil & Gas and renewable energy",
        desc: "Manufacture of pipes in various types and diameters for oil & gas and wind energy projects, including above-water and subsea oil production.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2504",
      email: "info@blrtrekato.ee",
      website: "https://blrtrekato.ee/en/",
    },
  },

  /* ── BLRT VALUKODA ── */
  {
    slug: "blrt-valukoda",
    name: "BLRT Valukoda",
    sector: "Engineering",
    sectorId: "engineering",
    countries: "EE",
    tagline: "The only surviving foundry in Estonia",
    heroDesc:
      "BLRT Valukoda is Estonia's only foundry, producing over 100 tonnes per month of grey, spheroidal and wear-resistant cast iron. 30 specialists, 1,400 product names, EU Cohesion Fund investment in progress.",
    aboutP1:
      "BLRT Valukoda is a subsidiary of BLRT Grupp and the only surviving foundry in Estonia. With 30 specialists and a product range of 1,400 names, the company produces grey, spheroidal, heat- and wear-resistant cast iron in excess of 100 tonnes per month. Equipment includes two Mixer Omega Spartan units (10 t/h capacity each), Inductotherm induction furnaces (1.0 t, 1.0 t, 0.5 t), shot blasting machinery, an 8–10 t reclamation plant, and an automated spray paint cabinet with conveyor system.",
    aboutP2:
      "Iron grades produced: grey iron GJL150, GJL200, GJL250, GJL300; nodular iron GJS400-15, GJS500-7, GJS500-14, GJS600-3, GJS600-10, GJS700-2, GJS800-2; wear-resistant Ni-Hard cast iron; heat-resistant chromium cast iron (up to 30% chromium content). Quality management is certified to ISO 9001:2015. An EU Cohesion Fund investment of €860,845 for foundry expansion and CO₂ reduction was celebrated with a topping-out ceremony in April 2026.",
    services: [
      {
        icon: "flame",
        slug: "grey-cast-iron-gjl",
        title: "Grey Cast Iron (GJL)",
        desc: "GJL150, GJL200, GJL250 and GJL300 grade grey cast iron castings for marine, industrial and mechanical engineering applications.",
        fullDesc:
          "BLRT Valukoda casts grey cast iron in all four standard grades — GJL150, GJL200, GJL250 and GJL300 — melted in the foundry's Inductotherm induction furnaces and moulded on Omega Spartan sand-mixing lines before shot blasting and spray-coating. Grey iron's flake-graphite structure gives excellent machinability, vibration damping and sliding-wear resistance, which is why it remains the material of choice for engine and gearbox housings, pump and valve bodies, ballast and counterweights, and a wide range of industrial and mechanical engineering components.\n\nAs Estonia's only surviving foundry, BLRT Valukoda supplies grey iron castings both as standard catalogue items — drawn from a product range of some 1,400 names — and as parts produced to individual customer specification, backed by the company's ISO 9001:2015 quality management system.",
      },
      {
        icon: "beaker",
        slug: "spheroidal-ductile-iron-gjs",
        title: "Spheroidal (Ductile) Iron (GJS)",
        desc: "Full GJS range: GJS400-15, GJS500-7, GJS500-14, GJS600-3, GJS600-10, GJS700-2, GJS800-2 — high strength ductile iron for demanding applications.",
        fullDesc:
          "The foundry produces the full spread of nodular (spheroidal) cast iron grades, from GJS400-15 through GJS500-7, GJS500-14, GJS600-3, GJS600-10, GJS700-2 up to GJS800-2. In these irons the graphite forms as spherical nodules rather than flakes, giving substantially higher tensile strength and ductility than grey iron of comparable composition, with the higher-numbered grades (GJS600 and above) trading some elongation for greater strength and hardness for more demanding load-bearing applications.\n\nGJS castings are melted in BLRT Valukoda's Inductotherm induction furnaces (1.0 t, 1.0 t and 0.5 t units) and processed through the same sand-moulding, shot-blasting and spray-painting lines as the rest of the foundry's production, giving customers a consistent, ISO 9001:2015-certified route from pattern to finished part for structural and mechanically demanding components.",
      },
      {
        icon: "shield",
        slug: "heat-and-wear-resistant-castings",
        title: "Heat & Wear-Resistant Castings",
        desc: "Ni-Hard wear-resistant cast iron and chromium cast iron (up to 30% chromium content) for high-temperature and abrasive industrial environments.",
        fullDesc:
          "For applications where abrasion or high temperature rules out standard iron grades, BLRT Valukoda casts Ni-Hard wear-resistant cast iron, an alloyed white iron whose hard carbide structure gives it high resistance to abrasive wear, making it suited to components handling abrasive bulk materials in industrial processing environments.\n\nThe foundry also produces heat-resistant chromium cast iron with chromium content up to 30%, formulated for parts that must retain strength and resist scaling or oxidation when exposed to sustained high temperatures. Both material families are produced on the same Inductotherm induction-furnace and moulding infrastructure used across the foundry's grey and nodular iron production, and finished through shot blasting and the automated spray-paint line.",
      },
      {
        icon: "ruler",
        slug: "custom-casting-from-drawings",
        title: "Custom Casting from Drawings",
        desc: "Custom castings produced to customer drawings with in-house pattern support for serial and one-off production. 1,400 product names in range.",
        fullDesc:
          "Beyond its standard grey and nodular iron grades, BLRT Valukoda produces castings to customer drawings and specifications, drawing on in-house pattern support to take parts from design to finished casting for both serial production runs and one-off pieces. The foundry's product range spans roughly 1,400 distinct names, reflecting decades of experience translating customer requirements into castable geometries across grey, spheroidal, wear-resistant and heat-resistant iron grades.\n\nProduction is carried out by a team of 30 specialists using Omega Spartan sand-mixing units, Inductotherm induction furnaces, an 8–10 t sand reclamation plant and shot-blasting equipment, with finishing through an automated spray-paint cabinet, all operated under the company's ISO 9001:2015 quality management certification — giving custom orders the same process control as the foundry's standard catalogue castings.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 511 9437",
      email: "valukoda@blrt.ee",
      website: "https://blrtvalukoda.ee/en/",
    },
    personnel: [
      { name: "Paul Gross", role: "Managing Director" },
    ],
    certificates: [
      { name: "ISO 9001:2015", issuer: "Quality Management System", year: 2023 },
    ],
  },

  /* ── ELME (AS ELME) ── */
  {
    slug: "elme",
    name: "Elme",
    fullName: "AS Elme",
    sector: "Steel & Materials",
    sectorId: "materials",
    countries: "EE · LV · LT",
    tagline: "Industrial goods, energy and technical maintenance",
    heroDesc:
      "AS Elme supplies high-quality industrial and marine goods, provides energy services and crane maintenance to Baltic industrial customers from Kopli 103, Tallinn.",
    aboutP1:
      "AS Elme is a subsidiary of BLRT Grupp and a supplier of high-quality goods and equipment for industry and the marine sector, with customers across the Baltic States. The company's product range covers welding consumables, zinc, abrasive powders, industrial machinery, marine engines, propulsion systems, anchoring and mooring equipment.",
    aboutP2:
      "Beyond goods supply, Elme is a reliable supplier of electrical and thermal energy and a provider of communication services, process equipment and crane maintenance for the BLRT Grupp industrial campus and external customers.",
    services: [
      {
        icon: "package",
        slug: "industrial-goods-supply",
        title: "Industrial Goods Supply",
        desc: "Welding consumables, zinc, abrasive powders, industrial machinery and tools for manufacturing and construction sectors.",
        fullDesc:
          "AS Elme supplies companies within BLRT Grupp and external industrial customers with the materials and equipment their production processes depend on. The product range covers welding consumables, zinc, abrasive powders and abrasive tools, welding and industrial equipment, and personal protective equipment, sourced and delivered to support manufacturing, shipbuilding and construction operations across the Baltic region.\n\nOperating out of BLRT Grupp's industrial campus at Kopli 103 in Tallinn, the supply team works with a custom-tailored approach, high quality standards, reasonable prices and strict delivery discipline, ensuring the group's shipyards and workshops as well as outside customers receive the right materials on schedule.",
      },
      {
        icon: "anchor",
        slug: "marine-equipment-supply",
        title: "Marine Equipment Supply",
        desc: "Marine engines, propulsion systems, anchoring and mooring equipment for the shipbuilding and ship repair industries.",
        fullDesc:
          "AS Elme supplies marine engines, propulsion systems, and anchoring and mooring equipment to the shipbuilding and ship repair industry, serving customers across the Baltic States from its base at BLRT Grupp's Kopli 103 industrial campus in Tallinn. A dedicated marine equipment team sources and delivers this equipment alongside the company's wider industrial goods business, supporting vessel construction, conversion and repair projects for both BLRT Grupp shipyards and external customers.",
      },
      {
        icon: "zap",
        slug: "energy-supply",
        title: "Energy Supply",
        desc: "Electrical and thermal energy supply services for industrial customers and BLRT Grupp enterprises at the Kopli campus.",
        fullDesc:
          "AS Elme has supplied energy to the Kopli 103 site since the company's founding in December 1993, when it began by supplying energy and industrial gases to the Baltic Ship Repair Yard, the predecessor of today's BLRT Grupp. Building on that history, AS Elme remains a supplier of electrical and thermal energy, selling power and heat to BLRT Grupp's group companies as well as to external industrial customers based at the Tallinn industrial campus.",
      },
      {
        icon: "wrench",
        slug: "crane-maintenance",
        title: "Crane Maintenance",
        desc: "Maintenance and repair of industrial cranes and lifting equipment on the Kopli industrial campus.",
        fullDesc:
          "AS Elme's technical maintenance division services the process equipment, utilities and lifting equipment of BLRT Grupp companies and external businesses operating at the Kopli 103 industrial campus in Tallinn. Its core work includes maintaining and repairing the electric actuators of portal, bridge and gantry cranes, alongside other campus equipment such as the fuel oil transfer pumps at the site's fuel terminals.\n\nThe division is staffed by more than 70 blue-collar workers and 15 engineering professionals, giving AS Elme the in-house technical capacity to keep the campus's cranes and lifting equipment running reliably for shipyard and industrial customers alike.",
      },
      {
        icon: "circuit",
        slug: "network-and-communication-services",
        title: "Network & Communication Services",
        desc: "Communication infrastructure and network services supporting BLRT Grupp industrial operations.",
        fullDesc:
          "AS Elme operates as the licensed electricity network operator for the Kopli 103 and Bekkeri Sadam areas of Põhja-Tallinn, holding both an electricity sales license and a network operation license granted by the Estonian Competition Authority in 2010. The company manages the distribution network connecting BLRT Grupp's enterprises and other businesses on the industrial campus, and processes new connection applications — including the required connection point protection values, specified in ampere-meters — within 15 days of receipt.\n\nThis network operator role sits alongside AS Elme's energy supply business, giving the company responsibility for both the physical network infrastructure and the electricity sold over it to campus customers.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2386",
      email: "elme@blrt.ee",
      website: "https://elme.ee/en/",
    },
  },

  /* ── ELME TKS ── */
  {
    slug: "elme-tks",
    name: "Elme TKS",
    fullName: "ELME TKS OÜ",
    sector: "Inspection & Testing",
    sectorId: "inspection",
    countries: "EE",
    tagline: "Metals and welds: inspection, testing and technical control",
    heroDesc:
      "Established in 2001 from a merger of a calibration laboratory and a testing facility, Elme TKS provides metals and welds inspection, testing and technical control to Baltic industry.",
    aboutP1:
      "ELME TKS OÜ was established on 24 April 2001 as a result of a merger between two independent laboratories: a calibration laboratory and a testing facility. The company employs 15 specialists and operates an Integrated Management System covering all core services. Customers include BLRT Grupp companies and metal work manufacturers, engineering, transportation and construction businesses from across Estonia.",
    services: [
      {
        icon: "eye",
        slug: "non-destructive-testing",
        title: "Non-Destructive Testing",
        desc: "Ultrasonic, magnetic particle, penetrant, radiographic and visual testing of metal structures and welds — EAK-accredited, DNV GL-recognised.",
      },
      {
        icon: "beaker",
        slug: "destructive-testing",
        title: "Destructive Testing",
        desc: "Tensile, bend, impact, hardness, macrostructure and surface tests of metals and welded joints in an EAK-accredited laboratory.",
      },
      {
        icon: "ruler",
        slug: "instrument-calibration",
        title: "Instrument Calibration",
        desc: "Calibration of line and angle, pressure and temperature, and electrical measuring instruments against traceable reference standards.",
      },
      {
        icon: "droplets",
        slug: "chemical-analyses",
        title: "Chemical Analyses",
        desc: "Chemical composition analysis of metals and alloys, plus air pollution, water and petroleum product testing.",
      },
      {
        icon: "award",
        slug: "training-and-certification",
        title: "Training and Certification",
        desc: "EHIS-registered training centre: rigger, crane operator, industrial truck and forklift operator training and certification.",
      },
      {
        icon: "hard-hat",
        slug: "occupational-health-and-safety-hazard-assessment",
        title: "Occupational Health and Safety Hazard Assessment",
        desc: "Workplace risk factor measurement — vibration, noise, lighting and indoor climate — under the Occupational Health and Safety Act.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2408",
      email: "elmetks@elmetks.ee",
      website: "https://elmetks.ee/en/",
    },
    certificates: [
      { name: "ISO 9001:2015",              issuer: "Quality Management System"                    },
      { name: "ISO 14001:2015",             issuer: "Environmental Management"                     },
      { name: "ISO 45001:2018",             issuer: "Occupational Health & Safety"                 },
      { name: "Industrial Radiography Permit", issuer: "Radiation Safety Authority"               },
      { name: "Destructive Testing",        issuer: "EN ISO/IEC 17025 Accreditation"               },
      { name: "Non-destructive Testing",    issuer: "Accreditation"                                },
      { name: "Calibration Laboratory",     issuer: "Accreditation"                                },
      { name: "DNV",                        issuer: "NDT Classification Society Approval"          },
    ],
  },

  /* ── MARKETEX OFFSHORE CONSTRUCTIONS (MOC) ── */
  {
    slug: "moc",
    name: "Marketex Offshore Constructions",
    fullName: "Marketex Offshore Constructions OÜ",
    sector: "Engineering",
    sectorId: "engineering",
    countries: "EE",
    tagline: "Complex steel structures for Offshore, Renewables and Industrial projects",
    heroDesc:
      "Marketex Offshore Constructions manufactures complex steel structures for Offshore Oil & Gas, Renewables, Infrastructure and Industrial projects. 20,550 m² workshop, 350,000 man-hours/year welding capacity, 20 m crane hook height.",
    aboutP1:
      "Marketex Offshore Constructions (MOC) is a subsidiary of BLRT Grupp specialising in complex steel structures for Offshore Oil & Gas, Renewables, Subsea, Infrastructure and Industrial projects. In 2020, supported by BLRT Grupp's development programme, the company opened a brand-new welding, machining and painting facility of 20,550 m² dedicated to large fabrication projects serving the North Sea and beyond.",
    aboutP2:
      "MOC's annual welding capacity stands at 350,000 man-hours, with a maximum crane hook height of 20 m. The company manufactures to NORSOK, DNV GL, ABS and Bureau Veritas requirements. The QHSE Department — comprising a QHSE Manager, HSE Engineer, Metrology Engineer and three VT2-certified QC inspectors — ensures rigorous quality and safety standards across all production activities.",
    services: [
      {
        icon: "layers",
        slug: "offshore-oil-and-gas",
        title: "Offshore Oil & Gas",
        desc: "Leading contract partner for Offshore Oil & Gas equipment and structures — lifting, skidding, pipe-handling, mooring and loading systems.",
      },
      {
        icon: "droplets",
        slug: "subsea",
        title: "Subsea",
        desc: "Integrated supply chain for large, high-value subsea assemblies — SURF installations, template structures, caisson foundations and guide bases.",
      },
      {
        icon: "building",
        slug: "infrastructure-and-industrial-equipment",
        title: "Infrastructure and Industrial Equipment",
        desc: "Road, rail and pedestrian bridges of any size and type, industrial equipment and harbour equipment.",
      },
      {
        icon: "waves",
        slug: "renewable-energy",
        title: "Renewable Energy",
        desc: "Complex structures for offshore wind — foundations, substations, transition pieces, piles, platforms and anode cages.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2535",
      email: "moc@blrt.ee",
      website: "https://moc.ee/en/",
    },
    personnel: [
      { name: "Nadezda Vassiljeva", role: "Sales Director",  email: "moc.sales@blrt.ee"                             },
      { name: "Dmitri Osmjorkin",   role: "Sales Manager",   phone: "+372 5673 3414", email: "moc.osmjorkin@blrt.ee" },
    ],
  },

  /* ── WESTERN TECHNOLOGICAL SOLUTIONS ── */
  {
    slug: "western-tech-solutions",
    name: "Western Technological Solutions",
    fullName: "Western Technological Solutions (WTS)",
    sector: "Engineering",
    sectorId: "engineering",
    countries: "LT",
    tagline: "Large-scale stainless steel tanks, pressure vessels and welded assemblies",
    heroDesc:
      "Western Technological Solutions manufactures large-scale stainless steel tanks, pressure vessels and carbon capture systems. 3,240 m² workshop + 7,000 m² outdoor space, 70 m to sea pier, 250+ large-scale structures delivered, 10+ EU Top 30 clients.",
    aboutP1:
      "Western Technological Solutions (WTS) — legal name Vakarų technologiniai sprendimai, UAB — is part of the Western Shipyard Group and BLRT Grupp, offering advanced engineering and manufacturing for large-scale stainless steel and aluminium products. The 3,240 m² workshop sits just 70 m from the sea pier, enabling direct ship loading of oversized structures. Outdoor assembly space of 7,000 m² accommodates tanks up to 6 m internal diameter and 34 m height. Heavy lifting capacity reaches 500+ tons single piece.",
    aboutP2:
      "WTS has delivered 250+ large-scale stainless steel structures with more than 10 clients from the EU Top 30 Engineering Companies. Sectors served: Chemical, Oil & Gas, Power, Marine, Food, Hydrogen, Carbon Capture and Decarbonization. Products include pressurized and atmospheric thermal energy storage tanks (50–500 m³), chilled water storage tanks, stainless steel scrubbers, CO₂ capture absorbers, flue gas treatment systems, water and wastewater treatment systems, and Duplex stainless steel bridges. SAP Ariba Network ID: AN11090198629.",
    services: [
      {
        icon: "beaker",
        slug: "tanks-and-pressure-vessels",
        title: "Tanks & Pressure Vessels",
        desc: "Tanks up to 6 m internal diameter, 34 m height. Pressurized heating buffer tanks, atmospheric thermal energy storage (50–500 m³), chilled water storage — sea-shipped from Klaipėda.",
        fullDesc:
          "WTS manufactures vertical cylindrical stainless steel tanks and pressure vessels with capacities from 10 m³ to 500 m³, with cylindrical shells produced up to 6 m in diameter and 34 m in height. The product range spans pressurized heating buffer tanks (rated at 3 or 6 bar operating pressure, up to 5.26 m diameter and over 24 m height), atmospheric thermal energy storage tanks, and both pressurized and atmospheric chilled water storage tanks, serving heat pump systems, district heating substations, solar thermal arrays, biomass boiler integration, and industrial process heat up to 95°C (optionally 130°C). Standard construction uses austenitic and duplex stainless steel grades, with lean duplex EN 1.4162 (LDX 2101) recommended for its balance of corrosion resistance, weldability, strength, and cost — vessels comply with PED 2014/68/EU and EN 13445, and thermal storage units meet EN 17956:2024 Class A efficiency with PUR or mineral wool insulation.\n\nTanks can be fitted with agitators, mixers, heating or cooling jackets, internal coils, manways, instrumentation connections, and automated control systems, and all vessels undergo pickling and passivation before hydrostatic testing and full non-destructive testing documentation. Manufactured under ISO 9001, EN 1090 EXC3, and ISO 3834-2 certification, the tanks are prefabricated in Klaipėda to reduce on-site construction time and are shipped by sea directly from the workshop's adjoining pier for delivery across Europe.",
      },
      {
        icon: "layers",
        slug: "carbon-capture-and-flue-gas-treatment",
        title: "Carbon Capture & Flue Gas Treatment",
        desc: "Stainless steel CO₂ capture absorbers and quenchers separating CO₂ from industrial emissions. Flue gas treatment systems including scrubbers and electrostatic precipitators.",
        fullDesc:
          "WTS fabricates stainless steel CO₂ absorbers designed to remove carbon dioxide effectively from flue gases in industrial and thermal energy applications, forming part of the core equipment used in carbon capture technology. These absorbers work alongside flue gas treatment components including quenchers, scrubbers, demisters (mist eliminators), and high-efficiency electrostatic precipitators that capture fine particulate matter, along with the ducting systems that tie the equipment together into a complete treatment train.\n\nBuilt from stainless steel and aluminum under ISO 9001, EN 1090 EXC3, and ISO 3834-2 certification, these systems serve industries ranging from energy and shipping to chemical and food processing, helping operators reduce their environmental footprint without compromising productivity. As with its tanks and pressure vessels, WTS fabricates these large-scale structures in Klaipėda and ships them by sea directly from its pier-side workshop to project sites across Europe.",
      },
      {
        icon: "droplets",
        slug: "water-and-wastewater-treatment-systems",
        title: "Water & Wastewater Treatment Systems",
        desc: "Custom stainless steel water and wastewater treatment systems for industrial and municipal clients.",
        fullDesc:
          "WTS builds custom stainless steel water and wastewater treatment equipment primarily in grades SS304 (1.4301) and SS316L (1.4404), with SS316L favored for deionized water storage due to its non-reactive, low-leaching surface, and duplex or super duplex stainless steel applied to seawater intake systems. The product line includes multimedia and activated carbon pressure filters, iron/manganese and greensand removal systems, hydrocyclone separators, bar screens and intake protection filters, evaporators and crystallizers for Zero Liquid Discharge (ZLD), storage tanks up to 500 m³, and supporting piping assemblies and modular structures.\n\nThese systems are engineered for both industrial and municipal clients, covering green hydrogen production (ultrapure water preparation via multi-stage treatment), semiconductor fabrication, thermal power plant boiler feedwater treatment, desalination via reverse osmosis, and municipal and industrial wastewater treatment. Material selection is matched to the operating environment — from robust equipment for mining applications to corrosion-resistant separators for oil and gas — and each system is fabricated and sea-shipped from the company's Klaipėda facility.",
      },
      {
        icon: "trending",
        slug: "duplex-stainless-steel-bridges",
        title: "Duplex Stainless Steel Bridges",
        desc: "Innovative duplex stainless steel bridge structures for infrastructure and decarbonization projects across Europe.",
        fullDesc:
          "WTS fabricates bridge structures in duplex stainless steel grades such as lean duplex EN 1.4162 (LDX 2101) and standard duplex EN 1.4462 (2205), the latter regarded as the industry standard for marine environments due to its superior pitting resistance. The dual austenite-ferrite microstructure gives design strengths of 450–500 MPa — 30–40% stronger than S355 carbon steel — with high ductility (20–30% elongation) and toughness retained down to roughly -40°C, allowing lighter, optimized structures that use 25–50% less material than equivalent carbon-steel designs while remaining 100% recyclable.\n\nBecause duplex steel needs no protective coating, it avoids the VOC emissions and hazardous waste associated with painting, and eliminates repainting cycles otherwise required every 15–25 years — over a 100-year service life this brings total cost to roughly 0.8–1.4 times that of an equivalent painted carbon-steel bridge, against studies showing 3–6 times higher lifecycle costs for painted alternatives. WTS has delivered duplex bridge projects including the 47 m, 62-tonne Vøringsfossen pedestrian staircase bridge in Norway (2020) and the 45 m, 240-tonne Nybron road bridge in Härnösand, Sweden, each fabricated in Klaipėda and shipped by sea to site.",
      },
      {
        icon: "ruler",
        slug: "full-project-cycle",
        title: "Full Project Cycle",
        desc: "End-to-end service: engineering design, fabrication (up to 500+ ton single-piece), sea shipment and on-site installation. 70 m from workshop gate to sea pier.",
        fullDesc:
          "WTS covers the complete project cycle in-house, starting with engineering design using AutoCAD, SolidWorks and ANSYS for 3D CAD modelling, CAE simulation, strength calculation and structural analysis, followed by 2D workshop drawings, bills of materials and cutting documentation compliant with PED, EN and ISO standards. Fabrication takes place in a 3,240 m² workshop (162 m long, 20 m wide, 8.5 m high, with a 20×8 m access gate) equipped with twin 30-tonne gantry cranes, a plate rolling machine capable of shells up to 6,000 mm diameter, fiber laser and plasma cutting, and automatic welding equipment for cylinders from Ø1,500 to 6,000 mm and up to 50 tonnes and 50 m long. A 200 m² pickling/passivation chamber and 1,007 m² painting chamber handle surface treatment, while the Western Central Laboratory performs visual, ultrasonic, magnetic particle, penetrant, radiographic and leak testing, backed by 3D laser scanning against the original CAD models.\n\nCompleted structures move just 70 m from the workshop gate to the adjoining sea pier, which offers 14.5 m water depth, a 3 km quay, ten permanent 30-tonne cranes plus a 104-tonne mobile crane, and Ro-Ro loading for structures up to 1,000 tonnes — enabling direct ship loading without inland transport of oversized assemblies. WTS coordinates sea, road and rail transport, port forwarding and customs clearance, and completes projects with on-site mechanical installation and industrial thermal insulation (stone wool, glass wool or polyurethane foam), delivering turnkey projects from its Klaipėda facility to clients across Europe.",
      },
    ],
    contact: {
      address: "Minijos Str. 180, 93269 Klaipėda, Lithuania",
      phone: "+370 68 515 464",
      email: "info@techsolutions.lt",
      website: "https://techsolutions.lt",
    },
    personnel: [
      { name: "Laurynas Trilikauskas", role: "Chief Commercial Officer", phone: "+370 685 993 36", email: "l.trilikauskas@techsolutions.lt" },
      { name: "Renata Labutienė",      role: "Sales Manager",            phone: "+370 610 482 81"                                           },
    ],
  },

  /* ── WESTERN BALTIC ENGINEERING ── */
  {
    slug: "western-baltic-engineering",
    name: "Western Baltic Engineering",
    sector: "Engineering",
    sectorId: "engineering",
    countries: "LT",
    tagline: "Let's design future ships together",
    heroDesc:
      "Established in 2003, Western Baltic Engineering has grown from a shipyard engineering department into an independent maritime knowledge centre with 100 in-house engineers in Klaipėda.",
    aboutP1:
      "Western Baltic Engineering (WBE) was established in 2003 as an engineering department of Western Baltic Shipbuilding and has since developed into an independent knowledge centre for the maritime industry. The company employs 100 in-house engineers focused on vessel and maritime structure design of various types.",
    aboutP2:
      "WBE's portfolio covers newbuilding design, retrofit engineering (BWTS, EGCS, 3D laser scanning), vessel conversions including change of purpose, vessel lengthening and propulsion system modifications, on-site supervision and project management. The company serves shipowners, shipyards and maritime operators throughout Europe.",
    services: [
      {
        icon: "ship",
        slug: "newbuilding-design",
        title: "Newbuilding Design",
        desc: "Complete vessel design packages for fishing trawlers, passenger vessels, RO-PAX, LNG bunkering vessels, MPV vessels, dredgers, special purpose/offshore vessels, and workboats — concept through classification-approved drawings.",
        fullDesc:
          "Newbuilding design has been Western Baltic Engineering's core discipline since the company's founding in 2003, when it began as the detail engineering department of Western Baltic Shipbuilding before growing into an independent maritime knowledge centre. The team of over 100 in-house engineers develops complete design packages across the full range of vessel types the company builds a track record on: fishing vessels, general cargo vessels (multipurpose, container, bulk carrier and reefer types), service vessels such as tugs, pushers, waste-water collection vessels and dredgers, inland waterway vessels including barges, pushers and tugs, offshore vessels, and passenger vessels and ferries — including RO-PAX and LNG bunkering vessels. Each project starts with a direct dialogue with the shipowner to establish the operational requirements, which the engineering team then carries from concept through to classification-approved design documentation.\n\nWith more than 20 years of newbuilding design experience, Western Baltic Engineering operates to ISO 9001:2015, ISO 14001:2015 and AQAP 2110 Edition D standards and works in compliance with Lloyd's Register requirements, giving shipowners and shipyards a design partner that combines engineering-office discipline with real on-site shipbuilding experience inherited from its parent yard.",
      },
      {
        icon: "layers",
        slug: "retrofit-engineering",
        title: "Retrofit Engineering",
        desc: "Engineering design for BWTS, EGCS (scrubbers), LNG conversion and other regulatory retrofits, including 3D laser scanning.",
        fullDesc:
          "As regulatory requirements on ballast water and exhaust emissions have tightened, Western Baltic Engineering has built a dedicated retrofit engineering capability alongside its newbuilding design work. Its retrofit projects cover Ballast Water Treatment System (BWTS) installations and Exhaust Gas Cleaning Systems (EGCS/scrubbers), along with other regulatory retrofit requirements such as LNG conversion, supported by 3D laser scanning of the existing vessel to capture accurate as-built geometry before any new equipment, tanks or piping runs are engineered into the hull.\n\nBecause the scanning and engineering are carried out by the same in-house team that designs newbuildings, retrofit packages are produced with the same classification-ready rigor and the same access to real shipyard experience — inherited from Western Baltic Engineering's origins as the engineering department of Western Baltic Shipbuilding — that shortens the path from survey to an installation-ready design.",
      },
      {
        icon: "wrench",
        slug: "vessel-conversions",
        title: "Vessel Conversions",
        desc: "Design for vessel purpose change, lengthening, propulsion system modifications and major structural conversions.",
        fullDesc:
          "Vessel conversions extend Western Baltic Engineering's newbuilding design expertise to vessels already in service, covering projects that range from a change of a vessel's purpose to lengthening and propulsion system modifications. The engineering team combines the 3D laser scanning survey data captured for retrofit work with structural engineering to re-work the hull, machinery arrangement and onboard systems needed to support a vessel's new role or extended dimensions.\n\nConversion projects are run by dedicated project teams, each with a designated project leader — the same model Western Baltic Engineering applies to its newbuilding contracts — so that structural modifications are engineered to a classification-approved standard and delivered against the deadlines the company is known for meeting.",
      },
      {
        icon: "ruler",
        slug: "on-site-supervision",
        title: "On-Site Supervision",
        desc: "Project management and on-site engineering supervision during construction, repair or retrofit execution at yards worldwide.",
        fullDesc:
          "Western Baltic Engineering pairs its design work with on-site supervision and project management so that its engineering packages are followed through into construction, repair or retrofit execution at the yard. Services include preparation of tender documentation, on-site technical supervision during the build or retrofit, and full project management delivered by dedicated teams with a designated project leader for each contract.\n\nThe company traces this on-site capability back to its origins as the in-house engineering department of Western Baltic Shipbuilding, which it credits with giving its supervisors real on-site experience rather than purely design-office knowledge — an advantage the company cites, together with operational efficiency built up over years of shipyard cooperation and consistent deadline adherence, as one of its main competitive strengths.",
      },
    ],
    contact: {
      address: "Minijos Str. 180, LT-93269 Klaipėda, Lithuania",
      phone: "+370 686 376 81",
      email: "info@wbe.lt",
      website: "https://wbe.lt",
    },
    personnel: [
      { name: "Marius Arkušauskas", role: "Director"                                                              },
      { name: "Andrius Sutnikas",   role: "Chief Business Development Officer", phone: "+370 686 376 81"          },
      { name: "Loreta Gedraitienė", role: "Sales Manager",                      phone: "+370 660 397 76"          },
    ],
  },

  /* ── WESTERN SHIPS AGENCY ── */
  {
    slug: "western-ships-agency",
    name: "Western Ships Agency",
    sector: "Port & Marine Services",
    sectorId: "port",
    countries: "LT · EE",
    tagline: "Your requests — Our solutions",
    heroDesc:
      "Established in 2002, Western Ships Agency provides multipurpose port agency, cargo logistics and ship supply services in Klaipėda and Tallinn ports.",
    aboutP1:
      "Western Ships Agency (WSA) is a subsidiary of BLRT Grupp, established in 2002. The company's core activity is providing best-in-class assistance to shipowners and operators in Klaipėda and Tallinn ports for all matters during a vessel's stay in port.",
    aboutP2:
      "WSA's strongest capability is delivering multipurpose agency services for long-term and extraordinary projects covering all vessel types. The company also organises general and oversized cargo delivery, chartering and freight forwarding projects, and handles all aspects of ship supply — from technical spares to provisions.",
    services: [
      {
        icon: "anchor",
        slug: "port-agency",
        title: "Port Agency",
        desc: "Full port agency services in Klaipėda and Tallinn: customs, crew changes, berthing coordination and port dues management.",
        fullDesc:
          "Since 2002, Western Ships Agency has provided full port agency services in Klaipėda and Tallinn, acting as the vessel's single point of contact and taking overall responsibility for organising, overseeing and coordinating every aspect of the port call. This includes booking berths and coordinating with port authorities, immigration and customs, arranging embarkation and disembarkation of crew together with their travel logistics, preparing port documentation, and arranging bunkers, fresh water, tug boat assistance and waste disposal (garbage, slops and sewage).\n\nWSA's agents provide full attendance for the duration of a vessel's stay in port, available 24/7, and can also arrange dry-docking and shipyard services, medical assistance for crew and other operational needs that arise during the call — drawing on more than 20 years of experience serving ship owners and operators calling at Baltic ports.",
      },
      {
        icon: "ship",
        slug: "ship-supply",
        title: "Ship Supply",
        desc: "Procurement and delivery of technical spares, lubricants, provisions and deck stores to vessels at berth or anchorage.",
        fullDesc:
          "Western Ships Agency sources and delivers ship supply across the full range a vessel needs, from technical items — zinc and aluminium anodes, pumps and hydraulic spares, cables, ropes and steel wire ropes, mooring lines, marine valves, bearings, flanges, steering gears and fastening materials — to deck and engine stores such as marine paint and painting equipment, pneumatic and electrical tools, lubricants including engine, thermal and hydraulic oil, and nautical charts and equipment, as well as fresh, frozen, dry and canned provisions, dairy and beverages.\n\nThe company delivers this wide selection of spare parts, from the smallest items to large components, to vessels calling at Klaipėda, Tallinn and other Baltic region ports, and maintains a supplier profile on the ShipServ marine procurement platform to streamline ordering for ship owners and operators.",
      },
      {
        icon: "truck",
        slug: "cargo-and-freight-forwarding",
        title: "Cargo & Freight Forwarding",
        desc: "Organisation of general and oversized cargo delivery, chartering and freight forwarding projects across the Baltic region.",
        fullDesc:
          "Western Ships Agency's chartering desk arranges cargo bookings on a voyage basis and manages post-fixture operations — issuing instructions to vessels and coordinating between captains, ship owners and stevedores in loading and discharging ports to keep cargo operations running smoothly, whatever the cargo's size or type.\n\nOn the forwarding side, the company calculates optimal routings and arranges transport by vessel or road, cargo forwarding within ports, and customs formalities, working to minimise costs and secure the best transit times for clients moving general and oversized cargo through Baltic region ports.",
      },
      {
        icon: "globe",
        slug: "multipurpose-agency-services",
        title: "Multipurpose Agency Services",
        desc: "Long-term project agency for extraordinary vessel calls — offshore, heavy-lift, cable-lay and construction vessels.",
        fullDesc:
          "Western Ships Agency's core strength lies in multipurpose agency services for long-term and extraordinary projects, covering all types of vessel calls beyond routine port agency work. For these assignments the company's Owners' Protective Agency team handles crew changes, removal and disposal of residues, and customs clearance and on-board delivery of arriving spares, while also arranging small repairs on short notice — drawing on its position within BLRT Grupp to bring in service engineers from Wärtsilä and MacGregor/Cargotec, electricians, piping specialists, welders and riggers.\n\nThe scope extends to washing and cleaning of cargo holds with shore gangs and humidifiers for drying, underwater works and inspections, service boat arrangements, lay-up options and service engineers travelling with the vessel to its next port — the kind of continuous, project-length support that has underpinned the company's 20-plus years of operation and its published Corporate Social Responsibility report and policy on safety, sustainability and staff development.",
      },
    ],
    contact: {
      address: "Minijos Str. 180, 93269 Klaipėda, Lithuania",
      phone: "+370 699 36 083",
      email: "agency@wsy.lt",
      website: "https://wsa.lt",
    },
    personnel: [
      { name: "Estonia Branch", role: "Kopli 103, Tallinn", phone: "+372 5621 0888" },
    ],
  },

  /* ── MARINE TECHNOLOGY LT ── */
  {
    slug: "marine-technology-lt",
    name: "Marine Technology LT",
    sector: "Engineering",
    sectorId: "engineering",
    countries: "LT",
    tagline: "EPCI for cable handling systems — offshore wind, subsea and oil & gas",
    heroDesc:
      "Engineering, Procurement, Construction and Installation for cable handling systems. Founded 1994 in Norway, acquired by Western Shipyard Group in 2010 — operating from Klaipėda with 100+ employees and 25,000 m² of workshop space.",
    aboutP1:
      "Marine Technology LT is an EPCI (Engineering, Procurement, Construction, Installation) specialist for cable handling systems serving offshore wind energy, subsea, oil & gas, and industrial cable reel manufacturing sectors. Founded in 1994 in Grimstad, Norway, the company was acquired by Western Shipyard Group in 2010 and now operates from Klaipėda, Lithuania, with over 100 employees and 25,000 m² of workshop space.",
    aboutP2:
      "The company's proprietary products include the Composite Reel and Modular Reel — both developed and patented in-house. Marine Technology LT holds QHSE certifications covering production, management and environmental protection.",
    services: [
      {
        icon: "circuit",
        slug: "cable-handling",
        title: "Cable handling",
        desc: "Cable handling reels of any size and type (flange diameter 2–14 m) for umbilical, flexipipe, rope, wire, hose and cable — plus carousels and offloading systems.",
      },
      {
        icon: "anchor",
        slug: "offshore-wind",
        title: "Offshore wind",
        desc: "High-quality offshore wind components and steel structures — transition pieces, boat landings, access platforms, grillage, modular support frames and substations.",
      },
      {
        icon: "droplets",
        slug: "subsea",
        title: "Subsea",
        desc: "Reliable EPC partner for complex subsea solutions — large carbon steel structures, PLETs, subsea protection structures and deployment baskets.",
      },
      {
        icon: "gauge",
        slug: "industrial",
        title: "Industrial",
        desc: "Onshore projects diversified from offshore know-how — bridges, port infrastructure, ramps, silos and ducts.",
      },
    ],
    contact: {
      address: "Minijos St. 180, 93269 Klaipėda, Lithuania",
      phone: "+370 682 42098",
      email: "info@marinetechnology.lt",
      website: "https://marinetechnology.lt",
    },
  },

  /* ── WESTERN STEVEDORING ── */
  {
    slug: "western-stevedoring",
    name: "Western Stevedoring",
    sector: "Port & Marine Services",
    sectorId: "port",
    countries: "LT",
    tagline: "Dry bulk, break bulk and liquid cargo handling at the Port of Klaipėda",
    heroDesc:
      "Maritime stevedoring at the ice-free Port of Klaipėda. 5 specialized terminals, 10 quays, 2.5+ km of berths, 2.5 million tons annual cargo throughput, 150+ employees.",
    aboutP1:
      "Western Stevedoring was founded in 2003 and is a major cargo handling and storage operator at the southern section of the ice-free Port of Klaipėda. Part of Western Shipyard Group (20 companies), the company operates 5 specialized terminals across 10 quays totalling over 2.5 km of berths, with an internal railway of 6.5 km connected to the Draugystė Railway Station.",
    aboutP2:
      "Storage infrastructure includes 16 covered warehouses totalling 50,000 m² and 150,000 m² of open storage. The terminal accommodates Panamax-class vessels up to 230 m in length with a draft of 13.4 m. Western Stevedoring is ISO certified and deployed one of the Port of Klaipėda's first hydroelectric cranes in 2022 as part of EU Green Deal compliance commitments.",
    services: [
      {
        icon: "package",
        slug: "dry-bulk-handling",
        title: "Dry Bulk Handling",
        desc: "Ship, rail and vehicle loading/unloading for dry bulk commodities including grain, fertilizers and industrial ash.",
        fullDesc:
          "Western Stevedoring handles dry bulk cargo across 5 specialized terminals: loading and unloading by ship, rail and vehicle; conveyor and pneumatic discharge systems; processing and blending; quality control sampling. Annual dry bulk throughput is part of the 2.5+ million ton total capacity.",
      },
      {
        icon: "layers",
        slug: "break-bulk-and-general-cargo",
        title: "Break Bulk & General Cargo",
        desc: "Break bulk, general cargo and heavy/oversized cargo handling and storage at 5 specialized terminals.",
        fullDesc:
          "The terminal handles break bulk including steel, timber, machinery and project cargo. Oversized and heavy-lift cargo is managed using specialized equipment. 16 covered warehouses (50,000 m²) and 150,000 m² of open storage provide flexible storage options.",
      },
      {
        icon: "droplets",
        slug: "liquid-cargo-handling",
        title: "Liquid Cargo Handling",
        desc: "Liquid cargo reception and transfer at dedicated liquid terminals.",
        fullDesc:
          "Western Stevedoring operates two dedicated liquid cargo terminals, together comprising four tanks with a combined storage capacity of 16,000 tons. Cargo is received and dispatched directly from ships, railway tankers or road tankers, with all volumes tracked through computerised liquid cargo accounting systems.\n\nTerminal No. 1 provides 8,000 tons of storage across two tanks and handles up to 200,000 tons annually, primarily biodiesel. Terminal No. 2 also offers 8,000 tons of storage across two tanks, handles up to 120,000 tons annually, and is equipped with a cargo heating system for tanks and cisterns along with the capability to unload up to six tanks simultaneously, primarily for molasses. Beyond biodiesel and molasses, the terminals also handle bitumen and vegetable oils, giving customers a flexible, safety-focused solution for liquid bulk logistics through the Port of Klaipėda.",
      },
      {
        icon: "building",
        slug: "storage-and-warehousing",
        title: "Storage & Warehousing",
        desc: "16 covered warehouses (50,000 m²) plus 150,000 m² open storage — flexible solutions for all cargo types.",
        fullDesc:
          "Covered warehouse capacity: 16 warehouses, 50,000 m² total. Open storage: 150,000 m². The internal railway network of 6.5 km links directly to the Draugystė Railway Station (2.5 km external section), enabling efficient rail-to-storage-to-vessel cargo flow.",
      },
      {
        icon: "truck",
        slug: "logistics-and-ancillary-services",
        title: "Logistics & Ancillary Services",
        desc: "Railway shunting, containerization, customs brokerage, cargo weighing and processing services.",
        fullDesc:
          "Western Stevedoring supports its terminal operations with a full range of ancillary services designed to keep cargo moving efficiently. Railway wagons are transported to and from Draugystė Railway Station over the company's 6.5 km internal railway network, with dedicated shunting locomotives and simultaneous storage capacity for up to 120 wagons.\n\nThe company's Container Freight Station handles containerised cargo, including transport into and out of the station and the unloading, filling and turning of containers. In-house customs brokerage specialists manage export and import documentation and procedures, while five units of road, rail and hopper scales positioned across the territory ensure accurate cargo weighing. Several packing lines process bulk cargo, primarily fertilizers, into big bags at a rate of up to 1,200 bags per day, complete with labelling and preparation for onward logistics.",
      },
    ],
    contact: {
      address: "Minijos Street 180, LT-93269 Klaipėda, Lithuania",
      phone: "+370 605 342 94",
      email: "info@wst.lt",
      website: "https://wst.lt",
    },
  },
];
