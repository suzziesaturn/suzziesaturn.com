export default function VideoBlock() {
  return (
    <div
      className="group relative flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]"
      style={{ aspectRatio: "16/9", gap: "20px" }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 transition-all duration-200 group-hover:border-white group-hover:scale-105">
        <svg viewBox="0 0 24 24" fill="white" width="20" height="20" style={{ marginLeft: "3px" }}>
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </div>
      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-white opacity-40">
        Watch the Film
      </p>
      <p className="absolute bottom-6 font-sans text-[10px] uppercase tracking-[0.2em] text-[#333]">
        [ Brand film — drop video here ]
      </p>
    </div>
  );
}
