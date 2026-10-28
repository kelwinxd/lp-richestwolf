import Link from "next/link";
import Reveal from "./Reveal";
import { product } from "@/lib/config";

export default function Guarantee() {
  return (
    <section className="py-24 sm:py-28">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-10 px-4 text-center sm:flex-row sm:text-left">
        <div className="flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full border-2 border-gold/70 outline outline-1 outline-offset-4 outline-gold/30">
          <span className="font-serif text-4xl leading-none text-gold">{product.refundDays}</span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">day</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">guarantee</span>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-ink">Read it. If it's not for you, get your money back.</h2>
          <p className="mt-4 leading-relaxed text-muted">
            If the book doesn't help you, e-mail us within {product.refundDays} days of purchase for a full refund. No forms,
            no hassle. See the{" "}
            <Link href="/refund" className="text-gold underline-offset-4 hover:underline">
              refund policy
            </Link>
            .
          </p>
        </div>
      </Reveal>
    </section>
  );
}
