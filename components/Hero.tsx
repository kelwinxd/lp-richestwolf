import BookCover3D from "./BookCover3D";
import BuyButton from "./BuyButton";
import WolfMark from "./WolfMark";
import { hero } from "@/lib/config";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-24 sm:pt-36 lg:min-h-screen lg:pb-32">
      <WolfMark className="pointer-events-none absolute -right-24 top-24 h-[620px] w-[620px] text-gold opacity-[0.03]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:gap-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold sm:mb-6">{hero.eyebrow}</p>
          <h1 className="font-serif text-[2.6rem] leading-[1.05] text-ink sm:text-6xl lg:text-7xl">{hero.headline}</h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg lg:mx-0">{hero.subheadline}</p>

          <div className="mt-8 sm:mt-10">
            <BuyButton placement="hero" />
          </div>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm text-muted lg:justify-start">
            {hero.trust.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-gold/60">·</span>}
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-first pt-4 pb-6 lg:order-none lg:py-6">
          <BookCover3D size="lg" scrollSpin priority />
        </div>
      </div>
    </section>
  );
}
