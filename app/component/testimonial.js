"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Fake 3 reviews (tum apne real data daal sakte ho)
const reviews = [
  {
    name: "William Henry",
    designation: "Designer at Vertex Agency",
    text: "I can't recommend The Gourmet Haven enough. It's a place for special occasions, date nights, or whenever you're in the mood for a culinary adventure. The combination of exceptional service, exquisite cuisine, and elegant ambiance creates an unforgettable dining experience.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // real curly hair wale bande ki photo
  },
  {
    name: "Sarah Johnson",
    designation: "Marketing Director at CreativeHub",
    text: "Absolutely stunning experience every time! The attention to detail in both presentation and flavor is unmatched. Perfect for impressing clients or celebrating milestones. Will definitely return again and again.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Michael Chen",
    designation: "CEO at TechNova Solutions",
    text: "One of the best fine dining spots in the city. The fusion of flavors and professional staff made our anniversary dinner truly special. Highly recommended for anyone seeking a premium culinary journey.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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

  // Animation variants
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
            OUR TESTIMONIAL
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold">
            Our Client Reviews
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
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl"
              >
                {/* Left - Image */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
                    <Image
                      src={reviews[currentIndex].image}
                      alt={reviews[currentIndex].name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right - Text */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl leading-relaxed mb-8 italic">
                    "{reviews[currentIndex].text}"
                  </p>
                  <h4 className="text-2xl font-bold">
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
            className="absolute left-0 md:left-[-60px] top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-full transition-colors duration-300 z-10 text-2xl"
            aria-label="Previous review"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-[-60px] top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-full transition-colors duration-300 z-10 text-2xl"
            aria-label="Next review"
          >
            →
          </button>

          {/* Counter like 03 / 03 */}
          <div className="text-center mt-8 text-gray-400 text-lg">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(reviews.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
}