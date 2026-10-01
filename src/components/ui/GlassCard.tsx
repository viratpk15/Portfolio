"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  variant?: "base" | "elevated" | "subtle";
  glow?: boolean;
}

export function GlassCard({
  children,
  className = "",
  variant = "base",
  glow = false,
  ...motionProps
}: GlassCardProps) {
  const variantStyles = {
    base: "bg-glass border border-line backdrop-blur-2xl backdrop-saturate-180",
    elevated: "bg-(--bg-elevated)/85 border border-line-strong backdrop-blur-3xl backdrop-saturate-200 shadow-(--shadow-elevated)",
    subtle: "bg-glass-light border border-line backdrop-blur-lg",
  };

  const glowStyle = glow
    ? "shadow-(--glow-primary)"
    : "";

  return (
    <motion.div
      className={`rounded-3xl ${variantStyles[variant]} ${glowStyle} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
