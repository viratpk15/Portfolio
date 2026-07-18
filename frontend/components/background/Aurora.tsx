"use client";

import { motion } from "framer-motion";

function useReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Aurora() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: "var(--z-background-aurora)" }}>
        <div className="absolute left-[-15%] top-[-20%] h-[900px] w-[900px] rounded-full bg-[var(--color-primary)]/5 blur-[180px]" />
        <div className="absolute right-[-20%] top-[5%] h-[800px] w-[800px] rounded-full bg-[var(--color-secondary)]/5 blur-[180px]" />
        <div className="absolute bottom-[-25%] left-[25%] h-[900px] w-[900px] rounded-full bg-[var(--color-secondary)]/5 blur-[220px]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: "var(--z-background-aurora)" }}>
      {/* Primary aurora - slowest, most subtle */}
      <motion.div
        className="absolute left-[-15%] top-[-20%] h-[900px] w-[900px] rounded-full bg-[var(--color-primary)]/8 blur-[180px] will-change-transform"
        animate={{
          x: [0, 60, -40, 20, 0],
          y: [0, -40, 30, -20, 0],
          scale: [1, 1.01, 0.995, 1.005, 1],
        }}
        transition={{
          duration: 60,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Secondary aurora - subtle drift */}
      <motion.div
        className="absolute right-[-20%] top-[5%] h-[800px] w-[800px] rounded-full bg-[var(--color-secondary)]/7 blur-[180px] will-change-transform"
        animate={{
          x: [0, -50, 40, -25, 0],
          y: [0, 40, -35, 15, 0],
          scale: [1, 0.99, 1.01, 0.998, 1],
        }}
        transition={{
          duration: 65,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Tertiary aurora - deepest breath */}
      <motion.div
        className="absolute bottom-[-25%] left-[25%] h-[900px] w-[900px] rounded-full bg-[var(--color-secondary)]/6 blur-[220px] will-change-transform"
        animate={{
          x: [0, 40, -50, 10, 0],
          y: [0, -45, 50, -15, 0],
          scale: [1, 1.005, 1.002, 0.996, 1],
        }}
        transition={{
          duration: 70,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </div>
  );
}