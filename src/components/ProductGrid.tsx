import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mb-10 flex items-end justify-between border-b border-black pb-5 sm:mb-14">
        <h2 className="font-display text-4xl uppercase leading-[0.85] sm:text-6xl">
          The Collection
        </h2>
        <span className="shrink-0 pb-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] sm:text-xs">
          {products.length} Pieces
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
