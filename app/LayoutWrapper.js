// app/LayoutWrapper.js
'use client';
import { usePathname } from 'next/navigation';
import ClientLayout from "./ClientLayout";
import { Toaster } from "react-hot-toast";
import SessionWrapper from "./component/SessionWrapper";
import NetworkLoader from "./component/NetworkLoader";
import CookiePreferencesModal from "./component/cookieconsent";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Agar construction page hai toh sirf content dikhao
  const isConstructionPage =  pathname === '/under-construction';
  
  if (isConstructionPage) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#fff", color: "#000" }}>
        {children}
      </div>
    );
  }
  
  // Normal website with all components
  return (
    <>
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-PW42MT3J"
          height="0" 
          width="0" 
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        ></iframe>
      </noscript>
      
      <NetworkLoader />
      
      <SessionWrapper>
        <ClientLayout>
          {children}
        </ClientLayout>
      </SessionWrapper>
      <CookiePreferencesModal />
      
      <Toaster 
        position="top-right" 
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1F2937',
            color: '#FFFFFF',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10B981',
              secondary: '#FFFFFF',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#EF4444',
              secondary: '#FFFFFF',
            },
          },
        }}
      />
    </>
  );
}