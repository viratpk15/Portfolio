"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Code, ExternalLink } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface Props {
  project: Project;
  index?: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index = 0, featured = false }: Props) {
  const hasDemo = project.demo && project.demo !== "#";
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Enhanced 3D tilt with smoother interpolation
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);
  
  // Background lighting that shifts with cursor
  const bgGradientX = useTransform(mouseX, [-300, 300], [-20, 20]);
  const bgGradientY = useTransform(mouseY, [-300, 300], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
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
    <FadeIn delay={index * 0.08}>
      <motion.article
        ref={cardRef}
        className={cn(
          "group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--glass-stroke)] bg-[var(--glass-bg)] backdrop-blur-xl will-change-transform",
          featured ? "hover:-translate-y-2" : "hover:-translate-y-1"
        )}
        style={{
          rotateX,
          rotateY,
          translateZ: 0,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ 
          y: featured ? -10 : -4,
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Moving background gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            x: bgGradientX,
            y: bgGradientY,
            background: `radial-gradient(circle at center, var(--color-primary), transparent 70%)`,
            filter: "blur(120px)",
            mixBlendMode: "overlay",
          }}
        />
        
        <div className={cn(
          "relative overflow-hidden transition-all duration-700",
          featured ? "h-80 sm:h-96" : "h-64 sm:h-72"
        )}>
          <motion.div
            className="absolute inset-0"
            style={{ scale: useTransform(mouseX, [-300, 300], [1, 1.04]) }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes={featured 
                ? "(max-width: 768px) 100vw, 50vw" 
                : "(max-width: 768px) 100vw, 1100px"
              }
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          <div className="absolute left-6 top-6 flex flex-wrap items-center gap-2">
            {project.flag && (
              <motion.span 
                className="rounded-full border border-[var(--glass-stroke-accent)] bg-[var(--glass-bg-intense)] px-4 py-1.5 text-xs font-semibold tracking-wide text-[var(--color-text-secondary)] backdrop-blur-md will-change-transform"
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {project.flag}
              </motion.span>
            )}
            {project.tag && (
              <motion.span 
                className="rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg-strong)] px-4 py-1.5 text-xs font-medium text-[var(--color-text-tertiary)] backdrop-blur-md will-change-transform"
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {project.tag}
              </motion.span>
            )}
          </div>

          {project.status && (
            <span className="status-badge status-badge-warning absolute bottom-6 right-6 px-4 py-1.5 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-warning)]/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-warning)]" />
              </span>
              {project.status}
            </span>
          )}
        </div>

        <div className={cn(
          "space-y-6",
          featured ? "p-10" : "p-8"
        )}>
          <div className="flex items-start justify-between gap-4">
            <h3 className={cn(
              "font-semibold tracking-tight text-[var(--color-text-primary)]",
              featured 
                ? "text-3xl sm:text-4xl" 
                : "text-2xl sm:text-3xl"
            )}>
              {project.title}
            </h3>
            <motion.div
              animate={{ x: isHovering ? 6 : 0, y: isHovering ? -6 : 0, scale: isHovering ? 1.1 : 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <ArrowUpRight
                size={featured ? 28 : 22}
                className={cn(
                  "shrink-0 transition-all duration-300",
                  isHovering ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"
                )}
              />
            </motion.div>
          </div>

          <p className={cn(
            "leading-7 text-[var(--color-text-tertiary)]",
            featured ? "text-lg sm:text-xl" : "max-w-2xl text-base"
          )}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2.5">
            {project.tech.slice(0, featured ? 10 : 6).map((tech, i) => (
              <motion.span
                key={tech}
                className="rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg-strong)] px-4 py-1.5 text-sm font-medium text-[var(--color-text-tertiary)] transition-all duration-300 hover:border-[var(--glass-stroke-accent)] will-change-transform"
                whileHover={{ y: -2.5, scale: 1.03, backgroundColor: "var(--glass-bg-intense)" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: i * 0.02 }}
              >
                {tech}
              </motion.span>
            ))}
            {!featured && project.tech.length > 6 && (
              <span className="rounded-full border border-[var(--glass-stroke-accent)] bg-[var(--glass-bg-intense)] px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
                +{project.tech.length - 6} more
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg)] px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-all duration-300 will-change-transform"
              whileHover={{ 
                y: -3, 
                borderColor: "var(--glass-stroke-strong)",
                backgroundColor: "var(--glass-bg-intense)",
                color: "var(--color-text-primary)",
                boxShadow: "var(--shadow-glow-sm)"
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Code size={18} />
              </motion.div>
              GitHub
            </motion.a>

            <motion.a
              href={hasDemo ? project.demo : undefined}
              aria-disabled={!hasDemo}
              className={cn(
                "inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 will-change-transform",
                hasDemo
                  ? "border border-[var(--glass-stroke-accent)] bg-[var(--gradient-subtle)] text-[var(--color-text-primary)]"
                  : "cursor-not-allowed border border-[var(--glass-stroke)] bg-[var(--glass-bg)] text-[var(--color-text-muted)]"
              )}
              whileHover={hasDemo ? { 
                y: -3, 
                borderColor: "var(--glass-stroke-strong)",
                boxShadow: "var(--shadow-glow-md)"
              } : undefined}
              whileTap={hasDemo ? { scale: 0.97 } : undefined}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <ExternalLink size={18} />
              </motion.div>
              {hasDemo ? "Live Demo" : "Demo Soon"}
            </motion.a>
          </div>
        </div>
      </motion.article>
    </FadeIn>
  );
}