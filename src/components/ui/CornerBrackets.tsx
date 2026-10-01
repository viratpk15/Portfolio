"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export interface CornerBracketsProps {
  className?: string;
  inset?: string;
  offset?: number | string;
  size?: number;
  armLength?: number;
  color?: string;
}

export function CornerBrackets({
  className = "",
  inset,
  offset = 32,
  size,
  armLength = 24,
  color = "border-(--accent-primary)/50",
}: CornerBracketsProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveArmLength = size ?? armLength;

  const corners = [
    { id: "top-left", pos: "top-0 left-0", borders: "border-t border-l" },
    { id: "top-right", pos: "top-0 right-0", borders: "border-t border-r" },
    { id: "bottom-left", pos: "bottom-0 left-0", borders: "border-b border-l" },
    { id: "bottom-right", pos: "bottom-0 right-0", borders: "border-b border-r" },
  ];

  const insetStyle = inset
    ? undefined
    : typeof offset === "number"
    ? {
        top: `${offset}px`,
        bottom: `${offset}px`,
        left: `${offset}px`,
        right: `${offset}px`,
      }
    : undefined;

  return (
    <div
      className={`pointer-events-none absolute z-20 ${inset ?? ""} ${className}`}
      style={insetStyle}
      aria-hidden="true"
    >
      {corners.map((corner, i) => (
        <motion.span
          key={corner.id}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute ${corner.pos} ${corner.borders} ${color} transition-colors duration-350`}
          style={{ width: `${effectiveArmLength}px`, height: `${effectiveArmLength}px` }}
        />
      ))}
    </div>
  );
}
