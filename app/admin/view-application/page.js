"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Trash2 } from "lucide-react";
import Link from "next/link";

export default function ViewApplicationsPage() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Ali Khan",
      email: "ali@example.com",
      phone: "+92 300 1234567",
      position: "Software Engineer",
      cv: "/files/ali-khan-cv.pdf",
      coverLetter:
        "I am very interested in joining HOORAB GROUP as a Software Engineer...",
    },
    {
      id: 2,
      name: "Sara Malik",
      email: "sara@example.com",
      phone: "+92 301 7654321",
      position: "Business Analyst",
      cv: "/files/sara-malik-cv.pdf",
      coverLetter:
        "With 5 years experience in business analysis, I am confident I can contribute...",
    },
    
  ]);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this application?")) {
      setApplications(applications.filter((app) => app.id !== id));
    }
  };

  return (
    <div className="p-4 md:p-10 space-y-6 ">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
        View Applications
      </h1>

      <div className="grid md:grid-cols-2  gap-6">
        {applications.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="relative bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
          >
          
       

       <div className="flex justify-between items-center">
             <h2 className="text-lg font-semibold text-gray-900 mb-1">{app.name}</h2>
                 <button
              onClick={() => handleDelete(app.id)}
              className=" p-1 rounded-full hover:bg-red-100 text-red-500 hover:text-red-700 transition-colors z-10"
              title="Delete Application"
            >
              <Trash2 className="w-5 h-5" />
            </button>
       </div>
            <p className="text-sm text-gray-700 mb-1">
              <strong>Email:</strong> {app.email}
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <strong>Phone:</strong> {app.phone}
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
            <p className="text-sm text-gray-800 break-words">{app.coverLetter}</p>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
}