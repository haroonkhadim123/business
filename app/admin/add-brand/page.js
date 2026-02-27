"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tag, Globe, FileText, ImagePlus } from "lucide-react";

export default function AddBrand() {
  const [logo, setLogo] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-2xl p-6 md:p-10  rounded-lg max-w-3xl mx-auto"
    >
      <h1 className="text-2xl font-semibold mb-8 text-gray-800">
        Add New Brand
      </h1>

      <form className="space-y-7">

        {/* Brand Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Brand Name</label>
          <div className="relative">
            <Tag size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter brand name"
              className="w-full pl-10 pr-4 py-3 border rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Website URL */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600 mt-2">Website URL</label>
          <div className="relative">
            <Globe size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="url"
              placeholder="https://brand.com"
              className="w-full pl-10 pr-4 py-3 border rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600 mt-2">Description</label>
          <div className="relative">
            <FileText size={18} className="absolute left-3 top-4 text-gray-400" />
            <textarea
              rows="5"
              placeholder="Write short brand description..."
              className="w-full pl-10 pr-4 py-3 border rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
            />
          </div>
        </div>

 

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Publish Brand
        </motion.button>

      </form>
    </motion.div>
  );
}