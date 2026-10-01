"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASINGS, DURATIONS } from "@/lib/animations";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export function Reveal({
  children,
  delay = 0,
  className,
  yOffset = 24,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: DURATIONS.reveal,
        delay,
        ease: EASINGS.expoOut,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
