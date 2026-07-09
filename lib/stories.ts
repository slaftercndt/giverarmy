/**
 * Story library — curated, real video testimonies.
 *
 * Two stories have full on-site pages (embedded video + narrative); Rachel's is
 * a video that links straight to YouTube. Order matters: the first entry is the
 * anchor (lead) story. Edit here to change content or lineup.
 */
export type StoryStat = { value: string; label: string; detail: string };

export type Story = {
  slug: string;
  /** Title shown on cards. */
  title: string;
  teaser: string;
  /** Cause/fund label shown as the tag. "" hides the badge. */
  cause: string;
  image: string;
  imageAlt: string;
  videoUrl?: string | null;
  recipientName?: string | null;
  location?: string | null;
  pullQuote?: string | null;
  /** Where the card links. Internal (/stories/<slug>) unless `external`. */
  href: string;
  external: boolean;
  /** Full on-site page content. Omitted for external-only stories. */
  page?: {
    kicker: string;
    title: string;
    pullQuote: string;
    pullQuoteAttribution: string;
    recipientLine?: string;
    bodyHeading: string;
    body: string[];
    arc?: StoryStat[];
  };
};

/** Pull a YouTube video id from youtu.be / watch?v= / embed URLs. */
export function youTubeId(url: string | null | undefined): string | null {
  if (!url) return null;
  const m = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/,
  );
  return m ? m[1] : null;
}

const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const featuredStories: Story[] = [
  {
    // Anchor story
    slug: "operation-shelter",
    title: "Operation Shelter · Hurricane Helene",
    teaser:
      "A man at the end of his resources turned to the internet and asked for help. $500,000+ later, lives were saved and homes are still being rebuilt in western North Carolina.",
    cause: "Hurricane Relief",
    image: ytThumb("YMluJ6SddNQ"),
    imageAlt: "Operation Shelter — Hurricane Helene relief",
    videoUrl: "https://youtu.be/YMluJ6SddNQ",
    recipientName: "Shawn Hendrix",
    location: "Western North Carolina",
    pullQuote:
      "If it wasn't for GiveSendGo, people would have died up there. Heat, food, shelter — you guys saved lives. End of story. And I saw it with my own eyes.",
    href: "/stories/operation-shelter",
    external: false,
    page: {
      kicker: "Impact Report · Hurricane Helene",
      title: "Operation Shelter.",
      pullQuote:
        "If it wasn't for GiveSendGo, people would have died up there. Heat, food, shelter — you guys saved lives. End of story. And I saw it with my own eyes.",
      pullQuoteAttribution: "Shawn Hendrix · Here We Grow / Operation Shelter",
      recipientLine: "Shawn Hendrix · Founder, Here We Grow (Operation Shelter)",
      bodyHeading:
        "A man at the end of his resources — and the network that arrived.",
      body: [
        "Shawn Hendrix was on the ground in western North Carolina after Hurricane Helene tore through the region. He'd been pouring personal money into the relief effort for weeks. The work was relentless. Communities were cut off — no power, no water, no way out.",
        "He'd run out of money. He was ready to quit.",
        "Then conviction hit: he was trying to carry it alone. So he did what felt impossible — he turned to the internet, told the truth about what he was seeing, and asked for help. He used GiveSendGo to collect it.",
        "The response was a half million dollars.",
        "That money became heat in subfreezing temperatures. Food where the supply chain had broken. Shelter for families whose homes had been swept away. And it didn't stop at emergency relief — Shawn's ministry, Here We Grow (operating as Operation Shelter), kept going. They're still rebuilding homes today. Still fighting the poverty that predated the storm and was made catastrophic by it.",
        "The region fell out of the news cycle when the LA wildfires broke out. The need didn't.",
      ],
    },
  },
  {
    slug: "steve-and-dawn",
    title: "Help and hope go hand in hand.",
    teaser:
      "A pastor, a leader, an athlete — then a single mosquito bite. What it took, and the crowd that showed up.",
    cause: "Care & Relief",
    image: ytThumb("pt4arA83iII"),
    imageAlt: "Steve & Dawn Matthews",
    videoUrl: "https://youtu.be/pt4arA83iII",
    recipientName: "Steve & Dawn Matthews",
    location: "Giver Army monthly update",
    pullQuote:
      "Imagine being bitten by a mosquito, getting really sick, and waking up three weeks later without an arm or two legs. That's what happened to Steve Matthews — and it became a message of hope for so many.",
    href: "/stories/steve-and-dawn",
    external: false,
    page: {
      kicker: "Giver Army monthly update · June 2026",
      title: "Help and hope go hand in hand.",
      pullQuote:
        "Imagine being bitten by a mosquito, getting really sick, and waking up three weeks later without an arm or two legs. That's what happened to Steve Matthews — and it became a message of hope for so many.",
      pullQuoteAttribution: "Giver Army monthly update · June 2026",
      bodyHeading: "A pastor. A bite. A movement that showed up.",
      body: [
        "Steve Matthews was a pastor. A leader. An athlete. Then a single mosquito bite landed him in the hospital.",
        "He woke up three weeks later. He had lost an arm. He had lost both legs.",
        "For most people, that would be the end of the story.",
        "For Steve and his wife Dawn, it became a message of hope for thousands.",
        "When the crisis came, the Giver Army was already there — believers across the country giving small monthly gifts into one shared mission. GiveSendGo Charities was able to come alongside Steve and Dawn with real, tangible help: resources for a vehicle, resources for limb replacement, and resources for the practical day-to-day costs that follow a life-altering crisis.",
        "The pressure those things had been carrying — moved off their shoulders.",
        "What's left is freedom. Freedom to keep pursuing what God has placed in front of them in this season. Freedom to keep being who they've always been — people of hope, now also people of help. Both, together.",
        "This is what the Giver Army exists to do. Be a crowd for the crowdless. Meet urgent need with both hope and help.",
        "And now: imagine if there were ten times more of us. A hundred times. A thousand. How many more lives like Steve and Dawn's could we reach? How many more stories could turn the corner from crisis into testimony?",
      ],
      arc: [
        {
          value: "1",
          label: "Mosquito bite",
          detail: "A single bite. Everything changed.",
        },
        {
          value: "3 weeks",
          label: "Unconscious",
          detail: "From the bite to waking up.",
        },
        {
          value: "3 limbs",
          label: "Arm + both legs",
          detail: "What Steve lost. What he didn't lose: his calling.",
        },
        {
          value: "10× → 1,000×",
          label: "Imagine the crowd",
          detail: "How many more like Steve could we reach together?",
        },
      ],
    },
  },
  {
    slug: "rachels-story",
    title: "Rachel's Story",
    teaser: "Watch Rachel's story.",
    cause: "",
    image: ytThumb("Sf5kcw08b8k"),
    imageAlt: "Rachel's Story",
    videoUrl: "https://youtu.be/Sf5kcw08b8k",
    href: "https://youtu.be/Sf5kcw08b8k",
    external: true,
  },
  {
    slug: "cory-binks",
    title: "Planting seeds. Watering seeds.",
    teaser:
      "“I see myself as a gardener. I am planting seeds and watering seeds.” Your generosity continues to meet urgent need — individuals, families, ministries, and causes — sharing the hope of Jesus through generosity.",
    cause: "God-Did-It Movement",
    image: ytThumb("8mJZ9auQPI4"),
    imageAlt: "Cory Binks — God-Did-It Movement",
    videoUrl: "https://www.youtube.com/watch?v=8mJZ9auQPI4",
    recipientName: "Cory Binks",
    location: "God-Did-It Movement",
    pullQuote: "I see myself as a gardener. I am planting seeds and watering seeds.",
    href: "https://www.youtube.com/watch?v=8mJZ9auQPI4",
    external: true,
  },
];

export const anchorStory: Story = featuredStories[0];
export const secondaryStories: Story[] = featuredStories.slice(1);

/** Stories with full on-site pages (drives routing + static params). */
export const internalStories: Story[] = featuredStories.filter(
  (s) => !s.external && s.page,
);

export function getStory(slug: string): Story | undefined {
  return internalStories.find((s) => s.slug === slug);
}

export function relatedStories(slug: string, limit = 2): Story[] {
  return featuredStories.filter((s) => s.slug !== slug).slice(0, limit);
}
