"use client";

import { motion } from "framer-motion";
import { Trash2, Building2, Globe, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ManageBrands() {
  const router = useRouter();
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch("/api/brand", { cache: "no-store" });
        const data = await res.json();
        if (res.ok) setBrands(data.applybrand || []);
      } catch (error) {
        toast.error("Failed to fetch brands");
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this brand?")) return;

    setDeletingId(id);

    try {
      const res = await fetch("/api/brand", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Brand deleted successfully");
        setBrands((prev) => prev.filter((brand) => brand._id !== id));
      } else {
        toast.error("Delete failed");
      }
    } catch (error) {
      toast.error("Error deleting brand");
    } finally {
      setDeletingId(null);
    }
  };
  const handleEdit = async (brand) => {


  try {
    setDeletingId(brand._id);

    // delete first
    const res = await fetch("/api/brand", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: brand._id }),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Redirecting to edit...");

      // store old data in localStorage
      localStorage.setItem("editBrand", JSON.stringify(brand));

      // remove from UI


      // redirect
      router.push('/admin/add-brand');
            setBrands((prev) => prev.filter((b) => b._id !== brand._id));
    } else {
      toast.error("Edit failed");
    }
  } catch (error) {
    toast.error("Error editing brand");
  } finally {
    setDeletingId(null);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-xl flex items-center justify-center shadow-md">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-3xl mt-6 md:text-4xl font-bold bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                  Manage Brands
                </h1>
              </div>
              <p className="text-gray-500 dark:text-gray-400 ml-14">
                View, manage and delete your brand portfolio
              </p>
            </div>
            
            <Link
              href="/admin/add-brand"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00e6ff] to-[#139aff] text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Building2 size={18} />
              Add New Brand
            </Link>
          </div>
        </motion.div>

        {/* Stats Bar */}
        {!loading && brands.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-8 shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="bg-[#00e6ff]/10 p-2 rounded-lg">
                  <Building2 className="w-5 h-5 text-[#139aff]" />
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  Total Brands
                </span>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {brands.length}
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
                <Building2 className="w-6 h-6 text-[#139aff] animate-pulse" />
              </div>
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Loading brands...</p>
          </div>
        ) : brands.length === 0 ? (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center border border-gray-100 dark:border-gray-700"
          >
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-10 h-10 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No Brands Available
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Get started by adding your first brand to the platform.
            </p>
            <Link
              href="/admin/add-brand"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00e6ff] to-[#139aff] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Building2 size={18} />
              Add Your First Brand
            </Link>
          </motion.div>
        ) : (
          /* Brands Grid */
          <div className="grid md:grid-cols-2 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Brand Icon */}
                       <div className="flex justify-center mb-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 border-4 border-white dark:border-gray-700 shadow-lg">
          {brand.image ? (
            <Image
              src={brand.image}
              alt={brand.brandname}
              fill
              className="object-cover"
              sizes="96px"
            />
          ) : (
            <div className="w-full h-full bg-[#00e6ff]/10 flex items-center justify-center">
              <Building2 className="w-12 h-12 text-[#139aff]" />
            </div>
          )}
        </div>
      </div>
                      
                      {/* Brand Info */}
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#139aff] transition-colors">
                          {brand.brandname}
                        </h2>
                        {brand.website && (
                          <a
                            href={brand.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-[#139aff] transition-colors mt-1"
                          >
                            <Globe size={14} />
                            <span className="truncate max-w-[200px]">{brand.website}</span>
                          </a>
                        )}
                        {brand.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                            {brand.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Delete Button */}
                 <div className="flex items-center gap-2 ml-3">
  {/* Edit Button */}
  <button
    onClick={() => handleEdit(brand)}
    className="p-2 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
  >
    <Pencil size={18} />
  </button>

  {/* Delete Button */}
  <button
    onClick={() => handleDelete(brand._id)}
    disabled={deletingId === brand._id}
    className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
  >
    {deletingId === brand._id ? (
      <div className="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
    ) : (
      <Trash2 size={18} />
    )}
  </button>
</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}