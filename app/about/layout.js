export const metadata = {
  // ✅ Base metadata
  title: {
    absolute: "HOORAB GROUP | About Us - Global Retail & Wholesale Distribution Leader",
  },
  
  description:
    "HOORAB Group is a leading retail and wholesale distribution company with 25+ years of experience. Operating across UK, GCC & Europe. 50k+ orders fulfilled, 100+ business partners worldwide.",

  keywords: [
    "about HOORAB Group",
    "retail distribution company UK",
    "wholesale supply chain Europe",
    "B2B logistics provider",
    "global trading company",
    "corporate consultancy retail",
    "supply chain solutions UK",
    "GCC distribution partner",
    "retail wholesale expertise",
    "business partnerships UK",
  ],

  // ✅ Canonical URL for this page
  alternates: {
    canonical: "https://www.hoorabgroup.com/about",
  },

  // ✅ Open Graph for social sharing
  openGraph: {
    title: "HOORAB GROUP | About Us - 25+ Years of Retail & Wholesale Excellence",
    description:
      "Discover HOORAB Group's journey in transforming retail and wholesale distribution across UK, GCC & Europe. Meet our leadership team and learn about our mission.",
    url: "https://www.hoorabgroup.com/about",
    siteName: "HOORAB Group",
    images: [
      {
        url: "/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HOORAB Group - About Us | Leadership & Excellence",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "HOORAB GROUP | About Us - Global Distribution Leader",
    description: "25+ years of excellence in retail & wholesale distribution across UK, GCC & Europe.",
    images: ["/about-twitter-image.jpg"],
  },

  // ✅ Robots (Allow indexing)
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
  authors: [{ name: "HOORAB Group", url: "https://www.hoorabgroup.com" }],
  creator: "HOORAB Group",
  publisher: "HOORAB Group",

  // ✅ Category & Section
  category: "About Us - Corporate Information",
  classification: "Retail & Wholesale Distribution",

  // ✅ Viewport (mobile optimization)
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },

  // ✅ Additional SEO properties
  applicationName: "HOORAB Group",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  // ✅ Other meta tags
  other: {
    "contact:email": "info@hoorabgroup.com",
    "business:hours": "Monday-Friday 9:00-18:00 GMT",
    "founding:year": "2024",
    "employees:count": "2-10",
  },
};

// ✅ Optional: Add structured data component
// Agar aap chahte ho ki about page mein bhi schema ho toh yeh component add karo:

export default function AboutLayout({ children }) {
  return (
    <>
      {/* Schema.org markup for About page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "AboutPage",
                "@id": "https://www.hoorabgroup.com/about/#webpage",
                url: "https://www.hoorabgroup.com/about",
                name: "About HOORAB Group",
                isPartOf: {
                  "@id": "https://www.hoorabgroup.com/#website",
                },
                about: {
                  "@type": "Organization",
                  name: "HOORAB Group",
                  description: "Leading retail and wholesale distribution company",
                },
                description:
                  "HOORAB Group is a premier retail and wholesale distribution company serving UK, GCC and Europe with 25+ years of industry expertise.",
                datePublished: "2024-01-01",
                lastReviewed: "2026-04-15",
              },
              {
                "@type": "Organization",
                "@id": "https://www.hoorabgroup.com/#organization",
                name: "HOORAB Group",
                url: "https://www.hoorabgroup.com",
                logo: "https://www.hoorabgroup.com/logo.png",
                foundingDate: "2024",
                foundingLocation: "London, United Kingdom",
                numberOfEmployees: {
                  "@type": "QuantitativeValue",
                  value: "5",
                  unitText: "people",
                },
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "GB",
                  addressLocality: "London",
                  addressRegion: "Greater London",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "info@hoorabgroup.com",
                  contactType: "customer service",
                  availableLanguage: ["English", "Arabic", "Urdu"],
                },
                sameAs: [
                  "https://www.linkedin.com/company/hoorab-group-of-companies-ltd",
                ],
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.hoorabgroup.com/about/#breadcrumb",
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
                    name: "About Us",
                    item: "https://www.hoorabgroup.com/about",
                  },
                ],
              },
            ],
          }),
        }}
      />
      
      {children}
    </>
  );
}