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
      </main>
      <Footer />
    </>
  );
}
