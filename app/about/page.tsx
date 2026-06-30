import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container, CTA, SectionHeading } from "@/components/ui";
import { links } from "@/lib/links";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About & Trust",
  description:
    "How Giver Army relates to GiveSendGo Charities, our transparency commitments, FAQ, and how to handle complex or offline giving.",
};

const faqs = [
  {
    q: "Who actually receives my gift?",
    a: "All gifts are made to and stewarded by GiveSendGo Charities, Inc., a Florida 501(c)(3) public charity (EIN 88-3776392). Giver Army is a movement of GiveSendGo Charities — not a separate legal entity — so giving through Giver Army is giving to the charity.",
  },
  {
    q: "Is Giver Army the same as GiveSendGo.com?",
    a: "No. GiveSendGo.com LLC is a separate company — the crowdfunding platform. It is not the recipient of gifts and is not the charity. GiveSendGo Charities (givesendgo.org) is the 501(c)(3) that stewards your generosity.",
  },
  {
    q: "Is my gift tax-deductible?",
    a: "Gifts to GiveSendGo Charities, a 501(c)(3) public charity, are generally tax-deductible to the extent allowed by law. Consult your tax advisor for your specific situation.",
  },
  {
    q: "What does the $5/month go toward?",
    a: "Your monthly gift is pooled with thousands of others and granted across the 12 causes — funding the crowdless, the people facing hardship with no network of their own. You can choose where your gift flows or let it go where the need is greatest.",
  },
  {
    q: "How do I know where my gift went?",
    a: "Transparent grant tracking and our story library let you follow generosity from gift to outcome. GiveSendGo Charities holds a Candid Platinum transparency rating.",
  },
  {
    q: "Can I give to a specific person or story?",
    a: "Stories on this site show how the movement's pooled generosity reaches real need. For campaign-specific giving, the 12 causes each link to their campaign on the GiveSendGo platform.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About & Trust"
        title="Built on transparency and trust."
        intro="Giver Army exists to be a crowd for the crowdless — backed by a charity you can verify."
      />

      {/* Relationship to GiveSendGo Charities */}
      <section className="bg-cream-warm py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="The entity"
              title="Our relationship to GiveSendGo Charities."
            />
            <div className="space-y-4 text-lg leading-body text-slate-400">
              <p>{site.entity.statement}</p>
              <p>
                Giver Army is the movement and the marketing front door. The
                charity, {site.entity.charityName} (EIN {site.entity.ein}), is
                the legal and donor entity that receives and stewards every
                gift.
              </p>
              <p className="text-base">
                <strong className="font-semibold text-slate-base">
                  Two different things, often confused:
                </strong>{" "}
                GiveSendGo Charities (the 501(c)(3) on givesendgo.org) is the
                charity. GiveSendGo.com LLC is a separate company — the
                crowdfunding platform — and is not the recipient of gifts.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-cream py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Questions, answered." />
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-cool-100 overflow-hidden rounded-card border border-cool-100 bg-white">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-6 sm:p-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="heading text-lg text-slate-ink">{faq.q}</h3>
                  <span
                    className="shrink-0 text-2xl font-light text-gold-base transition group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[0.95rem] leading-body text-slate-400">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Offline / complex giving → routes to .org */}
      <section id="offline" className="bg-cream-warm py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 rounded-card bg-slate-base p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Complex & offline giving"
                title="Stock, DAFs, checks, and major gifts."
                tone="light"
              />
              <p className="mt-5 text-lg leading-body text-cool-100">
                Giving stock, a donor-advised fund grant, a check, or a major or
                planned gift? Those are handled directly by GiveSendGo Charities.
                Reach out and the charity team will take care of you.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <CTA href={links.contact} external variant="gold">
                Contact GiveSendGo Charities
              </CTA>
              <CTA href={links.charity} external variant="ghost-dark">
                Visit givesendgo.org
              </CTA>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
