import NotifyBtn from "@/components/NotifyBtn";

const items = [
  { label: "Kicks", name: "Radarskin Kicks", img: "/images/coming-soon-kicks-2.jpg", hoverImg: "/images/coming-soon-kicks.jpg" },
  { label: "Denim Jacket", name: "Suzzie Denim", img: null, hoverImg: null },
  { label: "Crossbody", name: "Crossbody Bag", img: null, hoverImg: null },
  { label: "Duffle", name: "Suzzie Duffle", img: null, hoverImg: null },
];

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
            <div className="group relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "3/4" }}>
              {item.img ? (
                <>
                  <img src={item.img} alt={item.name} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                  {item.hoverImg && <img src={item.hoverImg} alt={item.name} className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />}
                </>
              ) : (
                <div className="flex h-full w-full items-center justify-center font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-[#bbb]">{item.label}</div>
              )}
            </div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em]">{item.name}</p>
            <NotifyBtn product={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
