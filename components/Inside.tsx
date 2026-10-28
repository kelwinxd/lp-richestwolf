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
          <SectionTitle eyebrow="What's inside" title={`${chapters.length} chapters. From your first dollar saved to financial freedom.`} />
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

        <ol className="mt-14 grid gap-6 md:grid-cols-2">
          {chapters.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.08}>
              <li className="h-full rounded-lg border border-line p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold/80">Chapter {i + 1}</p>
                <h3 className="mt-3 font-serif text-2xl text-ink">{c.title}</h3>
                <p className="mt-2 text-muted">{c.benefit}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-6 text-sm text-ink/75">
                  {c.topics.map((t, j) => (
                    <li key={t} className="flex gap-3">
                      <span className="w-7 shrink-0 tabular-nums text-gold/60">
                        {i + 1}.{j + 1}
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
