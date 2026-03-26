"use client";

import { motion } from "framer-motion";

export default function ThreeDotLoader() {
  const dotVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {[0, 0.2, 0.4].map((delay, i) => (
        <motion.span
          key={i}
          className="w-3 h-3 bg-blue-500 rounded-full"
          variants={dotVariants}
          animate="animate"
          transition={{ delay }}
        />
      ))}
    </div>
  );
}