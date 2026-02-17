"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Aboutbanner() {
  return (
    <section className="relative h-[60vh] md:h-[90vh] w-full flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Image with Smooth Zoom */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <Image
          src="/about-hero.jpg"
          alt="About Us Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">

        {/* Small Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[6px] text-blue-400 font-semibold"
        >
          Who We Are
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mt-6 leading-tight"
        >
          About Our Corporate Journey
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-300 mt-6 text-lg leading-relaxed"
        >
          We are committed to innovation, excellence, and long-term value creation. 
          Our journey reflects dedication, strategic growth, and impactful partnerships.
        </motion.p>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 text-gray-300 text-sm flex items-center justify-center gap-2"
        >
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-white font-semibold">About Us</span>
        </motion.div>

      </div>
    </section>
  );
}
