"use client";

import { motion } from "framer-motion";
import StatsSection from "./component/counter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#0B1120] text-white overflow-hidden">

      {/* ================= HERO ================= */}

<section className="relative min-h-screen pt-24 md:pt-28 flex items-center px-6 md:px-12">
  {/* Gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent blur-3xl"></div>

  <div className="relative max-w-7xl py-7 mx-auto flex flex-col md:flex-row gap-12 items-center">
    {/* Left: Text */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full md:w-1/2"
    >
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
        Retail & Wholesale <br />
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Excellence Across Markets
        </span>
      </h1>

      <p className="mt-6 text-gray-400 text-base sm:text-lg">
        Main Group operates multiple brands across retail, wholesale, sourcing, and distribution.
        Delivering quality, reliability and growth worldwide.
      </p>

      <div className="mt-8 flex gap-4 flex-wrap">
        <Link
          href="#brands"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:scale-105 transition w-full sm:w-auto text-center"
        >
          Explore Brands
        </Link>

        <Link
          href="#contact"
          className="px-6 py-3 rounded-full border border-gray-600 hover:bg-white/10 transition w-full sm:w-auto text-center"
        >
          Wholesale Inquiry
        </Link>
      </div>
    </motion.div>

    {/* Right: Info Box */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-full md:w-1/2 bg-white/5 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-center"
    >
      <div className="space-y-6">
        <div>
          <span className="text-gray-400 text-sm">Head Office</span>
          <h3 className="text-lg sm:text-xl font-semibold">United Kingdom</h3>
        </div>
        <div>
          <span className="text-gray-400 text-sm">Operating Markets</span>
          <h3 className="text-lg sm:text-xl font-semibold">UK + GCC + Europe</h3>
        </div>
        <div>
          <span className="text-gray-400 text-sm">Contact</span>
          <h3 className="text-lg sm:text-xl font-semibold">
    info@hoorabgroup.com
          </h3>
        </div>
      </div>
    </motion.div>
  </div>
</section>




      {/* ================= ABOUT ================= */}
      <section className="py-28 px-6 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            About Main Group
          </h2>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
         {`   Main Group is a multi-brand retail and wholesale company
            focused on strategic growth, supply chain excellence and
            long-term partnerships across international markets.`}
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <StatsSection />

      {/* ================= BUSINESS DIVISIONS ================= */}
      <section className="py-28 px-6 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Business Divisions
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Retail Operations",
                desc: "Store management, merchandising and brand execution.",
              },
              {
                title: "Wholesale & Distribution",
                desc: "B2B supply chain, logistics and reseller programs.",
              },
              {
                title: "Sourcing & Compliance",
                desc: "Supplier onboarding and private label support.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-10 rounded-2xl border border-white/10"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 mt-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}




<section className="py-28 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Why Choose HOORAB GROUP
    </h2>

    {/* Horizontal scrolling container */}
    <div className="relative w-full overflow-hidden mt-8">
      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[
          "Global Supply Network",
          "Reliable Partnerships",
          "Scalable Distribution",
          "Quality Assurance",
        ]
          // duplicate array for seamless scroll
          .concat([
            "Global Supply Network",
            "Reliable Partnerships",
            "Scalable Distribution",
            "Quality Assurance",
          ])
          .map((item, i) => (
            <div
              key={i}
              className="min-w-[250px] bg-white/5 p-8 rounded-2xl border border-white/10 flex items-center justify-center"
            >
              <p className="text-lg font-semibold text-center">
                {item}
              </p>
            </div>
          ))}
      </motion.div>
    </div>
  </div>
</section>


      {/* ================= BRANDS ================= */}
      <section id="brands" className="py-28 px-6 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Brands
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              "ZYLLIQ ",
              "HOORAB",
              "Hoorab Brand Three",
              "HDS",
            ].map((brand, i) => (
              <div
                key={i}
                className="bg-white/5 p-8 rounded-2xl border border-white/10"
              >
                <h3 className="font-semibold text-lg">{brand}</h3>
                <span className="text-gray-400 text-sm mt-2">
                  Short brand description here.
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-center">
        <h2 className="text-4xl font-bold">
          Let’s Build Strong Partnerships
        </h2>
        <p className="mt-4 text-white/80">
        {`  Contact Main Group for wholesale, supplier or distribution inquiries.`}
        </p>

        <Link
          href="#contact"
          className="inline-block mt-8 px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
        >
          Contact Us
        </Link>
      </section>

    </main>
  );
}
