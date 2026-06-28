export type JobType = "full-time" | "part-time" | "contract";

export interface Job {
  id: string;
  title: { EN: string; RU: string; ET: string };
  companySlug: string;
  companyName: string;
  location: string;
  type: JobType;
  description: { EN: string; RU: string; ET: string };
  requirements: { EN: string[]; RU: string[]; ET: string[] };
  postedDate: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: {
      EN: "[Placeholder] Open Position — Ship Repair",
      RU: "[Заглушка] Открытая вакансия — Судоремонт",
      ET: "[Kohatäide] Vaba ametikoht — Laevaremont",
    },
    companySlug: "tallinn-shipyard",
    companyName: "Tallinn Shipyard",
    location: "Tallinn, Estonia",
    type: "full-time",
    description: {
      EN: "This is a placeholder. Real open positions from BLRT Repair Yards will be listed here. For current vacancies please contact info@blrtgrupp.ee.",
      RU: "Это заглушка. Здесь будут опубликованы реальные вакансии BLRT Repair Yards. По текущим вакансиям обращайтесь на info@blrtgrupp.ee.",
      ET: "See on kohatäide. Siia lisatakse BLRT Repair Yardsi tegelikud vabad ametikohad. Praeguste vabade ametikohtade kohta pöörduge aadressile info@blrtgrupp.ee.",
    },
    requirements: {
      EN: ["Requirements will be listed here when the position is published."],
      RU: ["Требования будут указаны здесь при публикации вакансии."],
      ET: ["Nõuded avaldatakse ametikoha avaldamisel."],
    },
    postedDate: "2026-01-01",
  },
  {
    id: "2",
    title: {
      EN: "[Placeholder] Open Position — Inspection & Testing",
      RU: "[Заглушка] Открытая вакансия — Инспекция и испытания",
      ET: "[Kohatäide] Vaba ametikoht — Inspektsioon ja testimine",
    },
    companySlug: "tehnomet-survey",
    companyName: "Tehnomet Survey",
    location: "Tallinn, Estonia (worldwide deployment)",
    type: "full-time",
    description: {
      EN: "This is a placeholder. Real open positions from Tehnomet Survey and Western Central Laboratory will be listed here. For current vacancies please contact info@blrtgrupp.ee.",
      RU: "Это заглушка. Здесь будут опубликованы реальные вакансии Tehnomet Survey и Western Central Laboratory. По текущим вакансиям обращайтесь на info@blrtgrupp.ee.",
      ET: "See on kohatäide. Siia lisatakse Tehnomet Survey ja Western Central Laboratory tegelikud vabad ametikohad. Praeguste vabade ametikohtade kohta pöörduge aadressile info@blrtgrupp.ee.",
    },
    requirements: {
      EN: ["Requirements will be listed here when the position is published."],
      RU: ["Требования будут указаны здесь при публикации вакансии."],
      ET: ["Nõuded avaldatakse ametikoha avaldamisel."],
    },
    postedDate: "2026-01-01",
  },
  {
    id: "3",
    title: {
      EN: "[Placeholder] Open Position — Engineering",
      RU: "[Заглушка] Открытая вакансия — Инжиниринг",
      ET: "[Kohatäide] Vaba ametikoht — Inseneeria",
    },
    companySlug: "blrt-era",
    companyName: "BLRT ERA",
    location: "Tallinn, Estonia",
    type: "full-time",
    description: {
      EN: "This is a placeholder. Real open positions from BLRT ERA, Bars Elekter and BLRT Masinaehitus will be listed here. For current vacancies please contact info@blrtgrupp.ee.",
      RU: "Это заглушка. Здесь будут опубликованы реальные вакансии BLRT ERA, Bars Elekter и BLRT Masinaehitus. По текущим вакансиям обращайтесь на info@blrtgrupp.ee.",
      ET: "See on kohatäide. Siia lisatakse BLRT ERA, Bars Elekteri ja BLRT Masinaehituse tegelikud vabad ametikohad. Praeguste vabade ametikohtade kohta pöörduge aadressile info@blrtgrupp.ee.",
    },
    requirements: {
      EN: ["Requirements will be listed here when the position is published."],
      RU: ["Требования будут указаны здесь при публикации вакансии."],
      ET: ["Nõuded avaldatakse ametikoha avaldamisel."],
    },
    postedDate: "2026-01-01",
  },
];
