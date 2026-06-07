"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const NAV = [
  { label: "Shop", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const { openCart, count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex h-9 items-center justify-center gap-8 bg-black px-5 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-white">
        <span>Free shipping on orders over $75</span>
        <span className="opacity-40">·</span>
        <span>SS26 dropping soon</span>
      </div>
      <header className="sticky top-0 z-50 border-b border-black bg-white">
        <div className="flex h-[60px] items-center justify-between px-6">
          <Link href="/" onClick={() => setMenuOpen(false)} className="font-display text-[clamp(13px,2vw,17px)] font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-60">Suzziesaturn</Link>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map(({ label, href }) => (
              <Link key={label} href={href} className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-black opacity-55 transition-opacity hover:opacity-100">{label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <button type="button" aria-label="Search" className="transition-opacity hover:opacity-50">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><line x1="17" y1="17" x2="22" y2="22"/></svg>
            </button>
            <button type="button" aria-label="Open cart" onClick={openCart} className="relative transition-opacity hover:opacity-50">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              {count > 0 && (
                <span className="absolute -top-1 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black font-sans text-[9px] font-bold text-white">{count}</span>
              )}
            </button>
            <button type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)} className="transition-opacity hover:opacity-50">
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ top: "96px" }}>
        <nav className="flex flex-col px-8 pt-12 gap-8">
          {NAV.map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)}
              className="font-display text-[clamp(36px,8vw,56px)] font-bold uppercase leading-none tracking-tight text-white transition-opacity hover:opacity-50">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
