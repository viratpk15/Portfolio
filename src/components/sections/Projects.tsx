"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Search, SlidersHorizontal, RotateCcw } from "lucide-react";
import { projects, filterTabs, type ProjectFilterCategory } from "@/data/projects";
import { PillButton } from "@/components/ui/PillButton";
import { BottomInfoBar } from "@/components/ui/BottomInfoBar";
import { ArchitectureFlow } from "@/components/ui/ArchitectureFlow";
import { DemoPlaceholder } from "@/components/ui/DemoPlaceholder";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<ProjectFilterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalImage, setActiveModalImage] = useState<{ src: string; title: string } | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.filterCategory === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      project.title.toLowerCase().includes(q) ||
      project.category.toLowerCase().includes(q) ||
      project.highlight.toLowerCase().includes(q) ||
      project.stack.some((tech) => tech.toLowerCase().includes(q))
    );
  });

  return (
    <section
      id="projects"
      className="relative w-full border-t border-line bg-bg py-24 sm:py-36 px-6 sm:px-12 lg:px-16 overflow-hidden transition-colors duration-350"
    >
      {/* Ghost Editorial Watermark */}
      <div
        className="ghost-typography"
        style={{ top: "5%", left: "-2%", fontSize: "clamp(10rem, 20vw, 24rem)" }}
        aria-hidden="true"
      >
        SYSTEMS
      </div>

      {/* ── FULL-BLEED BACKGROUND IMAGE (hero-mountain) ── */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/hero-mountain.jpg"
          alt="Projects background — mountain vista"
          fill
          sizes="100vw"
          className="object-cover object-center theme-image-graded"
        />
        {/* Deep cinematic gradient overlay matching Home and Contact */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--bg-base) 96%, transparent) 0%, color-mix(in srgb, var(--bg-base) 88%, transparent) 35%, color-mix(in srgb, var(--bg-base) 94%, transparent) 75%, var(--bg-base) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-bleed)", opacity: 0.22 }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-1">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-line pb-4 mb-16">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.28em] text-(--accent-primary) font-semibold">
            04 / PROJECTS
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            INDEXED SYSTEMS · 2026
          </span>
        </div>

        {/* Introduction Title & Controls */}
        <div className="mb-20">
          <h2
            className="font-display text-ink max-w-3xl leading-[1.08]"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Systems designed, engineered, and deployed.
          </h2>
          <p
            className="mt-4 max-w-2xl text-(--text-secondary) font-light"
            style={{
              fontSize: "clamp(1rem, 1.1vw, 1.125rem)",
              lineHeight: 1.65,
            }}
          >
            Each architecture was engineered to address concrete production challenges across multi-agent orchestration,
            real-time telemetry inference, deep learning observability, and evidence-grounded compliance.
          </p>

          {/* Category Filter Pills & Search */}
          <div className="mt-10 flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {filterTabs.map((tab) => {
                const count =
                  tab.id === "all"
                    ? projects.length
                    : projects.filter((p) => p.filterCategory === tab.id).length;
                const isActive = selectedCategory === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedCategory(tab.id as ProjectFilterCategory)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 focus-visible:outline-none ${
                      isActive
                        ? "border border-(--accent-primary) bg-(--accent-primary)/15 text-(--accent-primary) shadow-sm font-semibold"
                        : "border border-line bg-glass text-(--text-secondary) hover:border-(--accent-primary)/50 hover:text-ink"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                        isActive ? "bg-(--accent-primary)/30 text-(--accent-primary)" : "bg-elevated text-muted"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search
                size={14}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stack, models..."
                className="w-full rounded-full border border-line bg-glass pl-9 pr-8 py-2 text-xs text-ink placeholder:text-muted transition-colors focus:border-(--accent-primary) focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Projects Spreads */}
        <div className="space-y-36 sm:space-y-48">
          {filteredProjects.map((project, index) => {
            const numStr = String(index + 1).padStart(2, "0");
            const isEven = index % 2 === 0;

            return (
              <article
                key={project.id}
                className="relative flex flex-col justify-between"
              >
                {/* 1. GIANT PROJECT NUMBER (Reference 2 style) */}
                <div
                  className={`pointer-events-none absolute -top-24 sm:-top-32 select-none font-display ${
                    isEven ? "right-2 sm:right-6" : "left-2 sm:left-6"
                  }`}
                  style={{
                    fontSize: "clamp(8rem, 22vw, 20rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.06em",
                    lineHeight: 0.85,
                    color: "color-mix(in srgb, var(--accent-primary) 8%, transparent)",
                  }}
                  aria-hidden="true"
                >
                  {numStr}
                </div>

                {/* 2. MICRO-LABELS (Top of project section) */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-3 mb-8 text-muted font-mono text-xs uppercase tracking-[0.22em]">
                  <div className="flex items-center gap-2">
                    <span className="text-(--accent-primary) font-semibold">PROJECT {numStr}</span>
                    <span>/</span>
                    <span>{String(projects.length).padStart(2, "0")}</span>
                  </div>
                  <div className="hidden sm:block text-(--text-secondary)">
                    {project.category}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-(--accent-primary) animate-pulse" />
                    <span className="text-(--accent-primary)">ACTIVE SYSTEM</span>
                  </div>
                </div>

                {/* 3. MAIN LAYOUT: Split Liquid Glass Card (Reference 2 style) */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 rounded-4xl border border-line bg-glass backdrop-blur-2xl p-6 sm:p-8 lg:p-10 shadow-(--shadow-elevated) transition-all duration-300 hover:border-line-strong group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* LEFT PANEL (35% - 4 Cols) */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full min-w-0">
                      <div>
                        <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-[0.22em] text-(--accent-primary) font-semibold">
                          <span>{numStr}</span>
                          <span>/</span>
                          <span>{project.positioning || "SYSTEM ARCHITECTURE"}</span>
                        </div>
                        <h3
                          className="font-display text-ink leading-[1.08] wrap-break-word"
                          style={{
                            fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)",
                            fontWeight: 500,
                            letterSpacing: "-0.02em",
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                          }}
                        >
                          {project.title.includes(".ai") ? (
                            <>
                              {project.title.replace(".ai", "")}
                              <span style={{ color: "var(--accent-primary)" }}>.ai</span>
                            </>
                          ) : (
                            project.title
                          )}
                        </h3>
                        <p className="mt-2.5 font-mono text-xs uppercase tracking-wider text-(--text-secondary) leading-relaxed">
                          {project.category}
                        </p>

                        {/* Capabilities badge strip */}
                        {project.capabilities && project.capabilities.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.capabilities.map((cap) => (
                              <span
                                key={cap}
                                className="inline-flex items-center px-3 py-1 rounded-full border border-(--accent-primary)/35 bg-(--accent-primary)/12 text-xs font-mono text-(--accent-bright) tracking-wider uppercase font-medium shadow-2xs"
                              >
                                {cap}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        {project.github ? (
                          <PillButton
                            href={project.github}
                            variant="primary"
                            icon={<ArrowUpRight size={14} />}
                            external
                          >
                            View Project
                          </PillButton>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-line bg-elevated text-muted font-mono text-xs uppercase tracking-wider">
                            Research In Progress
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CENTER PANEL (45% - 5 Cols): Clear demo visual */}
                    <div className="lg:col-span-5 relative">
                      <div className="w-full aspect-16/10 min-h-65 md:min-h-120 rounded-3xl overflow-hidden border border-line">
                        <DemoPlaceholder
                          variant={project.variant}
                          projectId={project.id}
                          title={project.title}
                          demoImage={project.demoImage || project.image}
                          onExpandImage={(img) => setActiveModalImage(img)}
                        />
                      </div>
                    </div>

                    {/* RIGHT PANEL (20% - 3 Cols): Tech stack chips + Engineering highlight */}
                    <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-6">
                      <div>
                        <span className="block font-mono text-xs uppercase tracking-[0.22em] text-muted mb-3">
                          TECHNOLOGY STACK
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-line bg-surface/80 px-3 py-1 font-mono text-xs sm:text-[13px] text-(--text-secondary) font-medium transition-colors hover:border-(--accent-primary) hover:text-ink shadow-2xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Engineering Highlight Box */}
                      <div
                        className="rounded-2xl border border-(--accent-primary)/35 bg-(--accent-primary)/8 p-5 font-light text-ink"
                        style={{
                          fontSize: "clamp(1.02rem, 1.12vw, 1.15rem)",
                          lineHeight: 1.65,
                        }}
                      >
                        <span className="block font-mono text-xs uppercase tracking-[0.24em] text-(--accent-bright) font-semibold mb-2">
                          ENGINEERING HIGHLIGHT
                        </span>
                        {project.highlight}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 4. DESCRIPTION: Two-column editorial spread */}
                <div
                  className="relative z-10 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-(--text-secondary) font-light"
                  style={{
                    fontSize: "clamp(1.04rem, 1.15vw, 1.16rem)",
                    lineHeight: 1.75,
                  }}
                >
                  <div>
                    <p>{project.description[0]}</p>
                    {project.description[1] && (
                      <p className="mt-4">{project.description[1]}</p>
                    )}
                  </div>

                  <div>
                    {project.description[2] && <p>{project.description[2]}</p>}
                    
                    {/* Architecture Diagram if available */}
                    {project.flow && project.flow.length > 0 && (
                      <ArchitectureFlow
                        steps={project.flow}
                        label={`${project.title} Execution Pipeline`}
                      />
                    )}
                  </div>
                </div>

                {/* 5. BOTTOM INFO BAR (Reference 2 style) */}
                <div className="relative z-10 mt-10">
                  <BottomInfoBar
                    title={project.title}
                    subline={project.category}
                    imageSrc={project.demoImage}
                    githubUrl={project.github}
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty Search Fallback */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-line bg-(--bg-elevated)/40 py-20 text-center">
            <SlidersHorizontal size={24} className="text-(--accent-primary) mb-4" />
            <h3 className="font-display text-2xl text-ink">
              No matching systems found
            </h3>
            <p className="mt-2 text-muted text-sm max-w-sm">
              No systems matched your criteria &ldquo;{searchQuery}&rdquo;. Try another term or reset.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-6 flex items-center gap-2 rounded-full border border-(--accent-primary)/40 bg-(--accent-primary)/10 px-5 py-2 font-mono text-xs uppercase tracking-wider text-(--accent-primary) hover:bg-(--accent-primary)/20"
            >
              <RotateCcw size={12} />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Fullscreen Screenshot Zoom */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalImage(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 sm:p-8 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-6xl w-full rounded-2xl overflow-hidden border border-line bg-bg shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-line bg-elevated px-6 py-4">
                <span className="font-display text-lg text-ink">
                  {activeModalImage.title} — Interface Inspection
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalImage(null)}
                  className="rounded-full border border-line p-2 text-muted hover:text-(--accent-primary)"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative aspect-16/10 w-full max-h-[75vh]">
                <Image
                  src={activeModalImage.src}
                  alt={activeModalImage.title}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
