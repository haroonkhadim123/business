"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, UserCheck, Calendar } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    desc: "Complete your online application with your resume and portfolio.",
  },
  {
    icon: UserCheck,
    title: "Initial Screening",
    desc: "Our HR team reviews applications and shortlists candidates.",
  },
  {
    icon: Calendar,
    title: "Interview Rounds",
    desc: "Participate in one or multiple interviews with our team.",
  },
  {
    icon: CheckCircle,
    title: "Offer & Onboarding",
    desc: "Receive your offer and start your journey with us.",
  },
];

export default function HiringProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Hiring Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-4"
          >
            Our recruitment process is simple, transparent, and designed 
            to find the best fit for both you and our team.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 flex flex-col gap-10">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 w-1 h-full bg-blue-200 rounded-full hidden md:block"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-16 h-16 bg-black/5 text-black rounded-full flex items-center justify-center md:mr-8 mb-4 md:mb-0">
                  <Icon size={28} />
                </div>

                {/* Content */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}