"use client";

import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThreeDotLoader from "./threedotloader";

export default function BrandsClient() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredBrand, setHoveredBrand] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch("/api/brand", { cache: "no-store" });
        const data = await res.json();

        if (res.ok) {
          setBrands(data.applybrand);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  const handleBrandClick = (website) => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Trusted By Leading{" "}
            <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
              Brands
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00e6ff] to-[#139aff] mx-auto rounded-full"></div>
        </motion.div>

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <ThreeDotLoader />
          </div>
        ) : brands.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">No brands available</p>
          </motion.div>
        ) : (
          <div className={`grid gap-8 ${brands.length === 1
              ? "flex justify-center items-center"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}>
            {brands.map((brand, index) => (
              <motion.div
                key={brand._id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredBrand(brand._id)}
                onHoverEnd={() => setHoveredBrand(null)}
                onClick={() => handleBrandClick(brand.website)}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group relative ${brands.length === 1 ? "w-full max-w-md mx-auto" : ""
                  } ${hoveredBrand === brand._id ? "scale-105" : "scale-100"}`}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00e6ff] to-[#139aff] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>
                <div className="absolute inset-[1px] bg-white rounded-2xl"></div>

                <div className="relative p-8">
                  {/* Brand Logo with Enhanced Design */}
                  <div className="flex justify-center mb-6">
                    <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-md group-hover:shadow-xl transition-all duration-300 border-2 border-gray-100 group-hover:border-[#00e6ff]/30">
                      {brand.image ? (
                        <Image
                          src={brand.image}
                          alt={brand.brandname}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="112px"
                          quality={75}
                          unoptimized={false}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#00e6ff]/10 to-[#139aff]/10 flex items-center justify-center">
                          <svg className="w-14 h-14 text-[#139aff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21v-4H7v4" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h6" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Brand Name with Improved Typography */}
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {brand.brandname}
                    </h3>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Brand Description */}
                  <p className="text-gray-600 text-sm leading-relaxed text-center line-clamp-3 mb-6">
                    {brand.description}
                  </p>

                  {/* Explore Button */}
                  <div className="flex justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBrandClick(brand.website);
                      }}
                      className="inline-flex cursor-pointer items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#00e6ff] to-[#139aff] text-white rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300 group/btn"
                    >
                      Explore Brand
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#00e6ff]/5 to-transparent rounded-bl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#139aff]/5 to-transparent rounded-tr-3xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Trust Badge */}
        {!loading && brands.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-2 text-gray-500">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Trusted Partners</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2 text-gray-500">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Verified Brands</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2 text-gray-500">
                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm">Premium Quality</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}