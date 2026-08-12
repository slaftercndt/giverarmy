import type { ReactNode } from "react";
import { Container } from "@/components/ui";

/** Shared typography shell for legal documents (Privacy, Terms). */

export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl space-y-12">{children}</div>
      </Container>
    </section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="heading text-2xl text-slate-ink">{title}</h2>
      <div className="space-y-4 text-base leading-body text-slate-400">
        {children}
      </div>
    </section>
  );
}

/** Emphasized block for the entity-separation language. */
export function LegalCallout({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-card border border-gold-base/40 bg-cream-warm p-6">
      {title ? (
        <p className="text-xs font-bold uppercase tracking-eyebrow text-gold-deep">
          {title}
        </p>
      ) : null}
      <div className="mt-2 space-y-3 text-base leading-body text-slate-base">
        {children}
      </div>
    </div>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
