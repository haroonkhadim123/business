"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Trash2 } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
 // ✅ adjust path if needed

export default function ViewApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loader state

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch("/api/application", { cache: "no-store" });
        const data = await res.json();
        if (res.ok) setApplications(data.applyitem);
      } catch (error) {
        toast.error("Failed to fetch applications");
      } finally {
        setLoading(false); // ✅ stop loader
      }
    };
    fetchApplications();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this application?")) return;

    setApplications((prev) => prev.filter((app) => app._id !== id));

    try {
      const res = await fetch("/api/application", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();
      if (data.success) toast.success("Application deleted");
      else toast.error("Delete failed");
    } catch (error) {
      toast.error("Error deleting application");
    }
  };

  return (
    <div className="p-3 md:p-10 md:mt-14 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl w-full md:px-28 md:text-4xl font-bold text-gray-900 dark:text-gray-100">
        Applications
      </h1>

      {/* ✅ Loader / Empty / Data */}
      {loading ? (
        <div className="flex justify-center items-center h-60">
           <div className="flex items-center justify-center ">
      <div className="h-16 w-16 animate-spin rounded-full border-4 dark:border-t-white border-gray-500 border-gray-300 border-t-black" />
    </div>
        </div>
      ) : applications.length === 0 ? (
        <div className="text-center w-full mt-12">
          <p className="text-gray-500 w-full whitespace-nowrap dark:text-gray-400 text-lg">
            No applications submitted yet.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={app._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white dark:bg-gray-800 p-5 md:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Delete Button */}
              <button
                onClick={() => handleDelete(app._id)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-50 dark:bg-gray-700 hover:bg-red-100 dark:hover:bg-red-800 text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-200 transition"
              >
                <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* Name */}
              <h1 className="text-lg md:text-3xl font-semibold uppercase text-gray-900 dark:text-gray-100 mb-2">
                {app.name}
              </h1>

              {/* Info */}
              <div className="space-y-1.5 text-sm md:text-base text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-bold text-black dark:text-gray-100">
                    Email:
                  </span>{" "}
                  {app.email}
                </p>
                <p>
                  <span className="font-bold text-black dark:text-gray-100">
                    Phone:
                  </span>{" "}
                  {app.phoneNumber}
                </p>
                <p>
                  <span className="font-bold text-black dark:text-gray-100">
                    Position:
                  </span>{" "}
                  {app.position}
                </p>
              </div>

              {/* CV Button */}
              <Link
                href={app.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm md:text-base font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5" />
                View CV
              </Link>

              {/* Divider */}
              <div className="my-4 h-px bg-gray-200 dark:bg-gray-700" />

              {/* Cover Letter */}
              <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed line-clamp-4">
                {app.coverLetter}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}