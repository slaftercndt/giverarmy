import { createClient } from "@supabase/supabase-js";

/**
 * Read-only Supabase client for the shared GiveSendGo Charities database
 * (the same project that backs givesendgo.org).
 *
 * This uses the **publishable / anon** key, which is safe to ship publicly:
 * access is governed by Row Level Security. Only `stats` and `impact_stories`
 * (published rows) are exposed for public read — verified against pg_policies.
 * No service-role key is used or needed here.
 *
 * The URL + publishable key fall back to the known public values so the site
 * renders live data even before env vars are configured. Override per
 * environment with NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY.
 */
// Use `||` (not `??`) so an empty-string env var also falls back to the
// known-public defaults rather than producing a broken client.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://nccijunvmyjyybnsbfyx.supabase.co";

// Legacy anon JWT — broadly compatible with the PostgREST data API. Public by
// design (RLS-enforced); only `stats` and published `impact_stories` are
// anon-readable.
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jY2lqdW52bXlqeXlibnNiZnl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2OTY0MTAsImV4cCI6MjA5MjI3MjQxMH0.FvqeQQ9iTDR8iOEjq4izS9KiOSJDoxYPmYCskAd1t1Q";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

/** How long (seconds) cached DB reads stay fresh. Stats scrape every ~30 min. */
export const DATA_REVALIDATE_SECONDS = 1800;
