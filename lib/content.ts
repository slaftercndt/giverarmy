/**
 * Editorial content for the homepage that doesn't live in the database.
 */

/** Heading copy for the vision / about section, shown just below the hero. */
export const visionSection = {
  eyebrow: "The vision",
  title: "A crowd for the crowdless.",
  body: "See why Giver Army exists — a movement of everyday givers sharing the hope of Jesus through generosity, so no one faces their hardest moment alone.",
};

/**
 * The vision / about films shown below the hero fold. `title` is the iframe's
 * accessibility label (not visible text), so generic titles are fine.
 */
export const visionVideos = [
  { youtubeId: "DspwwX7RM4E", title: "Giver Army — the vision" },
  { youtubeId: "Sf5kcw08b8k", title: "Giver Army — the story" },
];

/**
 * The anchor (lead) story slug. Featured large on the homepage and ordered
 * first in the story library. Set here in the giverarmy code rather than via
 * the shared database `is_featured` flag, which also drives givesendgo.org.
 */
export const ANCHOR_STORY_SLUG = "operation-shelter";
