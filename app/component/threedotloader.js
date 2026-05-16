"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ThreeDotLoader({ size = "md", fullPage = false }) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
    xl: "w-24 h-24",
  };

  const glowClasses = {
    sm: "w-16 h-16",
    md: "w-20 h-20",
    lg: "w-24 h-24",
    xl: "w-28 h-28",
  };

  const LoaderContent = () => (
    <div className="relative flex items-center justify-center">
      {/* Soft Outer Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`${glowClasses[size]} absolute rounded-full bg-gradient-to-r from-[#00e6ff]/25 via-[#139aff]/25 to-[#00e6ff]/25 blur-xl`}
      />

      {/* Premium Pulse Ring */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.15, 0.5],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`${sizeClasses[size]} absolute rounded-full border border-[#00e6ff]/40`}
      />

      {/* Rotating Loader Image */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`${sizeClasses[size]} relative drop-shadow-[0_0_18px_rgba(0,230,255,0.35)]`}
      >
        <Image
          src="/loader.png"
          alt="Loading..."
          fill
          sizes="96px"
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Center Dot */}
      <motion.div
        animate={{
          scale: [1, 1.45, 1],
          opacity: [1, 0.45, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#00e6ff] to-[#139aff] shadow-[0_0_14px_rgba(0,230,255,0.8)]"
      />
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/85 backdrop-blur-md dark:bg-[#050607]/90">
        <LoaderContent />

        <motion.p
          animate={{
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-6 text-sm font-medium tracking-[0.18em] text-gray-500 dark:text-gray-300 uppercase"
        >
          Loading
        </motion.p>
      </div>
    );
  }

  return <LoaderContent />;
}