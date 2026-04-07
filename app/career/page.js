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
    canonical: "https://hoorabgroup.com/career",
  },
  openGraph: {
    title: "HOORAB GROUP | Careers – Join Our Team",
    description:
      "Explore exciting career opportunities at HOORAB GROUP in Saudi Arabia and apply today.",
    url: "https://hoorabgroup.com/career",
    siteName: "HOORAB GROUP",
    images: [
      {
        url: "https://hoorabgroup.com/about-hero.jpg",
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
    images: ["https://hoorabgroup.com/about-hero.jpg"],
  },
  robots: "index, follow",
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
            url: "https://hoorabgroup.com",
            logo: "https://hoorabgroup.com/logo.png",
            sameAs: [
              "https://www.facebook.com/hoorabgroup",
              "https://www.twitter.com/hoorabgroup",
              "https://www.instagram.com/hoorabgroup",
              "https://www.linkedin.com/company/hoorabgroup"
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry: "SA",
              addressRegion: "Riyadh",
              addressLocality: "Riyadh",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "careers@hoorabgroup.com",
              availableLanguage: ["English", "Arabic"],
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