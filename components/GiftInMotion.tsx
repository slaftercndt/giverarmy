"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

/**
 * "Your gift, in motion" — one quiet live line dramatizing the feedback loop.
 *
 * Data strategy (RLS-aware, never fabricates):
 *  1. Latest gift row from `gifts` (created_at desc) for cause/place color.
 *     NOTE: `gifts` currently has NO anon-read policy, so this read fails
 *     silently until a scoped policy or public view is added — flagged in the
 *     Block 0 notes. The line degrades gracefully.
 *  2. Gift number from `stats_latest` (fallback `stats`) gift_count — the
 *     ordinal of the most recent gift.
 *  3. Nothing readable → clearly-marked placeholder ("Gift #—").
 *
 * Refreshes every ~30s with a quiet opacity fade — no flashing.
 */
const POLL_MS = 30_000;

type LineState = { text: string; live: boolean };

const PLACEHOLDER: LineState = {
  text: "Gift #— · the next gift in motion could be yours.",
  live: false,
};

function fmt(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

async function fetchLine(): Promise<LineState> {
  if (!supabase) return PLACEHOLDER;

  // Gift number — the count of gifts to date (anon-readable).
  let giftNumber: number | null = null;
  try {
    const { data } = await supabase
      .from("stats_latest")
      .select("gift_count")
      .limit(1)
      .maybeSingle();
    giftNumber = data?.gift_count ?? null;
  } catch {
    /* try base table */
  }
  if (giftNumber == null) {
    try {
      const { data } = await supabase
        .from("stats")
        .select("gift_count")
        .order("scraped_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      giftNumber = data?.gift_count ?? null;
    } catch {
      /* stay null */
    }
  }

  // Latest gift row for place color (expected to fail until RLS allows it).
  let place: string | null = null;
  try {
    const { data, error } = await supabase
      .from("gifts")
      .select("created_at, city, region")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (!error && data) {
      place = [data.city, data.region].filter(Boolean).join(", ") || null;
    }
  } catch {
    /* RLS closed — expected */
  }

  if (giftNumber == null) return PLACEHOLDER;

  if (place) {
    return { text: `Gift #${fmt(giftNumber)} just funded relief in ${place}.`, live: true };
  }
  // Generic warm line when cause/place is unavailable.
  return {
    text: `Gift #${fmt(giftNumber)} is in motion — a crowd showing up for the crowdless.`,
    live: true,
  };
}

export function GiftInMotion() {
  const [line, setLine] = useState<LineState>(PLACEHOLDER);
  const [visible, setVisible] = useState(true);
  const current = useRef(PLACEHOLDER.text);

  useEffect(() => {
    let cancelled = false;

    async function tick() {
      const next = await fetchLine();
      if (cancelled || next.text === current.current) return;
      // Quiet fade: out, swap, in.
      setVisible(false);
      window.setTimeout(() => {
        if (cancelled) return;
        current.current = next.text;
        setLine(next);
        setVisible(true);
      }, 400);
    }

    tick();
    const id = window.setInterval(tick, POLL_MS);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  return (
    <div className="bg-slate-ink py-5">
      <p
        aria-live="polite"
        className={`container-page text-center text-sm font-semibold tracking-wide text-gold-bright transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span
          className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold-base align-middle"
          aria-hidden
        />
        {line.text}
      </p>
    </div>
  );
}
