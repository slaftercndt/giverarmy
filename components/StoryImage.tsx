import Image from "next/image";

/**
 * Renders a story image. Local assets (seed placeholders under /public) use
 * next/image; remote images from the database (YouTube thumbnails, poster URLs)
 * use a plain <img> so we don't need a host allowlist and stay resilient to any
 * source domain. Images are unoptimized at the edge anyway (see next.config).
 */
export function StoryImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const isLocal = src.startsWith("/");
  if (isLocal) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "(max-width: 1024px) 100vw, 33vw"}
        className={className}
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
}
