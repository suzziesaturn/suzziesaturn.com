export default function ReviewBlock() {
  return (
    <section className="flex flex-col items-center text-center bg-white" style={{ padding: "clamp(64px,8vw,100px) clamp(24px,5vw,72px)", gap: "20px" }}>
      <p className="font-display italic font-bold leading-[1.15] tracking-[-0.01em] max-w-[720px]" style={{ fontSize: "clamp(22px,4vw,48px)" }}>
        &ldquo;I wear it every time I need to feel like myself.&rdquo;
      </p>
      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] opacity-40">
        — Customer, Washington DC
      </p>
    </section>
  );
}
