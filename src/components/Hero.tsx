import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col bg-black text-white" style={{ padding: "clamp(48px,8vw,96px) clamp(24px,5vw,72px)" }}>
      <p className="font-sans font-semibold uppercase tracking-[0.3em] text-white/50" style={{ fontSize: "clamp(10px,1.2vw,12px)", marginBottom: "clamp(20px,3vw,32px)" }}>SS26 Collection</p>
      <h1 className="font-display font-black uppercase leading-[0.92] tracking-[-0.02em]" style={{ fontSize: "clamp(52px,10vw,140px)", marginBottom: "clamp(40px,6vw,72px)", maxWidth: "960px" }}>
        Live<br /><em>Dreams</em><br />In Real Time
      </h1>
      <Link href="#shop" className="block border border-white py-4 font-sans font-bold uppercase tracking-[0.25em] transition-colors hover:bg-white hover:text-black" style={{ fontSize: "clamp(11px,1.1vw,12px)" }}>
        Shop Now
      </Link>
    </section>
  );
}
