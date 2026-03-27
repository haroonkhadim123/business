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
          src="/partner-hero.jpg" // 🔁 Replace with your image
          alt="Become Our Partner"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Brand Tint Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00e6ff]/20 to-[#139aff]/20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">

        {/* Small Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
    className="uppercase tracking-[6px] font-semibold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent"
        >
          Join Our Network
        </motion.p>

        {/* Main Heading */}
      <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mt-6 leading-tight text-white"
        >
          Become a <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">Partner</span>
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

        {/* CTA Button */}
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
            className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] hover:from-[#139aff] hover:to-[#00e6ff] transition px-6 sm:px-8 py-3 rounded-full text-white font-semibold text-sm sm:text-base"
          >
            Apply Now
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
          <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent font-semibold">
            Become a Partner
          </span>
        </motion.div>

      </div>
    </section>
  );
}