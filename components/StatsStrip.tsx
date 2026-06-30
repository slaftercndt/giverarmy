import type { Stat } from "@/lib/stats";

/** A row/grid of placeholder metrics. Marks unset figures clearly. */
export function StatsStrip({
  stats,
  tone = "light",
  columns = 4,
}: {
  stats: Stat[];
  tone?: "light" | "dark";
  columns?: 3 | 4 | 6;
}) {
  const valueColor = tone === "light" ? "text-white" : "text-slate-ink";
  const labelColor = tone === "light" ? "text-cool-400" : "text-slate-400";
  const divide = tone === "light" ? "divide-white/10" : "divide-cool-100";
  const colClass =
    columns === 6
      ? "sm:grid-cols-3 lg:grid-cols-6"
      : columns === 3
        ? "sm:grid-cols-3"
        : "grid-cols-2 lg:grid-cols-4";

  return (
    <dl
      className={`grid ${colClass} gap-px overflow-hidden rounded-card ${divide}`}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`px-5 py-6 ${tone === "light" ? "bg-slate-deep" : "bg-cream-paper"}`}
        >
          <dt
            className={`display text-4xl sm:text-5xl ${valueColor}`}
            aria-label={stat.value === "—" ? "Coming soon" : undefined}
          >
            {stat.value}
          </dt>
          <dd className={`mt-2 text-sm ${labelColor}`}>{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}
