"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "collect",
      title: "Information We Collect",
      content:
        "We collect personal and business-related information including your name, email, phone number, and any data submitted through our forms or services.",
    },
    {
      id: "use",
      title: "How We Use Information",
      content:
        "Your data is used to operate, improve, and personalize our services, communicate with you, and ensure a seamless business experience.",
    },
    {
      id: "security",
      title: "Data Security",
      content:
        "We implement enterprise-level security practices to protect your information against unauthorized access, alteration, or disclosure.",
    },
    {
      id: "sharing",
      title: "Information Sharing",
      content:
        "We do not sell your data. Information may only be shared with trusted partners or when required by law.",
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      content:
        "We use cookies and analytics tools to improve performance, understand user behavior, and enhance experience.",
    },
    {
      id: "rights",
      title: "Your Rights",
      content:
        "You have full control over your data, including access, correction, and deletion rights in accordance with applicable laws.",
    },
    {
      id: "updates",
      title: "Policy Updates",
      content:
        "We may update this policy periodically. Continued use of our services implies acceptance of changes.",
    },
    {
      id: "contact",
      title: "Contact",
      content:
        "For any privacy-related inquiries, please contact our official support channels.",
    },
  ];

  return (
    <div className="relative mt-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00e6ff]/20 blur-[120px] rounded-full" />

      {/* 🔥 Hero */}
      <div className="relative py-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent"
        >
          Privacy Policy
        </motion.h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          We are committed to protecting your privacy and ensuring transparency
          in how your data is handled across our platform.
        </p>
      </div>

      {/* 🔥 Main Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-20 grid md:grid-cols-4 gap-10">
        
        {/* 🧭 Sidebar */}
        <div className="hidden md:block md:col-span-1 sticky top-24 h-fit">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl p-4 space-y-3">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-[#00e6ff] transition"
              >
                {sec.title}
              </a>
            ))}
          </div>
        </div>

        {/* 📄 Content */}
        <div className="md:col-span-3 space-y-10">
          {sections.map((sec, i) => (
            <motion.div
              id={sec.id}
              key={sec.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-6 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
                {sec.title}
              </h2>

              <div className="mt-3 h-1 w-20 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-full" />

              <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                {sec.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 Footer */}
   
    </div>
  );
}