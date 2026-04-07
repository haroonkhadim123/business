"use client";

import { motion } from "framer-motion";
import { Tag, Globe, FileText, Plus, Building2 } from "lucide-react";
import { useState,useEffect } from "react";
import Loader from "@/app/component/Loader";
import toast from "react-hot-toast";

export default function AddBrand() {
  const [form, setform] = useState({ brandname: "", website: "", description: "" });
  const [loader, setloader] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.brandname.trim()) {
      newErrors.brandname = "Brand name is required";
    } else if (form.brandname.length < 2) {
      newErrors.brandname = "Brand name must be at least 2 characters";
    }

    const urlRegex = /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/;
    if (!form.website.trim()) {
      newErrors.website = "Website is required";
    } else if (!urlRegex.test(form.website)) {
      newErrors.website = "Enter a valid URL (e.g., https://example.com)";
    }

    if (!form.description.trim()) {
      newErrors.description = "Description is required";
    } else if (form.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setloader(true);

    try {
      const response = await fetch("/api/brand", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.error) toast.error(data.message);
      else {
        toast.success("Brand added successfully!");
        setform({ brandname: "", website: "", description: "" });
        setErrors({});
      }
    } catch (error) {
      toast.error("Something went wrong while adding new brand");
    } finally {
      setloader(false);
    }
  };
  useEffect(() => {
  const stored = localStorage.getItem("editBrand");

  if (stored) {
    const data = JSON.parse(stored);

    setform({
      brandname: data.brandname || "",
      website: data.website || "",
      description: data.description || "",
    });

    // clear after use
    localStorage.removeItem("editBrand");
  }
}, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 md:py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="max-w-3xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
          >
            <Building2 className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
            Add New Brand
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Add a new brand to your portfolio
          </p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative"
        >
          {/* Gradient Border Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-2xl blur opacity-30"></div>
          
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-10">
            
            <form onSubmit={handlesubmit} className="space-y-6">

              {/* Brand Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Tag size={16} className="text-[#139aff]" />
                  Brand Name
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    onChange={handlechange}
                    name="brandname"
                    value={form.brandname}
                    placeholder="e.g., ZYLLIC,HDDS,HOORAB"
                    className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200
                      bg-gray-50 dark:bg-gray-700 dark:text-gray-200 text-gray-600
                      focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                      placeholder:text-gray-400 dark:placeholder:text-gray-500
                      ${errors.brandname 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                      }`}
                  />
                </div>
                {errors.brandname && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <span className="text-xs">⚠️</span> {errors.brandname}
                  </p>
                )}
              </div>

              {/* Website URL */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Globe size={16} className="text-[#139aff]" />
                  Website URL
                </label>
                <div className="relative group">
                  <input
                    type="url"
                    onChange={handlechange}
                    name="website"
                    value={form.website}
                    placeholder="https://brandname.com"
                    className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200
                      bg-gray-50 dark:bg-gray-700
                      focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                      placeholder:text-gray-400 dark:text-gray-200 dark:placeholder:text-gray-500 text-gray-600
                      ${errors.website 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                      }`}
                  />
                </div>
                {errors.website && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <span className="text-xs">⚠️</span> {errors.website}
                  </p>
                )}
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Include https:// for external websites
                </p>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <FileText size={16} className="text-[#139aff]" />
                  Description
                </label>
                <div className="relative">
                  <textarea
                    rows="5"
                    onChange={handlechange}
                    name="description"
                    value={form.description}
                    placeholder="Write a short description about the brand, its products, and key highlights..."
                    className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200 resize-none
                      bg-gray-50 dark:bg-gray-700 dark:text-gray-200
                      focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                      placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-600
                      ${errors.description 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                      }`}
                  />
                </div>
                {errors.description && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <span className="text-xs">⚠️</span> {errors.description}
                  </p>
                )}
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Minimum 10 characters. Include brand values, products, and market presence.
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 dark:border-gray-700 my-6"></div>

              {/* Submit Button */}
              <motion.button
                whileHover={!loader ? { scale: 1.02 } : {}}
                whileTap={!loader ? { scale: 0.98 } : {}}
                type="submit"
                disabled={loader}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg
                  ${loader 
                    ? "bg-gray-400 cursor-not-allowed text-white" 
                    : "bg-gradient-to-r from-[#00e6ff] to-[#139aff] hover:shadow-xl text-white"
                  }`}
              >
                {loader ? (
                  <>
                    <Loader />
                    <span>Adding Brand...</span>
                  </>
                ) : (
                  <>
                    <Plus size={18} />
                    <span>Add Brand</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}