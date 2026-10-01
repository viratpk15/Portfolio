"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { profile, aboutParagraphs } from "@/data/profile";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const metrics = [
  { label: "CGPA", value: "9.33", suffix: "" },
  { label: "AI Systems", value: "7", suffix: "+" },
  { label: "Specialization", value: "AI/ML", suffix: "" },
  { label: "Curiosity", value: "∞", suffix: "" },
];

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden transition-colors duration-350"
      style={{ borderTop: "1px solid var(--border-hairline)" }}
    >
      {/* Ghost Editorial Watermark */}
      <div
        className="ghost-typography"
        style={{ top: "12%", right: "-5%", fontSize: "clamp(12rem, 22vw, 26rem)" }}
        aria-hidden="true"
      >
        VIRAT
      </div>

      {/* ── TAJ MAHAL CINEMATIC BACKGROUND ── */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/about-taj-mahal.jpg"
          alt="Taj Mahal vista"
          fill
          sizes="100vw"
          className="object-cover object-center theme-image-graded"
          priority
        />
        {/* Calibrated cinematic gradient overlay preserving background visibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--bg-base) 92%, transparent) 0%, color-mix(in srgb, var(--bg-base) 76%, transparent) 40%, color-mix(in srgb, var(--bg-base) 90%, transparent) 80%, var(--bg-base) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-bleed)", opacity: 0.18 }}
        />
      </div>

      {/* ── EDITORIAL CONTENT ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 pt-20 sm:pt-28 pb-20 sm:pb-28 relative z-1">
        {/* Section Label */}
        <div
          className="flex items-center justify-between pb-5 mb-14"
          style={{ borderBottom: "1px solid var(--border-hairline)" }}
        >
          <span
            className="font-mono text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold"
            style={{ color: "var(--accent-primary)" }}
          >
            02 / About
          </span>
        </div>

        {/* ── EDITORIAL SPLIT: FORMAL PICTURE LEFT | TEXT RIGHT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — Formal Dress Picture */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div
              className="relative w-full rounded-3xl overflow-hidden group border border-line-strong shadow-(--shadow-elevated)"
              style={{ aspectRatio: "3/4", maxHeight: "72vh" }}
            >
              <Image
                src="/assets/contact-portrait.jpg"
                alt="Virat P K Gupta — Formal Portrait"
                fill
                sizes="(max-width: 1024px) 92vw, 42vw"
                className="object-cover object-top theme-image-graded transition-transform duration-1200 group-hover:scale-[1.03]"
                priority
              />
              {/* Bottom gradient fade */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 48%, color-mix(in srgb, var(--bg-base) 60%, transparent) 80%, var(--bg-base) 100%)",
                }}
              />
              {/* Caption overlay */}
              <div
                className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                }}
              >
                <span className="font-medium text-ink">
                  Virat P K Gupta
                </span>
                <span
                  style={{ color: "var(--accent-bright)" }}
                  className="font-semibold"
                >
                  AI Engineer
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Editorial Story */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center pt-2 lg:pt-6"
          >
            {/* Big section heading */}
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                fontWeight: 500,
                lineHeight: 0.94,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
              }}
            >
              I BUILD<br />
              <span style={{ color: "var(--accent-primary)" }}>SYSTEMS</span><br />
              THAT THINK.
            </h2>

            {/* Email direct inquiry */}
            <div className="mt-8">
              <span
                className="block font-mono text-xs uppercase tracking-[0.26em] mb-2 font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                Direct Inquiry
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 font-display tracking-tight transition-colors duration-200"
                style={{
                  fontSize: "clamp(1.15rem, 1.5vw, 1.35rem)",
                  color: "var(--text-primary)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--accent-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--text-primary)")
                }
              >
                <span className="underline decoration-(--accent-primary)/40 underline-offset-4">
                  {profile.email}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-(--accent-primary) transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            {/* Body paragraphs */}
            <div
              className="mt-8 space-y-4"
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                fontSize: "clamp(1.04rem, 1.15vw, 1.16rem)",
              }}
            >
              {aboutParagraphs.slice(0, 3).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Location */}
            <div
              className="mt-10 pt-6 flex items-center gap-2.5 font-mono text-xs sm:text-sm uppercase tracking-wider"
              style={{
                borderTop: "1px solid var(--border-hairline)",
                color: "var(--text-secondary)",
              }}
            >
              <MapPin
                size={16}
                style={{ color: "var(--accent-primary)" }}
                className="shrink-0"
              />
              <span>Mysore, Karnataka, India</span>
            </div>
          </motion.div>
        </div>

        {/* ── METRIC ROW AT BOTTOM: CGPA 9.33 (Floating, No Block Box) ── */}
        <div className="mt-20 sm:mt-28 pt-10 border-t border-line grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.1,
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col py-2"
            >
              <span
                className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.22em] mb-3 font-semibold"
                style={{ color: "var(--accent-primary)" }}
              >
                {m.label}
              </span>
              <div
                className="font-display"
                style={{
                  fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)",
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                }}
              >
                {m.value === "∞" || m.value === "AI/ML" ? (
                  <span>
                    {m.value}
                    {m.suffix}
                  </span>
                ) : (
                  <span>
                    <AnimatedCounter key={m.value} value={m.value} />
                    <span style={{ color: "var(--accent-bright)" }}>
                      {m.suffix}
                    </span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
