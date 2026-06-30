/**
 * Editorial content for the homepage that doesn't live in the database.
 */

/** The vision / about film, shown just below the hero fold. */
export const visionVideo = {
  youtubeId: "DspwwX7RM4E",
  eyebrow: "The vision",
  title: "A crowd for the crowdless.",
  body: "See why Giver Army exists — a movement of everyday givers sharing the hope of Jesus through generosity, so no one faces their hardest moment alone.",
};

/**
 * The anchor (lead) story slug. Featured large on the homepage and ordered
 * first in the story library. Set here in the giverarmy code rather than via
 * the shared database `is_featured` flag, which also drives givesendgo.org.
 */
export const ANCHOR_STORY_SLUG = "operation-shelter";
