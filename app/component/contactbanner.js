"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, User, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Loader from "./Loader";

export default function ContactPage() {
  const [form, setform] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [error, seterror] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loader, setloader] = useState(false);

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

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
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-100 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] md:min-h-[90vh] pt-24 md:pt-0 w-full flex items-center justify-center text-center overflow-hidden">
        <motion.div initial={{ scale: 1.3 }} animate={{ scale: 1 }} transition={{ duration: 2.5, ease: "easeOut" }} className="absolute inset-0">
          <Image src="/conatct-hero.jpg" alt="Contact HOORAB GROUP" fill priority className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-4xl px-6">
          <motion.p variants={fadeUp} className="uppercase tracking-[6px] text-blue-400 font-semibold">Get in Touch</motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mt-6 leading-tight">Reach Out to HOORAB GROUP</motion.h1>
          <motion.p variants={fadeUp} className="text-gray-300 mt-6 text-lg leading-relaxed">
            Fill the form or contact our team for inquiries, support, or partnership opportunities.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 text-gray-300 text-sm flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white font-semibold">Contact</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= FORM & INFO ================= */}
      <motion.section variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* ================= FORM ================= */}
          <motion.div variants={slideLeft} whileHover={{ y: -6 }} className="bg-white dark:bg-gray-800 p-4 md:p-10 rounded-3xl shadow-xl">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-white mb-3 text-center">Send Us a Message</motion.h2>
            <motion.p variants={fadeUp} className="text-center text-gray-500 dark:text-gray-300 mb-10">
              Our team is ready to assist you. Fill out the form and we will get back to you.
            </motion.p>

            <motion.form variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6 max-w-3xl mx-auto" onSubmit={handlesubmit}>

              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp} className="relative">
                  <User className="absolute top-4 left-3 text-gray-400 dark:text-gray-300" />
                  <input type="text" placeholder="Full Name" name="name" value={form.name} onChange={handlechange} autoComplete="off"
                    className="w-full pl-10 p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  />
                  {error?.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
                </motion.div>

                <motion.div variants={fadeUp} className="relative">
                  <Mail className="absolute top-4 left-3 text-gray-400 dark:text-gray-300" />
                  <input type="email" placeholder="Email Address" name="email" value={form.email} onChange={handlechange} autoComplete="off"
                    className="w-full pl-10 p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  />
                  {error?.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
                </motion.div>
              </div>

              {/* Phone */}
              <motion.div variants={fadeUp} className="relative">
                <PhoneInput
                  country={"pk"} value={form.phone} onChange={(phone) => setform({ ...form, phone })}
                  containerClass="w-full"
                  inputClass="!w-full !pl-14 !p-6 !bg-white dark:!bg-gray-900 !text-gray-900 dark:!text-white !border !border-gray-300 dark:!border-gray-700 !rounded-xl focus:!ring-2 focus:!ring-blue-500 !outline-none"
                  buttonClass="!border-none !bg-transparent"
                />
                {error?.phone && <p className="text-red-500 text-sm mt-1">{error.phone}</p>}
              </motion.div>

              {/* Subject */}
              <motion.div variants={fadeUp} className="relative">
                <FileText className="absolute top-4 left-3 text-gray-400 dark:text-gray-300" />
                <input type="text" placeholder="Subject" name="subject" value={form.subject} onChange={handlechange} autoComplete="off"
                  className="w-full pl-10 p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
                {error?.subject && <p className="text-red-500 text-sm mt-1">{error.subject}</p>}
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp}>
                <textarea placeholder="Your Message" rows={5} name="message" value={form.message} onChange={handlechange} autoComplete="off"
                  className="w-full p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
                {error?.message && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
              </motion.div>

              {/* Submit */}
              <motion.button variants={fadeUp} whileHover={{ scale: loader ? 1 : 1.05 }} whileTap={{ scale: loader ? 1 : 0.95 }} disabled={loader} type="submit"
                className={`w-full text-white py-3 rounded-full font-semibold ${loader ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
              >
                {loader ? <Loader /> : "Send Message"}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* ================= INFO ================= */}
          <motion.div variants={slideRight} className="space-y-8">
            <motion.div whileHover={{ y: -6 }} className="bg-gray-100 dark:bg-gray-800 p-8 rounded-3xl shadow-xl space-y-6">
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <MapPin className="text-gray-500 dark:text-gray-300" size={28} />
                <div>
                  <p className="font-semibold">Saudi Arabia Office</p>
                  <p>123 Corporate St., Riyadh</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <Phone className="text-gray-500 dark:text-gray-300" size={28} />
                <div>
                  <p className="font-semibold">+966 50 123 4567</p>
                  <p>Mon - Fri, 9:00am - 6:00pm</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <Mail className="text-gray-500 dark:text-gray-300" size={28} />
                <div>
                  <p className="font-semibold">info@hoorabgroup.com</p>
                  <p>We respond within 24 hours</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden shadow-xl h-[400px]">
              <iframe title="HOORAB GROUP Saudi Arabia Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.898897865973!2d46.67529531500002!3d24.71355128408843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0385b97b9df1%3A0xf2e1b64d6f839fa1!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1697441234567!5m2!1sen!2sus"
                className="w-full h-full border-0" loading="lazy"
              ></iframe>
            </motion.div>

          </motion.div>
        </div>
      </motion.section>

    </main>
  );
}