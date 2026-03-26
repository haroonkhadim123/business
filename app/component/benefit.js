"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  BadgeDollarSign,
  Laptop,
  Clock,
  GraduationCap,
  Coffee,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "Competitive Salary",
    desc: "We offer market-leading compensation packages and performance bonuses.",
  },
  {
    icon: Laptop,
    title: "Flexible Work Options",
    desc: "Hybrid and remote opportunities to maintain work-life balance.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    desc: "Access to professional training programs and certifications.",
  },
  {
    icon: HeartHandshake,
    title: "Health & Wellness",
    desc: "Comprehensive health benefits to support your well-being.",
  },
  {
    icon: Clock,
    title: "Paid Time Off",
    desc: "Generous leave policy including annual and personal leaves.",
  },
  {
    icon: Coffee,
    title: "Positive Work Culture",
    desc: "A collaborative and inclusive workplace environment.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Employee{" "}
            <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
              Benefits
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-4"
          >
            We care about our team and provide benefits that support
            both personal and professional growth.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-200"
              >
                {/* Icon with brand gradient background */}
          {/* Icon with brand gradient background (like WhyChooseUs) */}
<div className="flex  mb-6">
  <div className="bg-[#00e6ff]/10 p-4 rounded-full">
    <Icon size={26} className="text-[#139aff]" />
  </div>
</div>

                {/* Title with brand gradient for keywords */}
                <h3 className="text-xl font-semibold mb-3">
                  {item.title.split(" ").map((word, i) => (
                    i === 0 ? (
                      <span
                        key={i}
                        className="text-black"
                      >
                        {word}{" "}
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    )
                  ))}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}