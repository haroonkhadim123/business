"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { 
  Shield, Lightbulb, Users, HeartHandshake, Award, Scale 
} from "lucide-react";
import StatsSection from "../component/stat";
import Aboutbanner from "../component/aboutbanner";
import CallToAction from "../component/work";
import { Target, Eye } from "lucide-react";
import ServicesSection from "../component/service";
import WhyChooseUs from "../component/choose";
import LeadershipSection from "../component/leaders";


export default function AboutPage() {
  const teamMembers = [
    {
      name: "Qandeel Faryad",
      role: "Chief Executive Officer",
      img: "/team-qandeel.jpg", // Replace with actual path or URL
    },
    {
      name: "Ali Khan",
      role: "Finance Director",
      img: "/team-ali.jpg",
    },
    {
      name: "Sara Ahmed",
      role: "Operations Manager",
      img: "/team-sara.jpg",
    },
  ];

  const coreValues = [
    { title: "Integrity", icon: Shield },
    { title: "Innovation", icon: Lightbulb },
    { title: "Collaboration", icon: Users },
    { title: "Client Commitment", icon: HeartHandshake },
    { title: "Excellence", icon: Award },
    { title: "Transparency", icon: Scale },
  ];

  return (
    <>
      <Aboutbanner />

      <main className="bg-[#0B1120] text-white overflow-hidden">

        {/* ================= COMPANY INTRO ================= */}
 <section className="py-24 md:py-32 bg-white text-gray-900">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
    
    {/* Image */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500"
    >
      <Image
        src="/about-company.jpg"
        alt="HOORAB GROUP retail and wholesale solutions"
        width={600}
        height={500}
        className="object-cover w-full h-[520px]"
        priority
              sizes="100vw"
              quality={75} 
      />
    </motion.div>

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-white p-8 md:p-12 rounded-3xl shadow-lg"
    >
      {/* Subtitle */}
      <p className="uppercase tracking-widest font-semibold text-sm text-[#00e6ff] mb-3">
        About Our Company
      </p>

      {/* Heading with gradient */}
      <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight text-gray-900">
        HOORAB GROUP{' '}
        <span className="text-[#00e6ff]">Growing Business</span>
      </h2>

      {/* Paragraphs */}
      <p className="text-gray-700 mt-8 leading-relaxed text-lg">
        HOORAB GROUP is a growing business company focused on providing reliable <span className="font-semibold text-[#139aff]">retail, wholesale, sourcing, and distribution solutions</span> across diverse markets. We work with a strong commitment to quality, professionalism, and long-term business relationships.
      </p>

      <p className="text-gray-700 mt-6 leading-relaxed text-lg">
        Our goal is to connect businesses with dependable products, efficient supply solutions, and trusted commercial support that helps them grow with confidence in competitive markets.
      </p>

      {/* Decorative line */}
      <div className="mt-8 w-24 h-1 rounded-full bg-gradient-to-r from-[#00e6ff] to-[#139aff]"></div>
    </motion.div>
  </div>
</section>
<ServicesSection/>

      {/* ================= MISSION & VISION ================= */}
  <section className="py-24 bg-[#0B1120]">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
    {[
      {
        title: "Our Mission",
        desc: "To provide reliable retail and wholesale solutions that support business growth through quality products, dependable service, and strong commercial relationships.",
        icon: Target,
      },
      {
        title: "Our Vision",
        desc: "To become a trusted name in retail, wholesale, sourcing, and distribution by building long-term partnerships and delivering excellence across every area of our business.",
        icon: Eye,
      },
    ].map((item, i) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.3 }}
          viewport={{ once: true }}
          className="relative bg-[#111827] p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-[1.04] transition-all duration-300 group border border-transparent hover:border-gradient-to-r"
          style={{
            borderImageSlice: 1,
            borderImageSource: "linear-gradient(to right, #00e6ff, #139aff)",
          }}
        >
          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#00e6ff]/20 to-[#139aff]/20 mb-6 group-hover:from-[#00e6ff] group-hover:to-[#139aff] transition-all duration-500">
            <Icon className="w-8 h-8 text-[#00e6ff] group-hover:text-white transition-all duration-500" />
          </div>

          {/* Title */}
          <h3 className="text-3xl font-bold mb-4 leading-snug text-gray-100 group-hover:bg-gradient-to-r group-hover:from-[#00e6ff] group-hover:to-[#139aff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-lg">
            {item.desc}
          </p>
        </motion.div>
      );
    })}
  </div>
</section>

      {/* ================= CORE VALUES ================= */}
    <section className="py-24 bg-white text-gray-900">
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* Section Heading with Brand Gradient */}
<h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight text-gray-900">
  Our Core <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">Values</span>
</h2>

    <div className="grid md:grid-cols-3 gap-8">
      {coreValues.map((value, i) => {
        const Icon = value.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col items-center border border-transparent"
            style={{
              borderImageSlice: 1,
              borderImageSource: "linear-gradient(to right, #00e6ff, #139aff)",
            }}
          >
            {/* Icon with Brand Gradient on Hover */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-gradient-to-r from-[#00e6ff]/20 to-[#139aff]/20 group hover:from-[#00e6ff] hover:to-[#139aff] transition-all duration-500">
              <Icon className="w-12 h-12 text-[#00e6ff] group-hover:text-white transition-all duration-500" />
            </div>

            {/* Title with Brand Gradient on Hover */}
            <h3 className="text-xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#00e6ff] group-hover:to-[#139aff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
              {value.title}
            </h3>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


      {/* ================= TIMELINE ================= */}
      <section className="py-24 bg-[#0B1120]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
            Our Journey
          </h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:left-1/2 before:w-1 before:bg-[#00e6ff]/30 before:-translate-x-1/2 max-md:before:hidden">
            {[
              { year: "2024", text: "Company Founded" },
              { year: "2024", text: "Expanded to National Operations" },
              { year: "2025", text: "Reached 10000+ Corporate Clients" },
              { year: "2026", text: "Awarded Business Excellence Recognition" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${
                  i % 2 === 0 ? "justify-end" : "justify-start"
                } max-md:justify-center max-md:flex-col relative`}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00e6ff] to-[#139aff] text-transparent bg-clip-text px-6 py-3 rounded-full shadow-lg z-10">
                  {item.year}
                </div>
                <div className="text-gray-300 text-lg max-w-md max-md:text-center">
                  {item.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs/>

      {/* ================= TEAM SECTION ================= */}
      <LeadershipSection/>
        {/* ================= STATS & CTA ================= */}
        <StatsSection />
        <CallToAction />

      </main>
    </>
  );
}