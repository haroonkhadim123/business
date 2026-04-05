"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Trash2, Mail, Phone, MapPin, Briefcase, User, Calendar, Eye } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ViewApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [selectedApp, setSelectedApp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch("/api/application", { cache: "no-store" });
        const data = await res.json();
        if (res.ok) setApplications(data.applyitem || []);
      } catch (error) {
        toast.error("Failed to fetch applications");
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this application?")) return;

    setDeletingId(id);

    try {
      const res = await fetch("/api/application", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Application deleted successfully");
        setApplications((prev) => prev.filter((app) => app._id !== id));
      } else {
        toast.error("Delete failed");
      }
    } catch (error) {
      toast.error("Error deleting application");
    } finally {
      setDeletingId(null);
    }
  };

  const viewDetails = (app) => {
    setSelectedApp(app);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-xl flex items-center justify-center shadow-md">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl mt-6 md:text-4xl font-bold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
              Job Applications
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400 ml-14">
            Review and manage all job applications submitted through your career portal
          </p>
        </motion.div>

        {/* Stats Bar */}
        {!loading && applications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-8 shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="bg-[#00e6ff]/10 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-[#139aff]" />
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  Total Applications
                </span>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {applications.length}
                </span>
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
                <FileText className="w-6 h-6 text-[#139aff] animate-pulse" />
              </div>
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Loading applications...</p>
          </div>
        ) : applications.length === 0 ? (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center border border-gray-100 dark:border-gray-700"
          >
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-10 h-10 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No Applications Yet
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              When candidates apply for jobs, their applications will appear here.
            </p>
          </motion.div>
        ) : (
          /* Applications Grid */
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
                  
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(app._id)}
                    disabled={deletingId === app._id}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-500 transition-all duration-200 z-10"
                  >
                    {deletingId === app._id ? (
                      <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                  </button>

                  {/* Applicant Name with Icon */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00e6ff]/10 to-[#139aff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-[#139aff]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#139aff] transition-colors line-clamp-1">
                        {app.name || "Unknown Candidate"}
                      </h2>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                        Applied on {new Date(app.createdAt || Date.now()).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Mail className="w-4 h-4 text-[#00e6ff]" />
                      <span className="truncate">{app.email || "No email"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Phone className="w-4 h-4 text-[#00e6ff]" />
                      <span>{app.phoneNumber || "No phone"}</span>
                    </div>
                    {app.position && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Briefcase className="w-4 h-4 text-[#00e6ff]" />
                        <span className="line-clamp-1">{app.position}</span>
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="my-4 h-px bg-gray-100 dark:bg-gray-700"></div>

                  {/* Cover Letter Preview */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">Cover Letter</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                      {app.coverLetter || "No cover letter provided"}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-3 mt-4">
                    {app.cv && (
                      <Link
                        href={app.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#139aff] hover:text-[#00e6ff] transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        View CV
                      </Link>
                    )}
                    <button
                      onClick={() => viewDetails(app)}
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#139aff] transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Application Details Modal */}
      {isModalOpen && selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 p-5 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Application Details</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-5">
              {/* Personal Info */}
              <div>
                <h3 className="text-sm font-semibold text-[#139aff] uppercase tracking-wider mb-3">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400">Full Name</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedApp.name || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email Address</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedApp.email || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Phone Number</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedApp.phoneNumber || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Applied Position</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedApp.position || "N/A"}</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100 dark:bg-gray-700"></div>

              {/* Cover Letter */}
              <div>
                <h3 className="text-sm font-semibold text-[#139aff] uppercase tracking-wider mb-3">Cover Letter</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {selectedApp.coverLetter || "No cover letter provided"}
                </p>
              </div>

              {/* CV Link */}
              {selectedApp.cv && (
                <>
                  <div className="h-px bg-gray-100 dark:bg-gray-700"></div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#139aff] uppercase tracking-wider mb-3">Resume/CV</h3>
                    <Link
                      href={selectedApp.cv}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#139aff] hover:text-[#00e6ff] font-medium"
                    >
                      <FileText className="w-4 h-4" />
                      View Full Resume
                    </Link>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}