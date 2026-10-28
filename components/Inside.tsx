import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { chapters, product } from "@/lib/config";

export default function Inside() {
  const stats = [
    { value: `${product.pages}`, label: "pages" },
    { value: product.format, label: "format" },
    { value: product.readingTime, label: "reading time" },
  ];

  return (
    <section id="inside" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle eyebrow="What's inside" title={`${chapters.length} chapters. One clear plan.`} />
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-12 grid grid-cols-3 divide-x divide-line border-y border-line">
            {stats.map((s) => (
              <div key={s.label} className="px-2 py-6 text-center sm:px-6">
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">{s.label}</dt>
                <dd className="mt-2 font-serif text-xl text-gold sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <ol className="mt-14 grid gap-x-12 gap-y-2 md:grid-cols-2">
          {chapters.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.06}>
              <li className="flex gap-5 border-b border-line py-6">
                <span className="font-serif text-2xl text-gold/70 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-xl text-ink">{c.title}</h3>
                  <p className="mt-1 text-muted">{c.benefit}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
