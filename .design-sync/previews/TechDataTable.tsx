import { TechDataTable } from 'BLRT-group-website';

const loc = (s: string) => ({ EN: s, RU: s, ET: s, LT: s, LV: s, FI: s, PL: s });

const shipRows = [
  { label: loc('Vessel type'), value: 'Ro-Pax ferry' },
  { label: loc('Length overall'), value: '185.4 m' },
  { label: loc('Beam'), value: '28.6 m' },
  { label: loc('Draft'), value: '6.2 m' },
  { label: loc('Gross tonnage'), value: '34,200 GT' },
  { label: loc('Passenger capacity'), value: '2,500 pax' },
  { label: loc('Classification'), value: "Lloyd's Register 100A1" },
];

const steelRows = [
  { label: loc('Material grade'), value: 'S355 J2+N' },
  { label: loc('Thickness range'), value: '6 – 50 mm' },
  { label: loc('Surface treatment'), value: 'SA 2.5 blast, 2-coat epoxy' },
  { label: loc('Certification'), value: 'EN 10025-2, DNV approved' },
  { label: loc('Weight'), value: '1,240 tonnes' },
];

export const VesselSpecs = () => (
  <div className="p-6 bg-background max-w-lg">
    <TechDataTable rows={shipRows} />
  </div>
);

export const MaterialSpecs = () => (
  <div className="p-6 bg-background max-w-md">
    <TechDataTable rows={steelRows} />
  </div>
);
