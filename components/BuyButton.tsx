"use client";

import { checkoutUrl, priceLabel } from "@/lib/config";

type Props = {
  label?: string;
  showPrice?: boolean;
  size?: "md" | "lg";
  className?: string;
  /** Where the click came from, for analytics. */
  placement: string;
};

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export default function BuyButton({ label = "Get the Book", showPrice = true, size = "lg", className = "", placement }: Props) {
  const sizing = size === "lg" ? "px-8 py-4 text-base sm:text-lg" : "px-5 py-2.5 text-sm";

  return (
    // lemon.js turns `lemonsqueezy-button` links into the checkout overlay
    <a
      href={checkoutUrl}
      onClick={() => window.plausible?.("Buy Click", { props: { placement } })}
      className={`lemonsqueezy-button inline-flex items-center justify-center gap-2 rounded-md bg-gold font-semibold text-black shadow-[0_10px_40px_-10px_rgba(201,162,75,0.6)] transition hover:bg-gold-bright hover:shadow-[0_14px_50px_-10px_rgba(201,162,75,0.8)] active:scale-[0.98] ${sizing} ${className}`}
    >
      {label}
      {showPrice && (
        <>
          <span aria-hidden className="opacity-50">—</span>
          {priceLabel}
        </>
      )}
    </a>
  );
}
