"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, FileText } from "lucide-react";

export default function AddJob() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-2xl md:mt-20  p-4 md:p-10 rounded-xl max-w-2xl mx-auto "
    >
      <h1 className="text-2xl font-semibold mb-8 text-gray-800">
        Add Job Position
      </h1>

      <form className="space-y-3">

        {/* Job Title */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600 pt-2">
            Job Title
          </label>
          <div className="relative">
            <Briefcase
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Enter job title (e.g. Senior Business Consultant)"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600 mt-2">
            Location
          </label>
          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Enter job location (e.g. Karachi, Pakistan)"
              className="w-full pl-10 pr-4 py-3 border rounded-xl border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Job Type */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600 mt-2">
            Job Type
          </label>
          <div className="relative">
            <Clock
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Enter job type (Full Time, Part Time, Remote)"
              className="w-full pl-10 pr-4 py-3 border rounded-xl border-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600 mt-2">
            Job Description
          </label>
          <div className="relative">
            <FileText
              size={18}
              className="absolute left-3 top-4 text-gray-400"
            />
            <textarea
              rows="5"
              placeholder="Enter job responsibilities, requirements, and expectations..."
              className="w-full pl-10 pr-4 py-3 border rounded-xl border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Publish Job
        </motion.button>

      </form>
    </motion.div>
  );
}