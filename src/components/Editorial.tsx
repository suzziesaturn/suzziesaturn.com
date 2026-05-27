export default function Editorial() {
  return (
    <div className="relative overflow-hidden bg-[#111]" style={{ aspectRatio: "16/7", padding: "clamp(32px,5vw,64px)" }}>
      <div className="absolute inset-0 flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#444]">
        [ Editorial Photo — Drop Campaign ]
      </div>
      <p className="relative font-display italic font-normal leading-[1.3] text-white opacity-70 max-w-[480px]" style={{ fontSize: "clamp(18px,3vw,36px)" }}>
        &ldquo;Low profile. High taste.<br />Off the radar since 2017.&rdquo;
      </p>
    </div>
  );
}
