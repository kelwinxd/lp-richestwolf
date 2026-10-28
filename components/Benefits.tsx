import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { benefits } from "@/lib/config";

export default function Benefits() {
  return (
    <section className="bg-raised py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle eyebrow="After reading" title="What you'll be able to do." center />
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.08} className="bg-raised">
              <div className="h-full p-8 transition hover:bg-white/[0.02]">
                <span className="block h-px w-10 bg-gold" />
                <h3 className="mt-6 font-serif text-2xl leading-snug text-ink">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
