"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ClipboardCheck, Settings } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Corporate Strategy",
    desc: "We help organizations define long-term vision, strategic direction, and sustainable competitive advantage.",
    icon: <Briefcase className="w-8 h-8" />,
    Link:'/coporate',
  },
  {
    title: "Business Planning",
    desc: "Comprehensive business plans designed to drive measurable growth and operational excellence.",
    icon: <ClipboardCheck className="w-8 h-8" />,
    Link:'/planning',

  },
  {
    title: "Process Optimization",
    desc: "Improving efficiency, reducing costs, and transforming operations through modern methodologies.",
    icon: <Settings className="w-8 h-8" />,
     Link:'/process',
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(null); // Track clicked card

  return (
    <section className="relative bg-gray-100 py-28 overflow-hidden hide-scrollbar">
      
      {/* Background Text */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[120px] font-bold text-gray-200 opacity-20 select-none">
        Services
      </h1>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-widest text-gray-900 font-semibold">
            Our Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            High Quality Corporate Solutions
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="flex flex-start overflow-x-auto gap-6 md:gap-10 py-6 px-4 md:px-8 snap-x snap-mandatory hide-scrollbar">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 w-72 md:w-80 lg:w-96 p-6 md:p-10 rounded-3xl transition-all duration-500 cursor-pointer
                  ${isActive ? "bg-white shadow-xl" : "bg-transparent"}
                `}
              >
                {/* Icon */}
                <div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-6
                  ${isActive ? "bg-gray-200 text-gray-900" : "bg-gray-100 text-gray-800"}
                `}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className={`text-xl md:text-2xl font-bold mb-4
                  ${isActive ? "text-gray-900" : "text-gray-900"}
                `}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`leading-relaxed mb-6
                  ${isActive ? "text-gray-800" : "text-gray-700"}
                `}>
                  {service.desc}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-3 group">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300
                    ${isActive ? "bg-gray-200 text-gray-900" : "bg-gray-100 text-gray-900"}
                  `}>
                    →
                  </div>
                  <Link href={service.Link} className={`font-medium group-hover:translate-x-2 transition-transform duration-300
                    ${isActive ? "text-gray-900" : "text-gray-800"}
                  `}>
                    Read More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
