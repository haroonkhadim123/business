// components/Footer.jsx
"use client";

import Link from "next/link";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Main Group</h2>
          <p>
            Your company description goes here. Professional services, multiple business divisions,
            and cooperative structure.
          </p>
          <div className="flex gap-4 text-2xl mt-2">
            <a href="#" className="hover:text-blue-500"><AiFillFacebook /></a>
            <a href="#" className="hover:text-pink-500"><AiFillInstagram /></a>
            <a href="#" className="hover:text-blue-400"><AiFillLinkedin /></a>
            <a href="#" className="hover:text-blue-300"><AiFillTwitterCircle /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="#home" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link href="#about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link href="#divisions" className="hover:text-blue-400 transition">Businesses</Link></li>
            <li><Link href="#brands" className="hover:text-blue-400 transition">Brands</Link></li>
            <li><Link href="#cooperative" className="hover:text-blue-400 transition">Cooperative</Link></li>
            <li><Link href="#careers" className="hover:text-blue-400 transition">Careers</Link></li>
            <li><Link href="#contact" className="hover:text-blue-400 transition">Get in Touch</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Saudi Office: Riyadh, Saudi Arabia</p>
          <p>Email: info@company.com</p>
          <p>Phone: +966 5XXXXXXXX</p>
          <iframe
            className="w-full h-40 rounded mt-2"
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Main Group. All rights reserved.
      </div>
    </footer>
  );
}
