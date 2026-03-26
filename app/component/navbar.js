"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { HiMenu, HiX } from "react-icons/hi";
import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineShop,
  AiOutlineTag,
  AiOutlineSolution,
  AiOutlineMail,
  AiOutlineLink,
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
    { name: "Home", href: "/", icon: <AiOutlineHome className="inline mr-2" /> },
    { name: "Brands", href: "/brand", icon: <AiOutlineTag className="inline mr-2" /> },
    { name: "About Us", href: "/about", icon: <AiOutlineTeam className="inline mr-2" /> },
    { name: "Businesses", href: "/admin", icon: <AiOutlineShop className="inline mr-2" /> },
    {
      name: "Partner Opportunity",
      href: "/partner",
      icon: <AiOutlineLink className="inline mr-2" />,
    },
    { name: "Careers", href: "/career", icon: <AiOutlineSolution className="inline mr-2" /> },
  ];

  return (
    <nav
      onBlur={() => setIsOpen(false)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
      }`}
    >
      <div className="py-4 mx-auto px-5 sm:px-6 lg:px-10 flex justify-between items-center">
        <Link href="/" className="flex items-center flex-shrink-0 gap-2 md:gap-4">
          {/* SVG Icon */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 128 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 md:w-12 md:h-12"
          >
            <path
              d="M16 12 H48 V88 H16 V12 Z M80 12 H112 V88 H80 V12 Z M48 40 H80 V60 H48 V40 Z"
              fill="#000000"
              stroke="#000000"
              strokeWidth="4"
            />
            <path
              d="M20 16 H44 V84 H20 V16 Z M84 16 H108 V84 H84 V16 Z M52 44 H76 V56 H52 V44 Z"
              fill="#00e6ff"
              opacity="0.18"
            />
          </svg>

          {/* Text */}
          <div className="flex flex-col leading-tight">
            <span className="text-2xl md:text-3xl font-black tracking-[-1px] text-black">
              HOORAB
            </span>
            <span className="text-xs md:text-sm font-semibold tracking-wide mt-1 text-[#139aff]">
              Business Cooperative Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-[#139aff] font-medium transition-colors duration-200 flex items-center text-base"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-2 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 flex items-center shadow-sm hover:shadow"
            style={{
              background: "linear-gradient(90deg, #00e6ff 0%, #139aff 100%)",
            }}
          >
            <AiOutlineMail className="mr-2 text-lg" />
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#139aff] text-3xl focus:outline-none p-1 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`absolute top-0 min-h-screen left-0 z-[100] w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#00e6ff]/20">
          <Link
            onClick={() => setIsOpen(false)}
            href="/"
            className="flex items-center flex-shrink-0 gap-2 md:gap-4"
          >
            {/* SVG Icon */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 128 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 md:w-12 md:h-12"
            >
              <path
                d="M16 12 H48 V88 H16 V12 Z M80 12 H112 V88 H80 V12 Z M48 40 H80 V60 H48 V40 Z"
                fill="#000000"
                stroke="#000000"
                strokeWidth="4"
              />
              <path
                d="M20 16 H44 V84 H20 V16 Z M84 16 H108 V84 H84 V16 Z M52 44 H76 V56 H52 V44 Z"
                fill="#00e6ff"
                opacity="0.18"
              />
            </svg>

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <span className="text-2xl md:text-3xl font-black tracking-[-1px] text-black">
                HOORAB
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wide mt-1 text-[#139aff]">
                Business Cooperative Solutions
              </span>
            </div>
          </Link>
        </div>

        <div className="flex z-[100] flex-col px-6 py-8 gap-5">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-[#139aff] font-medium text-lg transition-colors flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="mt-6 text-white font-semibold px-6 py-3 rounded-lg transition-all flex items-center justify-center text-base shadow-sm"
            style={{
              background: "linear-gradient(90deg, #00e6ff 0%, #139aff 100%)",
            }}
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