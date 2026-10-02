"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Terminal, Network, Server, Sparkles } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const systems = [
  {
    number: "01",
    title: "ML & GENERATIVE AI",
    subtitle: "Models & Deep Learning",
    icon: Cpu,
    description:
      "Developing applied machine learning models and generative AI systems—engineering retrieval-augmented pipelines (RAG), deep learning fundamentals, and analytical data workflows.",
    skills: [
      { name: "Machine Learning", level: "Core" },
      { name: "Deep Learning Fundamentals", level: "Core" },
      { name: "LLMs", level: "Applied" },
      { name: "RAG", level: "Production" },
      { name: "Prompt Engineering", level: "Applied" },
      { name: "Scikit-learn", level: "Core" },
      { name: "Pandas & NumPy", level: "Core" },
      { name: "PyTorch", level: "Applied" },
    ],
  },
  {
    number: "02",
    title: "AI AGENTS & ORCHESTRATION",
    subtitle: "Autonomous Workflows",
    icon: Network,
    description:
      "Architecting deterministic agentic workflows and multi-agent graphs with LangGraph, Model Context Protocol (MCP) integrations, structured tool calling, and dynamic LLM query routing.",
    skills: [
      { name: "AI Agents", level: "Specialized" },
      { name: "Multi-Agent Systems", level: "Specialized" },
      { name: "LangGraph", level: "Specialized" },
      { name: "LangChain", level: "Production" },
      { name: "MCP", level: "Applied" },
      { name: "Tool Calling", level: "Production" },
      { name: "Agentic Workflows", level: "Specialized" },
      { name: "LLM Routing", level: "Production" },
    ],
  },
  {
    number: "03",
    title: "FULL-STACK AI ENGINEERING",
    subtitle: "Applications & Interfaces",
    icon: Terminal,
    description:
      "Building responsive frontend interfaces and reliable Python backends with FastAPI and Flask, pairing React and TypeScript with clean REST API contracts and Supabase.",
    skills: [
      { name: "Python", level: "Core" },
      { name: "FastAPI", level: "Production" },
      { name: "Flask", level: "Production" },
      { name: "React", level: "Core" },
      { name: "TypeScript", level: "Core" },
      { name: "JavaScript", level: "Core" },
      { name: "HTML & CSS", level: "Core" },
      { name: "REST APIs", level: "Production" },
      { name: "Supabase", level: "Applied" },
    ],
  },
  {
    number: "04",
    title: "ENGINEERING & INFRASTRUCTURE",
    subtitle: "Foundations & Tooling",
    icon: Server,
    description:
      "Grounding systems in robust Computer Science fundamentals—data structures, OOP, automated testing with Pytest, Docker containerization, and vector databases.",
    skills: [
      { name: "SQL & MySQL", level: "Core" },
      { name: "ChromaDB & Vector DBs", level: "Production" },
      { name: "Git & GitHub", level: "Core" },
      { name: "Docker", level: "Applied" },
      { name: "CI/CD & Pytest / Vitest", level: "Applied" },
      { name: "OpenCV", level: "Applied" },
      { name: "API Security", level: "Applied" },
      { name: "OOP (Java & Python)", level: "Core" },
      { name: "Data Structures & Algorithms", level: "Core" },
      { name: "C", level: "Foundational" },
    ],
  },
];

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="capabilities"
      className="relative w-full overflow-hidden transition-colors duration-350"
      style={{
        borderTop: "1px solid var(--border-hairline)",
      }}
    >
      <span id="skills" className="sr-only" aria-hidden="true" />

      {/* Ghost Editorial Watermark */}
      <div
        className="ghost-typography"
        style={{ top: "10%", left: "-4%", fontSize: "clamp(10rem, 20vw, 24rem)" }}
        aria-hidden="true"
      >
        CAPABILITIES
      </div>

      {/* ── PARVATI VALLEY CINEMATIC BACKGROUND ── */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/about-kheerganga.jpg"
          alt="Parvati Valley landscape"
          fill
          sizes="100vw"
          className="object-cover object-center theme-image-graded"
        />
        {/* Calibrated overlay ensuring landscape visibility while maintaining high contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--bg-base) 92%, transparent) 0%, color-mix(in srgb, var(--bg-base) 78%, transparent) 40%, color-mix(in srgb, var(--bg-base) 92%, transparent) 80%, var(--bg-base) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-bleed)", opacity: 0.22 }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 py-20 sm:py-28 relative z-1">
        {/* Section header */}
        <div
          className="flex items-center justify-between pb-5 mb-14"
          style={{ borderBottom: "1px solid var(--border-hairline)" }}
        >
          <span
            className="font-mono text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold"
            style={{ color: "var(--accent-primary)" }}
          >
            03 / Capabilities
          </span>
          <span
            className="font-mono text-xs uppercase tracking-[0.22em]"
            style={{ color: "var(--text-muted)" }}
          >
            Four Intelligent Disciplines · 2026
          </span>
        </div>

        {/* Large headline */}
        <div className="mb-16 max-w-4xl">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-display"
            style={{
              fontSize: "clamp(2.8rem, 6.5vw, 6rem)",
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
            }}
          >
            Intelligent Systems &amp;<br />
            <span style={{ color: "var(--accent-primary)" }}>Core Competencies</span>
          </motion.h2>
          <p
            className="mt-6 max-w-2xl font-light text-(--text-secondary)"
            style={{ fontSize: "clamp(1.05rem, 1.2vw, 1.2rem)", lineHeight: 1.7 }}
          >
            Technical capabilities grounded in applied machine learning, deterministic multi-agent orchestration, full-stack API engineering, and robust software foundations.
          </p>
        </div>

        {/* 2x2 High-Visibility Capability Dossier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {systems.map((sys, sysIdx) => {
            const Icon = sys.icon;

            return (
              <motion.div
                key={sys.number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: sysIdx * 0.12,
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-3xl border border-line-strong bg-glass backdrop-blur-2xl p-7 sm:p-10 shadow-(--shadow-elevated) transition-all duration-300 hover:border-(--accent-primary) flex flex-col justify-between"
              >
                {/* Header: System Number, Category Icon, Title */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-display text-3xl sm:text-4xl font-semibold tracking-tight"
                        style={{ color: "var(--accent-bright)" }}
                      >
                        {sys.number}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                        / 04
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-surface/70">
                      <Icon size={16} className="text-(--accent-primary)" />
                      <span className="font-mono text-xs uppercase tracking-wider text-(--text-secondary)">
                        {sys.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3
                    className="font-display tracking-tight text-ink mb-3 group-hover:text-(--accent-bright) transition-colors"
                    style={{
                      fontSize: "clamp(1.9rem, 2.6vw, 2.5rem)",
                      fontWeight: 500,
                      lineHeight: 1.1,
                    }}
                  >
                    {sys.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-(--text-secondary) font-light mb-8"
                    style={{
                      fontSize: "clamp(0.98rem, 1.05vw, 1.08rem)",
                      lineHeight: 1.65,
                    }}
                  >
                    {sys.description}
                  </p>
                </div>

                {/* Clear, Big Skill Badges */}
                <div>
                  <div className="flex items-center gap-2 mb-3.5">
                    <Sparkles size={14} className="text-(--accent-primary)" />
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted font-medium">
                      TECHNICAL MASTERY
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {sys.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/pill inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-line bg-surface/80 hover:bg-(--accent-primary)/15 hover:border-(--accent-primary)/60 transition-all duration-200 shadow-2xs cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-(--accent-primary) group-hover/pill:scale-125 transition-transform" />
                        <span className="font-mono text-xs sm:text-[14px] font-medium text-ink group-hover/pill:text-(--accent-bright) transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
