"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CorporateStrategy() {
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
            alt="Corporate Strategy"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[6px] text-blue-400 font-semibold"
          >
            Our Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mt-6 leading-tight"
          >
            Corporate Strategy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-300 mt-6 text-lg leading-relaxed"
          >
            Helping organizations define long-term direction and build
            sustainable competitive advantage.
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
      <span className="text-white font-semibold">
              Corporate Strategy
            </span>
          </motion.div>
        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="bg-gray-50 py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Strategic Growth & Competitive Positioning
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our Corporate Strategy consulting empowers businesses to clarify
              their vision, analyze market dynamics, and build structured
              roadmaps for long-term success. We combine strategic insight,
              financial modeling, and industry expertise to create measurable
              and sustainable results.
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
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-gray-900">
                Our Strategic Approach
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We conduct in-depth market research, competitive benchmarking,
                and internal capability assessments to identify growth
                opportunities. Our team works closely with leadership to align
                strategic priorities with operational execution.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through data-driven frameworks and structured planning
                methodologies, we help organizations transition from vision to
                measurable performance outcomes.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Key Benefits
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Clear long-term strategic direction</li>
                <li>✔ Sustainable competitive advantage</li>
                <li>✔ Market expansion & diversification planning</li>
                <li>✔ Risk assessment & mitigation frameworks</li>
                <li>✔ Improved leadership alignment</li>
              </ul>
            </div>
          </motion.div>

          {/* ================= CTA SECTION ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 text-white rounded-3xl p-16 text-center"
          >
            <h3 className="text-3xl font-semibold mb-6">
              Ready to Transform Your Business Strategy?
            </h3>
            <p className="max-w-2xl mx-auto text-gray-300 mb-8">
              Partner with us to design and implement strategies that create
              measurable growth, sustainable advantage, and long-term value.
            </p>

            <Link href="/contact">
              <button className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
                Schedule a Consultation
              </button>
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
}