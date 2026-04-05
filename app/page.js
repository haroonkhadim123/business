"use client";


import Link from "next/link";
import Banner from "./component/Banner";
import Image from "next/image";
import { CheckCircle, Contact, Phone,Mail } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import ServicesSection from "./component/service";
import CallToAction from "./component/work";
import BusinessConsultancy from "./component/consultancy";
import StatsSection from "./component/stat";
import WhyChooseUs from "./component/choose";
import Testimonials from "./component/testimonial";
import ContactUs from "./component/contact";



export default function Home() {
  const count = useMotionValue(0);
const rounded = useTransform(count, (latest) => Math.floor(latest));

useEffect(() => {
  const controls = animate(count, 25, {
    duration: 2,
    ease: "easeOut",
  });

  return controls.stop;
}, []);


  return (
    <main className="bg-[#0B1120] text-white overflow-hidden">

      {/* ================= HERO ================= */}
     <Banner/>
  <section className="bg-[#f8fdff] py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
    {/* LEFT SIDE IMAGES */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Main Image */}
      <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#00e6ff]/10">
        <Image
          src="/image1.jpg"
          alt="Corporate Team"
          width={600}
          height={500}
          className="object-cover w-full h-[520px]"
        />
      </div>

      {/* Experience Card */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute top-10 -left-10 bg-gradient-to-br from-[#139aff] to-[#00e6ff] text-white p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-4xl font-bold">
          <motion.span>{rounded}</motion.span>+
        </h2>
        <p className="mt-2 text-white/90">Years of Excellence</p>
      </motion.div>

      {/* Small Floating Image */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute -bottom-12 right-10 bg-white p-3 rounded-2xl shadow-2xl ring-1 ring-[#139aff]/15"
      >
        <Image
          src="/about2.jpg"
          alt="Business Meeting"
          width={220}
          height={160}
          className="rounded-xl object-cover"
        />
      </motion.div>
    </motion.div>

   {/* RIGHT SIDE CONTENT */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <p className="uppercase tracking-widest text-[#139aff] font-semibold">
    Why Choose Us
  </p>

  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mt-4">
    Driving Growth Through{" "}
    <span className="text-[#139aff]">Retail & Wholesale Excellence</span>
  </h2>

  <p className="text-gray-600 mt-6 leading-relaxed">
    We are a trusted business company specializing in retail and wholesale solutions across diverse markets. Our focus is on delivering quality products, reliable supply, and strong business partnerships that help our clients grow and succeed in competitive industries.
  </p>

  <p className="text-gray-600 mt-4 leading-relaxed">
    With a commitment to professionalism, consistency, and customer satisfaction, we support businesses with efficient distribution, dependable service, and tailored commercial solutions designed for long-term success.
  </p>

  {/* Features List */}
  <div className="mt-8 space-y-4">
    {[
      "Trusted Retail & Wholesale Partner",
      "Reliable Product Supply & Distribution",
      "Professional Customer Support",
      "Strong Business Network & Market Reach",
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        viewport={{ once: true }}
        className="flex items-center gap-3"
      >
        <div className="w-3 h-3 bg-[#00e6ff] rounded-full shadow-sm"></div>
        <p className="text-gray-700">{item}</p>
      </motion.div>
    ))}
  </div>

  {/* Call Box */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
    viewport={{ once: true }}
    className="flex items-center gap-6 mt-10"
  >
    <div className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] p-5 rounded-xl text-white text-lg shadow-lg">
      <Mail />
    </div>

    <div>
      <p className="text-gray-500">Contact Our Business Desk</p>
      <h3 className="text-xl font-bold text-gray-900">
        info@hoorabgroup.com
      </h3>
    </div>
  </motion.div>
</motion.div>
  </div>
</section>
  
   

   

     <ServicesSection/>
     <CallToAction/>
     <BusinessConsultancy/>
     <StatsSection/>

      {/* ================= WHY CHOOSE US ================= */}
   <WhyChooseUs/>
<Testimonials/>
<ContactUs/>
    




   
    </main>
  );
}
