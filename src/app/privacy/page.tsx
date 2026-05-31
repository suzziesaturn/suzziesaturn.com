import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-5 py-16 sm:px-8 sm:py-24 max-w-3xl mx-auto">
        <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">Legal</p>
        <h1 className="font-display text-5xl uppercase leading-none tracking-tight mb-12">Privacy Policy</h1>
        <div className="flex flex-col gap-8 font-sans text-sm leading-relaxed text-black/70">
          <p>This Privacy Policy describes how suzziesaturn.com collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.</p>
          <section><h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Collecting Personal Information</h2><p>When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. This includes device information (browser version, IP address, time zone, cookies) and order information (name, billing/shipping address, payment info, email, phone number).</p></section>
          <section><h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Sharing Personal Information</h2><p>We share your Personal Information with service providers to help us provide our services. We may also share your information to comply with applicable laws and regulations or to respond to lawful requests.</p></section>
          <section><h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Behavioural Advertising</h2><p>We use your Personal Information to provide targeted advertisements. We use Google Analytics to understand how customers use the Site. You can opt out at <a href="https://tools.google.com/dlpage/gaoptout" className="underline text-black">tools.google.com/dlpage/gaoptout</a>. You can also opt out of Facebook ads at <a href="https://www.facebook.com/settings/?tab=ads" className="underline text-black">facebook.com/settings</a>.</p></section>
          <section><h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Cookies</h2><p>We use functional, performance, and advertising cookies to improve your browsing experience. You can control cookies through your browser settings, though disabling cookies may affect site functionality.</p></section>
          <section><h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">GDPR & CCPA</h2><p>If you are a resident of the EEA or California, you have the right to access, port, correct, update, or erase your Personal Information. To exercise these rights, contact us at the information below.</p></section>
          <section><h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Changes</h2><p>We may update this Privacy Policy from time to time. Last updated: 4/2/21.</p></section>
          <section><h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black">Contact</h2><p>SUZZIESATURN LLC, 6209 Roblynn Rd, Laurel MD 20707<br /><a href="mailto:coolemail@suzziesaturn.com" className="underline text-black">coolemail@suzziesaturn.com</a><br />(240) 581-8439</p></section>
        </div>
      </main>
      <Footer />
    </>
  );
}
