"use client";

import { useState, useRef } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { about } from "@/data/about";

export default function About() {
  const [isHovering, setIsHovering] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section id="about" className="py-32">
      <Container>
        <div className="mb-20">
          <SectionTitle title={about.title} subtitle="Who I Am" />
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image with elegant framing */}
          <FadeIn>
            <motion.div
              ref={imgRef}
              className="relative"
               onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <motion.div
                className="surface-sheen overflow-hidden rounded-[var(--radius-xl)] border border-[var(--glass-stroke)] bg-[var(--glass-bg)] will-change-transform"
                style={{
                  x: useTransform(mouseX, [-200, 200], [-8, 8]),
                  y: useTransform(mouseY, [-200, 200], [-8, 8]),
                  rotateX: useTransform(mouseY, [-200, 200], [2, -2]),
                  rotateY: useTransform(mouseX, [-200, 200], [-2, 2]),
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <div className="relative aspect-[4/5] sm:aspect-[3/4]">
                  <Image
                    src="/images/profile/about.jpg"
                    alt="About Virat"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  {/* Cinematic vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/40 via-transparent to-transparent pointer-events-none" />
                  {/* Light reflection */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none mix-blend-overlay"
                    style={{
                      opacity: isHovering ? 0.4 : 0.2,
                      x: useTransform(mouseX, [-200, 200], [-30, 30]),
                      y: useTransform(mouseY, [-200, 200], [-30, 30]),
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </FadeIn>

          {/* Text content with better spacing */}
          <FadeIn delay={0.15}>
            <div className="space-y-8">
              <p className="text-xl leading-8 text-[var(--color-text-primary)] max-w-2xl">
                {about.description1}
              </p>
              <p className="text-lg leading-8 text-[var(--color-text-tertiary)] max-w-2xl">
                {about.description2}
              </p>
              <p className="text-lg leading-8 text-[var(--color-text-tertiary)] max-w-2xl">
                {about.description3}
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}