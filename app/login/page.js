"use client";

import { useState, useEffect } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loader from "../component/Loader";


export default function Login() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  if (status === "authenticated") {
    if (session?.user?.role === "admin") {
      router.push("/admin");
      toast.success("Welcome back, Admin!");
      return;
    } else {
      router.push("/");
    }
  }
}, [status, session]);

  // ✅ Handle submit
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.email || !form.password) {
    toast.error("Please fill all fields");
    return;
  }

  setLoading(true);

  const res = await signIn("credentials", {
    email: form.email,
    password: form.password,
    redirect: false,
  });

  setLoading(false);

  // ❌ Wrong credentials
  if (res?.error) {
    toast.error("Invalid email or password");
    return;
  }
}

  // ✅ Wait a bit for session to update


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
            whileHover={{ y: loading ? 0 : -1 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-medium transition shadow-sm flex items-center justify-center gap-2
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#00e6ff] to-[#139aff] hover:from-[#139aff] hover:to-[#00e6ff]"
            }`}
          >
            {loading ? (
              <>
                <Loader />
              
              </>
            ) : (
              "Login"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}