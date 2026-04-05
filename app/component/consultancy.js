"use client";

import { motion } from "framer-motion";
import { Package, Truck, Globe, ArrowRight, Shield, Clock, Handshake } from "lucide-react";
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

export default function GlobalRetailWholesale() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT */}
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
                GLOBAL RETAIL &
                <br />
                <span className="text-[#139aff]">WHOLESALE SOLUTIONS</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-700 font-medium"
              >
                Driving Business Forward
              </motion.p>

              {/* Features */}
              <div className="space-y-8">
                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="p-3 bg-[#00e6ff]/20 rounded-lg">
                    <Package className="w-8 h-8 text-[#139aff]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Professional Supply Network</h3>
                    <p className="text-gray-600 mt-1">
                      We work with trusted supply channels to deliver quality products, dependable service, and efficient commercial support.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="p-3 bg-[#00e6ff]/20 rounded-lg">
                    <Truck className="w-8 h-8 text-[#139aff]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Retail & Wholesale Distribution</h3>
                    <p className="text-gray-600 mt-1">
                      Our solutions are designed to support retailers, resellers, and business partners with strong market access and reliable delivery.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="p-3 bg-[#00e6ff]/20 rounded-lg">
                    <Handshake className="w-8 h-8 text-[#139aff]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Long-Term Business Partnerships</h3>
                    <p className="text-gray-600 mt-1">
                      We believe in building lasting relationships through professionalism, consistency, and customer-focused service.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Button */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 mt-10">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition flex items-center gap-2 shadow-lg"
                >
                  Contact Us <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none aspect-[4/3] md:aspect-auto">
                
                {/* Brand Gradient Blur */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00e6ff] to-[#139aff] rounded-full blur-3xl opacity-20 scale-125" />

                {/* Main Image */}
                <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px]">
                  <Image
                    src={'/mainteam.jpg'}
                    alt="Global Retail & Wholesale Solutions"
                    fill
                    className="rounded-2xl shadow-2xl object-cover"
                    priority
                  />
                </div>

                {/* Small Image */}
                <div className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-8 lg:-bottom-12 lg:-right-10 z-20 w-3/5 sm:w-2/5 lg:w-3/5 max-w-[220px] sm:max-w-[280px] lg:max-w-none aspect-[4/3] border-4 sm:border-6 lg:border-8 border-white rounded-2xl shadow-2xl overflow-hidden">
                  <Image
                    src={'/smallteam.jpg'}
                    alt="Business partnership"
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