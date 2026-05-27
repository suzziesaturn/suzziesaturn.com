import type { Product } from "@/lib/products";

function ImagePlaceholder({ name }: { name: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-black px-4 text-center">
      <span className="font-display text-xl uppercase leading-[1.05] text-white sm:text-2xl">{name}</span>
      <span className="mt-3 text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-white/40">Suzziesaturn</span>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group block cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e8e8] mb-[14px]">
        {product.hasImage ? (
          <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-[350ms] ease-out group-hover:scale-[1.04]" />
        ) : (
          <ImagePlaceholder name={product.name} />
        )}
      </div>
      <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] mb-[5px]">{product.name}</h3>
      <p className="font-sans text-xs font-medium text-[#555]">${product.price}</p>
    </article>
  );
}
