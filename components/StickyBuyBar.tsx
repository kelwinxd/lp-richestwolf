"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BuyButton from "./BuyButton";
import { priceLabel, product } from "@/lib/config";

/** Mobile-only buy bar: shows once the hero is out of view, hides near the offer and final CTA. */
export default function StickyBuyBar() {
  const [pastHero, setPastHero] = useState(false);
  const [nearOffer, setNearOffer] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const targets = ["offer", "final-cta"].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const visible = new Set<Element>();

    const heroObs = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting && e.boundingClientRect.top < 0));
    const offerObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setNearOffer(visible.size > 0);
    });

    if (hero) heroObs.observe(hero);
    targets.forEach((t) => offerObs.observe(t));
    return () => {
      heroObs.disconnect();
      offerObs.disconnect();
    };
  }, []);

  const show = pastHero && !nearOffer;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-bg/90 px-4 py-3 backdrop-blur-xl md:hidden"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="leading-tight">
              <p className="font-serif text-ink">{product.title}</p>
              <p className="text-sm text-gold">{priceLabel} · PDF</p>
            </div>
            <BuyButton placement="sticky" size="md" showPrice={false} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
