import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductVideos from "@/components/ProductVideos";

export default function TeesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-5 pt-16 pb-0 sm:px-8 sm:pt-24 sm:pb-0">
        <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">Shop</p>
        <h1 className="font-display text-5xl uppercase leading-none tracking-tight mb-12">Tees</h1>
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] opacity-40">Coming Soon</p>
        <ProductVideos videos={["RTaFJoFUWI8", "pIMsvMWIpL0", "iSygWxxBh8k", "kS9JMjb4TO0"]} />
      </main>
      <Footer />
    </>
  );
}
