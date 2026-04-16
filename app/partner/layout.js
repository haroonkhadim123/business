// app/partner/page.js (or wherever your partner page lives)

// ----------------------
// SEO Metadata - Industry Level (London, UK)
// ----------------------
export const metadata = {
  metadataBase: new URL("https://www.hoorabgroup.com"), // 👈 Forces www for all relative URLs
  
  title: {
    default: "HOORAB GROUP London UK | Partner Opportunities  ",
    template: "%s | HOORAB GROUP",
  },
  
  description:
    "Explore partnership opportunities with HOORAB GROUP in London, UK. Collaborate with us to grow your business through our expertise in corporate consultancy, strategic planning, and global solutions. Contact info@hoorabgroup.com",
  
  keywords: [
    "HOORAB GROUP partnership",
    "Partner opportunities London",
    "Business partnership UK",
    "Corporate consultancy partners",
    "info@hoorabgroup.com",
    "Strategic planning partners",
    "Global solutions partnership",
    "HOORAB GROUP collaborate",
    "Business growth UK",
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
    canonical: "https://www.hoorabgroup.com/partner", // 👈 www canonical
    languages: {
      "en-GB": "https://www.hoorabgroup.com/partner",
      "en-US": "https://www.hoorabgroup.com/en-us/partner",
      "en-AE": "https://www.hoorabgroup.com/en-ae/partner",
      "ar": "https://www.hoorabgroup.com/ar/partner",
    },
  },
  
  openGraph: {
    title: "Partner Opportunities | HOORAB GROUP London UK",
    description:
      "Explore partnership opportunities with HOORAB GROUP in London, UK. Email info@hoorabgroup.com to discuss collaboration and business growth.",
    url: "https://www.hoorabgroup.com/partner",
    siteName: "HOORAB GROUP",
    locale: "en_GB", // UK locale
    alternateLocale: ["en_US", "en_AE", "ar_SA"],
    type: "website",
    images: [
      {
        url: "https://www.hoorabgroup.com/og-partner.jpg",
        width: 1200,
        height: 630,
        alt: "HOORAB GROUP Partner Opportunities London UK",
      },
    ],
    email: "info@hoorabgroup.com",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Partner Opportunities | HOORAB GROUP London UK",
    description: "Explore partnership opportunities. Email info@hoorabgroup.com for collaboration.",
    images: ["https://www.hoorabgroup.com/twitter-partner.jpg"],
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

// ----------------------
// JSON-LD Structured Data
// ----------------------
const partnerStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "HOORAB GROUP | Partner Opportunities in London, UK",
  description:
    "Explore partnership opportunities with HOORAB GROUP in London, UK. Collaborate for business growth and strategic planning.",
  url: "https://www.hoorabgroup.com/partner",
  publisher: {
    "@type": "Organization",
    name: "HOORAB GROUP",
    url: "https://www.hoorabgroup.com",
    email: "info@hoorabgroup.com",
    logo: "https://www.hoorabgroup.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
      addressRegion: "Greater London",
    },
    sameAs: [
       "https://www.linkedin.com/company/hoorab-group-of-companies-ltd",
      "https://twitter.com/hoorabgroup",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@hoorabgroup.com",
      contactType: "business development",
      availableLanguage: ["English", "Arabic"],
      areaServed: ["GB", "GB-LND", "AE", "SA"],
    },
  },
  mainEntity: {
    "@type": "Offer",
    name: "Partnership Opportunities",
    description: "Corporate consultancy, strategic planning, and global solutions partnerships",
    offeredBy: {
      "@type": "Organization",
      name: "HOORAB GROUP",
      email: "info@hoorabgroup.com",
    },
    businessFunction: "http://purl.org/goodrelations/v1#Collaboration",
    availability: "http://schema.org/InStock",
    areaServed: {
      "@type": "Place",
      name: "United Kingdom",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB",
      },
    },
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
        name: "Partner",
        item: "https://www.hoorabgroup.com/partner",
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

// ----------------------
// Layout Component
// ----------------------
export default function PartnerLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(partnerStructuredData),
        }}
      />
      
      {/* Additional JSON-LD for Partnership Offer */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BusinessFunction",
            name: "Partnership Collaboration",
            provider: {
              "@type": "Organization",
              name: "HOORAB GROUP",
              email: "info@hoorabgroup.com",
            },
            serviceType: "Corporate Consultancy & Strategic Planning",
            areaServed: "London, UK",
          }),
        }}
      />
      
      {children}
    </>
  );
}