"use client";

import { motion } from "framer-motion";
import { Users, Headphones, ArrowRight } from "lucide-react"; // icons ke liye

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function BusinessConsultancy() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text & Features */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-10"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
              >
                JUST A CONSULTANCY
                <br />
                <span className="text-gray-900">Business Goal</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-700 font-medium"
              >
                We know how to manage business globally
              </motion.p>

              {/* Features */}
              <div className="space-y-8">
                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Users className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Best Business Consulting</h3>
                    <p className="text-gray-600 mt-1">
                      Fusce condimentum mattis placerat odio donec lacus porta torquent, mauris gravida rutrum
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Headphones className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">24/7 Customer Support</h3>
                    <p className="text-gray-600 mt-1">
                      Fusce condimentum mattis placerat odio donec lacus porta torquent, mauris gravida rutrum
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Buttons */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 mt-10">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition flex items-center gap-2 shadow-lg">
                  Contact Us <ArrowRight className="w-5 h-5" />
                </button>
             
              </motion.div>
            </motion.div>

            {/* Right - Images (overlapping) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Background blurred shape or gradient optional */}
                <div className="absolute -inset-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30" />

                {/* Overlapping images */}
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team discussion"
                  className="rounded-2xl shadow-2xl object-cover w-full h-[500px] relative z-10"
                />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Team meeting"
                  className="rounded-2xl shadow-2xl object-cover w-3/5 absolute -bottom-10 -right-10 z-20 border-8 border-white"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add more sections below as needed (services, testimonials, etc.) */}
    </main>
  );
}