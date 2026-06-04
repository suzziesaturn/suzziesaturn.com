import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import ComingSoon from "@/components/ComingSoon";
import ProductVideos from "@/components/ProductVideos";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-5 pt-16 pb-0 sm:px-8 sm:pt-24 sm:pb-0">
        <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">Shop</p>
        <h1 className="font-display text-5xl uppercase leading-none tracking-tight mb-12">All Products</h1>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 xl:grid-cols-4 items-start">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <ProductVideos videos={["DfIl2SOJYsU", "jtAun_S5ZWw", "FHfTwzLNTus", "tZC9CmNmZRw", "JxIC8XgPuck"]} />
        <div style={{ marginTop: "clamp(24px,3vw,40px)" }}>
          <ComingSoon />
        </div>
      </main>
      <Footer />
    </>
  );
}
