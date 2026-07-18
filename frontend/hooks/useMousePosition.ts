"use client";

import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function useMousePosition() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateMousePosition = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("pointermove", updateMousePosition);
    return () => window.removeEventListener("pointermove", updateMousePosition);
  }, [x, y]);

  return { x, y };
}