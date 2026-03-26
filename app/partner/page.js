"use client";

import { motion } from "framer-motion";
import PartnerHero from "../component/partnerbanner";

export default function PartnerPage() {
  const cards = [
    {
      title: "Wholesale",
      text: "Ideal for bulk buyers, importers, and large-scale resellers looking for competitive pricing and long-term supply support.",
    },
    {
      title: "Dealership",
      text: "Perfect for businesses seeking authorized dealership opportunities with strong product support and growth potential.",
    },
    {
      title: "Offline Store Shelves",
      text: "For supermarkets, electronics stores, convenience stores, kiosks, and retail chains looking to stock our products.",
    },
  ];

  return (
    <>
      <PartnerHero />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-gray-800 py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* HERO */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-16"
>
  <h1 className="text-5xl font-bold mt-6 mb-4 text-gray-900">
    Partner With{" "}
    <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
      Us
    </span>
  </h1>

  <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
    We welcome applications from{" "}
    <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
      wholesalers, dealers, distributors
    </span>{" "}
    and offline retail stores interested in carrying{" "}
    <strong className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
      Zylliq
    </strong>{" "}
    products. Complete the form below and our team will review your application.
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
      <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
        {card.title}
      </h3>

      <p className="text-gray-600 leading-relaxed">{card.text}</p>
    </motion.div>
  ))}
</div>

          {/* APPLICATION TITLE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-10"
            id="application-form"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Application{" "}
              <span className="bg-gradient-to-r from-[#00e6ff] to-[#139aff] bg-clip-text text-transparent">
                Form
              </span>
            </h2>

            <p className="text-gray-600">
              Please provide your business details so we can evaluate the best partnership model.
            </p>
          </motion.div>

          {/* FORM */}
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

              <form className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {/* Left column */}
                <div className="space-y-7">
                  {[
                    { label: "Company Name", id: "companyName", type: "text", placeholder: "Your company name", required: true },
                    { label: "Contact Person", id: "contactPerson", type: "text", placeholder: "Full name", required: true },
                    { label: "Business Email", id: "email", type: "email", placeholder: "example@company.com", required: true },
                    { label: "Phone Number", id: "phone", type: "tel", placeholder: "+1 (555) 000-0000", required: true },
                    { label: "Country", id: "country", type: "text", placeholder: "e.g. United States", required: true },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {field.label} <span className="text-[#00e6ff]">*</span>
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm"
                      />
                    </div>
                  ))}
                </div>

                {/* Right column */}
                <div className="space-y-7">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      placeholder="e.g. New York"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Brand of Interest <span className="text-[#00e6ff]">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm bg-white"
                    >
                      <option value="">Select brand</option>
                      <option className="uppercase" value="Zylliq">
                        ZYLLIQ
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type <span className="text-[#00e6ff]">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm bg-white"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm"
                    />
                  </div>
                </div>

                {/* Full width fields */}
                <div className="md:col-span-2 space-y-7">
                  {/* Partnership Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Partnership Type(s) of Interest <span className="text-[#00e6ff]">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {["Wholesale", "Dealership", "Offline Store Shelves"].map((type) => (
                        <label
                          key={type}
                          className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-[#00e6ff] transition group focus-within:ring-2 focus-within:ring-[#00e6ff] focus-within:border-[#00e6ff]"
                        >
                          <input
                            type="radio"
                            name="partnershipType"
                            value={type}
                            className="h-5 w-5 accent-[#00e6ff] border-gray-300 rounded focus:ring-[#00e6ff]"
                            required
                          />
                          <span className="ml-3 text-gray-700 group-hover:text-[#139aff]">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Introduction */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Business Introduction <span className="text-[#00e6ff]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Please tell us about your company, current operations, years in business, target market, and why you're interested in partnering with us..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00e6ff] focus:border-[#00e6ff] outline-none transition shadow-sm resize-y min-h-[120px]"
                    />
                  </div>

                  {/* Confirm checkbox */}
                  <label className="flex items-start gap-3 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-5 w-5 accent-[#00e6ff] border-gray-300 rounded focus:ring-[#00e6ff]"
                    />
                    <span>
                      I confirm that the information provided is accurate and complete. I agree to be contacted by the team regarding this partnership application and accept the{" "}
                      <a href="#" className="text-[#00e6ff] hover:underline">
                        privacy policy
                      </a>
                      .
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#00e6ff] to-[#139aff] text-white font-semibold rounded-xl hover:from-[#139aff] hover:to-[#00e6ff] focus:outline-none focus:ring-2 focus:ring-[#00e6ff] focus:ring-offset-2 transition shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    Submit Partnership Application
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