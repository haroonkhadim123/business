"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md w-full"
      >
        
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-4"
        >
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="text-green-600 w-10 h-10" />
          </div>
        </motion.div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Application Submitted 🎉
        </h1>

        {/* Text */}
        <p className="text-gray-600 mb-6">
          Your application has been successfully submitted. Our team will review it and get back to you soon.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </Link>
      </motion.div>
    </div>
  );
}