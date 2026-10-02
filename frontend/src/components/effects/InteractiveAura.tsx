"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function InteractiveAura() {
  const shouldReduceMotion = useReducedMotion();
  const auraRef = useRef<HTMLDivElement>(null);
  const leftEdgeRef = useRef<HTMLDivElement>(null);
  const rightEdgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let rafId: number | null = null;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const onPointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Update normalized CSS variables
      const normX = targetX / window.innerWidth;
      const normY = targetY / window.innerHeight;

      // Distance from edges (0 at center, up to 1 near edge)
      const edgeLeft = Math.max(0, 1 - normX * 2.2);
      const edgeRight = Math.max(0, (normX - 0.55) * 2.2);
      const edgeTop = Math.max(0, 1 - normY * 2.2);
      const edgeBottom = Math.max(0, (normY - 0.55) * 2.2);

      document.documentElement.style.setProperty("--mouse-x", `${targetX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${targetY}px`);
      document.documentElement.style.setProperty("--mouse-norm-x", normX.toFixed(3));
      document.documentElement.style.setProperty("--mouse-norm-y", normY.toFixed(3));
      document.documentElement.style.setProperty("--mouse-edge-left", edgeLeft.toFixed(3));
      document.documentElement.style.setProperty("--mouse-edge-right", edgeRight.toFixed(3));
      document.documentElement.style.setProperty("--mouse-edge-top", edgeTop.toFixed(3));
      document.documentElement.style.setProperty("--mouse-edge-bottom", edgeBottom.toFixed(3));
    };

    // Smooth lerp loop for the spotlight aura
    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${currentX - 350}px, ${currentY - 350}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <>
      {/* Floating dynamic cursor spotlight aura */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden z-20"
        aria-hidden="true"
      >
        <div
          ref={auraRef}
          className="absolute top-0 left-0 w-175 h-175 rounded-full will-change-transform opacity-60 mix-blend-screen transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(circle at center, color-mix(in srgb, var(--accent-bright) 16%, transparent) 0%, color-mix(in srgb, var(--accent-primary) 8%, transparent) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Dynamic side-reactive edge lighting */}
      <div
        ref={leftEdgeRef}
        className="pointer-events-none fixed top-0 bottom-0 left-0 w-32 z-15 transition-opacity duration-200"
        style={{
          background:
            "linear-gradient(90deg, color-mix(in srgb, var(--accent-primary) calc(var(--mouse-edge-left, 0) * 22%), transparent), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        ref={rightEdgeRef}
        className="pointer-events-none fixed top-0 bottom-0 right-0 w-32 z-15 transition-opacity duration-200"
        style={{
          background:
            "linear-gradient(270deg, color-mix(in srgb, var(--accent-bright) calc(var(--mouse-edge-right, 0) * 22%), transparent), transparent)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
