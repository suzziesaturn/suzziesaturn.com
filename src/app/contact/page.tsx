"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", orderNumber: "", message: "" });
  const [status, setStatus] = useState<"idle"|"loading"|"sent"|"error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("sent");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen px-5 py-16 sm:px-8 sm:py-24 max-w-3xl mx-auto">
        <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">Get In Touch</p>
        <h1 className="font-display text-5xl uppercase leading-none tracking-tight mb-4">Contact</h1>
        <p className="mb-12 font-sans text-sm text-black/60">Questions, feedback, or just want to talk? We'll get back to you within 1–2 business days.</p>
        {status === "sent" ? (
          <p className="font-display text-2xl italic">Message sent. We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-sans text-[10px] font-bold uppercase tracking-[0.2em]">Name</label>
              <input required type="text" placeholder="Your name" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} className="border border-black/20 px-4 py-3 font-sans text-sm outline-none focus:border-black transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-sans text-[10px] font-bold uppercase tracking-[0.2em]">Email</label>
              <input required type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} className="border border-black/20 px-4 py-3 font-sans text-sm outline-none focus:border-black transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-sans text-[10px] font-bold uppercase tracking-[0.2em]">Order Number (optional)</label>
              <input type="text" placeholder="#12345" value={form.orderNumber} onChange={e => setForm(f => ({...f, orderNumber: e.target.value}))} className="border border-black/20 px-4 py-3 font-sans text-sm outline-none focus:border-black transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-sans text-[10px] font-bold uppercase tracking-[0.2em]">Message</label>
              <textarea required rows={6} placeholder="What's on your mind?" value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))} className="border border-black/20 px-4 py-3 font-sans text-sm outline-none focus:border-black transition-colors resize-none" />
            </div>
            {status === "error" && <p className="font-sans text-xs text-red-600 uppercase tracking-wide">Something went wrong. Try again.</p>}
            <button type="submit" disabled={status === "loading"} className="bg-black text-white font-sans text-xs font-bold uppercase tracking-[0.25em] py-4 px-8 hover:opacity-80 transition-opacity w-fit disabled:opacity-40">
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
        <div className="mt-16 pt-12 border-t border-black/10 flex flex-col gap-3">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Direct Contact</p>
          <a href="mailto:coolemail@suzziesaturn.com" className="font-sans text-sm text-black hover:opacity-60 transition-opacity">coolemail@suzziesaturn.com</a>
          <a href="tel:2405818439" className="font-sans text-sm text-black hover:opacity-60 transition-opacity">(240) 581-8439</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
