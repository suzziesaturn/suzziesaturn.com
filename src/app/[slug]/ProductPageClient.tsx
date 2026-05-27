"use client";
import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductPageClient({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cartMsg, setCartMsg] = useState("");

  const images = product.images?.length ? product.images : [product.image];
  const sizes = product.sizes;
  const isSingleSize = sizes.length === 1;

  function getSelectedPriceId() {
    const size = selectedSize || sizes[0]?.label;
    return sizes.find((s) => s.label === size)?.priceId || sizes[0]?.priceId;
  }

  async function handleBuyNow() {
    if (!isSingleSize && !selectedSize) { setError(true); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: getSelectedPriceId() }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else throw new Error(data.error);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  function handleAddToCart() {
    if (!isSingleSize && !selectedSize) { setError(true); return; }
    const size = selectedSize || sizes[0]?.label;
    const priceId = getSelectedPriceId();
    const cart = JSON.parse(localStorage.getItem("sz_cart") || "[]");
    const existing = cart.find((i: any) => i.priceId === priceId);
    if (existing) existing.qty++;
    else cart.push({ priceId, name: product.name, variant: size, price: product.price, img: images[0], qty: 1 });
    localStorage.setItem("sz_cart", JSON.stringify(cart));
    setCartMsg("Added to cart");
    setTimeout(() => setCartMsg(""), 2000);
  }

  return (
    <>
      <header className="sticky top-0 z-50 flex h-[60px] items-center justify-between border-b border-black bg-white px-6">
        <Link href="/" className="font-display text-[clamp(13px,2vw,17px)] font-bold uppercase tracking-[0.12em]">Suzziesaturn</Link>
        <div className="flex items-center gap-5">
          <Link href="/" className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] opacity-60 hover:opacity-100 transition-opacity">← Shop</Link>
          <button type="button" aria-label="Cart" className="transition-opacity hover:opacity-50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-60px)]">
        <div className="relative bg-[#e8e8e8] aspect-square md:aspect-auto md:sticky md:top-[60px] md:h-[calc(100vh-60px)]">
          {images.map((src, i) => (
            <img key={i} src={src} alt={product.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[400ms] ${i === activeImg ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          {images.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, i) => (
                <button key={i} onClick={() => setActiveImg(i)}
                  className={`w-[6px] h-[6px] rounded-full border-none cursor-pointer transition-colors ${i === activeImg ? "bg-white" : "bg-white/30"}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-8" style={{ padding: "clamp(32px,5vw,64px)" }}>
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] opacity-40">
            <Link href="/" className="text-black no-underline">Shop</Link> / {product.name}
          </p>
          <h1 className="font-display font-black uppercase leading-[1] tracking-[-0.02em]" style={{ fontSize: "clamp(36px,5vw,64px)" }}>
            {product.name}
          </h1>
          <p className="font-sans font-semibold tracking-[0.05em]" style={{ fontSize: "clamp(18px,2vw,22px)" }}>
            ${product.price}.00
          </p>

          <div className="flex flex-wrap gap-2">
            {isSingleSize ? (
              <span className="inline-block border border-black bg-black px-[14px] py-[10px] font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-white select-text">
                {sizes[0].label}
              </span>
            ) : (
              <>
                <p className="w-full font-sans text-[10px] font-bold uppercase tracking-[0.25em] opacity-50 mb-1">Select Size</p>
                {sizes.map((s) => (
                  <button key={s.label}
                    onClick={() => { setSelectedSize(s.label); setError(false); }}
                    className={`border font-sans text-[10px] font-bold uppercase tracking-[0.1em] px-[14px] py-[10px] cursor-pointer transition-all whitespace-nowrap
                      ${selectedSize === s.label ? "bg-black text-white border-black" : "bg-transparent text-black border-[#ccc] hover:border-black"}`}>
                    {s.label}
                  </button>
                ))}
              </>
            )}
            {error && <p className="w-full mt-1 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-red-600">Please select a size.</p>}
          </div>

          <div className="flex flex-col">
            <button onClick={handleBuyNow} disabled={loading}
              className="w-full bg-black text-white font-sans text-xs font-bold uppercase tracking-[0.25em] py-5 transition-opacity hover:opacity-80 disabled:opacity-40">
              {loading ? "Loading..." : `Buy Now — $${product.price}`}
            </button>
            <button onClick={handleAddToCart}
              className="w-full bg-white text-black font-sans text-xs font-bold uppercase tracking-[0.25em] py-5 transition-all duration-200 hover:bg-black hover:text-white ring-1 ring-inset ring-black">
              {cartMsg || "Add to Cart"}
            </button>
          </div>

          <div className="border-t border-[#eee] pt-6 flex flex-col">
            {product.details.map(({ label, value }) => (
              <div key={label} className="flex justify-between font-sans text-[11px] font-semibold uppercase tracking-[0.1em]">
                <span className="opacity-40">{label}</span><span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
