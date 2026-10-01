"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface AnimatedCounterProps {
  value: string; // e.g. "CGPA 9.39", "93.33%", "91.8%"
  className?: string;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(value);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    setDisplayValue(value);
    hasAnimatedRef.current = false;
  }, [value]);

  useEffect(() => {
    if (!isInView || shouldReduceMotion || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    // Match numbers with possible decimals (e.g. 9.33, 93.33, 91.8)
    const match = value.match(/(\d+(\.\d+)?)/);
    if (!match) return;

    const numericVal = parseFloat(match[1]);
    const prefix = value.substring(0, match.index || 0);
    const suffix = value.substring((match.index || 0) + match[0].length);
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;

    const duration = 1400; // 1.4 seconds
    const startTime = performance.now();
    let rafId: number | null = null;

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing curve from central spec: expoOut
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNum = (numericVal * easeProgress).toFixed(decimals);

      setDisplayValue(`${prefix}${currentNum}${suffix}`);

      if (progress < 1) {
        rafId = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    rafId = requestAnimationFrame(updateCounter);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isInView, value, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
