"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      className="relative flex justify-center"
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[var(--radius-3xl)] bg-gradient-to-tr from-[var(--color-primary)]/20 via-[var(--color-secondary)]/10 to-transparent blur-3xl" />

      <div className="group relative">
        <div className="surface-sheen overflow-hidden rounded-[var(--radius-3xl)] border border-[var(--glass-stroke)] bg-[var(--glass-bg-strong)] backdrop-blur-xl">
          <Image
            src="/images/profile/hero.jpg"
            alt="Virat P K Gupta"
            width={520}
            height={660}
            priority
            className="h-[420px] w-[300px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] sm:h-[560px] sm:w-[400px] lg:h-[640px] lg:w-[460px]"
          />
        </div>

        {/* subtle ambient reflection */}
        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[var(--radius-3xl)] bg-gradient-to-tr from-[var(--color-primary)]/15 to-[var(--color-secondary)]/10 blur-3xl transition-all duration-1000 group-hover:opacity-70" />
      </div>
    </motion.div>
  );
}