// components/Footer.jsx
"use client";

import Link from "next/link";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";

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
  <div className="flex items-center">
    <Image
      src="/logo.jpg"           // Ensure correct file name
      alt="HOORAB Logo"
      width={160}
      height={48}
      className="object-contain"
      priority
    />
  </div>

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
            <li><Link href="#home" className="hover:text-blue-500 transition">Home</Link></li>
            <li><Link href="#brands" className="hover:text-blue-500 transition">Brands</Link></li>
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
