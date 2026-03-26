"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, Briefcase, FileText, Upload } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";

export default function ApplyPage() {
  const router = useRouter();
  const [form, setform] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    position: "",
    coverLetter: "",
    cv: "",
  });

  const [uploading, setUploading] = useState(false);
  const [loader, setloader] = useState(false);
  const [error, seterror] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    position: "",
    coverLetter: "",
    cv: "",
  });

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    // --- Validation logic (same as your code) ---
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!form.name.trim()) newErrors.name = "Name is required.";
    else if (!nameRegex.test(form.name.trim())) newErrors.name = "Please enter a valid name (letters only)";
    else if (form.name.trim().length < 3) newErrors.name = "Name must be at least 3 characters long.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(form.email.trim())) newErrors.email = "Please enter a valid email address.";

    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!form.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required.";
    else if (!phoneRegex.test("+" + form.phoneNumber.replace(/\D/g, "")))
      newErrors.phoneNumber = "Please enter a valid phone number with country code.";

    if (!form.position.trim()) newErrors.position = "Position is required.";
    if (!form.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required.";
    else if (form.coverLetter.trim().length < 10)
      newErrors.coverLetter = "Cover letter must be at least 10 characters long.";

    if (!form.cv.trim()) newErrors.cv = "Please upload your CV.";
    else {
      const allowedExtensions = ["pdf", "doc", "docx"];
      const ext = form.cv.split(".").pop().toLowerCase();
      if (!allowedExtensions.includes(ext)) newErrors.cv = "Only PDF, DOC or DOCX files are allowed.";
    }

    seterror(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setloader(true);
    try {
      const response = await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data.error) toast.error("Error in submitting your application. Please try again.");
      else {
        router.push("/success");
        setform({ name: "", email: "", phoneNumber: "", position: "", coverLetter: "", cv: "" });
        seterror({});
      }
    } catch (err) {
      toast.error("Something went wrong while sending your application");
    } finally {
      setloader(false);
    }
  };

  const handleCVUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedExtensions = ["pdf", "doc", "docx"];
    const fileExt = file.name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(fileExt)) {
      seterror((prev) => ({ ...prev, cv: "Only PDF, DOC or DOCX files are allowed." }));
      return;
    } else {
      seterror((prev) => ({ ...prev, cv: "" }));
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_upload");
    formData.append("folder", "nextjs_products");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dyr4xwyhf/raw/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setform((prev) => ({ ...prev, cv: data.secure_url }));
      toast.success("File uploaded successfully!");
    } catch {
      toast.error("CV upload failed");
    } finally {
      setUploading(false);
    }
  };

  const pageFade = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } };
  const cardAnimation = { hidden: { opacity: 0, y: 60, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: "easeOut" } } };
  const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <motion.section
      variants={pageFade}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gray-50 py-20 px-4 md:px-6 overflow-hidden"
    >
      <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mt-5 mx-auto mb-10">
        <Link href="/career" className="text-blue-600 text-sm font-medium hover:underline">
          ← Back to Careers
        </Link>
      </motion.div>

      <motion.div variants={cardAnimation} initial="hidden" animate="visible" className="max-w-3xl mx-auto bg-white p-4 md:p-10 rounded-3xl shadow-xl">
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Apply Now
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-center text-gray-600 mt-3 mb-10">
          Fill in your details and submit your application.
        </motion.p>

        <motion.form variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6" onSubmit={handlesubmit}>
          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="relative">
              <User className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Full Name"
                onChange={handlechange}
                name="name"
                value={form.name}
                className="w-full pl-12 pr-4 py-4 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition placeholder-dark"
              />
              {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="relative">
              <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Email Address"
                onChange={handlechange}
                name="email"
                value={form.email}
                className="w-full pl-12 pr-4 py-4 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition placeholder-dark"
              />
              {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
            </motion.div>
          </div>

          {/* Phone */}
          <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="relative">
            <Phone className="absolute left-4 top-4 text-gray-400" size={18} />
            <PhoneInput
              country={"gb"}
              value={form.phoneNumber}
              onChange={(phoneNumber) => setform({ ...form, phoneNumber })}
              containerClass="w-full"
              inputClass="!w-full !pl-14 !p-6 !bg-white !text-gray-900 !border !border-gray-300 !rounded-xl focus:!ring-2 focus:!ring-blue-500 !outline-none placeholder-dark"
              buttonClass="!border-none !bg-transparent"
            />
            {error.phoneNumber && <p className="text-red-500 text-sm mt-1">{error.phoneNumber}</p>}
          </motion.div>

          {/* Position */}
          <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="relative">
            <Briefcase className="absolute left-4 top-4 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Position Applying For"
              name="position"
              value={form.position}
              onChange={handlechange}
              className="w-full pl-12 pr-4 py-4 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition placeholder-dark"
            />
            {error.position && <p className="text-red-500 text-sm mt-1">{error.position}</p>}
          </motion.div>

          {/* Cover Letter */}
          <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="relative">
            <FileText className="absolute left-4 top-4 text-gray-400" size={18} />
            <textarea
              placeholder="Cover Letter / Message"
              rows={4}
              name="coverLetter"
              value={form.coverLetter}
              onChange={handlechange}
              className="w-full pl-12 pr-4 py-4 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition placeholder-dark"
            />
            {error.coverLetter && <p className="text-red-500 text-sm mt-1">{error.coverLetter}</p>}
          </motion.div>

          {/* CV Upload */}
          <motion.div variants={fadeUp} whileHover={{ scale: 1.02 }} className="border border-dashed border-gray-300 rounded-xl p-6 text-center transition">
            <Upload className="mx-auto text-gray-400 mb-2" size={28} />
            <p className="text-sm text-gray-500 mb-2">Upload your Resume (PDF, DOC, DOCX)</p>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleCVUpload} className="w-full text-gray-700" />
            {error.cv && <p className="text-red-500 text-sm mt-1">{error.cv}</p>}
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={uploading || loader}
            whileHover={{ scale: uploading || loader ? 1 : 1.05 }}
            whileTap={{ scale: uploading || loader ? 1 : 0.95 }}
            className={`w-full py-4 font-semibold rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-all duration-200
              ${uploading || loader
                ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              }`}
          >
            {uploading ? "Uploading CV..." : loader ? <Loader /> : "Submit Application"}
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}