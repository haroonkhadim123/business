"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import {
  AiFillHome,
  AiOutlineTeam,
  AiOutlineShop,
  AiOutlineTag,
  AiOutlineSolution,
  AiOutlineMail,
} from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/", icon: <AiFillHome className="inline mr-2" /> },
    { name: "Brands", href: "#brands", icon: <AiOutlineTag className="inline mr-2" /> },
    { name: "About Us", href: "#about", icon: <AiOutlineTeam className="inline mr-2" /> },
    { name: "Businesses", href: "#divisions", icon: <AiOutlineShop className="inline mr-2" /> },
    { name: "Careers", href: "#careers", icon: <AiOutlineSolution className="inline mr-2" /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex justify-between items-center ">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo.jpg"           // ← CHANGE THIS to your actual file name
            alt="HOORAB Logo"
            width={160}
            height={48}
            className="object-contain h-25 md:h-30 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center text-base"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          <Link
            href="#contact"
            className="ml-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 flex items-center shadow-sm hover:shadow"
          >
            <AiOutlineMail className="mr-2 text-lg" />
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 text-3xl focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`absolute top-0 min-h-screen left-0 z-100 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo.jpg"       // ← same file here
              alt="HOORAB Logo"
              width={140}
              height={42}
              className="object-contain"
              priority
            />
          </Link>
       
        </div>

        <div className="flex z-100 flex-col px-6 py-8 gap-5">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-blue-600 font-medium text-lg transition-colors flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          <Link
            href="#contact"
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all flex items-center justify-center text-base shadow-sm"
            onClick={() => setIsOpen(false)}
          >
            <AiOutlineMail className="mr-2 text-xl" />
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}