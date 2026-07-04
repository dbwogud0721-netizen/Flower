/**
 * Flower Museum design tokens — JS-side mirror of the CSS custom properties
 * defined in `src/app/globals.css`. Colors/radius/shadow live in CSS for
 * Tailwind to consume; this file exists for places that need raw JS values
 * (Framer Motion transitions, inline style calculations, chart configs).
 *
 * Keep the two in sync — if a token changes in globals.css, mirror it here.
 */

export const colors = {
  ivory: "#fbf7f1",
  cream: "#f5ede2",
  beige: "#efe4d6",
  blush: {
    50: "#fdf3f5",
    100: "#fae3e8",
    200: "#f4c9d4",
    300: "#eaa9bb",
    400: "#dd88a3",
    500: "#c96b8a",
    600: "#a85670",
  },
  sage: {
    50: "#f3f6ee",
    100: "#e3ebd6",
    200: "#cbdab5",
    300: "#a9c48c",
  },
  ink: "#2f2a26",
  stone: "#766e64",
} as const;

export const fonts = {
  serif: "var(--font-serif)",
  sans: "var(--font-sans)",
} as const;

export const radius = {
  sm: "0.66rem",
  md: "0.88rem",
  lg: "1.1rem",
  xl: "1.54rem",
  "2xl": "1.98rem",
  "3xl": "2.42rem",
  "4xl": "2.86rem",
  full: "9999px",
} as const;

export const shadow = {
  sm: "0 6px 16px -10px rgba(90, 60, 50, 0.22)",
  md: "0 10px 30px -14px rgba(90, 60, 50, 0.28)",
  lg: "0 20px 50px -20px rgba(90, 60, 50, 0.35)",
} as const;

export const spacing = {
  screenX: 20, // px — matches --spacing-screen-x
  sectionY: 32, // px — matches --spacing-section-y
} as const;

/** Durations in seconds (Framer Motion expects seconds, not ms). */
export const motionDuration = {
  fast: 0.18,
  base: 0.32,
  slow: 0.5,
} as const;

/** Cubic-bezier easing shared across CSS keyframes and Framer Motion. */
export const motionEase = {
  premium: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export const tokens = { colors, fonts, radius, shadow, spacing, motionDuration, motionEase };

export default tokens;
