"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/** Scroll distance past which the navbar becomes liquid glass. */
const SCROLL_THRESHOLD = 20;
/** Half-range, in px, of the scroll-linked highlight travel. */
const HIGHLIGHT_TRAVEL = 160;
/** Easing factor toward the highlight target — keeps direction changes smooth. */
const EASE = 0.06;

/**
 * Drives the liquid glass navbar.
 *
 * - The scroll listener does no work: it records the latest scrollY and
 *   schedules a single rAF. All reads/writes happen inside that frame.
 * - Glass state flips via a boolean (one render per threshold crossing) so the
 *   visual change is handled by CSS transitions, not by React per-frame.
 * - The scroll-linked highlight is eased toward its target every frame, so a
 *   direction reversal glides instead of snapping.
 */
export function useLiquidHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const highlightRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let latestY = window.scrollY;
    let previousY = latestY;
    let direction = 1;
    let current = 0;
    let goal = 0;
    let frameId: number | null = null;
    let queued = false;
    let isScrolled = latestY > SCROLL_THRESHOLD;

    const tick = () => {
      frameId = null;

      // 1. Glass state — flip once, cross-faded by CSS transitions.
      const next = latestY > SCROLL_THRESHOLD;
      if (next !== isScrolled) {
        isScrolled = next;
        setScrolled(next);
      }

      // 2. Scroll direction, with a small deadzone to avoid jitter.
      const delta = latestY - previousY;
      if (Math.abs(delta) > 0.5) direction = delta > 0 ? 1 : -1;
      previousY = latestY;

      // 3. Target highlight position follows document scroll progress.
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(Math.max(latestY / scrollable, 0), 1) : 0;
      goal = progress * HIGHLIGHT_TRAVEL * 2 - HIGHLIGHT_TRAVEL;

      // 4. Ease toward the target (no snapping on direction reversal).
      const diff = goal - current;
      current = Math.abs(diff) < 0.05 ? goal : current + diff * EASE;

      if (highlightRef.current) {
        highlightRef.current.style.transform = `translate3d(${(current + direction * 10).toFixed(2)}px, 0, 0)`;
      }

      // Keep easing after the last scroll event settles.
      if (Math.abs(goal - current) > 0.05) {
        frameId = requestAnimationFrame(tick);
      }
    };

    const schedule = () => {
      if (queued || frameId !== null) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        tick();
      });
    };

    const onScroll = () => {
      latestY = window.scrollY;
      schedule();
    };

    const onResize = () => {
      latestY = window.scrollY;
      schedule();
    };

    if (shouldReduceMotion) {
      // Static fallback: solid surface once scrolled, no highlight animation.
      setScrolled(latestY > SCROLL_THRESHOLD);
      return;
    }

    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [shouldReduceMotion]);

  return { headerRef, highlightRef, scrolled };
}
