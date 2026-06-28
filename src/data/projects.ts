export interface Project {
  id: string;
  slug: string;
  title: { EN: string; RU: string; ET: string };
  year: number;
  companySlug: string;
  sectorId: string;
  description: { EN: string; RU: string; ET: string };
  image: string;
  tags: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "placeholder-ship-repair",
    title: {
      EN: "[Placeholder] Ship Repair Project",
      RU: "[Заглушка] Проект судоремонта",
      ET: "[Kohatäide] Laevaremondi projekt",
    },
    year: 2025,
    companySlug: "tallinn-shipyard",
    sectorId: "repair",
    description: {
      EN: "This is a placeholder. Real ship repair case studies from BLRT Repair Yards will be published here. Content to be provided by the client.",
      RU: "Это заглушка. Здесь будут опубликованы реальные кейсы судоремонта BLRT Repair Yards. Контент предоставляется клиентом.",
      ET: "See on kohatäide. Siia avaldatakse BLRT Repair Yardsi tegelikud laevaremondi juhtumiuuringud. Sisu esitab klient.",
    },
    image: "https://placehold.co/800x450/18243a/94a3b8?text=Project+Image",
    tags: ["Ship Repair", "Dry Docking"],
    featured: true,
  },
  {
    id: "2",
    slug: "placeholder-shipbuilding",
    title: {
      EN: "[Placeholder] Shipbuilding Project",
      RU: "[Заглушка] Проект судостроения",
      ET: "[Kohatäide] Laevaehitusprojekt",
    },
    year: 2025,
    companySlug: "western-baltic-shipbuilding",
    sectorId: "building",
    description: {
      EN: "This is a placeholder. Real newbuilding case studies from Western Baltic Shipbuilding will be published here. Content to be provided by the client.",
      RU: "Это заглушка. Здесь будут опубликованы реальные кейсы строительства новых судов Western Baltic Shipbuilding. Контент предоставляется клиентом.",
      ET: "See on kohatäide. Siia avaldatakse Western Baltic Shipbuildingi tegelikud uusehituste juhtumiuuringud. Sisu esitab klient.",
    },
    image: "https://placehold.co/800x450/18243a/94a3b8?text=Project+Image",
    tags: ["Shipbuilding", "Newbuilding"],
    featured: true,
  },
  {
    id: "3",
    slug: "placeholder-inspection",
    title: {
      EN: "[Placeholder] Inspection & Testing Project",
      RU: "[Заглушка] Проект инспекции и испытаний",
      ET: "[Kohatäide] Inspektsiooni ja testimise projekt",
    },
    year: 2024,
    companySlug: "tehnomet-survey",
    sectorId: "inspection",
    description: {
      EN: "This is a placeholder. Real inspection project case studies from Tehnomet Survey and Western Central Laboratory will be published here. Content to be provided by the client.",
      RU: "Это заглушка. Здесь будут опубликованы реальные кейсы инспекционных проектов Tehnomet Survey и Western Central Laboratory. Контент предоставляется клиентом.",
      ET: "See on kohatäide. Siia avaldatakse Tehnomet Survey ja Western Central Laboratory tegelikud inspektsiooniprojektide juhtumiuuringud. Sisu esitab klient.",
    },
    image: "https://placehold.co/800x450/18243a/94a3b8?text=Project+Image",
    tags: ["Hull Inspection", "NDT", "UTM"],
    featured: true,
  },
  {
    id: "4",
    slug: "placeholder-engineering",
    title: {
      EN: "[Placeholder] Engineering Project",
      RU: "[Заглушка] Инженерный проект",
      ET: "[Kohatäide] Inseneriprojekt",
    },
    year: 2024,
    companySlug: "blrt-era",
    sectorId: "engineering",
    description: {
      EN: "This is a placeholder. Real engineering project case studies from BLRT ERA and Bars Elekter will be published here. Content to be provided by the client.",
      RU: "Это заглушка. Здесь будут опубликованы реальные кейсы инженерных проектов BLRT ERA и Bars Elekter. Контент предоставляется клиентом.",
      ET: "See on kohatäide. Siia avaldatakse BLRT ERA ja Bars Elekteri tegelikud inseneriprojektide juhtumiuuringud. Sisu esitab klient.",
    },
    image: "https://placehold.co/800x450/18243a/94a3b8?text=Project+Image",
    tags: ["Electrical Engineering", "Marine"],
    featured: false,
  },
  {
    id: "5",
    slug: "placeholder-materials",
    title: {
      EN: "[Placeholder] Steel & Materials Project",
      RU: "[Заглушка] Проект по стали и материалам",
      ET: "[Kohatäide] Terase ja materjalide projekt",
    },
    year: 2024,
    companySlug: "elme-metall",
    sectorId: "materials",
    description: {
      EN: "This is a placeholder. Real case studies from Elme Metall, Elme Messer Gaas and other materials companies will be published here. Content to be provided by the client.",
      RU: "Это заглушка. Здесь будут опубликованы реальные кейсы Elme Metall, Elme Messer Gaas и других материальных компаний. Контент предоставляется клиентом.",
      ET: "See on kohatäide. Siia avaldatakse Elme Metalli, Elme Messer Gaasi ja teiste materjalidega seotud ettevõtete tegelikud juhtumiuuringud. Sisu esitab klient.",
    },
    image: "https://placehold.co/800x450/18243a/94a3b8?text=Project+Image",
    tags: ["Steel Supply", "Materials"],
    featured: false,
  },
  {
    id: "6",
    slug: "placeholder-port",
    title: {
      EN: "[Placeholder] Port & Marine Services Project",
      RU: "[Заглушка] Проект портовых и морских услуг",
      ET: "[Kohatäide] Sadama- ja mereteenuste projekt",
    },
    year: 2023,
    companySlug: "vene-balti-sadam",
    sectorId: "port",
    description: {
      EN: "This is a placeholder. Real case studies from Vene-Balti Sadam, Mereabi and other port and marine services companies will be published here. Content to be provided by the client.",
      RU: "Это заглушка. Здесь будут опубликованы реальные кейсы Vene-Balti Sadam, Mereabi и других компаний портовых и морских услуг. Контент предоставляется клиентом.",
      ET: "See on kohatäide. Siia avaldatakse Vene-Balti Sadama, Mereabi ja teiste sadama- ja mereteenuste ettevõtete tegelikud juhtumiuuringud. Sisu esitab klient.",
    },
    image: "https://placehold.co/800x450/18243a/94a3b8?text=Project+Image",
    tags: ["Port Services", "Marine"],
    featured: false,
  },
];
