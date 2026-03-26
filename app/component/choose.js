"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Handshake,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Global Supply Network",
    description:
      "Strong international sourcing network ensuring timely and efficient delivery worldwide.",
    icon: <Globe className="w-10 h-10 text-[#139aff]" />,
  },
  {
    title: "Reliable Partnerships",
    description:
      "Long-term collaborations built on trust, transparency, and performance excellence.",
    icon: <Handshake className="w-10 h-10 text-[#139aff]" />,
  },
  {
    title: "Scalable Distribution",
    description:
      "Flexible logistics and scalable distribution systems to support business growth.",
    icon: <TrendingUp className="w-10 h-10 text-[#139aff]" />,
  },
  {
    title: "Quality Assurance",
    description:
      "Strict quality control processes to ensure premium standards across all operations.",
    icon: <ShieldCheck className="w-10 h-10 text-[#139aff]" />,
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

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
              HOORAB GROUP
            </span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Delivering excellence through innovation, strategic partnerships,
            and world-class operational standards.
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
          {features.map((item, i) => (
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
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-black">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {item.description}
              </p>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}