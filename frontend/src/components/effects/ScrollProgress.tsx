"use client";

import { useScrollProgress } from "@/lib/hooks/useScrollProgress";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

/**
 * 1.5px hairline scroll-progress bar pinned to the very top edge of the viewport.
 * Fill: var(--gradient-progress).
 */
export function ScrollProgress() {
  const progress = useScrollProgress();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-100 h-[1.5px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left will-change-transform"
        style={{
          background: "var(--gradient-progress)",
          transform: `scaleX(${progress})`,
          transition: "transform 60ms linear",
        }}
      />
    </div>
  );
}
