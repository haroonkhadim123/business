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
    url: "http://localhost:3000/contact", // replace with your live domain after deployment
    siteName: "HOORAB GROUP",
    images: [{ url: "/contact-hero.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOORAB GROUP | Contact Us",
    description:
      "Get in touch with HOORAB GROUP. Fill out our contact form or reach out to our team for inquiries, support, or partnership opportunities in Saudi Arabia.",
    images: ["/contact-hero.jpg"],
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