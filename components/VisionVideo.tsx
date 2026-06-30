import { Container, Eyebrow } from "@/components/ui";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { visionSection, visionVideos } from "@/lib/content";

/** Vision / about films, placed just below the hero fold. */
export function VisionVideo() {
  const multiple = visionVideos.length > 1;
  return (
    <section className="bg-cream-warm py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="mb-4 justify-center">
            {visionSection.eyebrow}
          </Eyebrow>
          <h2 className="heading text-3xl text-slate-ink sm:text-4xl">
            {visionSection.title}
          </h2>
          <p className="mt-4 text-lg leading-body text-slate-400">
            {visionSection.body}
          </p>
        </div>
        <div
          className={`mx-auto mt-10 ${
            multiple
              ? "grid max-w-5xl gap-6 sm:grid-cols-2"
              : "max-w-4xl"
          }`}
        >
          {visionVideos.map((v) => (
            <YouTubeEmbed
              key={v.youtubeId}
              id={v.youtubeId}
              title={v.title}
              className="shadow-lift"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
