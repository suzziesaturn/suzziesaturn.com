"use client";
import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductPageClient({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const images = product.hasImage ? product.images.filter(img => fs.existsSync(img)) : [];

  function handleAddToCart() {
    if ((product.sizes as any[]).length > 1 && !selectedSize) {
      setError(true);
      return;
    }
    const size = selectedSize || (product.sizes as any[])[0]?.label;
    const priceId = selectedSize
      ? (product.sizes as any[]).find((s: any) => s.label === selectedSize)?.priceId
      : (product.sizes as any[])[0]?.priceId;

    const cart = JSON.parse(localStorage.getItem("sz_cart") || "[]");
    const existing = cart.find((i: any) => i.priceId === priceId);
    if (existing) existing.qty++;
    else cart.push({ priceId, name: product.name, variant: size, price: product.price, img: product.image, qty: 1 });
    localStorage.setItem("sz_cart", JSON.stringify(cart));
    window.location.href = "/";
  }

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 flex h-[60px] items-center justify-between border-b border-black bg-white px-6">
        <Link href="/" className="font-display text-[clamp(13px,2vw,17px)] font-bold uppercase tracking-[0.12em]">
          Suzziesaturn
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/" className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] opacity-60 hover:opacity-100 transition-opacity">
            ← Shop
          </Link>
          <button type="button" aria-label="Cart" className="transition-opacity hover:opacity-50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Product layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-60px)]">

        {/* Images */}
        <div className="relative bg-[#111] aspect-square md:aspect-auto md:sticky md:top-[60px] md:h-[calc(100vh-60px)]">
          {images.length > 0 ? (
            <>
              {images.map((src, i) => (
                <img key={i} src={src} alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${i === activeImg ? "opacity-100" : "opacity-0"}`}
                />
              ))}
              {images.length > 1 && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, i) => (
                    <button key={i} onClick={() => setActiveImg(i)}
                      className={`w-[6px] h-[6px] rounded-full border-none transition-colors ${i === activeImg ? "bg-white" : "bg-white/30"}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="flex h-full items-center justify-center font-display text-2xl uppercase text-white">
              {product.name}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-8" style={{ padding: "clamp(32px,5vw,64px)" }}>
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] opacity-40">
            <Link href="/" className="text-black no-underline">Shop</Link> / {product.name}
          </p>

          <h1 className="font-display font-black uppercase leading-none tracking-[-0.02em]"
            style={{ fontSize: "clamp(36px,5vw,64px)" }}>
            {product.name}
          </h1>

          <p className="font-sans font-semibold tracking-[0.05em]" style={{ fontSize: "clamp(18px,2vw,22px)" }}>
            ${product.price}.00
          </p>

          {/* Sizes */}
          {(product.sizes as any[]).length > 1 && (
            <div>
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] opacity-50 mb-3">Select Size</p>
              <div className="flex flex-wrap gap-2">
                {(product.sizes as any[]).map((s: any) => (
                  <button key={s.label} onClick={() => { setSelectedSize(s.label); setError(false); }}
                    className={`border font-sans text-[10px] font-bold uppercase tracking-[0.1em] px-[14px] py-[10px] cursor-pointer transition-all whitespace-nowrap
                      ${selectedSize === s.label ? "bg-black text-white border-black" : "bg-transparent text-black border-[#ccc] hover:border-black"}`}>
                    {s.label}
                  </button>
                ))}
              </div>
              {error && <p className="mt-2 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-red-600">Please select a size.</p>}
            </div>
          )}

          <button onClick={handleAddToCart}
            className="w-full bg-black text-white font-sans text-xs font-bold uppercase tracking-[0.25em] py-5 transition-opacity hover:opacity-80">
            Add to Cart — ${product.price}
          </button>

          {/* Details */}
          <div className="border-t border-[#eee] pt-6 flex flex-col gap-3">
            {[
              ["Material", "EVA Foam / Rubber"],
              ["Sizing", "Unisex EU 36–47"],
              ["Ships", "3–5 Business Days"],
              ["Returns", "30 Days"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between font-sans text-[11px] font-semibold uppercase tracking-[0.1em]">
                <span className="opacity-40">{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
