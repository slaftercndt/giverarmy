import Link from "next/link";
import { ArrowUpRight, Megaphone, UserRound } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { StoryImage } from "@/components/StoryImage";
import { championStories } from "@/lib/stories";

/**
 * "Rally your crowd" — champions band.
 *
 * Champions are GUIDES, not heroes: fellow givers who enlisted their crowd.
 * Each face links to a STORY entry (lives changed, champion as storyteller) —
 * never a bio page. No compensation language anywhere.
 *
 * PLACEHOLDER SLOTS: until more champion stories are published, empty slots
 * render as clearly-marked "coming soon" tiles — no invented names or faces.
 */
const PLACEHOLDER_SLOTS = 2;

export function ChampionsBand() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Rally your crowd"
          title="Fellow givers who enlisted their crowd."
          intro="Artists, athletes, and everyday voices who joined the Army and brought their people with them. Their stories are about the lives changed — they just tell them."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {championStories.map((story) => (
            <a
              key={story.slug}
              href={story.href}
              {...(story.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group surface-card flex flex-col p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="relative block h-16 w-16 overflow-hidden rounded-full bg-slate-deep">
                <StoryImage
                  src={story.image}
                  alt=""
                  sizes="64px"
                  className="object-cover"
                />
              </span>
              <span className="heading mt-4 text-lg text-slate-ink">
                {story.recipientName ?? story.title}
              </span>
              {story.location ? (
                <span className="mt-1 text-sm text-slate-400">
                  {story.location}
                </span>
              ) : null}
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep">
                Their crowd&apos;s story
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
            </a>
          ))}

          {Array.from({ length: PLACEHOLDER_SLOTS }).map((_, i) => (
            <div
              key={`slot-${i}`}
              className="flex flex-col rounded-card border border-dashed border-cool-200 bg-white/60 p-6"
              aria-hidden
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-cool-400">
                <UserRound size={26} />
              </span>
              <span className="heading mt-4 text-lg text-cool-400">
                Champion coming soon
              </span>
              <span className="mt-1 text-sm text-cool-400">
                Placeholder — story in progress
              </span>
            </div>
          ))}

          {/* The ask: become a champion (join + rally — no compensation). */}
          <Link
            href="/enlist-your-crowd"
            className="group flex flex-col justify-between rounded-card bg-slate-ink p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-base/15 text-gold-bright">
              <Megaphone size={26} aria-hidden />
            </span>
            <span>
              <span className="heading mt-4 block text-lg text-white">
                Have a crowd?
              </span>
              <span className="mt-1 block text-sm leading-body text-cool-400">
                Join the Army, then rally your people.
              </span>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-bright">
                Enlist your crowd
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
