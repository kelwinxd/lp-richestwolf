import Link from "next/link";
import WolfMark from "./WolfMark";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-serif text-lg tracking-[0.18em] text-ink">
          <WolfMark className="h-6 w-6 text-gold" />
          RICHEST WOLF
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <a href="/#inside" className="hidden text-muted transition hover:text-ink sm:inline">
            Inside
          </a>
          <a href="/#faq" className="hidden text-muted transition hover:text-ink sm:inline">
            FAQ
          </a>
          <a
            href="/#offer"
            className="rounded-md border border-gold/50 px-4 py-2 font-medium text-gold transition hover:bg-gold hover:text-black"
          >
            Get the Book
          </a>
        </div>
      </nav>
    </header>
  );
}
