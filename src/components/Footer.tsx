import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="bg-black text-white border-t border-[#222] overflow-hidden"
      style={{ padding: "clamp(64px,8vw,100px) clamp(24px,5vw,72px) 0" }}
    >
      <div
        className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr] sm:gap-8"
        style={{ marginBottom: "clamp(64px,8vw,100px)" }}
      >
        {/* Stay Connected */}
        <div>
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-3">Stay Connected</p>
          <p className="font-display italic font-normal leading-[1.4] mb-7 opacity-85" style={{ fontSize: "clamp(16px,2vw,20px)" }}>Stay off the radar.</p>
          <div className="flex border border-[#444] max-w-[340px]">
            <input type="email" placeholder="Your email" className="flex-1 bg-transparent text-white font-sans text-[11px] font-medium tracking-[0.08em] px-4 py-3 outline-none placeholder:opacity-35 placeholder:uppercase placeholder:tracking-[0.12em]" />
            <button type="button" className="bg-white text-black font-sans text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-3 cursor-pointer transition-opacity hover:opacity-80">Join</button>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <span className="font-sans text-[10px] font-medium tracking-[0.08em] opacity-30">Free shipping on orders over $75</span>
            <span className="font-sans text-[10px] font-medium tracking-[0.08em] opacity-30">Free returns within 30 days</span>
            <span className="font-sans text-[10px] font-medium tracking-[0.08em] opacity-30">Ships within 3–5 business days</span>
          </div>
        </div>

        {/* Shop */}
        <div>
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-3">Shop</p>
          <ul className="flex flex-col gap-3">
            {["Slides","Tees","Hoodies","Bandanas","All Products"].map(item => (
              <li key={item}><Link href="#" className="font-sans text-xs font-medium tracking-[0.06em] text-white opacity-60 hover:opacity-100 transition-opacity no-underline">{item}</Link></li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-3">Info</p>
          <ul className="flex flex-col gap-3">
            {["About","Sizing","Shipping","Returns","Contact"].map(item => (
              <li key={item}><Link href="#" className="font-sans text-xs font-medium tracking-[0.06em] text-white opacity-60 hover:opacity-100 transition-opacity no-underline">{item}</Link></li>
            ))}
          </ul>
        </div>

        {/* Follow */}
        <div>
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-3">Follow</p>
          <ul className="flex flex-col gap-3">
            {[
              ["@suzziesaturn", "https://www.instagram.com/suzziesaturn/"],
              ["Instagram", "https://www.instagram.com/suzziesaturn/"],
              ["TikTok", "https://www.tiktok.com/@suzziesaturn"],
              ["X / Twitter", "https://x.com/suzziesaturn"],
              ["YouTube", "https://www.youtube.com/@suzziesaturn"],
              ["Tumblr", "https://suzziesaturn.tumblr.com/"],
              ["Pinterest", "https://www.pinterest.com/suzziesaturn/"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} target="_blank" rel="noopener noreferrer" className="font-sans text-xs font-medium tracking-[0.06em] text-white opacity-60 hover:opacity-100 transition-opacity no-underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Wordmark */}
      <div
        className="font-display font-black uppercase leading-none w-full text-center border-t border-[#222] overflow-hidden whitespace-nowrap tracking-[-0.02em]"
        style={{ fontSize: "clamp(40px,10vw,130px)", padding: "clamp(24px,4vw,40px) 0" }}
      >
        Suzziesaturn
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#222] py-5 flex items-center justify-between gap-4 flex-wrap">
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] opacity-35">&copy; {year} Suzziesaturn LLC</span>
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] opacity-35">Black-Owned &middot; Est. 2017</span>
      </div>
    </footer>
  );
}
