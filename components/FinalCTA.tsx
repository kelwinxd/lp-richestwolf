import BookCover3D from "./BookCover3D";
import BuyButton from "./BuyButton";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-raised py-24 sm:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <div className="mb-16">
          <BookCover3D size="sm" angle={-18} />
        </div>
        <Reveal>
          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            A year from now, you'll wish you started today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            The plan is ready. All it takes is the first step.
          </p>
          <BuyButton placement="final" className="mt-10" />
        </Reveal>
      </div>
    </section>
  );
}
