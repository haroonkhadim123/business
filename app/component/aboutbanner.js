"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutBanner() {
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
          src="/about-hero.jpg"
          alt="About Us Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Brand Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00e6ff]/20 to-[#139aff]/20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[6px] font-semibold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent"
        >
          Who We Are
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mt-6 leading-tight text-white"
        >
          Reliable Retail,{" "}
          <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
            Wholesale & Distribution
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-200 mt-6 text-lg leading-relaxed max-w-3xl mx-auto"
        >
          HOORAB GROUP is committed to delivering quality products, dependable supply, and strong business support through professional retail, wholesale, sourcing, and distribution services.
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
          <span className="font-semibold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
            About Us
          </span>
        </motion.div>

      </div>
    </section>
  );
}