/**
 * Centralized Motion Specification & Design Tokens for Motion Architecture.
 * All easing curves, durations, staggers, and Framer Motion variants live here.
 */

export const EASINGS = {
  // Primary reveal curve: dramatic decelerated entry
  expoOut: [0.16, 1, 0.3, 1] as const,
  // Secondary transition curve: smooth natural finish
  smoothOut: [0.22, 1, 0.36, 1] as const,
  // Ambient loops & pulse: continuous natural easing
  inOut: [0.65, 0, 0.35, 1] as const,
  // Snappy micro-interactions
  snap: [0.34, 1.56, 0.64, 1] as const,
};

export const DURATIONS = {
  micro: 0.15,      // 150ms for hovers, button clicks, chips
  reveal: 0.6,      // 600ms for text lines, cards, content blocks
  section: 0.8,     // 800ms for section titles & major layout transitions
  ambient: 8.0,     // 8s for subtle background pulses
};

export const STAGGER = {
  text: 0.08,       // 80ms stagger for text lines
  cards: 0.12,      // 120ms stagger for cards
  chips: 0.04,      // 40ms stagger for technical chips
  nav: 0.06,        // 60ms stagger for mobile menu items
};

// Reusable Framer Motion Variants

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATIONS.reveal, ease: EASINGS.expoOut },
  },
};

export const slideUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.reveal,
      delay,
      ease: EASINGS.expoOut,
    },
  }),
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.cards,
      delayChildren: 0.1,
    },
  },
};

export const heroCharacterVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay: 0.4 + i * 0.025,
      ease: EASINGS.expoOut,
    },
  }),
};
