"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function SourcingTradingSolutions() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[75vh] md:h-[90vh] pt-24 md:pt-0 w-full flex items-center justify-center text-center overflow-hidden">
  
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <Image
            src="/coporate-hero.jpg"
            alt="Sourcing & Trading Solutions"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Brand Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00e6ff]/15 to-[#139aff]/20" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">

          {/* Subtitle with brand gradient */}
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[6px] font-semibold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent"
          >
            Our Services
          </motion.p>

          {/* Heading with brand highlight */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mt-6 leading-tight"
          >
            Sourcing &{" "}
            <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
              Trading
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-200 mt-6 text-lg leading-relaxed"
          >
            Connecting businesses with trusted suppliers, quality products, and profitable trading opportunities to ensure long-term value and operational success.
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
            <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent font-semibold">
              Sourcing & Trading Solutions
            </span>
          </motion.div>

        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-28 px-6">
        <div className="max-w-6xl mx-auto">

          {/* ================= HEADER ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Global Sourcing &{" "}
              <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                Profitable Trading
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Sourcing & Trading Solutions connect businesses with verified suppliers, quality products, and profitable trading opportunities worldwide. We manage the entire supply chain — from supplier identification to quality control and logistics coordination — ensuring seamless operations and long-term value.
            </p>
          </motion.div>

          {/* ================= APPROACH & BENEFITS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 mb-24"
          >
            {/* LEFT */}
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-gray-900">
                Our{" "}
                <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                  Trading Approach
                </span>
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                We leverage our extensive global network to identify reliable suppliers, negotiate competitive pricing, and ensure consistent product quality. Our team handles supplier verification, contract negotiations, quality inspections, and logistics coordination from end to end.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Whether you are looking to source raw materials, finished goods, or expand into new markets, we provide end-to-end trading solutions that reduce risk and maximize profitability.
              </p>
            </div>

            {/* RIGHT - BENEFITS CARD */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200 hover:border-[#00e6ff]/40 hover:shadow-[0_10px_30px_rgba(0,230,255,0.15)] transition-all duration-300">
              
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Key{" "}
                <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                  Benefits
                </span>
              </h3>

              <ul className="space-y-4 text-gray-700">
                {[
                  "Access to verified global suppliers",
                  "Competitive pricing & cost optimization",
                  "Quality control & product inspection",
                  "End-to-end logistics coordination",
                  "Risk mitigation & compliance management",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    
                    {/* Brand bullet */}
                    <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-[#00e6ff]/10">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#139aff]" />
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ================= CTA ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl p-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
            }}
          >
            {/* subtle brand glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00e6ff]/10 to-[#139aff]/10" />

            <div className="relative z-10">
              <h3 className="text-3xl font-semibold mb-6 text-white">
                Ready to{" "}
                <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                  Source & Trade With Confidence?
                </span>
              </h3>

              <p className="max-w-2xl mx-auto text-gray-300 mb-8">
                Partner with us to access global suppliers, secure quality products, and build profitable trading relationships that drive long-term business success.
              </p>

              <Link href="/contact">
                <button className="px-10 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(90deg, #00e6ff 0%, #139aff 100%)",
                  }}
                >
                  Discuss Your Sourcing Needs
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}