import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Story } from "@/lib/stories";

export function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group surface-card flex h-full flex-col overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-lift">
      <Link
        href={`/stories/${story.slug}`}
        className="flex h-full flex-col focus-visible:outline-none"
      >
        <div className="relative aspect-[8/5] overflow-hidden bg-slate-deep">
          <Image
            src={story.image}
            alt={story.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
          <span className="absolute left-4 top-4 rounded-pill bg-slate-ink/85 px-3 py-1 text-xs font-semibold text-gold-bright backdrop-blur">
            {story.cause}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="heading text-xl text-slate-ink">{story.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-body text-slate-400">
            {story.teaser}
          </p>
          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-eyebrow text-gold-deep">
              A Giver Army story
            </span>
            <ArrowRight
              size={18}
              className="text-gold-base transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
