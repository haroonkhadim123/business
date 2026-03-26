"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CareerCTA() {
  return (
    <section className="relative bg-blue-50 py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[6px] font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00e6ff] to-[#139aff]"
        >
          Join Our Team
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl text-black md:text-5xl font-bold mb-6"
        >
          Ready to Build Your{" "}
          <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
            Future With Us?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Take the first step toward an exciting career with our team. Explore 
          open positions, connect with HR, or submit your application today!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={() => {
              const section = document.getElementById("open-positions");
              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="px-8 py-3 rounded-full font-semibold text-white transition shadow-lg"
            style={{
              background: "linear-gradient(90deg, #00e6ff 0%, #139aff 100%)",
            }}
          >
            View Open Positions
          </button>

          <Link
            href="/contact"
            className="px-8 text-black py-3 rounded-full font-semibold border border-transparent transition shadow-lg"
          
          >
            Contact HR
          </Link>
        </motion.div>
      </div>
    </section>
  );
}