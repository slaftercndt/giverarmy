import Image from "next/image";
import { links } from "@/lib/links";

/**
 * Candid Platinum transparency seal, linked to the Candid profile.
 * Badge art: public/badges/candid-platinum-2025.png (official seal).
 * TODO (ops): point the link at the charity's Candid/GuideStar profile page
 * once that URL is confirmed; defaults to candid.org.
 */
export function CandidBadge({ size = 88 }: { size?: number }) {
  return (
    <a
      href={links.candid}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-fit items-center gap-3"
      aria-label="Candid Platinum Transparency 2025 — view profile"
    >
      <Image
        src="/badges/candid-platinum-2025.png"
        alt="Candid Platinum Transparency 2025 seal"
        width={size}
        height={size}
      />
      <span className="text-xs font-bold uppercase tracking-eyebrow text-slate-400">
        Platinum
        <br />
        Transparency
        <br />
        2025
      </span>
    </a>
  );
}
