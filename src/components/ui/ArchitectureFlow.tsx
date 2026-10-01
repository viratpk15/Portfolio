"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { EASINGS, DURATIONS } from "@/lib/animations";

/**
 * Architecture pipeline that draws itself node by node when it enters view.
 * Steps wrap onto additional rows on narrow screens.
 */
export function ArchitectureFlow({
  steps,
  label,
}: {
  steps: string[];
  label?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-7">
      <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {label ?? "Architecture Flow"}
      </h4>

      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <motion.span
              initial={shouldReduceMotion ? false : { opacity: 0, y: 6, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: DURATIONS.reveal * 0.6,
                delay: i * 0.14,
                ease: EASINGS.expoOut,
              }}
              className="rounded-md border border-gold/25 bg-gold/[0.06] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-secondary"
            >
              {step}
            </motion.span>

            {i < steps.length - 1 && (
              <motion.span
                initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: DURATIONS.reveal * 0.5,
                  delay: i * 0.14 + 0.1,
                  ease: EASINGS.smoothOut,
                }}
                style={{ originX: 0 }}
                className="h-px w-5 shrink-0"
                aria-hidden="true"
              >
                <span className="block h-px w-full" style={{ background: "var(--gradient-progress)" }} />
              </motion.span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
