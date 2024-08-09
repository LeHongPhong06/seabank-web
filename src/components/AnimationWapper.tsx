"use client";
import { AnimationControls, Easing, motion, TargetAndTransition, VariantLabels } from "framer-motion";
import React from "react";

type Direction = "top" | "right" | "bottom" | "left";
type Props = {
  ease?: Easing | Easing[];
  direction?: Direction;
  children: React.ReactNode;
  styles?: string;
  duration?: number;
};

const AnimationWapper: React.FC<Props> = ({ direction, children, styles, ease, duration }) => {
  const transition = {
    ease: ease || "backInOut",
    duration: duration || 3,
  };
  const rotate = [360, 0];
  const animate = (): AnimationControls | TargetAndTransition | VariantLabels => {
    switch (direction) {
      case "left":
        return { x: [-500, 0], rotate };
      case "right":
        return { x: [500, 0], rotate };
      case "top":
        return { y: [-500, 0], rotate };
      case "bottom":
        return { y: [300, 0], rotate };
      default:
        return {
          scale: [1, 1.3, 1],
          rotate: [0, 180, 0],
        };
    }
  };
  return (
    <motion.div className={styles} animate={animate()} transition={transition}>
      {children}
    </motion.div>
  );
};

export default AnimationWapper;
