export type ServiceIcon =
  | "anchor" | "ship" | "wrench" | "zap" | "shield" | "package"
  | "truck" | "layers" | "ruler" | "eye" | "globe" | "award"
  | "clock" | "waves" | "circuit" | "file" | "droplets" | "magnet"
  | "trending" | "building" | "gauge" | "beaker" | "hard-hat" | "flame";

export interface Service {
  icon: ServiceIcon;
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
    slugs: ["vene-balti-sadam", "mereabi", "western-ships-agency"],
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
        title: "Ship Repair & Dry Docking",
        desc: "Three dry docks — the largest (Dock 22) at 165 m × 30 m, 10,000 t — with 2,300 m of berths and vessels up to 200 m alongside.",
        fullDesc:
          "Tallinn Shipyard operates three dry docks: Dock 2 (4,500 t, 101.00 m × 22.00 m), Dock 34 (8,500 t, 139.50 m × 23.80 m), and Dock 22 (10,000 t, 165.00 m × 30.00 m). Supporting equipment includes a floating crane of 100 t capacity, a mobile crane of 850 t, and lifting platforms rated at 250 t and 500 t.\n\nWith 2,300 m of berths and 1,200 m of quays fully equipped with fresh water, compressed air and electrical power, the yard accommodates vessels up to 200 m in length alongside. Hull blasting, coating and structural steel works are performed in the dry dock to classification society requirements.",
      },
      {
        icon: "waves",
        title: "Afloat Repairs & Voyage Repair Services",
        desc: "Repairs carried out while vessels remain in water, including steel, piping, deck machinery, propulsion, electrical and emergency technical assistance.",
        fullDesc:
          "Tallinn Shipyard provides afloat repair services covering: minor steel repairs and structural works in accessible areas; piping repairs, renewal and installation; valve repairs, overhaul and pressure testing where systems can be safely isolated; replacement or maintenance of anchor chains and related deck equipment; selected stern tube seal works depending on vessel design; deck machinery repairs including mooring equipment, winches and windlasses; hatch cover, ramp and cargo access equipment repairs; safety and lifesaving equipment maintenance; engines and auxiliary machinery repairs including pumps and heat exchangers; electrical, automation, control and instrumentation works; inspection, troubleshooting and repair preparation before dry docking; and emergency technical assistance and voyage repair support.",
      },
      {
        icon: "layers",
        title: "Conversion and Modernization",
        desc: "Vessel upgrades, structural modifications, cargo area modifications, propulsion and energy-efficiency upgrades, and class-related modernisation.",
        fullDesc:
          "Whether the goal is to improve vessel performance, meet new regulatory requirements, increase operational flexibility, or extend the service life of an existing asset, BLRT Repair Yards provides practical ship conversion and modernisation solutions across our multi-yard network.\n\nTypical projects include: vessel upgrades and life-extension work; structural modifications and steel fabrication; cargo area modifications and capacity improvements; new equipment and system installation; propulsion and energy-efficiency upgrades; electrical, automation and control system modernisation; accommodation, deck and service area modifications; and class-related modernisation and inspection support.",
      },
      {
        icon: "wrench",
        title: "Retrofit",
        desc: "Equipment and system retrofits to meet new regulatory requirements and improve vessel performance.",
        fullDesc:
          "Tallinn Shipyard performs vessel retrofit projects to help owners meet changing regulatory requirements and improve operational efficiency. Retrofit work is delivered using the yard's ship repair expertise, engineering support, project management and multi-disciplinary production capabilities. The yard coordinates with sister companies within BLRT Grupp for specialist electrical, NDT and engineering scope.",
      },
      {
        icon: "eye",
        title: "Inspections",
        desc: "Vessel condition assessment, repair scope evaluation, class renewal and docking preparation support.",
        fullDesc:
          "Inspection services at Tallinn Shipyard include: vessel condition assessment before dry docking or repair; repair scope evaluation based on inspection findings; class renewal and class survey preparation support; hull, deck, tank, piping, machinery and equipment inspection support; identifying steel renewal needs, pipe work requirements, coating repairs and mechanical repair needs; and docking preparation and technical clarification of repair specifications.\n\nThese services help determine vessel condition, establish repair requirements, estimate work scope and select appropriate repair approaches — improving cost management, enabling safer execution and minimising downtime.",
      },
      {
        icon: "ruler",
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
        title: "Ship Repair & Dry Docking",
        desc: "Dry docking capacity at Klaipėda including the largest floating dock in the Baltics at 235 m × 44 m.",
        fullDesc:
          "Western Shiprepair operates docking infrastructure at the Port of Klaipėda, Lithuania, as part of the BLRT Repair Yards network which collectively operates 7 docks across Estonia, Lithuania and Finland. The network's largest floating dock measures 235 m × 44 m.\n\nHull blasting and coating are carried out to classification society and coating manufacturer requirements. The yard handles a range of vessel types serving Baltic, North Sea and Atlantic trade routes, with dock scheduling coordinated across the multi-yard network to minimise waiting time for fleet operators.",
      },
      {
        icon: "waves",
        title: "Afloat Repairs & Voyage Repair Services",
        desc: "Repairs carried out while vessels remain in water, including steel, piping, deck machinery, propulsion, electrical and emergency technical assistance.",
        fullDesc:
          "Western Shiprepair provides afloat repair services covering: minor steel repairs and structural works in accessible areas; piping repairs, renewal and installation; valve repairs, overhaul and pressure testing where systems can be safely isolated; replacement or maintenance of anchor chains and related deck equipment; selected stern tube seal works depending on vessel design; deck machinery repairs including mooring equipment, winches and windlasses; hatch cover, ramp and cargo access equipment repairs; safety and lifesaving equipment maintenance; engines and auxiliary machinery repairs including pumps and heat exchangers; electrical, automation, control and instrumentation works; inspection, troubleshooting and repair preparation before dry docking; and emergency technical assistance and voyage repair support.",
      },
      {
        icon: "layers",
        title: "Conversion and Modernization",
        desc: "Vessel upgrades, structural modifications, cargo area modifications, propulsion and energy-efficiency upgrades, and class-related modernisation.",
        fullDesc:
          "Whether the goal is to improve vessel performance, meet new regulatory requirements, increase operational flexibility, or extend the service life of an existing asset, BLRT Repair Yards provides practical ship conversion and modernisation solutions across our multi-yard network.\n\nTypical projects include: vessel upgrades and life-extension work; structural modifications and steel fabrication; cargo area modifications and capacity improvements; new equipment and system installation; propulsion and energy-efficiency upgrades; electrical, automation and control system modernisation; accommodation, deck and service area modifications; and class-related modernisation and inspection support.",
      },
      {
        icon: "wrench",
        title: "Retrofit",
        desc: "Equipment and system retrofits to meet new regulatory requirements and improve vessel performance.",
        fullDesc:
          "Western Shiprepair performs vessel retrofit projects to help owners meet changing regulatory requirements and improve operational efficiency. Retrofit work is delivered using the yard's ship repair expertise, engineering support, project management and multi-disciplinary production capabilities, coordinated across the BLRT Repair Yards multi-yard network.",
      },
      {
        icon: "eye",
        title: "Inspections",
        desc: "Vessel condition assessment, repair scope evaluation, class renewal and docking preparation support.",
        fullDesc:
          "Inspection services at Western Shiprepair include: vessel condition assessment before dry docking or repair; repair scope evaluation based on inspection findings; class renewal and class survey preparation support; hull, deck, tank, piping, machinery and equipment inspection support; identifying steel renewal needs, pipe work requirements, coating repairs and mechanical repair needs; and docking preparation and technical clarification of repair specifications.\n\nThese services help determine vessel condition, establish repair requirements, estimate work scope and select appropriate repair approaches — improving cost management, enabling safer execution and minimising downtime.",
      },
      {
        icon: "ruler",
        title: "Design & Engineering",
        desc: "Technical planning and engineering support for repair, conversion and modernisation projects.",
        fullDesc:
          "Engineering support at Western Shiprepair covers technical planning, design development and project management for repair, conversion and modernisation scopes. The yard combines ship repair expertise, engineering support, project management and multi-disciplinary production capabilities as part of the BLRT Repair Yards network.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2252",
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
        title: "Ship Repair & Dry Docking",
        desc: "Dry docking capacity in Finland as part of the BLRT Repair Yards network of 7 docks across Estonia, Lithuania and Finland.",
        fullDesc:
          "Turku Repair Yard operates docking infrastructure in Finland as part of the BLRT Repair Yards network, which collectively operates 7 docks across three countries. The network includes one of Northern Europe's largest dry docks at 265 m × 70 m × 7.1 m (Naantali, Finland) and the largest floating dock in the Baltics at 235 m × 44 m.\n\nHull blasting and coating are carried out to classification society and coating manufacturer requirements. Dock scheduling is coordinated across the multi-yard network — Tallinn Shipyard in Estonia, Western Shiprepair in Lithuania and Turku Repair Yard in Finland — to minimise waiting time for fleet operators.",
      },
      {
        icon: "waves",
        title: "Afloat Repairs & Voyage Repair Services",
        desc: "Repairs carried out while vessels remain in water, including steel, piping, deck machinery, propulsion, electrical and emergency technical assistance.",
        fullDesc:
          "Turku Repair Yard provides afloat repair services covering: minor steel repairs and structural works in accessible areas; piping repairs, renewal and installation; valve repairs, overhaul and pressure testing where systems can be safely isolated; replacement or maintenance of anchor chains and related deck equipment; selected stern tube seal works depending on vessel design; deck machinery repairs including mooring equipment, winches and windlasses; hatch cover, ramp and cargo access equipment repairs; safety and lifesaving equipment maintenance; engines and auxiliary machinery repairs including pumps and heat exchangers; electrical, automation, control and instrumentation works; inspection, troubleshooting and repair preparation before dry docking; and emergency technical assistance and voyage repair support.",
      },
      {
        icon: "layers",
        title: "Conversion and Modernization",
        desc: "Vessel upgrades, structural modifications, cargo area modifications, propulsion and energy-efficiency upgrades, and class-related modernisation.",
        fullDesc:
          "Whether the goal is to improve vessel performance, meet new regulatory requirements, increase operational flexibility, or extend the service life of an existing asset, BLRT Repair Yards provides practical ship conversion and modernisation solutions across our multi-yard network.\n\nTypical projects include: vessel upgrades and life-extension work; structural modifications and steel fabrication; cargo area modifications and capacity improvements; new equipment and system installation; propulsion and energy-efficiency upgrades; electrical, automation and control system modernisation; accommodation, deck and service area modifications; and class-related modernisation and inspection support.",
      },
      {
        icon: "wrench",
        title: "Retrofit",
        desc: "Equipment and system retrofits to meet new regulatory requirements and improve vessel performance.",
        fullDesc:
          "Turku Repair Yard performs vessel retrofit projects to help owners meet changing regulatory requirements and improve operational efficiency. Retrofit work is delivered using the yard's ship repair expertise, engineering support, project management and multi-disciplinary production capabilities, coordinated across the BLRT Repair Yards multi-yard network.",
      },
      {
        icon: "eye",
        title: "Inspections",
        desc: "Vessel condition assessment, repair scope evaluation, class renewal and docking preparation support.",
        fullDesc:
          "Inspection services at Turku Repair Yard include: vessel condition assessment before dry docking or repair; repair scope evaluation based on inspection findings; class renewal and class survey preparation support; hull, deck, tank, piping, machinery and equipment inspection support; identifying steel renewal needs, pipe work requirements, coating repairs and mechanical repair needs; and docking preparation and technical clarification of repair specifications.\n\nThese services help determine vessel condition, establish repair requirements, estimate work scope and select appropriate repair approaches — improving cost management, enabling safer execution and minimising downtime.",
      },
      {
        icon: "ruler",
        title: "Design & Engineering",
        desc: "Technical planning and engineering support for repair, conversion and modernisation projects.",
        fullDesc:
          "Engineering support at Turku Repair Yard covers technical planning, design development and project management for repair, conversion and modernisation scopes. The yard combines ship repair expertise, engineering support, project management and multi-disciplinary production capabilities as part of the BLRT Repair Yards network.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2252",
      email: "info@blrtgrupp.ee",
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
        title: "Turn-Key Vessel Construction",
        desc: "Complete newbuilding from conceptual design to delivery — ferries, tugboats, research vessels and more.",
        fullDesc:
          "Western Baltic Shipbuilding delivers complete turn-key vessel construction across a wide range of vessel types: double-ended ferries (including battery-powered models), multipurpose vessels, cargo vessels, dredgers, trawlers, tugboats, research vessels and specialised offshore structures.\n\nThe yard's turn-key service covers every stage from conceptual design through engineering, steel construction, outfitting and sea trials to final delivery. The ice-free Klaipeda port location enables year-round operations, and the facility's 120 × 21 m covered hull assembly hall, four robotic stations and three covered blasting/painting chambers support efficient parallel production.",
      },
      {
        icon: "layers",
        title: "Hull Manufacturing",
        desc: "Hull construction for commercial, passenger, fishing and military vessels to classification society standards.",
        fullDesc:
          "Western Baltic Shipbuilding's hull manufacturing capability covers a broad portfolio: LNG-powered double-ended ferries up to 129.90 m, freezer trawlers and research fishing vessels, multipurpose vessels up to 105 m, split hopper dredgers, patrol ships and support vessels.\n\nAll hulls are built to classification society rules — including DNV — with in-house NDT inspection, hydrostatic testing and dimensional control at every stage. The 50,000 m² covered workshop area ensures production continuity regardless of season, and the 800 m outfitting and launching area allows for efficient final-stage work alongside the quay.",
      },
      {
        icon: "building",
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
        title: "Non-Destructive Testing (NDT)",
        desc: "UT, MT, PT, VT, RT and ET methods performed by certified Level II and III technicians.",
        fullDesc:
          "Inspection of hull structures and welds without interrupting vessel operations. Our certified technicians detect surface and sub-surface defects to confirm structural integrity, with reports accepted by all major classification societies.\n\nUltrasonic Testing (UT) uses high-frequency sound waves to detect internal flaws in welds and hull structures. Magnetic Particle Testing (MT) reveals surface and near-surface discontinuities in ferromagnetic materials. Penetrant Testing (PT) uses capillary action of dye penetrants to identify surface-breaking defects. Visual Testing (VT) provides systematic examination of welds, structures and coatings. Radiographic Testing (RT) uses X-ray and gamma-ray imaging for full volumetric weld inspection. Eddy Current (ET) uses electromagnetic induction to detect surface and sub-surface flaws in conductive materials.\n\nAll technicians are certified to Level II and III under internationally recognised schemes. Reports are issued in accordance with classification society requirements and are accepted by BV, LR, DNV, RINA, ABS, KR, IR, NKK and WTA.",
      },
      {
        icon: "ruler",
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
        title: "Non-Destructive Testing (NDT)",
        desc: "Visual (VT), ultrasonic (UT), magnetic particle (MT), penetrant (PT), radiographic (RT) and leak testing (LT) methods.",
        fullDesc:
          "Western Central Laboratory performs a full suite of NDT methods in accordance with LST EN ISO, ASTM, AWS and DNV standards. The laboratory is accredited by Lithuania's National Accreditation Bureau and recognised by Bureau Veritas, DNV-GL and Lloyd's Register.\n\nVisual Testing (VT) — systematic weld and structure examination. Ultrasonic Testing (UT) — high-frequency sound waves to detect internal flaws. Magnetic Particle Testing (MT) — surface and near-surface discontinuities in ferromagnetic materials. Penetrant Testing (PT) — capillary dye method to reveal surface-breaking defects. Radiographic Testing (RT) — X-ray and gamma-ray imaging for volumetric weld inspection. Leak Testing (LT) — verification of pressure-tight integrity.\n\nServices are carried out both in the laboratory and at customer sites — including ships, factories and construction units. Technicians hold IRATA certification and can perform testing by rope access, reducing the need for scaffolding.",
      },
      {
        icon: "beaker",
        title: "Destructive Testing (DT)",
        desc: "Tensile, bend, impact, hardness, microstructure and chemical composition tests to EN and ASTM standards.",
        fullDesc:
          "The laboratory conducts destructive (mechanical) testing to quickly and efficiently assess the mechanical properties and characteristics of materials, verifying compliance with technical documentation and standards. The laboratory is recognised by Bureau Veritas for destructive testing.\n\nTest methods include: tensile, bend, flattening and stretching tests; impact resistance (Charpy) tests; hardness tests; microstructure and macrostructure analysis; determination of chemical composition of metals and alloys; and other mechanical tests.\n\nTest reports are issued with full documentation and are suitable for submission to classification societies. The laboratory has extensive experience with ship structural steels, stainless steels and aluminium alloys.",
      },
      {
        icon: "ruler",
        title: "Ultrasonic Thickness Measurement (UTM)",
        desc: "Hull and structure thickness surveys for Class Renewal, CAP assessments and special surveys — over 2,000 ships tested.",
        fullDesc:
          "Ultrasonic thickness measurement is a non-destructive testing method to measure the thickness of an integral solid element based on the ultrasonic pulse return time to the surface. Western Central Laboratory performs UTM testing on commercial vessels, platforms, metal structures, pipelines, pressure vessels, cranes and bridges. The laboratory has tested over 2,000 ships throughout its history.\n\nThe laboratory is recognised by Bureau Veritas, DNV, Lloyd's Register and Registro Italiano Navale. Technicians comply with ISO 9712 international standards and carry GE and Cygnus instruments. Testing is conducted globally at shipyards, ports and at sea.\n\nService programmes include: Condition Assessment Program (CAP) — overall ship condition evaluation, operational inspections and hull strength assessment; Special Survey / Class Renewal — compliance with classification society requirements and IACS standards.",
      },
      {
        icon: "droplets",
        title: "Chemical Laboratory",
        desc: "Air, water and petroleum product analysis; salt and dust contamination testing on metal surfaces.",
        fullDesc:
          "The chemical laboratory conducts testing across five primary domains: air pollution, water, petroleum products, determination of salt concentration on metal surfaces, and determination of dustiness of metal surfaces.\n\nUnder permit No. 1AT-293 from Lithuania's Environmental Protection Agency, the lab performs air testing (dust, nitrogen dioxide, sulphur dioxide, and industrial emission gases including NOₓ, CO, NH₃ and HCl) and water testing (pH, metals, phosphorus, BOD₇, suspended solids, chlorides, sulphates and nitrogen).\n\nPetroleum product analysis covers density, viscosity, mechanical impurities, water content and flash point. Surface contamination testing is accredited to ISO 8502-9:2001 (salt) and ISO 8502-3:2017 (dust) — essential for coating quality control in shipbuilding and ship repair.",
      },
      {
        icon: "shield",
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
        title: "Electrical Machine Repair & Maintenance",
        desc: "Repair and maintenance of AC/DC electrical machines, including generators and motors.",
        fullDesc:
          "BLRT ERA performs repair and maintenance of AC/DC electrical machines including generators, motors and alternators. The company operates a balancing machine with 3,500 kg load capacity and a dedicated testing stand for AC/DC engines and generators (10 t + 5 t crane lifting capacity), enabling thorough overhaul and verification of repaired units before return to service.\n\nAs the official key partner for Moteurs Leroy-Somer SAS (Nidec Group), BLRT ERA holds exclusive regional rights to service their electric generators and alternators across Estonia, Latvia, Lithuania and Finland. Over 70,000 engines and generators have been repaired and serviced throughout the company's history.",
      },
      {
        icon: "zap",
        title: "Switchboard Manufacturing & Modification",
        desc: "Manufacturing of new switchboards and regulating stations; modifications and upgrades of existing switchboards.",
        fullDesc:
          "BLRT ERA manufactures switchboards and regulating stations to customer specifications, and carries out modifications and upgrades to existing installations. Switchboard testing and testing of protection settings are performed in connection with classification society surveys.\n\nThe company's electricians carry out assembly and installation of electrotechnical equipment and cable works, including cable route installation on new vessels and during repair projects. All work is performed to classification society requirements.",
      },
      {
        icon: "circuit",
        title: "Automation System Repair & Adjustment",
        desc: "Repair, adjustment and upgrade of automation systems and radio navigation equipment.",
        fullDesc:
          "BLRT ERA's automation engineers repair, adjust and upgrade automation systems installed on vessels and industrial facilities. Services include adjustment of automation systems, repair of automation systems, and troubleshooting of complex control installations.\n\nRadio navigation equipment adjustment is provided with the aid of specialist partners. Infrared thermography (IRT) and thermal imaging of electrical switchboards and components is performed as a predictive maintenance and fault-finding service, identifying hotspots and anomalies before they cause failures.",
      },
      {
        icon: "gauge",
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
        icon: "zap",
        title: "Turnkey Engineering Services",
        desc: "Full project lifecycle: feasibility study, basic design, project management, detailed design, procurement, FAT and site commissioning.",
        fullDesc:
          "Bars Elekter delivers turnkey engineering services across three phases. In the pre-project phase: feasibility study, basic design, system planning and advice, safety and reliability analysis. During the project phase: project management, procurement, detailed design and software development. In the commissioning and after-sales phase: factory acceptance testing (FAT) with marine certification, site commissioning and start-up.\n\nThe company's approach optimises component configuration, improves durability and minimises structural changes to vessels — ultimately reducing maintenance costs and ensuring efficient installation.",
      },
      {
        icon: "circuit",
        title: "Shore Connection (HVSC)",
        desc: "Compact, reliable high-voltage shore connection shipsets for retrofitting or new-build integration on Ro-Ro, tanker and marine unit vessels.",
        fullDesc:
          "Bars Elekter offers a complete range of reliable shore connection (HVSC) shipsets with very compact footprint, suitable for retrofitting on any existing vessel or integration into new-build projects. Marine applications cover Ro-Ro Passenger and Ro-Ro Cargo vessels, LNG/OIL Tankers, marine units and rigs.\n\nShore connection systems also serve ashore operations, delivering efficient and reliable power that maximises safety and minimises environmental impact. The product line reflects the company's three registered patents and its focus on innovative, low-footprint solutions.",
      },
      {
        icon: "gauge",
        title: "Power Conversion Solutions",
        desc: "PTI, PTH, PTO and Energy Storage Solutions for power balancing, peak shaving and improved grid stability.",
        fullDesc:
          "Bars Elekter provides integrated power conversion solutions for marine and offshore applications. Power Take In (PTI): motor takes over propulsion diesel for slow speed or provides a boost when the main diesel is on. Power Take Home (PTH): generator takes over propulsion diesel for slow speed. Power Take Out (PTO): motor acting as a generator driven by main propulsion.\n\nEnergy Storage Solutions (ESS) make load profiles easier to manage and flatten, improving grid stability and security. These solutions help clients with power balancing, peak shaving, frequency regulation and electrical grid support — drawing on the company's 500+ completed projects worldwide.",
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
      "A modern and dynamically developing machine building company established in 2002. 6,000 m² production area, 50 specialists, 14 CNC machines — serving Central Europe and Scandinavia.",
    aboutP1:
      "BLRT Masinaehitus is a modern and dynamically developing machine building company established in 2002, operating as a subsidiary of BLRT Grupp — the leading industrial holding in the Baltics. The company specialises in series production and machining of metal products and structures for power and transport engineering, cellulose and paper, wood, and other industrial sectors.",
    aboutP2:
      "Operating from a 6,000 m² production facility in Tallinn with 50 specialists and 14 CNC machines, BLRT Masinaehitus serves primary markets in Central Europe and Scandinavia. The company is certified to ISO 9001:2015, ISO 14001:2015, EN 1090-1 and EN ISO 3834-2:2021 (welding capability).",
    services: [
      {
        icon: "layers",
        title: "Series Production & Metal Structures",
        desc: "Serial production and machining of metal components and structures for power, transport, cellulose and paper, and wood industries.",
        fullDesc:
          "BLRT Masinaehitus specialises in series production and machining of metal products and structures for industrial applications. The company works from client drawings to manufacture components and assemblies for power and transport engineering, cellulose and paper production, wood processing and related sectors.\n\nThe 6,000 m² Tallinn production facility houses vertical milling machines, horizontal milling machines, turning machines and welding equipment. All welding is performed under EN ISO 3834-2:2021 certification, and structural steel fabrication meets EN 1090-1 requirements. Manufacturing documentation, material traceability and certificate packages accompany every delivery.",
      },
      {
        icon: "gauge",
        title: "CNC Machining",
        desc: "Precision CNC milling and turning on 14 machines for tight-tolerance components.",
        fullDesc:
          "With 14 CNC machines covering vertical milling, horizontal milling and turning operations, BLRT Masinaehitus delivers precision-machined components to tight dimensional tolerances for demanding industrial customers. Components are produced to client-approved engineering drawings with full dimensional inspection records.\n\nCNC machining capability supports both series production runs and smaller batch orders, making the company a flexible partner for OEM clients in the power generation, transport and process industries of Central Europe and Scandinavia.",
      },
      {
        icon: "wrench",
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
        title: "Feed Storage Barge Construction",
        desc: "Turnkey carbon steel feed barges in capacities from 100 to 900 tonnes — design, construction, painting, outfitting and certification.",
        fullDesc:
          "Marketex Marine has constructed over 400 carbon steel feed barges for fish farming operators worldwide — making it the leading European specialist in this field. Feed barges are available in seven standard capacity tiers: 300, 400, 450, 600, 650, 850 and 900 tonnes, with custom configurations to match each farm's operational requirements.\n\nEvery barge is delivered as a fully turnkey product covering design development, construction, painting, piping, electrical works, hydraulic and pneumatic equipment installation, lining and outfitting. The Tallinn facility features a PEMA automated welding portal, modern slipway shop, one of the largest paint booths in the Baltic region, and the only 850-tonne crane in the Baltic States for barge launching. Barges are certified to NS 9415 and DNV class approvals as required.",
      },
      {
        icon: "layers",
        title: "Offshore Projects",
        desc: "Large-scale steel fabrication and offshore project construction.",
        fullDesc:
          "In addition to aquaculture barges, Marketex Marine undertakes offshore projects utilising its large-scale steel fabrication and assembly capabilities. The Tallinn facility's 25-metre workshop height, 850-tonne crane, 500-tonne transporter and automated welding equipment support construction of substantial offshore steel structures.\n\nThe company's certifications — including EN ISO 3834-2, DNV 402B and IACS NDT for offshore structures — underpin the quality and documentation requirements of offshore project delivery. Marketex Marine's vision is to be the best long-term European partner in implementing advanced large-size steel projects.",
      },
      {
        icon: "ruler",
        title: "Design & Project Management",
        desc: "In-house design development, project management and certification management from concept to delivery.",
        fullDesc:
          "Marketex Marine manages the complete project lifecycle in-house: from initial design development and engineering through construction management to certification and delivery. The design team works directly with customers to develop barge configurations meeting their operational specifications, while coordinating with classification societies (DNV, NS 9415) for all required approvals.\n\nProject management covers scheduling, quality control, subcontractor coordination and customer communication throughout the build. The company's focus on quality, adherence to time frames, flexibility and long-term customer relationships has sustained partnerships with Norwegian and global aquaculture operators spanning 20+ years.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2553",
      email: "info@marketexmarine.net",
      website: "https://marketexmarine.net/en/",
    },
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
        title: "Offshore Steel Structures",
        desc: "Large-scale structural steel for offshore platforms and energy foundations.",
        fullDesc:
          "Marketex Offshore Constructions produces large-scale structural steel assemblies for offshore oil and gas platforms, floating production units and offshore renewable energy installations. The company's fabrication capability covers everything from individual structural members and node joints to complex multi-tonne modules and frames.\n\nAll fabrication is performed to applicable offshore industry standards, with welding procedure qualifications, NDT inspection and dimensional control records forming part of the delivery documentation. Materials traceability is maintained from mill certificate through fabrication to final inspection.",
      },
      {
        icon: "ship",
        title: "Aluminium Vessels",
        desc: "High-speed aluminium crew transfer and service vessels for offshore wind farms.",
        fullDesc:
          "The offshore wind industry's need for fast, seaworthy crew transfer and service vessels has created strong demand for high-quality aluminium workboats. Marketex Offshore designs and builds aluminium vessels optimised for the offshore wind service market — lightweight, fast and stable in choppy sea conditions.\n\nAluminium construction requires specialised welding and fabrication skills distinct from steel work. The Marketex Offshore team has accumulated these capabilities through successive vessel contracts, delivering craft that meet the stringent requirements of classification societies and wind farm operators for crew safety and availability.",
      },
      {
        icon: "zap",
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
        title: "Flat Products Prefabrication",
        desc: "Plasma, oxyfuel, water jet and laser cutting; sheet bending and rolling for carbon steel, stainless steel and aluminium.",
        fullDesc:
          "Elme Metall's flat products prefabrication service covers processing and fabrication of parts from sheet metal materials using multiple cutting and forming technologies.\n\nPlasma cutting handles 3–50 mm thick material across a 3,500 × 22,000 mm operating area to ISO 9013–432 tolerances. Oxyfuel gas cutting processes thicker materials from 15–200 mm across a 3,600 × 34,000 mm area using dual portals with three cutters. Water jet cutting operates on materials up to 200 mm thick across a 3,000 × 8,000 mm area at 5,200 bar, accommodating aluminium alloys, stainless steel and carbon steel. Laser cutting with 6 or 10 kW systems processes carbon steel, stainless steel and aluminium across a 2,500 × 8,000 mm area to ISO 9013–221/331 tolerances.\n\nForming capabilities include sheet bending (1–50 mm, 400–1,250-tonne presses producing angles, ducts, U-channels, cones and Z-profiles) and sheet rolling (7–50 mm, up to 30,000 mm length, using four 4,000 mm-wide rolls). An automated blank manufacturing line provides integrated drilling, threading (M8–M30) and cutting. All operations are certified to ISO and EN 1090.",
      },
      {
        icon: "building",
        title: "Prefabrication of Structural, Tube and Merchant Sections",
        desc: "Robotic processing, profile bending and cutting of structural sections, round pipes and hollow sections up to 18,000 mm.",
        fullDesc:
          "Elme Metall provides comprehensive prefabrication services for processing and fabrication of parts from profiled steel products, including structural sections, tubes and merchant bars.\n\nProfile bending is performed with a 400-tonne press accommodating profiles up to HEM 1000 size and part weights up to 9,000 kg. Three machining robot systems handle different material types: sections processing (10–600 mm thickness, 60–1,250 mm width, up to 18,000 mm length), round pipe processing (diameters 60–1,150 mm, maximum 16,000 mm length), and hollow sections processing (square 60 × 60 to 350 × 350 mm and rectangular sections, up to 16,000 mm length).\n\nFinishing operations include profile cutting to size, drilling of orifices in profiles, and oxyfuel or plasma cutting. Marking capabilities include machine stamping with fonts up to 10 mm. The operation holds ISO Cutcentre and EN 1090 certifications.",
      },
      {
        icon: "ruler",
        title: "Reinforcement Products Prefabrication",
        desc: "Welded mesh, reinforcement cages and cold-formed rebar for construction; laboratory testing per EN ISO 15630.",
        fullDesc:
          "Elme Metall's reinforcement products prefabrication service covers processing and fabrication of parts from reinforcing bars for construction applications.\n\nReinforcement mesh is fabricated on high-performance equipment from cold-formed materials per EN 10080 standards, with meshes up to 6,000 mm length and 2,400 mm width, rod diameters 4–12 mm. Reinforcement cages are manufactured by three methods: resistance welding (round, square and rectangular sections up to 12,000 mm), semiautomatic CO₂ welding per EN ISO 17660-1 (diameters up to 1,400 mm), and manual assembly with modern welding equipment.\n\nCold-formed riffled reinforcing bars are produced in diameters 5–12 mm in rolls weighing approximately 2.5 tonnes, complying with EN 10080:2006 and SFS1300:2014. Cutting and bending equipment handles automatic cutting from rolls (Ø 4–16 mm) and straight stock (Ø 8–40 mm) with 2D/3D bending. A service centre laboratory fitted with modern equipment offers testing per EN ISO 15630-1:2010 and EN ISO 15630-2:2010 with Swedish calibration certification.",
      },
      {
        icon: "shield",
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
        title: "Gas in Cylinders and Packages",
        desc: "Compressed gas cylinders and bundles for smaller-quantity needs — technical, welding, food, medical, specialty and breathing gases.",
        fullDesc:
          "Cylinders or bundles are suitable for supplying gas in smaller quantities. The size range varies from very small cylinders for mobile use up to bundles for big demands. Cylinders vary in case materials (steel, aluminium, plastic) and valve configurations (standard valve or built-in pressure regulator), operating at a typical working pressure of 200 bar.\n\nRecent developments — including the modern MEGAPACK C4 bundles featuring Duplex technology — turn this supply format into a modern and attractive alternative for customers requiring reliable, flexible access to gas without bulk infrastructure. Available product categories include technical gases, welding and cutting gases, gases for the food industry, medical gases, specialty gases, and breathing gases.",
      },
      {
        icon: "droplets",
        title: "Liquefied Gases",
        desc: "Cryogenic liquid gas supply in tanks for medium and large-volume industrial customers.",
        fullDesc:
          "Liquefied gases are supplied in cryogenic form for medium and large-volume customers, providing a cost-effective alternative to cylinder deliveries for high-consumption operations. Liquid oxygen, nitrogen, argon and CO₂ are delivered by tanker to customer-site cryogenic tanks, where they are vaporised on demand to supply process and welding gases at the required flow rates.\n\nElme Messer Gaas manages bulk tank installation, maintenance and telemetry monitoring, enabling automatic reordering to ensure uninterrupted supply. This supply model is particularly suited to industrial production, welding fabrication, food processing and medical facility applications requiring continuous, high-volume gas availability.",
      },
      {
        icon: "layers",
        title: "Dry Ice",
        desc: "Solid CO₂ at −79 °C for cooling and dry ice blasting — supplied in pellets and blocks.",
        fullDesc:
          "Dry ice is solid CO₂ with a temperature of approximately −79 °C at atmospheric pressure. It is non-toxic, non-flammable, inert, tasteless and odourless, with a density of approximately 1,500 kg/m³ in compact form. Dry ice evaporates without leaving residue, making it ideal for applications where no secondary waste is acceptable.\n\nElme Messer Gaas manufactures dry ice by expanding liquid carbon dioxide through a pelletiser, forming dry ice snow that is pressed through an extruder plate into pellets or larger blocks. Applications include cooling (blocks and larger pellets serve as an effective cooling medium with high cooling capacity) and dry ice blasting (a powerful, gentle, dry and ecologically friendly cleaning method producing no secondary waste). Standard pellet diameter for blasting is 3 mm, with 1.7 mm pellets available for delicate surfaces. The company provides convenient full service including supply in insulated boxes and cost-effective all-in-one rental concepts.",
      },
      {
        icon: "wrench",
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
        title: "International and Local Transport",
        desc: "Dangerous, bulky and heavy cargo across the Baltic States, Scandinavia, Eastern and Western Europe — ADR-certified fleet.",
        fullDesc:
          "Elme Trans provides international and local transportation services with specialisation in hazardous materials. The company handles dangerous, bulky and heavy cargo shipping in the Baltic States, Scandinavia, Eastern and Western Europe. All vehicles carry ADR modification and are certified to transport dangerous goods.\n\nThe fleet operates lorries with tanks designed for liquefied gas transport, curtain-sided vehicles and bed trucks. Branch offices in Estonia, Latvia, Lithuania and Ukraine enable service delivery throughout the Baltic region and into broader European markets. Since 2014 the company has held authorised economic operator status within the EU, reflecting compliance with EU standards for dangerous goods transportation.",
      },
      {
        icon: "gauge",
        title: "Equipment Rental",
        desc: "Over 300 units across Estonia and Lithuania — telescopic loaders, scissor lifts, aerial work platforms to 41 m, forklifts, cranes and construction cabins.",
        fullDesc:
          "Elme Trans manages over 300 equipment units for rental across Estonia and Lithuania. The fleet covers a comprehensive range of equipment for industrial and construction operations: telescopic equipment including JLG 450-AJ aerial work platforms (16 m reach); scissor lifts reaching up to 12 metres; diesel and battery-powered work platforms reaching up to 41 metres; telescopic trailers for extended reach; heavy-duty lifting equipment including Liebherr 55 LTM cranes; earthmoving equipment including JCB 4CX; portable office and accommodation cabins (2.5 × 6 m); portable fencing (3.5 × 2 m); and specialised tools including diesel heating units (Master BV 690, 200 kW).\n\nRental is available for short and long-term periods across Estonia and Lithuania, with multilingual support teams (Estonian, English, Russian, Lithuanian).",
      },
      {
        icon: "package",
        title: "Car Rental",
        desc: "Peugeot Partner and Peugeot Expert vehicles available for short and long-term rental.",
        fullDesc:
          "Elme Trans offers car rental services alongside its transport and equipment rental operations. Available vehicle categories include cars (Peugeot Partner) and minivans (Peugeot Expert), suitable for business use and site mobility needs. Rental is operated from the company's Tallinn base at Kopli 103.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2408",
      website: "https://elmetrans.ee/en/",
    },
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
        title: "Berths",
        desc: "2,360 m of berths with fresh water, compressed air and electrical supply connections for vessels up to 30,000 DWT.",
        fullDesc:
          "Vene-Balti Sadam operates 2,360 metres of total berth length on the Kopli peninsula, with individual berths ranging from 37 to 158 metres and depths of 4.3 to 10.6 metres. Each berth is equipped with fresh water supply, compressed air and electrical power connections.\n\nThe port features a North Basin (max vessel 185 m × 35 m, draft 10.2 m) and a South Basin (max vessel 200 m × 35 m, draft 7.1 m), both with a minimum capacity of 7,500 tonnes. Three floating docks with deck lengths of 110–180 metres accommodate vessels of 4,500–12,000 DWT. Berths support cargo handling, vessel repair and maintenance, short-term lay-up, ship scrapping, launching aquaculture barges, main engine trials and industrial offshore construction.",
      },
      {
        icon: "ship",
        title: "Tugs",
        desc: "Two tugs available in port for mooring and manoeuvring assistance, extendable to other Estonian ports on request.",
        fullDesc:
          "Vene-Balti Sadam operates two tugs available around the clock for mooring and manoeuvring assistance within the port, with services extendable to other Estonian ports on request.\n\nThe fleet includes AGAR, an azimuth-propulsion tug (Rolls-Royce system) rated at 3,042 BHP / 2,237 kW with a bollard pull of 45 tonnes and ice class 1A. AGAR measures 25.4 m × 8.8 m with a draft of 3.24 m, carries a fore towing winch rated at 100 tonnes with 180 m of 50 mm towing line, and is equipped with a Palfinger PC 2700 M deck crane and a Volvo Penta fire-fighting system. Tug orders within the port are placed directly via Vene-Balti Sadam OÜ.",
      },
      {
        icon: "layers",
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
        title: "Supply",
        desc: "Maritime provisioning across 43 IMPA catalogue categories — safety gear, deck equipment, tools, paint, rigging and more.",
        fullDesc:
          "Mereabi supplies goods in accordance with the IMPA catalogue across 43 product categories, covering all essential maritime provisioning needs. Categories include safety equipment and protective gear, cleaning materials and chemicals, hand tools and electrical tools, rope, rigging and nautical equipment, marine paints and painting supplies, metal components, pipes and fittings, welding equipment and machinery.\n\nCustomers can request quotations directly through the company's online form. The supply service is supported by Mereabi's deep stock knowledge and its network of approved global brand representatives, ensuring competitive lead times for both routine orders and urgent vessel requirements.",
      },
      {
        icon: "clock",
        title: "Rent",
        desc: "Short- and long-term rental of life rafts, fire extinguishers, breathing apparatus and air cylinders for commercial and yacht fleets.",
        fullDesc:
          "Mereabi provides rental of marine safety equipment for both commercial fleet operators and yacht owners, covering life rafts (commercial and yacht grades), fire extinguishers, breathing apparatus and air cylinders.\n\nRental is a practical solution for vessels with infrequent trading patterns, vessels undergoing survey, or operators who wish to maintain SOLAS compliance without the capital cost of ownership. Equipment is maintained in service-ready condition by Mereabi's certified technicians and can be collected from the Tallinn service station or arranged for delivery to Baltic region ports.",
      },
      {
        icon: "wrench",
        title: "Service",
        desc: "OEM and multi-brand annual and 5-year servicing of lifeboats, rescue boats, davits, fire-fighting systems, GMDSS and navigation equipment.",
        fullDesc:
          "Mereabi's service division covers the full range of marine safety appliances. Life-saving appliance services include OEM and multi-brand annual and 5-year servicing, testing and repairs of lifeboats, rescue boats, davits and hooks; gangway inspections; deck crane load testing up to 600 tonnes; lifeboat engine overhauls; and fibreglass repairs. Life rafts (commercial fleet and yachts), inflatable rescue boats, inflatable lifejackets (SOLAS and non-SOLAS) and immersion suits are also inspected and repacked.\n\nFire-fighting services encompass modernisation and installation of fire suppression systems, maintenance of fire extinguishers, foam applicators, fixed systems (CO₂, dry powder, foam, water mist), breathing apparatus, oxygen cylinders and fireman's outfits. Additional services include annual GMDSS radio surveys, navigation equipment testing, measuring device calibration and Oil Discharge Monitoring Equipment (ODME) service. The company operates a 100-tonne crane for load testing at its Tallinn facility.",
      },
      {
        icon: "shield",
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
      "Founded in 2000, BLRT Rekato operates in ship repair, shipbuilding and the Oil & Gas industry from a 6,420 m² production facility at Kopli 103, Tallinn.",
    aboutP1:
      "BLRT Rekato OÜ was founded in 2000 as a subsidiary of BLRT Grupp, the leading industrial holding in the Baltics. The company operates in ship repair, shipbuilding and the Oil & Gas industry, with a 6,420 m² production hall equipped with specialised machine tools for manufacturing pipelines, profile structures and metal processing.",
    services: [
      {
        icon: "anchor",
        title: "Ship Repair",
        desc: "Repair works for vessels in the Baltic region including steel works, pipework and structural repairs carried out at the Kopli 103 yard.",
      },
      {
        icon: "layers",
        title: "Pipeline Manufacturing",
        desc: "Manufacturing of pipelines and pipe systems for marine and Oil & Gas applications using specialised CNC machinery.",
      },
      {
        icon: "wrench",
        title: "Profile Structure Fabrication",
        desc: "Fabrication of profile metal structures and assemblies for shipbuilding and industrial customers.",
      },
      {
        icon: "gauge",
        title: "Metal Processing",
        desc: "General metal processing including cutting, bending, drilling and machining for marine and industrial applications.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2504",
      email: "rekato@blrt.ee",
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
      "BLRT Valukoda is Estonia's only foundry, producing over 100 tonnes per month of grey, spheroidal and wear-resistant cast iron for marine and industrial customers.",
    aboutP1:
      "BLRT Valukoda is a subsidiary of BLRT Grupp and the only surviving foundry in Estonia. The company operates two 1,000 kg melting furnaces and one 500 kg furnace, with a monthly output of over 100 tonnes of grey, spheroidal, heat- and wear-resistant cast iron products. Quality management is certified to ISO 9001:2015.",
    services: [
      {
        icon: "flame",
        title: "Grey Cast Iron (GJL)",
        desc: "GJL 150–300 grade grey cast iron castings for marine, industrial and mechanical engineering applications.",
      },
      {
        icon: "beaker",
        title: "Spheroidal (Ductile) Iron (GJS)",
        desc: "GJS 400–800 grade ductile iron castings offering high strength and toughness for demanding applications.",
      },
      {
        icon: "shield",
        title: "Heat & Wear-Resistant Castings",
        desc: "Specialised heat- and wear-resistant cast iron grades for high-temperature and abrasive industrial environments.",
      },
      {
        icon: "ruler",
        title: "Custom Casting from Drawings",
        desc: "Custom castings produced to customer drawings with in-house pattern support for serial and one-off production.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 511 9437",
      email: "valukoda@blrt.ee",
    },
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
        title: "Industrial Goods Supply",
        desc: "Welding consumables, zinc, abrasive powders, industrial machinery and tools for manufacturing and construction sectors.",
      },
      {
        icon: "anchor",
        title: "Marine Equipment Supply",
        desc: "Marine engines, propulsion systems, anchoring and mooring equipment for the shipbuilding and ship repair industries.",
      },
      {
        icon: "zap",
        title: "Energy Supply",
        desc: "Electrical and thermal energy supply services for industrial customers and BLRT Grupp enterprises at the Kopli campus.",
      },
      {
        icon: "wrench",
        title: "Crane Maintenance",
        desc: "Maintenance and repair of industrial cranes and lifting equipment on the Kopli industrial campus.",
      },
      {
        icon: "circuit",
        title: "Network & Communication Services",
        desc: "Communication infrastructure and network services supporting BLRT Grupp industrial operations.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2386",
      email: "elme@blrt.ee",
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
        title: "Metal Inspection & Testing",
        desc: "Inspection and mechanical testing of metals and metal products to recognised national and international standards.",
      },
      {
        icon: "shield",
        title: "Weld Quality Control",
        desc: "Visual, dimensional and non-destructive testing of welds for marine, structural and industrial fabrication.",
      },
      {
        icon: "ruler",
        title: "Calibration Services",
        desc: "Calibration of measuring instruments and gauges in accordance with national metrology requirements.",
      },
      {
        icon: "file",
        title: "Technical Control",
        desc: "Independent technical supervision and acceptance documentation for production processes and incoming materials.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      email: "elmetks@elmetks.ee",
    },
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
      "Marketex Offshore Constructions manufactures complex steel structures for Offshore Oil & Gas, Renewables, Infrastructure and Industrial projects, meeting NORSOK, DNV GL, ABS and Bureau Veritas requirements.",
    aboutP1:
      "Marketex Offshore Constructions (MOC) is a subsidiary of BLRT Grupp specialising in complex steel structures for Offshore Oil & Gas, Renewables, Infrastructure and Industrial projects. In 2020, supported by BLRT Grupp's development programme, the company opened a brand-new welding, machining and painting facility dedicated to large fabrication projects serving the North Sea and beyond.",
    aboutP2:
      "MOC manufactures to NORSOK, DNV GL, ABS and Bureau Veritas requirements. The company's QHSE Department — comprising a QHSE Manager, HSE Engineer, Metrology Engineer and three VT2-certified QC inspectors — ensures rigorous quality and safety standards across all production activities. Safety induction training is mandatory for all personnel entering MOC production workshops.",
    services: [
      {
        icon: "layers",
        title: "Offshore Steel Structures",
        desc: "Complex steel structures for offshore oil and gas platforms, meeting NORSOK and classification society requirements.",
      },
      {
        icon: "waves",
        title: "Renewables Fabrication",
        desc: "Steel fabrication for offshore wind and renewables infrastructure, including foundations, transition pieces and secondary structures.",
      },
      {
        icon: "building",
        title: "Industrial & Infrastructure Structures",
        desc: "Heavy steel structures for infrastructure and industrial projects, manufactured to DNV GL, ABS and Bureau Veritas standards.",
      },
      {
        icon: "award",
        title: "QHSE Quality Assurance",
        desc: "Integrated QHSE system with VT2-certified QC inspectors, HSE engineering and metrology support on every fabrication project.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      email: "moc@blrt.ee",
    },
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
      "Western Technological Solutions manufactures large-scale stainless steel and aluminium structures, tanks and pressure vessels for Chemical, Oil & Gas, Marine, Hydrogen and Decarbonization industries from Klaipėda.",
    aboutP1:
      "Western Technological Solutions (WTS) is part of the Western Shipyard Group and BLRT Grupp, offering advanced engineering and manufacturing services for large-scale stainless steel and aluminium products. Manufacturing facilities sit directly on the port pier in Klaipėda, Lithuania — enabling sea transport of oversized structures that cannot be moved by road.",
    aboutP2:
      "WTS serves the Chemical, Oil & Gas, Power, Marine, Food, Hydrogen, Carbon Capture and Decarbonization industries. Deep expertise in complex, large-format stainless steel components has been built through long-term collaborations with leading European engineering companies on major industrial projects.",
    services: [
      {
        icon: "beaker",
        title: "Stainless Steel Tanks & Pressure Vessels",
        desc: "Large-scale stainless steel pressure vessels, storage tanks and process vessels to EN/ASME standards — sea-shipped from Klaipėda.",
      },
      {
        icon: "layers",
        title: "Large-Format Welded Assemblies",
        desc: "Complex stainless steel and aluminium welded assemblies including scrubbers, heat exchangers and structural fabrications.",
      },
      {
        icon: "trending",
        title: "Duplex Stainless Steel Bridges",
        desc: "Innovative duplex stainless steel bridge structures for infrastructure and decarbonization projects across Europe.",
      },
      {
        icon: "ruler",
        title: "Full Project Cycle",
        desc: "End-to-end service from engineering design and fabrication through sea shipment and on-site installation at the customer's location.",
      },
    ],
    contact: {
      address: "Minijos Str. 180, 93269 Klaipėda, Lithuania",
      email: "info@techsolutions.lt",
    },
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
        title: "Newbuilding Design",
        desc: "Complete vessel design packages for various vessel types — from initial concept through classification-approved drawings.",
      },
      {
        icon: "layers",
        title: "Retrofit Engineering",
        desc: "Engineering design for BWTS, EGCS (scrubbers), LNG conversion and other regulatory retrofits, including 3D laser scanning.",
      },
      {
        icon: "wrench",
        title: "Vessel Conversions",
        desc: "Design for vessel purpose change, lengthening, propulsion system modifications and major structural conversions.",
      },
      {
        icon: "ruler",
        title: "On-Site Supervision",
        desc: "Project management and on-site engineering supervision during construction, repair or retrofit execution at yards worldwide.",
      },
    ],
    contact: {
      address: "Minijos Str. 180, LT-93269 Klaipėda, Lithuania",
      email: "wbe@wsy.lt",
    },
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
        title: "Port Agency",
        desc: "Full port agency services in Klaipėda and Tallinn: customs, crew changes, berthing coordination and port dues management.",
      },
      {
        icon: "ship",
        title: "Ship Supply",
        desc: "Procurement and delivery of technical spares, lubricants, provisions and deck stores to vessels at berth or anchorage.",
      },
      {
        icon: "truck",
        title: "Cargo & Freight Forwarding",
        desc: "Organisation of general and oversized cargo delivery, chartering and freight forwarding projects across the Baltic region.",
      },
      {
        icon: "globe",
        title: "Multipurpose Agency Services",
        desc: "Long-term project agency for extraordinary vessel calls — offshore, heavy-lift, cable-lay and construction vessels.",
      },
    ],
    contact: {
      address: "Minijos Str. 180, 93269 Klaipėda, Lithuania",
      phone: "+370 699 36 083",
      email: "agency@wsy.lt",
    },
  },
];
