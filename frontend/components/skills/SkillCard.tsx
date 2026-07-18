"use client";

import { useState } from "react";
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
      <div className="surface-sheen flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--glass-stroke)] bg-[var(--glass-bg)] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[var(--glass-stroke-strong)]">
        {/* Category indicator */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]" />
          <h3 className="text-lg font-semibold tracking-tight text-[var(--color-text-primary)]">
            {title}
          </h3>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-2.5">
          {displayedSkills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg-strong)] px-4 py-2 text-sm font-medium text-[var(--color-text-tertiary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--glass-stroke-accent)] hover:bg-[var(--glass-bg-intense)] hover:text-[var(--color-text-primary)]"
            >
              {skill}
            </span>
          ))}
          {remainingCount > 0 && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center rounded-full border border-[var(--glass-stroke-accent)] bg-[var(--glass-bg-intense)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--glass-bg)]"
            >
              {expanded ? `Show less` : `+${remainingCount} more`}
            </button>
          )}
        </div>
      </div>
    </FadeIn>
  );
}