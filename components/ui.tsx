import Link from "next/link";
import type { ReactNode } from "react";

/** Page-width wrapper. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-page ${className}`}>{children}</div>;
}

/** Eyebrow label with the signature gold rule. */
export function Eyebrow({
  children,
  className = "",
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  /** "light" tints the rule/text for dark surfaces. */
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`eyebrow ${tone === "light" ? "text-gold-bright before:bg-gold-bright" : ""} ${className}`}
    >
      {children}
    </span>
  );
}

type CTAProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** External links open in a new tab with rel=noopener. */
  external?: boolean;
  variant?: "gold" | "ghost" | "ghost-dark";
  fullWidthOnMobile?: boolean;
};

/** Call-to-action button; renders an <a> for external, <Link> for internal. */
export function CTA({
  href,
  children,
  className = "",
  external = false,
  variant = "gold",
  fullWidthOnMobile = true,
}: CTAProps) {
  const cls = `btn-${variant} ${fullWidthOnMobile ? "w-full sm:w-auto" : ""} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Standard section heading block: eyebrow + headline + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const titleColor = tone === "light" ? "text-white" : "text-slate-ink";
  const introColor = tone === "light" ? "text-cool-100" : "text-slate-400";
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} className="mb-4">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2 className={`heading text-3xl sm:text-4xl ${titleColor}`}>{title}</h2>
      {intro ? (
        <p className={`mt-4 text-lg leading-body ${introColor}`}>{intro}</p>
      ) : null}
    </div>
  );
}
