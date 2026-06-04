import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import NotifyBtn from "@/components/NotifyBtn";
import ProductVideos from "@/components/ProductVideos";

export default function FootwearPage() {
  const filtered = products.filter(p => p.category === "Footwear");
  return (
    <>
      <Header />
      <main className="min-h-screen px-5 py-16 sm:px-8 sm:py-24">
        <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">Shop</p>
        <h1 className="font-display text-5xl uppercase leading-none tracking-tight mb-12">Footwear</h1>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 xl:grid-cols-4 items-start">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <ProductVideos videos={["tZC9CmNmZRw"]} />
        <div style={{ marginTop: "clamp(24px,3vw,40px)" }}>
          <p className="mb-4 font-sans text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">Next Up</p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-tight mb-10">Coming Soon</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex flex-col gap-3">
              <div className="group relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "3/4" }}>
                <img src="/images/coming-soon-kicks-2.jpg" alt="Radarskin Kicks" className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                <img src="/images/coming-soon-kicks.jpg" alt="Radarskin Kicks" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em]">Radarskin Kicks</p>
              <NotifyBtn product="Radarskin Kicks" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="group relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "3/4" }}>
                <img src="/images/radarskin-socks-1.jpg" alt="Radarskin Socks" className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                <img src="/images/radarskin-socks-2.jpg" alt="Radarskin Socks" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em]">Radarskin Socks</p>
              <NotifyBtn product="Radarskin Socks" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
