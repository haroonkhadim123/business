import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { Toaster } from "react-hot-toast";


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
  metadataBase: new URL("https://maingroup.co.uk"),

  title: {
    default: "HOORAB Group | Retail & Wholesale Excellence",
    template: "%s | Main Group",
  },

  description:
    "HOORAB Group operates multiple retail and wholesale brands across UK, GCC and Europe. Delivering sourcing excellence, global distribution and long-term partnerships.",

  keywords: [
    "Retail Company UK",
    "Wholesale Distribution UK",
    "B2B Supply Chain",
    "Private Label Sourcing",
    "Main Group UK",
    "Retail & Wholesale Europe",
  ],

  authors: [{ name: "Main Group" }],
  creator: "HOORAB Group",
  publisher: "HOORAB Group",

  openGraph: {
    title: "HOORAB GROUP | Retail & Wholesale Excellence",
    description:
      "Strategic retail and wholesale operations across international markets.",
    url: "https://maingroup.co.uk",
    siteName: "Main Group",
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
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-[#0B1120] text-white`}
      >
        {/* ================= NAVBAR ================= */}
  
<ClientLayout>
        {/* ================= PAGE CONTENT ================= */}
        {children}
        </ClientLayout>
        


        {/* ================= STRUCTURED DATA (SEO BOOST) ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Main Group",
              url: "https://maingroup.co.uk",
              logo: "https://maingroup.co.uk/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@maingroup.co.uk",
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

