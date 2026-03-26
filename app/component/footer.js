// components/Footer.jsx
"use client";

import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { motion } from "framer-motion";

export default function Footer() {
  const socialIcons = [
    { icon: <AiFillFacebook />, href: "#" },
    { icon: <AiFillInstagram />, href: "#" },
    { icon: <AiFillLinkedin />, href: "#" },
    { icon: <AiFillTwitterCircle />, href: "#" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="relative bg-gray-900 text-white py-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#00e6ff]/20 via-[#139aff]/20 to-[#00e6ff]/10 blur-3xl"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12"
      >
        {/* ================= Company Info ================= */}
        <motion.div
          variants={fadeUp}
          className="space-y-4 max-w-sm text-gray-200"
        >
          <Link href="/" className="flex items-center gap-3">
            {/* Logo */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 128 100"
              className="md:w-12 md:h-12"
            >
              <path
                d="M16 12 H48 V88 H16 V12 Z M80 12 H112 V88 H80 V12 Z M48 40 H80 V60 H48 V40 Z"
                fill="url(#brandGradient)"
              />
              <defs>
                <linearGradient
                  id="brandGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00e6ff" />
                  <stop offset="1" stopColor="#139aff" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex flex-col leading-tight">
              <span className="text-2xl md:text-3xl font-black tracking-[-1px] text-white">
                HOORAB
              </span>
              <span className="text-xs md:text-sm font-semibold text-gray-400 mt-1">
                Business Cooperative Solutions
              </span>
            </div>
          </Link>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Providing professional corporate services with multiple business divisions, sustainable growth strategies, and a cooperative structure.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            {socialIcons.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-gray-300 hover:text-white hover:bg-[#00e6ff]/20 transition-shadow shadow-md hover:shadow-[#00e6ff]/40 flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ================= Quick Links ================= */}
        <motion.div variants={fadeUp} className="space-y-2">
          <h3 className="text-xl font-semibold mb-4 text-[#00e6ff]">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#139aff] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/brand" className="hover:text-[#139aff] transition">
                Brands
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#139aff] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#divisions" className="hover:text-[#139aff] transition">
                Businesses
              </Link>
            </li>
            <li>
              <Link href="/partner" className="hover:text-[#139aff] transition">
                Partner
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-[#139aff] transition">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#139aff] transition">
                Get in Touch
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* ================= Contact Info ================= */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-[#00e6ff]">
            Contact Us
          </h3>

          <p className="text-gray-300">
            London Office: London, United Kingdom
          </p>
          <p className="text-gray-300">
            Email: <span className="text-[#139aff]">info@hoorabgroup.com</span>
          </p>

          <iframe
            className="w-full h-40 rounded-lg border border-[#00e6ff]/30 shadow-lg shadow-[#00e6ff]/20 mt-2"
            src="https://www.google.com/maps?q=London,United+Kingdom&output=embed"
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>

      {/* ================= Bottom ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 border-t border-[#00e6ff]/20 pt-6 text-center text-sm text-gray-400"
      >
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-[#139aff] font-semibold">HOORAB GROUP</span>. All
        rights reserved.
      </motion.div>
    </footer>
  );
}