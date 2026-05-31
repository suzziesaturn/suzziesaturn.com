import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ShippingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-5 py-16 sm:px-8 sm:py-24 max-w-3xl mx-auto">
        <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">Info</p>
        <h1 className="font-display text-5xl uppercase leading-none tracking-tight mb-12">Shipping Policy</h1>
        <div className="flex flex-col gap-8 font-sans text-sm leading-relaxed text-black/70">
          <section>
            <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Processing Time</h2>
            <p>All orders are processed within 1–3 business days. Orders are not processed or shipped on weekends or holidays. You will receive a confirmation email with tracking information once your order ships.</p>
          </section>
          <section>
            <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Shipping Rates & Delivery</h2>
            <p>We currently ship within the United States. Standard shipping takes 3–5 business days. Free shipping is available on all orders over $75. Shipping costs are calculated at checkout for orders under $75.</p>
          </section>
          <section>
            <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Order Tracking</h2>
            <p>Once your order has shipped, you will receive an email with a tracking number. Please allow 24–48 hours for tracking information to update.</p>
          </section>
          <section>
            <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Lost or Damaged Packages</h2>
            <p>SUZZIESATURN is not responsible for lost or stolen packages. If your package arrives damaged, please contact us within 48 hours at coolemail@suzziesaturn.com with photos of the damage and your order number.</p>
          </section>
          <section>
            <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Contact</h2>
            <p>Questions about your order? Email us at <a href="mailto:coolemail@suzziesaturn.com" className="underline text-black">coolemail@suzziesaturn.com</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
