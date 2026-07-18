"use client";

import { motion } from "framer-motion";

function useReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function GradientBlur() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 -z-40 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.7, 0.85, 0.7],
        }}
        transition={{
          duration: 40,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </motion.div>
    </div>
  );
}