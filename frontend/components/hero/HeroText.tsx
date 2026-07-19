"use client";

import { motion, type Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroText() {
  return (
    <div className="relative flex flex-col">
      {/* Ambient glow behind text */}
      <div className="pointer-events-none absolute -left-10 -top-20 h-80 w-80 rounded-full bg-[var(--color-primary)]/10 blur-[100px]" />
      
      <motion.div
        className="flex flex-col gap-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Creative Tagline - Three pillars */}
        <motion.div 
          className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-secondary)]"
          variants={item}
        >
          <span className="text-hover-glow">Driven by Curiosity</span>
          <span className="text-[var(--color-primary)]">·</span>
          <span className="text-hover-glow">Built with Discipline</span>
          <span className="text-[var(--color-primary)]">·</span>
          <span className="text-hover-glow">Defined by Consistency</span>
        </motion.div>

        {/* Main Hero Heading */}
        <motion.h1
          className="text-6xl font-semibold leading-[0.95] tracking-tight text-[var(--color-text-primary)] sm:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-family-display)" }}
          variants={item}
        >
          <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        {/* Role + Tagline - Smaller editorial typography */}
        <motion.div
          className="flex flex-col gap-2"
          variants={item}
        >
          <span className="eyebrow text-hover-glow">{profile.role}</span>
          <p className="max-w-xl text-lg leading-7 text-[var(--color-text-tertiary)] text-hover-glow">
            {profile.headline}
          </p>
        </motion.div>

        {/* Description with improved spacing */}
        <motion.p
          className="max-w-xl text-base leading-7 text-[var(--color-text-tertiary)] text-hover-glow"
          variants={item}
        >
          {profile.subtitle}
        </motion.p>

        {/* CTA Buttons with premium spacing */}
        <motion.div 
          className="flex flex-wrap gap-4 pt-2" 
          variants={item}
        >
          <Button href="#projects" className="px-8 py-3 text-sm">
            {profile.ctaPrimary}
          </Button>
          <Button href={profile.resume} variant="ghost" className="px-8 py-3 text-sm" external>
            {profile.ctaSecondary}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}