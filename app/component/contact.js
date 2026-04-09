"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ==================== LEFT - MAP ==================== */}
          <div className="relative h-[500px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl border border-[#00e6ff]/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.840501!2d-0.1277583!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333fffff%3A0xabcdef1234567890!2sLondon%2C%20United%20Kingdom!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl"
            ></iframe>
          </div>

          {/* ==================== RIGHT - CONTACT INFO ==================== */}
          <div className="space-y-12">
            {/* Heading */}
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-3">
                <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-full" />
            </div>

            {/* Contact Items */}
            <div className="space-y-10">

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.03 }}
                className="flex gap-6 items-start group"
              >
                <div className="w-14 h-14 bg-[#139aff] text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00e6ff] transition-colors">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Work with us</p>
                  <Link
                    href="mailto:info@hoorabgroup.com"
                    className="text-2xl font-semibold text-gray-900 hover:text-[#139aff] transition-colors"
                  >
                    info@hoorabgroup.com
                  </Link>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.03 }}
                className="flex gap-6 items-start group"
              >
                <div className="w-14 h-14 bg-[#139aff] text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00e6ff] transition-colors">
                  <MapPin size={28} />
                </div>
                <div>
                  
                <div>
  <p className="text-sm font-medium text-gray-500 mb-1">Headquarters</p>
  <p className="text-2xl font-semibold text-gray-900 group-hover:text-[#139aff] transition-colors duration-300">
    London, United Kingdom
  </p>
</div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}