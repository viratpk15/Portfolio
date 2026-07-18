"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Use a callback to update state after mount to avoid cascading renders
    const handleChange = () => setReduced(query.matches);
    
    // Set initial value after registration
    const timer = setTimeout(() => {
      setReduced(query.matches);
    }, 0);

    query.addEventListener("change", handleChange);
    return () => {
      clearTimeout(timer);
      query.removeEventListener("change", handleChange);
    };
  }, []);

  return reduced;
}

interface Props {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}

export default function MouseParallax({
  children,
  intensity = 0.02,
  className = "",
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const [windowDimensions, setWindowDimensions] = useState({ width: 1, height: 1 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateDimensions = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    const timer = setTimeout(updateDimensions, 0);
    window.addEventListener("resize", updateDimensions);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useTransform(mouseX, [0, windowDimensions.width], [-intensity * 100, intensity * 100]);
  const y = useTransform(mouseY, [0, windowDimensions.height], [-intensity * 100, intensity * 100]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("pointermove", updateMousePosition);
    return () => window.removeEventListener("pointermove", updateMousePosition);
  }, [mouseX, mouseY]);

  // If reduced motion, return children without parallax
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}