import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex h-9 items-center justify-center gap-8 bg-black px-5 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-white">
        <span>Free shipping on orders over $75</span>
        <span className="opacity-40">·</span>
        <span>SS26 dropping soon</span>
      </div>
      <header className="sticky top-0 z-50 border-b border-black bg-white">
        <div className="flex h-[60px] items-center justify-between px-6">
          <a href="/" className="font-display text-[clamp(13px,2vw,17px)] font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-60">Suzziesaturn</a>
          <nav className="hidden items-center gap-8 md:flex">
            {["Shop","About","Contact"].map((item) => (
              <a key={item} href="#" className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-black opacity-55 transition-opacity hover:opacity-100">{item}</a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <button type="button" aria-label="Search" className="hidden transition-opacity hover:opacity-50 md:flex">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><line x1="17" y1="17" x2="22" y2="22"/></svg>
            </button>
            <button type="button" aria-label="Open cart" className="relative transition-opacity hover:opacity-50">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              <span className="absolute -top-1 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black font-sans text-[9px] font-bold text-white">0</span>
            </button>
            <button type="button" aria-label="Open menu" className="transition-opacity hover:opacity-50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
