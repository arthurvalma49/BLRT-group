import { ProductCard } from 'BLRT-group-website';

export const WithoutImage = () => (
  <div className="p-6 bg-background max-w-sm">
    <ProductCard product={{
      name: 'Marine Grade Steel Sheet',
      desc: 'High-tensile steel sheets certified to DNV, LR, and BV standards. Available in thicknesses from 4mm to 50mm.',
    }} />
  </div>
);

export const WithImage = () => (
  <div className="p-6 bg-background max-w-sm">
    <ProductCard product={{
      name: 'Stainless Steel Pipe',
      desc: 'AISI 316L stainless steel pipes for marine and offshore applications. Corrosion-resistant and pressure-rated.',
      image: 'https://picsum.photos/seed/steel-pipe/400/160',
    }} />
  </div>
);

export const Grid = () => (
  <div className="p-6 bg-background grid grid-cols-2 gap-4 max-w-2xl">
    {[
      { name: 'Structural Profiles', desc: 'HEA/HEB beams and IPE sections for marine and construction use.' },
      { name: 'Aluminium Sheets', desc: 'Marine-grade 5083 alloy sheets for lightweight vessel structures.' },
      { name: 'Flat Bars', desc: 'Hot-rolled flat bars in various widths and thicknesses.' },
      { name: 'Pipe Fittings', desc: 'Elbows, tees, and flanges for shipboard piping systems.' },
    ].map((p) => <ProductCard key={p.name} product={p} />)}
  </div>
);
