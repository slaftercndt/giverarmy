import { site } from "@/lib/site";

type LogoProps = {
  /** "light" for dark surfaces (gold wings + white figure), "dark" for light surfaces (slate wings + gold figure). */
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Giver Army horizontal lockup — winged emblem + stacked "GIVER ARMY" wordmark.
 *
 * Rendered as an inline SVG recreation of the brand mark (currentColor-free,
 * explicit theme colors) so it adapts to light/dark surfaces. Swap for the
 * official vector files when available — see /public/logos and the README.
 *
 * Light surfaces: slate wings, gold figure/arrow, slate burst + wordmark.
 * Dark surfaces:  gold wings, white figure/arrow, gold burst + wordmark.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  const dark = variant === "dark";
  const wing = dark ? "#383F41" : "#C4A34B";
  const figure = dark ? "#B38E3D" : "#FFFFFF";
  const burst = dark ? "#383F41" : "#C4A34B";
  const word = dark ? "#383F41" : "#C4A34B";

  return (
    <svg
      viewBox="0 0 540 150"
      className={className}
      role="img"
      aria-label={site.name}
      fill="none"
    >
      <EmblemMark wing={wing} figure={figure} burst={burst} />

      {/* Stacked wordmark */}
      <text
        x="300"
        y="68"
        fontFamily="var(--font-inter), Inter, sans-serif"
        fontWeight="800"
        fontSize="58"
        letterSpacing="1"
        fill={word}
      >
        GIVER
      </text>
      <text
        x="300"
        y="128"
        fontFamily="var(--font-inter), Inter, sans-serif"
        fontWeight="800"
        fontSize="58"
        letterSpacing="1"
        fill={word}
      >
        ARMY
      </text>
    </svg>
  );
}

/** The winged emblem only (no wordmark). Sits in a ~240×150 area. */
export function EmblemMark({
  wing,
  figure,
  burst,
  cx = 0,
}: {
  wing: string;
  figure: string;
  burst: string;
  cx?: number;
}) {
  // Left wing feathers — longest on top, tapering down toward the center.
  const left = [
    [18, 90, 20],
    [27, 86, 38],
    [36, 82, 56],
    [46, 78, 74],
    [58, 74, 92],
  ];
  // Right wing mirrors the left about x = 120.
  const mirror = (x: number) => 240 - x;

  return (
    <g transform={cx ? `translate(${cx} 0)` : undefined}>
      {/* Wings */}
      <g fill={wing}>
        {left.map(([x1, x2, y], i) => (
          <rect
            key={`l${i}`}
            x={x1}
            y={y}
            width={x2 - x1}
            height="9"
            rx="4.5"
          />
        ))}
        {left.map(([x1, x2, y], i) => (
          <rect
            key={`r${i}`}
            x={mirror(x2)}
            y={y}
            width={x2 - x1}
            height="9"
            rx="4.5"
          />
        ))}
      </g>

      {/* Burst — slate/gold rays around the right of the figure */}
      <g
        stroke={burst}
        strokeWidth="9"
        strokeLinecap="round"
      >
        <line x1="139" y1="30" x2="146" y2="18" />
        <line x1="151" y1="40" x2="162" y2="32" />
        <line x1="153" y1="58" x2="166" y2="58" />
        <line x1="151" y1="76" x2="162" y2="84" />
        <line x1="133" y1="84" x2="133" y2="100" />
        <line x1="139" y1="70" x2="148" y2="80" />
      </g>

      {/* Figure — gold/white head + forward chevron (a leaping giver) */}
      <g>
        <circle cx="118" cy="22" r="9" fill={figure} />
        <path
          d="M96 40 L124 58 L96 76"
          stroke={figure}
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M112 34 L104 56"
          stroke={figure}
          strokeWidth="11"
          strokeLinecap="round"
        />
      </g>
    </g>
  );
}
