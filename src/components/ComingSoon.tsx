const items = [
  { label: "Kicks", name: "Radarskin Kicks" },
  { label: "Denim Jacket", name: "Suzzie Denim" },
  { label: "Crossbody", name: "Crossbody Bag" },
  { label: "Duffle", name: "Suzzie Duffle" },
];

export default function ComingSoon() {
  return (
    <section className="bg-white" style={{ padding: "clamp(64px,8vw,120px) clamp(24px,5vw,72px)" }}>
      <div style={{ marginBottom: "clamp(40px,5vw,64px)" }}>
        <p className="font-sans font-semibold uppercase tracking-[0.35em] text-black opacity-50" style={{ fontSize: "clamp(10px,1.1vw,11px)", marginBottom: "12px" }}>
          Next Up
        </p>
        <h2 className="font-display font-black uppercase leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(36px,6vw,80px)" }}>
          Coming Soon
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: "clamp(12px,2vw,24px)" }}>
        {items.map((item) => (
          <div key={item.name} className="flex flex-col gap-3">
            <div className="flex items-center justify-center bg-[#f0f0f0] font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-[#bbb]" style={{ aspectRatio: "3/4" }}>
              {item.label}
            </div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em]">{item.name}</p>
            <span className="w-fit border border-[#ccc] px-[10px] py-1 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#999]">
              Notify Me
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
