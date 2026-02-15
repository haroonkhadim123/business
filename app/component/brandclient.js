"use client";

import { motion } from "framer-motion";
import { Globe, Building2, Gem } from "lucide-react";

const brands = [
  {
    name: "ZYLLIQ",
    description:
      "ZYLLIQ is a forward-thinking brand focused on innovation and digital transformation.",
    icon: Gem,
    link: "https://zylliq.com",
  },
  {
    name: "HOORAB",
    description:
      "HOORAB represents premium quality and excellence in corporate solutions.",
    icon: Building2,
    link: "https://hoorab.com",
  },
  {
    name: "HDS",
    description:
      "HDS specializes in dynamic consultancy and operational expertise.",
    icon: Globe,
    link: "https://hds.com",
  },
];

export default function BrandsClient() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-black"
        >
          Our Brands
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {brands.map((brand, index) => {
            const Icon = brand.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 relative border border-gray-200"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-black/5 mb-6 mx-auto">
                  <Icon className="text-black" size={32} />
                </div>

                <h2 className="text-2xl font-bold text-black">
                  {brand.name}
                </h2>

                <p className="text-gray-600 mt-4 text-sm">
                  {brand.description}
                </p>

                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-6 right-6 text-gray-500 hover:text-black transition"
                >
                  <Globe size={22} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
