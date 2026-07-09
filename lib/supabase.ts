import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Read-only Supabase client for the shared GSGC project (nccijunvmyjyybnsbfyx)
 * — the same backend givesendgo.org uses.
 *
 * Credentials come ONLY from env (set in the Vercel dashboard):
 *   NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
 * Nothing is hardcoded or committed. If either is missing, the client is null
 * and every consumer falls back to clearly-marked placeholders instead of
 * crashing the build.
 *
 * RLS REQUIREMENTS (verified against pg_policies; do not loosen silently):
 *   - stats / stats_latest: anon SELECT exists (stats_read_all) — OK.
 *   - impact_stories: anon SELECT on published rows — OK.
 *   - gifts: NO anon read policy. The "Your gift, in motion" line needs a
 *     scoped policy or (better) a public view exposing only
 *     created_at/cause/city/region — until then the UI shows its placeholder.
 *   - members, testimonies: NO anon read; nothing on this site reads them.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase: SupabaseClient | null =
  url && anonKey
    ? createClient(url, anonKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;

/** How long (seconds) cached DB reads stay fresh. Stats scrape every ~30 min. */
export const DATA_REVALIDATE_SECONDS = 1800;
