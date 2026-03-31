"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
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
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Login to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

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
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    required
    value={form.password}
    onChange={(e) =>
      setForm({ ...form, password: e.target.value })
    }
    className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 
    focus:outline-none focus:border-[#00e6ff] focus:ring-2 focus:ring-[#00e6ff]/20
    placeholder:text-gray-400 text-gray-800 transition"
  />

  {/* 👁 Eye Icon */}
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#00e6ff]"
  >
    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
  </button>
</div>

       

          {/* Button */}
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 rounded-lg text-white font-medium 
            bg-[#139aff] hover:bg-[#0f8ae6] transition shadow-sm"
          >
            Login
          </motion.button>
        </form>

     

   
      </motion.div>
    </div>
  );
}