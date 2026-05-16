"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
import Image from "next/image";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);
      useEffect(() => {
    if(status==='loading') return;
    if (!session || session.user.role !== 'admin') router.push("/");
  }, [session, status, router]);

  


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/40 antialiased">

      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm z-50 px-5 md:px-8 flex items-center justify-between">

        <div className="flex items-center gap-5 md:gap-6">
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
          >
            <Menu size={26} />
          </button>

          <span className="font-semibold text-gray-800 dark:text-gray-100">
            <Link href="/admin" className="flex dark:text-white items-center gap-3 md:gap-4">
            <Image
  src="/logo.png"
  alt="Hoorab Logo"
  width={56}
  height={56}
  priority
  className="h-20 w-auto object-contain md:24"
/>

              
            </Link>
          </span>
        </div>

        <button
          onClick={async () => {
            toast.success("Logged out successfully!");
            await signOut({ callbackUrl: '/' });
          }}
          className="flex items-center gap-2 text-sm font-bold text-white bg-red-500 p-3 rounded-2xl justify-center hover:bg-red-700 transition"
        >
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
              className="fixed top-0 left-0 z-50 w-72 h-full bg-white dark:bg-gray-800 shadow-2xl"
            >
              <div className="flex flex-col h-full">

                {/* Top */}
                <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    <Link href="/admin" className="flex dark:text-white items-center gap-3 md:gap-4">
                      <Image
  src="/logo.png"
  alt="Hoorab Logo"
  width={56}
  height={56}
  priority
    className="h-20 w-auto object-contain md:h-24"
/>
                 
                    </Link>
                  </span>
                  <button onClick={closeSidebar} className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition">
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
  const pathname = usePathname();
  
  const links = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/add-job", label: "Add Job", icon: PlusCircle },
    { href: "/admin/manage-jobs", label: "Manage Jobs", icon: Briefcase },
    { href: "/admin/add-brand", label: "Add Brand", icon: PlusCircle },
    { href: "/admin/manage-brands", label: "Manage Brands", icon: Building2 },
    { href: "/admin/view-application", label: "View Applications", icon: View },
  ];

  const isActive = (href) => {
    if (href === "/admin") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <nav className="space-y-2">
      {links.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);
        
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeSidebar}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
              ${active 
                ? "bg-gradient-to-r from-[#00e6ff]/10 to-[#139aff]/10 text-[#139aff] font-semibold border-l-4 border-[#139aff]" 
                : "text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white"
              }
            `}
          >
            <Icon size={20} strokeWidth={1.8} className={active ? "text-[#139aff]" : ""} />
            <span className={active ? "font-semibold" : ""}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}