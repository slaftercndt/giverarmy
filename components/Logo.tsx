import { site } from "@/lib/site";

type LogoProps = {
  /**
   * "light" for dark surfaces (gold/white logo), "dark" for light surfaces
   * (slate logo). Each maps to a file in /public/logos.
   */
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Giver Army horizontal lockup.
 *
 * Renders directly from the brand files in /public/logos so they can be swapped
 * without touching code: replace the SVGs below (keep the same filenames) and
 * the site picks them up automatically. A plain <img> is used so any aspect
 * ratio works and SVGs stay crisp (height is set by the caller's className,
 * width scales automatically).
 *
 *   variant="dark"  -> slate logo      (for light/cream surfaces: header)
 *   variant="light" -> gold/white logo (for slate surfaces: hero, footer)
 */
const LOGO_SRC: Record<"light" | "dark", string> = {
  dark: "/logos/giver-army-horizontal-slate.png",
  light: "/logos/giver-army-horizontal-gold.png",
};

export function Logo({ variant = "dark", className }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_SRC[variant]}
      alt={site.name}
      className={className}
      decoding="async"
    />
  );
}
