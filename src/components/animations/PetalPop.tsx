"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { motionDuration, motionEase } from "@/assets/tokens";

export interface PetalPopProps extends HTMLMotionProps<"div"> {
  index?: number;
}

/** Small pop-in used when an item is added to a live composition (e.g. bouquet builder). */
function PetalPop({ index = 0, transition, ...props }: PetalPopProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: motionDuration.base,
        ease: motionEase.premium,
        delay: index * 0.025,
        ...transition,
      }}
      {...props}
    />
  );
}

export { PetalPop };
