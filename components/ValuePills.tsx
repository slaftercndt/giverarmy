import { BadgeCheck, Heart, BookOpen, Repeat } from "lucide-react";

/** Customer values surfaced as pills: Transparency · Impact · Story · Feedback Loop. */
const values = [
  { label: "Transparency", Icon: BadgeCheck },
  { label: "Impact", Icon: Heart },
  { label: "Story", Icon: BookOpen },
  { label: "Feedback Loop", Icon: Repeat },
];

export function ValuePills({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const onLight = tone === "light";
  return (
    <ul className="flex flex-wrap gap-3">
      {values.map((v) => (
        <li
          key={v.label}
          className={`inline-flex items-center gap-2 rounded-pill border px-4 py-2 text-sm font-semibold ${
            onLight
              ? "border-white/15 bg-white/5 text-cool-100"
              : "border-cool-200 bg-white text-slate-base"
          }`}
        >
          <v.Icon size={16} className="text-gold-base" aria-hidden />
          {v.label}
        </li>
      ))}
    </ul>
  );
}
