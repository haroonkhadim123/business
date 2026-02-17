"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Shield, Lightbulb, Users, HeartHandshake, Award, Scale 
} from "lucide-react";
import StatsSection from "../component/stat";
import Aboutbanner from "../component/aboutbanner";
import CallToAction from "../component/work";
import { Target, Eye } from "lucide-react";


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
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/about-company.jpg" // Or: "https://thumbs.dreamstime.com/b/happy-friendly-multiracial-team-laughing-working-together-corporate-briefing-business-gathered-table-cheerful-diverse-office-155751228.jpg"
                alt="Our team collaborating in a modern office"
                width={600}
                height={500}
                className="object-cover w-full h-[520px]"
                priority
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-widest text-gray-500 font-semibold text-sm">
                About Our Company
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
                Building Strong Corporate Foundations Since 2000
              </h2>

              <p className="text-gray-600 mt-8 leading-relaxed text-lg">
                We are a leading corporate consultancy firm helping businesses
                achieve sustainable growth, operational excellence, and
                long-term success. With over 25 years of experience,
                we deliver strategic planning, financial advisory, and
                innovative transformation solutions.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed text-lg">
                Our commitment is to empower organizations with clarity,
                efficiency, and a lasting competitive advantage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= MISSION & VISION ================= */}
    <section className="py-24 bg-[#0B1120]">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
    {[
      {
        title: "Our Mission",
        desc: "To deliver innovative and strategic business solutions that enable our clients to grow, compete, and lead in dynamic markets.",
        icon: Target,
      },
      {
        title: "Our Vision",
        desc: "To become a globally recognized consultancy firm known for integrity, excellence, and sustainable business transformation.",
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
          className="bg-[#111827] p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group"
        >
          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-600/20 mb-6 group-hover:bg-blue-600 transition">
            <Icon className="w-8 h-8 text-blue-500 group-hover:text-white transition" />
          </div>

          {/* Title */}
          <h3 className="text-3xl font-bold mb-6 text-white">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Our Core Values</h2>

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
                    className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300 flex flex-col items-center"
                  >
                    <Icon className="w-12 h-12 text-gray-600 mb-6" />
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= TIMELINE ================= */}
        <section className="py-24 bg-[#0B1120]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our Journey
            </h2>

            <div className="space-y-12 relative before:absolute before:inset-0 before:left-1/2 before:w-1 before:bg-blue-600/30 before:-translate-x-1/2 max-md:before:hidden">
              {[
                { year: "2000", text: "Company Founded" },
                { year: "2010", text: "Expanded to National Operations" },
                { year: "2018", text: "Reached 100+ Corporate Clients" },
                { year: "2024", text: "Awarded Business Excellence Recognition" },
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
                  <div className="text-4xl md:text-5xl font-bold text-blue-500 bg-[#0B1120] px-6 py-3 rounded-full shadow-lg z-10">
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

        {/* ================= TEAM SECTION ================= */}
        <section className="py-24 bg-white text-gray-900">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Meet Our Leadership</h2>

            <div className="grid md:grid-cols-3 gap-12">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
                    <Image
                      src={member.img}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-8 text-2xl font-bold">{member.name}</h3>
                  <p className="text-gray-600 mt-2 text-lg">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= STATS & CTA ================= */}
        <StatsSection />
        <CallToAction />

      </main>
    </>
  );
}