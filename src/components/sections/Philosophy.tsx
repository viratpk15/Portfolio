"use client";

import { motion } from "framer-motion";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { heroQuote } from "@/data/profile";

export function Philosophy() {
  const shouldReduceMotion = useReducedMotion();

  const principles = [
    {
      num: "01",
      title: "DETERMINISTIC GROUNDING",
      subtitle: "Mathematical Provenance over Hallucination",
      description:
        "Language models must never fabricate state in mission-critical software. Every entity, transaction sum, and execution branch must strictly resolve against immutable canonical evidence with verifiable graph provenance.",
    },
    {
      num: "02",
      title: "FULL-GRAPH OBSERVABILITY",
      subtitle: "Zero Prompt-Chain Opacity",
      description:
        "Eliminate black-box abstraction. Multi-agent workflows demand visible state transitions, real-time token expenditure telemetry, intermediate AST validation, and inspectable execution graphs at every node.",
    },
    {
      num: "03",
      title: "ASYNCHRONOUS RESILIENCE",
      subtitle: "Distributed Queues over Brittle Loops",
      description:
        "Production AI systems must withstand API rate-pacing, network jitter, and provider downtime. Long-running inference belongs in decoupled, exponential-backoff worker queues with sliding-window protection.",
    },
  ];

  return (
    <section
      id="philosophy"
      className="relative w-full border-t border-line bg-bg py-24 sm:py-36 px-6 sm:px-12 lg:px-16 overflow-hidden transition-colors duration-350"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top Micro-Metadata Header */}
        <div className="flex items-center justify-between border-b border-line pb-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-(--accent-primary) font-medium">
            05 / PHILOSOPHY
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            CORE ENGINEERING PRINCIPLES · 2026
          </span>
        </div>

        {/* Master Quote Visual Moment */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-4xl border border-line bg-glass p-8 sm:p-14 lg:p-18 backdrop-blur-2xl mb-20 shadow-(--shadow-elevated)"
        >
          <CornerBrackets offset={20} size={24} color="border-(--accent-primary)/50" />

          <span className="font-mono text-xs uppercase tracking-[0.25em] text-(--accent-primary) font-semibold block mb-6">
            THE ARCHITECTURAL IMPERATIVE
          </span>

          <blockquote
            className="font-display text-ink max-w-5xl leading-[1.1] tracking-tight font-normal"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
            }}
          >
            &ldquo;{heroQuote.text}&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-(--accent-primary)">
              {heroQuote.attribution}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              AI SYSTEMS ARCHITECT
            </span>
          </div>
        </motion.div>

        {/* Three Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p, idx) => (
            <motion.div
              key={p.num}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-3xl border border-line bg-glass p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-(--accent-primary)/50 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-line pb-3 mb-6">
                  <span className="font-mono text-xs font-semibold text-(--accent-primary) tracking-widest">
                    PRINCIPLE {p.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-(--accent-primary)" />
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-ink tracking-tight mb-2 group-hover:text-(--accent-primary) transition-colors">
                  {p.title}
                </h3>

                <p className="font-mono text-[11px] text-muted uppercase tracking-wider mb-4">
                  {p.subtitle}
                </p>

                <p className="text-(--text-secondary) text-sm font-light leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-line flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted">
                <span>VERIFIED DIRECTIVE</span>
                <span className="text-(--accent-primary)">ACTIVE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
