import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100svh_-_4rem)] flex-col bg-black px-5 py-8 text-white sm:px-8 sm:py-12">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/50">
        SS26 Collection
      </p>

      <div className="flex flex-1 items-center py-8 sm:py-12">
        <h1 className="font-display text-[clamp(4rem,13vw,12rem)] font-black uppercase leading-[0.85] tracking-[-0.015em]">
          Live
          <br />
          <span className="italic">Dreams</span>
          <br />
          In Real Time
        </h1>
      </div>

      <div>
        <Link
          href="#shop"
          className="inline-block border border-white px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] transition-colors hover:bg-white hover:text-black"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
