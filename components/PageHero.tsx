import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";

/** Compact inner-page hero on a slate surface with the gold glow. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-slate-ink">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden />
      <Container className="relative">
        <div className="max-w-3xl py-16 sm:py-20">
          <Eyebrow tone="light" className="mb-4">
            {eyebrow}
          </Eyebrow>
          <h1 className="display text-4xl text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-5 max-w-2xl text-lg leading-body text-cool-100">
              {intro}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
