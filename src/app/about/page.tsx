import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-5 py-16 sm:px-8 sm:py-24 max-w-3xl mx-auto">
        <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">The Brand</p>
        <h1 className="font-display text-5xl uppercase leading-none tracking-tight mb-12">About</h1>
        <div className="flex flex-col gap-8 font-sans text-sm leading-relaxed text-black/70">
          <p className="font-display text-2xl italic leading-snug text-black">DMV roots. No ceilings.</p>
          <p>SUZZIESATURN LLC is a Black-owned streetwear brand built in the DMV, established in 2017. We make clothing for people who love style and stay out the way.</p>
          <p>Every piece is intentional. We don&apos;t follow seasons or trends — we move on our own timeline, drop when it&apos;s right, and build for people who already know.</p>
          <p>From slides to bandanas to whatever comes next — SUZZIESATURN is a brand built to last, made by someone from here, for everyone who gets it.</p>
          <div className="pt-4 border-t border-black/10">
            <p className="font-sans text-xs text-black/40 uppercase tracking-[0.2em]">SUZZIESATURN LLC · DMV · Est. 2017 · Black-Owned</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
