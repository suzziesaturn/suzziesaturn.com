"use client";

interface ProductVideosProps {
  videos?: string[];
}

export default function ProductVideos({ videos }: ProductVideosProps) {
  if (!videos || videos.length === 0) return null;

  return (
    <section className="border-t border-[#eee]" style={{ padding: "clamp(24px,3vw,40px) clamp(32px,5vw,64px)" }}>
      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] opacity-40 mb-8">
        In The Wild
      </p>
      <div className={videos.length === 1 ? "grid grid-cols-1 max-w-2xl" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        {videos.map((id) => (
          <div key={id} className="relative w-full aspect-video bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title="Product video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
