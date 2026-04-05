"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Mail, ArrowRight, Home, Clock } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 py-16">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 text-center max-w-2xl w-full border border-gray-100"
      >
        
        {/* Icon with Gradient Background */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] p-5 rounded-full shadow-lg">
            <CheckCircle className="text-white w-12 h-12" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
        >
          Application{" "}
          <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
            Submitted!
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-500 text-sm uppercase tracking-wider mb-6"
        >
          Thank You for Your Interest
        </motion.p>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-4 mb-8"
        >
          <p className="text-gray-700 leading-relaxed">
            Your application has been successfully submitted to{" "}
            <span className="font-semibold text-[#139aff]">HOORAB GROUP</span>.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            Our team will carefully review your details and contact you within 
            <span className="font-semibold"> 3-5 business days</span> if your profile matches our requirements.
          </p>
        </motion.div>

        {/* What's Next Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-gray-50 rounded-2xl p-6 mb-8 text-left"
        >
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-[#00e6ff]" />
            <h3 className="font-semibold text-gray-900">What Happens Next?</h3>
          </div>
          
          <div className="space-y-3 text-gray-600 text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
              <span>Our team reviews your application details</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
              <span>We may contact you for additional information</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
              <span>Qualified applicants will be invited for discussions</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <Mail className="w-4 h-4" />
            <span>Need immediate assistance?</span>
          </div>
          <a
            href="mailto:info@hoorabgroup.com"
            className="text-[#139aff] font-semibold hover:underline transition"
          >
            info@hoorabgroup.com
          </a>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00e6ff] to-[#139aff] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Home className="w-5 h-5" />
            Back to Home
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-gray-400 text-xs mt-8"
        >
          © {new Date().getFullYear()} HOORAB GROUP. All rights reserved.
        </motion.p>
      </motion.div>
    </div>
  );
}