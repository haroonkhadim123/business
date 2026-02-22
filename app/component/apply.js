"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, Briefcase, FileText, Upload } from "lucide-react";
import Link from "next/link";

export default function ApplyPage() {

  /* ================= ANIMATION VARIANTS ================= */

  const pageFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      variants={pageFade}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gray-50 py-20 px-4 md:px-6 overflow-hidden"
    >

      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mt-5 mx-auto mb-10"
      >
        <Link
          href="/career"
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          ← Back to Careers
        </Link>
      </motion.div>

      {/* Main Card */}
      <motion.div
        variants={cardAnimation}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto bg-white p-4 md:p-10 rounded-3xl shadow-xl"
      >

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900"
        >
          Apply Now
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-gray-600 mt-3 mb-10"
        >
          Fill in your details and submit your application.
        </motion.p>

        {/* Form */}
        <motion.form
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >

          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">

            <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="relative">
              <User className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="relative">
              <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </motion.div>

          </div>

          {/* Phone */}
          <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="relative">
            <Phone className="absolute left-4 top-4 text-gray-400" size={18} />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </motion.div>

          {/* Position */}
          <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="relative">
            <Briefcase className="absolute left-4 top-4 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Position Applying For"
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="relative">
            <FileText className="absolute left-4 top-4 text-gray-400" size={18} />
            <textarea
              placeholder="Cover Letter / Message"
              rows={4}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </motion.div>

          {/* Upload */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="border border-dashed border-gray-300 rounded-xl p-6 text-center transition"
          >
            <Upload className="mx-auto text-gray-400 mb-2" size={28} />
            <p className="text-sm text-gray-500 mb-2">
              Upload your Resume (PDF, DOC)
            </p>
            <input type="file" className="w-full text-gray-700" />
          </motion.div>

          {/* Submit */}
          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold shadow-md"
          >
            Submit Application
          </motion.button>

        </motion.form>
      </motion.div>
    </motion.section>
  );
}