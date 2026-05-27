import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section style={{ padding: "clamp(64px,8vw,120px) clamp(24px,5vw,72px)" }}>
      <div
        className="flex flex-wrap items-end justify-between gap-4"
        style={{ marginBottom: "clamp(40px,5vw,64px)" }}
      >
        <div>
          <p
            className="font-sans font-semibold uppercase tracking-[0.35em] text-black opacity-50"
            style={{ fontSize: "clamp(10px,1.1vw,11px)", marginBottom: "12px" }}
          >
            Shop
          </p>
          <h2
            className="font-display font-black uppercase leading-none tracking-[-0.02em]"
            style={{ fontSize: "clamp(36px,6vw,80px)" }}
          >
            Latest Drop
          </h2>
        </div>
        <span className="cursor-pointer font-sans text-[11px] font-semibold uppercase tracking-[0.12em] opacity-45 underline">
          Size Guide
        </span>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3"
        style={{ gap: "clamp(12px,2vw,24px)" }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
