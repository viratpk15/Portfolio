"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  blurAmount?: number;
}

function useReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  blurAmount = 8,
}: Props) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        filter: `blur(${blurAmount}px)`,
        y: 30,
      }}
      whileInView={{ 
        opacity: 1, 
        filter: "blur(0px)",
        y: 0
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}