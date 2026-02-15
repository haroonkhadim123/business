// components/Footer.jsx
"use client";

import Link from "next/link";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { motion } from "framer-motion";


export default function Footer() {
  const socialIcons = [
    { icon: <AiFillFacebook />, href: "#", color: "hover:text-blue-600" },
    { icon: <AiFillInstagram />, href: "#", color: "hover:text-pink-500" },
    { icon: <AiFillLinkedin />, href: "#", color: "hover:text-blue-500" },
    { icon: <AiFillTwitterCircle />, href: "#", color: "hover:text-blue-400" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-white text-gray-900 py-12 border-t border-gray-200">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8"
      >
        {/* Company Info */}
      <motion.div
  variants={fadeUp}
  className="space-y-4 max-w-sm text-gray-800"
>
  {/* Logo */}
<Link
  href="/"
  className="flex items-center flex-shrink-0 gap-2 md:gap-4"
>
  {/* SVG Icon */}
  <svg
    width="36"             // smaller default for mobile
    height="36"
    viewBox="0 0 128 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 md:w-12 md:h-12" // responsive sizing
  >
    <path
      d="M16 12 H48 V88 H16 V12 Z M80 12 H112 V88 H80 V12 Z M48 40 H80 V60 H48 V40 Z"
      fill="#000000"
      stroke="#000000"
      strokeWidth="4"
    />
    <path
      d="M20 16 H44 V84 H20 V16 Z M84 16 H108 V84 H84 V16 Z M52 44 H76 V56 H52 V44 Z"
      fill="#111111"
      opacity="0.12"
    />
  </svg>

  {/* Text */}
  <div className="flex flex-col leading-tight">
    <span className="text-2xl md:text-3xl font-black tracking-[-1px] text-black">
      HOORAB
    </span>
    <span className="text-xs md:text-sm font-semibold text-gray-700 tracking-wide mt-1">
      Business Cooperative Solutions
    </span>
  </div>
</Link>


  {/* Description */}
  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
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
        className={`p-2 rounded-full transition ${item.color} hover:shadow-lg hover:scale-110 flex items-center justify-center`}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        {item.icon}
      </motion.a>
    ))}
  </div>
</motion.div>


        {/* Quick Links */}
        <motion.div variants={fadeUp} className="space-y-2">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-500 transition">Home</Link></li>
            <li><Link href="/brand" className="hover:text-blue-500 transition">Brands</Link></li>
            <li><Link href="#divisions" className="hover:text-blue-500 transition">Businesses</Link></li>
            <li><Link href="#about" className="hover:text-blue-500 transition">About Us</Link></li>
            <li><Link href="#careers" className="hover:text-blue-500 transition">Careers</Link></li>
            <li><Link href="#contact" className="hover:text-blue-500 transition">Get in Touch</Link></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Saudi Office: Riyadh, Saudi Arabia</p>
          <p>Email: info@hoorabgroup.com</p>
          <p>Phone: +966 5XXXXXXXX</p>
        <iframe
  className="w-full h-40 rounded mt-2"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.898897865973!2d46.67529531500002!3d24.71355128408843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0385b97b9df1%3A0xf2e1b64d6f839fa1!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1697441234567!5m2!1sen!2sus"
  loading="lazy"
  style={{ border: 0 }}
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

        </motion.div>
      </motion.div>

      {/* Bottom */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500"
      >
        &copy; {new Date().getFullYear()} HOORAB GROUP. All rights reserved.
      </motion.div>
    </footer>
  );
}
