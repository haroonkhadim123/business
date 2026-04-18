// app/privacy-policy/layout.jsx

export const metadata = {
  title: "HOORAB GROUP | Privacy Policy  ",
  description:
    "Read our Privacy Policy to understand how HOORAB GROUP collects, uses, and protects your information while providing corporate cooperative solutions.",
  keywords: "privacy policy, data protection, HOORAB GROUP, corporate privacy, information security, GDPR compliance",
  
  openGraph: {
    title: "Privacy Policy | HOORAB GROUP",
    description:
      "Learn how HOORAB GROUP protects your personal data and ensures transparency in our corporate cooperative solutions.",
    url: "https://www.hoorabgroup.com/privacy",
    siteName: "HOORAB GROUP",
    type: "website",
    locale: "en_US",
  
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | HOORAB GROUP",
    description:
      "Read our Privacy Policy to understand how HOORAB GROUP protects your information.",
   
    site: "@hoorabgroup",
  },
  
  alternates: {
    canonical: "https://www.hoorabgroup.com/privacy",
  },
  
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
  
 
  
  other: {
    "application-name": "HOORAB GROUP",
    "apple-mobile-web-app-title": "HOORAB GROUP",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function PrivacyPolicyLayout({ children }) {
  return (
    <>
      {children}
      
      {/* Optional: Add structured data for legal document */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "description": metadata.description,
            "url": "https://www.hoorabgroup.com/privacy",
            "isPartOf": {
              "@type": "WebSite",
              "name": "HOORAB GROUP",
              "url": "https://www.hoorabgroup.com"
            },
            "datePublished": "2024-01-01",
            "dateModified": "2024-01-01",
            "publisher": {
              "@type": "Organization",
              "name": "HOORAB GROUP",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.hoorabgroup.com/logo.png"
              }
            },
            "mainEntity": {
              "@type": "LegalDocument",
              "name": "Privacy Policy",
              "description": "HOORAB GROUP Privacy Policy and Data Protection Statement"
            }
          }),
        }}
      />
    </>
  );
}