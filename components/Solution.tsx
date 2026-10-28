import BookCover3D from "./BookCover3D";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { solution } from "@/lib/config";

export default function Solution() {
  return (
    <section className="relative overflow-hidden bg-raised py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-20 px-4 sm:px-6 lg:grid-cols-2">
        <div className="py-8">
          <BookCover3D size="md" angle={24} />
        </div>
        <Reveal>
          <SectionTitle eyebrow="The way out" title="A quiet system for building real wealth." />
          <p className="mt-8 text-lg leading-relaxed text-muted">{solution}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Richest Wolf turns that system into clear, practical steps you can start using this week — no jargon, no hype, no
            miracle promises.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
