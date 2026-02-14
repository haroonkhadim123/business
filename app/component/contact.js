"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ==================== LEFT - MAP ==================== */}
          <div className="relative h-[500px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl">
         <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.7757087034495!2d46.67310741500143!3d24.71355128415165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03f0f0f0f0f0%3A0xabcdef1234567890!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1697351234567!5m2!1sen!2ssa"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-3xl"
></iframe>

          </div>

          {/* ==================== RIGHT - CONTACT INFO ==================== */}
          <div className="space-y-12">
            {/* Heading */}
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-3">Contact Us</h2>
              <div className="w-24 h-1 bg-black rounded-full" />
            </div>

            {/* Contact Items */}
            <div className="space-y-10">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className="flex gap-6 items-start group"
              >
                <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#c5a26b] transition-colors">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call Us 24/7</p>
                  <a href="tel:+25621452156" className="text-2xl font-semibold text-gray-900 hover:text-[#c5a26b] transition-colors">
                    (+256) 2145.2156
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.03 }}
                className="flex gap-6 items-start group"
              >
                <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#c5a26b] transition-colors">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Work with us</p>
                  <a href="mailto:info@invvena.com" className="text-2xl font-semibold text-gray-900 hover:text-[#c5a26b] transition-colors">
                   info@hoorabgroup.com
                  </a>
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
                <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#c5a26b] transition-colors">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Our Location</p>
                  <p className="text-2xl font-semibold text-gray-900">
                Saudi Office: Riyadh, Saudi Arabia
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
