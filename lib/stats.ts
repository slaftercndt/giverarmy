import { supabase } from "@/lib/supabase";

/**
 * Homepage / impact metrics — sourced live from the shared GSGC database.
 * Reads the `stats_latest` view when present, falling back to the most recent
 * row of the `stats` table (both anon-readable under RLS).
 *
 * Metric rules:
 *  - Money labels say "given" (not "granted") per entity-separation rules.
 *  - Gift activity is counted in GIFTS, never dollars and never "givers."
 *  - Missing figures render as clearly-marked placeholders (—), never invented.
 */
export type Stat = {
  value: string;
  label: string;
  /** True when the figure is an unverified placeholder rather than live data. */
  placeholder: boolean;
};

type StatsRow = {
  total_raised_cents: number | null;
  month_raised_cents: number | null;
  gift_count: number | null;
  /** Monthly gift count — read from whichever field the view exposes. */
  month_gift_count: number | null;
  scraped_at: string | null;
};

function usd(cents: number | null | undefined): string {
  if (cents == null) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

function count(n: number | null | undefined): string {
  if (n == null) return "—";
  return new Intl.NumberFormat("en-US").format(n);
}

function toNumber(v: unknown): number | null {
  return typeof v === "number" && Number.isFinite(v) ? v : null;
}

function normalize(row: Record<string, unknown>): StatsRow {
  return {
    total_raised_cents: toNumber(row.total_raised_cents),
    month_raised_cents: toNumber(row.month_raised_cents),
    gift_count: toNumber(row.gift_count),
    month_gift_count:
      toNumber(row.month_gift_count) ??
      toNumber(row.gifts_this_month) ??
      toNumber(row.month_gifts) ??
      null,
    scraped_at: typeof row.scraped_at === "string" ? row.scraped_at : null,
  };
}

/**
 * Gifts this month, derived from the stats snapshot time-series:
 * latest gift_count minus the last snapshot before the current (UTC) month
 * began. Real data, not an estimate — the counter only ever increments.
 * Used when the stats_latest view exposes no monthly gift-count field.
 */
async function deriveMonthGiftCount(latest: StatsRow): Promise<number | null> {
  if (!supabase || latest.gift_count == null || !latest.scraped_at) return null;
  const asOf = new Date(latest.scraped_at);
  if (Number.isNaN(asOf.getTime())) return null;
  const monthStart = new Date(
    Date.UTC(asOf.getUTCFullYear(), asOf.getUTCMonth(), 1),
  ).toISOString();
  try {
    const { data, error } = await supabase
      .from("stats")
      .select("gift_count")
      .lt("scraped_at", monthStart)
      .order("scraped_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error || data?.gift_count == null) return null;
    const n = latest.gift_count - data.gift_count;
    return n >= 0 ? n : null;
  } catch {
    return null;
  }
}

async function latestStats(): Promise<StatsRow | null> {
  if (!supabase) return null;
  // Preferred: the stats_latest view.
  try {
    const { data, error } = await supabase
      .from("stats_latest")
      .select("*")
      .limit(1)
      .maybeSingle();
    if (!error && data) return normalize(data);
  } catch {
    /* fall through to the base table */
  }
  // Fallback: newest row of the stats table.
  try {
    const { data, error } = await supabase
      .from("stats")
      .select("*")
      .order("scraped_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error || !data) return null;
    return normalize(data);
  } catch {
    return null;
  }
}

async function publishedStoryCount(): Promise<number | null> {
  if (!supabase) return null;
  try {
    const { count: c, error } = await supabase
      .from("impact_stories")
      .select("id", { count: "exact", head: true })
      .eq("is_published", true);
    if (error) throw error;
    return c ?? null;
  } catch {
    return null;
  }
}

/** "Gifts this month · #x" — counts gifts, never dollars, never "givers." */
function giftsThisMonthStat(n: number | null): Stat {
  return {
    value: n != null ? `#${count(n)}` : "#—",
    label: "Gifts this month",
    placeholder: n == null,
  };
}

/** View field when present, else derived from the snapshot series. */
async function monthGiftCount(s: StatsRow | null): Promise<number | null> {
  if (!s) return null;
  return s.month_gift_count ?? (await deriveMonthGiftCount(s));
}

/** Live-stats strip on the homepage "Movement" section (4 stats). */
export async function getMovementStats(): Promise<Stat[]> {
  const s = await latestStats();
  const monthly = await monthGiftCount(s);
  const live = s != null;
  return [
    { value: usd(s?.total_raised_cents), label: "Total given", placeholder: !live },
    { value: count(s?.gift_count), label: "Total gifts", placeholder: !live },
    giftsThisMonthStat(monthly),
    { value: "12", label: "Cause categories", placeholder: false },
  ];
}

/** Larger metric grid on /impact (6 stats). */
export async function getImpactStats(): Promise<Stat[]> {
  const [s, storyCount] = await Promise.all([
    latestStats(),
    publishedStoryCount(),
  ]);
  const monthly = await monthGiftCount(s);
  const live = s != null;
  const avg =
    s?.total_raised_cents != null && s.gift_count
      ? usd(Math.round(s.total_raised_cents / s.gift_count))
      : "—";
  return [
    { value: usd(s?.total_raised_cents), label: "Total given", placeholder: !live },
    { value: count(s?.gift_count), label: "Total gifts", placeholder: !live },
    giftsThisMonthStat(monthly),
    { value: avg, label: "Average gift", placeholder: !live },
    {
      value: storyCount != null ? count(storyCount) : "—",
      label: "Stories published",
      placeholder: storyCount == null,
    },
    { value: "12", label: "Cause categories funded", placeholder: false },
  ];
}
