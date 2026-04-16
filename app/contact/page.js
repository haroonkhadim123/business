// app/contact/page.js

import React from "react";
import GetInTouchPage from "../component/contactbanner";

// ================= SEO Metadata - Industry Level (London, UK) =================
export const metadata = {
  metadataBase: new URL("https://www.hoorabgroup.com"), // 👈 Forces www for all relative URLs
  
  title: {
    default: " HOORAB GROUP London UK | Contact Us ",
    template: "%s | HOORAB GROUP",
  },
  
  description:
    "Get in touch with HOORAB GROUP in London, UK. Contact us at info@hoorabgroup.com for inquiries, support, or partnership opportunities. Our team is ready to help you.",
  
  keywords: [
    "HOORAB GROUP contact",
    "Contact HOORAB GROUP London",
    "info@hoorabgroup.com",
    "HOORAB GROUP UK",
    "Corporate contact London",
    "Business inquiries UK",
    "Partnership opportunities London",
    "HOORAB GROUP support",
  ],
  
  authors: [{ name: "HOORAB GROUP", url: "https://www.hoorabgroup.com" }],
  creator: "HOORAB GROUP",
  publisher: "HOORAB GROUP",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  alternates: {
    canonical: "https://www.hoorabgroup.com/contact", // 👈 www canonical
    languages: {
      "en-GB": "https://www.hoorabgroup.com/contact",
      "en-US": "https://www.hoorabgroup.com/en-us/contact",
      "en-AE": "https://www.hoorabgroup.com/en-ae/contact",
      "ar": "https://www.hoorabgroup.com/ar/contact",
    },
  },
  
  openGraph: {
    title: "Contact Us | HOORAB GROUP London UK",
    description:
      "Get in touch with HOORAB GROUP in London, UK. Email info@hoorabgroup.com for inquiries, support, or partnership opportunities.",
    url: "https://www.hoorabgroup.com/contact",
    siteName: "HOORAB GROUP",
    locale: "en_GB", // UK locale
    alternateLocale: ["en_US", "en_AE", "ar_SA"],
    type: "website",
    images: [
      {
        url: "https://www.hoorabgroup.com/contact-hero.jpg",
        width: 1200,
        height: 630,
        alt: "HOORAB GROUP Contact Us London UK",
      },
    ],
    email: "info@hoorabgroup.com", // 👈 Email in OG
    phone: "+44 (0) 20 1234 5678", // 👈 Optional: Add UK phone
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Contact HOORAB GROUP | London UK",
    description: "Email info@hoorabgroup.com for inquiries and partnerships.",
    images: ["https://www.hoorabgroup.com/contact-hero.jpg"],
    site: "@hoorabgroup",
  },
  
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console code
  },
  
  category: "business",
  
  // Geo targeting for London, UK
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "London",
    "geo.position": "51.5074;-0.1278",
    "ICBM": "51.5074, -0.1278",
  },
};

// ================= JSON-LD Structured Data =================
const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact HOORAB GROUP",
  description: "Get in touch with HOORAB GROUP in London, UK for inquiries, support, or partnerships.",
  url: "https://www.hoorabgroup.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "HOORAB GROUP",
    email: "info@hoorabgroup.com",
    url: "https://www.hoorabgroup.com",
    logo: "https://www.hoorabgroup.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
      addressRegion: "Greater London",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@hoorabgroup.com",
      contactType: "customer service",
      contactOption: "TollFree",
      availableLanguage: ["English", "Arabic"],
      areaServed: ["GB", "GB-LND", "AE", "SA"],
    },
    sameAs: [
      "https://www.linkedin.com/company/hoorab-group-of-companies-ltd",
      "https://twitter.com/hoorabgroup",
      "https://www.facebook.com/hoorabgroup",
      "https://www.instagram.com/hoorabgroup",
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.hoorabgroup.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://www.hoorabgroup.com/contact",
      },
    ],
  },
  potentialAction: {
    "@type": "CommunicateAction",
    language: "English",
    recipient: {
      "@type": "Organization",
      name: "HOORAB GROUP",
      email: "info@hoorabgroup.com",
    },
  },
};

// ================= Page Component =================
const page = () => {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactStructuredData),
        }}
      />
      
      {/* Additional JSON-LD for ContactPoint */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            email: "info@hoorabgroup.com",
            contactType: "customer service",
            availableLanguage: ["English", "Arabic"],
            areaServed: ["GB", "AE", "SA"],
            contactOption: "Email",
          }),
        }}
      />
      
      <div>
        <GetInTouchPage />
      </div>
    </>
  );
};

export default page;