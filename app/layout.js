import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { Toaster } from "react-hot-toast";
import SessionWrapper from "./component/SessionWrapper";
import NetworkLoader from "./component/NetworkLoader";

/* ================= PREMIUM CORPORATE FONTS ================= */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap", // ✅ FOUT prevention for better performance
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap", // ✅ FOUT prevention
});

/* ================= ENHANCED SEO METADATA ================= */
export const metadata = {
  metadataBase: new URL("https://www.hoorabgroup.com"),
  
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
      'en-GB': '/en-GB',
    },
  },

  title: {
    default: "HOORAB Group | Premier Retail & Wholesale Distribution UK, GCC & Europe",
    template: "%s | HOORAB Group - Global Supply Chain Solutions",
  },

  description:
    "HOORAB Group is a leading retail and wholesale distribution company operating across UK, GCC and Europe. Specializing in B2B supply chain, private label sourcing, and global logistics with 50k+ orders fulfilled.",

  keywords: [
    "retail company UK",
    "wholesale distribution UK",
    "B2B supply chain solutions",
    "private label sourcing",
    "global logistics provider",
    "HOORAB Group",
    "retail wholesale Europe",
    "GCC distribution",
    "supply chain management UK",
    "bulk wholesale supplier",
  ],

  authors: [{ name: "HOORAB Group", url: "https://www.hoorabgroup.com" }],
  creator: "HOORAB Group",
  publisher: "HOORAB Group",
  category: "Retail & Wholesale Distribution",
  
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



  openGraph: {
    title: "HOORAB Group | Premier Retail & Wholesale Distribution UK, GCC & Europe",
    description:
      "Leading B2B supply chain and wholesale distribution company. 50k+ orders fulfilled, 100+ business partners, 10k+ satisfied customers globally.",
    url: "https://www.hoorabgroup.com",
    siteName: "HOORAB Group",
    images: [
      {
        url: "/og-image.jpg", // ✅ Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "HOORAB Group - Retail & Wholesale Excellence",
      },
    ],
    locale: "en_GB",
    type: "website",
    emails: ["info@hoorabgroup.com"],
    phoneNumbers: ["+44XXXXXXXXX"], // ✅ Add your business phone
  },

  twitter: {
    card: "summary_large_image",
    title: "HOORAB Group | Global Supply Chain Solutions",
    description: "Premier retail & wholesale distribution across UK, GCC & Europe",
    images: ["/twitter-image.jpg"], // ✅ Create this image (1200x600px)

  },

  // ✅ Additional SEO properties
  applicationName: "HOORAB Group",
  appleWebApp: {
    capable: true,
    title: "HOORAB Group",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  
  // ✅ Viewport settings for mobile SEO
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  
  // ✅ Verification for business
  other: {
    "contact:email": "info@hoorabgroup.com",
    "contact:phone": "+44XXXXXXXXX",
    "business:hours": "Monday-Friday 9:00-18:00 GMT",
  },
};

/* ================= ROOT LAYOUT WITH ENHANCED SEO ================= */
export default function RootLayout({ children }) {
  return (
    <html 
      lang="en-GB" 
      data-scroll-behavior="smooth"
      className="scroll-smooth"
    >
      <head>
        {/* ✅ Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PW42MT3J');
            `,
          }}
        />
        
        {/* ✅ Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* ✅ DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* ✅ Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0B1120" />
        
        {/* ✅ Mobile Optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* ✅ Performance hints */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
        
        {/* ✅ Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* ✅ Additional meta tags for better SEO */}
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        
        {/* ✅ Dublin Core metadata */}
        <meta name="DC.title" content="HOORAB Group" />
        <meta name="DC.creator" content="HOORAB Group" />
        <meta name="DC.subject" content="Retail & Wholesale Distribution" />
        <meta name="DC.description" content="Premier retail and wholesale distribution company serving UK, GCC and Europe" />
        <meta name="DC.publisher" content="HOORAB Group" />
        <meta name="DC.language" content="en" />
        
        {/* ✅ Link preview optimization */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="HOORAB Group - Global Supply Chain Solutions" />
        
        {/* ✅ Twitter card optimization */}
        <meta name="twitter:image:alt" content="HOORAB Group - Retail & Wholesale Excellence" />
        
        {/* ✅ Schema.org markup in head for better indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.hoorabgroup.com/#organization",
                  name: "HOORAB Group",
                  url: "https://www.hoorabgroup.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.hoorabgroup.com/logo.png",
                    width: "512",
                    height: "512",
                  },
                  sameAs: [
                   "https://www.linkedin.com/company/hoorab-group-of-companies-ltd",
                  
                  ],
                  email: "info@hoorabgroup.com",
                  telephone: "+44XXXXXXXXX",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "GB",
                    addressLocality: "London",
                    addressRegion: "Greater London",
                    postalCode: "XXXXXX",
                    streetAddress: "Your Business Address",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+44XXXXXXXXX",
                    contactType: "customer service",
                    email: "hello@hoorabgroup.com",
                    availableLanguage: ["English", "Arabic", "Urdu"],
                    areaServed: ["GB", "AE", "SA", "QA", "KW", "EU"],
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      opens: "09:00",
                      closes: "18:00",
                      timeZone: "Europe/London",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.hoorabgroup.com/#website",
                  url: "https://www.hoorabgroup.com",
                  name: "HOORAB Group",
                  description: "Premier retail and wholesale distribution company",
                  publisher: {
                    "@id": "https://www.hoorabgroup.com/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://www.hoorabgroup.com/search?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                  inLanguage: "en-GB",
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.hoorabgroup.com/#localbusiness",
                  name: "HOORAB Group",
                  image: "https://www.hoorabgroup.com/logo.png",
                  priceRange: "$$",
                  servesCuisine: "Business Services",
                  areaServed: ["United Kingdom", "GCC Countries", "European Union"],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Supply Chain Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Wholesale Distribution",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Private Label Sourcing",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Global Logistics",
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </head>
      
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-[#0B1120] text-white`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PW42MT3J"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>

        {/* Performance optimization: Priority loading for above-fold content */}
        <NetworkLoader />
        
        <SessionWrapper>
          <ClientLayout>
            {children}
          </ClientLayout>
        </SessionWrapper>

        {/* Toast notifications */}
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
      </body>
    </html>
  );
}