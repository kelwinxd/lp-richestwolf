import Image from "next/image";
import BookCover3D from "./BookCover3D";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { method, product, thinkers } from "@/lib/config";

export default function Solution() {
  return (
    <section className="relative overflow-hidden bg-raised py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-20 px-4 sm:px-6 lg:grid-cols-2">
        <div className="py-8">
          <BookCover3D size="md" angle={24} />
        </div>
        <Reveal>
          <SectionTitle eyebrow="The way out" title="Centuries of economic wisdom. One practical method." />
          <p className="mt-8 text-lg leading-relaxed text-muted">
            {product.title} avoids both extremes of personal finance — pure theory and tips without a foundation. Every
            chapter follows the same structure:
          </p>
          <ol className="mt-8 space-y-5">
            {method.map((m, i) => (
              <li key={m.step} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/50 text-sm text-gold">
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium text-ink">{m.step}</p>
                  <p className="text-muted">{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <div className="mx-auto mt-24 grid max-w-6xl items-center gap-12 border-t border-line px-4 pt-16 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <figure className="relative mx-auto max-w-md">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[10%] rounded-full bg-[radial-gradient(closest-side,rgba(233,168,74,0.18),transparent)]"
            />
            <Image
              src="/buffett-munger.webp"
              alt="Gold line-art illustration of Warren Buffett and Charlie Munger in front of a rising mountain"
              width={1024}
              height={1073}
              sizes="(min-width: 1024px) 448px, 90vw"
              className="relative h-auto w-full"
            />
            <figcaption className="mt-3 text-center text-xs text-muted/60">
              Illustration of Warren Buffett and Charlie Munger. Not affiliated with or endorsed by them or Berkshire
              Hathaway.
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-serif text-3xl leading-snug text-ink sm:text-4xl">
            Learn from the people who actually built lasting wealth.
          </p>
          <div className="mt-10 space-y-8">
            {(
              [
                ["The classical economists", thinkers.classical],
                ["The modern builders of wealth", thinkers.modern],
              ] as const
            ).map(([label, names]) => (
              <div key={label}>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{label}</p>
                <p className="mt-3 font-serif text-xl leading-relaxed text-ink/80">{names.join(" · ")}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
