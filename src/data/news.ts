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
    slug: "tallinn-shipyard-completes-tanker-refit",
    title: {
      EN: "Tallinn Shipyard Completes Major Tanker Refit in Record Time",
      RU: "Таллинская верфь завершила крупный ремонт танкера в рекордные сроки",
      ET: "Tallinna Laevatehase sooritas suurema tankerremondi rekordiajaga",
    },
    date: "2026-05-28",
    category: "project",
    excerpt: {
      EN: "The 165-metre dry dock at Kopli completed a full BWTS installation and structural steel renewal on a Aframax tanker within 18 days — three days ahead of the agreed schedule.",
      RU: "Сухой док длиной 165 метров в Копли завершил полную установку BWTS и обновление конструкционной стали на танкере класса Aframax за 18 дней — на три дня раньше согласованного срока.",
      ET: "Kopli 165-meetrine kuivdokk lõpetas Aframax-tankeril täieliku BWTS-paigalduse ja konstruktsiooniterase uuendamise 18 päevaga — kolm päeva enne kokkulepitud tähtaega.",
    },
    // ship hull in dry dock
    image: "https://images.unsplash.com/photo-1575528941322-c74397246f19?w=800&q=75&auto=format&fit=crop",
    companySlug: "tallinn-shipyard",
  },
  {
    id: "2",
    slug: "elme-metall-expands-steel-service-centres",
    title: {
      EN: "Elme Metall Opens New Steel Service Centre in Riga",
      RU: "Elme Metall открывает новый центр металлосервиса в Риге",
      ET: "Elme Metall avab Riias uue teraseteeninduskeskuse",
    },
    date: "2026-04-15",
    category: "company",
    excerpt: {
      EN: "BLRT Grupp's steel distribution arm expands its Baltic footprint with a new 8,000 m² service centre offering laser cutting, plasma cutting and bending for the construction and shipbuilding sectors.",
      RU: "Подразделение BLRT Grupp по дистрибуции стали расширяет своё присутствие в Балтийском регионе с новым сервисным центром площадью 8 000 м², предлагающим лазерную и плазменную резку и гибку для строительного и судостроительного секторов.",
      ET: "BLRT Grupi terase levitamisüksus laiendab oma Baltikumi kohalolekut uue 8000 m² teeninduskeskusega, pakkudes laserlõikust, plasmaleikust ja painutamist ehitus- ja laevaehitussektori jaoks.",
    },
    // welding sparks / steel works
    image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=800&q=75&auto=format&fit=crop",
    companySlug: "elme-metall",
  },
  {
    id: "3",
    slug: "blrt-grupp-iso-certification-renewal",
    title: {
      EN: "BLRT Grupp Group-Wide ISO 9001:2015 Certification Renewed",
      RU: "Группа BLRT Grupp обновила сертификацию ISO 9001:2015 на всём предприятии",
      ET: "BLRT Grupp uuendas grupiülese ISO 9001:2015 sertifikaadi",
    },
    date: "2026-03-10",
    category: "press",
    excerpt: {
      EN: "Following a successful audit by Bureau Veritas, all BLRT Grupp core operations have renewed their ISO 9001:2015 quality management certification, reinforcing our commitment to consistent service quality across the Baltic region.",
      RU: "После успешного аудита Bureau Veritas все основные операции BLRT Grupp обновили сертификацию системы менеджмента качества ISO 9001:2015, подтверждая приверженность к стабильному качеству обслуживания в Балтийском регионе.",
      ET: "Pärast Bureau Veritase edukat auditit uuendasid kõik BLRT Grupi põhitegevused ISO 9001:2015 kvaliteedijuhtimissüsteemi sertifikaadi, kinnitades meie pühendumust järjepideva teenusekvaliteedi tagamiseks Baltikumis.",
    },
    // aerial container ship — professional, broad scope
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "4",
    slug: "western-shiprepair-klaipeda-ro-ro-conversion",
    title: {
      EN: "Western Shiprepair Delivers Ro-Ro to Passenger Vessel Conversion in Klaipėda",
      RU: "Western Shiprepair завершила конверсию Ro-Ro в пассажирское судно в Клайпеде",
      ET: "Western Shiprepair teostas Klaipėdas Ro-Ro-laeva konversiooni reisilaevaks",
    },
    date: "2026-02-20",
    category: "project",
    excerpt: {
      EN: "A 12-month conversion project at BLRT's Lithuanian yard transformed a roll-on/roll-off ferry into a modern passenger vessel meeting current SOLAS and MLC requirements.",
      RU: "12-месячный проект конверсии на литовском предприятии BLRT превратил паромное судно ро-ро в современное пассажирское судно, отвечающее действующим требованиям СОЛАС и КТМ.",
      ET: "12-kuuline konversiooniprojekt BLRT Leedu laevatehases muutis rool-laeva kaasaegseks reisilaevaks, mis vastab kehtivatele SOLAS-i ja MLK nõuetele.",
    },
    // large vessel at shipyard
    image: "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?w=800&q=75&auto=format&fit=crop",
    companySlug: "western-shiprepair",
  },
  {
    id: "5",
    slug: "blrt-grupp-sustainability-report-2025",
    title: {
      EN: "BLRT Grupp Publishes 2025 Sustainability Report",
      RU: "BLRT Grupp публикует отчёт об устойчивом развитии за 2025 год",
      ET: "BLRT Grupp avaldab 2025. aasta jätkusuutlikkuse aruande",
    },
    date: "2026-01-30",
    category: "press",
    excerpt: {
      EN: "The group's annual sustainability report highlights a 14% reduction in direct CO₂ emissions across Baltic shipyard operations, expanded apprenticeship programmes, and progress toward 2030 environmental targets.",
      RU: "Ежегодный отчёт группы об устойчивом развитии отражает снижение прямых выбросов CO₂ на 14% в операциях балтийских верфей, расширение программ ученичества и прогресс в достижении экологических целей 2030 года.",
      ET: "Grupi aastasel jätkusuutlikkuse aruandel on esile tõstetud 14% vähenemine otsestes CO₂ heitkogustes Baltikumi laevatehase tegevuses, laiendatud õpipoisiõppeprogramme ja edenemist 2030. aasta keskkonnaeesmärkide suunas.",
    },
    // aerial port — wide, environmental perspective
    image: "https://images.unsplash.com/photo-1590953850766-32da74e5e3c8?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "6",
    slug: "elme-messer-gas-industrial-expansion",
    title: {
      EN: "Elme Messer Gaas Doubles Industrial Gas Production Capacity",
      RU: "Elme Messer Gaas удваивает производственные мощности по промышленным газам",
      ET: "Elme Messer Gaas kahekordistab tööstusgaaside tootmisvõimsuse",
    },
    date: "2025-12-05",
    category: "company",
    excerpt: {
      EN: "Following a €4.2 million investment in new filling and storage infrastructure at the Tallinn facility, Elme Messer Gaas can now supply oxygen, nitrogen and argon at twice the previous capacity to Baltic industrial customers.",
      RU: "После инвестиций в размере 4,2 млн евро в новую инфраструктуру наполнения и хранения на таллинском предприятии Elme Messer Gaas теперь может поставлять кислород, азот и аргон в два раза больше предыдущей мощности балтийским промышленным клиентам.",
      ET: "Pärast 4,2 miljoni euro suurust investeeringut uude täitmis- ja ladustamisinfrastruktuuri Tallinna tehases suudab Elme Messer Gaas nüüd tarnida hapnikku, lämmastikku ja argooni kaks korda suuremas mahus Baltikumi tööstusklientidele.",
    },
    // industrial facility workers
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=75&auto=format&fit=crop",
    companySlug: "elme-messer-gaas",
  },
];
