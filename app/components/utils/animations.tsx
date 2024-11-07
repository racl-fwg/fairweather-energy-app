import { Variants, Transition } from 'framer-motion';

// Centralized transition for all animations
const defaultTransition: Transition = {
  duration: 0.8,
  ease: [0.6, -0.05, 0.01, 0.99], // Custom cubic-bezier curve for elegant animations
};

// Variants for various animation types
export const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideDown: {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  scaleUp: {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  rotateIn: {
    hidden: { rotate: -10, opacity: 0 },
    visible: { rotate: 0, opacity: 1 },
  },
  // New text animation combining fade and slide from left for body text
  textSlideFadeIn: {
    hidden: { opacity: 0, x: -40 }, // Start hidden and shifted left
    visible: { opacity: 1, x: 0 }, // Slide to center and become visible
  },
  // Header text slides from the opposite (right) direction
  headerTextFadeIn: {
    hidden: { opacity: 0, x: 0 }, // Start hidden and shifted right
    visible: { opacity: 1, x: 0 }, // Slide to center and become visible
  },
  // Card entrance animation with scaling effect
  cardEntrance: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

// framer-motion variants for fade-in-only animation
export const fadeInOnly = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Wrapper configuration for fade-in
export const textFadeIn = {
  initial: "hidden",
  whileInView: "visible",
  variants: fadeInOnly,
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }, // Smooth cubic-bezier
};


// Wrapper for reusable motion configurations for body text
export const defaultTextFadeIn = {
  initial: "hidden",
  whileInView: "visible",
  variants: animations.textSlideFadeIn,
  transition: { duration: 0.9, ease: 'easeOut' },
};

// Wrapper for header text animation
export const headerTextFadeIn = {
  initial: "hidden",
  whileInView: "visible",
  variants: animations.headerTextFadeIn,
  transition: { duration: 0.9, ease: 'easeOut' },
};

// Wrapper for card animations
export const cardAnimation = (delay: number) => ({
  initial: "hidden",
  whileInView: "visible",
  variants: animations.cardEntrance,
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

// Scale-Up Effect for buttons and cards
export const hoverScale = {
  whileHover: { scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)" },
  transition: { duration: 0.5 },
};
