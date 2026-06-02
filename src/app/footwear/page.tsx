import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function FootwearPage() {
  const filtered = products.filter(p => p.category === "Footwear");
  return (
    <>
      <Header />
      <main className="min-h-screen px-5 py-16 sm:px-8 sm:py-24">
        <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">Shop</p>
        <h1 className="font-display text-5xl uppercase leading-none tracking-tight mb-12">Footwear</h1>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 xl:grid-cols-4">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <div style={{ marginTop: "clamp(64px,8vw,120px)" }}>
          <p className="mb-4 font-sans text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">Next Up</p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-tight mb-10">Coming Soon</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex flex-col gap-3">
              <div className="relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "3/4" }}>
                <img src="/images/coming-soon-kicks.jpg" alt="Radarskin Kicks" className="h-full w-full object-cover" />
              </div>
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em]">Radarskin Kicks</p>
              <span className="w-fit border border-[#ccc] px-[10px] py-1 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#999]">Notify Me</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
