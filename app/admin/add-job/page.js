"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, FileText } from "lucide-react";
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
  };

  const validate = () => {
    const newErrors = {};
    if (!form.jobtitle.trim()) newErrors.jobtitle = "Job title is required";
    if (!form.joblocation.trim()) newErrors.joblocation = "Location is required";
    if (!form.jobtype.trim()) newErrors.jobtype = "Job type is required";
    if (!form.jobdescription.trim()) newErrors.jobdescription = "Description is required";

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
        toast.success(data.message);
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 shadow-2xl md:mt-20 p-4 md:p-10 rounded-xl max-w-2xl mx-auto"
    >
      <h1 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-100">
        Add Job Position
      </h1>

      <form onSubmit={handlesubmit} className="space-y-3">

        {/* Job Title */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300 pt-2">Job Title</label>
          <div className="relative">
            <Briefcase
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400"
            />
            <input
              type="text"
              name="jobtitle"
              value={form.jobtitle}
              onChange={handlechange}
              placeholder="Enter job title"
              className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none transition
                ${errors.jobtitle 
                  ? "border-red-500 focus:ring-red-500" 
                  : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-gray-600 dark:bg-gray-700 dark:text-gray-100"}`}
            />
          </div>
          {errors.jobtitle && <p className="text-red-500 text-sm">{errors.jobtitle}</p>}
        </div>

        {/* Location */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-2">Location</label>
          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400"
            />
            <input
              type="text"
              name="joblocation"
              value={form.joblocation}
              onChange={handlechange}
              placeholder="Enter job location"
              className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none transition
                ${errors.joblocation 
                  ? "border-red-500 focus:ring-red-500" 
                  : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 text-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"}`}
            />
          </div>
          {errors.joblocation && <p className="text-red-500 text-sm">{errors.joblocation}</p>}
        </div>

        {/* Job Type */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-2">Job Type</label>
          <div className="relative">
            <Clock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400 pointer-events-none" />
            <select
              name="jobtype"
              value={form.jobtype}
              onChange={handlechange}
              className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none transition appearance-none
                ${errors.jobtype 
                  ? "border-red-500 focus:ring-red-500" 
                  : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 text-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"}`}
            >
              <option value="" className="dark:bg-gray-700 dark:text-gray-100 text-gray-600">Select Type</option>
              <option value="Full Time" className="dark:bg-gray-700 dark:text-gray-100 text-gray-600">Full Time</option>
              <option value="Part Time" className="dark:bg-gray-700 dark:text-gray-100 text-gray-600">Part Time</option>
              <option value="Remote" className="dark:bg-gray-700 dark:text-gray-100 text-gray-600">Remote</option>
              <option value="Internship" className="dark:bg-gray-700 dark:text-gray-100 text-gray-600">Internship</option>
            </select>
          </div>
          {errors.jobtype && <p className="text-red-500 text-sm">{errors.jobtype}</p>}
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-2">Job Description</label>
          <div className="relative">
            <FileText size={18} className="absolute left-3 top-4 text-gray-400 dark:text-gray-400" />
            <textarea
              name="jobdescription"
              value={form.jobdescription}
              onChange={handlechange}
              rows="5"
              placeholder="Enter job responsibilities, requirements, and expectations..."
              className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none transition resize-none
                ${errors.jobdescription 
                  ? "border-red-500 focus:ring-red-500" 
                  : "border-gray-300 dark:border-gray-600 text-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"}`}
            />
          </div>
          {errors.jobdescription && <p className="text-red-500 text-sm">{errors.jobdescription}</p>}
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={!loader ? { scale: 1.03 } : {}}
          whileTap={!loader ? { scale: 0.97 } : {}}
          type="submit"
          disabled={loader}
          className={`w-full py-3 rounded-xl font-medium transition
            ${loader 
              ? "bg-gray-400 cursor-not-allowed text-white" 
              : "bg-blue-600 hover:bg-blue-700 text-white"}`}
        >
          {loader ? <Loader /> : "Post Job"}
        </motion.button>
      </form>
    </motion.div>
  );
}