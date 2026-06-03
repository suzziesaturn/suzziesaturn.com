"use client";
import { useState } from "react";

const items = [
  { label: "Kicks", name: "Radarskin Kicks", img: "/images/coming-soon-kicks.jpg" },
  { label: "Denim Jacket", name: "Suzzie Denim", img: null },
  { label: "Crossbody", name: "Crossbody Bag", img: null },
  { label: "Duffle", name: "Suzzie Duffle", img: null },
];

function NotifyForm({ product }: { product: string }) {
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

  if (status === "done") return <p className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">You're on the list.</p>;

  return (
    <div className="flex border border-[#ccc]">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="min-w-0 flex-1 bg-transparent px-2 py-1 font-sans text-[9px] outline-none placeholder:uppercase placeholder:tracking-wide placeholder:text-black/30"
      />
      <button
        onClick={handleNotify}
        disabled={status === "loading"}
        className="shrink-0 bg-black px-2 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.15em] text-white hover:opacity-80 transition-opacity disabled:opacity-40"
      >
        {status === "loading" ? "..." : "Notify"}
      </button>
    </div>
  );
}

export default function ComingSoon() {
  return (
    <section className="bg-white" style={{ padding: "clamp(64px,8vw,120px) clamp(24px,5vw,72px)" }}>
      <div style={{ marginBottom: "clamp(40px,5vw,64px)" }}>
        <p className="font-sans font-semibold uppercase tracking-[0.35em] text-black opacity-50" style={{ fontSize: "clamp(10px,1.1vw,11px)", marginBottom: "12px" }}>Next Up</p>
        <h2 className="font-display font-black uppercase leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(36px,6vw,80px)" }}>Coming Soon</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: "clamp(12px,2vw,24px)" }}>
        {items.map((item) => (
          <div key={item.name} className="flex flex-col gap-3">
            <div className="relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "3/4" }}>
              {item.img ? (
                <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-[#bbb]">{item.label}</div>
              )}
            </div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em]">{item.name}</p>
            <NotifyForm product={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
