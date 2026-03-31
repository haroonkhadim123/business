"use client";

import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";


export default function ManageBrands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loader state

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch("/api/brand", { cache: "no-store" });
        const data = await res.json();
        if (res.ok) setBrands(data.applybrand);
      } catch (error) {
        toast.error("Failed to fetch brands");
      } finally {
        setLoading(false); // ✅ stop loader
      }
    };
    fetchBrands();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this brand?")) return;

    setBrands((prev) => prev.filter((brand) => brand._id !== id));

    try {
      const res = await fetch("/api/brand", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (data.success) toast.success("Brand deleted");
      else toast.error("Delete failed");
    } catch (error) {
      toast.error("Error deleting brand");
    }
  };

  return (
    <div className="w-full md:mt-12 max-w-4xl mx-auto p-1 lg:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Manage Brands
      </h1>

      {/* ✅ Loader */}
       {loading ? (
          <div className="flex justify-center items-center h-60 ">
             <div className="flex items-center justify-center ">
      <div className="h-16 w-16 animate-spin rounded-full border-4 dark:border-t-white dark:border-gray-500 border-gray-300 border-t-black" />
    </div>
        </div>
      ) : brands.length === 0 ? (
        /* ✅ No Data */
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          No brands available.
        </p>
      ) : (
        /* ✅ Data UI */
        <div className="grid md:grid-cols-2 gap-6 h-auto">
          {brands.map((brand, index) => (
            <motion.div
              key={brand._id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div>
                  <h2 className="text-lg uppercase font-semibold text-gray-900 dark:text-gray-100">
                    {brand.brandname}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {brand.website}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => handleDelete(brand._id)}
                  className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}