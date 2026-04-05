"use client";

import { motion } from "framer-motion";
import { Trash2, Briefcase, MapPin, Clock, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ManageJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/job", { cache: "no-store" });
        const data = await res.json();
        if (res.ok) setJobs(data.jobitem || []);
      } catch (error) {
        toast.error("Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this job?")) return;

    setDeletingId(id);

    try {
      const res = await fetch("/api/job", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Job deleted successfully");
        setJobs((prev) => prev.filter((job) => job._id !== id));
      } else {
        toast.error("Delete failed");
      }
    } catch (error) {
      toast.error("Error deleting job");
    } finally {
      setDeletingId(null);
    }
  };

  const updateStatus = async (id, status) => {
    setUpdatingId(id);

    try {
      const res = await fetch("/api/job", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(`Job marked as ${status}`);
        setJobs((prev) =>
          prev.map((job) => (job._id === id ? { ...job, status } : job))
        );
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  };

  const capitalize = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const getStatusColor = (status) => {
    if (status === "Open") return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-xl flex items-center justify-center shadow-md">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-3xl mt-6 md:text-4xl font-bold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                  Manage Jobs
                </h1>
              </div>
              <p className="text-gray-500 dark:text-gray-400 ml-14">
                View, update status, and manage your job postings
              </p>
            </div>
            
            <Link
              href="/admin/add-job"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00e6ff] to-[#139aff] text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Plus size={18} />
              Add New Job
            </Link>
          </div>
        </motion.div>

        {/* Stats Bar */}
        {!loading && jobs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-8 shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="bg-[#00e6ff]/10 p-2 rounded-lg">
                    <Briefcase className="w-5 h-5 text-[#139aff]" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Total Jobs</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {jobs.length}
                  </span>
                </div>
                <div className="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Open</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    {jobs.filter(j => j.status === "Open").length}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Closed</span>
                  <span className="font-semibold text-red-600 dark:text-red-400">
                    {jobs.filter(j => j.status === "Closed").length}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-400 dark:text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </motion.div>
        )}

        {/* Loader */}
        {loading ? (
          <div className="flex flex-col justify-center items-center h-96">
            <div className="relative">
              <div className="h-20 w-20 animate-spin rounded-full border-4 border-gray-200 dark:border-gray-700 border-t-[#00e6ff]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#139aff] animate-pulse" />
              </div>
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Loading jobs...</p>
          </div>
        ) : jobs.length === 0 ? (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center border border-gray-100 dark:border-gray-700"
          >
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-10 h-10 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No Jobs Found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Get started by adding your first job posting.
            </p>
            <Link
              href="/admin/add-job"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00e6ff] to-[#139aff] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Plus size={18} />
              Add Your First Job
            </Link>
          </motion.div>
        ) : (
          /* Jobs List */
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ x: 5 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    
                    {/* Job Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#00e6ff]/10 to-[#139aff]/10 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-[#139aff]" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                          {capitalize(job.jobtitle)}
                        </h3>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 ml-13">
                        {job.joblocation && (
                          <div className="flex items-center gap-1">
                            <MapPin size={14} className="text-[#00e6ff]" />
                            <span>{capitalize(job.joblocation)}</span>
                          </div>
                        )}
                        {job.jobtype && (
                          <div className="flex items-center gap-1">
                            <Clock size={14} className="text-[#00e6ff]" />
                            <span>{capitalize(job.jobtype)}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${getStatusColor(job.status)}`}>
                        {capitalize(job.status)}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      {job.status !== "Open" && (
                        <button
                          onClick={() => updateStatus(job._id, "Open")}
                          disabled={updatingId === job._id}
                          className="px-4 py-2 rounded-lg text-sm font-medium bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50 transition-all duration-200"
                        >
                          {updatingId === job._id ? (
                            <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            "Open"
                          )}
                        </button>
                      )}
                      
                      {job.status !== "Closed" && (
                        <button
                          onClick={() => updateStatus(job._id, "Closed")}
                          disabled={updatingId === job._id}
                          className="px-4 py-2 rounded-lg text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50 transition-all duration-200"
                        >
                          {updatingId === job._id ? (
                            <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            "Close"
                          )}
                        </button>
                      )}
                      
                      <button
                        onClick={() => handleDelete(job._id)}
                        disabled={deletingId === job._id}
                        className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
                      >
                        {deletingId === job._id ? (
                          <div className="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <Trash2 size={18} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Job Description Preview */}
                  {job.jobdescription && (
                    <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {job.jobdescription}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}