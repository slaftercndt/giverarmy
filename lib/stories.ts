import { supabase } from "@/lib/supabase";
import { ANCHOR_STORY_SLUG } from "@/lib/content";

/**
 * Story library — sourced live from the shared GiveSendGo Charities database
 * (`public.impact_stories`, published rows only, the same content the .org
 * surfaces). These are real, consent-on-file, published testimonies.
 *
 * If the live read fails or returns nothing, we fall back to the clearly
 * fictional seed stories below so the Stories pillar never renders empty.
 */
export type Story = {
  slug: string;
  title: string;
  teaser: string;
  body: string[];
  /** Cause/fund label shown as the tag. */
  cause: string;
  image: string;
  imageAlt: string;
  consentConfirmed: boolean;
  /** True only for the fictional seed fallbacks. */
  placeholder: boolean;
  // Rich fields from impact_stories (optional)
  subtitle?: string | null;
  recipientName?: string | null;
  location?: string | null;
  videoUrl?: string | null;
  pullQuote?: string | null;
  pullQuoteAttribution?: string | null;
  isFeatured?: boolean;
};

type ImpactStoryRow = {
  slug: string;
  title: string;
  subtitle: string | null;
  recipient_name: string | null;
  location: string | null;
  fund: string | null;
  tag: string | null;
  video_url: string | null;
  poster_url: string | null;
  pull_quote: string | null;
  pull_quote_attribution: string | null;
  body: string | null;
  is_published: boolean;
  is_featured: boolean;
  sort_order: number;
  published_at: string | null;
};

const STORY_COLUMNS =
  "slug, title, subtitle, recipient_name, location, fund, tag, video_url, poster_url, pull_quote, pull_quote_attribution, body, is_published, is_featured, sort_order, published_at";

/** Pull a YouTube video id from youtu.be / watch?v= / embed URLs. */
export function youTubeId(url: string | null | undefined): string | null {
  if (!url) return null;
  const m = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/,
  );
  return m ? m[1] : null;
}

function storyImage(row: ImpactStoryRow): string {
  if (row.poster_url) return row.poster_url;
  const id = youTubeId(row.video_url);
  if (id) return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  return "/stories/placeholder-1.svg";
}

function paragraphs(body: string | null): string[] {
  if (!body) return [];
  const parts = body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  return parts.length ? parts : [body.trim()];
}

function mapRow(row: ImpactStoryRow): Story {
  return {
    slug: row.slug,
    title: row.title,
    teaser: row.subtitle ?? row.pull_quote ?? paragraphs(row.body)[0] ?? "",
    body: paragraphs(row.body),
    cause: row.fund ?? row.tag ?? "Giver Army",
    image: storyImage(row),
    imageAlt: row.title,
    consentConfirmed: true,
    placeholder: false,
    subtitle: row.subtitle,
    recipientName: row.recipient_name,
    location: row.location,
    videoUrl: row.video_url,
    pullQuote: row.pull_quote,
    pullQuoteAttribution: row.pull_quote_attribution,
    isFeatured: row.is_featured,
  };
}

/** All published stories — anchor first, then featured, then sort order. */
export async function getStories(): Promise<Story[]> {
  try {
    const { data, error } = await supabase
      .from("impact_stories")
      .select(STORY_COLUMNS)
      .eq("is_published", true)
      .order("is_featured", { ascending: false })
      .order("sort_order", { ascending: true })
      .order("published_at", { ascending: false });
    if (error) throw error;
    if (!data || data.length === 0) return seedStories;
    const mapped = (data as ImpactStoryRow[]).map(mapRow);
    // Pin the anchor story to the front (stable for everything else).
    return mapped
      .map((s, i) => ({ s, i }))
      .sort(
        (a, b) =>
          (a.s.slug === ANCHOR_STORY_SLUG ? -1 : 0) -
            (b.s.slug === ANCHOR_STORY_SLUG ? -1 : 0) || a.i - b.i,
      )
      .map(({ s }) => s);
  } catch {
    return seedStories;
  }
}

/** Split the library into the anchor (lead) story and the rest. */
export async function getAnchorAndRest(): Promise<{
  anchor: Story | null;
  rest: Story[];
}> {
  const all = await getStories();
  if (all.length === 0) return { anchor: null, rest: [] };
  const anchor = all.find((s) => s.slug === ANCHOR_STORY_SLUG) ?? all[0];
  const rest = all.filter((s) => s.slug !== anchor.slug);
  return { anchor, rest };
}

export async function getStory(slug: string): Promise<Story | undefined> {
  const all = await getStories();
  return all.find((s) => s.slug === slug);
}

export async function relatedStories(slug: string, limit = 2): Promise<Story[]> {
  const all = await getStories();
  const current = all.find((s) => s.slug === slug);
  if (!current) return all.slice(0, limit);
  const sameCause = all.filter((s) => s.slug !== slug && s.cause === current.cause);
  const others = all.filter((s) => s.slug !== slug && s.cause !== current.cause);
  return [...sameCause, ...others].slice(0, limit);
}

/* ------------------------------------------------------------------ */
/* Fallback seed stories — clearly fictional. Only used if the live    */
/* read fails. Invented names, generated SVG art, consent NOT on file. */
/* ------------------------------------------------------------------ */
const seedStories: Story[] = [
  {
    slug: "a-roof-before-winter",
    title: "A roof before winter",
    teaser:
      "A single mother in a rural county had no network to call on when the storm took her home. The crowd showed up.",
    body: [
      "When the storm passed through, it left more than debris. For one mother of three in a rural county, it took the roof over the only home she had ever owned — and she had no one to call.",
      "She is exactly who this movement exists for: someone facing the hardest moment of her life with no crowd behind her.",
      "Then the Army showed up. Gifts from givers she will never meet funded emergency repairs and shelter before the first freeze.",
    ],
    cause: "Crisis Response",
    image: "/stories/placeholder-1.svg",
    imageAlt: "Illustrative placeholder artwork for a Crisis Response story.",
    consentConfirmed: false,
    placeholder: true,
  },
  {
    slug: "the-bill-that-almost-broke-them",
    title: "The bill that almost broke them",
    teaser:
      "An unavoidable diagnosis came with an unpayable bill. A crowd of givers stood in the gap.",
    body: [
      "The diagnosis was unavoidable. The bill that followed was not survivable on one income.",
      "Givers across the Army funded the gap. The treatment continued. The family stayed in their home.",
    ],
    cause: "Medical Relief",
    image: "/stories/placeholder-2.svg",
    imageAlt: "Illustrative placeholder artwork for a Medical Relief story.",
    consentConfirmed: false,
    placeholder: true,
  },
  {
    slug: "lights-back-on",
    title: "The lights back on",
    teaser:
      "Behind on utilities and out of options, an elderly couple found a crowd that refused to let them go dark.",
    body: [
      "An elderly couple on a fixed income fell behind on utilities after an unexpected expense. The shutoff notice came with no one to turn to.",
      "Givers stepped in. The lights stayed on.",
    ],
    cause: "Essential for Life",
    image: "/stories/placeholder-4.svg",
    imageAlt: "Illustrative placeholder artwork for an Essential for Life story.",
    consentConfirmed: false,
    placeholder: true,
  },
];
