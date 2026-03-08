"use client";

import { motion } from "framer-motion";
import PartnerHero from "../component/partnerbanner";

export default function PartnerPage() {
  const cards = [
    {
      title: "Wholesale",
      text: "Ideal for bulk buyers, importers, and large-scale resellers looking for competitive pricing and long-term supply support."
    },
    {
      title: "Dealership",
      text: "Perfect for businesses seeking authorized dealership opportunities with strong product support and growth potential."
    },
    {
      title: "Offline Store Shelves",
      text: "For supermarkets, electronics stores, convenience stores, kiosks, and retail chains looking to stock our products."
    }
  ];

  return (
  <>
  <PartnerHero/>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-gray-800 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
      

          <h1 className="text-5xl font-bold mt-6 mb-4 text-gray-900">
            Partner With Us
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We welcome applications from wholesalers, dealers, distributors and
            offline retail stores interested in carrying <strong>Zylliq</strong> products.
            Complete the form below and our team will review your application.
          </p>
        </motion.div>


        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>


        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-10"
           id="application-form"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Application Form
          </h2>

          <p className="text-gray-600">
            Please provide your business details so we can evaluate the best partnership model.
          </p>
        </motion.div>


     <motion.div
    
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-4xl mx-auto"
>
  <div className="px-4 py-12 md:px-16">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Partnership Application</h2>
    <p className="text-gray-600 mb-10">
      Please provide accurate details to help us evaluate the best partnership opportunities.
    </p>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-7">
      {/* Left column */}
      <div className="space-y-7">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1.5">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            id="companyName"
            type="text"
            required
            placeholder="Your company name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1.5">
            Contact Person <span className="text-red-500">*</span>
          </label>
          <input
            id="contactPerson"
            type="text"
            required
            placeholder="Full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Business Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="example@company.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1.5">
            Country <span className="text-red-500">*</span>
          </label>
          <input
            id="country"
            type="text"
            required
            placeholder="e.g. United States"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm"
          />
        </div>
      </div>

      {/* Right column */}
      <div className="space-y-7">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">
            City
          </label>
          <input
            id="city"
            type="text"
            placeholder="e.g. New York"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Brand of Interest <span className="text-red-500">*</span>
          </label>
          <select
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm bg-white"
          >
            <option value="">Select brand</option>
            <option value="Zylliq">Zylliq</option>
            <option value="HOORAB">HOORAB</option>
            <option value="HDS">HDS</option>
            {/* Add more brands if needed in future */}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Type <span className="text-red-500">*</span>
          </label>
          <select
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm bg-white"
          >
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
        </div>

        <div>
          <label htmlFor="branches" className="block text-sm font-medium text-gray-700 mb-1.5">
            Number of Branches / Outlets
          </label>
          <input
            id="branches"
            type="number"
            min="0"
            placeholder="e.g. 5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1.5">
            Website / Primary Social Media
          </label>
          <input
            id="website"
            type="url"
            placeholder="https://www.company.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm"
          />
        </div>
      </div>

      {/* Full width fields */}
      <div className="md:col-span-2 space-y-7">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Partnership Type(s) of Interest <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['Wholesale', 'Dealership', 'Offline Store Shelves'].map((type) => (
              <label
                key={type}
                className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition group focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
              >
                <input
                  type="checkbox"
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required // at least one should be checked – handle in validation
                />
                <span className="ml-3 text-gray-700 group-hover:text-blue-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="introduction" className="block text-sm font-medium text-gray-700 mb-1.5">
            Business Introduction <span className="text-red-500">*</span>
          </label>
          <textarea
            id="introduction"
            rows={5}
            required
            placeholder="Please tell us about your company, current operations, years in business, target market, and why you're interested in partnering with us..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm resize-y min-h-[120px]"
          />
        </div>

        <label className="flex items-start gap-3 text-sm text-gray-600">
          <input
            type="checkbox"
            required
            className="mt-1 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span>
            I confirm that the information provided is accurate and complete. I agree to be contacted by the team regarding this partnership application and accept the{' '}
            <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.
          </span>
        </label>

        <button
          type="submit"
          className="w-full md:w-auto px-10 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Submit Partnership Application
        </button>
      </div>
    </form>
  </div>
</motion.div>

      </div>


      {/* INPUT STYLES */}
      <style jsx>{`
        .label{
          display:block;
          margin-bottom:6px;
          font-weight:600;
          color:#111827;
        }

        .input{
          width:100%;
          padding:14px 16px;
          border-radius:10px;
          border:none;
          background:#f3f4f6;
          outline:none;
          transition:0.2s;
        }

        .input:focus{
          background:white;
          box-shadow:0 0 0 2px rgba(37,99,235,0.35);
        }
      `}</style>

    </div>
  </>
  );
}






