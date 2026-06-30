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
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://nccijunvmyjyybnsbfyx.supabase.co";

const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "sb_publishable_6REix7uT6ZVz2oFDlMVqAQ_psCCZWBz";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

/** How long (seconds) cached DB reads stay fresh. Stats scrape every ~30 min. */
export const DATA_REVALIDATE_SECONDS = 1800;
