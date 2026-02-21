"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";



export default function ContactPage() {
  return (
    <main className="bg-gray-50 text-gray-700 overflow-x-hidden">
      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[75vh] md:min-h-[90vh] pt-24 md:pt-0 w-full flex items-center justify-center text-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <Image
            src="/conatct-hero.jpg"
            alt="Contact HOORAB GROUP"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl px-6">
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[6px] text-blue-400 font-semibold"
          >
            Get in Touch
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mt-6 leading-tight"
          >
            Reach Out to HOORAB GROUP
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-300 mt-6 text-lg leading-relaxed"
          >
            Fill the form or contact our team for inquiries, support, or partnership opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 text-gray-300 text-sm flex items-center justify-center gap-2"
          >
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white font-semibold">Contact</span>
          </motion.div>
        </div>
      </section>

      {/* ================= FORM & INFO SIDE BY SIDE ================= */}
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white p-4 md:p-10 rounded-3xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-3 text-center">
              Send Us a Message
            </h2>
            <p className="text-center text-gray-500 mb-10">
              Our team is ready to assist you. Fill out the form and we will get back to you.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <Mail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-10 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-10 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="relative">
                <Phone className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-10 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
                />
              </div>

              <div className="relative">
                <MapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full pl-10 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
                />
              </div>

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-8">
            <div className="bg-gray-100 p-8 rounded-3xl shadow-lg space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="text-gray-500" size={28} />
                <div>
                  <p className="font-semibold">Saudi Arabia Office</p>
                  <p>123 Corporate St., Riyadh</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-gray-500" size={28} />
                <div>
                  <p className="font-semibold">+966 50 123 4567</p>
                  <p>Mon - Fri, 9:00am - 6:00pm</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-gray-500" size={28} />
                <div>
                  <p className="font-semibold"> info@hoorabgroup.com</p>
                  <p>We respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                title="HOORAB GROUP Saudi Arabia Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.123456789012!2d46.6750!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0123456789ab%3A0x1234567890abcdef!2sHOORAB%20GROUP%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                className="border-0 w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}