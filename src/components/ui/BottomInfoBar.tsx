"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface BottomInfoBarProps {
  title: string;
  subline: string;
  imageSrc?: string;
  githubUrl?: string;
  className?: string;
}

export function BottomInfoBar({
  title,
  subline,
  imageSrc,
  githubUrl,
  className = "",
}: BottomInfoBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2 }}
      className={`group flex items-center justify-between gap-4 rounded-full border border-line bg-(--bg-glass-nav) px-4 py-2.5 shadow-(--shadow-elevated) backdrop-blur-2xl backdrop-saturate-180 transition-all duration-300 hover:border-(--accent-primary)/50 sm:px-6 sm:py-3 ${className}`}
    >
      {/* Left: Circular Thumbnail */}
      <div className="flex items-center gap-3.5 min-w-0">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-(--accent-primary)/40 bg-bg p-0.5 shadow-inner">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              width={44}
              height={44}
              className="h-full w-full rounded-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-full bg-elevated text-[10px] font-mono text-(--accent-primary)">
              AI
            </div>
          )}
        </div>

        {/* Center: Title + Mono Subline */}
        <div className="min-w-0">
          <h4 className="truncate font-display text-base tracking-tight text-ink group-hover:text-(--accent-primary) transition-colors sm:text-lg">
            {title}
          </h4>
          <p className="truncate font-mono text-[9px] uppercase tracking-[0.2em] text-muted sm:text-[10px]">
            {subline}
          </p>
        </div>
      </div>

      {/* Right: Circular Action Pill Button */}
      {githubUrl ? (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--accent-primary)/40 bg-(--accent-primary)/10 text-(--accent-primary) shadow-sm transition-all duration-200 hover:scale-105 hover:border-(--accent-primary) hover:bg-(--accent-primary) hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent-primary)"
          title={`View ${title} repository`}
          aria-label={`View ${title} on GitHub`}
        >
          <ArrowUpRight size={16} />
        </a>
      ) : (
        <div
          className="flex h-9 px-3 shrink-0 items-center justify-center rounded-full border border-line bg-elevated text-[9px] font-mono uppercase tracking-wider text-muted"
          title="Repository in peer review"
        >
          Research
        </div>
      )}
    </motion.div>
  );
}
