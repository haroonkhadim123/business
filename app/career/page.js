// app/career/page.js
// NO "use client" here

import Script from "next/script";
import CareerBanner from "../component/careerbanner";
import WhyWorkWithUs from "../component/whyworkus";
import OpenPositions from "../component/accordian";
import BenefitsSection from "../component/benefit";
import HiringProcess from "../component/hiringprocess";
import CareerCTA from "../component/cta";

// ✅ Server-only metadata export - ENHANCED SEO
export const metadata = {
  metadataBase: new URL("https://hoorabgroup.com"),
  
  title: {
    absolute: "HOORAB GROUP | Careers – Join Our Team in Saudi Arabia, UK & GCC",
  },
  
  description:
    "Explore exciting career opportunities at HOORAB GROUP. We're hiring in Saudi Arabia, UK, and GCC regions. Join a dynamic team in retail, wholesale, supply chain, and corporate functions. Apply today!",

  keywords: [
    "careers at HOORAB GROUP",
    "jobs in Saudi Arabia 2026",
    "retail jobs Riyadh",
    "wholesale distribution careers",
    "supply chain jobs UK",
    "GCC job opportunities",
    "corporate careers KSA",
    "hiring now Saudi Arabia",
    "logistics jobs Riyadh",
    "sales jobs wholesale",
    "procurement careers",
    "operations manager jobs",
    "fresh graduates Saudi",
    "experienced professionals GCC",
  ],

  // ✅ Canonical URL
  alternates: {
    canonical: "https://hoorabgroup.com/career",
    languages: {
      'en': '/career',
      'en-GB': '/en-GB/career',
      'en-SA': '/en-SA/career',
    },
  },

  // ✅ Open Graph for social sharing
  openGraph: {
    title: "HOORAB GROUP | Careers – Join Our Dynamic Team in KSA, UK & GCC",
    description:
      "Explore exciting career opportunities at HOORAB GROUP. We're hiring in Saudi Arabia, UK, and GCC regions for retail, wholesale, supply chain, and corporate roles.",
    url: "https://www.hoorabgroup.com/career",
    siteName: "HOORAB GROUP",
    images: [
      {
        url: "/career-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HOORAB GROUP Careers - Join Our Team",
      },
    ],
    locale: "en_SA",
    type: "website",
    emails: ["careers@hoorabgroup.com"],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "HOORAB GROUP | Careers – Join Our Team",
    description: "Join HOORAB GROUP in Saudi Arabia, UK, and GCC. Build your professional future with us!",
    images: ["/career-twitter-image.jpg"],
    site: "@hoorabgroup",
    creator: "@hoorabgroup",
  },

  // ✅ Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ✅ Authors & Publisher
  authors: [{ name: "HOORAB GROUP - HR Team", url: "https://www.hoorabgroup.com" }],
  creator: "HOORAB GROUP HR",
  publisher: "HOORAB GROUP",
  
  // ✅ Category
  category: "Careers & Employment",
  classification: "Job Opportunities - Retail & Wholesale",

  // ✅ Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },

  // ✅ Additional SEO properties
  applicationName: "HOORAB GROUP Careers",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },

  // ✅ Other meta tags
  other: {
    "hr:email": "careers@hoorabgroup.com",
    "hr:locations": "Saudi Arabia, United Kingdom, UAE, Qatar, Kuwait",
    "employment:type": "Full-time, Part-time, Remote, Hybrid",
    "founding:year": "2024",
  },
};

export default function CareerPage() {
  return (
    <>
      {/* ✅ Enhanced Structured Data for Career Page */}
      <Script
        id="career-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.hoorabgroup.com/career/#webpage",
                url: "https://www.hoorabgroup.com/career",
                name: "Careers at HOORAB GROUP",
                isPartOf: {
                  "@id": "https://www.hoorabgroup.com/#website",
                },
                about: {
                  "@type": "Organization",
                  name: "HOORAB GROUP",
                },
                description:
                  "Explore career opportunities at HOORAB GROUP. We're hiring in Saudi Arabia, UK, and GCC regions for retail, wholesale, supply chain, and corporate roles.",
                datePublished: "2024-01-01",
                lastReviewed: "2026-04-15",
              },
              {
                "@type": "Organization",
                "@id": "https://www.hoorabgroup.com/#organization",
                name: "HOORAB GROUP",
                url: "https://www.hoorabgroup.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.hoorabgroup.com/logo.png",
                  width: "512",
                  height: "512",
                },
                foundingDate: "2024",
                foundingLocation: "London, United Kingdom",
                numberOfEmployees: {
                  "@type": "QuantitativeValue",
                  value: "10",
                  unitText: "people",
                },
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "SA",
                  addressRegion: "Riyadh",
                  addressLocality: "Riyadh",
                  postalCode: "12345",
                  streetAddress: "King Fahd Road",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "human resources",
                  email: "careers@hoorabgroup.com",
                  telephone: "+966XXXXXXXXX",
                  availableLanguage: ["English", "Arabic"],
                  areaServed: ["SA", "GB", "AE", "QA", "KW"],
                },
                sameAs: [
                  "https://www.linkedin.com/company/hoorab-group-of-companies-ltd",
                ],
                hiring: {
                  "@type": "Hiring",
                  name: "Now Hiring in Saudi Arabia & GCC",
                  description: "Multiple positions available in retail, wholesale, supply chain, and corporate functions",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.hoorabgroup.com/career/#breadcrumb",
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
                    name: "Careers",
                    item: "https://www.hoorabgroup.com/career",
                  },
                ],
              },
              {
                "@type": "JobPosting",
                "@id": "https://www.hoorabgroup.com/career/#jobposting",
                title: "Multiple Positions Available",
                description: "HOORAB GROUP is hiring for various positions in Saudi Arabia, UK, and GCC regions. Join our dynamic team in retail, wholesale, supply chain management, logistics, sales, marketing, and corporate functions.",
                datePosted: "2026-04-15",
                validThrough: "2026-12-31",
                employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
                hiringOrganization: {
                  "@type": "Organization",
                  name: "HOORAB GROUP",
                  sameAs: "https://www.hoorabgroup.com",
                  logo: "https://www.hoorabgroup.com/logo.png",
                },
                jobLocation: [
                  {
                    "@type": "Place",
                    address: {
                      "@type": "PostalAddress",
                      addressCountry: "SA",
                      addressRegion: "Riyadh",
                      addressLocality: "Riyadh",
                    },
                  },
                  {
                    "@type": "Place",
                    address: {
                      "@type": "PostalAddress",
                      addressCountry: "GB",
                      addressRegion: "London",
                      addressLocality: "London",
                    },
                  },
                  {
                    "@type": "Place",
                    address: {
                      "@type": "PostalAddress",
                      addressCountry: "AE",
                      addressRegion: "Dubai",
                      addressLocality: "Dubai",
                    },
                  },
                ],
                jobLocationType: "TELECOMMUTE",
                applicantLocationRequirements: {
                  "@type": "Country",
                  name: ["Saudi Arabia", "United Kingdom", "United Arab Emirates", "Qatar", "Kuwait"],
                },
                directApply: true,
                employmentUnit: "HOUR",
                baseSalary: {
                  "@type": "MonetaryAmount",
                  currency: "SAR",
                  value: {
                    "@type": "QuantitativeValue",
                    value: 8000,
                    unitText: "MONTH",
                  },
                },
                workHours: "40 hours per week",
                occupationalCategory: "15-0000",
              },
            ],
          }),
        }}
      />

      {/* ✅ Job Search Engine Optimization - Additional JSON-LD */}
      <Script
        id="job-posting-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: "Various Positions - HOORAB GROUP Careers",
            description: "Join HOORAB GROUP, a leading retail and wholesale distribution company. We are seeking talented professionals for multiple positions across Saudi Arabia, UK, and GCC regions.",
            identifier: {
              "@type": "PropertyValue",
              name: "HOORAB GROUP",
              value: "CAREER-2026-001",
            },
            datePosted: "2026-04-15",
            validThrough: "2026-12-31T23:59:59",
            employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR", "INTERN"],
            hiringOrganization: {
              "@type": "Organization",
              name: "HOORAB GROUP",
              sameAs: "https://www.hoorabgroup.com",
              logo: "https://www.hoorabgroup.com/logo.png",
            },
            jobLocation: [
              {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Riyadh",
                  addressRegion: "Riyadh",
                  addressCountry: "Saudi Arabia",
                },
              },
              {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "London",
                  addressRegion: "London",
                  addressCountry: "United Kingdom",
                },
              },
            ],
            occupationalCategory: "15-0000",
            directApply: true,
            industry: "Retail & Wholesale Distribution",
            qualifications: "Bachelor's degree or equivalent experience",
            responsibilities: "Various responsibilities based on position",
            salaryCurrency: "SAR",
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "SAR",
              value: {
                "@type": "QuantitativeValue",
                value: 8000,
                unitText: "MONTH",
              },
            },
            workHours: "Full-time",
          }),
        }}
      />

      <main className="bg-[#0B1120] text-white overflow-hidden">
        {/* ✅ Add semantic HTML structure */}
        <article className="relative">
          {/* ✅ Skip to content link for accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#00e6ff] focus:text-black focus:p-4 focus:rounded-lg"
          >
            Skip to main content
          </a>
          
          <div id="main-content">
            <CareerBanner />
            <WhyWorkWithUs />
            <OpenPositions />
            <BenefitsSection />
            <HiringProcess />
            <CareerCTA />
          </div>
        </article>
      </main>
    </>
  );
}