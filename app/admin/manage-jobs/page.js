"use client";

import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

export default function ManageJobs() {
  const jobs = [
    { id: 1, title: "Marketing Manager" },
    { id: 2, title: "Software Engineer" },
    // You can add more dummy data or fetch real jobs here
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ↑ This container limits max width on large screens */}

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">
        Manage Jobs
      </h1>

      <div className="space-y-4">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-200 flex items-center justify-between"
          >
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-medium text-gray-900 truncate">
                {job.title}
              </h3>
              {/* You can add more job details here later */}
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
            
              <button className="text-red-500 cursor-pointer hover:text-red-800 text-sm font-medium transition-colors">
                    <Trash2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {jobs.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No jobs found. Add your first job!
        </div>
      )}
    </div>
  );
}