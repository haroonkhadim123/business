"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PartnerHero() {
  return (
    <section className="relative min-h-[75vh] md:h-[90vh] pt-24 md:pt-0 w-full flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Smooth Zoom */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <Image
          src="/partner-hero.jpg"   // 🔁 Replace with your actual partnership-themed image
          // Suggestions: handshake, global distribution map, team meeting, product display in store, modern warehouse, etc.
          alt="Become Our Partner"
          fill
          priority
          className="object-cover brightness-90" // slightly brighter than brands page if needed
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" /> {/* Slightly darker for serious B2B feel */}

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        {/* Small Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[6px] text-blue-400 font-semibold"
        >
          Join Our Network
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mt-6 leading-tight"
        >
          Become a Partner
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-200 mt-6 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        >
       Join us as a partner to distribute premium products and unlock new growth opportunities.
        </motion.p>

        {/* Optional subtle CTA button (many partnership pages add one here) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-10"
        >
            <button
            onClick={() => {
              const section = document.getElementById("application-form");
              section?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="bg-blue-600 hover:bg-blue-700 transition px-6 sm:px-8 py-3 rounded-full text-white font-semibold text-sm sm:text-base"
          >
           Apply now
          </button>
        </motion.div>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 text-gray-300 text-sm flex items-center justify-center gap-2"
        >
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-white font-semibold">Become a Partner</span>
        </motion.div>
      </div>
    </section>
  );
}