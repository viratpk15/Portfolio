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
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
      {/* Primary light blob - slow breathing motion */}
      <motion.div
        className="absolute left-[2%] top-[5%] h-[500px] w-[500px] rounded-full bg-[var(--color-primary)]/5 blur-[120px] will-change-transform"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.02, 0.99, 1],
        }}
        transition={{
          duration: 45,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Secondary light blob */}
      <motion.div
        className="absolute right-[5%] top-[30%] h-[450px] w-[450px] rounded-full bg-[var(--color-secondary)]/5 blur-[120px] will-change-transform"
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.995, 1.035, 1],
        }}
        transition={{
          duration: 50,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Tertiary light blob - constrained to viewport */}
      <motion.div
        className="absolute bottom-[15%] left-[25%] h-[400px] w-[400px] rounded-full bg-[var(--color-primary)]/5 blur-[150px] will-change-transform"
        animate={{
          x: [0, 40, -50, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.015, 1.005, 1],
        }}
        transition={{
          duration: 55,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Subtle inner glow - viewport constrained */}
      <motion.div
        className="absolute left-[15%] top-[45%] h-[350px] w-[350px] rounded-full bg-[var(--color-secondary)]/3 blur-[100px] will-change-transform"
        animate={{
          x: [0, 25, -15, 0],
          y: [0, -25, 20, 0],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 35,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </div>
  );
}