"use client";
import { useState } from "react";

export default function NotifyBtn({ product }: { product: string }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"done">("idle");

  async function handleNotify() {
    if (!email) return;
    setStatus("loading");
    await fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, product }),
    });
    setStatus("done");
  }

  if (status === "done") return <span className="w-fit border border-[#ccc] px-[10px] py-1 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#999]">You're on the list.</span>;
  if (!open) return <button onClick={() => setOpen(true)} className="w-fit border border-[#ccc] px-[10px] py-1 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#999] hover:border-black hover:text-black transition-colors">Notify Me</button>;
  return (
    <div className="flex border border-black">
      <input autoFocus type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && handleNotify()} className="min-w-0 flex-1 bg-transparent px-2 py-1 font-sans text-[9px] outline-none placeholder:text-black/30" />
      <button onClick={handleNotify} disabled={status === "loading"} className="shrink-0 bg-black px-2 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.15em] text-white hover:opacity-80 disabled:opacity-40">{status === "loading" ? "..." : "Go"}</button>
    </div>
  );
}
