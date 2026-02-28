"use client";

import { motion } from "framer-motion";
import {  FaBoxes } from "react-icons/fa";



export default function DashboardPage() {
  const stats = [
    {
      title: "Total Applications",
      value: 120,
      icon: <FaBoxes className="h-8 w-8 " />,
    },
    {
      title: "Total Jobs Posted",
      value: 15,
      icon: <FaBoxes className="h-8 w-8" />,
    },
    {
      title: "Total Brands",
      value: 8,
      icon: <FaBoxes className="h-8 w-8" />,
    },
  ];

  return (
    <div className="space-y-8 p-6  ">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Dashboard Overview
        </h1>
        {/* Optional: Add date or quick actions here later */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">
                  {item.title}
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {item.value.toLocaleString()}
                </p>
              </div>

              <div className="rounded-full bg-black/5 text-black p-3 ">
                {item.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional: Add more sections like recent jobs, charts, etc. */}
    </div>
  );
}