"use client";

import { useState, useEffect } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn, Key } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loader from "../component/Loader";

export default function Login() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [form, setForm] = useState({ email: "", password: "" });
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState("login");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  // Redirect if already logged in
  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user?.role === "admin") {
        router.push("/admin");
        toast.success("Welcome back, Admin!");
      } else {
        router.push("/");
        toast.success("Welcome back!");
      }
    }
  }, [status, session, router]);

  // Timer for OTP expiry
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Handle login form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("OTP sent to your email!");
        setUserEmail(data.email);
        setUserRole(data.role);
        setStep("otp");
        setTimeLeft(600); // 10 minutes
      } else {
        toast.error(data.error || "Invalid credentials");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    if (!otp || otp.length !== 6) {
      toast.error("Please enter valid 6-digit OTP");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          otp: otp,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("OTP verified successfully!");
        
        // Sign in with credentials
        const signInRes = await signIn("credentials", {
          email: userEmail,
          password: form.password,
          redirect: false,
        });

        if (signInRes?.error) {
          toast.error("Login failed. Please try again.");
        } else {
          // Redirect based on role
          if (userRole === "admin") {
            router.push("/admin");
            toast.success("Welcome back, Admin!");
          } else {
            router.push("/");
            toast.success("Welcome back!");
          }
        }
      } else {
        toast.error(data.error || "Invalid OTP");
        if (data.error?.includes("Too many failed attempts")) {
          setStep("login");
          setOtp("");
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  // Handle OTP verification

  // Handle resend OTP
  const handleResendOTP = async () => {
    if (timeLeft > 0) {
      toast.error(`Please wait ${Math.floor(timeLeft / 60)}:${timeLeft % 60} before requesting again`);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("New OTP sent!");
        setTimeLeft(600);
      } else {
        toast.error(data.error || "Failed to resend OTP");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00e6ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#139aff]/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-2xl blur opacity-30"></div>
        
        <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-[#00e6ff] to-[#139aff] rounded-2xl flex items-center justify-center shadow-lg">
              {step === "login" ? <LogIn className="w-8 h-8 text-white" /> : <Key className="w-8 h-8 text-white" />}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === "login" ? (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 text-center">Welcome Back</h2>
                <p className="text-center text-gray-500 mt-2 text-sm">Login to your HOORAB GROUP account</p>

                <div className="flex items-center gap-3 my-8">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Secure Access</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      placeholder="Email address"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full text-gray-600 pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#139aff] focus:ring-4 focus:ring-[#139aff]/10 bg-gray-50"
                    />
                  </div>

                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Lock size={18} />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      required
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      className="w-full text-gray-600 pl-10 pr-10 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00e6ff] focus:ring-4 focus:ring-[#00e6ff]/10 bg-gray-50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3.5 rounded-xl text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#00e6ff] to-[#139aff] hover:shadow-lg"
                    }`}
                  >
                    {loading ? <><Loader /><span>Sending OTP...</span></> : <><LogIn size={18} /><span>Continue</span></>}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="otp"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 text-center">Verify OTP</h2>
                <p className="text-center text-gray-500 mt-2 text-sm">Enter 6-digit code sent to {userEmail}</p>

                <div className="flex items-center gap-3 my-8">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Two-Factor Authentication</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <form onSubmit={handleVerifyOTP} className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      maxLength="6"
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
                      className="w-full px-4 py-3.5 rounded-xl text-gray-600 border border-gray-200 focus:outline-none focus:border-[#139aff] text-center text-2xl tracking-widest bg-gray-50"
                    />
                  </div>

                  <div className="text-center text-sm text-gray-500">
                    {timeLeft > 0 ? (
                      <span>OTP expires in: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</span>
                    ) : (
                      <span className="text-red-500">OTP has expired</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !otp || otp.length !== 6}
                    className={`w-full py-3.5 rounded-xl text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                      loading || !otp || otp.length !== 6
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#00e6ff] to-[#139aff] hover:shadow-lg"
                    }`}
                  >
                    {loading ? <><Loader /><span>Verifying...</span></> : <><Key size={18} /><span>Verify & Login</span></>}
                  </button>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep("login")}
                      className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      disabled={loading || timeLeft > 0}
                      className={`flex-1 py-2 rounded-lg transition-all duration-200 ${
                        loading || timeLeft > 0
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "text-[#139aff] hover:bg-blue-50"
                      }`}
                    >
                      Resend OTP
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-center text-gray-400 text-xs mt-8">
            Secure login with 2FA • HOORAB GROUP Admin Portal
          </p>
        </div>
      </motion.div>
    </div>
  );
}