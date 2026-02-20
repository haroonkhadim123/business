"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const jobs = [
  {
    title: "Senior Business Consultant",
    location: "Karachi, Pakistan",
    type: "Full Time",
    description:
      "We are looking for an experienced consultant to provide strategic guidance, improve operational efficiency, and drive sustainable growth for our clients.",
  },
  {
    title: "Marketing Manager",
    location: "Lahore, Pakistan",
    type: "Full Time",
    description:
      "Lead marketing campaigns, manage branding strategies, and coordinate with cross-functional teams to increase market visibility.",
  },
  {
    title: "Financial Analyst",
    location: "Remote",
    type: "Contract",
    description:
      "Analyze financial data, prepare reports, and assist leadership in data-driven decision-making processes.",
  },
];

export default function OpenPositions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="open-positions" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900"
        >
          Open Positions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-4 text-center max-w-2xl mx-auto"
        >
          Explore exciting career opportunities and join our dynamic team.
        </motion.p>

        {/* Accordion */}
        <div className="mt-16 space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
            >
              {/* Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {job.location} • {job.type}
                  </p>
                </div>

                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-700"
                >
                  <ChevronDown />
                </motion.div>
              </button>

              {/* Content */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6 text-gray-600 text-sm leading-relaxed"
                  >
                    <p>{job.description}</p>

                    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white transition px-6 py-2 rounded-full text-sm font-semibold">
                      Apply Now
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}