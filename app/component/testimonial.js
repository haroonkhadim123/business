"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Business Partner",
    designation: "Strategic Alliance",
    text: "HOORAB GROUP has been a reliable business partner, providing consistent service, quality products, and professional communication throughout our collaboration.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Wholesale Client",
    designation: "Bulk Supply Partner",
    text: "We appreciate their strong commitment to quality, timely delivery, and smooth coordination. Their team is professional, responsive, and dependable.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Retail Partner",
    designation: "Distribution Network",
    text: "Working with HOORAB GROUP has been a positive experience. Their ability to manage supply and distribution efficiently has added real value to our business.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Corporate Client",
    designation: "Strategic Partner",
    text: "HOORAB GROUP stands out for its professionalism, trustworthy service, and dedication to building long-term business relationships.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Commercial Partner",
    designation: "Retail & Wholesale",
    text: "Their reliable support, quality-focused approach, and efficient operations make them a trusted name in retail and wholesale services.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            OUR{" "}
            <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
              TESTIMONIALS
            </span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-300">
            What Our Partners Say
          </h3>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-[#00e6ff]/30"
              >
                {/* Image */}
                <div className="flex-shrink-0 hidden">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#139aff] shadow-lg">
                    <Image
                      src={reviews[currentIndex].image}
                      alt={reviews[currentIndex].name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl leading-relaxed mb-8 italic">
                    "{reviews[currentIndex].text}"
                  </p>
                  <h4 className="text-2xl font-bold text-[#00e6ff]">
                    {reviews[currentIndex].name}
                  </h4>
                  <p className="text-gray-400 mt-1">
                    {reviews[currentIndex].designation}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-[-60px] top-1/2 -translate-y-1/2 bg-[#00e6ff] hover:bg-[#139aff] text-black p-4 rounded-full transition-colors duration-300 z-10 text-2xl"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-[-60px] top-1/2 -translate-y-1/2 bg-[#139aff] hover:bg-[#00e6ff] text-black p-4 rounded-full transition-colors duration-300 z-10 text-2xl"
          >
            →
          </button>

          {/* Counter */}
          <div className="text-center mt-8 text-gray-400 text-lg">
            <span className="text-[#00e6ff]">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(reviews.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
}