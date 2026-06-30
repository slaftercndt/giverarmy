import { Container, CTA } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-slate-ink">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden />
      <Container className="relative">
        <div className="flex flex-col items-center py-28 text-center">
          <p className="display text-6xl text-gold-base">404</p>
          <h1 className="heading mt-4 text-3xl text-white sm:text-4xl">
            This page wandered off.
          </h1>
          <p className="mt-4 max-w-md text-lg leading-body text-cool-100">
            The page you&apos;re looking for isn&apos;t here — but the movement
            still is.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTA href="/" variant="gold" fullWidthOnMobile={false}>
              Back home
            </CTA>
            <CTA href="/stories" variant="ghost-dark" fullWidthOnMobile={false}>
              Read stories
            </CTA>
          </div>
        </div>
      </Container>
    </section>
  );
}
