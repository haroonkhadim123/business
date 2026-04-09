"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, User, Mail } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Loader from "./Loader";

export default function ContactPage() {
  const [form, setform] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [error, seterror] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loader, setloader] = useState(false);

  const handlechange = (e) => setform({ ...form, [e.target.name]: e.target.value });

  const handlesubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!form.name.trim()) newErrors.name = "Name is required.";
    else if (!nameRegex.test(form.name)) newErrors.name = "Please enter a valid name (letters only)";
    else if (form.name.trim().length < 3) newErrors.name = "Name must be at least 3 characters long.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(form.email.trim())) newErrors.email = "Email must end with .com";

    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test("+" + form.phone)) newErrors.phone = "Please enter a valid phone number with country code.";

    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    else if (form.subject.trim().length < 5) newErrors.subject = "Subject must be at least 5 characters long.";

    if (!form.message.trim()) newErrors.message = "Message is required.";
    else if (form.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters long.";

    seterror(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setloader(true);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await response.json();
      if (data.error) toast.error(data.message);
      else {
        toast.success(data.message);
        setform({ name: '', email: '', phone: '', subject: '', message: '' });
        seterror({});
      }
    } catch {
      toast.error("Something went wrong while sending your message");
    } finally {
      setloader(false);
    }
  };

  const sectionFade = { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } };
  const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const slideLeft = { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9 } } };
  const slideRight = { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9 } } };

  return (
    <main className="bg-gray-50 overflow-x-hidden">

      {/* ================= HERO ================= */}
   <section className="relative min-h-[75vh] md:min-h-[90vh] pt-24 md:pt-0 w-full flex items-center justify-center text-center overflow-hidden">
  {/* Background Image with smooth zoom */}
  <motion.div
    initial={{ scale: 1.2 }}
    animate={{ scale: 1 }}
    transition={{ duration: 2 }}
    className="absolute inset-0"
  >
    <Image
      src="/conatct-hero.jpg"
      alt="Contact HOORAB GROUP"
      fill
      priority
      className="object-cover brightness-90"
    />
  </motion.div>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Brand gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#00e6ff]/15 to-[#139aff]/20" />

  {/* Content */}
  <motion.div
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
    className="relative z-10 max-w-4xl px-6"
  >
    {/* Subtitle */}
    <motion.p
      variants={fadeUp}
       className="uppercase tracking-[6px] font-semibold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent"
    >
      Get in Touch
    </motion.p>

    {/* Main heading */}
    <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mt-6 leading-tight text-white"
        >
          Reach Out to <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">HOORAB GROUP</span>
        </motion.h1>

    {/* Description */}
    <motion.p
      variants={fadeUp}
      className="text-gray-200 mt-6 text-lg md:text-xl leading-relaxed"
    >
      Fill the form or contact our team for inquiries, support, or partnership opportunities.
    </motion.p>

    {/* Breadcrumb */}
    <motion.div
      variants={fadeUp}
      className="mt-6 text-gray-300 text-sm flex items-center justify-center gap-2"
    >
      <Link href="/" className="hover:text-white transition">
        Home
      </Link>
      <span>/</span>
      <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent font-semibold">
        Contact
      </span>
    </motion.div>
  </motion.div>
</section>

      {/* ================= FORM & INFO ================= */}
  <motion.section variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-24 px-4 md:px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

    {/* ================= FORM ================= */}
    <motion.div variants={slideLeft} whileHover={{ y: -6 }} className="bg-white p-4 md:p-10 rounded-3xl shadow-xl">
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl text-black font-bold mb-3 text-center"
      >
        Send Us a <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">Message</span>
      </motion.h2>
      <motion.p variants={fadeUp} className="text-center text-gray-500 mb-10">
        Our team is ready to assist you. Fill out the form and we will get back to you.
      </motion.p>

      {/* Partner Link */}
      <motion.div variants={fadeUp} className="text-center mb-8">
        <Link 
          href="/partner" 
          className="inline-flex items-center gap-2 text-sm text-[#139aff] hover:text-[#00e6ff] transition-colors duration-300 group"
        >
          <span className="font-medium">Interested in becoming a partner?</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>

      <motion.form variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6 max-w-3xl mx-auto" onSubmit={handlesubmit}>

        {/* Name & Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div variants={fadeUp} className="relative">
            <User className="absolute top-4 left-3 text-[#139aff]" />
            <input type="text" placeholder="Full Name" name="name" value={form.name} onChange={handlechange} 
              className="w-full pl-10 p-4 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-[#00e6ff] focus:outline-none transition"
            />
            {error?.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <Mail className="absolute top-4 left-3 text-[#139aff]" />
            <input type="email" placeholder="Email Address" name="email" value={form.email} onChange={handlechange} 
              className="w-full pl-10 p-4 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-[#00e6ff] focus:outline-none transition"
            />
            {error?.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
          </motion.div>
        </div>

        {/* Phone */}
        <motion.div variants={fadeUp} className="relative">
          <PhoneInput
            country={"gb"} 
            value={form.phone}
            onChange={(phone) => setform({ ...form, phone })}
            containerClass="w-full"
            inputClass="!w-full !pl-14 !p-6 !bg-white !text-gray-900 !border !border-gray-300 !rounded-xl focus:!ring-2 focus:!ring-[#00e6ff] !outline-none"
            buttonClass="!border-none !bg-transparent"
          />
          {error?.phone && <p className="text-red-500 text-sm mt-1">{error.phone}</p>}
        </motion.div>

        {/* Subject */}
        <motion.div variants={fadeUp} className="relative">
          <FileText className="absolute top-4 left-3 text-[#139aff]" />
          <input type="text" placeholder="Subject" name="subject" value={form.subject} onChange={handlechange} 
            className="w-full pl-10 p-4 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-[#00e6ff] focus:outline-none transition"
          />
          {error?.subject && <p className="text-red-500 text-sm mt-1">{error.subject}</p>}
        </motion.div>

        {/* Message */}
        <motion.div variants={fadeUp}>
          <textarea placeholder="Your Message" rows={5} name="message" value={form.message} onChange={handlechange} 
            className="w-full p-4 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-[#00e6ff] focus:outline-none transition"
          />
          {error?.message && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </motion.div>

        {/* Submit */}
        <motion.button variants={fadeUp} whileHover={{ scale: loader ? 1 : 1.05 }} whileTap={{ scale: loader ? 1 : 0.95 }} disabled={loader} type="submit"
          className={`w-full text-white py-3 rounded-full font-semibold ${loader ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-[#00e6ff] to-[#139aff] hover:from-[#139aff] hover:to-[#00e6ff]"}`}
        >
          {loader ? <Loader /> : "Send Message"}
        </motion.button>
      </motion.form>
    </motion.div>

    {/* ================= INFO ================= */}
    <motion.div variants={slideRight} className="space-y-8">
      {/* Map */}
      <motion.div variants={fadeUp} whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden shadow-xl h-[300px] border-2 border-gradient-to-r from-[#00e6ff] to-[#139aff]">
        <iframe
          className="w-full h-full border-0"
          src="https://www.google.com/maps?q=London,United+Kingdom&output=embed"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Business Hours */}
      <motion.div 
        variants={fadeUp} 
        whileHover={{ y: -5 }}
        className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 border border-gray-100"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-gradient-to-r from-[#00e6ff]/10 to-[#139aff]/10">
            <svg className="w-6 h-6 text-[#139aff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
        </div>

        <div className="space-y-3">
          {/* Weekdays */}
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 font-medium">Monday - Friday</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-900 font-semibold">9:00 AM</span>
              <span className="text-gray-400">-</span>
              <span className="text-gray-900 font-semibold">6:00 PM</span>
            </div>
          </div>

          {/* Saturday */}
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 font-medium">Saturday</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-900 font-semibold">10:00 AM</span>
              <span className="text-gray-400">-</span>
              <span className="text-gray-900 font-semibold">4:00 PM</span>
            </div>
          </div>

          {/* Sunday */}
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 font-medium">Sunday</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-semibold">Closed</span>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Currently Open</span>
            </div>
            <div className="text-xs text-gray-400">
              Timezone: GMT/BST
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Contact Info */}
      <motion.div 
        variants={fadeUp}
        className="bg-gradient-to-r from-[#00e6ff]/5 to-[#139aff]/5 rounded-xl p-4 text-center"
      >
        <p className="text-sm text-gray-600">
          Need immediate assistance? Call us at{' '}
          <a href="tel:+440000000000" className="text-[#139aff] font-semibold hover:text-[#00e6ff] transition">
            +44 (0) 000 000 000
          </a>
        </p>
      </motion.div>
    </motion.div>
  </div>
</motion.section>
    </main>
  );
}