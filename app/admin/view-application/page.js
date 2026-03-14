"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Trash2 } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ViewApplicationsPage() {
  const [applications, setapplication] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const res = await fetch("/api/application", { cache: "no-store" });
      const data = await res.json();
      if (res.ok) {
        setapplication(data.applyitem);
        console.log(data);
      } else {
        console.log("Failed to fetch applications");
      }
    };
    fetchApplications();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this application?")) return;

    try {
      const res = await fetch("/api/application", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        setapplication((prev) => prev.filter((app) => app._id !== id));
        toast.success("Application deleted successfully");
      } else {
        toast.error("Failed to delete application");
      }
    } catch (error) {
      console.error("Error deleting application:", error);
      toast.error("An error occurred while deleting the application");
    }
  };

  return (
    <div className="p-1 md:p-10 md:h-[70vh] hide-scrollbar overflow-y-auto space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
        View Applications
      </h1>

      {applications.length === 0 ? (
        <p className="text-gray-500 text-lg mt-10 text-center">
          No applications submitted yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={app._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="relative bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {app.name}
                </h2>
                <button
                  onClick={() => handleDelete(app._id)}
                  className="p-1 rounded-full hover:bg-red-100 text-red-500 hover:text-red-700 transition-colors z-10"
                  title="Delete Application"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-gray-700 mb-1">
                <strong>Email:</strong> {app.email}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Phone:</strong> {app.phoneNumber}
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Position:</strong> {app.position}
              </p>
              <Link
                href={app.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:underline text-sm mb-2"
              >
                <FileText className="w-4 h-4" /> View CV
              </Link>
              <p className="text-sm text-gray-800 break-words">
                {app.coverLetter}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}