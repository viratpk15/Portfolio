"use client";

import { motion } from "framer-motion";

function useReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function FloatingLightBlobs() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
        <div className="absolute left-[2%] top-[5%] h-[500px] w-[500px] rounded-full bg-[var(--color-primary)]/5 blur-[120px]" />
        <div className="absolute right-[5%] top-[30%] h-[450px] w-[450px] rounded-full bg-[var(--color-secondary)]/5 blur-[120px]" />
        <div className="absolute bottom-[15%] left-[25%] h-[400px] w-[400px] rounded-full bg-[var(--color-primary)]/5 blur-[150px]" />
        <div className="absolute left-[15%] top-[45%] h-[350px] w-[350px] rounded-full bg-[var(--color-secondary)]/5 blur-[100px]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
      {/* Primary light blob - ultra-slow warm glow */}
      <motion.div
        className="absolute left-[2%] top-[5%] h-[500px] w-[500px] rounded-full bg-[var(--color-primary)]/5 blur-[120px] will-change-transform"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -35, 25, 0],
          scale: [1, 1.01, 0.99, 1],
        }}
        transition={{
          duration: 60,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Secondary light blob - soft ambient */}
      <motion.div
        className="absolute right-[5%] top-[30%] h-[450px] w-[450px] rounded-full bg-[var(--color-secondary)]/4 blur-[120px] will-change-transform"
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 30, -25, 0],
          scale: [1, 0.995, 1.015, 1],
        }}
        transition={{
          duration: 65,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Tertiary light blob - deep atmosphere */}
      <motion.div
        className="absolute bottom-[15%] left-[25%] h-[400px] w-[400px] rounded-full bg-[var(--color-primary)]/4 blur-[150px] will-change-transform"
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -30, 35, 0],
          scale: [1, 1.01, 1.005, 1],
        }}
        transition={{
          duration: 70,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Inner warm glow - very subtle */}
      <motion.div
        className="absolute left-[15%] top-[45%] h-[350px] w-[350px] rounded-full bg-[var(--color-secondary)]/3 blur-[100px] will-change-transform"
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -20, 15, 0],
          opacity: [0.03, 0.04, 0.03],
        }}
        transition={{
          duration: 75,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </div>
  );
}