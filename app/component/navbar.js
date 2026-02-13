"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import {
  AiFillHome,
  AiOutlineTeam,
  AiOutlineShop,
  AiOutlineTag,
  AiOutlineUsergroupAdd,
  AiOutlineSolution,
  AiOutlineMail,
} from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/", icon: <AiFillHome className="inline mr-2" /> },
    { name: "About Us", href: "#about", icon: <AiOutlineTeam className="inline mr-2" /> },
    { name: "Businesses", href: "#divisions", icon: <AiOutlineShop className="inline mr-2" /> },
    { name: "Brands", href: "#brands", icon: <AiOutlineTag className="inline mr-2" /> },
    { name: "Cooperative", href: "#cooperative", icon: <AiOutlineUsergroupAdd className="inline mr-2" /> },
    { name: "Careers", href: "#careers", icon: <AiOutlineSolution className="inline mr-2" /> },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B1120]/90 shadow-md backdrop-blur-sm" : "bg-[#0B1120]/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition">
          Main Group
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-blue-400 transition flex items-center"
            >
              {link.icon} {link.name}
            </Link>
          ))}

          {/* Get in Touch Button */}
          <Link
            href="#contact"
            className="ml-4 bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:scale-105 text-white px-4 py-2 rounded-md transition flex items-center"
          >
            <AiOutlineMail className="mr-2" /> Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#0B1120]/95 backdrop-blur-sm transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-gray-700">
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition">
            Main Group
          </Link>
        
        </div>
        <div className="flex flex-col px-6 py-6 gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-blue-400 transition flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {link.icon} {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:scale-105 text-white px-4 py-2 rounded-md flex items-center transition"
            onClick={() => setIsOpen(false)}
          >
            <AiOutlineMail className="mr-2" /> Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
