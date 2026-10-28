import Image from "next/image";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import WolfMark from "./WolfMark";
import { author } from "@/lib/config";

export default function About() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-14 px-4 sm:px-6 md:grid-cols-[280px_1fr]">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-56 overflow-hidden rounded-lg border border-line bg-raised md:w-full">
            {author.photo ? (
              <Image src={author.photo} alt={author.name} fill className="object-cover grayscale" />
            ) : (
              <div className="flex h-full items-center justify-center">
                <WolfMark className="h-24 w-24 text-gold/40" />
              </div>
            )}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionTitle eyebrow="About the author" title={author.name} />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            {author.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
