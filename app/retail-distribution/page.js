"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function RetailDistributionServices() {
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
            src="/process-hero.jpg"
            alt="Retail Distribution Services"
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

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[6px] font-semibold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent"
          >
            Our Services
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mt-6 leading-tight"
          >
            Retail{" "}
            <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
              Distribution
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-200 mt-6 text-lg leading-relaxed"
          >
            Supporting business growth through reliable distribution channels, smooth market delivery, and strategic product placement across retail networks.
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
              Retail Distribution Services
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
              Empowering Retail Growth Through{" "}
              <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                Seamless Distribution
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Retail Distribution Services ensure that products reach the right markets at the right time. We manage the entire distribution lifecycle — from warehousing to last-mile delivery — enabling retailers to focus on sales and customer satisfaction.
            </p>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 mb-24"
          >
            
            {/* LEFT SIDE */}
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-gray-900">
                Our Distribution{" "}
                <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                  Approach
                </span>
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                We build and manage robust distribution networks tailored to your product requirements and market demands. Our integrated approach covers inventory management, order fulfillment, logistics coordination, and real-time tracking to ensure complete visibility and control.
              </p>

              <p className="text-gray-600 leading-relaxed">
                From regional warehousing to direct store delivery, we help retailers maintain optimal stock levels while reducing logistics costs and delivery timelines.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 hover:border-[#00e6ff]/40 hover:shadow-[0_10px_30px_rgba(0,230,255,0.15)] transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Key{" "}
                <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                  Benefits
                </span>
              </h3>

              <ul className="space-y-4 text-gray-600">
                {[
                  "Reliable & timely product delivery",
                  "Strategic product placement across retail networks",
                  "Efficient inventory & warehouse management",
                  "Real-time shipment tracking & visibility",
                  "Cost-effective logistics solutions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-r from-[#00e6ff] to-[#139aff]" />
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
            className="bg-gray-900 text-white rounded-3xl p-16 text-center relative overflow-hidden"
          >
            {/* Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00e6ff]/10 to-[#139aff]/10" />

            <h3 className="relative text-3xl font-semibold mb-6">
              Expand Your{" "}
              <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                Retail Reach
              </span>{" "}
              With Confidence
            </h3>

            <p className="relative max-w-2xl mx-auto text-gray-300 mb-8">
              Let us handle your distribution needs so you can focus on growing your retail business. Partner with us for reliable, scalable, and efficient distribution solutions.
            </p>

            <Link href="/contact">
              <button
                className="relative px-10 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #00e6ff 0%, #139aff 100%)",
                }}
              >
                Discuss Your Distribution Needs
              </button>
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
}