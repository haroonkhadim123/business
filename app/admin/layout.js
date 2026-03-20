"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  LayoutDashboard,
  Briefcase,
  PlusCircle,
  Building2,
  LogOut,
  Menu,
  X,
  View,
} from "lucide-react";

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="min-h-screen bg-gray-50/40 antialiased">
      
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 p-4 bg-white border-b border-gray-200 shadow-sm z-50 px-5 md:px-8 flex items-center justify-between">
        
        <div className="flex items-center gap-5 md:gap-6">
          
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-700 hover:text-black transition"
          >
            <Menu size={26} />
          </button>

          {/* ✅ ORIGINAL PROFESSIONAL LOGO BACK */}
          <Link
            href="/admin"
            className="flex items-center gap-3 md:gap-4"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 128 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-10 md:h-10"
            >
              <path
                d="M16 12 H48 V88 H16 V12 Z M80 12 H112 V88 H80 V12 Z M48 40 H80 V60 H48 V40 Z"
                fill="#000"
                stroke="#000"
                strokeWidth="4"
              />
              <path
                d="M20 16 H44 V84 H20 V16 Z M84 16 H108 V84 H84 V16 Z M52 44 H76 V56 H52 V44 Z"
                fill="#111"
                opacity="0.1"
              />
            </svg>

            <div className="flex flex-col leading-tight">
              <span className="text-xl md:text-2xl font-black tracking-tight text-black">
                HOORAB
              </span>
              <span className="text-[10px] md:text-xs font-semibold text-gray-600 tracking-wide">
                Business Cooperative Solutions
              </span>
            </div>
          </Link>
        </div>

        {/* Logout */}
        <button className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-700 transition">
          <LogOut size={18} />
          <span className="hidden md:block">Logout</span>
        </button>
      </header>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={closeSidebar}
            />

            {/* Sidebar Panel */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="fixed top-0 left-0 z-50 w-72 h-full bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full">
                
                {/* Top */}
                <div className="p-5 border-b flex justify-between items-center">
                  <span className="font-semibold text-gray-800">
                   <Link
            href="/admin"
            className="flex items-center gap-3 md:gap-4"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 128 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-10 md:h-10"
            >
              <path
                d="M16 12 H48 V88 H16 V12 Z M80 12 H112 V88 H80 V12 Z M48 40 H80 V60 H48 V40 Z"
                fill="#000"
                stroke="#000"
                strokeWidth="4"
              />
              <path
                d="M20 16 H44 V84 H20 V16 Z M84 16 H108 V84 H84 V16 Z M52 44 H76 V56 H52 V44 Z"
                fill="#111"
                opacity="0.1"
              />
            </svg>

            <div className="flex flex-col leading-tight">
              <span className="text-xl md:text-2xl font-black tracking-tight text-black">
                HOORAB
              </span>
              <span className="text-[10px] md:text-xs font-semibold text-gray-600 tracking-wide">
                Business Cooperative Solutions
              </span>
            </div>
          </Link>
                  </span>
                  <button onClick={closeSidebar}>
                    <X size={26} />
                  </button>
                </div>

                {/* Links */}
                <div className="p-6">
                  <SidebarLinks closeSidebar={closeSidebar} />
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Content */}
      <main className="pt-20 p-4 md:p-8">{children}</main>
    </div>
  );
}

function SidebarLinks({ closeSidebar }) {
  const links = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/add-job", label: "Add Job", icon: PlusCircle },
    { href: "/admin/manage-jobs", label: "Manage Jobs", icon: Briefcase },
    { href: "/admin/add-brand", label: "Add Brand", icon: PlusCircle },
    { href: "/admin/manage-brands", label: "Manage Brands", icon: Building2 },
    { href: "/admin/view-application", label: "View Applications", icon: View },
  ];

  return (
    <nav className="space-y-2">
      {links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={closeSidebar}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 hover:text-black transition-all duration-200"
        >
          <item.icon size={20} strokeWidth={1.8} />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}