import Link from "next/link";
import Footer from "./Footer";
import Header from "./Header";

export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6">
        <Link href="/" className="text-sm text-gold hover:underline">
          ← Back
        </Link>
        <h1 className="mt-6 font-serif text-4xl text-ink sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
        <div className="mt-12 space-y-6 leading-relaxed text-muted [&_a]:text-gold [&_h2]:mt-12 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
