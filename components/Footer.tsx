import Link from "next/link";
import WolfMark from "./WolfMark";
import { disclaimer, site } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-line pt-16 pb-28 md:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <Link href="/" className="flex items-center gap-2.5 font-serif tracking-[0.18em] text-ink">
            <WolfMark className="h-5 w-5 text-gold" />
            RICHEST WOLF
          </Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            <Link href="/terms" className="hover:text-ink">Terms</Link>
            <Link href="/refund" className="hover:text-ink">Refund</Link>
            <a href={`mailto:${site.contactEmail}`} className="hover:text-ink">Contact</a>
          </nav>
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-relaxed text-muted/70">{disclaimer}</p>
        <p className="mt-6 text-center text-xs text-muted/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
