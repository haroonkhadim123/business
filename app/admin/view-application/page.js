"use client"; // since we use state and motion

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Link from "next/link";



export default function ViewApplicationsPage() {
  const applications = [
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
  ];

  return (
    <div className="p-6 md:p-10 space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
        View Applications
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Phone
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Position
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                CV
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Cover Letter
              </th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app, index) => (
              <motion.tr
                key={app.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3 text-sm text-gray-900">{app.name}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{app.email}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{app.phone}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{app.position}</td>
                <td className="px-4 py-3 text-sm text-blue-600">
                  <Link
                    href={app.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <FileText className="w-4 h-4" /> View CV
                  </Link>
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 break-words">
                  {app.coverLetter}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}