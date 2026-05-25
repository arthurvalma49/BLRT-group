export type ServiceIcon =
  | "anchor" | "ship" | "wrench" | "zap" | "shield" | "package"
  | "truck" | "layers" | "ruler" | "eye" | "globe" | "award"
  | "clock" | "waves" | "circuit" | "file" | "droplets" | "magnet"
  | "trending" | "building" | "gauge" | "beaker" | "hard-hat" | "flame";

export interface Service {
  icon: ServiceIcon;
  title: string;
  desc: string;
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
}

export const sectorGroups: { id: string; label: string; slugs: string[] }[] = [
  {
    id: "repair",
    label: "Ship Repair",
    slugs: ["tallinn-shipyard", "western-shiprepair", "turku-repair-yard"],
  },
  {
    id: "building",
    label: "Shipbuilding",
    slugs: ["western-baltic-shipbuilding", "blrt-fiskerstrand"],
  },
  {
    id: "inspection",
    label: "Inspection & Testing",
    slugs: ["tehnomet-survey", "western-central-laboratory"],
  },
  {
    id: "engineering",
    label: "Engineering",
    slugs: ["blrt-era", "bars-elekter", "blrt-masinaehitus", "marketex-marine", "marketex-offshore"],
  },
  {
    id: "materials",
    label: "Steel & Materials",
    slugs: ["elme-metall", "elme-messer-gaas", "elme-trans"],
  },
  {
    id: "port",
    label: "Port & Marine Services",
    slugs: ["vene-balti-sadam", "mereabi"],
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
    tagline: "Northern Europe's largest ship repair facility",
    heroDesc:
      "Full-cycle ship repair, conversion and dry docking at the heart of Tallinn's Old City Harbour. Three dry docks accommodating vessels up to 265 × 70 m.",
    aboutP1:
      "Tallinn Shipyard is the flagship repair facility of the BLRT Grupp, operating from the historic Kopli peninsula in Tallinn, Estonia. With over a century of uninterrupted shipbuilding and repair tradition, the yard handles everything from routine maintenance to complex conversion projects for tankers, bulk carriers, container ships and offshore units.",
    aboutP2:
      "Operating as part of the BLRT Repair Yards network alongside Western Shiprepair in Lithuania and Turku Repair Yard in Finland, Tallinn Shipyard offers clients coordinated scheduling across three Baltic Sea locations, seven dry docks combined, and a single engineering and procurement team.",
    services: [
      {
        icon: "anchor",
        title: "Dry Docking & Hull Work",
        desc: "Three dry docks up to 265 × 70 m for hull cleaning, blasting, coating and structural steel renewals.",
      },
      {
        icon: "wrench",
        title: "Mechanical & Machinery Repair",
        desc: "Main engine overhaul, propeller and shaft work, thruster repairs, and auxiliary machinery servicing.",
      },
      {
        icon: "layers",
        title: "Vessel Conversion & Modification",
        desc: "Structural modifications, accommodation upgrades, ballast water treatment system installation and lengthening.",
      },
      {
        icon: "zap",
        title: "Electrical & Automation",
        desc: "Electrical overhaul, navigation equipment, automation and control system refits.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2900",
      email: "info@blrtyards.com",
      website: "https://blrtyards.com/en/",
    },
  },
  {
    slug: "western-shiprepair",
    name: "Western Shiprepair",
    sector: "Ship Repair",
    sectorId: "repair",
    countries: "LT",
    tagline: "Full-service ship repair in Klaipeda",
    heroDesc:
      "Ship maintenance, repair and conversion at the Port of Klaipeda, Lithuania. Part of the BLRT Repair Yards network.",
    aboutP1:
      "Western Shiprepair operates from the Lithuanian seaport city of Klaipeda, offering full-cycle ship repair services to Baltic, North Sea and Atlantic fleet operators. As part of BLRT Western Shipyard — the largest marine engineering corporation in Lithuania — Western Shiprepair draws on an extensive pool of qualified engineers, welders and outfitting specialists.",
    aboutP2:
      "The yard handles a broad range of vessel types from ferries and tankers to offshore support vessels, leveraging close collaboration with sister engineering companies for electrical, piping and structural works.",
    services: [
      {
        icon: "anchor",
        title: "Dry Docking",
        desc: "Dry dock and floating dock capacity for hull inspection, blasting and coating.",
      },
      {
        icon: "wrench",
        title: "Machinery Repair",
        desc: "Main engine overhaul, gearbox, shafting, propeller and bow thruster repairs.",
      },
      {
        icon: "layers",
        title: "Steel & Outfitting",
        desc: "Structural steel renewal, pipe systems, insulation and accommodation outfitting.",
      },
    ],
    contact: {
      website: "https://blrtyards.com/en/",
      email: "info@blrtyards.com",
    },
  },
  {
    slug: "turku-repair-yard",
    name: "Turku Repair Yard",
    sector: "Ship Repair",
    sectorId: "repair",
    countries: "FI",
    tagline: "Ship repair at the gateway to the Baltic",
    heroDesc:
      "One of Scandinavia's largest dry docking facilities, located at the Port of Naantali, Finland.",
    aboutP1:
      "Turku Repair Yard is situated in Naantali near Turku, at the western entrance to the Finnish archipelago. The facility serves the Nordic ferry routes, tanker fleet and offshore support market with dry docking capacity for large vessels and a highly experienced local workforce.",
    aboutP2:
      "As part of BLRT Repair Yards, Turku coordinates scheduling, procurement and engineering resources with Tallinn Shipyard and Western Shiprepair, giving clients Baltic-wide coverage under one commercial relationship.",
    services: [
      {
        icon: "anchor",
        title: "Dry Docking",
        desc: "Large floating dry dock accommodating ferries, RoRo vessels and tankers.",
      },
      {
        icon: "wrench",
        title: "Machinery & Hull Work",
        desc: "Propulsion, thruster, steering gear overhaul and hull steel renewals.",
      },
      {
        icon: "shield",
        title: "Coating & Blasting",
        desc: "Full abrasive blasting and marine coating application to class requirements.",
      },
    ],
    contact: {
      website: "http://www.turkurepairyard.com/",
    },
  },

  /* ── SHIPBUILDING ── */
  {
    slug: "western-baltic-shipbuilding",
    name: "Western Baltic Shipbuilding",
    sector: "Shipbuilding",
    sectorId: "building",
    countries: "LT",
    tagline: "Large-block construction for the world's most complex vessels",
    heroDesc:
      "Construction of grand blocks for cruise ships, multifunctional supply vessels, research ships and tugboats. 50,000 m² of covered workshop space in Klaipeda.",
    aboutP1:
      "Western Baltic Shipbuilding is a specialist newbuilding facility within the BLRT Western Shipyard group in Klaipeda, Lithuania. The yard focuses on the construction of large steel sections and complete blocks for the world's major cruise ship and passenger ferry builders, as well as full newbuilding contracts for offshore supply and research vessels.",
    aboutP2:
      "With one of the largest covered building halls in the eastern Baltic, Western Baltic Shipbuilding delivers complex steel structures to exacting dimensional tolerances, supported by a highly skilled workforce and integrated engineering, NDT and outfitting capabilities.",
    services: [
      {
        icon: "ship",
        title: "Cruise Ship Block Construction",
        desc: "Grand block and superstructure sections for major European cruise ship yards.",
      },
      {
        icon: "layers",
        title: "Multifunctional Vessel Construction",
        desc: "Complete newbuilding of offshore supply, research and special purpose vessels.",
      },
      {
        icon: "file",
        title: "Engineering & Design",
        desc: "In-house design and engineering support for production planning and classification approval.",
      },
    ],
    contact: {
      website: "https://wbs.lt/en/",
    },
  },
  {
    slug: "blrt-fiskerstrand",
    name: "BLRT Fiskerstrand",
    sector: "Shipbuilding",
    sectorId: "building",
    countries: "NO",
    tagline: "Specialists in LNG-powered ferries and advanced marine vessels",
    heroDesc:
      "A 50/50 joint venture with Norway's Fiskerstrand Verft AS. Builders of the world's largest LNG-powered ferry and pioneers in zero-emission vessel technology.",
    aboutP1:
      "BLRT Fiskerstrand combines BLRT Grupp's Baltic manufacturing expertise with Fiskerstrand Verft's century-old Norwegian shipbuilding tradition. The collaboration has produced a series of groundbreaking LNG and battery-electric vessels for the Norwegian coastal and fjord ferry market.",
    aboutP2:
      "The yard delivered MF Boknafjord in 2011 — at the time the world's largest LNG-powered ferry — and has continued to push the boundary of sustainable marine propulsion through successive contracts with Norwegian public ferry operators.",
    services: [
      {
        icon: "ship",
        title: "LNG Ferry Construction",
        desc: "Design and build of LNG-powered ro-pax ferries for Norwegian coastal routes.",
      },
      {
        icon: "zap",
        title: "Battery-Electric Vessels",
        desc: "Zero-emission ferry newbuilding and hybrid propulsion integration.",
      },
      {
        icon: "layers",
        title: "Advanced Marine Engineering",
        desc: "Complex systems integration, outfitting and sea trials for high-specification vessels.",
      },
    ],
    contact: {
      website: "https://www.fiskerstrand.no/en/",
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
    tagline: "Independent marine NDT and hull inspection, worldwide",
    heroDesc:
      "Non-destructive testing, ultrasonic thickness measurement and steel renewal supervision for fleet operators. Certified technicians mobilised to any port within 24 hours.",
    aboutP1:
      "Tehnomet Survey is an actively developing service company founded in 1998, operating in the field of ship repair and inspection of hull structures of marine vessels. We operate worldwide, with certified technicians holding all documents necessary for rapid international mobilisation.",
    aboutP2:
      "Our inspectors work in close cooperation with all major classification societies — LR, DNV, BV, ABS, RINA, KR, IR, NKK and WTA — ensuring every report and certificate we produce is accepted globally. Independence and technical rigour are at the core of how we operate.",
    services: [
      {
        icon: "waves",
        title: "Non-Destructive Testing (NDT)",
        desc: "UT, MT, PT, VT, RT and ET methods performed by certified Level II and III technicians.",
      },
      {
        icon: "ruler",
        title: "Ultrasonic Thickness Measurement",
        desc: "Residual thickness mapping of hull structures per classification society rules.",
      },
      {
        icon: "file",
        title: "Repair Sketches & Steel Calculation",
        desc: "Weight calculations and repair sketches for docking budgets and steel renewal scopes.",
      },
      {
        icon: "droplets",
        title: "Pitting Corrosion Survey",
        desc: "Detection and reporting of pitting in ballast and cargo tanks with IACS-compliant tolerances.",
      },
      {
        icon: "anchor",
        title: "Anchor Chain Calibration",
        desc: "Calibration of anchor chains from the second special survey onwards per class requirements.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2997",
      email: "info@tehnometsurvey.ee",
      website: "https://tehnometsurvey.ee/en/",
    },
  },
  {
    slug: "western-central-laboratory",
    name: "Western Central Laboratory",
    sector: "Inspection & Testing",
    sectorId: "inspection",
    countries: "LT",
    tagline: "Accredited material testing for maritime and industrial sectors",
    heroDesc:
      "Destructive and non-destructive material testing services from an accredited laboratory in Klaipeda.",
    aboutP1:
      "Western Central Laboratory is part of the BLRT Western Shipyard group in Klaipeda, Lithuania, providing certified material analysis and testing services to the shipbuilding, ship repair and wider industrial sectors. The laboratory holds national and international accreditations and operates in accordance with relevant EN and ISO standards.",
    services: [
      {
        icon: "waves",
        title: "Non-Destructive Testing",
        desc: "UT, MT, PT and VT on welds, castings and fabricated components.",
      },
      {
        icon: "beaker",
        title: "Destructive Testing",
        desc: "Tensile, impact, bend and hardness testing to EN and ASTM standards.",
      },
      {
        icon: "file",
        title: "Material Certification",
        desc: "Test reports and material certificates accepted by classification societies.",
      },
    ],
    contact: {
      website: "https://wcl.lt/",
    },
  },

  /* ── ENGINEERING ── */
  {
    slug: "blrt-era",
    name: "BLRT ERA",
    fullName: "BLRT ERA AS",
    sector: "Engineering",
    sectorId: "engineering",
    countries: "EE",
    tagline: "Marine and industrial electrical engineering since 1948",
    heroDesc:
      "Electrical engineering works for shipbuilding, ship repair, offshore energy and industrial facilities. Part of BLRT Grupp since 1996.",
    aboutP1:
      "BLRT ERA AS has been delivering electrical engineering solutions since 1948, making it one of the most experienced marine electrical contractors in the Baltic region. The company covers everything from design and installation to commissioning and maintenance of complex electrical systems on new vessels, repair projects and offshore platforms.",
    aboutP2:
      "Operating from Tallinn, BLRT ERA works closely with BLRT Repair Yards, Western Baltic Shipbuilding and external clients across the Baltic and North Seas, providing integrated electrical engineering from a single trusted source.",
    services: [
      {
        icon: "zap",
        title: "Marine Electrical Installation",
        desc: "Power distribution, switchboards, cable installation and commissioning on new and repair vessels.",
      },
      {
        icon: "circuit",
        title: "Automation & Control",
        desc: "Alarm monitoring, power management and control system integration.",
      },
      {
        icon: "zap",
        title: "Offshore Electrical Works",
        desc: "Electrical engineering for offshore platforms and energy installations.",
      },
      {
        icon: "shield",
        title: "Industrial Projects",
        desc: "Electrical works for industrial facilities, including substations and motor control centres.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2900",
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
    tagline: "Offshore and marine electrical engineering in the North Sea and Baltic",
    heroDesc:
      "Electrical engineering, installation and commissioning for the offshore and marine industry. Offices in Tallinn and Norway.",
    aboutP1:
      "Bars Elekter specialises in electrical engineering services for the offshore and marine industries, operating from dual bases in Tallinn, Estonia and Norway. The company serves the Norwegian offshore sector as well as Baltic marine clients, providing skilled electrical crews for installation, repair and commissioning projects.",
    services: [
      {
        icon: "zap",
        title: "Offshore Electrical Installation",
        desc: "Electrical installation and commissioning on offshore rigs, platforms and FPSOs.",
      },
      {
        icon: "circuit",
        title: "Marine Electrical Repair",
        desc: "Fault finding, repair and system upgrade on marine vessels.",
      },
      {
        icon: "shield",
        title: "Project-Based Engineering",
        desc: "Turnkey electrical scopes for newbuilding and conversion projects.",
      },
    ],
    contact: {
      website: "https://barselekter.com/en/",
      email: "info@barselekter.com",
    },
  },
  {
    slug: "blrt-masinaehitus",
    name: "BLRT Masinaehitus",
    sector: "Engineering",
    sectorId: "engineering",
    countries: "EE",
    tagline: "Precision machine building for power, transport and industry",
    heroDesc:
      "Metal products and structures for power generation, transport and paper processing industries. Export markets across Central Europe and Scandinavia.",
    aboutP1:
      "BLRT Masinaehitus was established in 2002 as a specialised machine building company within BLRT Grupp. The company manufactures precision metal components and structures for clients in the energy, transport and paper processing sectors, with a strong export track record to Central European and Scandinavian markets.",
    services: [
      {
        icon: "layers",
        title: "Metal Structures & Fabrication",
        desc: "Welded and machined steel structures to tight engineering tolerances.",
      },
      {
        icon: "gauge",
        title: "Power Generation Components",
        desc: "Parts and assemblies for turbines, generators and power plant equipment.",
      },
      {
        icon: "wrench",
        title: "Transport Engineering",
        desc: "Components for rail and road transport equipment.",
      },
    ],
    contact: {
      website: "https://masinaehitus.ee/en/",
    },
  },
  {
    slug: "marketex-marine",
    name: "Marketex Marine",
    sector: "Engineering",
    sectorId: "engineering",
    countries: "EE",
    tagline: "Turn-key steel barges for the global aquaculture industry",
    heroDesc:
      "More than 350 carbon steel barges built for fish farming operations worldwide. 850-tonne crane capacity.",
    aboutP1:
      "Marketex Marine is the leading European manufacturer of carbon steel service barges for the aquaculture industry. Operating from Tallinn with an 850-tonne crane, the company delivers complete turn-key barge solutions — from initial design through fabrication, outfitting and delivery.",
    aboutP2:
      "With over 350 barges completed for Norwegian, Chilean and global fish farming operators, Marketex Marine brings deep domain knowledge of the aquaculture sector to every project.",
    services: [
      {
        icon: "ship",
        title: "Aquaculture Barge Construction",
        desc: "Complete carbon steel barges for fish farming — feed barges, accommodation barges and service craft.",
      },
      {
        icon: "layers",
        title: "Steel Fabrication & Outfitting",
        desc: "In-house steel fabrication, equipment installation and system integration.",
      },
      {
        icon: "anchor",
        title: "Delivery & Commissioning",
        desc: "Sea transport, on-site commissioning and aftersales support.",
      },
    ],
    contact: {
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
      },
      {
        icon: "ship",
        title: "Aluminium Vessels",
        desc: "High-speed aluminium crew transfer and service vessels for offshore wind farms.",
      },
      {
        icon: "zap",
        title: "Offshore Wind Foundations",
        desc: "Transition pieces and secondary steel for wind turbine foundations.",
      },
    ],
    contact: {
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
    tagline: "Baltic States leader in rolled steel sales and metal processing",
    heroDesc:
      "Distribution and processing of rolled steel products across five countries. Galvanization, prefabrication and structural sections for construction and manufacturing.",
    aboutP1:
      "Elme Metall is the largest distributor and processor of rolled steel products in the Baltic States, operating warehousing and processing centres in Estonia, Latvia, Lithuania, Finland and Poland. Founded in 2001, the company serves the construction, shipbuilding, engineering and manufacturing sectors with a broad product portfolio and rapid delivery capability.",
    aboutP2:
      "Processing services include galvanization, plasma and laser cutting, bending, drilling and prefabrication, allowing clients to source both standard stock and finished components from a single supplier.",
    services: [
      {
        icon: "layers",
        title: "Rolled Steel Distribution",
        desc: "Structural sections, plates, tubes, bars and merchant bar from European mills.",
      },
      {
        icon: "shield",
        title: "Hot-Dip Galvanization",
        desc: "Corrosion protection galvanizing for structural steel components.",
      },
      {
        icon: "ruler",
        title: "Steel Processing",
        desc: "Cutting, bending, drilling and prefabrication to client drawings and specifications.",
      },
    ],
    contact: {
      website: "https://elmemetall.eu/en/",
    },
  },
  {
    slug: "elme-messer-gaas",
    name: "Elme Messer Gaas",
    sector: "Steel & Materials",
    sectorId: "materials",
    countries: "EE",
    tagline: "Industrial and medical gases across the Baltic market",
    heroDesc:
      "Production and sale of industrial and medical gases. Joint venture with Germany's Messer Group since 1999.",
    aboutP1:
      "Elme Messer Gaas is a joint venture established in 1999 between BLRT Grupp and Messer Group, one of Europe's leading industrial gas producers. The company manufactures and distributes compressed and liquid gases — including oxygen, nitrogen, argon, hydrogen and CO₂ — to industrial, medical and food-processing customers across Estonia and the Baltic region.",
    services: [
      {
        icon: "beaker",
        title: "Industrial Gases",
        desc: "Oxygen, nitrogen, argon, hydrogen, acetylene and CO₂ for welding, cutting and processing.",
      },
      {
        icon: "shield",
        title: "Medical Gases",
        desc: "Medical-grade oxygen and other gases for healthcare facilities.",
      },
      {
        icon: "package",
        title: "Gas Supply Solutions",
        desc: "Cylinder, bulk liquid and on-site gas generation supply contracts.",
      },
    ],
    contact: {
      website: "https://www.elmemesser.ee/",
    },
  },
  {
    slug: "elme-trans",
    name: "Elme Trans",
    sector: "Steel & Materials",
    sectorId: "materials",
    countries: "EE",
    tagline: "International road transport and logistics",
    heroDesc:
      "International road transport, equipment rental and car rental across Estonia, Ukraine, and Central and Northern Europe.",
    aboutP1:
      "Elme Trans provides international road transport and logistics services for industrial and commercial clients throughout Estonia and wider Europe. The company operates a fleet of vehicles for cargo transport and offers equipment rental services supporting the construction and manufacturing sectors.",
    services: [
      {
        icon: "truck",
        title: "International Road Transport",
        desc: "Full and part load transport across Europe, Central Asia and the Baltic States.",
      },
      {
        icon: "package",
        title: "Equipment Rental",
        desc: "Construction and industrial equipment rental for short and long-term projects.",
      },
      {
        icon: "layers",
        title: "Logistics Solutions",
        desc: "Freight forwarding, warehousing and customs clearance services.",
      },
    ],
    contact: {
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
    tagline: "Port operations hub at the heart of Tallinn Harbour",
    heroDesc:
      "Towing, mooring, berth management and water traffic services at the Kopli peninsula, Tallinn.",
    aboutP1:
      "Vene-Balti Sadam operates the port facilities at Kopli, Tallinn — the geographic and operational heart of the BLRT Grupp maritime cluster. The company provides towing, mooring, water traffic management and port administration services to vessels calling at the BLRT yards and the wider Tallinn port area.",
    services: [
      {
        icon: "anchor",
        title: "Towage & Mooring",
        desc: "Tug assistance and mooring operations for vessels entering and departing the Kopli port.",
      },
      {
        icon: "ship",
        title: "Berth Management",
        desc: "Berth scheduling and vessel traffic coordination for the BLRT yard complex.",
      },
      {
        icon: "globe",
        title: "Port Administration",
        desc: "Port authority functions, customs interface and vessel documentation support.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      website: "https://portvenebalti.ee/en/",
    },
  },
  {
    slug: "mereabi",
    name: "Mereabi",
    sector: "Port & Marine Services",
    sectorId: "port",
    countries: "EE",
    tagline: "Marine safety equipment maintenance since 1975",
    heroDesc:
      "Maintenance and servicing of life-saving appliances and fire-fighting equipment for the international maritime fleet. Serving Finland, Sweden, Belgium and Norway.",
    aboutP1:
      "Mereabi has been providing marine safety equipment services since 1975, making it one of the most experienced LSA service stations in the Baltic region. The company maintains, inspects and certifies life-saving appliances — including liferafts, lifeboats, EPIRBs and fire-fighting equipment — for vessels of all flag states and classes.",
    aboutP2:
      "Fully acquired by BLRT Grupp in 2017, Mereabi operates approved service stations recognised by all major classification societies and serves clients from Tallinn as well as at ports across Finland, Sweden, Belgium and Norway.",
    services: [
      {
        icon: "shield",
        title: "Life-Saving Appliance Service",
        desc: "Annual inspection, servicing and re-certification of liferafts, lifeboats and rescue equipment.",
      },
      {
        icon: "flame",
        title: "Fire-Fighting Equipment",
        desc: "Maintenance and certification of fixed and portable fire-fighting systems.",
      },
      {
        icon: "award",
        title: "EPIRB & SART Service",
        desc: "Testing and battery replacement for emergency radio and AIS beacons.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      website: "https://mereabi.ee/en/",
    },
  },
];
