"use client";


import { motion } from "framer-motion";
import { Tag, Globe, FileText } from "lucide-react";
import { useState } from "react";
import Loader from "@/app/component/Loader";
import toast from "react-hot-toast";

export default function AddBrand() {
  const [form, setform] = useState({brandname:'',website:'',description:''});
  const [loader, setloader] = useState(false)
  const [errors, setErrors] = useState({});
  const validate = () => {
  let newErrors = {};

  // Brand Name
  if (!form.brandname.trim()) {
    newErrors.brandname = "Brand name is required";
  } else if (form.brandname.length < 2) {
    newErrors.brandname = "Brand name must be at least 2 characters";
  }

  // Website
  const urlRegex = /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/;
  if (!form.website.trim()) {
    newErrors.website = "Website is required";
  } else if (!urlRegex.test(form.website)) {
    newErrors.website = "Enter a valid URL";
  }

  // Description
  if (!form.description.trim()) {
    newErrors.description = "Description is required";
  } else if (form.description.length < 10) {
    newErrors.description = "Description must be at least 10 characters";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handlechange=(e)=>{
    setform({...form,[e.target.name]:e.target.value});
  }


  const handlesubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return; // ❗ stop if error

  setloader(true);

  try {
    const response = await fetch("/api/brand", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (data.error) {
      toast.error(data.message);
    } else {
      toast.success(data.message);
      setform({ brandname: "", website: "", description: "" });
      setErrors({});
    }
  } catch (error) {
    toast.error("Something went wrong while adding new brand");
  } finally {
    setloader(false);
  }
};


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-2xl md:mt-14 p-4 md:p-10  rounded-lg max-w-3xl mx-auto"
    >
      <h1 className="text-2xl font-semibold mb-8 text-gray-800">
        Add New Brand
      </h1>

      <form onSubmit={handlesubmit} className="space-y-3">

        {/* Brand Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Brand Name</label>
          <div className="relative">
            <Tag size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              onChange={handlechange}
              name="brandname"
              value={form.brandname}
              autoComplete="off"
              placeholder="Enter brand name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            {errors.brandname && (
  <p className="text-red-500 text-sm">{errors.brandname}</p>
)}
          </div>
        </div>

        {/* Website URL */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600 mt-2">Website URL</label>
          <div className="relative">
            <Globe size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="url"
              placeholder="https://brand.com"
                onChange={handlechange}
              name="website"
              value={form.website}
              autoComplete="off"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
          {errors.website && (
  <p className="text-red-500 text-sm">{errors.website}</p>
)}
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600 mt-2">Description</label>
          <div className="relative">
            <FileText size={18} className="absolute left-3 top-4 text-gray-400" />
            <textarea
              rows="5"
                onChange={handlechange}
              name="description"
              value={form.description}
              autoComplete="off"
              placeholder="Write short brand description..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
            />
          </div>
          {errors.description && (
  <p className="text-red-500 text-sm">{errors.description}</p>
)}
        </div>

 

        <motion.button
          whileHover={!loader ? { scale: 1.03 } : {}}
          whileTap={!loader ? { scale: 0.97 } : {}}
          type="submit"
          disabled={loader}
          className={`w-full py-3 rounded-xl font-medium transition
            ${loader ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
        >
          {loader ? <Loader /> : "Add Brand"}
        </motion.button>

      </form>
    </motion.div>
  );
}