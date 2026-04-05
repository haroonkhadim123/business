"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Loader from "../component/Loader";

export default function SignUp() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if (!form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }
    
    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch('/api/usersignup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (data.success) {
        toast.success("User signed up successfully!");
        setForm({ email: "", password: "" });
      } else {
        toast.error(data.message || "Failed to sign up. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4">
      
      {/* Animated Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00e6ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#139aff]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="w-full max-w-md relative"
      >
        {/* Gradient Border Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-2xl blur opacity-30"></div>
        
        <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          
          {/* Logo / Brand Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-2xl flex items-center justify-center shadow-lg">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Create Account
            </h2>
            <p className="text-center text-gray-500 mt-2 text-sm">
              Sign up to get started with HOORAB GROUP
            </p>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-8">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400 uppercase tracking-wider">New User</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#139aff] transition-colors duration-200">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="Email address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 
                focus:outline-none focus:border-[#139aff] focus:ring-4 focus:ring-[#139aff]/10
                placeholder:text-gray-400 text-gray-800 transition-all duration-200
                bg-gray-50 hover:bg-white"
              />
            </motion.div>

            {/* Password */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#00e6ff] transition-colors duration-200">
                <Lock size={18} />
              </div>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password (min. 6 characters)"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full pl-10 pr-10 py-3.5 rounded-xl border border-gray-200 
                focus:outline-none focus:border-[#00e6ff] focus:ring-4 focus:ring-[#00e6ff]/10
                placeholder:text-gray-400 text-gray-800 transition-all duration-200
                bg-gray-50 hover:bg-white"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#00e6ff] transition-colors duration-200"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </motion.div>

            {/* Password Hint */}
            <p className="text-xs text-gray-400 -mt-2">
              Use at least 6 characters for a strong password
            </p>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 rounded-xl text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#00e6ff] to-[#139aff] hover:shadow-lg hover:shadow-[#139aff]/25"
              }`}
            >
              {loading ? (
                <>
                  <Loader />
                  <span>Creating account...</span>
                </>
              ) : (
                <>
                  <UserPlus size={18} />
                  <span>Sign Up</span>
                </>
              )}
            </motion.button>
          </form>

   

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-400 text-xs mt-8"
          >
            Secure sign up • HOORAB GROUP Portal
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}