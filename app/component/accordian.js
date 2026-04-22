"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase, MapPin, Clock, DollarSign, Calendar, Building, User, Tag, GraduationCap, Heart, Eye } from "lucide-react";
import Link from "next/link";
import ThreeDotLoader from "./threedotloader";

export default function OpenPositions() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/job", { cache: "no-store" });
        const data = await res.json();
        if (res.ok) setJobs(data.jobitem);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const capitalize = (text) => text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
  
  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatSalary = (salary) => {
    if (!salary) return "Not specified";
    if (typeof salary === "object") {
      return `${salary.min || ""}${salary.min && salary.max ? " - " : ""}${salary.max || ""} ${salary.currency || "USD"}/${salary.period || "year"}`;
    }
    return salary;
  };

  return (
    <section id="open-positions" className="py-24 bg-gradient-to-b from-gray-50 to-white w-full">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-black font-bold text-center"
        >
          Open{" "}
          <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
            Positions
          </span>
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

        {/* Loader */}
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[250px] gap-4">
            <ThreeDotLoader />
            <p className="text-gray-500 text-sm">Loading positions...</p>
          </div>
        ) : jobs.length === 0 ? (
          <p className="text-center text-gray-500 mt-16">No positions available</p>
        ) : (
          <div className="mt-16 space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl hover:border-[#00e6ff]/40 transition-all duration-300 bg-white"
              >
                {/* Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                        {capitalize(job.jobtitle) || capitalize(job.title) || "Position Title"}
                      </h3>
                      {job.department && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {capitalize(job.department)}
                        </span>
                      )}
                      {job.employmentType && (
                        <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                          {capitalize(job.employmentType)}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-4 mt-2 text-sm text-gray-500 flex-wrap">
                      {job.companyName && (
                        <span className="flex items-center gap-1">
                          <Building className="w-3 h-3" /> {job.companyName}
                        </span>
                      )}
                      {job.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {capitalize(job.location)}
                        </span>
                      )}
                      {job.workplaceType && (
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" /> {capitalize(job.workplaceType)}
                        </span>
                      )}
                    </div>
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
                      className="px-6 pb-6"
                    >
                      <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content - Left Side */}
                        <div className="lg:col-span-2 space-y-6">
                          {/* About the Company */}
                          {job.aboutCompany && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                <Building className="w-4 h-4 text-[#00e6ff]" /> About the Company
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{job.aboutCompany}</p>
                            </div>
                          )}

                          {/* Job Summary */}
                          {job.jobSummary && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Job Summary</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{job.jobSummary}</p>
                            </div>
                          )}

                          {/* About the Role */}
                          {job.aboutRole && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">About the Role</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{job.aboutRole}</p>
                            </div>
                          )}

                          {/* Key Responsibilities */}
                          {job.keyResponsibilities && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities</h4>
                              {Array.isArray(job.keyResponsibilities) ? (
                                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                                  {job.keyResponsibilities.map((resp, i) => (
                                    <li key={i}>{resp}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-gray-600 text-sm">{job.keyResponsibilities}</p>
                              )}
                            </div>
                          )}

                          {/* Required Qualifications */}
                          {job.requiredQualifications && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                <GraduationCap className="w-4 h-4 text-[#00e6ff]" /> Required Qualifications
                              </h4>
                              {Array.isArray(job.requiredQualifications) ? (
                                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                                  {job.requiredQualifications.map((req, i) => (
                                    <li key={i}>{req}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-gray-600 text-sm">{job.requiredQualifications}</p>
                              )}
                            </div>
                          )}

                          {/* Preferred Qualifications */}
                          {job.preferredQualifications && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Preferred Qualifications</h4>
                              {Array.isArray(job.preferredQualifications) ? (
                                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                                  {job.preferredQualifications.map((pref, i) => (
                                    <li key={i}>{pref}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-gray-600 text-sm">{job.preferredQualifications}</p>
                              )}
                            </div>
                          )}

                        </div>

                        {/* Sidebar - Right Side (Job Overview) */}
                        <div className="lg:col-span-1">
                          <div className="bg-gray-50 rounded-xl p-6 sticky top-6">
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <Eye className="w-4 h-4 text-[#00e6ff]" /> Job Overview
                            </h4>
                            
                            <div className="space-y-3 text-sm">
                              {/* Job Title */}
                              <div className="flex items-start gap-2">
                                <Tag className="w-4 h-4 text-gray-400 mt-0.5" />
                                <div>
                                  <p className="text-gray-500">Job Title</p>
                                  <p className="font-medium text-gray-900">{capitalize(job.jobtitle) || capitalize(job.title) || "N/A"}</p>
                                </div>
                              </div>

                              {/* Company Name */}
                              {job.companyName && (
                                <div className="flex items-start gap-2">
                                  <Building className="w-4 h-4 text-gray-400 mt-0.5" />
                                  <div>
                                    <p className="text-gray-500">Company</p>
                                    <p className="font-medium text-gray-900">{job.companyName}</p>
                                  </div>
                                </div>
                              )}

                              {/* Department */}
                              {job.department && (
                                <div className="flex items-start gap-2">
                                  <Briefcase className="w-4 h-4 text-gray-400 mt-0.5" />
                                  <div>
                                    <p className="text-gray-500">Department</p>
                                    <p className="font-medium text-gray-900">{capitalize(job.department)}</p>
                                  </div>
                                </div>
                              )}

                              {/* Location */}
                              <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                                <div>
                                  <p className="text-gray-500">Location</p>
                                  <p className="font-medium text-gray-900">{capitalize(job.location) || capitalize(job.joblocation) || "Not specified"}</p>
                                </div>
                              </div>

                              {/* Employment Type */}
                              {job.employmentType && (
                                <div className="flex items-start gap-2">
                                  <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                                  <div>
                                    <p className="text-gray-500">Employment Type</p>
                                    <p className="font-medium text-gray-900">{capitalize(job.employmentType)}</p>
                                  </div>
                                </div>
                              )}

                              {/* Workplace Type */}
                              {job.workplaceType && (
                                <div className="flex items-start gap-2">
                                  <Briefcase className="w-4 h-4 text-gray-400 mt-0.5" />
                                  <div>
                                    <p className="text-gray-500">Workplace Type</p>
                                    <p className="font-medium text-gray-900">{capitalize(job.workplaceType)}</p>
                                  </div>
                                </div>
                              )}

                              {/* Salary */}
                              {job.salary && (
                                <div className="flex items-start gap-2">
                                  <DollarSign className="w-4 h-4 text-gray-400 mt-0.5" />
                                  <div>
                                    <p className="text-gray-500">Salary</p>
                                    <p className="font-medium text-gray-900">{formatSalary(job.salary)}</p>
                                  </div>
                                </div>
                              )}

                              {/* Experience */}
                              {job.experience && (
                                <div className="flex items-start gap-2">
                                  <User className="w-4 h-4 text-gray-400 mt-0.5" />
                                  <div>
                                    <p className="text-gray-500">Experience</p>
                                    <p className="font-medium text-gray-900">{job.experience}</p>
                                  </div>
                                </div>
                              )}

                              {/* Posted Date */}
                              {job.postedDate && (
                                <div className="flex items-start gap-2">
                                  <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                                  <div>
                                    <p className="text-gray-500">Posted Date</p>
                                    <p className="font-medium text-gray-900">{formatDate(job.postedDate)}</p>
                                  </div>
                                </div>
                              )}

                              {/* Application Deadline */}
                              {job.applicationDeadline && (
                                <div className="flex items-start gap-2">
                                  <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                                  <div>
                                    <p className="text-gray-500">Application Deadline</p>
                                    <p className="font-medium text-red-600">{formatDate(job.applicationDeadline)}</p>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Apply Button */}
                            <div className="mt-6 pt-4 border-t border-gray-200">
                              <Link
                                href={job.status?.toLowerCase() === "closed" ? "#" : "/apply"}
                                className={`w-full block text-center px-6 py-3 rounded-full text-sm font-semibold transition
                                  ${
                                    job.status?.toLowerCase() === "closed"
                                      ? "bg-gray-400 cursor-not-allowed pointer-events-none text-white"
                                      : "bg-gradient-to-r from-[#00e6ff] to-[#139aff] hover:from-[#139aff] hover:to-[#00e6ff] text-white"
                                  }`}
                              >
                                {job.status?.toLowerCase() === "closed" ? "Position Closed" : "Apply Now"}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
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