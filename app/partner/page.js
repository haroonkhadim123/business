"use client";

import { motion } from "framer-motion";
import PartnerHero from "../component/partnerbanner";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Loader from "../component/Loader";

export default function PartnerPage() {
  const [form, setform] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    brand: '',
    businessType: '',
    branches: '',
    website: '',
    partnershipType: '',
    introduction: '',
    isConfirmed: false,
  });

  const [error, seterror] = useState({});
  const [loader, setloader] = useState(false);

  const handlechange = (e) => {
    const { name, value, type, checked } = e.target;
    setform((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    // Validation for ALL fields (now including City, Branches, Website)
    if (!form.companyName.trim()) newErrors.companyName = "Company name is required.";
    if (!form.contactPerson.trim()) newErrors.contactPerson = "Contact person is required.";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
    if (!form.email.trim()) newErrors.email = "Business email is required.";
    else if (!emailRegex.test(form.email.trim())) newErrors.email = "Please enter a valid email address.";

    if (!form.phone || form.phone.length < 6) newErrors.phone = "Valid phone number is required.";
    
    if (!form.country.trim()) newErrors.country = "Country is required.";
    if (!form.city.trim()) newErrors.city = "City is required.";                    // ← Added
    if (!form.brand) newErrors.brand = "Please select a brand.";
    if (!form.businessType) newErrors.businessType = "Please select business type.";
    
    if (!form.branches || form.branches === "") newErrors.branches = "Number of branches is required.";  // ← Added
    else if (isNaN(form.branches) || Number(form.branches) < 0) 
      newErrors.branches = "Please enter a valid number of branches.";

    if (!form.website.trim()) newErrors.website = "Website or social media link is required.";  // ← Added
    else if (!form.website.startsWith("http")) 
      newErrors.website = "Please enter a valid website URL (starting with http/https).";

    if (!form.partnershipType) newErrors.partnershipType = "Please select partnership type.";

    if (!form.introduction.trim()) newErrors.introduction = "Business introduction is required.";
    else if (form.introduction.trim().length < 20) 
      newErrors.introduction = "Introduction must be at least 20 characters long.";

    if (!form.isConfirmed) newErrors.isConfirmed = "You must confirm the declaration.";

    seterror(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setloader(true);

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Partnership application submitted successfully!");

        setform({
          companyName: "", contactPerson: "", email: "", phone: "", country: "", city: "",
          brand: "", businessType: "", branches: "", website: "", partnershipType: "",
          introduction: "", isConfirmed: false,
        });
        seterror({});
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setloader(false);
    }
  };

  return (
    <>
      <PartnerHero />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-gray-800 py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Hero + Cards remain unchanged */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-4xl mx-auto"
          >
            <div className="px-4 py-12 md:px-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Partnership Application
              </h2>
              <p className="text-gray-600 mb-10">
                Please provide accurate details to help us evaluate the best partnership opportunities.
              </p>

              <form onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {/* Left Column */}
                <div className="space-y-7">
                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="companyName" value={form.companyName} onChange={handlechange} placeholder="Your company name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm" />
                    {error.companyName && <p className="text-red-500 text-sm mt-1">{error.companyName}</p>}
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Contact Person <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="contactPerson" value={form.contactPerson} onChange={handlechange} placeholder="Full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm" />
                    {error.contactPerson && <p className="text-red-500 text-sm mt-1">{error.contactPerson}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input type="email" name="email" value={form.email} onChange={handlechange} placeholder="example@company.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm" />
                    {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <PhoneInput
                      country={"gb"}
                      value={form.phone}
                      onChange={(phone) => setform({ ...form, phone })}
                      containerClass="w-full"
                      inputClass="!w-full !pl-14 !p-6 !bg-white !text-gray-900 !border !border-gray-300 !rounded-xl focus:!ring-2 focus:!ring-[#00e6ff] !outline-none"
                      buttonClass="!border-none !bg-transparent"
                    />
                    {error.phone && <p className="text-red-500 text-sm mt-1">{error.phone}</p>}
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="country" value={form.country} onChange={handlechange} placeholder="e.g. Pakistan"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm" />
                    {error.country && <p className="text-red-500 text-sm mt-1">{error.country}</p>}
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-7">
                  {/* City - Now Required */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="city" 
                      value={form.city} 
                      onChange={handlechange} 
                      placeholder="e.g. Muzaffarabad"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm" 
                    />
                    {error.city && <p className="text-red-500 text-sm mt-1">{error.city}</p>}
                  </div>

                  {/* Brand */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Brand of Interest <span className="text-red-500">*</span>
                    </label>
                    <select name="brand" value={form.brand} onChange={handlechange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm bg-white">
                      <option value="">Select brand</option>
                      <option value="Zylliq">ZYLLIQ</option>
                    </select>
                    {error.brand && <p className="text-red-500 text-sm mt-1">{error.brand}</p>}
                  </div>

                  {/* Business Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Business Type <span className="text-red-500">*</span>
                    </label>
                    <select name="businessType" value={form.businessType} onChange={handlechange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm bg-white">
                      <option value="">Select business type</option>
                      <option value="distributor">Distributor</option>
                      <option value="wholesaler">Wholesaler</option>
                      <option value="retail">Retail Store</option>
                      <option value="supermarket">Supermarket / Hypermarket</option>
                      <option value="electronics">Electronics Store</option>
                      <option value="chain">Chain Store</option>
                      <option value="dealer">Dealer</option>
                      <option value="other">Other</option>
                    </select>
                    {error.businessType && <p className="text-red-500 text-sm mt-1">{error.businessType}</p>}
                  </div>

                  {/* Number of Branches - Now Required */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Number of Branches / Outlets <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="number" 
                      min="0" 
                      name="branches" 
                      value={form.branches} 
                      onChange={handlechange} 
                      placeholder="e.g. 5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm" 
                    />
                    {error.branches && <p className="text-red-500 text-sm mt-1">{error.branches}</p>}
                  </div>

                  {/* Website - Now Required */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Website / Primary Social Media <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="url" 
                      name="website" 
                      value={form.website} 
                      onChange={handlechange} 
                      placeholder="https://www.company.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm" 
                    />
                    {error.website && <p className="text-red-500 text-sm mt-1">{error.website}</p>}
                  </div>
                </div>

                {/* Full Width Fields */}
                <div className="md:col-span-2 space-y-7">
                  {/* Partnership Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Partnership Type(s) of Interest <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {["Wholesale", "Dealership", "Offline Store Shelves"].map((type) => (
                        <label key={type} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-[#00e6ff] transition group">
                          <input
                            type="radio"
                            name="partnershipType"
                            value={type}
                            checked={form.partnershipType === type}
                            onChange={handlechange}
                            className="h-5 w-5 accent-[#00e6ff]"
                          />
                          <span className="ml-3 text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                    {error.partnershipType && <p className="text-red-500 text-sm mt-1">{error.partnershipType}</p>}
                  </div>

                  {/* Introduction */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Business Introduction <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      name="introduction"
                      value={form.introduction}
                      onChange={handlechange}
                      placeholder="Please tell us about your company, current operations, years in business..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm resize-y min-h-[120px]"
                    />
                    {error.introduction && <p className="text-red-500 text-sm mt-1">{error.introduction}</p>}
                  </div>

                  {/* Checkbox */}
                  <label className="flex items-start gap-3 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      name="isConfirmed"
                      checked={form.isConfirmed}
                      onChange={handlechange}
                      className="mt-1 h-5 w-5 accent-[#00e6ff]"
                    />
                    <span>
                      I confirm that the information provided is accurate and complete. I agree to be contacted by the team regarding this partnership application and accept the{" "}
                      <Link href="/privacy" className="text-[#00e6ff] hover:underline">privacy policy</Link>.
                    </span>
                  </label>
                  {error.isConfirmed && <p className="text-red-500 text-sm mt-1">{error.isConfirmed}</p>}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loader}
                    className={`w-full py-4 font-semibold rounded-xl shadow-lg flex items-center justify-center transition-all duration-200 
                      ${loader ? "bg-gray-400 text-gray-200 cursor-not-allowed" : "bg-gradient-to-r from-[#00e6ff] to-[#139aff] text-white hover:from-[#139aff] hover:to-[#00e6ff]"}`}
                  >
                    {loader ? <Loader /> : "Submit Partnership Application"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}