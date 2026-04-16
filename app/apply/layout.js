// app/apply/page.js (or wherever your apply page lives)

// ----------------------
// SEO Metadata - London, UK Edition
// ----------------------
export const metadata = {
  metadataBase: new URL("https://www.hoorabgroup.com"), // 👈 Forces www for all relative URLs
  title: {
    default: "Apply Now | HOORAB GROUP Careers London UK",
    template: "%s | HOORAB GROUP",
  },
  description:
    "Apply for exciting career opportunities at HOORAB GROUP in London, UK. Submit your application online or email us at info@hoorabgroup.com. Join our corporate team in the United Kingdom today.",
  keywords: [
    "HOORAB GROUP Careers London",
    "Jobs in London UK",
    "Apply for Corporate Jobs London",
    "HOORAB GROUP Application Form UK",
    "info@hoorabgroup.com",
    "Hoorab recruitment London",
    "Jobs in United Kingdom",
    "HOORAB GROUP UK careers",
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
    canonical: "https://www.hoorabgroup.com/apply", // 👈 www canonical
    languages: {
      "en-GB": "https://www.hoorabgroup.com/apply",
      "en-SA": "https://www.hoorabgroup.com/apply-sa", // Optional: separate Saudi page
    },
  },
  openGraph: {
    title: "Apply Now | HOORAB GROUP Careers London UK",
    description:
      "Submit your application to join HOORAB GROUP's team in London, United Kingdom. Contact us at info@hoorabgroup.com for any queries.",
    url: "https://www.hoorabgroup.com/apply",
    siteName: "HOORAB GROUP",
    locale: "en_GB", // 👈 Changed to UK locale
    alternateLocale: ["en_US", "en_SA"],
    type: "website",
   
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply Now | HOORAB GROUP Careers London",
    description:
      "Apply for jobs at HOORAB GROUP in London, UK. Email info@hoorabgroup.com for support.",
    site: "@hoorabgroup",
    creator: "@hoorabgroup",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  category: "careers",
  other: {
    "geo.region": "GB-LND", // 👈 London geo targeting
    "geo.placename": "London",
    "geo.position": "51.5074;-0.1278", // 👈 London coordinates
    "ICBM": "51.5074, -0.1278",
  },
};

// ----------------------
// JSON-LD Structured Data (Rich Results) - London UK
// ----------------------
export default function ApplyLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Apply Now | HOORAB GROUP Careers London UK",
    description:
      "Apply for career opportunities at HOORAB GROUP in London, United Kingdom. Submit your application online or via email: info@hoorabgroup.com.",
    url: "https://www.hoorabgroup.com/apply",
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
        "https://www.linkedin.com/company/hoorabgroup",
        "https://twitter.com/hoorabgroup",
        // Add other social profiles
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@hoorabgroup.com",
        contactType: "careers",
        availableLanguage: ["English", "Arabic"],
        areaServed: ["GB", "GB-LND"], // 👈 London & UK
      },
    },
    mainEntity: {
      "@type": "JobPosting",
      title: "General Application - London UK",
      hiringOrganization: {
        "@type": "Organization",
        name: "HOORAB GROUP",
        email: "info@hoorabgroup.com",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "GB",
          addressLocality: "London",
          addressRegion: "Greater London",
          postalCode: "EC1A 1BB", // 👈 Example London postcode
        },
      },
      employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
      employmentUnit: {
        "@type": "Organization",
        name: "HOORAB GROUP UK",
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
          name: "Career",
          item: "https://www.hoorabgroup.com/career",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Apply Now London",
          item: "https://www.hoorabgroup.com/apply",
        },
      ],
    },
  };

  return (
    <>
      {/* Inject JSON-LD into the head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}