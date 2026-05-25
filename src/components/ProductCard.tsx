import type { Product } from "@/lib/products";

// Editorial fallback shown until a real product photo exists at product.image.
function ImagePlaceholder({ name }: { name: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-black px-4 text-center">
      <span className="font-display text-xl uppercase leading-[1.05] text-white sm:text-2xl">
        {name}
      </span>
      <span className="mt-3 text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-white/40">
        Suzziesaturn
      </span>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
        {product.hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder name={product.name} />
        )}
      </div>

      <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide">
        {product.name}
      </h3>
      <p className="mt-2 font-display text-lg leading-none">
        ${product.price}
      </p>
    </article>
  );
}
