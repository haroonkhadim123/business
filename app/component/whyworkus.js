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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function WhyWorkWithUs() {
  return (
    <section className="py-24 bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Why Work {" "}
            <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
             With Us
            </span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We believe in empowering talent, encouraging innovation, and building leaders for tomorrow.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-[#00e6ff]/40 hover:shadow-[0_10px_30px_rgba(0,230,255,0.15)]"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-[#00e6ff]/10 p-4 rounded-full">
                    <Icon size={28} className="text-[#00e6ff]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-black">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}