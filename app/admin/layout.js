// app/admin/layout.js
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
  View
} from "lucide-react";

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="min-h-screen bg-gray-50/40 antialiased">
      {/* Top Navbar */}
      <header className=" fixed top-0 left-0 right-0  p-4 bg-white border-b border-gray-200 shadow-sm z-100 px-5 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-5 md:gap-6">
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo - Home link */}
          <Link
            href="/admin"
            onClick={closeSidebar} // also closes on desktop (no harm)
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
                fill="#111111"
                opacity="0.12"
              />
            </svg>

            <div className="flex flex-col leading-tight">
              <span className="text-2xl md:text-3xl font-black tracking-[-1px] text-black">
                HOORAB
              </span>
              <span className="text-xs md:text-sm font-semibold text-gray-700 tracking-wide mt-1">
                Business Cooperative Solutions
              </span>
            </div>
          </Link>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-700 transition">
          <LogOut size={18} />
          <span className="md:block hidden">Logout</span>
        </button>
      </header>

      <div className="flex pt-20 ">
        {/* Desktop Sidebar */}
        <aside className="hidden   md:block w-64 lg:w-72  bg-white shadow-xl border-r border-gray-200 min-h-screen">
          <div className="p-6 lg:p-8">
            <SidebarLinks closeSidebar={closeSidebar} />
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <>
         <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/60 z-40 md:hidden"
        onClick={closeSidebar}           // ← important!
      />

              <motion.aside 
          
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed top-0 inset-y-0 left-0 z-100 w-72 bg-white shadow-2xl md:hidden"
                 
              >
                <div    className="flex flex-col min-h-screen">
                  <div className="p-6 border-b border-gray-100">
                    <button
                      onClick={closeSidebar}
                      className="text-gray-700 hover:text-gray-900"
                      aria-label="Close menu"
                    >
                      <X size={28} />
                    </button>
                  </div>

                  <div className="flex-1 p-6 overflow-y-auto ">
                    {/* Logo in mobile sidebar */}
                    <Link
                      href="/admin"
                      onClick={closeSidebar}
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
                          fill="#111111"
                          opacity="0.12"
                        />
                      </svg>

                      <div className="flex flex-col leading-tight">
                        <span className="text-2xl md:text-3xl font-black tracking-[-1px] text-black">
                          HOORAB
                        </span>
                        <span className="text-xs md:text-sm font-semibold text-gray-700 tracking-wide mt-1">
                          Business Cooperative Solutions
                        </span>
                      </div>
                    </Link>

                    <div className="mt-8">
                      <SidebarLinks closeSidebar={closeSidebar} />
                    </div>
                  </div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Page Content */}
        <main className="flex-1  p-4 md:p-8 lg:p-10 bg-gray-50/40 ">
          {children}
        </main>
      </div>
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
    <nav className="space-y-1.5 text-gray-700 font-medium ">
      {links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={closeSidebar}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          <item.icon size={20} strokeWidth={1.8} />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}