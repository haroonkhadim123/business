"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CareerBanner() {
  return (
    <section className="relative min-h-[75vh] md:h-[90vh] pt-24 md:pt-0 w-full flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <Image
          src="/about-hero.jpg"
          alt="Career Opportunities"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[4px] text-blue-400 font-semibold text-sm md:text-base"
        >
          Join Our Team
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 leading-snug"
        >
          Build Your Future With Us
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-200 mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
        >
          We are looking for passionate professionals ready to innovate, collaborate, and grow. Explore exciting career opportunities with us.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => {
              const section = document.getElementById("open-positions");
              section?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="bg-blue-600 hover:bg-blue-700 transition px-6 sm:px-8 py-3 rounded-full text-white font-semibold text-sm sm:text-base"
          >
            View Open Positions
          </button>

          <Link
            href="/contact"
            className="border border-white hover:bg-white hover:text-black transition px-6 sm:px-8 py-3 rounded-full text-white font-semibold text-sm sm:text-base"
          >
            Contact HR
          </Link>
        </motion.div>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-6 text-gray-300 text-xs sm:text-sm flex items-center justify-center gap-2"
        >
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-white font-semibold">Careers</span>
        </motion.div>

      </div>
    </section>
  );
}