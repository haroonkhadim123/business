"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    src: "/banner1.jpg",
    title: "Retail & Wholesale Excellence",
    subtitle:
      "HOORAB GROUP operates multiple brands across retail, wholesale and global distribution markets.",
    cta: "Explore Brands",
    link: "/brand",
  },
  {
    src: "/banner.webp",
    title: "Global Supply Network",
    subtitle:
      "Strategic sourcing, reliable partnerships and scalable distribution across UK, GCC & Europe.",
    cta: "Wholesale Inquiry",
    link: "/contact",
  },
  {
    src: "/banner2.jpg",
    title: "Quality. Reliability. Growth.",
    subtitle:
      "Delivering long-term value through supply chain excellence and trusted partnerships worldwide.",
    cta: "Contact Us",
    link: "/contact",
  },
];

export default function Banner() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      className="h-[75vh] md:h-[90vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative overflow-hidden">

          {/* Background Zoom Animation */}
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

            <motion.h1
              key={slide.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl"
            >
              {slide.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                href={slide.link}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
              >
                {slide.cta}
              </Link>
            </motion.div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
