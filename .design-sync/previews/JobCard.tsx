import { JobCard } from 'BLRT-group-website';

const job1 = {
  id: '1',
  title: { EN: 'Marine Engineer', RU: 'Морской инженер', ET: 'Meretehnik' },
  companyName: 'BLRT Repair Yards',
  location: 'Tallinn, Estonia',
  type: 'full-time' as const,
  description: { EN: 'Join our team as a Marine Engineer responsible for vessel inspection, maintenance planning, and repair supervision at our Tallinn shipyard. You will work alongside experienced specialists on a variety of vessel types.', RU: '...', ET: '...' },
  requirements: { EN: ['BSc in Marine Engineering or related field', 'Min. 3 years shipyard experience', 'DNV/LR class society familiarity', 'Proficiency in AutoCAD'], RU: ['...'], ET: ['...'] },
  contact: 'careers@blrt.ee',
};

const job2 = {
  id: '2',
  title: { EN: 'Steel Fabrication Supervisor', RU: 'Руководитель сварочного цеха', ET: 'Terase töötlemise juhataja' },
  companyName: 'BLRT Engineering',
  location: 'Paldiski, Estonia',
  type: 'full-time' as const,
  description: { EN: 'Oversee daily operations in our steel fabrication workshop. Manage a team of 20 welders and fabricators, ensuring quality, safety, and delivery standards are met on offshore and industrial projects.', RU: '...', ET: '...' },
  requirements: { EN: ['Welding supervisor certification', 'ISO 3834 familiarity', '5+ years fabrication experience', 'Team leadership skills'], RU: ['...'], ET: ['...'] },
  contact: 'careers@blrt.ee',
};

export const Collapsed = () => (
  <div className="p-6 bg-background max-w-2xl">
    <JobCard job={job1} />
  </div>
);

export const TwoListings = () => (
  <div className="p-6 bg-background max-w-2xl flex flex-col gap-3">
    <JobCard job={job1} />
    <JobCard job={job2} />
  </div>
);
