/**
 * Centralized outbound links.
 *
 * This marketing site does NOT process payments. Every giving / donation action
 * is an outbound link to the GiveSendGo Charities donor site (givesendgo.org).
 * Cause campaigns live on the crowdfunding platform (givesendgo.com).
 *
 * COMPLIANCE NOTE: givesendgo.org (GiveSendGo Charities, Inc., the 501(c)(3)) and
 * givesendgo.com (GiveSendGo.com LLC, the crowdfunding platform) are SEPARATE
 * entities. Do not conflate them. Gifts are made to and stewarded by the charity.
 *
 * Swap these placeholder hrefs for production URLs in one place.
 */
export const links = {
  // Donor / checkout actions → GiveSendGo Charities (the 501(c)(3))
  join: "https://www.givesendgo.org/join", // Join the Army — $5/mo (placeholder)
  give: "https://www.givesendgo.org/give", // Give once (placeholder)

  // The charity / donor site
  charity: "https://www.givesendgo.org",

  // The crowdfunding platform (SEPARATE company — not the giving entity)
  platform: "https://www.givesendgo.com",

  // Policies / legal — these live on the .org donor site
  privacy: "https://www.givesendgo.org/privacy",
  terms: "https://www.givesendgo.org/terms",
  contact: "https://www.givesendgo.org/contact",

  // Transparency
  candid: "https://www.candid.org",

  // Social (placeholders — swap for real handles)
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    x: "https://x.com",
  },
} as const;

export const PRICE_LABEL = "$5/mo";
