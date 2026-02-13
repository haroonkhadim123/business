"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { end: 4, label: "Brands" },
    { end: 10, label: "Years Experience" },
    { end: 6, label: "Countries" },
    { end: 120, label: "Global Partners" },
  ];

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
            className="bg-white/5 p-10 rounded-2xl border border-white/10"
          >
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              {isInView && (
                <CountUp start={0} end={item.end} duration={2.5} />
              )}
              +
            </h3>

            <p className="text-gray-400 mt-3">{item.label}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
