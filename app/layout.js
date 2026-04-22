// app/layout.js
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

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
    default: "HOORAB GROUP | Premier Retail & Wholesale Distribution UK, GCC & Europe",
    template: "%s | HOORAB GROUP - Global Supply Chain Solutions",
  },

  description: "HOORAB GROUP is a leading retail and wholesale distribution company operating across UK, GCC and Europe. Specializing in B2B supply chain, private label sourcing, and global logistics with 50k+ orders fulfilled.",

  keywords: [
    "retail company UK",
    "wholesale distribution UK",
    "B2B supply chain solutions",
    "private label sourcing",
    "global logistics provider",
    "HOORAB GROUP",
    "retail wholesale Europe",
    "GCC distribution",
    "supply chain management UK",
    "bulk wholesale supplier",
  ],

  authors: [{ name: "HOORAB GROUP", url: "https://www.hoorabgroup.com" }],
  creator: "HOORAB GROUP",
  publisher: "HOORAB GROUP",
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
    description: "Leading B2B supply chain and wholesale distribution company. 50k+ orders fulfilled, 100+ business partners, 10k+ satisfied customers globally.",
    url: "https://www.hoorabgroup.com",
    siteName: "HOORAB Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HOORAB GROUP - Retail & Wholesale Excellence",
      },
    ],
    locale: "en_GB",
    type: "website",
    emails: ["info@hoorabgroup.com"],
    phoneNumbers: ["+44XXXXXXXXX"],
  },

  twitter: {
    card: "summary_large_image",
    title: "HOORAB GROUP | Global Supply Chain Solutions",
    description: "Premier retail & wholesale distribution across UK, GCC & Europe",
    images: ["/twitter-image.jpg"],
  },

  applicationName: "HOORAB GROUP",
  appleWebApp: {
    capable: true,
    title: "HOORAB GROUP",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  
  other: {
    "contact:email": "info@hoorabgroup.com",
    "contact:phone": "+44XXXXXXXXX",
    "business:hours": "Monday-Friday 9:00-18:00 GMT",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
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
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0B1120" />
        
        {/* Mobile Optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Geo tags */}
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        
        {/* Schema.org markup */}
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
                },
              ],
            }),
          }}
        />
      </head>
      
      <body className={`${poppins.variable} ${inter.variable} antialiased bg-[#0B1120] text-white`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}