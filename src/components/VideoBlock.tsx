"use client";
import { useState } from "react";

const PLAYLIST_ID = "PLJRyJtlys_y0VRCxkCLSiRUlHy4EthJRh";
const FIRST_VIDEO = "q4BlN3q5wGY";

export default function VideoBlock() {
  const [showPlaylist, setShowPlaylist] = useState(false);

  return (
    <div className="relative w-full bg-black" style={{ aspectRatio: "16/9" }}>
      <iframe
        src={`https://www.youtube.com/embed/${showPlaylist ? `videoseries?list=${PLAYLIST_ID}` : `${FIRST_VIDEO}?rel=0&modestbranding=1`}`}
        title="SUZZIESATURN"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
      {!showPlaylist && (
        <button
          onClick={() => setShowPlaylist(true)}
          className="absolute bottom-4 right-4 bg-black/70 text-white font-sans text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 hover:bg-black transition-colors"
        >
          View Playlist →
        </button>
      )}
    </div>
  );
}
