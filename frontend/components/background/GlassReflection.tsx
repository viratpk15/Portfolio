"use client";

import { motion } from "framer-motion";

function useReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function GlassReflection() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
      {/* Subtle glass reflection overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.02) 0%, transparent 70%)",
        }}
        animate={{
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Soft directional light */}
      <motion.div
        className="absolute -top-40 left-0 right-0 h-80 opacity-15"
        style={{
          background: "linear-gradient(180deg, rgba(212, 165, 116, 0.03), transparent)",
        }}
        animate={{
          y: [-40, 20, -40],
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </div>
  );
}