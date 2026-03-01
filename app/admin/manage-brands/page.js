"use client";

import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function ManageBrands() {
  const [brands, setBrands] = useState([
    {
      id: 1,
      name: "Hoorab Fashion",
      website: "https://hoorabfashion.com",
  
    },
    {
      id: 2,
      name: "Hoorab Electronics",
      website: "https://hoorabelectronics.com",
  
    },
        {
      id: 3,
      name: "Hoorab Fashion",
      website: "https://hoorabfashion.com",
  
    },
    {
      id: 4,
      name: "Hoorab Electronics",
      website: "https://hoorabelectronics.com",
  
    },
        {
      id: 5,
      name: "Hoorab Fashion",
      website: "https://hoorabfashion.com",
  
    },
    {
      id: 6,
      name: "Hoorab Electronics",
      website: "https://hoorabelectronics.com",
  
    },
           {
      id: 7,
      name: "Hoorab Fashion",
      website: "https://hoorabfashion.com",
  
    },
    {
      id: 8,
      name: "Hoorab Electronics",
      website: "https://hoorabelectronics.com",
  
    },
       {
      id: 16,
      name: "Hoorab Electronics",
      website: "https://hoorabelectronics.com",
  
    },
        {
      id: 17,
      name: "Hoorab Fashion",
      website: "https://hoorabfashion.com",
  
    },
    {
      id: 18,
      name: "Hoorab Electronics",
      website: "https://hoorabelectronics.com",
  
    },
           {
      id: 19,
      name: "Hoorab Fashion",
      website: "https://hoorabfashion.com",
  
    },
    {
      id: 20,
      name: "Hoorab Electronics",
      website: "https://hoorabelectronics.com",
  
    },
    
  ]);

  const handleDelete = (id) => {
    setBrands(brands.filter((brand) => brand.id !== id));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 ">
      <h1 className="text-3xl font-bold mb-8">Manage Brands</h1>

      <div className="grid md:grid-cols-2 gap-6 h:[70vh] md:h-[60vh] hide-scrollbar p-2  overflow-y-auto  ">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-between"
          >
            {/* Left Section */}
            <div className="flex items-center gap-4 ">
         

              <div>
                <h2 className="text-lg font-semibold">{brand.name}</h2>
                <p className="text-sm text-gray-500">{brand.website}</p>

       
              </div>
            </div>

            {/* Right Section */}
            <div className="flex gap-4">
          

              <button
                onClick={() => handleDelete(brand.id)}
                className="text-red-500"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {brands.length === 0 && (
        <p className="text-gray-500 mt-8">No brands available.</p>
      )}
    </div>
  );
}