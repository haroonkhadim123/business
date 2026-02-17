"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Aboutbanner() {
  return (
    <main className="bg-[#0B1120] text-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] md:h-[90vh] flex items-center justify-center text-center">

        {/* Background Image */}
        <Image
          src="/about-hero.jpg"   // 👉 Add your image in public folder
          alt="About Us Background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
            Who We Are
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            About Our Corporate Journey
          </h1>

          {/* Breadcrumb */}
          <div className="mt-6 text-gray-300 text-sm flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">About Us</span>
          </div>
        </motion.div>

      </section>

    </main>
  );
}
