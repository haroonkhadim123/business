"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Mail, ArrowRight, Home, Clock, Users, FileCheck } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Success Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-[#00e6ff]/10 to-[#139aff]/10 p-8 md:p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-20 h-20 mx-auto bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-full flex items-center justify-center shadow-lg"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mt-6 text-gray-900"
            >
              Thank You for{" "}
              <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                Your Application
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-gray-600 mt-4 text-lg"
            >
              We appreciate your interest in partnering with HOORAB GROUP.
            </motion.p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            
            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-center"
            >
              <p className="text-gray-700 leading-relaxed text-lg">
                Your application has been successfully submitted and our team will review the details carefully. 
                If your profile matches our current business opportunities, we will contact you soon to discuss the next steps.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                We value strong partnerships built on trust, professionalism, and long-term success, 
                and we are pleased to consider your interest in working with us.
              </p>
            </motion.div>

            {/* What Happens Next */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                What Happens{" "}
                <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                  Next?
                </span>
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: "Review Process",
                    desc: "Our team will review your application",
                  },
                  {
                    icon: <FileCheck className="w-6 h-6" />,
                    title: "Evaluation",
                    desc: "We may contact you for further details",
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Discussion",
                    desc: "Qualified applicants will be invited for the next stage",
                  },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-[#00e6ff]/20 to-[#139aff]/20 rounded-xl flex items-center justify-center text-[#139aff] mb-3">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Need Assistance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="text-center border-t border-gray-200 pt-8"
            >
              <div className="flex items-center justify-center gap-3 text-gray-600 mb-6">
                <Mail className="w-5 h-5 text-[#00e6ff]" />
                <span>Need Immediate Assistance?</span>
              </div>
              
              <p className="text-gray-700">
                For any questions, please contact us at:
              </p>
              <a
                href="mailto:info@hoorabgroup.com"
                className="text-xl font-bold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent hover:opacity-80 transition"
              >
                info@hoorabgroup.com
              </a>
            </motion.div>

            {/* Back to Home Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="text-center pt-4"
            >
              <Link href="/">
                <button className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg">
                  <Home className="w-5 h-5" />
                  Back to Home
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>

          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          © {new Date().getFullYear()} HOORAB GROUP. All rights reserved.
        </motion.p>
      </div>
    </main>
  );
}