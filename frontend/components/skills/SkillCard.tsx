"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

interface Props {
  title: string;
  skills: string[];
  index?: number;
}

export default function SkillCard({ title, skills, index = 0 }: Props) {
  const [expanded, setExpanded] = useState(false);
  const visibleCount = 8;
  
  const displayedSkills = expanded ? skills : skills.slice(0, visibleCount);
  const remainingCount = skills.length - visibleCount;

  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        className="surface-sheen flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--glass-stroke)] bg-[var(--glass-bg)] p-8 backdrop-blur-xl will-change-transform"
        whileHover={{ 
          y: -6, 
          borderColor: "var(--glass-stroke-strong)",
          boxShadow: "var(--shadow-md)"
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Category indicator */}
        <div className="mb-6 flex items-center gap-3">
          <motion.span 
            className="h-2 w-2 rounded-full bg-[var(--color-primary)]"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <h3 className="text-lg font-semibold tracking-tight text-[var(--color-text-primary)]">
            {title}
          </h3>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-2.5">
          {displayedSkills.map((skill, i) => (
            <motion.span
              key={skill}
              className="inline-flex items-center rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg-strong)] px-4 py-2 text-sm font-medium text-[var(--color-text-tertiary)] will-change-transform"
              whileHover={{ 
                y: -2.5,
                scale: 1.04,
                borderColor: "var(--glass-stroke-accent)",
                backgroundColor: "var(--glass-bg-intense)",
                color: "var(--color-text-primary)"
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: i * 0.01 }}
            >
              {skill}
            </motion.span>
          ))}
          {remainingCount > 0 && (
            <motion.button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center rounded-full border border-[var(--glass-stroke-accent)] bg-[var(--glass-bg-intense)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all duration-300 will-change-transform"
              whileHover={{ y: -2, scale: 1.03, backgroundColor: "var(--glass-bg-strong)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {expanded ? `Show less` : `+${remainingCount} more`}
            </motion.button>
          )}
        </div>
      </motion.div>
    </FadeIn>
  );
}