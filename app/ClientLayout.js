"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";


// ✅ dynamic imports
const Navbar = dynamic(() => import("./component/navbar"), {
  ssr: false,
});

const Footer = dynamic(() => import("./component/footer"), {
  ssr: false,
});

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const showNavbar =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/brand" ||
    pathname === "/contact" ||
    pathname === "/career" 
  const showFooter = 
     pathname === "/" ||
    pathname === "/about" ||
    pathname === "/brand" ||
    pathname === "/contact" ||
    pathname === "/career" 
  return (
    <>
      {showNavbar && <Navbar />}
      {children}
      {showFooter && <Footer />}
    </>
  );
}
