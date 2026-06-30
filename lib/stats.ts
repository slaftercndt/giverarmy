/**
 * Homepage / impact metrics.
 *
 * PLACEHOLDER DATA — every number below is a clearly-marked placeholder.
 * Do NOT present these as real figures. Real impact numbers route through the
 * team's compliance/ops review before publishing (see README + brief §10).
 */
export type Stat = {
  value: string;
  label: string;
  placeholder: true;
};

/** Live-stats strip on the homepage "Movement" section (4 stats). */
export const movementStats: Stat[] = [
  { value: "—", label: "Givers in the Army", placeholder: true },
  { value: "—", label: "Gifts fueled by givers", placeholder: true },
  { value: "—", label: "Lives touched", placeholder: true },
  { value: "12", label: "Cause categories", placeholder: true },
];

/** Larger metric grid on /impact. */
export const impactStats: Stat[] = [
  { value: "—", label: "Total granted to date", placeholder: true },
  { value: "—", label: "Gifts fueled by givers", placeholder: true },
  { value: "—", label: "Stories published", placeholder: true },
  { value: "—", label: "Active monthly givers", placeholder: true },
  { value: "12", label: "Cause categories funded", placeholder: true },
  { value: "—", label: "Countries reached", placeholder: true },
];

/**
 * Whether any placeholder figure is still unset. Used to render a clearly-marked
 * "placeholder" note in the UI so unverified numbers never read as fact.
 */
export const statsArePlaceholders = true;
