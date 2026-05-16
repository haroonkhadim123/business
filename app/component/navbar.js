"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";



import { HiMenu, HiX } from "react-icons/hi";
import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineTag,
  AiOutlineSolution,
  AiOutlineMail,
  AiOutlineLink,
} from "react-icons/ai";
import Image from "next/image";


export default function Navbar() {

  const pathname = usePathname();
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
    { name: "Partner Opportunity", href: "/partner", icon: <AiOutlineLink className="inline mr-2" /> },
    { name: "Careers", href: "/career", icon: <AiOutlineSolution className="inline mr-2" /> },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <nav
      onBlur={() => setIsOpen(false)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
      }`}
    >
      <div className="py-4 mx-auto px-5 sm:px-6 lg:px-10 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 gap-2 md:gap-4">
        <Image
  src="/logo.png"
  alt="Hoorab Logo"
  width={56}
  height={56}
  priority
  className="h-18 w-auto object-contain md:20"
/>

        
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors duration-200 flex items-center text-base
                ${isActive(link.href) 
                  ? "text-[#139aff] font-bold" 
                  : "text-gray-800 hover:text-[#139aff]"
                }
              `}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          {/* Desktop Login Button */}
       
          
        

          {/* Get in Touch */}
          <Link
            href="/contact"
            className={`ml-2 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 flex items-center shadow-sm hover:shadow
              ${isActive("/contact") ? "ring-2 ring-white ring-offset-2 ring-offset-[#139aff]" : ""}
            `}
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
           <Image
  src="/logo.png"
  alt="Hoorab Logo"
  width={52}
  height={52}
  priority
  className="h-18 w-auto object-contain md:20 "
/>

          </Link>
        </div>

        <div className="flex z-[100] flex-col px-6 py-8 gap-5">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium text-lg transition-colors flex items-center
                ${isActive(link.href) 
                  ? "text-[#139aff] font-bold" 
                  : "text-gray-800 hover:text-[#139aff]"
                }
              `}
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

      
          
       
          
          {/* Get in Touch */}
          <Link
            href="/contact"
            className={`text-white font-semibold px-6 py-3 rounded-lg transition-all flex items-center justify-center text-base shadow-sm
              ${isActive("/contact") ? "ring-2 ring-white ring-offset-2 ring-offset-[#139aff]" : ""}
            `}
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