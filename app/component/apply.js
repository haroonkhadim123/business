"use client";

import { User, Mail, Phone, Briefcase, FileText, Upload } from "lucide-react";
import Link from "next/link";

export default function ApplyPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4 md:px-6">

      {/* Small Top Header */}
      <div className="max-w-3xl mt-5 mx-auto mb-10">
        <Link
          href="/career"
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          ← Back to Careers
        </Link>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-4 md:p-10 rounded-3xl shadow-lg">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Apply Now
        </h1>

        <p className="text-center text-gray-600 mt-3 mb-10">
          Fill in your details and submit your application.
        </p>

        {/* Form */}
        <form className="space-y-6">

          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-4 top-4 text-gray-400" size={18} />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Position */}
          <div className="relative">
            <Briefcase className="absolute left-4 top-4 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Position Applying For"
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <FileText className="absolute left-4 top-4 text-gray-400" size={18} />
            <textarea
              placeholder="Cover Letter / Message"
              rows={4}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Resume Upload */}
          <div className="border border-dashed border-gray-300 rounded-xl p-6 text-center">
            <Upload className="mx-auto text-gray-400 mb-2" size={28} />
            <p className="text-sm text-gray-500 mb-2">
              Upload your Resume (PDF, DOC)
            </p>
            <input
              type="file"
              className="w-full text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition"
          >
            Submit Application
          </button>

        </form>
      </div>
    </section>
  );
}