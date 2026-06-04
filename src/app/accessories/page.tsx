import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import NotifyBtn from "@/components/NotifyBtn";
import ProductVideos from "@/components/ProductVideos";

export default function AccessoriesPage() {
  const filtered = products.filter(p => p.category === "Accessories");
  return (
    <>
      <Header />
      <main className="min-h-screen px-5 py-16 sm:px-8 sm:py-24">
        <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">Shop</p>
        <h1 className="font-display text-5xl uppercase leading-none tracking-tight mb-12">Accessories</h1>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 xl:grid-cols-4 items-start">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <ProductVideos videos={["DfIl2SOJYsU"]} />
        <div style={{ marginTop: "clamp(64px,8vw,120px)" }}>
          <p className="mb-4 font-sans text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">Next Up</p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-tight mb-10">Coming Soon</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex flex-col gap-3">
              <div className="group relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "3/4" }}>
                <img src="/images/suzzie-beanie-2.jpg" alt="Suzzie Beanie" className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                <img src="/images/suzzie-beanie-1.jpg" alt="Suzzie Beanie" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em]">Suzzie Beanie</p>
              <NotifyBtn product="Suzzie Beanie" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "3/4" }}>
                <img src="/images/suzzie-lighters-1.png" alt="Suzzie Lighters" className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                <img src="/images/suzzie-lighters-2.png" alt="Suzzie Lighters" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em]">Suzzie Lighters</p>
              <NotifyBtn product="Suzzie Lighters" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
