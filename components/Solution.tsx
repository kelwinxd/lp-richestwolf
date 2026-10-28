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

      <Reveal className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 border-t border-line pt-10 sm:grid-cols-2">
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
    </section>
  );
}
