"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { motionDuration, motionEase } from "@/assets/tokens";

export interface FadeUpProps extends HTMLMotionProps<"div"> {
  /** Stagger index — multiplied by 60ms and used as animation delay. */
  index?: number;
  distance?: number;
}

/** Fade + rise entrance, matching the app-wide `.animate-fade-up` motion. */
function FadeUp({ index = 0, distance = 14, transition, ...props }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: motionDuration.slow,
        ease: motionEase.premium,
        delay: index * 0.06,
        ...transition,
      }}
      {...props}
    />
  );
}

export { FadeUp };
