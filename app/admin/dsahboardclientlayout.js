"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";



import {
  FaFileAlt,
  FaBriefcase,
  FaBuilding,
  FaChartLine,
} from "react-icons/fa";
import Link from "next/link";


import dynamic from "next/dynamic";

const LineChart = dynamic(() => import("recharts").then(m => m.LineChart), { ssr: false });
const BarChart = dynamic(() => import("recharts").then(m => m.BarChart), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then(m => m.ResponsiveContainer), { ssr: false });
const Line = dynamic(() => import("recharts").then(m => m.Line), { ssr: false });
const Bar = dynamic(() => import("recharts").then(m => m.Bar), { ssr: false });
const XAxis = dynamic(() => import("recharts").then(m => m.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then(m => m.YAxis), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then(m => m.Tooltip), { ssr: false });
const CartesianGrid = dynamic(() => import("recharts").then(m => m.CartesianGrid), { ssr: false });
const Legend = dynamic(() => import("recharts").then(m => m.Legend), { ssr: false });

export default function DashboardPage() {

  

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  const stats = [
    {
      title: "Total Applications",
      value: 120,
      change: "+18% this week",
      icon: <FaFileAlt className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "Jobs Posted",
      value: 15,
      change: "+3 this month",
      icon: <FaBriefcase className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Active Brands / Companies",
      value: 8,
      change: "4 new",
      icon: <FaBuilding className="h-8 w-8 text-violet-600 dark:text-violet-400" />,
    },
  ];

  const applicationsData = [
    { name: "Mon", applications: 12 },
    { name: "Tue", applications: 18 },
    { name: "Wed", applications: 10 },
    { name: "Thu", applications: 22 },
    { name: "Fri", applications: 30 },
    { name: "Sat", applications: 16 },
    { name: "Sun", applications: 25 },
  ];

  const jobsData = [
    { name: "Jan", jobs: 2 },
    { name: "Feb", jobs: 4 },
    { name: "Mar", jobs: 6 },
    { name: "Apr", jobs: 5 },
    { name: "May", jobs: 8 },
    { name: "Jun", jobs: 7 },
  ];

  return (
    <div className="min-h-screen md:mt-8 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Overview of your recruitment activity
            </p>
          </div>

          <Link
            href="/admin/add-job"
            className="bg-indigo-600 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600 px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition"
          >
            Post New Job
          </Link>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 shadow-sm"
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 uppercase">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-gray-100">{stat.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {stat.change}
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
                  {stat.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Line Chart */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                Applications Trend (Weekly)
              </h2>
              <FaChartLine className="text-gray-700 dark:text-gray-300"/>
            </div>

            <div className="w-full h-72 min-w-0">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={applicationsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" strokeOpacity={0.2} />
                    <XAxis dataKey="name" stroke="#4b5563" />
                    <YAxis stroke="#4b5563" />
                    <Tooltip wrapperStyle={{ backgroundColor: '#1f2937', color: '#f9fafb' }} />
                    <Line
                      type="monotone"
                      dataKey="applications"
                      stroke="#4f46e5"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          {/* Bar Chart */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                Jobs Posted (Monthly)
              </h2>
              <FaChartLine className="text-gray-700 dark:text-gray-300"/>
            </div>

            <div className="w-full h-72 min-w-0">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={jobsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" strokeOpacity={0.2} />
                    <XAxis dataKey="name" stroke="#4b5563" />
                    <YAxis stroke="#4b5563" />
                    <Tooltip wrapperStyle={{ backgroundColor: '#1f2937', color: '#f9fafb' }} />
                    <Legend wrapperStyle={{ color: '#f9fafb' }} />
                    <Bar dataKey="jobs" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}