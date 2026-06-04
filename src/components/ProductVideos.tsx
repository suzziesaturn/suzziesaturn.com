"use client";

interface ProductVideosProps {
  videos?: string[];
}

export default function ProductVideos({ videos }: ProductVideosProps) {
  if (!videos || videos.length === 0) return null;

  return (
    <section className="border-t border-[#eee]" style={{ marginTop: "clamp(24px,3vw,36px)", padding: "clamp(24px,3vw,40px) 0 clamp(16px,2vw,24px)" }}>
      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] opacity-40 mb-8" style={{ paddingLeft: "clamp(32px,5vw,64px)" }}>
        In The Wild
      </p>
      <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory" style={{ paddingLeft: "clamp(32px,5vw,64px)", paddingRight: "clamp(32px,5vw,64px)" }}>
        {videos.map((id) => (
          <div key={id} className="flex-shrink-0 snap-start" style={{ width: "min(560px, 80vw)" }}>
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="Product video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
