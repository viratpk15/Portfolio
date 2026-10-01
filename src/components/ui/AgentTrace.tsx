"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

/**
 * Signature element: a thin animated path that threads between sections,
 * evoking a call stack / agent execution trace — tying the site's motion
 * language back to the subject's actual work (multi-agent orchestration).
 */
export function AgentTrace({ label }: { label?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex items-center justify-center py-2" aria-hidden="true">
      <svg width="100%" height="48" viewBox="0 0 400 48" preserveAspectRatio="none" className="max-w-6xl w-full opacity-70">
        <line x1="0" y1="24" x2="400" y2="24" stroke="var(--border-hairline)" strokeWidth="1" />
        <motion.circle
          r="3.5"
          fill="url(#trace-gradient)"
          initial={shouldReduceMotion ? { cx: 400 } : { cx: 0 }}
          whileInView={{ cx: 400 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          cy="24"
        />
        <defs>
          <linearGradient id="trace-gradient" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--accent-secondary)" />
            <stop offset="100%" stopColor="var(--accent-primary)" />
          </linearGradient>
        </defs>
      </svg>
      {label && (
        <span className="absolute font-mono text-[10px] uppercase tracking-[0.2em] text-muted bg-bg px-3">
          {label}
        </span>
      )}
    </div>
  );
}
