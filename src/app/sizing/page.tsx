import Header from "@/components/Header";
import Footer from "@/components/Footer";

const slideSizes = [
  { eu: "36", usM: "5", usW: "7", uk: "4" },
  { eu: "40", usM: "8", usW: "10", uk: "7" },
  { eu: "41", usM: "8.5", usW: "10.5", uk: "7.5" },
  { eu: "43", usM: "9.5", usW: "11.5", uk: "8.5" },
  { eu: "44", usM: "10", usW: "12", uk: "9" },
  { eu: "45", usM: "10.5", usW: "12.5", uk: "9.5" },
  { eu: "46", usM: "11", usW: "13", uk: "10" },
  { eu: "47", usM: "11.5", usW: "13.5", uk: "11" },
];

export default function SizingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-5 py-16 sm:px-8 sm:py-24 max-w-3xl mx-auto">
        <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">Info</p>
        <h1 className="font-display text-5xl uppercase leading-none tracking-tight mb-4">Size Guide</h1>
        <p className="mb-12 font-sans text-sm text-black/60">All slides are unisex. If you're between sizes, size up.</p>
        <div className="mb-8">
          <h2 className="mb-6 font-sans text-xs font-bold uppercase tracking-[0.2em]">Radarskin Slides</h2>
          <div className="overflow-x-auto">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b border-black">
                  <th className="pb-3 text-left text-[10px] font-bold uppercase tracking-[0.2em]">EU</th>
                  <th className="pb-3 text-left text-[10px] font-bold uppercase tracking-[0.2em]">US Men's</th>
                  <th className="pb-3 text-left text-[10px] font-bold uppercase tracking-[0.2em]">US Women's</th>
                  <th className="pb-3 text-left text-[10px] font-bold uppercase tracking-[0.2em]">UK</th>
                </tr>
              </thead>
              <tbody>
                {slideSizes.map((s) => (
                  <tr key={s.eu} className="border-b border-black/10">
                    <td className="py-3 text-black/70">{s.eu}</td>
                    <td className="py-3 text-black/70">{s.usM}</td>
                    <td className="py-3 text-black/70">{s.usW}</td>
                    <td className="py-3 text-black/70">{s.uk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="font-sans text-xs text-black/40">Still unsure about your size? Email us at <a href="mailto:coolemail@suzziesaturn.com" className="underline text-black">coolemail@suzziesaturn.com</a>.</p>
      </main>
      <Footer />
    </>
  );
}
