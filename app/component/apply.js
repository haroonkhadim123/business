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
    originalFileName: "" // Store original file name
  });
  const [uploading, setUploading] = useState(false);
  const [loader, setloader] = useState(false);
  const [error, seterror] = useState({ name: "", email: "", phoneNumber: "", position: "", coverLetter: "", cv: "" });

  const handlechange = (e) => setform({ ...form, [e.target.name]: e.target.value });

const handlesubmit = async (e) => {
  e.preventDefault();
  let newErrors = {};
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!form.name.trim()) newErrors.name = "Name is required.";
  else if (!nameRegex.test(form.name.trim())) newErrors.name = "Please enter a valid name (letters only)";
  else if (form.name.trim().length < 3) newErrors.name = "Name must be at least 3 characters long.";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
  if (!form.email.trim()) newErrors.email = "Email is required.";
  else if (!emailRegex.test(form.email.trim())) newErrors.email = "Please enter a valid email address.";
  const phoneRegex = /^\+[1-9]\d{1,14}$/;
  if (!form.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required.";
  else if (!phoneRegex.test("+" + form.phoneNumber.replace(/\D/g, ""))) newErrors.phoneNumber = "Please enter a valid phone number with country code.";
  if (!form.position.trim()) newErrors.position = "Position is required.";
  if (!form.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required.";
  else if (form.coverLetter.trim().length < 10) newErrors.coverLetter = "Cover letter must be at least 10 characters long.";
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
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phoneNumber: form.phoneNumber,
        position: form.position,
        coverLetter: form.coverLetter,
        cv: form.cv,
        originalFileName: form.originalFileName
      }) 
    });
    const data = await response.json();
    
    if (data.error) {
      toast.error("Error in submitting your application. Please try again.");
      setloader(false); // Only stop loader on error
    } else {
      // ✅ Redirect to success page WITHOUT clearing form
      // The component will unmount, so no need to clear form here
      router.push("/success");
      return; // ✅ IMPORTANT: Stop further execution
    }
  } catch (err) {
    toast.error("Something went wrong while sending your application");
    setloader(false);
  }
  // No finally block needed here
};
const handleCVUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  
  const allowedExtensions = ["pdf", "doc", "docx"];
  const fileExt = file.name.split(".").pop().toLowerCase();
  if (!allowedExtensions.includes(fileExt)) {
    seterror((prev) => ({ ...prev, cv: "Only PDF, DOC or DOCX files are allowed." }));
    return;
  } else seterror((prev) => ({ ...prev, cv: "" }));

  setUploading(true);
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "resume_upload");
  formData.append("folder", "nextjs_products");
  // ✅ Add resource_type as 'raw' for PDFs and documents
  formData.append("resource_type", "raw");

  try {
    const res = await fetch("https://api.cloudinary.com/v1_1/dyr4xwyhf/raw/upload", { 
      method: "POST", 
      body: formData 
    });
    
    if (!res.ok) {
      const errorData = await res.json();
      console.error("Cloudinary Error:", errorData);
      throw new Error(errorData.error?.message || "Upload failed");
    }
    
    const data = await res.json();
    
    // ✅ For raw uploads, the URL format is different
    const secureUrl = data.secure_url;
    
    setform((prev) => ({ 
      ...prev, 
      cv: secureUrl,
      originalFileName: file.name
    }));
    
    toast.success("CV uploaded successfully!");
  } catch (error) {
    console.error("Upload error:", error);
    toast.error("CV upload failed. Please try again.");
  } finally {
    setUploading(false);
  }
};
  const pageFade = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } };
  const cardAnimation = { hidden: { opacity: 0, y: 60, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: "easeOut" } } };
  const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <motion.section variants={pageFade} initial="hidden" animate="visible" className="min-h-screen bg-gray-50 py-32 px-4 md:px-6 overflow-hidden">
      <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mt-5 mx-auto mb-10">
        
      </motion.div>

      <motion.div variants={cardAnimation} initial="hidden" animate="visible" className="max-w-3xl mx-auto bg-white p-4 md:p-10 rounded-3xl shadow-xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900"
        >
          Apply{" "}
          <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
            Now
          </span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-center text-gray-600 mt-3 mb-10">
          Fill in your details and submit your application.
        </motion.p>

        <motion.form variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6" onSubmit={handlesubmit}>

          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="relative">
              <User className="absolute left-4 top-4 text-[#139aff]" size={18} />
              <input type="text" placeholder="Full Name" onChange={handlechange} name="name" value={form.name} className="w-full pl-12 pr-4 py-4 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-[#139aff] focus:outline-none transition" />
              {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="relative">
              <Mail className="absolute left-4 top-4 text-[#139aff]" size={18} />
              <input type="email" placeholder="Email Address" onChange={handlechange} name="email" value={form.email} className="w-full pl-12 pr-4 py-4 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-[#139aff] focus:outline-none transition" />
              {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
            </motion.div>
          </div>

          {/* Phone */}
          <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="relative">
            <Phone className="absolute left-4 top-4 text-[#139aff]" size={18} />
            <PhoneInput 
              country={"gb"} 
              value={form.phoneNumber} 
              onChange={(phoneNumber) => setform({ ...form, phoneNumber })} 
              containerClass="w-full" 
              inputClass="!w-full !pl-14 !p-6 !bg-white !text-gray-900 !border !border-gray-300 !rounded-xl focus:!ring-2 focus:!ring-[#139aff] !outline-none" 
              buttonClass="!border-none !bg-transparent" 
            />
            {error.phoneNumber && <p className="text-red-500 text-sm mt-1">{error.phoneNumber}</p>}
          </motion.div>

          {/* Position */}
          <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="relative">
            <Briefcase className="absolute left-4 top-4 text-[#139aff]" size={18} />
            <input type="text" placeholder="Position Applying For" name="position" value={form.position} onChange={handlechange} className="w-full pl-12 pr-4 py-4 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-[#139aff] focus:outline-none transition" />
            {error.position && <p className="text-red-500 text-sm mt-1">{error.position}</p>}
          </motion.div>

          {/* Cover Letter */}
          <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="relative">
            <FileText className="absolute left-4 top-4 text-[#139aff]" size={18} />
            <textarea placeholder="Cover Letter / Message" rows={4} name="coverLetter" value={form.coverLetter} onChange={handlechange} className="w-full pl-12 pr-4 py-4 bg-white text-gray-900 border border-gray-300 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-[#139aff] focus:outline-none transition" />
            {error.coverLetter && <p className="text-red-500 text-sm mt-1">{error.coverLetter}</p>}
          </motion.div>

          {/* Professional CV Upload with Original Filename Display */}
          <motion.div 
            variants={fadeUp} 
            whileHover={{ scale: 1.02 }} 
            className="border-2 border-dashed border-gray-300 hover:border-[#00e6ff] rounded-2xl p-6 md:p-8 text-center transition-all duration-300 bg-gray-50"
          >
            <div className="flex flex-col items-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-[#00e6ff]/10 rounded-2xl flex items-center justify-center mb-5">
                <Upload className="text-[#00e6ff]" size={34} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-1">Attach Your Resume</h3>
              <p className="text-gray-500 text-sm mb-6 px-4">
                PDF, DOC, or DOCX files only • Maximum 10MB
              </p>

              {!form.cv ? (
                // Upload Button
                <label className="cursor-pointer w-full max-w-xs">
                  <div className="px-8 py-4 bg-white hover:bg-[#00e6ff]/5 border-2 border-gray-300 hover:border-[#00e6ff] rounded-2xl font-medium text-gray-700 flex items-center justify-center gap-3 transition-all shadow-sm">
                    <Upload size={22} />
                    <span>Choose Resume File</span>
                  </div>
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx" 
                    onChange={handleCVUpload} 
                    className="hidden" 
                  />
                </label>
              ) : (
                // After Upload - Shows Original Filename
                <div className="w-full max-w-md mx-auto bg-white border border-green-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* File Icon */}
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="text-green-600" size={26} />
                    </div>

                    {/* File Name - Shows Original Filename */}
                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <p className="font-medium text-gray-800 truncate">
                        {form.originalFileName || "Resume File"}
                      </p>
                      <p className="text-green-600 text-sm font-medium">✓ Uploaded successfully</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                      <Link
                        href={form.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 text-sm bg-[#00e6ff] hover:bg-[#00d4e6] text-white font-medium rounded-xl transition flex items-center justify-center gap-2 shadow-sm active:scale-95"
                      >
                        👁 View CV
                      </Link>
                      
                      <button
                        type="button"
                        onClick={() => {
                          setform((prev) => ({ 
                            ...prev, 
                            cv: "", 
                            originalFileName: "" 
                          }));
                          seterror((prev) => ({ ...prev, cv: "" }));
                        }}
                        className="px-6 py-3 text-sm border border-red-200 text-red-600 hover:bg-red-50 rounded-xl transition active:scale-95"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Error */}
              {error.cv && (
                <p className="text-red-500 text-sm mt-4 font-medium px-4">{error.cv}</p>
              )}

              {/* Uploading */}
              {uploading && (
                <p className="text-[#00e6ff] text-sm mt-3 animate-pulse">Uploading your file...</p>
              )}
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button 
            type="submit" 
            disabled={uploading || loader} 
            whileHover={{ scale: uploading || loader ? 1 : 1.05 }} 
            whileTap={{ scale: uploading || loader ? 1 : 0.95 }}
            className={`w-full py-4 font-semibold rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-all duration-200 ${uploading || loader ? "bg-gray-400 text-gray-200 cursor-not-allowed" : ""}`}
            style={uploading || loader ? {} : { background: "linear-gradient(90deg, #00e6ff 0%, #139aff 100%)", color: "white" }}
          >
            {uploading ? "Uploading CV..." : loader ? <Loader /> : "Submit Application"}
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}