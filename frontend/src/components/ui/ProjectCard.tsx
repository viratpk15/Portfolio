"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectDemo } from "@/components/ui/DemoPlaceholder";
import { ArchitectureFlow } from "@/components/ui/ArchitectureFlow";
import { EASINGS } from "@/lib/animations";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface ProjectCardProps {
  project: Project;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * Collapsed: number + title + category (no tagline).
 * Expanded: 500ms height animation revealing the demo visual, description,
 * engineering highlight and tech stack.
 */
export function ProjectCard({ project, index, isOpen, onToggle }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <article
      className={`relative rounded-[18px] border transition-all duration-250 ease-out ${
        isOpen
          ? "border-gold/30 bg-glass shadow-[0_6px_28px_rgba(232,161,0,0.14)] backdrop-blur-lg backdrop-saturate-160"
          : "border-gold/15 bg-glass backdrop-blur-lg backdrop-saturate-160 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-[0_6px_28px_rgba(245,197,24,0.16)]"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${project.id}-details`}
        className="flex w-full items-center gap-4 px-5 py-5 text-left focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset md:gap-6 md:px-7"
      >
        <span
          className={`font-mono text-xs tabular-nums transition-colors ${
            isOpen ? "text-gold" : "text-muted"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="block font-display text-xl tracking-tight text-ink transition-colors group-hover:text-gold md:text-2xl">
              {project.title}
            </span>
            {project.demoImage && (
              <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                Live Preview
              </span>
            )}
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-gold md:text-[11px]">
              {project.category}
            </span>
            <span className="hidden text-muted sm:inline" aria-hidden="true">·</span>
            <div className="hidden flex-wrap items-center gap-1.5 sm:flex">
              {project.stack.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-line bg-elevated/80 px-1.5 py-0.5 font-mono text-[9px] text-ink-secondary"
                >
                  {tag}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="font-mono text-[9px] text-muted">
                  +{project.stack.length - 3}
                </span>
              )}
            </div>
          </div>
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.28, ease: EASINGS.smoothOut }}
          className={`shrink-0 ${isOpen ? "text-gold" : "text-muted"}`}
          aria-hidden="true"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${project.id}-details`}
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASINGS.expoOut }}
            className="overflow-hidden"
          >
            <div className="border-t border-line px-5 pb-7 pt-6 md:px-7">
              <div className="grid gap-7 lg:grid-cols-[1fr_1fr] lg:gap-9">
                {/* Demo visual — left on desktop */}
                <ProjectDemo
                  visual={project.visual}
                  demoImage={project.demoImage}
                  title={project.title}
                />

                {/* Description — right on desktop */}
                <div className="min-w-0">
                  {project.description.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="mb-3.5 text-sm leading-relaxed text-ink-secondary"
                    >
                      {paragraph}
                    </p>
                  ))}

                  <div className="mt-6">
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      Engineering Highlight
                    </h4>
                    <p className="mt-2 border-l-2 border-gold/40 pl-3 text-sm italic leading-relaxed text-ink-secondary">
                      {project.highlight}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      Tech Stack
                    </h4>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-line bg-elevated px-2.5 py-1 font-mono text-[10px] text-ink-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-gold group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium focus-visible:ring-2 focus-visible:ring-honey"
                      >
                        View Code
                        <ExternalLink
                          size={14}
                          className="transition-transform duration-200 group-hover:-translate-y-0.5"
                        />
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 font-mono text-xs text-gold/90">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold/70" />
                        <span>Scholarly Research · Code Access Upon Publication</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {project.flow && <ArchitectureFlow steps={project.flow} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
