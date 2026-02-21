// app/career/page.js
// NO "use client" here

import Script from "next/script";

import CareerBanner from "../component/careerbanner";
import WhyWorkWithUs from "../component/whyworkus";
import OpenPositions from "../component/accordian";
import BenefitsSection from "../component/benefit";
import HiringProcess from "../component/hiringprocess";
import CareerCTA from "../component/cta";

// Server-only metadata export
export const metadata = {
  title: "HOORAB GROUP | Careers – Join Our Team",
  description:
    "HOORAB GROUP is hiring in Saudi Arabia! Explore career opportunities and grow your future with a dynamic and innovative corporate team.",
  keywords: [
    "HOORAB GROUP Careers Saudi Arabia",
    "Jobs in Saudi Arabia",
    "Corporate Jobs in KSA",
  ],
  alternates: {
    canonical: "http://localhost:3000/career",
  },
  openGraph: {
    title: "HOORAB GROUP | Careers – Join Our Team",
    description:
      "Explore exciting career opportunities at HOORAB GROUP in Saudi Arabia and apply today.",
    url: "http://localhost:3000/career",
    siteName: "HOORAB GROUP",
    images: [
      {
        url: "about-hero.jpg",
        width: 1200,
        height: 630,
        alt: "HOORAB GROUP Careers",
      },
    ],
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOORAB GROUP | Careers – Join Our Team",
    description: "Join HOORAB GROUP in Saudi Arabia and build your professional future.",
    images: ["about-hero.jpg"],
  },
};

export default function CareerPage() {
  return (
    <>
      <Script
        id="career-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "HOORAB GROUP",
            url: "http://localhost:3000",
        
            address: {
              "@type": "PostalAddress",
              addressCountry: "SA",
            },
         
          }),
        }}
      />

      <main className="bg-[#0B1120] text-white overflow-hidden">
        <CareerBanner />
        <WhyWorkWithUs />
        <OpenPositions />
        <BenefitsSection />
        <HiringProcess />
        <CareerCTA />
      </main>
    </>
  );
}