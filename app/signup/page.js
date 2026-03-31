"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Loader from "../component/Loader";

export default function SignUp() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response= await fetch('/api/usersignup/',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(form)
      })
      const data=await response.json();
      if(data.success){
        toast.success("User signed up successfully!");
        setForm({ email: "", password: "" });
      }else{
        toast.error(data.message || "Failed to sign up. Please try again.");
      }
      
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong. Please try again.");
      
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
      >
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-1">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Sign up to get started
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div className="relative group">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#139aff]" size={18} />
            <input
              type="email"
              placeholder="Email address"
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 
              focus:outline-none focus:border-[#139aff] focus:ring-2 focus:ring-[#139aff]/20
              placeholder:text-gray-400 text-gray-800 transition"
            />
          </div>

          {/* Password */}
          <div className="relative group">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#00e6ff]" size={18} />
            <input
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 
              focus:outline-none focus:border-[#00e6ff] focus:ring-2 focus:ring-[#00e6ff]/20
              placeholder:text-gray-400 text-gray-800 transition"
            />
          </div>

          {/* Button */}
     <motion.button
  whileHover={!loading ? { y: -1 } : {}}
  whileTap={!loading ? { scale: 0.98 } : {}}
  type="submit"
  disabled={loading}
  className={`w-full py-3 rounded-lg text-white font-medium transition shadow-sm
  ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-gradient-to-r from-[#00e6ff] to-[#139aff] hover:from-[#139aff] hover:to-[#00e6ff]"
  }`}
>
  {loading ? <Loader/> : "Sign Up"}
</motion.button>
        </form>

        {/* Divider */}
     

     
      </motion.div>
    </div>
  );
}