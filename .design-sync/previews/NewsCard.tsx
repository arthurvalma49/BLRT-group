import { NewsCard } from 'BLRT-group-website';

const news1 = {
  id: '1',
  category: 'press' as const,
  title: { EN: 'BLRT Group Expands Port Services Division', RU: 'BLRT Group расширяет портовые услуги', ET: 'BLRT Grupp laiendab sadamateenuseid' },
  excerpt: { EN: 'BLRT Group has announced a significant expansion of its port and marine services division, adding new vessel maintenance capabilities at the Tallinn shipyard facility.', RU: '...', ET: '...' },
  date: '2024-03-15',
  image: 'https://picsum.photos/seed/harbor-news/800/480',
};

const news2 = {
  id: '2',
  category: 'company' as const,
  title: { EN: 'New Dry-Dock Facility Opens in Turku', RU: 'Новый сухой док открылся в Турку', ET: 'Uus kuivdokk avati Turus' },
  excerpt: { EN: 'Our Finnish subsidiary has completed construction of a state-of-the-art dry-dock facility capable of accommodating vessels up to 180 metres in length.', RU: '...', ET: '...' },
  date: '2024-01-22',
  image: 'https://picsum.photos/seed/drydock/800/480',
};

const news3 = {
  id: '3',
  category: 'project' as const,
  title: { EN: 'Steel Structure Delivery: Offshore Platform A7', RU: 'Поставка стальных конструкций', ET: 'Teraskonstruktsioonide tarnimine' },
  excerpt: { EN: 'BLRT Repair Yards completed delivery of 1,200 tonnes of prefabricated steel modules for the Offshore Platform A7 project in the North Sea.', RU: '...', ET: '...' },
  date: '2023-11-05',
  image: 'https://picsum.photos/seed/offshore/800/480',
};

export const PressRelease = () => (
  <div className="p-6 bg-background max-w-sm">
    <NewsCard news={news1} />
  </div>
);

export const CompanyNews = () => (
  <div className="p-6 bg-background max-w-sm">
    <NewsCard news={news2} />
  </div>
);

export const ProjectUpdate = () => (
  <div className="p-6 bg-background max-w-sm">
    <NewsCard news={news3} />
  </div>
);

export const Grid = () => (
  <div className="p-6 bg-background grid grid-cols-3 gap-4 max-w-5xl">
    <NewsCard news={news1} />
    <NewsCard news={news2} />
    <NewsCard news={news3} />
  </div>
);
