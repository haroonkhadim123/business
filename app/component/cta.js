"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Mail,  ArrowRight, Award, Users } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CareerCTA() {
    const [jobs, setJobs] = useState([]);
      const totalOpenPositions = jobs.length;

    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const res = await fetch("/api/job", { cache: "no-store" });
          const data = await res.json();
          if (res.ok) setJobs(data.jobitem || []);
        } catch (error) {
          toast.error("Failed to fetch jobs");
        } 
      };
      fetchJobs();
    }, []);
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Professional Light Gradient Background */}
      <div className="absolute inset-0 bg-blue-50"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #139aff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Brand Color Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#00e6ff]/10 to-[#139aff]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#139aff]/10 to-[#00e6ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#00e6ff]/5 to-[#139aff]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00e6ff]/10 to-[#139aff]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#00e6ff]/20 mb-6"
          >
            <Users className="w-4 h-4 text-[#139aff]" />
            <span className="text-sm text-gray-700 font-medium">Limited Opportunities Available</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-gray-900">Your Next Big </span>
            <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
              Career Move
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-2xl mx-auto mb-12"
          >
            Join a team that values innovation, growth, and excellence. 
            Your journey to success begins with a single step.
          </motion.p>
        </div>

        {/* Stats Cards */}
    <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
>
  {[
    { 
      number: totalOpenPositions, // Will come from backend
      label: "Open Positions", 
      icon: Briefcase, 
      description: "Across various departments" 
    },
    { 
      number: '1000+', // Will come from backend
      label: "Team Members", 
      icon: Users, 
      description: "And growing rapidly" 
    },
    { 
      number: '5+', // Will come from backend
      label: "Countries", 
      icon: Award, 
      description: "Global presence" 
    },
  ].map((stat, idx) => (
    <div
      key={idx}
      className="group relative bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-[#00e6ff]/30 transition-all duration-300 shadow-sm hover:shadow-xl"
    >
      {/* Card Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative">
        <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-[#00e6ff]/10 to-[#139aff]/10 mb-4 group-hover:scale-110 transition-transform">
          <stat.icon className="w-6 h-6 text-[#139aff]" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
        <p className="text-gray-800 font-semibold mb-1">{stat.label}</p>
        <p className="text-gray-500 text-sm">{stat.description}</p>
      </div>
    </div>
  ))}
</motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button
            onClick={() => {
              const section = document.getElementById("open-positions");
              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00e6ff] to-[#139aff]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#139aff] to-[#00e6ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Browse Open Positions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <Link
            href="/contact"
            className="group relative px-8 py-4 rounded-full font-semibold bg-white text-gray-700 border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-lg overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#00e6ff] to-[#139aff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2 z-10 group-hover:text-white">
              <Mail className="w-5 h-5" />
              Connect with HR
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

       
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-6">Trusted by industry leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { name: "Saudi Aramco", gradient: "from-gray-700 to-gray-900" },
              { name: "SABIC", gradient: "from-blue-600 to-blue-800" },
              { name: "STC", gradient: "from-purple-600 to-purple-800" },
              { name: "NEOM", gradient: "from-emerald-600 to-emerald-800" },
              { name: "KAUST", gradient: "from-amber-600 to-amber-800" }
            ].map((company, idx) => (
              <span 
                key={idx} 
                className="text-gray-500 text-sm font-medium hover:text-[#139aff] transition-colors duration-300 cursor-pointer"
              >
                {company.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 pt-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-gray-400">
            <span>© 2024 HOORAB GROUP</span>
            <span>•</span>
            <span>Equal Opportunity Employer</span>
          </div>
        </div>
      </div>
    </section>
  );
}