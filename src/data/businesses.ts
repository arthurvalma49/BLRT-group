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
      "Western Shiprepair's mission is to ensure the seaworthiness and performance of the global fleet, helping shipowners and operators maintain existing vessels, improve efficiency, meet regulatory requirements and move towards more sustainable maritime operations. The yard operates as part of a multi-yard network with 7 docks combined, including the largest floating dock in the Baltics at 235 m × 45 m.",
    services: [
      {
        icon: "anchor",
        title: "Ship Repair & Dry Docking",
        desc: "Dry docking capacity at Klaipėda including the largest floating dock in the Baltics at 235 m × 45 m.",
        fullDesc:
          "Western Shiprepair operates docking infrastructure at the Port of Klaipėda, Lithuania, as part of the BLRT Repair Yards network which collectively operates 7 docks across Estonia, Lithuania and Finland. The network's largest floating dock measures 235 m × 45 m.\n\nHull blasting and coating are carried out to classification society and coating manufacturer requirements. The yard handles a range of vessel types serving Baltic, North Sea and Atlantic trade routes, with dock scheduling coordinated across the multi-yard network to minimise waiting time for fleet operators.",
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
          "Turku Repair Yard operates docking infrastructure in Finland as part of the BLRT Repair Yards network, which collectively operates 7 docks across three countries. The network includes one of Northern Europe's largest dry docks at 265 m × 70 m × 7.1 m (Tallinn) and the largest floating dock in the Baltics at 235 m × 45 m.\n\nHull blasting and coating are carried out to classification society and coating manufacturer requirements. Dock scheduling is coordinated across the multi-yard network — Tallinn Shipyard in Estonia, Western Shiprepair in Lithuania and Turku Repair Yard in Finland — to minimise waiting time for fleet operators.",
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
  {
    slug: "blrt-fiskerstrand",
    name: "BLRT Fiskerstrand",
    sector: "Shipbuilding",
    sectorId: "building",
    countries: "NO",
    tagline: "Innovative vessel construction, guided by Norwegian quality tradition",
    heroDesc:
      "A 50/50 joint venture with Norway's Fiskerstrand Verft AS — a multipurpose shipyard with extensive expertise in newbuilding, conversion, repair and maintenance, founded in 1909 in Sula municipality.",
    aboutP1:
      "BLRT Fiskerstrand is a 50/50 joint venture between BLRT Grupp and Fiskerstrand Verft AS, combining BLRT's Baltic manufacturing scale with Fiskerstrand's century-long shipbuilding heritage in Sula municipality, Norway. The partnership brings together competitive knowledge in projecting, planning and building innovative vessels with the operational depth of one of Norway's most experienced multipurpose yards.",
    aboutP2:
      "The yard's core values — Quality, Reliability, Inclusion and Renewable practices — underpin everything from complex newbuilding projects to 24/7 emergency repair response. Fiskerstrand leverages Norway's prominent maritime cluster and strong supplier relationships to compete in international markets, and operates as an approved training company within Norway's maritime sector.",
    services: [
      {
        icon: "ship",
        title: "Newbuilding",
        desc: "New vessel construction drawing on over a century of Norwegian shipbuilding heritage.",
        fullDesc:
          "BLRT Fiskerstrand brings together Fiskerstrand Verft's century of shipbuilding expertise and BLRT Grupp's Baltic manufacturing capabilities to deliver innovative vessels across a broad range of types. The yard's competitive knowledge spans the full cycle from projecting and planning through to delivery, with a focus on advanced propulsion solutions, hull form efficiency and close collaboration with owners and classification societies.\n\nPast deliveries include landmark LNG-powered passenger ferries for the Norwegian market — among them MF Boknafjord (2011), at the time the world's largest LNG ferry — as well as a range of other vessel types that reflect the yard's multipurpose newbuilding capability. Each project draws on Norway's prominent maritime cluster and strong supplier network to meet the demands of modern, sustainable vessel operation.",
      },
      {
        icon: "wrench",
        title: "Conversion & Repair",
        desc: "All kinds of vessel conversion, rebuilding, repair and maintenance — often more financially efficient than newbuilding.",
        fullDesc:
          "Conversion is often more financially efficient for the owner than building a new vessel. Fiskerstrand handles all kinds of conversion and rebuilding projects, with project management, naval architects, design companies and suppliers working together to ensure successful retrofitting.\n\nRepair and maintenance services range from routine scheduled work to 24/7 emergency response. The yard's capabilities include underwater inspection and condition monitoring via Deep Drawing Micro ROV, hull maintenance using remote-controlled spray robots, propeller and rudder servicing with 40-ton hydraulic capacity, and advanced machinery inspection with fibre-optic equipment. Framework maintenance agreements ensure trouble-free operation for regular clients.",
      },
      {
        icon: "anchor",
        title: "Docking & 24/7 Service",
        desc: "Docking facilities and round-the-clock emergency maritime support.",
        fullDesc:
          "Fiskerstrand operates docking facilities and provides 24/7 emergency maritime service, reachable at any hour for urgent repair and support needs. The yard's specialist teams are trained in propulsion system work and trusted to find creative solutions backed by generational expertise.\n\nThe 24/7 service line (+47 95 247 247) ensures that vessel operators can reach experienced personnel at any time, minimising downtime and keeping fleets operational in Norway's demanding coastal and fjord environment.",
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
      email: "info@tehnomet.ee",
      website: "https://tehnometsurvey.ee/en/",
    },
  },
  {
    slug: "western-central-laboratory",
    name: "Western Central Laboratory",
    sector: "Inspection & Testing",
    sectorId: "inspection",
    countries: "LT",
    tagline: "Let's build future ships together",
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
      email: "info@wcl.lt",
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
        fullDesc:
          "BLRT ERA's installation teams carry out complete electrical fit-out of new vessels and extensive refits of existing ships in dry dock or alongside. Scope covers main switchboard installation, cable routing and termination, motor control centres, lighting systems and all secondary distribution to machinery and accommodation spaces.\n\nAll installation work is performed by qualified electricians working to approved drawings, and commissioned under the supervision of the attending classification surveyor. BLRT ERA maintains close relationships with major electrical equipment suppliers, enabling competitive procurement of switchboards, cables, motors and automation hardware for both large programmes and single-vessel repair jobs.",
      },
      {
        icon: "circuit",
        title: "Automation & Control",
        desc: "Alarm monitoring, power management and control system integration.",
        fullDesc:
          "The company's automation engineers design, install and commission alarm monitoring systems, power management systems (PMS) and integrated bridge systems (IBS) for new vessels and retrofit projects. Redundant power control and load monitoring systems are delivered in compliance with classification society requirements for unattended machinery spaces (UMS).\n\nFault diagnosis, software update and system upgrade services are available for existing automation installations across a wide range of third-party system brands. Emergency call-out for critical automation failures minimises vessel downtime and loss-of-class risk for fleet operators.",
      },
      {
        icon: "zap",
        title: "Offshore Electrical Works",
        desc: "Electrical engineering for offshore platforms and energy installations.",
        fullDesc:
          "BLRT ERA provides electrical engineering services to the offshore energy sector, including oil and gas platforms and offshore renewable energy installations. Electrical installation and commissioning on offshore structures presents unique challenges in terms of hazardous area classification, environmental protection and remote location — all areas where BLRT ERA's experienced engineers have accumulated extensive expertise.\n\nClose coordination with the construction and commissioning schedule ensures that electrical systems are tested and ready for handover on time, meeting the tight operational windows typical of offshore project delivery.",
      },
      {
        icon: "shield",
        title: "Industrial Projects",
        desc: "Electrical works for industrial facilities, including substations and motor control centres.",
        fullDesc:
          "Beyond marine and offshore, BLRT ERA delivers electrical engineering for onshore industrial facilities including manufacturing plants, logistics centres and power infrastructure. Projects include medium-voltage substation installation, motor control centre supply and commissioning, industrial lighting and power distribution.\n\nThe company's project management team handles design coordination, permitting interface, installation supervision and commissioning reporting for turnkey industrial electrical scopes, providing clients with a single accountable delivery partner from design through to energisation.",
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
        fullDesc:
          "Bars Elekter deploys skilled electrical crews to offshore rigs, platforms and FPSOs for installation, repair and commissioning of complex electrical systems in challenging marine environments. The company operates from dual bases in Tallinn and Norway, providing rapid mobilisation to both the Norwegian offshore sector and Baltic industrial clients.\n\nAll electricians working on offshore projects hold relevant offshore safety certifications (OPITO/BOSIET) and are experienced in working within hazardous area (ATEX/IECEx) classified environments. Project management and engineering coordination are provided from the company's offices.",
      },
      {
        icon: "circuit",
        title: "Marine Electrical Repair",
        desc: "Fault finding, repair and system upgrade on marine vessels.",
        fullDesc:
          "Fault finding and electrical system repair on marine vessels demands a combination of technical depth and rapid mobilisation. Bars Elekter's technicians are experienced in diagnosing complex electrical faults on a wide variety of vessel types — from offshore supply vessels to ferries and general cargo ships — and restoring vessels to operational status with minimal disruption.\n\nSystem upgrades — including navigation equipment replacement, VDR and AIS installation, and bridge equipment refit — are carried out at yards or alongside. The company coordinates closely with classification surveyors to ensure all work is appropriately inspected and certified for flag state compliance.",
      },
      {
        icon: "shield",
        title: "Project-Based Engineering",
        desc: "Turnkey electrical scopes for newbuilding and conversion projects.",
        fullDesc:
          "For newbuilding projects and major conversions, Bars Elekter can take on turnkey electrical scopes covering design review, material supply, installation and commissioning. The company's dual-country presence allows it to mobilise the appropriate resource mix — Norwegian project management with cost-effective Baltic installation crews — to optimise project delivery.\n\nProject references include electrical installation scopes at Norwegian shipyards and conversion yards, as well as at Baltic repair facilities. Quality management systems aligned with ISO 9001 underpin all project delivery.",
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
        fullDesc:
          "BLRT Masinaehitus specialises in precision-welded and machined steel structures produced to tight dimensional tolerances for demanding industrial applications. The Tallinn workshop is equipped with CNC cutting, bending and welding equipment, supported by dimensional inspection capability.\n\nFabrication scopes include complex multi-part assemblies, large weldments and precision-machined components. All welding is performed to approved procedures by certified welders, with NDT testing of critical joints to applicable standards. Manufacturing documentation and material traceability are maintained throughout the production process.",
      },
      {
        icon: "gauge",
        title: "Power Generation Components",
        desc: "Parts and assemblies for turbines, generators and power plant equipment.",
        fullDesc:
          "The company produces components and assemblies for gas and steam turbines, generators, switchgear enclosures and auxiliary power plant equipment. Clients in the power generation sector choose BLRT Masinaehitus for its ability to work from complex engineering drawings to close tolerances, combined with competitive Baltic manufacturing costs.\n\nExport contracts to Central European and Scandinavian power utility and OEM clients demonstrate the company's ability to meet international quality requirements. Certificate packages — including material certificates, dimensional inspection records and NDE reports — are compiled for each delivery.",
      },
      {
        icon: "wrench",
        title: "Transport Engineering",
        desc: "Components for rail and road transport equipment.",
        fullDesc:
          "Rail and road transport equipment manufacturers require steel components and assemblies manufactured to precise dimensional standards and tight quality controls. BLRT Masinaehitus delivers such components to Central European transport sector clients, drawing on its precision fabrication and machining capabilities.\n\nComponents include structural frames, housings, brackets and chassis assemblies, produced from engineering steel grades to client-approved drawings. Delivery schedules are managed to support clients' production programmes, and component marking and certificate packages accompany every delivery.",
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
        fullDesc:
          "Marketex Marine has delivered more than 350 carbon steel service barges to fish farming operators in Norway, Chile, Iceland and beyond, making it the leading European specialist in this growing sector. Barges are fully customised to each client's operational requirements — feed barges carry automated feeding systems, accommodation barges provide crew quarters and support facilities, and service craft are configured for daily farm operations.\n\nAll barges are designed and built in-house at the Tallinn facility, with the design team working closely with the client from initial concept through classification approval and final delivery. DNV, Bureau Veritas and other classification society approvals are standard.",
      },
      {
        icon: "layers",
        title: "Steel Fabrication & Outfitting",
        desc: "In-house steel fabrication, equipment installation and system integration.",
        fullDesc:
          "The Tallinn workshop handles all structural steel fabrication in-house, from steel cutting and plate bending to welding and blasting. Structural steelwork is followed by full outfitting — mechanical systems, electrical installation, automation and equipment integration — all performed by the company's own teams.\n\nThe 850-tonne crane at the Tallinn facility allows for the handling and assembly of large barge sections, with final assembly and launch carried out in the sheltered waters of Tallinn Bay. Post-launch outfitting and commissioning are completed prior to classification survey and delivery to the client.",
      },
      {
        icon: "anchor",
        title: "Delivery & Commissioning",
        desc: "Sea transport, on-site commissioning and aftersales support.",
        fullDesc:
          "Completed barges are delivered worldwide by sea transport, with route planning and logistics coordinated by the Marketex Marine team. On-site commissioning at the fish farm location is performed by experienced commissioning engineers who travel with the vessel to ensure all systems — feeding automation, mooring, utilities and accommodation — are fully operational before handover.\n\nAftersales support continues beyond delivery, with spare parts supply, technical advice and return-to-workshop repair services available to clients throughout the vessel's operational life. Long-term relationships with Norwegian and global aquaculture operators are a key feature of the company's commercial model.",
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
        fullDesc:
          "Elme Metall operates a network of steel warehousing and distribution centres in Estonia, Latvia, Lithuania, Finland and Poland, providing customers across the Baltic region with rapid access to a broad range of structural steel products. The product portfolio covers structural sections (HEA, HEB, IPE, UPN), flat products (plates, sheets, strips), hollow sections, round and square bars, reinforcing bar and merchant bar.\n\nSteel is sourced from leading European mills — ArcelorMittal, SSAB, Ruukki and others — with mill certificates provided for all structural grades. Deliveries are made by road from the nearest stocking location, with lead times typically of one to five working days across the Baltic region.",
      },
      {
        icon: "shield",
        title: "Hot-Dip Galvanization",
        desc: "Corrosion protection galvanizing for structural steel components.",
        fullDesc:
          "Elme Metall operates galvanizing plants providing hot-dip galvanization of structural steel components to EN ISO 1461 standard. Galvanizing provides long-term corrosion protection for steel structures exposed to outdoor environments, extending service life and reducing maintenance costs.\n\nThe galvanizing service handles components for the construction, infrastructure, agricultural, industrial and marine sectors, with basket sizes accommodating standard structural sections, fabricated assemblies and custom components. Pre-treatment — including degreasing, pickling and fluxing — is performed in-house. Customers can supply fabricated assemblies for dipping or source materials and processing from Elme Metall as a single package.",
      },
      {
        icon: "ruler",
        title: "Steel Processing",
        desc: "Cutting, bending, drilling and prefabrication to client drawings and specifications.",
        fullDesc:
          "In addition to standard stock, Elme Metall offers value-added processing services allowing customers to order finished-to-size or partially fabricated components rather than raw stock. Services include plasma and laser cutting, bending, drilling, shot blasting and priming.\n\nProcessed components are delivered to customer drawings and specifications, reducing or eliminating fabrication work at the customer's own facility. This service is particularly valued by shipyards, structural fabricators and engineering companies requiring large volumes of cut and drilled plate or section — a single order combining material supply and processing simplifies purchasing and reduces total cost.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2554",
      email: "info@elmemetall.eu",
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
        fullDesc:
          "Elme Messer Gaas produces and distributes the full range of industrial gases needed for welding, cutting, heat treatment and industrial processing applications. Oxygen, nitrogen, argon, hydrogen, acetylene, CO₂ and gas mixtures are available in compressed cylinder, liquid bulk and micro-bulk formats, supplied to customers across Estonia and the Baltic region.\n\nThe joint venture with Messer Group brings access to Messer's European production and logistics network, ensuring security of supply and the technical expertise of one of Europe's largest industrial gas producers. Gas mixture formulations are tailored to customers' specific welding and process requirements.",
      },
      {
        icon: "shield",
        title: "Medical Gases",
        desc: "Medical-grade oxygen and other gases for healthcare facilities.",
        fullDesc:
          "Medical-grade gases — including oxygen, nitrous oxide and medical air — are produced and distributed by Elme Messer Gaas to hospitals, clinics and healthcare facilities throughout Estonia. All medical gases comply with the applicable pharmacopoeia standards and are distributed under the company's medical gas supplier licences.\n\nMedical oxygen cylinders and bulk liquid deliveries are managed under strict documentation and traceability requirements, with safety data sheets, certificates of analysis and delivery records provided for every supply. The company works closely with hospital pharmacies and biomedical engineering teams to ensure uninterrupted supply of critical medical gases.",
      },
      {
        icon: "package",
        title: "Gas Supply Solutions",
        desc: "Cylinder, bulk liquid and on-site gas generation supply contracts.",
        fullDesc:
          "Beyond cylinder deliveries, Elme Messer Gaas designs and implements total gas supply solutions for high-volume industrial customers. Bulk liquid storage tanks — for liquid oxygen, nitrogen and argon — are installed and maintained at customer sites, with gas delivered by tanker and vaporised on demand. On-site nitrogen and oxygen generators are supplied for customers requiring captive gas production.\n\nSupply contracts are managed to ensure that customers never run short of critical process gases, with telemetry monitoring of bulk tank levels enabling automatic reordering. Long-term supply contracts provide customers with price certainty and supply security.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2052",
      email: "info@elmemesser.ee",
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
        fullDesc:
          "Elme Trans operates a fleet of road freight vehicles providing full-load and part-load transport services across Europe and beyond. The company's network covers the Baltic States, Scandinavia, Central Europe and, through partner carriers, extends to Ukraine and Central Asia.\n\nAll transport operations are managed by experienced dispatchers using modern fleet management tools, providing clients with real-time shipment visibility and reliable delivery schedules. Cargo types handled include steel products, industrial equipment, project cargo and general groupage freight. ADR-certified drivers and vehicles are available for hazardous goods transport where required.",
      },
      {
        icon: "package",
        title: "Equipment Rental",
        desc: "Construction and industrial equipment rental for short and long-term projects.",
        fullDesc:
          "Elme Trans provides construction and industrial equipment rental for short and long-term projects across Estonia and neighbouring markets. The rental fleet includes forklifts, telescopic handlers, loading equipment and specialised lifting devices suited to industrial and construction site operations.\n\nRental equipment is maintained to a high standard and delivered to site with operator training and safety documentation. Long-term rental contracts are available for project clients requiring dedicated equipment for the duration of a construction or industrial programme, with flexible return arrangements as project scopes change.",
      },
      {
        icon: "layers",
        title: "Logistics Solutions",
        desc: "Freight forwarding, warehousing and customs clearance services.",
        fullDesc:
          "Beyond direct transport, Elme Trans provides freight forwarding, warehousing and customs clearance services to industrial clients importing and exporting across European and Baltic borders. The company's logistics coordinators manage the full supply chain — booking, documentation, customs procedures, warehousing and final delivery — on behalf of clients, simplifying international procurement and distribution.\n\nWarehouse capacity supports short-term storage between production and delivery, with inventory management and pick-and-pack services available. The customs team has extensive experience with Baltic and EU border procedures, ensuring smooth clearance for both standard commercial goods and complex project shipments.",
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
        fullDesc:
          "Vene-Balti Sadam provides tug assistance for vessels entering and departing the Kopli port and BLRT yard complex in Tallinn. Tug operations are coordinated around the dry docking and repair schedule at Tallinn Shipyard, with around-the-clock availability during active docking operations.\n\nThe company's experienced tug masters work in close cooperation with Tallinn Shipyard's harbour master and the vessel's crew to ensure safe, efficient dry dock entry and undocking. Mooring teams are available for both BLRT yard vessels and commercial shipping calling at the Kopli berths, with mooring equipment maintained to international safety standards.",
      },
      {
        icon: "ship",
        title: "Berth Management",
        desc: "Berth scheduling and vessel traffic coordination for the BLRT yard complex.",
        fullDesc:
          "Berth scheduling and vessel traffic coordination at the Kopli complex is managed by Vene-Balti Sadam's port administration team. The team coordinates vessel arrival and departure times, berth allocation, and crane positioning in support of Tallinn Shipyard's repair programme.\n\nA busy repair yard with multiple docks and alongside berths requires careful traffic management to avoid conflicts and maximise throughput. Vene-Balti Sadam's deep familiarity with the Kopli port layout and BLRT Grupp's operational requirements enables efficient scheduling that minimises delays for all vessels in the yard.",
      },
      {
        icon: "globe",
        title: "Port Administration",
        desc: "Port authority functions, customs interface and vessel documentation support.",
        fullDesc:
          "Beyond operational port services, Vene-Balti Sadam handles the administrative and regulatory interface for vessels operating at Kopli. This includes vessel documentation processing, customs interface for foreign-flagged vessels, port dues administration and liaison with the port authority.\n\nThe company maintains close working relationships with the port authority of Tallinn, Estonian maritime administration and customs, ensuring that all necessary consents and clearances are obtained promptly for vessels entering the yard. International vessel operators benefit from the company's experience managing the Estonian port entry process.",
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
        fullDesc:
          "Mereabi is an approved service station for the inspection, servicing and re-certification of life-saving appliances including inflatable liferafts (all major brands), davit-launched lifeboats, rescue boats and man-overboard (MOB) equipment. Annual servicing is performed to SOLAS requirements and the applicable manufacturers' service manuals, with test reports issued for classification society acceptance.\n\nThe company operates approved service facilities in Tallinn and works at ports across Finland, Sweden, Belgium and Norway, allowing fleet operators to schedule LSA service at whichever location is most convenient for their vessel's trading pattern. All technicians are manufacturer-certified for the brands they service.",
      },
      {
        icon: "flame",
        title: "Fire-Fighting Equipment",
        desc: "Maintenance and certification of fixed and portable fire-fighting systems.",
        fullDesc:
          "Mereabi maintains and certifies both fixed and portable fire-fighting systems installed on board marine vessels. Fixed systems include CO₂ total flooding systems, HFC and halon alternative systems, and hi-fog water mist systems — all serviced to SOLAS and classification society requirements.\n\nPortable equipment — fire extinguishers, breathing apparatus, fireman's outfits and thermal protective aids — is inspected, recharged or replaced on an annual cycle. Hydrostatic pressure testing of portable extinguisher cylinders is performed at the company's own test facility. Records are maintained and reports issued to the vessel's safety management system.",
      },
      {
        icon: "award",
        title: "EPIRB & SART Service",
        desc: "Testing and battery replacement for emergency radio and AIS beacons.",
        fullDesc:
          "Emergency position-indicating radio beacons (EPIRBs) and search and rescue transponders (SARTs) require periodic testing and battery replacement to remain effective in a genuine emergency. Mereabi performs EPIRB registration checks, self-test verification, battery replacement and hydrostatic pressure testing in accordance with the requirements of the relevant flag state administration and classification society.\n\nAIS SARTs and radar SARTs are tested and calibrated by Mereabi technicians, with test reports issued for the vessel's records. The company stays current with evolving GMDSS regulations and can advise vessel operators on the transition to new GMDSS equipment requirements under the IMO's GMDSS modernisation programme.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 660 2320",
      email: "info@mereabi.ee",
      website: "https://mereabi.ee/en/",
    },
  },
];
