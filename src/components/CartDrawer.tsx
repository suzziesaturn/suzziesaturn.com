"use client";
import { useCart } from "@/lib/cart";
import { useState } from "react";

export default function CartDrawer() {
  const { items, open, closeCart, updateQty, remove, total, count } = useCart();
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    if (!items.length) return;
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: items.map(i => ({ priceId: i.priceId, quantity: i.qty })) }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/40 z-[200] transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 w-[min(420px,100vw)] bg-white z-[201] flex flex-col transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#eee]">
          <p className="font-display font-black text-xl uppercase tracking-[-0.01em]">Cart</p>
          <button onClick={closeCart} className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] opacity-40 hover:opacity-100 transition-opacity">✕</button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5">
          {!items.length ? (
            <div className="flex h-full items-center justify-center font-sans text-[11px] font-bold uppercase tracking-[0.2em] opacity-30">
              Your cart is empty.
            </div>
          ) : items.map(item => (
            <div key={item.priceId} className="flex gap-4 items-start">
              <img src={item.img} alt={item.name} className="w-20 h-20 object-cover bg-[#eee] flex-shrink-0" />
              <div className="flex-1">
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] mb-1">{item.name}</p>
                {item.variant && <p className="font-sans text-[10px] font-medium opacity-50 tracking-[0.08em] mb-2">{item.variant}</p>}
                <p className="font-sans text-xs font-semibold mb-3">${(item.price * item.qty).toFixed(2)}</p>
                <div className="flex items-center gap-3">
                  <button onClick={() => updateQty(item.priceId, item.qty - 1)} className="w-6 h-6 border border-[#ccc] font-sans text-sm flex items-center justify-center hover:border-black transition-colors">−</button>
                  <span className="font-sans text-xs font-semibold min-w-[16px] text-center">{item.qty}</span>
                  <button onClick={() => updateQty(item.priceId, item.qty + 1)} className="w-6 h-6 border border-[#ccc] font-sans text-sm flex items-center justify-center hover:border-black transition-colors">+</button>
                </div>
                <button onClick={() => remove(item.priceId)} className="mt-2 font-sans text-[10px] font-bold uppercase tracking-[0.15em] opacity-40 hover:opacity-100 transition-opacity">Remove</button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-6 border-t border-[#eee]">
          <div className="flex justify-between font-sans text-[11px] font-bold uppercase tracking-[0.15em] mb-4">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={!items.length || loading}
            className="w-full bg-black text-white font-sans text-xs font-bold uppercase tracking-[0.25em] py-5 transition-all hover:bg-[#222] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {loading ? "Loading..." : "Checkout"}
          </button>
        </div>
      </div>
    </>
  );
}
