"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaBriefcase,
  FaBuilding,
  FaChartLine,
  FaUsers,
  FaShoppingBag,
  FaEye,
  FaPlus,
} from "react-icons/fa";
import Link from "next/link";

export default function DashboardPage() {
  const [brands, setBrands] = useState([]);
  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch("/api/brand", { cache: "no-store" });
        const data = await res.json();
        if (res.ok) setBrands(data.applybrand || []);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };
    fetchBrands();
  }, []);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch("/api/application", { cache: "no-store" });
        const data = await res.json();
        if (res.ok) setApplications(data.applyitem || []);
      } catch (error) {
        console.error("Failed to fetch applications", error);
      }
    };
    fetchApplications();
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/job", { cache: "no-store" });
        const data = await res.json();
        if (res.ok) setJobs(data.jobitem || []);
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      }
    };
    fetchJobs();
  }, []);

  const statsCards = [
    {
      title: "Total Brands",
      value: brands.length,
      icon: <FaBuilding className="w-6 h-6" />,
      color: "from-[#00e6ff] to-[#139aff]",
      bgColor: "bg-[#00e6ff]/10",
      link: "/admin/manage-brands",
    },
    {
      title: "Total Applications",
      value: applications.length,
      icon: <FaFileAlt className="w-6 h-6" />,
      color: "from-[#139aff] to-[#00e6ff]",
      bgColor: "bg-[#139aff]/10",
      link: "/admin/view-application",
    },
    {
      title: "Total Jobs",
      value: jobs.length,
      icon: <FaBriefcase className="w-6 h-6" />,
      color: "from-[#00e6ff] to-[#139aff]",
      bgColor: "bg-[#00e6ff]/10",
      link: "/admin/manage-jobs",
    },
  ];

  const recentApplications = applications.slice(0, 5);
  const recentBrands = brands.slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <h1 className="text-4xl mt-6 font-bold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Welcome back! Here's what's happening with your business today.
            </p>
          </div>

          <Link
            href="/admin/add-job"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00e6ff] to-[#139aff] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FaPlus className="w-4 h-4" />
            Post New Job
          </Link>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {statsCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {stat.title}
                    </p>
                    <p className="text-4xl font-bold mt-3 text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`${stat.bgColor} p-4 rounded-xl`}>
                    <div className={`text-[#139aff]`}>{stat.icon}</div>
                  </div>
                </div>
                <Link
                  href={stat.link}
                  className="inline-flex items-center gap-2 mt-5 text-sm text-[#139aff] hover:text-[#00e6ff] transition font-medium"
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Recent Applications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Recent Applications
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Latest partnership applications received
                </p>
              </div>
              <Link
                href="/admin/view-application"
                className="text-[#139aff] hover:text-[#00e6ff] text-sm font-medium flex items-center gap-1"
              >
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {recentApplications.length > 0 ? (
                recentApplications.map((app, idx) => (
                  <div key={idx} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {app.companyName || "Unknown Company"}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {app.email || "No email provided"}
                        </p>
                      </div>
                      <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        Pending
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                  No applications yet
                </div>
              )}
            </div>
          </motion.div>

          {/* Recent Brands */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Recent Brands
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Latest brands added to the platform
                </p>
              </div>
              <Link
                href="/admin/manage-brands"
                className="text-[#139aff] hover:text-[#00e6ff] text-sm font-medium flex items-center gap-1"
              >
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {recentBrands.length > 0 ? (
                recentBrands.map((brand, idx) => (
                  <div key={idx} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {brand.brandname || "Unknown Brand"}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
                          {brand.description || "No description"}
                        </p>
                      </div>
                      <FaBuilding className="text-gray-400 dark:text-gray-500 w-4 h-4" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                  No brands added yet
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { title: "Add New Brand", href: "/admin/add-brand", icon: <FaBuilding />, color: "from-[#00e6ff] to-[#139aff]" },
            { title: "Post New Job", href: "/admin/add-job", icon: <FaBriefcase />, color: "from-[#139aff] to-[#00e6ff]" },
            { title: "View Applications", href: "/admin/view-application", icon: <FaFileAlt />, color: "from-[#00e6ff] to-[#139aff]" },
            { title: "Manage Brands", href: "/admin/manage-brands", icon: <FaShoppingBag />, color: "from-[#139aff] to-[#00e6ff]" },
          ].map((action, idx) => (
            <Link
              key={idx}
              href={action.href}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className="text-[#139aff] mx-auto mb-2">{action.icon}</div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#139aff] transition">
                  {action.title}
                </p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}