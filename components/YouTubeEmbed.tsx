/** Privacy-friendly (nocookie) lazy YouTube embed in a 16:9 frame. */
export function YouTubeEmbed({
  id,
  title,
  className = "",
}: {
  id: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-card bg-slate-ink ${className}`}
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
