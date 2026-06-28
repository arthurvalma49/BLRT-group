export interface Product {
  name: string;
  desc: string;
  image?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-brand-red/25 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
      {product.image && (
        <div className="h-40 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-sm font-semibold tracking-tight text-foreground mb-1.5">{product.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
      </div>
    </div>
  );
}
