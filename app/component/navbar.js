"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

import { HiMenu, HiX } from "react-icons/hi";
import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineTag,
  AiOutlineSolution,
  AiOutlineMail,
  AiOutlineLink,
} from "react-icons/ai";
import toast from "react-hot-toast";

export default function Navbar() {
  const { data: session, status } = useSession();
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
          {!session && (
            <Link
              href="/login"
              className={`relative text-center px-4 py-2 rounded-lg font-semibold 
                border border-[#139aff]/40 overflow-hidden transition-all duration-300
                before:absolute before:inset-0 before:bg-gradient-to-r 
                before:from-[#00e6ff] before:to-[#139aff] 
                before:opacity-0 hover:before:opacity-100 
                before:transition before:duration-300
                ${isActive("/login") ? "before:opacity-100 text-white" : "text-[#139aff]"}
              `}
            >
              <span className="relative z-10 hover:text-white transition-colors duration-300">
                Login
              </span>
            </Link>
          )}
          
          {session && (
            <span
            onClick={async () => {
            toast.success("Logged out successfully!");
            await signOut({ callbackUrl: '/' });
          }}
              className={`relative text-center px-4 py-2 rounded-lg font-semibold 
                border border-[#139aff]/40 overflow-hidden transition-all duration-300
                before:absolute before:inset-0 before:bg-gradient-to-r 
                before:from-[#00e6ff] before:to-[#139aff] 
                before:opacity-0 hover:before:opacity-100 
                before:transition before:duration-300 cursor-pointer
                ${isActive("/admin") ? "before:opacity-100 text-white" : "text-[#139aff]"}
              `}
            >
              <span className="relative z-10 hover:text-white transition-colors duration-300">
                Logout
              </span>
            </span>
          )}

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

          {/* Mobile Login Button */}
          {!session && (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className={`relative text-center px-4 py-3 rounded-lg font-semibold 
                border border-[#139aff]/40 overflow-hidden transition-all duration-300
                before:absolute before:inset-0 before:bg-gradient-to-r 
                before:from-[#00e6ff] before:to-[#139aff] 
                before:opacity-0 hover:before:opacity-100 
                before:transition before:duration-300
                ${isActive("/login") ? "before:opacity-100 text-white" : "text-[#139aff]"}
              `}
            >
              <span className="relative z-10 hover:text-white transition-colors duration-300">
                Login
              </span>
            </Link>
          )}
          
          {session && (
            <span
         
               onClick={async () => {
                setIsOpen(false);
            toast.success("Logged out successfully!");
            await signOut({ callbackUrl: '/' });
          }}
              className={`relative text-center px-4 py-3 rounded-lg font-semibold 
                border border-[#139aff]/40 overflow-hidden transition-all duration-300
                before:absolute before:inset-0 before:bg-gradient-to-r 
                before:from-[#00e6ff] before:to-[#139aff] 
                before:opacity-0 hover:before:opacity-100 
                before:transition before:duration-300
                ${isActive("/admin") ? "before:opacity-100 text-white" : "text-[#139aff]"}
              `}
            >
              <span className="relative z-10 hover:text-white transition-colors duration-300">
                Logout
              </span>
            </span>
          )}
          
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