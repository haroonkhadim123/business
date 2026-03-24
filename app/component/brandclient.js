"use client";

import { motion } from "framer-motion";
import { Globe} from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";




export default function BrandsClient() {
  const [brands, setbrands] = useState([]);

      useEffect(() => {
        const fetchJobs = async () => {
          const res = await fetch("/api/brand", { cache: "no-store" });
          const data = await res.json();
          if (res.ok) {
            setbrands(data.applybrand);
          }
        };
        fetchJobs();
      }, []);

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
       

            return (
              <motion.div
                key={brand._id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 relative border border-gray-200"
              >
            

                <h2 className="text-2xl font-bold text-black">
                  {brand.brandname}
                </h2>

                <p className="text-gray-600 mt-4 text-sm">
                  {brand.description}
                </p>

                <Link
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-6 right-6 text-gray-500 hover:text-black transition"
                >
                  <Globe size={22} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
