import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { faq } from "@/lib/config";

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle eyebrow="Questions" title="Frequently asked." center />
        </Reveal>
        <div className="mt-14 divide-y divide-line border-y border-line">
          {faq.map((item) => (
            <details key={item.q} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden className="text-2xl leading-none text-gold transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-5 pr-10 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
