import type { Metadata } from "next";
import { BadgeCheck, FileText, Receipt } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container, CTA, SectionHeading } from "@/components/ui";
import { StatsStrip } from "@/components/StatsStrip";
import { CausesSection } from "@/components/CausesSection";
import { ValuePills } from "@/components/ValuePills";
import { NewsletterForm } from "@/components/NewsletterForm";
import { CandidBadge } from "@/components/CandidBadge";
import { getImpactStats } from "@/lib/stats";
import { links } from "@/lib/links";
import { site } from "@/lib/site";

export const revalidate = 1800; // ISR — refresh live metrics every 30 min

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Live metrics, the 12 causes, and where your gift goes — transparent grant tracking backed by GiveSendGo Charities and a Candid Platinum transparency rating.",
};

const wheres = [
  {
    title: "Direct to need",
    body: "Gifts are pooled and granted to the causes and people facing real hardship — funding the crowdless, not overhead-first.",
    Icon: Receipt,
  },
  {
    title: "Tracked and reported",
    body: "Transparent grant tracking means you can follow your generosity from gift to outcome, not just hope it landed.",
    Icon: FileText,
  },
  {
    title: "Independently verified",
    body: "Stewarded by GiveSendGo Charities, a 501(c)(3) with a Candid Platinum transparency rating.",
    Icon: BadgeCheck,
  },
];

export default async function ImpactPage() {
  const impactStats = await getImpactStats();
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Generosity you can follow."
        intro="One growing crowd, twelve causes, and transparent tracking on where every gift goes."
      />

      {/* Live metrics */}
      <section className="bg-slate-base py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Live metrics"
            title="Where the movement stands."
            tone="light"
          />
          <div className="mt-10">
            <StatsStrip stats={impactStats} tone="light" columns={6} />
            {impactStats.some((s) => s.placeholder) ? (
              <p className="mt-4 text-xs text-cool-400">
                Figures marked — are pending verified reporting (see our
                transparency commitments below).
              </p>
            ) : null}
          </div>
        </Container>
      </section>

      {/* The 12 causes carousel */}
      <CausesSection />

      {/* Where your gift goes / transparency */}
      <section id="transparency" className="bg-cream-warm py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Where your gift goes"
            title="You should never wonder where your gift went."
            intro="Transparency isn't a feature here — it's the whole point. Here's how generosity travels through Giver Army."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {wheres.map((w) => (
              <div key={w.title} className="surface-card flex flex-col p-7">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold-tint3 text-gold-deep"
                  aria-hidden
                >
                  <w.Icon size={20} />
                </span>
                <h3 className="heading mt-5 text-xl text-slate-ink">
                  {w.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-body text-slate-400">
                  {w.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <ValuePills />
          </div>
        </Container>
      </section>

      {/* Candid Platinum + entity + Dispatch */}
      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="surface-card p-8 sm:p-10">
              <CandidBadge />
              <h3 className="heading mt-5 text-2xl text-slate-ink">
                Transparency, independently rated.
              </h3>
              <p className="mt-3 text-[0.95rem] leading-body text-slate-400">
                {site.entity.statement} EIN {site.entity.ein}. GiveSendGo
                Charities holds a Candid Platinum transparency rating.
              </p>
              <div className="mt-6">
                <CTA href={links.charity} external variant="ghost">
                  View GiveSendGo Charities
                </CTA>
              </div>
            </div>

            <div className="surface-card flex flex-col p-8 sm:p-10">
              <h3 className="heading text-2xl text-slate-ink">
                Get the Giver Army Dispatch.
              </h3>
              <p className="mt-3 text-[0.95rem] leading-body text-slate-400">
                Impact updates and stories of the people your generosity
                reached — straight to your inbox.
              </p>
              <div className="mt-6">
                <NewsletterForm tone="light" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
