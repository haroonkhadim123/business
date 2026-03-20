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
        toast.success("Application deleted");
      } else {
        toast.error("Delete failed");
      }
    } catch (error) {
      toast.error("Error deleting application");
    }
  };

  return (
    <div className="p-3 md:p-10 md:mt-14 space-y-6">
      
      {/* Header */}
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
        Applications
      </h1>

      {/* Empty State */}
      {applications.length === 0 ? (
        <div className="text-center mt-16">
          <p className="text-gray-500 text-lg">
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
              className="group relative bg-white p-5 md:p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Delete Button */}
              <button
                onClick={() => handleDelete(app._id)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-50 hover:bg-red-100 text-red-500 hover:text-red-700 transition"
              >
                <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* Name */}
              <h1 className="text-lg md:text-3xl font-semibold uppercase text-gray-900 mb-2">
                {app.name}
              </h1>

              {/* Info */}
              <div className="space-y-1.5 text-sm md:text-base text-gray-700">
                <p>
                  <span className="font-bold  text-black">Email:</span>{" "}
                  {app.email}
                </p>
                <p>
                  <span className="font-bold  text-black">Phone:</span>{" "}
                  {app.phoneNumber}
                </p>
                <p>
                  <span className="font-bold  text-black">Position:</span>{" "}
                  {app.position}
                </p>
              </div>

              {/* CV Button */}
              <Link
                href={app.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm md:text-base font-medium text-indigo-600 hover:text-indigo-800 transition"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5" />
                View CV
              </Link>

              {/* Divider */}
              <div className="my-4 h-px bg-gray-200" />

              {/* Cover Letter */}
              <p className="text-sm md:text-base text-gray-800 leading-relaxed line-clamp-4">
                {app.coverLetter}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}