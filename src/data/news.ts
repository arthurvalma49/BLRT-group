export type NewsCategory = "press" | "company" | "project";

export interface News {
  id: string;
  slug: string;
  title: { EN: string; RU: string; ET: string };
  date: string;
  category: NewsCategory;
  excerpt: { EN: string; RU: string; ET: string };
  image: string;
  companySlug?: string;
}

export const news: News[] = [
  {
    id: "1",
    slug: "blrt-grupp-news-placeholder-1",
    title: {
      EN: "[Placeholder] BLRT Grupp Press Release",
      RU: "[Заглушка] Пресс-релиз BLRT Grupp",
      ET: "[Kohatäide] BLRT Grupp pressiteade",
    },
    date: "2026-01-01",
    category: "press",
    excerpt: {
      EN: "This is a placeholder. Real news and press releases from BLRT Grupp will be published here. Content to be provided by the client.",
      RU: "Это заглушка. Здесь будут публиковаться реальные новости и пресс-релизы BLRT Grupp. Контент предоставляется клиентом.",
      ET: "See on kohatäide. Siia avaldatakse BLRT Grupi tegelikud uudised ja pressiteated. Sisu esitab klient.",
    },
    image: "https://placehold.co/800x450/18243a/94a3b8?text=News+Image",
  },
  {
    id: "2",
    slug: "blrt-grupp-news-placeholder-2",
    title: {
      EN: "[Placeholder] Company News",
      RU: "[Заглушка] Новости компании",
      ET: "[Kohatäide] Ettevõtte uudis",
    },
    date: "2026-01-01",
    category: "company",
    excerpt: {
      EN: "This is a placeholder. Real company news from BLRT Grupp subsidiaries will be published here. Content to be provided by the client.",
      RU: "Это заглушка. Здесь будут публиковаться реальные новости дочерних компаний BLRT Grupp. Контент предоставляется клиентом.",
      ET: "See on kohatäide. Siia avaldatakse BLRT Grupi tütarettevõtete tegelikud uudised. Sisu esitab klient.",
    },
    image: "https://placehold.co/800x450/18243a/94a3b8?text=News+Image",
    companySlug: "tallinn-shipyard",
  },
  {
    id: "3",
    slug: "blrt-grupp-news-placeholder-3",
    title: {
      EN: "[Placeholder] Project Update",
      RU: "[Заглушка] Обновление проекта",
      ET: "[Kohatäide] Projekti uuendus",
    },
    date: "2026-01-01",
    category: "project",
    excerpt: {
      EN: "This is a placeholder. Real project updates from BLRT Grupp yards and companies will be published here. Content to be provided by the client.",
      RU: "Это заглушка. Здесь будут публиковаться реальные обновления проектов верфей и компаний BLRT Grupp. Контент предоставляется клиентом.",
      ET: "See on kohatäide. Siia avaldatakse BLRT Grupi dokide ja ettevõtete tegelikud projektiuuendused. Sisu esitab klient.",
    },
    image: "https://placehold.co/800x450/18243a/94a3b8?text=News+Image",
    companySlug: "western-shiprepair",
  },
];
