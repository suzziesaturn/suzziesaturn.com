export default function Editorial() {
  return (
    <div
      className="relative flex items-end overflow-hidden"
      style={{
        aspectRatio: "4/5",
        padding: "clamp(32px,5vw,64px)",
      }}
    >
      <img
        src="/images/editorial-1.jpg"
        alt="Editorial"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <p
        className="relative font-display italic font-normal leading-[1.3] text-white opacity-90 max-w-[480px]"
        style={{ fontSize: "clamp(18px,3vw,36px)" }}
      >
        &ldquo;Low profile. High taste.<br />Off the radar since 2017.&rdquo;
      </p>
    </div>
  );
}
