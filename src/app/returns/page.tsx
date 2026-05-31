import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-5 py-16 sm:px-8 sm:py-24 max-w-3xl mx-auto">
        <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">Info</p>
        <h1 className="font-display text-5xl uppercase leading-none tracking-tight mb-12">Returns & Refunds</h1>
        <div className="flex flex-col gap-8 font-sans text-sm leading-relaxed text-black/70">
          <section>
            <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Return Window</h2>
            <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can&apos;t offer you a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it, in its original packaging.</p>
          </section>
          <section>
            <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Non-Returnable Items</h2>
            <p>Gift cards and downloadable products cannot be returned. We do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases. To complete your return, we require a receipt or proof of purchase.</p>
          </section>
          <section>
            <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Refunds</h2>
            <p>Once your return is received and inspected, we will email you to notify you of the approval or rejection of your refund. If approved, your refund will be processed and applied to your original method of payment within a certain number of days.</p>
          </section>
          <section>
            <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Late or Missing Refunds</h2>
            <p>If you haven't received a refund yet, check your bank account, then contact your credit card company — it may take some time before your refund is officially posted. If you&apos;ve done all of this and still have not received your refund, contact us at <a href="mailto:coolemail@suzziesaturn.com" className="underline text-black">coolemail@suzziesaturn.com</a>.</p>
          </section>
          <section>
            <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Sale Items</h2>
            <p>Only regular priced items may be refunded. Sale items cannot be refunded.</p>
          </section>
          <section>
            <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Exchanges</h2>
            <p>We only replace items if they are defective or damaged. If you need to exchange an item, email us at <a href="mailto:coolemail@suzziesaturn.com" className="underline text-black">coolemail@suzziesaturn.com</a> and send your item to: 6209 Roblynn Rd, Laurel, Maryland 20707.</p>
          </section>
          <section>
            <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Return Shipping</h2>
            <p>You are responsible for paying your own return shipping costs. Shipping costs are non-refundable. For items over $75, we recommend using a trackable shipping service. We don&apos;t guarantee receipt of your returned item.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
