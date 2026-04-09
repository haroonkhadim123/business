import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { Toaster } from "react-hot-toast";
import SessionWrapper from "./component/SessionWrapper";
import NetworkLoader from "./component/NetworkLoader";

// ❌ Remove this import from here
// import { usePathname } from 'next/navigation';

/* ================= PREMIUM CORPORATE FONTS ================= */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

/* ================= SEO METADATA ================= */
export const metadata = {
  metadataBase: new URL("https://hoorabgroup.com"), // ✅ Using main domain (no www)
  
  alternates: {
    canonical: '/', // This will automatically use the current path
  },

  title: {
    default: "HOORAB Group | Retail & Wholesale Excellence",
    template: "%s | HOORAB Group",
  },

  description:
    "HOORAB Group operates multiple retail and wholesale brands across UK, GCC and Europe. Delivering sourcing excellence, global distribution and long-term partnerships.",

  keywords: [
    "Retail Company UK",
    "Wholesale Distribution UK",
    "B2B Supply Chain",
    "Private Label Sourcing",
    "HOORAB Group UK",
    "Retail & Wholesale Europe",
  ],

  authors: [{ name: "HOORAB Group" }],
  creator: "HOORAB Group",
  publisher: "HOORAB Group",

  openGraph: {
    title: "HOORAB GROUP | Retail & Wholesale Excellence",
    description:
      "Strategic retail and wholesale operations across international markets.",
    url: "https://hoorabgroup.com", // ✅ Main domain
    siteName: "HOORAB Group",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HOORAB Group",
    description:
      "Retail & Wholesale Excellence Across Markets",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ================= ROOT LAYOUT ================= */
export default function RootLayout({ children }) {
  // ❌ Remove this line - you can't use usePathname() here
  // const pathname = usePathname(); 
  
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Google Tag Manager - Head Script */}
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
        
        {/* ✅ Canonical tag removed from here - handled by metadata.alternates above */}
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-[#0B1120] text-white`}
      >
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PW42MT3J"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <NetworkLoader />
        
        <SessionWrapper>
          <ClientLayout>
            {children}
          </ClientLayout>
        </SessionWrapper>

        {/* Structured Data (SEO BOOST) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HOORAB Group",
              url: "https://hoorabgroup.com", // ✅ Main domain
              logo: "https://hoorabgroup.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@hoorabgroup.com",
                contactType: "customer service",
              },
            }),
          }}
        />
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}