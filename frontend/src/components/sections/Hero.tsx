"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Mail } from "lucide-react";
import { profile, heroQuote } from "@/data/profile";
import { GithubMark } from "@/components/ui/GithubMark";
import { LinkedInMark } from "@/components/ui/LinkedInMark";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const stagger = (delay: number) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: shouldReduceMotion ? 0 : delay,
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-svh w-full flex-col justify-between overflow-hidden"
    >
      {/* ── FULL-BLEED CINEMATIC HERO IMAGE ── */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/hero-mountain.jpg"
          alt="Cinematic hero — dramatic mountain landscape"
          fill
          sizes="100vw"
          className="object-cover object-center theme-image-graded"
          priority
        />
        {/* Deep cinematic gradient overlay — dark at bottom, translucent at top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.52) 40%, color-mix(in srgb, var(--bg-base) 85%, transparent) 80%, var(--bg-base) 100%)",
          }}
        />
        {/* Left-side vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, color-mix(in srgb, var(--bg-base) 50%, transparent) 0%, transparent 45%)",
          }}
        />
        {/* Theme accent atmosphere bleed */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-bleed)", opacity: 0.45 }}
        />
      </div>

      {/* ── INNER LAYOUT ── */}
      <div className="relative flex flex-col justify-between h-full min-h-svh px-6 sm:px-12 lg:px-20 pt-32 pb-14">

        {/* ── MAIN CONTENT ── */}
        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">

          {/* Eyebrow label */}
          <motion.div {...stagger(0.3)} className="flex items-center gap-3 mb-8">
            <span
              className="w-8 h-px"
              style={{ background: "var(--accent-primary)" }}
            />
            <span
              className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em]"
              style={{ color: "var(--accent-primary)" }}
            >
              AI Engineer · VVCE Mysore
            </span>
          </motion.div>

          {/* GIANT Display Headline */}
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.45,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-display text-white select-none"
            style={{
              fontSize: "clamp(4.5rem, 13vw, 13.5rem)",
              fontWeight: 500,
              lineHeight: 0.88,
              letterSpacing: "-0.035em",
            }}
          >
            VIRAT<br />
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.55)",
                color: "transparent",
              }}
            >
              P K GUPTA
            </span>
          </motion.h1>

          {/* Discipline tagline */}
          <motion.div {...stagger(0.85)} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2">
            {["Agentic AI", "Machine Learning", "AI Infrastructure"].map((t, i) => (
              <span key={t} className="flex items-center gap-2.5">
                {i > 0 && (
                  <span className="text-white/30 font-mono text-xs">/</span>
                )}
                <span
                  className="font-mono text-sm sm:text-base uppercase tracking-[0.2em]"
                  style={{ color: i === 0 ? "var(--accent-primary)" : "rgba(255,255,255,0.7)" }}
                >
                  {t}
                </span>
              </span>
            ))}
          </motion.div>

          {/* Positioning Statement */}
          <motion.p
            {...stagger(1.1)}
            className="mt-7 max-w-lg font-light"
            style={{
              fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Architecting autonomous agent systems, retrieval-grounded intelligence,
            and verifiable ML pipelines — engineered for production.
          </motion.p>

          {/* Hero Quote */}
          <motion.figure
            {...stagger(1.35)}
            className="mt-8 flex items-start gap-4 pl-5 py-1 max-w-xl"
            style={{ borderLeft: "2px solid var(--accent-primary)" }}
          >
            <p
              className="font-display"
              style={{
                fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)",
                fontStyle: "italic",
                lineHeight: 1.55,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              &ldquo;{heroQuote.text}&rdquo;
            </p>
          </motion.figure>

          {/* CTA Buttons */}
          <motion.div {...stagger(1.6)} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-mono uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--gradient-cta)",
                color: "#fff",
                boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
              }}
            >
              Explore Work
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-mono uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
              }}
            >
              Resume <ArrowDown size={13} />
            </a>
          </motion.div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 2.2, duration: 0.7 }}
          className="max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t"
          style={{ borderColor: "rgba(255,255,255,0.15)" }}
        >
          {/* Social anchors bottom-left */}
          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 p-1"
              style={{ color: "rgba(255,255,255,0.5)" }}
              aria-label="GitHub"
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-primary)")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
            >
              <GithubMark size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 p-1"
              style={{ color: "rgba(255,255,255,0.5)" }}
              aria-label="LinkedIn"
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-primary)")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
            >
              <LinkedInMark size={19} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors duration-200 p-1"
              style={{ color: "rgba(255,255,255,0.5)" }}
              aria-label="Email"
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-primary)")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
            >
              <Mail size={19} />
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.6)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent-primary)" }} />
            Mysore
          </div>
        </motion.div>
      </div>
    </section>
  );
}
