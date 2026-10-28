import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { audience, testimonials } from "@/lib/config";

// Shows real testimonials when there are any; until then, "Who this is for".
export default function Proof() {
  if (testimonials.length > 0) {
    return (
      <section className="border-t border-line py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle eyebrow="Readers" title="What readers say." center />
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="h-full rounded-lg border border-line bg-raised p-8">
                  <blockquote className="font-serif text-xl leading-relaxed text-ink">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 text-sm text-muted">— {t.name}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle eyebrow="Is it for you?" title="Who this book is for." center />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="h-full rounded-lg border border-gold/30 bg-raised p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">This is for you if</h3>
              <ul className="mt-6 space-y-4">
                {audience.forYou.map((item) => (
                  <li key={item} className="flex gap-3 text-ink/90">
                    <span aria-hidden className="mt-0.5 text-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-lg border border-line p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">It's not for you if</h3>
              <ul className="mt-6 space-y-4">
                {audience.notForYou.map((item) => (
                  <li key={item} className="flex gap-3 text-muted">
                    <span aria-hidden className="mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
