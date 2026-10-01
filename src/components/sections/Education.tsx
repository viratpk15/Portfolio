"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/data/education";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Award, CheckCircle2 } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function Education() {
  const shouldReduceMotion = useReducedMotion();

  const timelineYears = [
    {
      year: "2026",
      tagline: "AUTONOMOUS MULTI-AGENT SYSTEMS & FRONTIER AI INFRASTRUCTURE",
      highlights: [
        {
          title: "Lisa AIOS & AML Agentic Investigator",
          subtitle: "Stateful Multi-Agent Orchestration & Adversarial Compliance",
          description:
            "Engineered autonomous OS layers coordinating stateful LangGraph agents, dynamic routing between local Ollama and high-throughput Groq inference, and deterministic graph verification with Isolation Forest anomaly detection.",
        },
        {
          title: "B.E. in Computer Science (AI & ML) — VVCE Mysore",
          subtitle: "Academic Excellence · Top Tier Standing",
          description:
            "Maintained a 9.33 CGPA while conducting active research into heterogeneous multi-agent communication protocols and verifiable retrieval-grounded systems.",
        },
      ],
    },
    {
      year: "2025",
      tagline: "DISTRIBUTED WORKFLOWS, OBSERVABILITY & TYPE-SAFE MONOREPOS",
      highlights: [
        {
          title: "NeuralWorkspace.ai & NeuroSim Lab",
          subtitle: "Monorepo AI Architecture & Live Deep-Learning Observability",
          description:
            "Designed full-stack monorepo developer tools with React 19, Drizzle ORM, and live KaTeX mathematical step visualizers for real-time forward pass and backpropagation inspection.",
        },
        {
          title: "ReachInbox Email Scheduler & Agentic AI Workshop",
          subtitle: "Asynchronous Distributed Queues & Model Context Protocols",
          description:
            "Built resilient BullMQ and Redis worker queues with sliding-window rate pacing for high-volume email distribution; completed intensive Agentic AI certification.",
        },
      ],
    },
    {
      year: "2024",
      tagline: "CLOUD INFRASTRUCTURE, STATISTICAL MODELING & CORE CS",
      highlights: [
        {
          title: "AWS Academy Cloud Foundations Certification",
          subtitle: "Cloud Compute, Distributed Storage & S3 Architectures",
          description:
            "Mastered foundational cloud deployment patterns, security policies, virtual networks, and scalable infrastructure primitives.",
        },
        {
          title: "Senior Secondary Academic Milestones",
          subtitle: "BGS PU College (93.33%) · Arvind International School (91.8%)",
          description:
            "Solidified advanced computational mathematics, statistics, data structures, and object-oriented software engineering foundations.",
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full border-t border-line bg-bg py-24 sm:py-36 px-6 sm:px-12 lg:px-16 overflow-hidden transition-colors duration-350"
    >
      <span id="systems" className="sr-only" aria-hidden="true" />
      <span id="education" className="sr-only" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        {/* Top Micro-Metadata Header */}
        <div className="flex items-center justify-between border-b border-line pb-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-(--accent-primary) font-medium">
            04 / EXPERIENCE &amp; SYSTEMS
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            ANNUAL REPORT TIMELINE · 2024 — 2026
          </span>
        </div>

        {/* Section Headline */}
        <div className="mb-20">
          <h2
            className="font-display text-ink max-w-3xl leading-[1.08]"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Engineering Timeline &amp; Systems Evolution
          </h2>
          <p
            className="mt-4 max-w-2xl text-(--text-secondary) font-light"
            style={{
              fontSize: "clamp(1rem, 1.1vw, 1.125rem)",
              lineHeight: 1.65,
            }}
          >
            A continuous record of systems engineered, architectures deployed, academic pedigree,
            and production capabilities developed across consecutive milestones.
          </p>
        </div>

        {/* Annual Report Timeline: 2026, 2025, 2024 Spreads */}
        <div className="space-y-24 sm:space-y-32">
          {timelineYears.map((item) => (
            <motion.div
              key={item.year}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start border-t border-line pt-12"
            >
              {/* Left Column: Oversized Year Number (Annual Report Style) */}
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-(--accent-primary) mb-3">
                    <span className="w-2 h-2 rounded-full bg-(--accent-primary) animate-pulse" />
                    <span>ANNUAL AUDIT</span>
                  </div>
                  <div
                    className="font-display text-ink select-none leading-none tracking-tight font-light"
                    style={{
                      fontSize: "clamp(4.5rem, 10vw, 8.5rem)",
                    }}
                  >
                    {item.year}
                  </div>
                </div>

                <div className="mt-6 font-mono text-xs text-(--text-secondary) tracking-wider uppercase leading-relaxed max-w-xs">
                  {item.tagline}
                </div>
              </div>

              {/* Right Column: Highlights in Glass Cards */}
              <div className="lg:col-span-8 space-y-6">
                {item.highlights.map((h, hIdx) => (
                  <div
                    key={h.title}
                    className="rounded-3xl border border-line bg-glass p-7 sm:p-9 backdrop-blur-xl transition-all duration-300 hover:border-line-strong group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-line pb-4 mb-4">
                      <h3 className="font-display text-2xl text-ink tracking-tight group-hover:text-(--accent-primary) transition-colors">
                        {h.title}
                      </h3>
                      <span className="font-mono text-[11px] text-(--accent-primary) tracking-wider uppercase shrink-0">
                        MILESTONE 0{hIdx + 1}
                      </span>
                    </div>

                    <div className="font-mono text-xs text-(--accent-bright) uppercase tracking-wider mb-3">
                      {h.subtitle}
                    </div>

                    <p className="text-(--text-secondary) text-sm sm:text-base font-light leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Credentials & Certifications Footer Grid */}
        <div className="mt-24 sm:mt-32 pt-16 border-t border-line grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Academic Credentials Badges */}
          <div className="lg:col-span-7">
            <h3 className="font-display text-2xl text-ink tracking-tight mb-8">
              Academic Credentials
            </h3>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-line bg-glass p-6 backdrop-blur-md transition-all hover:border-(--accent-primary)/50"
                >
                  <div>
                    <h4 className="font-display text-lg text-ink">{edu.institution}</h4>
                    <p className="text-xs text-(--text-secondary) font-light mt-1">
                      {edu.credential}
                    </p>
                  </div>
                  <div className="inline-flex shrink-0 items-center rounded-full border border-(--accent-primary)/40 bg-(--accent-primary)/10 px-3.5 py-1 text-xs font-mono text-(--accent-primary) font-semibold">
                    <AnimatedCounter value={edu.metric} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-2xl text-ink tracking-tight flex items-center gap-2.5">
              <Award size={20} className="text-(--accent-primary)" />
              <span>Certifications</span>
            </h3>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-center gap-3.5 rounded-2xl border border-line bg-glass p-5 backdrop-blur-md transition-all hover:border-(--accent-primary)/40 hover:bg-elevated"
                >
                  <CheckCircle2 size={18} className="text-(--accent-primary) shrink-0" />
                  <span className="text-sm font-medium text-ink">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-md">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--accent-primary) font-semibold block mb-2">
                RIGOR &amp; METHODOLOGY
              </span>
              <p className="text-xs text-(--text-secondary) leading-relaxed font-light">
                Continuous engagement with machine learning theory, algorithm complexity, and distributed system primitives ensures solutions scale from conceptual design into hardened production engines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
