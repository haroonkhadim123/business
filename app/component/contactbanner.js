"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, User, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  /* ================= ANIMATION VARIANTS ================= */
  const [form, setform] = useState({name:'',email:'',phone:'',subject:'',message:''})

  const handlechange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

const handlesubmit = async (e) => {
  e.preventDefault();

  // Check before sending
  if(!form.name || !form.email || !form.phone || !form.subject || !form.message){
    toast.error("All fields are required");
    return;
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if(data.error){
      toast.error(data.message);
    } else {
      toast.success(data.message);
      setform({ name:"", email:"", phone:"", subject:"", message:"" }); // reset form
    }
  } catch (error) {
    toast.error("Something went wrong while sending your message");
  }
};
  const sectionFade = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9 },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9 },
    },
  };

  return (
    <main className="bg-gray-50 text-gray-700 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] md:min-h-[90vh] pt-24 md:pt-0 w-full flex items-center justify-center text-center overflow-hidden">

        {/* Background Zoom */}
        <motion.div
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/conatct-hero.jpg"
            alt="Contact HOORAB GROUP"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl px-6"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[6px] text-blue-400 font-semibold"
          >
            Get in Touch
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-white mt-6 leading-tight"
          >
            Reach Out to HOORAB GROUP
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 mt-6 text-lg leading-relaxed"
          >
            Fill the form or contact our team for inquiries, support, or partnership opportunities.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 text-gray-300 text-sm flex items-center justify-center gap-2"
          >
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Contact</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= FORM & INFO ================= */}
      <motion.section
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-4 md:px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* ================= FORM ================= */}
          <motion.div
            variants={slideLeft}
            whileHover={{ y: -6 }}
            className="bg-white p-4 md:p-10 rounded-3xl shadow-xl"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-gray-700 mb-3 text-center"
            >
              Send Us a Message
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-center text-gray-500 mb-10"
            >
              Our team is ready to assist you. Fill out the form and we will get back to you.
            </motion.p>

            <motion.form
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
              onSubmit={handlesubmit}
            >
              <div className="grid md:grid-cols-2 gap-6">

                <motion.div variants={fadeUp} className="relative">
                  <User className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-10 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    onChange={handlechange}
                    name="name"
                    value={form.name}
                  />
                </motion.div>

                <motion.div variants={fadeUp} className="relative">
                  <Mail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-10 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        onChange={handlechange}
                                        name="email"
                                        value={form.email}
                  />
                </motion.div>

              </div>

              <motion.div variants={fadeUp} className="relative">
                <Phone className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-10 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                      onChange={handlechange}
                                      name='phone'
                                      value={form.phone}
                  
                />
              </motion.div>

              <motion.div variants={fadeUp} className="relative">
                <FileText className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full pl-10 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                      onChange={handlechange}
                                      name="subject"
                                      value={form.subject}
                />
              </motion.div>

              <motion.textarea
                variants={fadeUp}
                placeholder="Your Message"
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    onChange={handlechange}
                                    name='message'
                                    value={form.message}
              />

              <motion.button
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>

          {/* ================= INFO ================= */}
          <motion.div variants={slideRight} className="space-y-8">

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-gray-100 p-8 rounded-3xl shadow-xl space-y-6"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <MapPin className="text-gray-500" size={28} />
                <div>
                  <p className="font-semibold">Saudi Arabia Office</p>
                  <p>123 Corporate St., Riyadh</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <Phone className="text-gray-500" size={28} />
                <div>
                  <p className="font-semibold">+966 50 123 4567</p>
                  <p>Mon - Fri, 9:00am - 6:00pm</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <Mail className="text-gray-500" size={28} />
                <div>
                  <p className="font-semibold">info@hoorabgroup.com</p>
                  <p>We respond within 24 hours</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl overflow-hidden shadow-xl h-[400px]"
            >
              <iframe
                title="HOORAB GROUP Saudi Arabia Office"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.898897865973!2d46.67529531500002!3d24.71355128408843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0385b97b9df1%3A0xf2e1b64d6f839fa1!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1697441234567!5m2!1sen!2sus"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </motion.div>

          </motion.div>
        </div>
      </motion.section>

    </main>
  );
}