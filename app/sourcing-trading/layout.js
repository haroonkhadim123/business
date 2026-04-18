// app/services/sourcing-trading/layout.jsx

export const metadata = {
  title: "  HOORAB GROUP | Sourcing & Trading Solutions ",
  description:
    "HOORAB GROUP provides expert Sourcing & Trading Solutions connecting businesses with trusted suppliers, quality products, and profitable trading opportunities worldwide. Global procurement, supplier verification, and supply chain management.",
  keywords:
    "sourcing solutions, trading solutions, global sourcing, supplier verification, quality control, product sourcing, international trade, supply chain management, HOORAB GROUP, wholesale trading, procurement services, global procurement, B2B trading, import export services, supplier network, trade facilitation, cross border trade, logistics integration, supply chain optimization, vendor management, purchase order management",
  authors: [{ name: "HOORAB GROUP", url: "https://www.hoorabgroup.com" }],
  
  openGraph: {
    title: "Sourcing & Trading Solutions | HOORAB GROUP",
    description:
      "Expert Sourcing & Trading Solutions connecting businesses with trusted suppliers, quality products, and profitable trading opportunities worldwide. Global procurement and supply chain excellence.",
    url: "https://www.hoorabgroup.com/sourcing-trading",
    siteName: "HOORAB GROUP",
    images: [
      {
        url: "https://www.hoorabgroup.com/sourcing-trading.jpg",
        width: 1200,
        height: 630,
        alt: "Global Sourcing & Trading Solutions - HOORAB GROUP",
      },
   
    ],
    locale: "en_SA",
    alternateLocale: ["en_US", "en_GB", "en_AE", "ar_SA"],
    type: "website",
    updatedTime: "2025-01-15T00:00:00.000Z",
    emails: ["info@hoorabgroup.com"],
    phoneNumbers: ["+966-XX-XXX-XXXX"],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Sourcing & Trading Solutions | HOORAB GROUP",
    description:
      "Expert Sourcing & Trading Solutions connecting businesses with trusted suppliers, quality products, and profitable trading opportunities worldwide.",
   
    creator: "@HOORABGROUP",
    site: "@HOORABGROUP",
    label1: "Service Type",
    data1: "Global Sourcing & Trading",
    label2: "Coverage",
    data2: "Worldwide",
  },
  
  alternates: {
    canonical: "https://www.hoorabgroup.com/sourcing-trading",
    languages: {
      'en': 'https://www.hoorabgroup.com/sourcing-trading',
      'en-US': 'https://www.hoorabgroup.com/sourcing-trading',
      'en-GB': 'https://www.hoorabgroup.com/sourcing-trading',
    
    },
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
  

  
  category: "Business Services - Sourcing & Trading",
  
  other: {
    "application-name": "HOORAB GROUP",
    "apple-mobile-web-app-title": "HOORAB Trading",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#1a2b3c",
    "theme-color": "#1a2b3c",
    "geo.region": "SA-01",
    "geo.placename": "Riyadh",
    "geo.position": "24.7136;46.6753",
    "ICBM": "24.7136, 46.6753",
    "copyright": "HOORAB GROUP",
    "author": "HOORAB GROUP",
  },
};

export default function SourcingTradingLayout({ children }) {
  return (
    <>
      {children}
      
      {/* BreadcrumbList Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.hoorabgroup.com"
              },
          
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Sourcing & Trading Solutions",
                "item": "https://www.hoorabgroup.com/sourcing-trading"
              }
            ]
          })
        }}
      />
      
      {/* Service Schema for Sourcing & Trading */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Sourcing & Trading Solutions",
            "name": "Global Sourcing and Trading Services",
            "description": "Expert sourcing and trading solutions connecting businesses with trusted suppliers worldwide. Includes supplier verification, quality control, and supply chain management.",
            "provider": {
              "@type": "Organization",
              "name": "HOORAB GROUP",
              "url": "https://www.hoorabgroup.com",
              "logo": "https://www.hoorabgroup.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/hoorab-group-of-companies-ltd",
             
                "https://www.instagram.com/hoorabgroup"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Riyadh",
                "addressRegion": "Riyadh Province",
                "addressCountry": "SA"
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": ["Saudi Arabia", "UAE", "Qatar", "Kuwait", "Oman", "Bahrain", "Egypt", "Jordan", "Turkey", "China", "India", "Germany", "UK", "USA"]
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Sourcing & Trading Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Global Supplier Sourcing",
                    "description": "Identification and verification of trusted suppliers worldwide"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Quality Control & Inspection",
                    "description": "Comprehensive quality assurance and product inspection services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Trade Facilitation",
                    "description": "End-to-end trade documentation, logistics, and customs clearance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Supply Chain Integration",
                    "description": "Seamless integration of sourcing, logistics, and distribution"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Procurement Management",
                    "description": "Strategic procurement and purchase order management"
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "Custom Quote",
                "priceCurrency": "SAR"
              }
            },
            "potentialAction": {
              "@type": "ViewAction",
              "target": "https://www.hoorabgroup.com/contact"
            }
          })
        }}
      />
      
      {/* Organization Schema with www domain */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "HOORAB GROUP",
            "url": "https://www.hoorabgroup.com",
            "logo": "https://www.hoorabgroup.com/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/hoorab-group-of-companies-ltd",
          
              "https://www.facebook.com/hoorabgroup",
              "https://www.instagram.com/hoorabgroup",
          
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+966-XX-XXX-XXXX",
              "contactType": "customer service",
              "availableLanguage": ["English", "Arabic"],
              "areaServed": "worldwide"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Business District",
              "addressLocality": "Riyadh",
              "addressRegion": "Riyadh Province",
              "postalCode": "12345",
              "addressCountry": "SA"
            },
            "foundingDate": "2010",
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": "100+"
            }
          })
        }}
      />
      
      {/* FAQ Schema for Sourcing & Trading */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What sourcing services does HOORAB GROUP offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "HOORAB GROUP offers comprehensive sourcing solutions including global supplier identification, supplier verification, quality control inspections, product sourcing, procurement management, and supply chain integration across multiple industries."
                }
              },
              {
                "@type": "Question",
                "name": "Which countries do you source from?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We source from major manufacturing hubs worldwide including China, India, Turkey, Germany, UK, USA, and various countries across Southeast Asia, Europe, and the Middle East."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide quality control services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer comprehensive quality control and product inspection services including factory audits, pre-shipment inspections, during production checks, and container loading supervision."
                }
              },
              {
                "@type": "Question",
                "name": "What industries do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve diverse industries including retail, construction, manufacturing, hospitality, healthcare, automotive, food and beverage, and consumer goods."
                }
              },
              {
                "@type": "Question",
                "name": "How do you verify suppliers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We conduct comprehensive supplier verification including factory audits, certification validation, financial checks, reference verification, and sample testing to ensure reliability and quality."
                }
              }
            ]
          })
        }}
      />
      
      {/* Product Schema for Trading Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Global Sourcing & Trading Solutions",
            "description": "Professional sourcing and trading services connecting businesses with trusted suppliers worldwide.",
            "brand": {
              "@type": "Brand",
              "name": "HOORAB GROUP"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "HOORAB GROUP"
            },
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "SAR",
              "lowPrice": "10000",
              "highPrice": "10000000",
              "offerCount": "500+"
            }
          })
        }}
      />
      
      {/* Global Trade Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TradeAction",
            "name": "International Trade Facilitation",
            "description": "End-to-end trade documentation, logistics coordination, and customs clearance services",
            "target": "https://www.hoorabgroup.com/sourcing-trading"
          })
        }}
      />
      
      {/* WebSite Schema for Domain Authority */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "HOORAB GROUP",
            "url": "https://www.hoorabgroup.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.hoorabgroup.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  );
}