import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="overflow-hidden bg-black text-white">
      <div className="px-5 pb-10 pt-16 sm:px-8 sm:pt-24 sm:pb-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="mb-5 font-sans text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white">Stay Connected</p>
            <p className="mb-7 font-display text-xl italic text-white/85">Stay off the radar.</p>
            <div className="flex w-full border border-white/25">
              <input type="email" placeholder="Your email" className="min-w-0 flex-1 bg-transparent px-4 py-3 font-sans text-[11px] font-medium tracking-wide text-white placeholder:uppercase placeholder:tracking-widest placeholder:text-white/35 outline-none" />
              <button type="button" className="shrink-0 bg-white px-4 py-3 font-sans text-[10px] font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-80">Join</button>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <span className="font-sans text-[10px] font-medium uppercase tracking-wide text-white/30">Free shipping on orders over $75</span>
              <span className="font-sans text-[10px] font-medium uppercase tracking-wide text-white/30">Free returns within 30 days</span>
              <span className="font-sans text-[10px] font-medium uppercase tracking-wide text-white/30">Ships within 3–5 business days</span>
            </div>
          </div>

          <div>
            <p className="mb-5 font-sans text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white">Shop</p>
            <ul className="flex flex-col gap-3">
              <li><Link href="/products" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">All Products</Link></li>
              <li><Link href="/products" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">Accessories</Link></li>
              <li><Link href="/products" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">Footwear</Link></li>
              <li><Link href="/products" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">Hoodies</Link></li>
              <li><Link href="/products" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">Tees</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-5 font-sans text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white">Info</p>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">About</Link></li>
              <li><Link href="/sizing" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">Sizing</Link></li>
              <li><Link href="/shipping" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">Shipping</Link></li>
              <li><Link href="/returns" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">Returns</Link></li>
              <li><Link href="/contact" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-5 font-sans text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white">Follow</p>
            <ul className="flex flex-col gap-3">
              <li><Link href="https://instagram.com/suzziesaturn" target="_blank" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">@suzziesaturn</Link></li>
              <li><Link href="https://instagram.com/suzziesaturn" target="_blank" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">Instagram</Link></li>
              <li><Link href="https://tiktok.com/@suzziesaturn" target="_blank" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">TikTok</Link></li>
              <li><Link href="https://x.com/suzziesaturn" target="_blank" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">X / Twitter</Link></li>
              <li><Link href="https://youtube.com/@suzziesaturn" target="_blank" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">YouTube</Link></li>
              <li><Link href="https://pinterest.com/suzziesaturn" target="_blank" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">Pinterest</Link></li>
              <li><Link href="https://suzziesaturn.tumblr.com" target="_blank" className="font-sans text-xs font-medium tracking-wide text-white/60 transition-colors hover:text-white">Tumblr</Link></li>
            </ul>
          </div>
        </div>

        <h2 className="mt-16 font-display text-[clamp(2.75rem,15vw,13rem)] uppercase leading-[0.8] tracking-[-0.03em]">Suzziesaturn</h2>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-6 sm:flex-row sm:justify-between">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">&copy; {year} Suzziesaturn LLC</span>
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Black-owned &middot; Est. 2017</span>
        </div>
      </div>
    </footer>
  );
}
