/**
 * Story library.
 *
 * PLACEHOLDER CONTENT — these are clearly fictional seed stories. They use
 * invented names and generated placeholder art, NOT real people or photos.
 *
 * COMPLIANCE: Real stories require documented, written consent before publishing.
 * `consentConfirmed` must be true for any real story. The seed entries are marked
 * `consentConfirmed: false` because they are illustrative placeholders.
 */
export type Story = {
  slug: string;
  title: string;
  teaser: string;
  body: string[];
  /** Cause name — should match a name in lib/causes.ts where applicable. */
  cause: string;
  /** Path under /public. Placeholder art for seed stories. */
  image: string;
  imageAlt: string;
  /** Must be true before a real story is published. */
  consentConfirmed: boolean;
  /** Marks fictional seed data so it is never mistaken for a real testimony. */
  placeholder: boolean;
};

export const stories: Story[] = [
  {
    slug: "a-roof-before-winter",
    title: "A roof before winter",
    teaser:
      "A single mother in a rural county had no network to call on when the storm took her home. The crowd showed up.",
    body: [
      "When the storm passed through, it left more than debris. For one mother of three in a rural county, it took the roof over the only home she had ever owned — and she had no one to call.",
      "She is exactly who this movement exists for: someone facing the hardest moment of her life with no crowd behind her. No viral post. No big network. Just need, and silence.",
      "Then the Army showed up. Gifts from givers she will never meet funded emergency repairs, temporary shelter, and the materials to make the house whole again before the first freeze.",
      "“I kept waiting for the catch,” she said. “There wasn't one. People just decided I mattered.”",
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
      "For this family, medical debt was about to undo years of careful work — not because of anything they did wrong, but because hardship found them and they had no crowd to absorb the shock.",
      "Givers across the Army funded the gap. The treatment continued. The family stayed in their home.",
      "This is what a feedback loop looks like: a gift, a life changed, a story told, another giver moved to join.",
    ],
    cause: "Medical Relief",
    image: "/stories/placeholder-2.svg",
    imageAlt: "Illustrative placeholder artwork for a Medical Relief story.",
    consentConfirmed: false,
    placeholder: true,
  },
  {
    slug: "out-of-the-shadows",
    title: "Out of the shadows",
    teaser:
      "Rescued from trafficking, she needed more than a way out — she needed people who would stay.",
    body: [
      "Getting out was only the beginning. What came next — safe housing, counseling, the slow work of rebuilding trust — required a community willing to stay for the long walk.",
      "She had been invisible for years. The crowdless condition was not a metaphor for her; it was her daily reality.",
      "The Army funded her recovery and, just as importantly, followed her story. She was seen. She was known. She was not alone.",
      "Today she is rebuilding a life she once thought was out of reach — and the crowd that funded her is still cheering her on.",
    ],
    cause: "Rescue & Rehabilitation",
    image: "/stories/placeholder-3.svg",
    imageAlt: "Illustrative placeholder artwork for a Rescue & Rehabilitation story.",
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
      "These are the basics of daily living — food, water, power — the things a crowd takes for granted and the crowdless cannot assume.",
      "Givers stepped in. The lights stayed on. A small, dignified intervention that kept a hard season from becoming a crisis.",
      "No fanfare. Just everyday givers deciding that no one should face the cold alone.",
    ],
    cause: "Essential for Life",
    image: "/stories/placeholder-4.svg",
    imageAlt: "Illustrative placeholder artwork for an Essential for Life story.",
    consentConfirmed: false,
    placeholder: true,
  },
];

export function getStory(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function relatedStories(slug: string, limit = 2): Story[] {
  const current = getStory(slug);
  if (!current) return stories.slice(0, limit);
  const sameCause = stories.filter(
    (s) => s.slug !== slug && s.cause === current.cause,
  );
  const others = stories.filter(
    (s) => s.slug !== slug && s.cause !== current.cause,
  );
  return [...sameCause, ...others].slice(0, limit);
}
