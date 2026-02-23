"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BusinessPlanning() {
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
            src="/business-hero.jpg"  // 🔁 apni image yahan lagayein
            alt="Business Planning"
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
            Business Planning
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-300 mt-6 text-lg leading-relaxed"
          >
            Structured, data-driven business plans designed to support
            measurable growth and long-term operational excellence.
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
              Business Planning
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
              Comprehensive Planning for Sustainable Growth
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our Business Planning services provide organizations with
              structured roadmaps that integrate financial forecasting,
              operational planning, market research, and risk management.
              We help transform ideas into scalable, investor-ready strategies.
            </p>
          </motion.div>

          {/* ================= WHAT WE DELIVER ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 mb-24"
          >
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-gray-900">
                What We Deliver
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We design detailed business plans tailored to your industry
                and growth objectives. Our approach ensures financial clarity,
                operational efficiency, and market positioning.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you are seeking investment, expanding operations,
                or launching a new venture, we provide structured planning
                frameworks that support long-term performance.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Key Outcomes
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Investor-ready business documentation</li>
                <li>✔ Financial forecasting & revenue projections</li>
                <li>✔ Operational structuring</li>
                <li>✔ Market research & competitor analysis</li>
                <li>✔ Scalable growth framework</li>
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
              Build a Strong Foundation for Your Business
            </h3>
            <p className="max-w-2xl mx-auto text-gray-300 mb-8">
              Let us help you design a comprehensive business plan that
              supports investment readiness, operational clarity, and
              sustainable expansion.
            </p>

            <Link href="/contact">
              <button className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
                Start Your Business Plan
              </button>
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
}