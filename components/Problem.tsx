import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { problem } from "@/lib/config";

export default function Problem() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle eyebrow="Sound familiar?" title="Working hard, but never getting ahead." />
        </Reveal>
        <ul className="mt-14 space-y-8">
          {problem.map((line, i) => (
            <Reveal key={line} delay={i * 0.08}>
              <li className="flex gap-6 border-l border-gold/40 pl-6 text-xl leading-relaxed text-ink/85 sm:text-2xl">
                {line}
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.3}>
          <p className="mt-14 text-lg text-muted">It's not a lack of effort. It's a lack of a plan — and nobody ever handed you one.</p>
        </Reveal>
      </div>
    </section>
  );
}
