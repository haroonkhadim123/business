"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import ThreeDotLoader from "./threedotloader";

export default function OpenPositions() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [jobs, setjobs] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ added

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/job", { cache: "no-store" });
        const data = await res.json();

        if (res.ok) {
          setjobs(data.jobitem);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // ✅ stop loader
      }
    };

    fetchJobs();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const capitalize = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
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

        {/* ✅ Loader Condition */}
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[250px] gap-4">
            <ThreeDotLoader />
            <p className="text-gray-500 text-sm">Loading positions...</p>
          </div>
        ) : jobs.length === 0 ? (
          <p className="text-center text-gray-500 mt-16">
            No positions available
          </p>
        ) : (
          <div className="mt-16 space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job._id}
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
                      {capitalize(job.jobtitle)}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {capitalize(job.joblocation)} •{" "}
                      {capitalize(job.jobtype)}
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
                      <p className="mb-3">{job.jobdescription}</p>

                      <p className="text-sm font-medium mb-3">
                        Job:{" "}
                        <span
                          className={`font-semibold ${
                            job.status?.toLowerCase() === "closed"
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {job.status}
                        </span>
                      </p>

                      <Link
                        href={job.status === "Closed" ? "#" : "/apply"}
                        className={`mt-6 inline-block px-6 py-2 rounded-full text-sm font-semibold transition
                        ${
                          job.status === "Closed"
                            ? "bg-gray-400 cursor-not-allowed pointer-events-none text-white"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                        }`}
                      >
                        Apply Now
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}