"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface ProgressBarProps {
  label: string;
  percentage: number;
  delay?: number;
}

export function ProgressBar({ label, percentage, delay = 0 }: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setCount(percentage);
      return;
    }

    let start = 0;
    const duration = 900; // ms
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = percentage / steps;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += increment;
        if (start >= percentage) {
          setCount(percentage);
          clearInterval(interval);
        } else {
          setCount(Math.round(start));
        }
      }, stepTime);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, percentage, delay, shouldReduceMotion]);

  return (
    <div ref={ref} className="group py-2">
      <div className="flex items-center justify-between text-xs font-mono tracking-wider">
        <span className="text-(--text-secondary) transition-colors duration-200 group-hover:text-ink">
          {label}
        </span>
        <span className="text-muted tabular-nums transition-colors duration-200 group-hover:text-(--accent-primary) font-medium">
          {count}%
        </span>
      </div>

      {/* 1px Thin Track */}
      <div className="relative mt-2 h-[1.5px] w-full overflow-hidden bg-line">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: percentage / 100 } : { scaleX: 0 }}
          transition={{
            duration: 0.9,
            delay: delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            originX: 0,
            background: "var(--gradient-progress)",
          }}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
