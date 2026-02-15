"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandHero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Image with Smooth Zoom */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <Image
          src="/brandimage.jpg"   // 🔁 change to your image
          alt="Our Brands"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">

        {/* Small Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[6px] text-blue-400 font-semibold"
        >
          Our Portfolio
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mt-6 leading-tight"
        >
          Our Brands
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-300 mt-6 text-lg leading-relaxed"
        >
          Discover the powerful brands we have built and nurtured —
          each crafted with innovation, strategy, and a commitment to excellence.
        </motion.p>

      </div>
    </section>
  );
}
