"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThreeDotLoader from "./threedotloader";

export default function BrandsClient() {
  const [brands, setbrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch("/api/brand", { cache: "no-store" });
        const data = await res.json();

        if (res.ok) {
          setbrands(data.applybrand);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Heading with Brand Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Our <span className="text-[#00e6ff]">Brands</span>
        </motion.h1>

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center h-64 mt-16">
            <ThreeDotLoader />
          </div>
        ) : brands.length === 0 ? (
          <p className="text-gray-500 mt-16">No brands available</p>
        ) : (
          <div className={`grid gap-10 mt-16 ${
            brands.length === 1 
              ? "flex justify-center items-center" 
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}>
            {brands.map((brand, index) => (
              <motion.div
                key={brand._id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 relative ${
                  brands.length === 1 ? "w-full max-w-md mx-auto" : ""
                }`}
                style={{
                  borderImageSlice: 1,
                  borderImageSource: "linear-gradient(to right, #00e6ff, #139aff)"
                }}
              >
                {/* Brand Logo */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-md">
                    {brand.image ? (
                      <Image
                        src={brand.image}
                        alt={brand.brandname}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    ) : (
                      <div className="w-full bg-[#00e6ff]/10 h-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-[#139aff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21v-4H7v4" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h6" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Brand Name with Gradient */}
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                  {brand.brandname.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="text-black">
                    {brand.brandname.split(' ').slice(-1)}
                  </span>
                </h2>

                {/* Brand Description */}
                <p className="text-gray-600 mt-4 text-sm text-center line-clamp-3">
                  {brand.description}
                </p>

                {/* Website Link */}
                <Link
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-6 right-6 text-gray-500 hover:text-[#00e6ff] transition"
                >
                  <Globe size={22} />
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}