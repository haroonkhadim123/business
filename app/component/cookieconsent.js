"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    console.log("CookieBanner component mounted"); // ✅ Debug log
    
    const consent = localStorage.getItem("hoorab_cookie_consent");
    console.log("Stored consent:", consent); // ✅ Debug log
    
    if (!consent) {
      console.log("No consent found, showing banner"); // ✅ Debug log
      setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setIsAnimating(true), 50);
      }, 500);
    } else {
      console.log("Consent found, banner not shown"); // ✅ Debug log
    }
  }, []);

  const acceptCookies = () => {
    setIsAnimating(false);
    setTimeout(() => {
      localStorage.setItem("hoorab_cookie_consent", "accepted");
      setIsVisible(false);
    }, 300);
  };

  const declineCookies = () => {
    setIsAnimating(false);
    setTimeout(() => {
      localStorage.setItem("hoorab_cookie_consent", "declined");
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) {
    console.log("Banner not visible"); // ✅ Debug log
    return null;
  }

  console.log("Rendering banner"); // ✅ Debug log

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <div
        className={`max-w-[350px] sm:max-w-[380px] w-[calc(100vw-32px)] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ${
          isAnimating ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Rest of your JSX */}
        <div className="flex items-center gap-3 p-4 pb-2 border-b border-gray-100">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
            <span className="text-xl">🍪</span>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold text-base">Cookie Preferences</h3>
            <p className="text-gray-500 text-xs">We value your privacy</p>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <p className="text-gray-600 text-sm leading-relaxed">
            We use cookies to enhance your browsing experience, analyze site traffic, 
            and personalize content. 
            <Link 
              href="/privacy" 
              className="text-blue-600 hover:text-blue-700 transition-colors ml-1 font-medium inline-block"
            >
              Learn more →
            </Link>
          </p>

          <div className="bg-gray-50 rounded-xl p-3 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-600">Essential Cookies</span>
              <span className="text-green-600 text-xs font-medium">Always Active</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-600">Analytics Cookies</span>
              <span className="text-amber-600 text-xs">Optional</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-600">Marketing Cookies</span>
              <span className="text-amber-600 text-xs">Optional</span>
            </div>
          </div>
        </div>

        <div className="p-4 pt-0 flex gap-3">
          <button
            onClick={declineCookies}
            className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 border border-gray-200"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Accept All
          </button>
        </div>

        <button
          onClick={declineCookies}
          className="absolute -top-2 -right-2 w-7 h-7 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md"
        >
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}