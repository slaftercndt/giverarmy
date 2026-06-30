import type { Config } from "tailwindcss";

/**
 * Giver Army brand theme — 2026 brand guide tokens.
 *
 * Usage ratio is 60:30:10 — Slate dominant, Cream/neutral secondary, Gold accent.
 * Gold is an accent only (~10%); never a dominant surface.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core
        white: "#FFFFFF",

        // Slate ramp (dominant surface family)
        slate: {
          400: "#505A5D", // lighter
          300: "#6F797C",
          base: "#383F41", // base / dark slate gray — dominant surface
          deep: "#262A2B",
          ink: "#171B1C",
          black: "#090B0B",
        },

        // Gold ramp (accent only)
        gold: {
          bright: "#C4A34B",
          base: "#B38E3D", // accent / antique gold
          deep: "#9B7233",
          deeper: "#7D562B",
          // Soft fills / tints
          tint: "#E3D7A5",
          tint2: "#D2BC72",
          tint3: "#F0EBD1",
        },

        // Cream / warm neutrals (secondary 30%)
        cream: {
          warm: "#F9F7ED", // default page background
          DEFAULT: "#F2EFE9",
          paper: "#FAFAFA",
          neutral: "#F4F5F5",
        },

        // Cool neutrals
        cool: {
          100: "#E3E7E8",
          200: "#D3D8D9",
          400: "#9FA9AC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.035em",
        heading: "-0.02em",
        eyebrow: "0.22em",
      },
      lineHeight: {
        display: "1.03",
        body: "1.55",
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        card: "1rem",
        pill: "999px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(9, 11, 11, 0.04), 0 8px 24px rgba(9, 11, 11, 0.06)",
        lift: "0 12px 32px rgba(9, 11, 11, 0.16)",
        gold: "0 8px 28px rgba(179, 142, 61, 0.28)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(60% 60% at 50% 38%, rgba(196,163,75,0.32) 0%, rgba(196,163,75,0.10) 38%, rgba(38,42,43,0) 72%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
