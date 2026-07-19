"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function HeroImage() {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Enhanced parallax with stronger movement
  const imageX = useTransform(mouseX, [-300, 300], [-15, 15]);
  const imageY = useTransform(mouseY, [-300, 300], [-15, 15]);
  const glowX = useTransform(mouseX, [-300, 300], [-40, 40]);
  const glowY = useTransform(mouseY, [-300, 300], [-40, 40]);
  
  // Rotation for cinematic effect
  const rotateX = useTransform(mouseY, [-300, 300], [3, -3]);
  const rotateY = useTransform(mouseX, [-300, 300], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative flex justify-center"
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="group relative">
        {/* Ambient glow - follows cursor with blur */}
        <motion.div
          className="pointer-events-none absolute -inset-12 -z-10 rounded-[var(--radius-3xl)] opacity-60"
          style={{
            x: glowX,
            y: glowY,
            background: `radial-gradient(circle at center, var(--color-primary), transparent 60%)`,
            filter: "blur(120px)",
          }}
          animate={{
            opacity: isHovering ? 0.7 : 0.5,
            scale: isHovering ? 1.05 : 1,
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Secondary ambient reflection */}
        <motion.div
          className="pointer-events-none absolute -inset-8 -z-10 rounded-[var(--radius-3xl)]"
          style={{
            x: useTransform(mouseX, [-300, 300], [-20, 20]),
            y: useTransform(mouseY, [-300, 300], [-20, 20]),
            background: `radial-gradient(circle at center, var(--color-secondary), transparent 70%)`,
            filter: "blur(80px)",
          }}
          animate={{
            opacity: isHovering ? 0.4 : 0.25,
          }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="surface-sheen overflow-hidden rounded-[var(--radius-3xl)] border border-[var(--glass-stroke)] bg-[var(--glass-bg-strong)] backdrop-blur-xl will-change-transform"
          style={{
            x: imageX,
            y: imageY,
            rotateX,
            rotateY,
            translateZ: 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <div className="relative">
            <motion.div
              className="overflow-hidden"
              style={{
                scale: useTransform(mouseX, [-300, 300], [1, 1.04]),
                rotate: useTransform(mouseX, [-300, 300], [-1, 1]),
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <Image
                src="/images/profile/hero.jpg"
                alt="Virat P K Gupta"
                width={520}
                height={660}
                priority
                className="h-[420px] w-[300px] object-cover sm:h-[560px] sm:w-[400px] lg:h-[640px] lg:w-[460px] will-change-transform"
              />
            </motion.div>
            {/* Premium vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/40 via-transparent to-transparent pointer-events-none" />
            {/* Cinematic lighting - light reflection that follows cursor */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/15 to-transparent pointer-events-none mix-blend-overlay"
              style={{
                opacity: isHovering ? 0.5 : 0.25,
                x: useTransform(mouseX, [-300, 300], [-50, 50]),
                y: useTransform(mouseY, [-300, 300], [-50, 50]),
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Depth shadow */}
            <motion.div
              className="absolute inset-0 shadow-[inset_0_0_40px_rgba(45,35,20,0.15)] pointer-events-none"
              style={{
                opacity: isHovering ? 0.3 : 0.15,
              }}
            />
          </div>
        </motion.div>

        {/* Premium reflection overlay */}
        <motion.div
          className="pointer-events-none absolute -bottom-6 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-t from-[var(--color-primary)]/15 to-transparent blur-2xl"
          style={{
            scaleX: useTransform(mouseX, [-300, 300], [0.8, 1.2]),
            opacity: isHovering ? 0.4 : 0.2,
          }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
}