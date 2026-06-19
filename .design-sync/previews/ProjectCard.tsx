import { ProjectCard } from 'BLRT-group-website';

const project1 = {
  id: '1',
  sectorId: 'port-marine',
  title: { EN: 'Ferry Refurbishment — M/S Baltic Star', RU: 'Ремонт парома М/С Baltic Star', ET: 'Parvlaeva renoveerimine' },
  description: { EN: 'Full hull and interior refurbishment of 185m passenger ferry, including new propulsion system installation and passenger cabin modernisation.', RU: '...', ET: '...' },
  year: 2023,
  image: 'https://picsum.photos/seed/ferry-project/800/480',
  tags: ['Refurbishment', 'Ferry', 'Propulsion'],
};

const project2 = {
  id: '2',
  sectorId: 'engineering',
  title: { EN: 'Offshore Steel Module Fabrication', RU: 'Изготовление стальных модулей', ET: 'Offshore terasemoodulite tootmine' },
  description: { EN: 'Design and fabrication of 1,200-tonne structural steel modules for North Sea oil platform, including structural engineering and surface treatment.', RU: '...', ET: '...' },
  year: 2024,
  image: 'https://picsum.photos/seed/offshore-proj/800/480',
  tags: ['Steel', 'Offshore', 'Fabrication', 'Engineering'],
};

export const GridVariant = () => (
  <div className="p-6 bg-background max-w-sm">
    <ProjectCard project={project1} />
  </div>
);

export const FeaturedVariant = () => (
  <div className="p-6 bg-background max-w-3xl">
    <ProjectCard project={project2} variant="featured" />
  </div>
);

export const GridRow = () => (
  <div className="p-6 bg-background grid grid-cols-2 gap-4 max-w-3xl">
    <ProjectCard project={project1} />
    <ProjectCard project={project2} />
  </div>
);
