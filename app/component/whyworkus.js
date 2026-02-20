"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp, Globe } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Professional Growth",
    desc: "We provide continuous learning opportunities and career advancement paths.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "Work with experienced professionals in a supportive team environment.",
  },
  {
    icon: TrendingUp,
    title: "Performance Rewards",
    desc: "We recognize and reward excellence, innovation, and leadership.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    desc: "Engage with international clients and expand your professional reach.",
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Why Work With Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          We believe in empowering talent, encouraging innovation,
          and building leaders for tomorrow.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black/5 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-black" />
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {item.title}
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