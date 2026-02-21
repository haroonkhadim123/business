"use client";

import { motion } from "framer-motion";
import { Users, Headphones, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
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
                <Link
                  href="/contact"
                  className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition flex items-center gap-2 shadow-lg"
                >
                  Contact Us <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Images (now responsive overlapping on all screens) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none aspect-[4/3] md:aspect-auto">
                {/* Optional background blur shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 scale-125" />

                {/* Main large image */}
                <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Team discussion"
                    fill
                    className="rounded-2xl shadow-2xl object-cover"
                    priority // optional: better LCP
                  />
                </div>

                {/* Smaller overlapping image - always absolute, responsive position */}
                <div className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-8 lg:-bottom-12 lg:-right-10 z-20 w-3/5 sm:w-2/5 lg:w-3/5 max-w-[220px] sm:max-w-[280px] lg:max-w-none aspect-[4/3] border-4 sm:border-6 lg:border-8 border-white rounded-2xl shadow-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Team meeting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}