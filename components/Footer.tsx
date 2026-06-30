import Link from "next/link";
import { Logo } from "@/components/Logo";
import { footerNav, site } from "@/lib/site";
import { links } from "@/lib/links";

export function Footer() {
  return (
    <footer className="bg-slate-ink text-cool-100">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + entity */}
          <div>
            <Logo variant="light" className="h-7 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-body text-cool-400">
              A movement of everyday givers funding the crowdless, following
              their stories, and sharing the hope of Jesus through generosity.
            </p>
          </div>

          <FooterCol title="Movement" items={footerNav.movement} />
          <FooterCol title="Give" items={footerNav.give} />
          <FooterCol title="Trust" items={footerNav.trust} />
        </div>

        {/* Entity separation block — exact language (compliance) */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-sm leading-body text-cool-400">
            {site.entity.statement}{" "}
            <span className="whitespace-nowrap">EIN {site.entity.ein}.</span>
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-body text-cool-400">
            GiveSendGo Charities holds a{" "}
            <a
              href={links.candid}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-bright underline-offset-2 hover:underline"
            >
              Candid Platinum
            </a>{" "}
            transparency rating.{" "}
            <span className="text-cool-400">
              GiveSendGo.com LLC, the crowdfunding platform, is a separate
              company and is not the recipient of gifts.
            </span>
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-cool-400">
              © {new Date().getFullYear()} {site.entity.charityName}. All rights
              reserved.
            </p>
            <nav
              aria-label="Legal"
              className="flex flex-wrap gap-x-6 gap-y-2 text-xs"
            >
              <FooterExternal href={links.privacy}>
                Privacy
              </FooterExternal>
              <FooterExternal href={links.terms}>Terms</FooterExternal>
              <FooterExternal href={links.charity}>
                GiveSendGo Charities
              </FooterExternal>
              <Link
                href="/about"
                className="text-cool-400 hover:text-gold-bright"
              >
                About &amp; Trust
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-eyebrow text-gold-bright">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-cool-100 transition hover:text-gold-bright"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterExternal({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-cool-400 hover:text-gold-bright"
    >
      {children}
    </a>
  );
}
