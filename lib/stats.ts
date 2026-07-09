import { supabase } from "@/lib/supabase";

/**
 * Homepage / impact metrics — now sourced live from the shared GiveSendGo
 * Charities database (`public.stats`, the same table the .org reads).
 *
 * `stats` is a scraped time-series; we read the most recent row. Money columns
 * are stored in cents. If the live read fails, we fall back to clearly-marked
 * placeholders so the page never breaks.
 *
 * Labels reflect money *given through GiveSendGo* (not "granted"), to stay
 * accurate and within the entity-separation rules (see brief §2).
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
  scraped_at: string;
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

async function latestStats(): Promise<StatsRow | null> {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from("stats")
      .select("total_raised_cents, month_raised_cents, gift_count, scraped_at")
      .order("scraped_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) throw error;
    return data;
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

/** Live-stats strip on the homepage "Movement" section (4 stats). */
export async function getMovementStats(): Promise<Stat[]> {
  const s = await latestStats();
  const live = s != null;
  return [
    { value: usd(s?.total_raised_cents), label: "Total given", placeholder: !live },
    {
      value: count(s?.gift_count),
      label: "Gifts fueled by givers",
      placeholder: !live,
    },
    { value: usd(s?.month_raised_cents), label: "Given this month", placeholder: !live },
    { value: "12", label: "Cause categories", placeholder: false },
  ];
}

/** Larger metric grid on /impact (6 stats). */
export async function getImpactStats(): Promise<Stat[]> {
  const [s, storyCount] = await Promise.all([
    latestStats(),
    publishedStoryCount(),
  ]);
  const live = s != null;
  const avg =
    s?.total_raised_cents != null && s.gift_count
      ? usd(Math.round(s.total_raised_cents / s.gift_count))
      : "—";
  return [
    { value: usd(s?.total_raised_cents), label: "Total given", placeholder: !live },
    {
      value: count(s?.gift_count),
      label: "Gifts fueled by givers",
      placeholder: !live,
    },
    { value: usd(s?.month_raised_cents), label: "Given this month", placeholder: !live },
    { value: avg, label: "Average gift", placeholder: !live },
    {
      value: storyCount != null ? count(storyCount) : "—",
      label: "Stories published",
      placeholder: storyCount == null,
    },
    { value: "12", label: "Cause categories funded", placeholder: false },
  ];
}
