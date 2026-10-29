"use client";

import Script from "next/script";

declare global {
  interface Window {
    createLemonSqueezy?: () => void;
  }
}

/**
 * Loads lemon.js for the checkout overlay. With lazyOnload the script arrives after
 * DOMContentLoaded, when it would normally bind to `.lemonsqueezy-button` links,
 * so it has to be initialised by hand once loaded.
 */
export default function LemonScript() {
  return (
    <Script
      src="https://assets.lemonsqueezy.com/lemon.js"
      strategy="lazyOnload"
      onLoad={() => window.createLemonSqueezy?.()}
    />
  );
}
