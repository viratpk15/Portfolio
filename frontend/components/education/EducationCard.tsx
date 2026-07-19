"use client";

import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  degree: string;
  institute: string;
  period: string;
  description: string;
  score?: string;
  scoreLabel?: string;
  index?: number;
}

export default function EducationCard({
  degree,
  institute,
  period,
  description,
  score,
  scoreLabel,
  index = 0,
}: Props) {
  return (
    <FadeIn delay={index * 0.08}>
      <div className="group relative">
        {/* Timeline dot - stone marker */}
        <motion.div 
          className="absolute left-0 top-0 -ml-[42px] hidden h-5 w-5 rounded-full border-2 border-[var(--glass-stroke-strong)] bg-[var(--glass-bg-strong)] shadow-[0_0_0_4px_var(--color-bg)] md:block will-change-transform"
          whileHover={{ scale: 1.2, backgroundColor: "rgba(212, 165, 116, 0.2)" }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div
          className={cn(
            "surface-sheen relative rounded-[var(--radius-xl)] border border-[var(--glass-stroke)] bg-[var(--glass-bg)] p-8 backdrop-blur-xl transition-all duration-500 will-change-transform md:ml-[24px]"
          )}
          whileHover={{ 
            y: -6, 
            borderColor: "var(--glass-stroke-strong)",
            boxShadow: "var(--shadow-md)"
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Period badge */}
          <div className="mb-4 inline-flex">
            <span className="rounded-full border border-[var(--glass-stroke-accent)] bg-[var(--glass-bg-intense)] px-4 py-1.5 text-xs font-medium text-[var(--color-primary)] transition-all duration-300 group-hover:border-[var(--glass-stroke-strong)] group-hover:bg-[var(--glass-bg-strong)]">
              {period}
            </span>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-primary)]">
              {degree}
            </h3>
            <p className="text-lg font-medium text-[var(--color-text-secondary)] transition-colors group-hover:text-[var(--color-text-primary)]">{institute}</p>
            
            <p className="max-w-2xl text-[var(--color-text-tertiary)] transition-colors group-hover:text-[var(--color-text-secondary)]">
              {description}
            </p>
          </div>

          {/* Score badge if exists */}
          {score && (
            <motion.div 
              className="mt-6 inline-flex rounded-[var(--radius-lg)] border border-[var(--glass-stroke)] bg-[var(--glass-bg-intense)] px-5 py-3 transition-all duration-300 group-hover:border-[var(--glass-stroke-accent)] will-change-transform"
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                {score}
              </span>
              <span className="ml-2 text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                {scoreLabel}
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </FadeIn>
  );
}