"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BrandHero() {
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
          src="/brandimage.jpg"   // 🔁 Replace with your brand image
          alt="Our Brands"
          fill
          priority
          className="object-cover"
          sizes="100vw"
              quality={75}
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Brand Gradient Overlay */}
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
          Our Portfolio
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mt-6 leading-tight text-white"
        >
          Our <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">Brands</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-200 mt-6 text-lg leading-relaxed max-w-3xl mx-auto"
        >
          Discover the powerful brands we have built and nurtured — each crafted with innovation, strategy, and a commitment to excellence.
        </motion.p>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 text-gray-300 text-sm flex items-center justify-center gap-2"
        >
          <Link href="/" className="hover:text-[#00e6ff] transition">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
            Brands
          </span>
        </motion.div>

      </div>
    </section>
  );
}