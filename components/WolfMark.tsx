/** Geometric wolf head, matching the placeholder cover. */
export default function WolfMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-160 -180 320 365" className={className} fill="none" stroke="currentColor" strokeWidth="10" strokeLinejoin="round" aria-hidden>
      <path d="M-150 -170 L-95 -40 L0 -80 L95 -40 L150 -170 L120 30 L60 120 L0 175 L-60 120 L-120 30 Z" />
      <path d="M-95 -40 L-60 120 M95 -40 L60 120 M0 -80 L0 175" strokeWidth="6" />
      <path d="M-120 30 L-40 40 L0 175 L40 40 L120 30" strokeWidth="6" />
    </svg>
  );
}
