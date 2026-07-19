"use client";

import { motion } from "framer-motion";

function useReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Noise() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 -z-10 opacity-15 mix-blend-overlay pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/noise.png')",
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <motion.div
        className="absolute inset-0 opacity-15 mix-blend-overlay"
        animate={{
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/noise.png')",
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
          }}
        />
      </motion.div>
    </div>
  );
}
