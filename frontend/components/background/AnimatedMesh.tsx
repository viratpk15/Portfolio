"use client";

function useReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function AnimatedMesh() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div 
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: "var(--z-background-gradient)" }}
      >
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="mesh-grad-1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#C8A66A" stopOpacity="0.02" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <radialGradient id="mesh-radial-1" cx="0.3" cy="0.3" r="0.7">
                <stop offset="0%" stopColor="#D8B67B" stopOpacity="0.025" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="mesh-radial-2" cx="0.7" cy="0.7" r="0.6">
                <stop offset="0%" stopColor="#B8956A" stopOpacity="0.015" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh-grad-1)" />
            <rect width="100%" height="100%" fill="url(#mesh-radial-1)" />
            <rect width="100%" height="100%" fill="url(#mesh-radial-2)" />
          </svg>
        </div>
      </div>
    );
  }

  // Animated mesh gradient using CSS animations
  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none animated-mesh-container"
      style={{ zIndex: "var(--z-background-gradient)" }}
    >
      {/* Warm ambient mesh - deepest layer */}
      <div className="mesh-gradient-1 breathe-mesh" />
      <div className="mesh-gradient-2 breathe-mesh" />
      <div className="mesh-gradient-3 breathe-mesh" />
    </div>
  );
}
