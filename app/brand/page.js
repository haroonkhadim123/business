// app/brands/page.js

import BrandHero from "../component/brandbanner";
import BrandsClient from "../component/brandclient";

// ----------------------
// SEO Metadata
// ----------------------
export const metadata = {
  metadataBase: new URL("https://www.hoorabgroup.com"),
  title: " HOORAB GROUP London UK | Our Brands ",
  description: "Discover HOORAB GROUP's brands in London, UK. Contact info@hoorabgroup.com",
  keywords: ["HOORAB GROUP brands London", "info@hoorabgroup.com"],
  authors: [{ name: "HOORAB GROUP" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://www.hoorabgroup.com/brand",
  },
  openGraph: {
    title: "Our Brands | HOORAB GROUP London UK",
    description: "Discover our brand portfolio in London. Email info@hoorabgroup.com",
    url: "https://www.hoorabgroup.com/brand",
    siteName: "HOORAB GROUP",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOORAB GROUP Brands",
    description: "Discover our brands in London, UK",
  },
};

// ✅ Static brands data - No API call needed


// ----------------------
// Page Component
// ----------------------
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "HOORAB GROUP Brands",
    url: "https://www.hoorabgroup.com/brand",
    description: "Discover our brands in London, UK",
    publisher: {
      "@type": "Organization",
      name: "HOORAB GROUP",
      email: "info@hoorabgroup.com",
    },
    mainEntity: [
      {
        "@type": "Brand",
        name: "Brand A",
        url: "https://www.hoorabgroup.com/brand",
      },
    ],
      breadcrumb: {
    },
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.hoorabgroup.com",
        },
      ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrandHero />
      <BrandsClient />
    </>
  );
}