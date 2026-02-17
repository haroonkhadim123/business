"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
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
    link: "#brands",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Global Supply Network",
    subtitle:
      "Strategic sourcing, reliable partnerships and scalable distribution across UK, GCC & Europe.",
    cta: "Wholesale Inquiry",
    link: "#contact",
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Quality. Reliability. Growth.",
    subtitle:
      "Delivering long-term value through supply chain excellence and trusted partnerships worldwide.",
    cta: "Contact Us",
    link: "#contact",
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
      className="h-[60vh] md:h-[90vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          {/* Background Image */}
          <Image
            src={slide.src}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 mt-15">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight animate-fadeIn">
              {slide.title}
            </h1>

            <p
              className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl animate-fadeIn"
              style={{ animationDelay: "0.3s" }}
            >
              {slide.subtitle}
            </p>

            <Link
              href={slide.link}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              {slide.cta}
            </Link>
          </div>
        </SwiperSlide>
      ))}

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(2rem); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s forwards; }
      `}</style>
    </Swiper>
  );
}
