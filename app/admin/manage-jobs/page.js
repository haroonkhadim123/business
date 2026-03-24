"use client";

import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function ManageJobs() {
  const [jobs, setjobs] = useState([])
  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("/api/job", { cache: "no-store" });
      const data = await res.json();
      if (res.ok) {
        setjobs(data.jobitem);
      }
    };
    fetchJobs();
  }, []);
    const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this application?")) return;
      setjobs((prev) => prev.filter((jobs) => jobs._id !== id));

    try {
      const res = await fetch("/api/job", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (data.success) {
      
        toast.success("Job deleted");
      } else {
        toast.error("Delete failed");
      }
    } catch (error) {
      toast.error("Error deleting job");
    }
  };

 const updateStatus = async (id,status) => {
    setjobs((prev) =>
      prev.map((c) =>
        c._id === id ? { ...c, status } : c
      )
    );

    try {
      const res = await fetch("/api/job", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Status Updated!");
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status");
    }
  };

    const capitalize = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

  return (
  <div className="w-full md:mt-16 max-w-4xl mx-auto p-1  lg:p-8">
  <h1 className="text-2xl sm:text-3xl font-bold mb-6">
    Manage Jobs
  </h1>

  {/* Scrollable container */}
  <div className="space-y-4 md:h-[60vh] h-[70vh] hide-scrollbar p-2  overflow-y-auto pr-2">
    {jobs.map((job, index) => (
      <motion.div
        key={job._id}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05, duration: 0.3 }}
        className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-200 flex items-center justify-between"
      >
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-gray-900 truncate">
            {capitalize(job.jobtitle)}
          </h3>
          <p className="font-medium text-gray-500 truncate">
            {capitalize(job.status)}
          </p>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Open Button */}
       <button onClick={()=>updateStatus(job._id,'Open')} className="px-3 py-1.5 rounded-lg text-green-700 bg-green-100 hover:bg-green-200 text-sm font-medium transition">
  Open
</button>

<button onClick={()=>updateStatus(job._id,'Closed')} className="px-3 py-1.5 rounded-lg text-yellow-700 bg-yellow-100 hover:bg-yellow-200 text-sm font-medium transition">
  Close
</button>

          {/* Delete Button */}
          <button
            onClick={() => handleDelete(job._id)}
            className="text-red-500 cursor-pointer hover:text-red-800 text-sm font-medium transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </motion.div>
    ))}

    {jobs.length === 0 && (
      <div className="text-center py-12 text-gray-500">
        No jobs found. Add your first job!
      </div>
    )}
  </div>
</div>
  );
}
