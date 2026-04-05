"use client";

import { motion } from "framer-motion";

export default function ThreeDotLoader({ size = "md", fullPage = false }) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
    xl: "w-24 h-24",
  };

  const borderSizes = {
    sm: "border-2",
    md: "border-3",
    lg: "border-4",
    xl: "border-4",
  };

  const LoaderContent = () => (
    <div className="relative">
      {/* Outer Ring */}
      <div
        className={`${sizeClasses[size]} ${borderSizes[size]} rounded-full border-t-[#00e6ff] border-r-[#139aff] border-b-[#00e6ff] border-l-transparent animate-spin`}
      ></div>
      
      {/* Inner Pulse Dot */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-[#00e6ff] to-[#139aff]"
      />
    </div>
  );

  if (fullPage) {
    return (
      <div className="flex flex-col justify-center items-center h-96">
        <LoaderContent />
        <p className="mt-6 text-gray-500 dark:text-gray-400 animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  return <LoaderContent />;
}