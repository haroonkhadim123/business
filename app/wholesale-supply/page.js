"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function WholesaleRetailSolutions() {
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
            src="/business-hero.jpg"
            alt="Wholesale & Retail Solutions"
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
            Wholesale &{" "}
            <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
              Retail
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-200 mt-6 text-lg leading-relaxed"
          >
            Dependable bulk supply, reliable distribution channels, and strategic sourcing solutions for retailers, resellers, and commercial partners.
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
              Wholesale & Retail Solutions
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
              Driving Growth Through{" "}
              <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                Wholesale & Retail Excellence
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a trusted business company specializing in retail and wholesale solutions across diverse markets. Our focus is on delivering quality products, reliable supply, and strong business partnerships that help our clients grow and succeed in competitive industries.
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
                What We{" "}
                <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                  Deliver
                </span>
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                We provide dependable bulk supply services with competitive pricing, consistent quality, and efficient product availability for retailers, resellers, and commercial partners.
              </p>

              <p className="text-gray-600 leading-relaxed">
                With a commitment to professionalism, consistency, and customer satisfaction, we support businesses with efficient distribution, dependable service, and tailored commercial solutions designed for long-term success.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 hover:border-[#00e6ff]/40 hover:shadow-[0_10px_30px_rgba(0,230,255,0.15)] transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Key{" "}
                <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                  Advantages
                </span>
              </h3>

              <ul className="space-y-4 text-gray-600">
                {[
                  "Trusted Retail & Wholesale Partner",
                  "Reliable Product Supply & Distribution",
                  "Professional Customer Support 24/7",
                  "Strong Business Network & Market Reach",
                  "Competitive Pricing & Consistent Quality",
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
            {/* subtle gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00e6ff]/10 to-[#139aff]/10" />

            <h3 className="relative text-3xl font-semibold mb-6">
              Ready to Scale Your{" "}
              <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                Business?
              </span>
            </h3>

            <p className="relative max-w-2xl mx-auto text-gray-300 mb-8">
              Partner with us for reliable wholesale supply and retail distribution solutions tailored to your needs. Contact our business desk to get started.
            </p>

            <Link href="/contact">
              <button
                className="relative px-10 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #00e6ff 0%, #139aff 100%)",
                }}
              >
                Contact Our Business Desk
              </button>
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
}