"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      aria-label="Scroll to content"
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg)]"
      >
        <ChevronDown size={16} className="text-[var(--color-primary)]" />
      </motion.div>
    </motion.a>
  );
}