"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NetworkLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Jab page change ho
    setLoading(true);
    
    // 1 second baad loader band karo (agar internet slow hai to zyada time lagega)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top loading bar */}
      <div className="h-1 bg-gradient-to-r from-[#00e6ff] to-[#139aff] animate-pulse"></div>
      
      {/* Small popup */}
      <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-3">
        <div className="w-4 h-4 border-2 border-[#139aff] border-t-transparent rounded-full animate-spin"></div>
        <span className="text-sm text-gray-600">Loading page...</span>
      </div>
    </div>
  );
}