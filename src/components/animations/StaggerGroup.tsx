"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { motionDuration, motionEase } from "@/assets/tokens";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.slow, ease: motionEase.premium },
  },
};

/** Container that staggers its `StaggerItem` children in on mount (grids/lists). */
function StaggerGroup(props: HTMLMotionProps<"div">) {
  return <motion.div variants={containerVariants} initial="hidden" animate="show" {...props} />;
}

function StaggerItem(props: HTMLMotionProps<"div">) {
  return <motion.div variants={itemVariants} {...props} />;
}

export { StaggerGroup, StaggerItem };
