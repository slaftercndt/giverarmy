import { Container, Eyebrow } from "@/components/ui";
import { CausesCarousel } from "@/components/CausesCarousel";

/** The "12 causes" section — slate surface, used on home and /impact. */
export function CausesSection() {
  return (
    <section id="causes" className="bg-slate-ink py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow tone="light" className="mb-4">
            The 12 causes
          </Eyebrow>
          <h2 className="heading text-3xl text-white sm:text-4xl">
            12 causes. One growing crowd.
          </h2>
          <p className="mt-4 text-lg leading-body text-cool-100">
            The Giver Army funds these cause categories. Choose where your
            $5/month flows, or let it go where the need is greatest.
          </p>
        </div>

        <div className="mt-10">
          <CausesCarousel />
        </div>
      </Container>
    </section>
  );
}
