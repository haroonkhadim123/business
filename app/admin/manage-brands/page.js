"use client";

import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function ManageBrands() {
  const [brands, setBrands] = useState([]);
    useEffect(() => {
      const fetchJobs = async () => {
        const res = await fetch("/api/brand", { cache: "no-store" });
        const data = await res.json();
        if (res.ok) {
          setBrands(data.applybrand);
        }
      };
      fetchJobs();
    }, []);

    const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this application?")) return;
      setBrands((prev) => prev.filter((brand) => brand._id !== id));

    try {
      const res = await fetch("/api/brand", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (data.success) {
      
        toast.success("Brand deleted");
      } else {
        toast.error("Delete failed");
      }
    } catch (error) {
      toast.error("Error deleting brand");
    }
  };

  return (
    <div className=" w-full md:mt-12 max-w-4xl mx-auto p-1  lg:p-8">
      <h1 className="text-3xl font-bold mb-8">Manage Brands</h1>

      <div className="grid md:grid-cols-2 gap-6 h-[12vh]  hide-scrollbar p-2  overflow-y-auto  ">
        {brands.map((brand, index) => (
          <motion.div
            key={brand._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className=" bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-200 flex items-center justify-between"
          >
            {/* Left Section */}
            <div className="flex items-center gap-4 ">
         

              <div>
                <h2 className="text-lg uppercase font-semibold">{brand.brandname}</h2>
                <p className="text-sm text-gray-500">{brand.website}</p>

       
              </div>
            </div>

            {/* Right Section */}
            <div className="flex gap-4">
          

              <button
                onClick={() => handleDelete(brand._id)}
                className="text-red-500"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {brands.length === 0 && (
        <p className="text-gray-500 ">No brands available.</p>
      )}
    </div>
  );
}
