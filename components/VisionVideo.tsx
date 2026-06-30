import { Container, Eyebrow } from "@/components/ui";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { visionVideo } from "@/lib/content";

/** Vision / about film, placed just below the hero fold. */
export function VisionVideo() {
  return (
    <section className="bg-cream-warm py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="mb-4 justify-center">{visionVideo.eyebrow}</Eyebrow>
          <h2 className="heading text-3xl text-slate-ink sm:text-4xl">
            {visionVideo.title}
          </h2>
          <p className="mt-4 text-lg leading-body text-slate-400">
            {visionVideo.body}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-4xl">
          <YouTubeEmbed
            id={visionVideo.youtubeId}
            title="Giver Army — the vision"
            className="shadow-lift"
          />
        </div>
      </Container>
    </section>
  );
}
