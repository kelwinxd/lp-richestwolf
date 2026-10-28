"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { product } from "@/lib/config";

type Size = "sm" | "md" | "lg";

// --w is the cover width, --t the book thickness. Everything else derives from them.
const sizes: Record<Size, string> = {
  sm: "[--w:180px] sm:[--w:210px]",
  md: "[--w:220px] sm:[--w:270px]",
  lg: "[--w:190px] sm:[--w:300px] lg:[--w:340px]",
};

const SPRING = { stiffness: 80, damping: 15 };

type Props = {
  /** Resting angle on the Y axis. Negative shows the pages edge, positive shows the spine. */
  angle?: number;
  size?: Size;
  /** Rotate slowly while the visitor scrolls through the first part of the page. */
  scrollSpin?: boolean;
  priority?: boolean;
};

export default function BookCover3D({ angle = -25, size = "lg", scrollSpin = false, priority = false }: Props) {
  const reduce = useReducedMotion() ?? false;
  const [lite, setLite] = useState(false);
  const touchOnly = useRef(false);
  const dragging = useRef(false);

  // Pointer position over the book, normalised to -0.5..0.5
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  // 1 while hovered/touched: the book straightens up and catches the light
  const active = useMotionValue(0);
  const sway = useMotionValue(0);
  const float = useMotionValue(0);

  const { scrollY } = useScroll();
  const spin = useTransform(scrollY, [0, 700], [0, scrollSpin && !reduce ? 28 : 0], { clamp: true });

  useEffect(() => {
    const nav = navigator as Navigator & { deviceMemory?: number };
    setLite((nav.hardwareConcurrency ?? 8) <= 4 || (nav.deviceMemory ?? 8) <= 4);
    touchOnly.current = window.matchMedia("(hover: none)").matches;
  }, []);

  useAnimationFrame((t) => {
    if (reduce) return;
    // Slow 6s float, 0 → -10px → 0
    float.set((Math.cos((t / 6000) * Math.PI * 2) - 1) * 5);
    // Without a mouse, sway gently until the visitor drags the book
    if (touchOnly.current && !dragging.current) sway.set(Math.sin((t / 5000) * Math.PI * 2) * 9);
    else sway.set(sway.get() * 0.94);
  });

  const targetY = useTransform(() => {
    const a = active.get();
    const resting = angle + px.get() * 30 + sway.get() + spin.get();
    const straight = angle * 0.25 + px.get() * 10;
    return resting + (straight - resting) * a;
  });
  const targetX = useTransform(() => -py.get() * 24 * (1 - active.get() * 0.5));

  const rotateY = useSpring(targetY, SPRING);
  const rotateX = useSpring(targetX, SPRING);
  const lift = useSpring(useTransform(active, [0, 1], [0, -10]), SPRING);
  const y = useTransform(() => float.get() + lift.get());

  const shadowOpacity = useTransform(lift, [0, -10], [0.55, 0.8]);
  const shadowScale = useTransform(y, [-20, 0], [0.82, 1]);
  const glowOpacity = useTransform(lift, [0, -10], [0.55, 1]);
  const shineOpacity = useTransform(lift, [0, -10], [0, 1]);

  const glareX = useTransform(px, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(py, [-0.5, 0.5], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.28), transparent 55%)`;

  function setPointer(e: React.PointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }

  function reset() {
    dragging.current = false;
    px.set(0);
    py.set(0);
    active.set(0);
  }

  const interactive = !reduce;

  return (
    <div
      className={`relative mx-auto w-[var(--w)] select-none [--t:calc(var(--w)*0.11)] ${sizes[size]}`}
      style={{ perspective: 1400, touchAction: "pan-y" }}
      onPointerMove={(e) => {
        if (!interactive) return;
        if (e.pointerType === "mouse" || dragging.current) setPointer(e);
      }}
      onPointerEnter={(e) => interactive && e.pointerType === "mouse" && active.set(1)}
      onPointerLeave={(e) => e.pointerType === "mouse" && reset()}
      onPointerDown={(e) => {
        if (!interactive || e.pointerType === "mouse") return;
        dragging.current = true;
        active.set(1);
        setPointer(e);
      }}
      onPointerUp={(e) => e.pointerType !== "mouse" && reset()}
      onPointerCancel={reset}
    >
      {/* Gold glow behind the book */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-[45%] rounded-full"
        style={{
          opacity: glowOpacity,
          background: "radial-gradient(closest-side, rgba(201,162,75,0.32), rgba(201,162,75,0.08) 55%, transparent)",
        }}
      />

      <motion.div
        className="relative aspect-[2/3] w-full"
        style={{
          rotateX: reduce ? 4 : rotateX,
          rotateY: reduce ? angle : rotateY,
          y: reduce ? 0 : y,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 overflow-hidden rounded-r-[5px] rounded-l-[2px] bg-neutral-900"
          style={{ transform: "translateZ(calc(var(--t) / 2))", backfaceVisibility: "hidden" }}
        >
          <Image
            src={product.coverFront}
            alt={`${product.title} ebook cover`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 340px, (min-width: 640px) 300px, 240px"
            unoptimized={product.coverFront.endsWith(".svg")}
            className="object-cover"
            draggable={false}
          />
          {/* Hinge crease and edge vignette for volume */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[7%] bg-gradient-to-r from-black/55 via-white/10 to-transparent" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.55)]" />
          {/* Static diagonal reflection */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent" />
          {!lite && !reduce && (
            <>
              {/* Light sweeping across the cover */}
              <div className="book-sheen pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              {/* Glare that follows the pointer while hovered */}
              <motion.div className="pointer-events-none absolute inset-0" style={{ background: glare, opacity: shineOpacity }} />
            </>
          )}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-l-[5px] bg-gradient-to-br from-neutral-800 to-neutral-950"
          style={{ transform: "rotateY(180deg) translateZ(calc(var(--t) / 2))" }}
        />

        {/* Spine */}
        <div
          className="absolute top-0 left-1/2 flex h-full items-center justify-center bg-gradient-to-r from-[#0d0d0e] via-[#1c1c1f] to-[#0d0d0e]"
          style={{
            width: "var(--t)",
            marginLeft: "calc(var(--t) / -2)",
            transform: "rotateY(-90deg) translateZ(calc(var(--w) / 2))",
          }}
        >
          <span
            className="font-serif tracking-[0.3em] text-gold [writing-mode:vertical-rl]"
            style={{ fontSize: "calc(var(--t) * 0.42)" }}
          >
            RICHEST WOLF
          </span>
        </div>

        {/* Pages (fore-edge) */}
        <div
          className="absolute top-[3px] bottom-[3px] left-1/2"
          style={{
            width: "calc(var(--t) - 2px)",
            marginLeft: "calc(var(--t) / -2 + 1px)",
            transform: "rotateY(90deg) translateZ(calc(var(--w) / 2 - 3px))",
            backgroundColor: "#f3f0e8",
            backgroundImage:
              "repeating-linear-gradient(90deg, #d9d4c9 0 1px, #f7f5ef 1px 3px), linear-gradient(90deg, rgba(0,0,0,0.25), transparent 30%, transparent 70%, rgba(0,0,0,0.15))",
          }}
        />

        {/* Top and bottom edges, visible when the book tilts */}
        {(["90deg", "-90deg"] as const).map((r) => (
          <div
            key={r}
            className="absolute top-1/2 left-0"
            style={{
              width: "calc(var(--w) - 3px)",
              height: "var(--t)",
              marginTop: "calc(var(--t) / -2)",
              transform: `rotateX(${r}) translateZ(calc(var(--w) * 0.75 - 3px))`,
              backgroundColor: "#ebe7dd",
              backgroundImage: "repeating-linear-gradient(0deg, #d6d0c4 0 1px, #f3f0e8 1px 3px)",
            }}
          />
        ))}
      </motion.div>

      {/* Floor shadow */}
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute -bottom-10 left-1/2 h-7 w-4/5 -translate-x-1/2 rounded-full bg-black ${lite ? "blur-md" : "blur-2xl"}`}
        style={{ opacity: reduce ? 0.55 : shadowOpacity, scaleX: reduce ? 1 : shadowScale }}
      />
    </div>
  );
}
