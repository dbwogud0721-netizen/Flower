"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { motionDuration } from "@/assets/tokens";

export interface PressScaleProps extends HTMLMotionProps<"div"> {
  lift?: boolean;
}

/** Tactile press feedback for tappable cards/buttons — scales down on tap, optional hover lift. */
function PressScale({ lift = false, whileTap, whileHover, transition, ...props }: PressScaleProps) {
  return (
    <motion.div
      whileTap={whileTap ?? { scale: 0.97 }}
      whileHover={whileHover ?? (lift ? { y: -3 } : undefined)}
      transition={{ duration: motionDuration.fast, ...transition }}
      {...props}
    />
  );
}

export { PressScale };
