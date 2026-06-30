import { ArrowUpRight, Play } from "lucide-react";
import { StoryImage } from "@/components/StoryImage";
import { orgStoryUrl } from "@/lib/links";
import type { Story } from "@/lib/stories";

/** Large lead/anchor story feature for the homepage. Links out to .org. */
export function AnchorStory({ story }: { story: Story }) {
  const href = orgStoryUrl(story.slug);
  const hasVideo = Boolean(story.videoUrl);
  return (
    <article className="surface-card grid overflow-hidden lg:grid-cols-2">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={story.title}
        className="group relative block min-h-[260px] bg-slate-deep lg:min-h-[420px]"
      >
        <StoryImage
          src={story.image}
          alt={story.imageAlt}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-pill bg-slate-ink/85 px-3 py-1 text-xs font-semibold text-gold-bright backdrop-blur">
          {story.cause}
        </span>
        {hasVideo ? (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-ink/70 text-white backdrop-blur transition group-hover:bg-gold-base group-hover:text-slate-ink">
              <Play size={26} className="ml-1" aria-hidden />
            </span>
          </span>
        ) : null}
      </a>

      <div className="flex flex-col justify-center p-8 sm:p-10">
        <span className="text-xs font-bold uppercase tracking-eyebrow text-gold-deep">
          Anchor story
        </span>
        <h3 className="heading mt-3 text-2xl text-slate-ink sm:text-3xl">
          {story.title}
        </h3>
        {story.pullQuote ? (
          <blockquote className="mt-4 border-l-4 border-gold-base pl-4 text-lg leading-body text-slate-base">
            “{story.pullQuote}”
          </blockquote>
        ) : (
          <p className="mt-4 text-lg leading-body text-slate-400">
            {story.teaser}
          </p>
        )}
        {story.recipientName || story.location ? (
          <p className="mt-4 text-sm font-semibold text-slate-400">
            {[story.recipientName, story.location].filter(Boolean).join(" · ")}
          </p>
        ) : null}
        <div className="mt-6">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-bold text-gold-deep"
          >
            Read the full story
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>
        </div>
      </div>
    </article>
  );
}
