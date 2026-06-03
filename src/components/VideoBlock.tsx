"use client";
import { useState } from "react";

const VIDEOS = [
  "oCw7wWaZYz4",
  "j8rJ1rpYBXg",
  "q4BlN3q5wGY",
  "n2OhMBS6JpE",
];

export default function VideoBlock() {
  const [idx, setIdx] = useState(0);

  return (
    <div className="relative w-full bg-black">
      <div className="relative" style={{ aspectRatio: "16/9" }}>
        <iframe
          key={VIDEOS[idx]}
          src={`https://www.youtube.com/embed/${VIDEOS[idx]}?rel=0&modestbranding=1`}
          title="SUZZIESATURN"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <div className="flex items-center justify-between px-6 py-4 bg-black">
        <button
          onClick={() => setIdx(i => (i - 1 + VIDEOS.length) % VIDEOS.length)}
          className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
        >
          ← Prev
        </button>
        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
          {idx + 1} / {VIDEOS.length}
        </span>
        <button
          onClick={() => setIdx(i => (i + 1) % VIDEOS.length)}
          className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
