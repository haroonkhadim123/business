"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  FileText, 
  Send, 
  Building, 
  Layers, 
  Computer, 
  DollarSign, 
  Award, 
  Calendar,
  Heart,
  Users,
  Star
} from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Loader from "@/app/component/Loader";

export default function AddJob() {
  const [form, setForm] = useState({
    // Basic Information
    jobtitle: "",
    joblocation: "",
    jobtype: "",
    jobdescription: "",
    companyName: "",
    department: "",
    workplaceType: "",
    
    // Compensation
    salaryMin: "",
    salaryMax: "",
    salaryCurrency: "USD",
    salaryPeriod: "year",
    experience: "",
    
    // Dates
    applicationDeadline: "",
    
    // Company Information
    aboutCompany: "",
    
    // Job Details
    jobSummary: "",
    aboutRole: "",
    keyResponsibilities: "",
    requiredQualifications: "",
    preferredQualifications: "",

  });
  
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    // Required fields validation
    if (!form.jobtitle.trim()) newErrors.jobtitle = "Job title is required";
    if (!form.joblocation.trim()) newErrors.joblocation = "Location is required";
    if (!form.jobtype.trim()) newErrors.jobtype = "Job type is required";
    if (!form.jobdescription.trim()) newErrors.jobdescription = "Description is required";
    if (form.jobdescription.trim().length < 20) 
      newErrors.jobdescription = "Description must be at least 20 characters";
    
    // New required fields
    if (!form.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!form.workplaceType) newErrors.workplaceType = "Workplace type is required";
    if (!form.jobSummary.trim()) newErrors.jobSummary = "Job summary is required";
    if (!form.requiredQualifications.trim()) newErrors.requiredQualifications = "At least one required qualification is needed";
    if (!form.applicationDeadline) newErrors.applicationDeadline = "Application deadline is required";
    
    // Validate deadline is not in the past
    if (form.applicationDeadline && new Date(form.applicationDeadline) < new Date()) {
      newErrors.applicationDeadline = "Application deadline cannot be in the past";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoader(true);

    // Prepare salary object
    const salary = form.salaryMin || form.salaryMax ? {
      min: form.salaryMin ? parseInt(form.salaryMin) : null,
      max: form.salaryMax ? parseInt(form.salaryMax) : null,
      currency: form.salaryCurrency,
      period: form.salaryPeriod,
    } : null;

    // Prepare arrays
    const keyResponsibilities = form.keyResponsibilities 
      ? form.keyResponsibilities.split('\n').filter(item => item.trim())
      : [];
    
    const requiredQualifications = form.requiredQualifications 
      ? form.requiredQualifications.split('\n').filter(item => item.trim())
      : [];
    
    const preferredQualifications = form.preferredQualifications 
      ? form.preferredQualifications.split('\n').filter(item => item.trim())
      : [];


    const jobData = {
      // Basic Information
      jobtitle: form.jobtitle,
      joblocation: form.joblocation,
      jobtype: form.jobtype,
      jobdescription: form.jobdescription,
      companyName: form.companyName,
      department: form.department || "Other",
      workplaceType: form.workplaceType,
      
      // Compensation
      salary: salary,
      experience: form.experience || "Not specified",
      
      // Dates
      applicationDeadline: form.applicationDeadline,
      
      // Company Information
      aboutCompany: form.aboutCompany || "",
      
      // Job Details
      jobSummary: form.jobSummary,
      aboutRole: form.aboutRole || "",
      keyResponsibilities: keyResponsibilities,
      requiredQualifications: requiredQualifications,
      preferredQualifications: preferredQualifications,
   
      
      // Status
      status: "Open",
    };

    try {
      const response = await fetch("/api/job", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });

      const data = await response.json();

      if (data.error) {
        toast.error(data.message);
      } else {
        toast.success("Job posted successfully!");
        setForm({
          jobtitle: "",
          joblocation: "",
          jobtype: "",
          jobdescription: "",
          companyName: "",
          department: "",
          workplaceType: "",
          salaryMin: "",
          salaryMax: "",
          salaryCurrency: "USD",
          salaryPeriod: "year",
          experience: "",
          applicationDeadline: "",
          aboutCompany: "",
          jobSummary: "",
          aboutRole: "",
          keyResponsibilities: "",
          requiredQualifications: "",
          preferredQualifications: "",
        
        });
        setErrors({});
      }
    } catch (error) {
      toast.error("Something went wrong while posting job");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("editJob");
    if (stored) {
      const data = JSON.parse(stored);
      setForm({
        jobtitle: data.jobtitle || "",
        joblocation: data.joblocation || "",
        jobtype: data.jobtype || "",
        jobdescription: data.jobdescription || "",
        companyName: data.companyName || "",
        department: data.department || "",
        workplaceType: data.workplaceType || "",
        salaryMin: data.salary?.min || "",
        salaryMax: data.salary?.max || "",
        salaryCurrency: data.salary?.currency || "USD",
        salaryPeriod: data.salary?.period || "year",
        experience: data.experience || "",
        applicationDeadline: data.applicationDeadline ? new Date(data.applicationDeadline).toISOString().split('T')[0] : "",
        aboutCompany: data.aboutCompany || "",
        jobSummary: data.jobSummary || "",
        aboutRole: data.aboutRole || "",
        keyResponsibilities: data.keyResponsibilities?.join('\n') || "",
        requiredQualifications: data.requiredQualifications?.join('\n') || "",
        preferredQualifications: data.preferredQualifications?.join('\n') || "",
  
      });
      localStorage.removeItem("editJob");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 md:py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="max-w-5xl mx-auto"
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
              {/* Section 1: Basic Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-[#00e6ff] pb-2 inline-block">
                  Basic Information
                </h2>
                
                {/* Job Title */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Briefcase size={16} className="text-[#139aff]" />
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="jobtitle"
                    value={form.jobtitle}
                    onChange={handleChange}
                    placeholder="e.g., Senior Software Engineer"
                    className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200
                      bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200
                      focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                      placeholder:text-gray-400 dark:placeholder:text-gray-500
                      ${errors.jobtitle 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                      }`}
                  />
                  {errors.jobtitle && <p className="text-red-500 text-sm">⚠️ {errors.jobtitle}</p>}
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Building size={16} className="text-[#139aff]" />
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="e.g., Tech Corp Inc."
                    className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200
                      bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200
                      focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                      ${errors.companyName 
                        ? "border-red-500" 
                        : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                      }`}
                  />
                  {errors.companyName && <p className="text-red-500 text-sm">⚠️ {errors.companyName}</p>}
                </div>

                {/* Department */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Layers size={16} className="text-[#139aff]" />
                    Department
                  </label>
                  <select
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-[#139aff]/20 focus:border-[#139aff]"
                  >
                    <option value="">Select department</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="HR">Human Resources</option>
                    <option value="Finance">Finance</option>
                    <option value="Operations">Operations</option>
                    <option value="Design">Design</option>
                    <option value="Product">Product</option>
                  </select>
                </div>

                {/* Location & Workplace Type */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <MapPin size={16} className="text-[#139aff]" />
                      Location *
                    </label>
                    <input
                      type="text"
                      name="joblocation"
                      value={form.joblocation}
                      onChange={handleChange}
                      placeholder="e.g., Dubai, UAE"
                      className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200
                        bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200
                        focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                        ${errors.joblocation ? "border-red-500" : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                      }`}
                    />
                    {errors.joblocation && <p className="text-red-500 text-sm">⚠️ {errors.joblocation}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Computer size={16} className="text-[#139aff]" />
                      Workplace Type *
                    </label>
                    <select
                      name="workplaceType"
                      value={form.workplaceType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200
                        bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200
                        focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                        ${errors.workplaceType ? "border-red-500" : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                      }`}
                    >
                      <option value="">Select workplace type</option>
                      <option value="Remote">Remote</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="On-site">On-site</option>
                    </select>
                    {errors.workplaceType && <p className="text-red-500 text-sm">⚠️ {errors.workplaceType}</p>}
                  </div>
                </div>

                {/* Job Type */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Clock size={16} className="text-[#139aff]" />
                    Employment Type *
                  </label>
                  <select
                    name="jobtype"
                    value={form.jobtype}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200
                      bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200
                      focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                      ${errors.jobtype ? "border-red-500" : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                    }`}
                  >
                    <option value="">Select employment type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                    <option value="Temporary">Temporary</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                  {errors.jobtype && <p className="text-red-500 text-sm">⚠️ {errors.jobtype}</p>}
                </div>
              </div>

              {/* Section 2: Compensation & Experience */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-[#00e6ff] pb-2 inline-block">
                  Compensation & Experience
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <DollarSign size={16} className="text-[#139aff]" />
                      Salary Range (Min)
                    </label>
                    <input
                      type="number"
                      name="salaryMin"
                      value={form.salaryMin}
                      onChange={handleChange}
                      placeholder="e.g., 50000"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-[#139aff]/20 focus:border-[#139aff]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <DollarSign size={16} className="text-[#139aff]" />
                      Salary Range (Max)
                    </label>
                    <input
                      type="number"
                      name="salaryMax"
                      value={form.salaryMax}
                      onChange={handleChange}
                      placeholder="e.g., 80000"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-[#139aff]/20 focus:border-[#139aff]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Currency</label>
                    <select
                      name="salaryCurrency"
                      value={form.salaryCurrency}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-[#139aff]/20"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="AED">AED (د.إ)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Salary Period</label>
                    <select
                      name="salaryPeriod"
                      value={form.salaryPeriod}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-[#139aff]/20"
                    >
                      <option value="hour">Per Hour</option>
                      <option value="day">Per Day</option>
                      <option value="week">Per Week</option>
                      <option value="month">Per Month</option>
                      <option value="year">Per Year</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Award size={16} className="text-[#139aff]" />
                      Experience Required
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      placeholder="e.g., 3-5 years"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-[#139aff]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Calendar size={16} className="text-[#139aff]" />
                      Application Deadline *
                    </label>
                    <input
                      type="date"
                      name="applicationDeadline"
                      value={form.applicationDeadline}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200
                        bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200
                        focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                        ${errors.applicationDeadline ? "border-red-500" : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                      }`}
                    />
                    {errors.applicationDeadline && <p className="text-red-500 text-sm">⚠️ {errors.applicationDeadline}</p>}
                  </div>
                </div>
              </div>

              {/* Section 3: Job Details */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-[#00e6ff] pb-2 inline-block">
                  Job Details
                </h2>
                
                {/* Job Summary */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <FileText size={16} className="text-[#139aff]" />
                    Job Summary *
                  </label>
                  <textarea
                    name="jobSummary"
                    value={form.jobSummary}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Brief overview of the position and its importance to the company..."
                    className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200 resize-none
                      bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200
                      focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                      ${errors.jobSummary ? "border-red-500" : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                    }`}
                  />
                  {errors.jobSummary && <p className="text-red-500 text-sm">⚠️ {errors.jobSummary}</p>}
                </div>

                {/* About the Role */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Users size={16} className="text-[#139aff]" />
                    About the Role
                  </label>
                  <textarea
                    name="aboutRole"
                    value={form.aboutRole}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Detailed description of what the role entails..."
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-[#139aff]/20 resize-none"
                  />
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Star size={16} className="text-[#139aff]" />
                    Key Responsibilities (One per line)
                  </label>
                  <textarea
                    name="keyResponsibilities"
                    value={form.keyResponsibilities}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Lead development of new features&#10;Collaborate with cross-functional teams&#10;Mentor junior developers"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-[#139aff]/20 resize-none"
                  />
                </div>

                {/* Required Qualifications */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Award size={16} className="text-[#139aff]" />
                    Required Qualifications * (One per line)
                  </label>
                  <textarea
                    name="requiredQualifications"
                    value={form.requiredQualifications}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Bachelor's degree in Computer Science&#10;5+ years of experience in React&#10;Strong problem-solving skills"
                    className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200 resize-none
                      bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200
                      focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                      ${errors.requiredQualifications ? "border-red-500" : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                    }`}
                  />
                  {errors.requiredQualifications && <p className="text-red-500 text-sm">⚠️ {errors.requiredQualifications}</p>}
                </div>

                {/* Preferred Qualifications */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Star size={16} className="text-[#139aff]" />
                    Preferred Qualifications (One per line)
                  </label>
                  <textarea
                    name="preferredQualifications"
                    value={form.preferredQualifications}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Master's degree&#10;Experience with cloud technologies"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-[#139aff]/20 resize-none"
                  />
                </div>

              

                {/* About Company */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Building size={16} className="text-[#139aff]" />
                    About the Company
                  </label>
                  <textarea
                    name="aboutCompany"
                    value={form.aboutCompany}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Tell candidates about your company culture, mission, and values..."
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-[#139aff]/20 resize-none"
                  />
                </div>

                {/* Full Description */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <FileText size={16} className="text-[#139aff]" />
                    Full Job Description *
                  </label>
                  <textarea
                    name="jobdescription"
                    value={form.jobdescription}
                    onChange={handleChange}
                    rows="6"
                    placeholder="• Complete job details&#10;• Day-to-day responsibilities&#10;• Team structure&#10;• Growth opportunities"
                    className={`w-full px-4 py-3.5 rounded-xl border transition-all duration-200 resize-none
                      bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200
                      focus:outline-none focus:ring-4 focus:ring-[#139aff]/20
                      ${errors.jobdescription ? "border-red-500" : "border-gray-200 dark:border-gray-600 focus:border-[#139aff]"
                    }`}
                  />
                  {errors.jobdescription && <p className="text-red-500 text-sm">⚠️ {errors.jobdescription}</p>}
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    Minimum 20 characters. Include responsibilities, requirements, and benefits.
                  </p>
                </div>
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