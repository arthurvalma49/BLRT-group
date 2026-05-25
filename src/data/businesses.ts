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
        fullDesc:
          "Three dry docks at the Kopli yard accommodate vessels up to 265 × 70 metres, providing the capacity to handle large tankers, bulk carriers, RoRo vessels and offshore units. Hull cleaning, water-jetting and abrasive blasting are carried out to Sa 2.5 standard before application of approved marine coatings.\n\nStructural steel renewals are performed by certified welders in accordance with classification society requirements. The yard operates 24/7 during active docking periods, with an in-house steel workshop capable of fabricating replacement panels and frames to speed turnaround. Dock entries are coordinated across the three BLRT Repair Yards — Tallinn, Klaipeda and Turku — to minimise waiting time for fleet operators.",
      },
      {
        icon: "wrench",
        title: "Mechanical & Machinery Repair",
        desc: "Main engine overhaul, propeller and shaft work, thruster repairs, and auxiliary machinery servicing.",
        fullDesc:
          "Tallinn Shipyard's machine shop and engineering team handle the full range of main engine overhauls, from cylinder head and piston ring renewal to liner inspections and fuel injection system servicing. Diesel and dual-fuel engines are covered, with experience spanning MAN, Wärtsilä, Caterpillar and other major OEM types.\n\nPropulsion work includes shaft alignment, coupling removal, propeller blade repairs and bearing replacement. Bow thrusters, CPP units and stabiliser systems are serviced afloat or in the dry dock. Auxiliary machinery including generators, compressors, pumps, separators and heat exchangers are overhauled by dedicated teams, with original or classification-approved replacement parts supplied through the yard's procurement network.",
      },
      {
        icon: "layers",
        title: "Vessel Conversion & Modification",
        desc: "Structural modifications, accommodation upgrades, ballast water treatment system installation and lengthening.",
        fullDesc:
          "The yard has an established track record in vessel conversion and modification projects, from ballast water treatment system (BWTS) retrofits required under the IMO convention to full-scale vessel lengthening and accommodation refurbishment.\n\nStructural modifications are designed and approved by the yard's engineering department in cooperation with classification society plan approval. Common conversion scopes include scrubber installation, engine replacement, cargo hold modifications and life-saving appliance upgrades. The proximity of sister companies BLRT ERA (electrical) and Tehnomet Survey (NDT) allows the yard to manage complex, multi-discipline refits under a single commercial interface.",
      },
      {
        icon: "zap",
        title: "Electrical & Automation",
        desc: "Electrical overhaul, navigation equipment, automation and control system refits.",
        fullDesc:
          "Electrical overhaul and refit work is performed in close collaboration with BLRT ERA, the group's dedicated marine electrical engineering company. Scope covers complete rewiring of power distribution systems, switchboard overhaul and replacement, navigation equipment upgrade (AIS, ECDIS, radar, VDR), and automation system refits.\n\nAutomation and alarm monitoring upgrades are carried out for vessels entering new trade areas with updated flag state requirements. Emergency generator overhauls, battery bank replacements and shore power connection installations are also regularly performed during docking intervals.",
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
        fullDesc:
          "Western Shiprepair operates dry dock and floating dock capacity at the Port of Klaipeda, offering hull inspection, abrasive blasting and marine coating services for vessels across the Baltic, North Sea and Atlantic trade routes.\n\nThe yard handles a wide range of vessel types including ferries, tankers, general cargo ships and offshore support vessels. Hull cleaning is carried out to the coating system manufacturer's requirements, followed by primer and antifouling application. All blasting and painting work is supervised by qualified coating inspectors and reported to the attending classification surveyor.",
      },
      {
        icon: "wrench",
        title: "Machinery Repair",
        desc: "Main engine overhaul, gearbox, shafting, propeller and bow thruster repairs.",
        fullDesc:
          "Klaipeda's skilled engineering workforce handles main engine overhauls for all major diesel and dual-fuel engine types, drawing on decades of experience in Baltic ship repair. Piston removal, liner measurement, crankshaft inspection and injection system servicing are standard scope items.\n\nShafting and propulsion work covers propeller removal, shaft withdrawal, sterntube inspection and bearing replacement. Gearbox overhauls and bow thruster repairs are completed in the dry dock or alongside, depending on vessel schedule. Auxiliary machinery servicing including generators, pumps, compressors and separators completes the mechanical scope.",
      },
      {
        icon: "layers",
        title: "Steel & Outfitting",
        desc: "Structural steel renewal, pipe systems, insulation and accommodation outfitting.",
        fullDesc:
          "Structural steel renewals are carried out by certified welders working to classification society-approved procedures. The yard's steel workshop fabricates replacement plates, frames and structural sections in-house, minimising lead times and logistics costs.\n\nOutfitting works cover pipe system repair and renewal, HVAC, insulation, joinery and accommodation refurbishment. The yard's outfitting teams have extensive experience with passenger ferry interiors and can carry out refurbishments to tight scheduling requirements, with work proceeding simultaneously across multiple vessels where berth space allows.",
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
        fullDesc:
          "Turku Repair Yard operates one of the largest floating dry docks in Scandinavia at the Port of Naantali, near Turku. The dock accommodates large ferries and RoRo vessels typical of the Nordic route network, as well as tankers and offshore support units serving the Gulf of Bothnia and North Sea.\n\nHull blasting is performed to Sa 2.5 standard with modern equipment, followed by application of approved marine antifouling and protection systems. The yard coordinates closely with BLRT Repair Yards colleagues in Tallinn and Klaipeda to offer clients flexible scheduling across three Baltic Sea locations.",
      },
      {
        icon: "wrench",
        title: "Machinery & Hull Work",
        desc: "Propulsion, thruster, steering gear overhaul and hull steel renewals.",
        fullDesc:
          "The Naantali yard's engineering team has deep experience with vessels on Nordic ferry routes, including high-cycle propulsion systems on short sea RoRo and passenger ferries. Propeller and shafting overhauls, thruster unit replacement and steering gear servicing are regularly performed.\n\nHull steel work includes structural plate renewal, frame repairs and bilge keel replacements. Weld repairs to hull structures are carried out by certified welders and tested by NDT technicians to classification society requirements. Close coordination with sister company Tehnomet Survey enables rapid NDT deployment at Naantali during vessel inspections.",
      },
      {
        icon: "shield",
        title: "Coating & Blasting",
        desc: "Full abrasive blasting and marine coating application to class requirements.",
        fullDesc:
          "All surface preparation and coating work at Turku Repair Yard is carried out to the requirements of the coating system manufacturer and the attending classification surveyor. Abrasive blasting achieves Sa 2.5 cleanliness on hull steel, with surface profile and salt contamination measurements recorded and reported before primer application.\n\nAntifouling paint systems are selected in consultation with the shipowner based on the vessel's trading routes and dry dock intervals. The yard holds approvals for leading marine coating systems and can apply self-polishing copolymer, hybrid and tin-free antifouling systems. Boot-topping and topside coatings are also applied as part of the full hull coating package.",
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
        fullDesc:
          "Western Baltic Shipbuilding is one of Europe's most capable manufacturers of large steel blocks and superstructure sections for cruise ships and passenger ferries. The company delivers grand blocks to the major European cruise yards — including Meyer Werft, Fincantieri and others — to exacting dimensional tolerances, pre-outfitted and ready for lifting into the vessel.\n\nWith 50,000 m² of covered workshop space and substantial overhead crane capacity, the Klaipeda facility can produce multiple large blocks simultaneously, running parallel production programmes to meet tight construction schedules. All blocks are fabricated and dimensionally checked against the shipyard's production drawings and classification-approved design documentation before despatch.",
      },
      {
        icon: "layers",
        title: "Multifunctional Vessel Construction",
        desc: "Complete newbuilding of offshore supply, research and special purpose vessels.",
        fullDesc:
          "Beyond large-block subcontracting, Western Baltic Shipbuilding delivers complete newbuilding contracts for offshore supply vessels, research ships and special purpose craft. These projects are managed from initial steel cutting through commissioning and class delivery by the Klaipeda team, working in close coordination with classification surveyors and the client's own technical team.\n\nThe yard's engineering department provides design review, production engineering and construction management for full newbuilding contracts. NDT inspection, hydrostatic testing, outfitting and final commissioning are all performed in-house, with sea trials conducted in the adjacent Baltic Sea waters.",
      },
      {
        icon: "file",
        title: "Engineering & Design",
        desc: "In-house design and engineering support for production planning and classification approval.",
        fullDesc:
          "Western Baltic Shipbuilding's in-house engineering team provides design and production engineering services for both subcontract block work and full newbuilding projects. Classification society documentation — including structural drawings, material certificates and inspection records — is prepared and submitted by the engineering department, simplifying the client's approval process.\n\nProduction engineering covers block assembly sequencing, welding procedure specifications, cutting lists and fit-out schedules, all aimed at maximising the efficiency of the Klaipeda facility's production throughput while maintaining the dimensional accuracy demanded by the world's leading cruise ship yards.",
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
        fullDesc:
          "BLRT Fiskerstrand has established a leading position in the design and construction of LNG-powered passenger ferries for the Norwegian market, drawing on Fiskerstrand Verft's century of shipbuilding heritage and BLRT Grupp's Baltic manufacturing capabilities.\n\nThe yard's landmark delivery, MF Boknafjord in 2011, was at the time the world's largest LNG-powered ferry. Subsequent deliveries have continued to raise the bar in LNG propulsion technology, hull form efficiency and passenger environment. All vessels are designed and built in close collaboration with Norwegian public ferry operators and their classification societies.",
      },
      {
        icon: "zap",
        title: "Battery-Electric Vessels",
        desc: "Zero-emission ferry newbuilding and hybrid propulsion integration.",
        fullDesc:
          "Building on its pioneering work in LNG propulsion, BLRT Fiskerstrand has expanded into zero-emission vessel technology, delivering battery-electric and hybrid ferries for Norwegian fjord and coastal routes. As Norwegian public tender requirements increasingly favour zero-emission vessels, the yard has invested in the design expertise and supplier relationships needed to deliver these highly specified vessels on time and within budget.\n\nBattery systems, charging infrastructure and energy management systems are integrated during construction and commissioned with the operator's technical team before delivery. The yard supports clients through the full development process from concept design to post-delivery warranty.",
      },
      {
        icon: "layers",
        title: "Advanced Marine Engineering",
        desc: "Complex systems integration, outfitting and sea trials for high-specification vessels.",
        fullDesc:
          "The construction of environmentally advanced passenger ferries demands exceptional systems integration capability. BLRT Fiskerstrand manages the full scope of complex outfitting — electrical, mechanical, HVAC, interior and safety systems — integrating subcontractors and suppliers from across Norway and the wider European market.\n\nSea trials are conducted in the demanding Norwegian fjord environment, ensuring that all systems — propulsion, manoeuvring, safety and passenger amenities — perform to specification under real operating conditions before the vessel is formally delivered to the operator.",
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
        fullDesc:
          "Inspection of hull structures and welds without interrupting vessel operations. Our certified technicians detect surface and sub-surface defects to confirm structural integrity, with reports accepted by all major classification societies.\n\nUltrasonic Testing (UT) uses high-frequency sound waves to detect internal flaws in welds and hull structures. Magnetic Particle Testing (MT) reveals surface and near-surface discontinuities in ferromagnetic materials. Penetrant Testing (PT) uses capillary action of dye penetrants to identify surface-breaking defects. Visual Testing (VT) provides systematic examination of welds, structures and coatings. Radiographic Testing (RT) uses X-ray and gamma-ray imaging for full volumetric weld inspection. Eddy Current (ET) uses electromagnetic induction to detect surface and sub-surface flaws in conductive materials.\n\nAll technicians are certified to Level II and III under internationally recognised schemes. Reports are issued in accordance with classification society requirements and are accepted by LR, DNV, BV, ABS, RINA, KR, IR, NKK and WTA.",
      },
      {
        icon: "ruler",
        title: "Ultrasonic Thickness Measurement",
        desc: "Residual thickness mapping of hull structures per classification society rules.",
        fullDesc:
          "Pursuant to the international rules of classification societies, all vessels are subject to periodical survey in connection with the technical condition of the hull. In the course of survey, the hull is inspected for deformations, cracks or structural breaches, and the obligatory measurement of residual thickness of the hull structures is carried out. The results of survey and measurements are compared with a relevant normative value.\n\nBased on the obtained results, the customer receives a full picture of work required or recommended to be carried out on board. Residual thickness of hull structures is measured by the most widely used UTM method.\n\nOur technicians are top-ranking experts with comprehensive training. Most hold higher education in the field of shipbuilding and ship repair. Inspection and survey can be carried out to the customer's preference — either a pre-docking inspection or dock-side on short notice. Reporting documentation is always submitted to the customer immediately upon completion.",
      },
      {
        icon: "file",
        title: "Repair Sketches & Steel Calculation",
        desc: "Weight calculations and repair sketches for docking budgets and steel renewal scopes.",
        fullDesc:
          "Appropriate training of technicians enables us, besides providing reports on the actual condition of the vessel, to also supply the client with repair sketches and suggestions, and to calculate the weight of metal to be replaced by reference to specific features of ship repair technologies.\n\nPre-conducted survey of the vessel and proper calculation of weights of structures to be replaced allows our customers to be better prepared for docking work, take into account all aspects when budgeting, and avoid costly surprises. Every sketch and calculation is prepared in accordance with the applicable classification society and IACS rules.",
      },
      {
        icon: "droplets",
        title: "Pitting Corrosion Survey",
        desc: "Detection and reporting of pitting in ballast and cargo tanks with IACS-compliant tolerances.",
        fullDesc:
          "Pitting corrosion or pitting wear of metal can develop on any ship structure, and is most common in ballast and cargo tanks. Pitting corrosion left undetected and without timely intervention can lead to costly repairs, lengthy vessel downtime and environmental hazards.\n\nOur technicians have considerable expertise in pitting corrosion research. Upon completion of inspection, they provide a detailed report covering the location of problem areas, their depth and extent, together with appropriate repair suggestions based on the requirements and tolerances of classification societies and IACS rules.",
      },
      {
        icon: "anchor",
        title: "Anchor Chain Calibration",
        desc: "Calibration of anchor chains from the second special survey onwards per class requirements.",
        fullDesc:
          "Starting from the second special survey of the vessel (10 years from the date of construction), the classification society representative may also request calibration of the anchor chain to ensure total wear is within the normal range.\n\nOur UTM teams can perform this work both during the preliminary inspection or during dockage, and prepare appropriate reports along with replacement suggestions for all parties concerned. All calibrations are carried out in strict accordance with the applicable classification society rules.",
      },
    ],
    contact: {
      address: "Kopli 103, 11712 Tallinn, Estonia",
      phone: "+372 610 2997",
      email: "info@blrt.ee",
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
        fullDesc:
          "Western Central Laboratory provides NDT services to the shipbuilding and ship repair facilities of the BLRT Western Shipyard group in Klaipeda, as well as external industrial clients throughout Lithuania. Weld inspection, casting examination and component NDT are carried out by certified technicians using UT, MT, PT and VT methods.\n\nAll NDT is performed in accordance with applicable EN and ISO standards and reported in the format required by the client's classification society or industrial standard. The laboratory holds Lithuanian accreditations for its testing methods and works under quality management systems aligned with ISO 9001.",
      },
      {
        icon: "beaker",
        title: "Destructive Testing",
        desc: "Tensile, impact, bend and hardness testing to EN and ASTM standards.",
        fullDesc:
          "The laboratory's materials testing capability covers the full range of mechanical property tests required for shipbuilding material approval, weld procedure qualification and production test records. Tensile testing, Charpy impact testing, bend testing and hardness measurement are performed on a modern testing machine park calibrated to ILAC-MRA standards.\n\nTest reports are issued with full chain-of-custody documentation, suitable for submission to classification societies and industrial clients requiring EN 10204 material certification. The laboratory has experience with ship structural steels, stainless steels, aluminium alloys and wear-resistant steel grades.",
      },
      {
        icon: "file",
        title: "Material Certification",
        desc: "Test reports and material certificates accepted by classification societies.",
        fullDesc:
          "Western Central Laboratory issues material test reports and certificates for structural steels, welded assemblies and fabricated components in formats accepted by all major classification societies operating in the Baltic market. Certificates are prepared by qualified laboratory personnel and backed by accredited testing records.\n\nFor shipbuilding and offshore applications, the laboratory coordinates with production teams to provide timely testing during manufacturing, minimising delays to the construction programme. Rush testing and expedited reporting are available for time-critical applications.",
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
      website: "https://mereabi.ee/en/",
    },
  },
];
