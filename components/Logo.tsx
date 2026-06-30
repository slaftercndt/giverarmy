import { site } from "@/lib/site";

type LogoProps = {
  /** "light" for dark surfaces (gold + white), "dark" for light surfaces (slate). */
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Giver Army horizontal lockup — winged emblem + wordmark.
 *
 * Rendered inline (currentColor-aware) for crispness and theme control. The
 * standalone brand files live in /public/logos and are placeholders to be
 * swapped for the official assets (see README).
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  const wordmark = variant === "light" ? "#FFFFFF" : "#383F41";
  const emblem = variant === "light" ? "#C4A34B" : "#383F41";
  const armyAccent = "#B38E3D";
  const armyColor = variant === "light" ? "#C4A34B" : armyAccent;

  return (
    <svg
      viewBox="0 0 300 64"
      className={className}
      role="img"
      aria-label={site.name}
    >
      <g fill={emblem}>
        <path d="M40 14 L46 30 L40 50 L34 30 Z" />
        <path
          d="M48 26 C 60 20 70 22 78 30 C 68 33 58 32 50 36 Z"
          opacity="0.95"
        />
        <path
          d="M48 34 C 58 30 66 31 72 37 C 64 39 56 39 50 42 Z"
          opacity="0.7"
        />
        <path
          d="M32 26 C 20 20 10 22 2 30 C 12 33 22 32 30 36 Z"
          opacity="0.95"
        />
        <path
          d="M32 34 C 22 30 14 31 8 37 C 16 39 24 39 30 42 Z"
          opacity="0.7"
        />
      </g>
      <text
        x="92"
        y="40"
        fontFamily="var(--font-inter), Inter, sans-serif"
        fontWeight="900"
        fontSize="26"
        letterSpacing="-0.5"
        fill={wordmark}
      >
        GIVER
      </text>
      <text
        x="180"
        y="40"
        fontFamily="var(--font-inter), Inter, sans-serif"
        fontWeight="500"
        fontSize="26"
        letterSpacing="2"
        fill={armyColor}
      >
        ARMY
      </text>
    </svg>
  );
}
