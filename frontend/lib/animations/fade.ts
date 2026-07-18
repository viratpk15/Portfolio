export const fadeIn = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
};

// Ambient motion variants
export const ambientOpacity = {
  initial: { opacity: 0.3 },
  animate: { opacity: 0.5 },
  transition: { duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
};

export const subtleScale = {
  initial: { scale: 1 },
  animate: { scale: 1.015 },
  transition: { duration: 30, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
};