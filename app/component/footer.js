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
    <footer className="relative bg-white text-gray-800 py-16 overflow-hidden border-t border-gray-200">
      
      {/* 🔥 Soft Brand Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#00e6ff]/10 via-[#139aff]/10 to-transparent blur-2xl"></div>

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
          className="space-y-4 max-w-sm text-gray-600"
        >
          <Link href="/" className="flex items-center gap-3">
            {/* Logo */}
            <svg width="40" height="40" viewBox="0 0 128 100">
              <path
                d="M16 12 H48 V88 H16 V12 Z M80 12 H112 V88 H80 V12 Z M48 40 H80 V60 H48 V40 Z"
                fill="url(#brandGradient)"
              />
              <defs>
                <linearGradient id="brandGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#00e6ff" />
                  <stop offset="1" stopColor="#139aff" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-black tracking-tight text-gray-900">
                HOORAB
              </span>
              <span className="text-xs font-semibold text-gray-500 mt-1">
                Business Cooperative Solutions
              </span>
            </div>
          </Link>

          <p className="text-gray-500 leading-relaxed text-sm">
            Providing professional corporate services with multiple business
            divisions, sustainable growth strategies, and a cooperative
            structure.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            {socialIcons.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-gray-500 hover:text-white bg-gray-100 hover:bg-gradient-to-r hover:from-[#00e6ff] hover:to-[#139aff] transition-all shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ================= Quick Links ================= */}
        <motion.div variants={fadeUp} className="space-y-2">
          <h3 className="text-xl font-semibold mb-4 text-[#139aff]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600">
            {[
              { name: "Home", link: "/" },
              { name: "Brands", link: "/brand" },
              { name: "About Us", link: "/about" },
              
              { name: "Partner", link: "/partner" },
              { name: "Careers", link: "/career" },
              { name: "Contact", link: "/contact" },
              { name: "Privacy Policy", link: "/privacy" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="hover:text-[#00e6ff] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ================= Contact Info ================= */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-[#139aff]">
            Contact Us
          </h3>

          <p className="text-gray-600">
            London Office: London, United Kingdom
          </p>

          <p className="text-gray-600">
            Email:{" "}
            <span className="text-[#00e6ff] font-medium">
              info@hoorabgroup.com
            </span>
          </p>

          <iframe
            className="w-full h-40 rounded-lg border border-gray-200 shadow-sm mt-2"
            src="https://www.google.com/maps?q=London,United+Kingdom&output=embed"
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </motion.div>
      </motion.div>

      {/* ================= Bottom ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500"
      >
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-[#139aff] font-semibold">HOORAB GROUP</span>. All
        rights reserved.
      </motion.div>
    </footer>
  );
}