import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Editorial from "@/components/Editorial";
import BrandBlock from "@/components/BrandBlock";
import ReviewBlock from "@/components/ReviewBlock";
import VideoBlock from "@/components/VideoBlock";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <Editorial />
        <BrandBlock />
        <ReviewBlock />
        <VideoBlock />
        <ComingSoon />
      </main>
      <Footer />
    </>
  );
}
