"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
 
} from "react-icons/ai";
import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import toast from "react-hot-toast";

export default function Footer() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      toast.success("Logged out successfully!");
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong while logging out");
    }
  };

  return (
    <footer className="relative bg-white text-gray-800 py-16 overflow-hidden border-t border-gray-200">
      
      {/* 🔥 Soft Brand Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#00e6ff]/10 via-[#139aff]/10 to-transparent blur-2xl"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12"
      >
        {/* ================= Company Info ================= */}
        <motion.div
          variants={fadeUp}
          className="space-y-4 max-w-sm text-gray-600"
        >
          <Link href="/" className="flex items-center gap-3">
            {/* Logo */}
            <svg width="40" height="40" viewBox="0 0 128 100">
              <path
                d="M16 12 H48 V88 H16 V12 Z M80 12 H112 V88 H80 V12 Z M48 40 H80 V60 H48 V40 Z"
                fill="url(#brandGradient)"
              />
              <defs>
                <linearGradient id="brandGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#00e6ff" />
                  <stop offset="1" stopColor="#139aff" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-black tracking-tight text-gray-900">
                HOORAB
              </span>
              <span className="text-xs font-semibold text-gray-500 mt-1">
                Business Cooperative Solutions
              </span>
            </div>
          </Link>

          <p className="text-gray-500 leading-relaxed text-sm">
            Providing professional wholesale & retail services with reliable supply, strong partnerships, and operational excellence.
          </p>

          {/* Social Icons - Individual */}
          <div className="flex gap-4 mt-2">
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-gray-500 hover:text-white bg-gray-100 hover:bg-gradient-to-r hover:from-[#00e6ff] hover:to-[#139aff] transition-all shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiFillFacebook size={20} />
            </motion.a>

            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-gray-500 hover:text-white bg-gray-100 hover:bg-gradient-to-r hover:from-[#00e6ff] hover:to-[#139aff] transition-all shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiFillInstagram size={20} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/company/hoorab-group-of-companies-ltd/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-gray-500 hover:text-white bg-gray-100 hover:bg-gradient-to-r hover:from-[#00e6ff] hover:to-[#139aff] transition-all shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiFillLinkedin size={20} />
            </motion.a>

            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-gray-500 hover:text-white bg-gray-100 hover:bg-gradient-to-r hover:from-[#00e6ff] hover:to-[#139aff] transition-all shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiFillTwitterCircle size={20} />
            </motion.a>
          </div>
            {/* Company Registration */}
<div className="mt-4 pt-3 border-t border-gray-200">
  <p className="text-xs text-gray-600 leading-relaxed">
    <span className="font-semibold text-gray-800">
      HOORAB GROUP OF <span className="text-[#139aff]">COMPANIES LTD</span>
    </span>
    <br />
    <span className="text-gray-500">Registered in England and Wales | Company No: 15800546</span>
  </p>
</div>
        </motion.div>

        {/* ================= Quick Links ================= */}
        <motion.div variants={fadeUp} className="space-y-2">
          <h3 className="text-xl font-semibold mb-4 text-[#139aff]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#00e6ff] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/brand" className="hover:text-[#00e6ff] transition">
                Brands
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#00e6ff] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/partner" className="hover:text-[#00e6ff] transition">
                Partner
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-[#00e6ff] transition">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#00e6ff] transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-[#00e6ff] transition">
                Privacy Policy
              </Link>
            </li>
            {!session && (
              <li>
                <Link href="/login" className="hover:text-[#00e6ff] transition">
                  Admin Login
                </Link>
              </li>
            )}
            {session && (
              <li>
                <span onClick={handleLogout} className="hover:text-[#00e6ff] cursor-pointer transition">
                  Log Out
                </span>
              </li>
            )}
          </ul>
        </motion.div>

  {/* ================= Contact & Admin Section ================= */}
<motion.div variants={fadeUp} className="space-y-4">
  <h3 className="text-xl font-semibold mb-4 text-[#139aff]">
    Contact Us
  </h3>

  <p className="text-gray-600">
    <strong>Headquarters:</strong> London, United Kingdom
  </p>

  <p className="text-gray-600">
    <strong>Email: </strong>
    <span className="text-[#00e6ff] font-medium">
      info@hoorabgroup.com
    </span>
  </p>
  
  <iframe
    className="w-full h-40 rounded-lg border border-gray-200 shadow-sm mt-2"
    src="https://www.google.com/maps?q=London,United+Kingdom&output=embed"
    loading="lazy"
    style={{ border: 0 }}
  ></iframe>


</motion.div>
      </motion.div>

     

      {/* ================= Bottom Copyright ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 pt-4 border-t border-gray-200 text-center text-sm text-gray-500"
      >
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-[#139aff] font-semibold">HOORAB GROUP</span>. All
        rights reserved.
      </motion.div>
    </footer>
  );
}