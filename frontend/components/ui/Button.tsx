"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = true,
}: Props) {
  const base =
    "btn-premium relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium leading-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] overflow-hidden backdrop-blur-sm";

  const variants: Record<string, string> = {
    primary:
      "text-[var(--color-text-primary)]",
    ghost:
      "text-[var(--color-text-secondary)]",
  };

  const content = (
    <span className="relative flex items-center gap-2">
      {children}
      <motion.div
        whileHover={{ x: 4, y: -4, scale: 1.1 }}
        whileTap={{ x: 2, y: -2, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300"
        />
      </motion.div>
    </span>
  );

  const classes = cn(base, variants[variant], className);

  if (href) {
    const isExternal = external && !href.startsWith("#");
    return (
      <motion.a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={classes}
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.97, y: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.button>
  );
}