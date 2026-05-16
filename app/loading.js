"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 mx-auto mb-6"
        >
         <Image
           src="/loader.png"
           alt="Hoorab Logo"
           width={80}
           height={80}
           priority
           className="h-20 w-auto object-contain"
         />
        </motion.div>

        {/* Animated Dots */}
        <div className="flex gap-2 justify-center mb-4">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
            className="w-3 h-3 bg-[#00e6ff] rounded-full"
          />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            className="w-3 h-3 bg-[#139aff] rounded-full"
          />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
            className="w-3 h-3 bg-[#00e6ff] rounded-full"
          />
        </div>

        {/* Loading Text with Gradient */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-semibold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent"
        >
          Loading...
        </motion.p>

        {/* Loading Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-1 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-full mt-4 mx-auto"
          style={{ width: "150px" }}
        />
      </div>
    </div>
  );
}