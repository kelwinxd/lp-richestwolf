import BookCover3D from "./BookCover3D";
import BuyButton from "./BuyButton";
import Reveal from "./Reveal";
import { disclaimer, included, priceLabel, product } from "@/lib/config";

export default function Offer() {
  return (
    <section id="offer" className="scroll-mt-16 bg-raised py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid items-center gap-16 overflow-hidden rounded-2xl border border-gold/25 bg-bg p-8 sm:p-14 md:grid-cols-[1fr_1.15fr]">
          <div className="py-6">
            <BookCover3D size="md" angle={-20} />
          </div>

          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Get your copy</p>
            <h2 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">{product.title}</h2>
            <p className="mt-1 text-muted">{product.subtitle}</p>

            <div className="mt-8 flex items-baseline gap-4">
              {product.anchorPrice && <span className="text-2xl text-muted line-through">${product.anchorPrice}</span>}
              <span className="font-serif text-6xl text-gold">{priceLabel}</span>
              <span className="text-sm text-muted">one-time · {product.currency}</span>
            </div>

            <ul className="mt-8 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-ink/90">
                  <span aria-hidden className="text-gold">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <BuyButton placement="offer" className="mt-10 w-full" />
            <p className="mt-4 text-center text-sm text-muted">
              Secure checkout · Instant download · {product.refundDays}-day money-back guarantee
            </p>
            <p className="mt-6 text-xs leading-relaxed text-muted/70">{disclaimer}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
