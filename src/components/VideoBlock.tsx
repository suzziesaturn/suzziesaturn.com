export default function VideoBlock() {
  return (
    <div className="relative w-full bg-black" style={{ aspectRatio: "16/9" }}>
      <iframe
        src="https://www.youtube.com/embed/j8rJ1rpYBXg?autoplay=0&rel=0&modestbranding=1"
        title="SUZZIESATURN"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
