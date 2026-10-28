export default function SectionTitle({
  eyebrow,
  title,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className="font-serif text-3xl leading-tight text-ink sm:text-5xl">{title}</h2>
    </div>
  );
}
