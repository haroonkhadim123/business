"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NetworkLoader() {
  const [loading, setLoading] = useState(true); // Start with true until content loads
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  // Initial page load - wait for content to show
  useEffect(() => {
    // Function to check if content is actually visible
    const checkContentLoaded = () => {
      // Check if main content sections exist and have content
      const mainContent = document.querySelector('main, section, .main-content, [data-main-content]');
      const hasText = document.body.innerText.length > 50;
      const hasImages = document.querySelectorAll('img').length === 0 || 
                        Array.from(document.querySelectorAll('img')).every(img => img.complete);
      
      return mainContent && hasText && hasImages;
    };

    // Keep checking until content loads
    const interval = setInterval(() => {
      if (checkContentLoaded()) {
        setLoading(false);
        clearInterval(interval);
      }
    }, 100);

    // Max timeout - hide loader after 5 seconds even if content not loaded
    const timeout = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []); // Only run once on mount

  // Handle page navigation - 3 second delay
  useEffect(() => {
    if (!loading) {
      setIsNavigating(true);
      
      // 3 second delay for page navigation
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer);
    }
  }, [pathname, loading]);

  if (!loading && !isNavigating) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top loading bar */}
      <div className="h-1 bg-gradient-to-r from-[#00e6ff] to-[#139aff] animate-pulse"></div>
      
      {/* Small popup */}
      <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-3">
        <div className="w-4 h-4 border-2 border-[#139aff] border-t-transparent rounded-full animate-spin"></div>
        <span className="text-sm text-gray-600">
          {loading ? "Loading website..." : "Loading page..."}
        </span>
      </div>
    </div>
  );
}