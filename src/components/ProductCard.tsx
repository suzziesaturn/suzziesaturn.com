"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

function ImagePlaceholder({ name }: { name: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-black px-4 text-center">
      <span className="font-display text-xl uppercase leading-[1.05] text-white sm:text-2xl">{name}</span>
      <span className="mt-3 text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-white/40">Suzziesaturn</span>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const isSingleSize = product.sizes.length === 1;
  const hasLongLabels = product.sizes.some(s => s.label.length > 4);
  const [added, setAdded] = useState<string | null>(null);

  function quickAdd(e: React.MouseEvent) {
    e.preventDefault();
    const size = product.sizes[0];
    addItem({ priceId: size.priceId, name: product.name, variant: size.label, price: product.price, img: product.image });
  }

  function goToProduct(e: React.MouseEvent) {
    e.preventDefault();
    router.push(`/${product.id}`);
  }

  function addSize(e: React.MouseEvent, size: { label: string; priceId: string }) {
    e.preventDefault();
    addItem({ priceId: size.priceId, name: product.name, variant: size.label, price: product.price, img: product.image });
    setAdded(size.priceId);
    setTimeout(() => setAdded(null), 1500);
  }

  return (
    <Link href={`/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e8e8] mb-[14px]">
        {product.hasImage ? (
          <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-[350ms] ease-out group-hover:scale-[1.04]" />
        ) : (
          <ImagePlaceholder name={product.name} />
        )}

        {/* Single size — Quick Add */}
        {isSingleSize && (
          <button
            onClick={quickAdd}
            className="absolute bottom-0 left-0 right-0 translate-y-full bg-black py-[14px] font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-transform duration-[250ms] group-hover:translate-y-0"
          >
            Quick Add
          </button>
        )}

        {/* Multi size, long labels — Choose Your Size */}
        {!isSingleSize && hasLongLabels && (
          <button
            onClick={goToProduct}
            className="absolute bottom-0 left-0 right-0 translate-y-full bg-black py-[14px] font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-transform duration-[250ms] group-hover:translate-y-0"
          >
            Choose Your Size
          </button>
        )}

        {/* Multi size, short labels — size grid */}
        {!isSingleSize && !hasLongLabels && (
          <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-black px-3 py-3 transition-transform duration-[250ms] group-hover:translate-y-0">
            <p className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-white/50 mb-2">Choose Your Size</p>
            <div className="flex flex-wrap gap-1">
              {product.sizes.map((s) => (
                <button
                  key={s.priceId}
                  onClick={(e) => addSize(e, s)}
                  className={`border font-sans text-[9px] font-bold uppercase tracking-[0.08em] px-2 py-1 transition-all whitespace-nowrap
                    ${added === s.priceId ? "bg-white text-black border-white" : "bg-transparent text-white border-white/40 hover:border-white"}`}
                >
                  {added === s.priceId ? "✓" : s.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] mb-[5px]">{product.name}</h3>
      <p className="font-sans text-xs font-medium text-[#555]">${product.price}</p>
    </Link>
  );
}
