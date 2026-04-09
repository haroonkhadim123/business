import React from "react";
import GetInTouchPage from "../component/contactbanner";

// ================= SEO Metadata =================
export const metadata = {
  title: "HOORAB GROUP | Contact Us",
  description:
    "Get in touch with HOORAB GROUP. Fill out our contact form or reach out to our team for inquiries, support, or partnership opportunities in Saudi Arabia.",
  keywords:
    "HOORAB GROUP, Contact, Corporate, Consultancy, Saudi Arabia, Inquiries, Support, Partnership",
  authors: [{ name: "HOORAB GROUP" }],
  openGraph: {
    title: "HOORAB GROUP | Contact Us",
    description:
      "Get in touch with HOORAB GROUP. Fill out our contact form or reach out to our team for inquiries, support, or partnership opportunities in Saudi Arabia.",
    url: "https://hoorabgroup.com/contact", // ✅ Updated with live domain
    siteName: "HOORAB GROUP",
    images: [{ url: "https://hoorabgroup.com/contact-hero.jpg", width: 1200, height: 630 }], // ✅ Full URL
    locale: "en_GB", // ✅ Changed to UK (since company is in UK)
    type: "website",
    alternateLocale: ["en_US", "en_AE"], // ✅ Added alternate locales
  },
  twitter: {
    card: "summary_large_image",
    title: "HOORAB GROUP | Contact Us",
    description:
      "Get in touch with HOORAB GROUP. Fill out our contact form or reach out to our team for inquiries, support, or partnership opportunities.",
    images: ["https://hoorabgroup.com/contact-hero.jpg"], // ✅ Full URL
    site: "@hoorabgroup", // ✅ Optional: Add your Twitter handle
  },
  // ✅ Added alternates for better SEO
  alternates: {
    canonical: "https://hoorabgroup.com/contact",
    languages: {
      "en-GB": "https://hoorabgroup.com/contact",
      "en-US": "https://hoorabgroup.com/contact",
      "en-AE": "https://hoorabgroup.com/contact",
    },
  },
  // ✅ Added robots meta
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
  // ✅ Added verification (optional)
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console code
  },
};

// ================= Page Component =================
const page = () => {
  return (
    <div>
      <GetInTouchPage />
    </div>
  );
};

export default page;