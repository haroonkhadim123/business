"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, FileText, Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "@/app/component/Loader";

export default function AddJob() {
  const [form, setform] = useState({
    jobtitle: "",
    joblocation: "",
    jobtype: "",
    jobdescription: "",
  });
  const [loader, setloader] = useState(false);
  const [errors, setErrors] = useState({});

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.jobtitle.trim()) newErrors.jobtitle = "Job title is required";
    if (!form.joblocation.trim()) newErrors.joblocation = "Location is required";
    if (!form.jobtype.trim()) newErrors.jobtype = "Job type is required";
    if (!form.jobdescription.trim()) newErrors.jobdescription = "Description is required";
    if (form.jobdescription.trim().length < 20) 
      newErrors.jobdescription = "Description must be at least 20 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setloader(true);

    try {
      const response = await fetch("/api/job", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.error) {
        toast.error(data.message);
      } else {
        toast.success("Job posted successfully!");
        setform({ jobtitle: "", joblocation: "", jobtype: "", jobdescription: "" });
        setErrors({});
      }
    } catch (error) {
      toast.error("Something went wrong while posting job");
    } finally {
      setloader(false);
    }
  };

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
            <Briefcase className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
            Post a New Job
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Fill in the details below to create a new job position
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

              {/* Job Title */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Briefcase size={16} className="text-[#139aff]" />
                  Job Title
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    name="jobtitle"
                    value={form.jobtitle}
                    onChange={handlechange}
                    placeholder="e.g., Senior Software Engineer"
                    className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200
                      bg-gray-50 dark:bg-gray-700 text-gray-600
                      focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                      placeholder:text-gray-400 dark:placeholder:text-gray-500
                      ${errors.jobtitle 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                      }`}
                  />
                </div>
                {errors.jobtitle && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <span className="text-xs">⚠️</span> {errors.jobtitle}
                  </p>
                )}
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <MapPin size={16} className="text-[#139aff]" />
                  Location
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    name="joblocation"
                    value={form.joblocation}
                    onChange={handlechange}
                    placeholder="e.g., Dubai, UAE / Remote"
                    className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200
                      bg-gray-50 text-gray-600 dark:bg-gray-700
                      focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                      placeholder:text-gray-400 dark:placeholder:text-gray-500
                      ${errors.joblocation 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                      }`}
                  />
                </div>
                {errors.joblocation && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <span className="text-xs">⚠️</span> {errors.joblocation}
                  </p>
                )}
              </div>

              {/* Job Type */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Clock size={16} className="text-[#139aff]" />
                  Job Type
                </label>
                <div className="relative">
                  <select
                    name="jobtype"
                    value={form.jobtype}
                    onChange={handlechange}
                    className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200 appearance-none
                      bg-gray-50 dark:bg-gray-700
                      focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                      text-gray-700 dark:text-gray-300
                      ${errors.jobtype 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                      }`}
                  >
                    <option value="" className="text-gray-400">Select job type</option>
                    <option value="Full Time">📋 Full Time</option>
                    <option value="Part Time">⏰ Part Time</option>
                    <option value="Remote">🏠 Remote</option>
                    <option value="Internship">🎓 Internship</option>
                    <option value="Contract">📄 Contract</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.jobtype && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <span className="text-xs">⚠️</span> {errors.jobtype}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <FileText size={16} className="text-[#139aff]" />
                  Job Description
                </label>
                <div className="relative">
                  <textarea
                    name="jobdescription"
                    value={form.jobdescription}
                    onChange={handlechange}
                    rows="6"
                    placeholder="• Responsibilities&#10;• Requirements&#10;• Qualifications&#10;• Benefits"
                    className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200 resize-none
                      bg-gray-50 dark:bg-gray-700 text-gray-600
                      focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                      placeholder:text-gray-400 dark:placeholder:text-gray-500
                      ${errors.jobdescription 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                      }`}
                  />
                </div>
                {errors.jobdescription && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <span className="text-xs">⚠️</span> {errors.jobdescription}
                  </p>
                )}
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Minimum 20 characters. Include responsibilities, requirements, and benefits.
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
                    <span>Posting Job...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Post Job</span>
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