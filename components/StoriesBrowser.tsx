"use client";

import { useMemo, useState } from "react";
import { StoryCard } from "@/components/StoryCard";
import type { Story } from "@/lib/stories";

/** Filterable story index. Filtering is client-side over the seeded list. */
export function StoriesBrowser({ stories }: { stories: Story[] }) {
  const causes = useMemo(() => {
    const set = new Set(stories.map((s) => s.cause));
    return ["All", ...Array.from(set).sort()];
  }, [stories]);

  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? stories : stories.filter((s) => s.cause === active);

  return (
    <div>
      {/* Placeholder content notice (seed data is fictional) */}
      <p className="mb-6 rounded-lg border border-gold-tint bg-gold-tint3/50 px-4 py-3 text-sm text-slate-base">
        These are illustrative placeholder stories with fictional names and
        generated art. Real testimonies are published only with documented
        consent.
      </p>

      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter stories by cause"
      >
        {causes.map((cause) => {
          const isActive = active === cause;
          return (
            <button
              key={cause}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(cause)}
              className={`rounded-pill border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "border-slate-base bg-slate-base text-white"
                  : "border-cool-200 bg-white text-slate-base hover:border-gold-base hover:text-gold-deep"
              }`}
            >
              {cause}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-slate-400">No stories in this cause yet.</p>
      ) : null}
    </div>
  );
}
