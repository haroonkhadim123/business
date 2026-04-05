"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Truck, Globe } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Wholesale Supply Solutions",
    desc: "Delivering dependable bulk supply services with competitive pricing, consistent quality, and efficient product availability for retailers, resellers, and commercial partners.",
    icon: <Package className="w-8 h-8" />,
    Link: "/wholesale-supply",
  },
  {
    title: "Retail Distribution Services",
    desc: "Supporting business growth through reliable distribution channels, smooth market delivery, and strategic product placement across retail networks.",
    icon: <Truck className="w-8 h-8" />,
    Link: "/retail-distribution",
  },
  {
    title: "Sourcing & Trading Solutions",
    desc: "Connecting businesses with trusted suppliers, quality products, and profitable trading opportunities to ensure long-term value and operational success.",
    icon: <Globe className="w-8 h-8" />,
    Link: "/sourcing-trading",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[#f8fdff] py-28 overflow-hidden hide-scrollbar">
      {/* Background Text */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[70px] md:text-[120px] font-bold text-[#139aff] opacity-10 select-none">
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
          <p className="uppercase tracking-widest text-[#139aff] font-semibold">
            Our Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            High Quality{" "}
            <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
              Wholesale & Retail Solutions
            </span>
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
                className={`flex-shrink-0 w-72 md:w-80 lg:w-96 p-6 md:p-10 rounded-3xl transition-all duration-500 cursor-pointer border
                  ${
                    isActive
                      ? "bg-white shadow-xl border-[#00e6ff]/30"
                      : "bg-white/60 border-transparent hover:border-[#139aff]/20 hover:shadow-lg"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-xl mb-6 transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#00e6ff] to-[#139aff] text-white shadow-md"
                      : "bg-[#eefdff] text-[#139aff]"
                  }
                `}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`leading-relaxed mb-6 ${
                    isActive ? "text-gray-800" : "text-gray-600"
                  }`}
                >
                  {service.desc}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-3 group">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#00e6ff] to-[#139aff] text-white"
                        : "bg-[#eefdff] text-[#139aff]"
                    }
                  `}
                  >
                    →
                  </div>
                  <Link
                    href={service.Link}
                    className={`font-medium group-hover:translate-x-2 transition-transform duration-300 ${
                      isActive ? "text-[#139aff]" : "text-gray-800"
                    }`}
                  >
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