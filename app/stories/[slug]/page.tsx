import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container, CTA } from "@/components/ui";
import { StoryCard } from "@/components/StoryCard";
import { StoryImage } from "@/components/StoryImage";
import { getStories, getStory, relatedStories, youTubeId } from "@/lib/stories";
import { links } from "@/lib/links";

type Params = { params: { slug: string } };

export const revalidate = 1800;

export async function generateStaticParams() {
  const stories = await getStories();
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const story = await getStory(params.slug);
  if (!story) return { title: "Story not found" };
  return {
    title: story.title,
    description: story.teaser,
    openGraph: {
      title: story.title,
      description: story.teaser,
      images: [{ url: story.image }],
    },
  };
}

export default async function StoryPage({ params }: Params) {
  const story = await getStory(params.slug);
  if (!story) notFound();

  const related = await relatedStories(story.slug, 2);
  const ytId = youTubeId(story.videoUrl);

  return (
    <article className="bg-cream-warm pb-20">
      {/* Hero image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-deep sm:aspect-[21/9]">
        <StoryImage
          src={story.image}
          alt={story.imageAlt}
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-ink/70 to-transparent" />
      </div>

      <Container>
        <div className="mx-auto -mt-16 max-w-3xl">
          <div className="rounded-card bg-white p-8 shadow-card sm:p-12">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-deep"
            >
              <ArrowLeft size={16} aria-hidden />
              All stories
            </Link>

            <span className="mt-6 inline-block rounded-pill bg-slate-ink px-3 py-1 text-xs font-semibold text-gold-bright">
              {story.cause}
            </span>

            <h1 className="display mt-4 text-3xl text-slate-ink sm:text-5xl">
              {story.title}
            </h1>
            {story.subtitle ? (
              <p className="mt-2 text-lg text-slate-400">{story.subtitle}</p>
            ) : null}
            <p className="mt-3 text-sm font-semibold uppercase tracking-eyebrow text-gold-deep">
              A Giver Army story
            </p>

            {story.placeholder ? (
              <p className="mt-6 rounded-lg border border-gold-tint bg-gold-tint3/50 px-4 py-3 text-sm text-slate-base">
                Placeholder story — fictional names and generated art. Real
                testimonies are published only with documented consent.
              </p>
            ) : null}

            {/* Video embed (real stories are video-first) */}
            {ytId ? (
              <div className="mt-8 overflow-hidden rounded-card bg-slate-ink">
                <div className="relative aspect-video">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${ytId}`}
                    title={story.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : null}

            {/* Pull quote */}
            {story.pullQuote ? (
              <figure className="mt-8 border-l-4 border-gold-base pl-5">
                <blockquote className="heading text-xl text-slate-ink sm:text-2xl">
                  “{story.pullQuote}”
                </blockquote>
                {story.pullQuoteAttribution ? (
                  <figcaption className="mt-3 text-sm font-semibold text-gold-deep">
                    {story.pullQuoteAttribution}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}

            {story.body.length > 0 ? (
              <div className="mt-8 space-y-5 text-lg leading-body text-slate-base">
                {story.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            ) : null}

            {/* Give CTA */}
            <div className="mt-10 rounded-card bg-slate-ink p-7 text-center sm:p-9">
              <h2 className="heading text-2xl text-white">
                Be the crowd for the next story.
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-body text-cool-100">
                Your $5 a month funds people facing their hardest moment with no
                one behind them.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CTA href={links.join} external variant="gold">
                  Join the Army — $5/mo
                </CTA>
                <CTA href={links.give} external variant="ghost-dark">
                  Give once
                </CTA>
              </div>
            </div>
          </div>
        </div>

        {/* Related stories */}
        {related.length > 0 ? (
          <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="heading text-2xl text-slate-ink">More stories</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map((s) => (
                <StoryCard key={s.slug} story={s} />
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </article>
  );
}
