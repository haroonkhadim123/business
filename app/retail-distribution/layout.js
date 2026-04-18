// app/services/retail-distribution/layout.jsx

export const metadata = {
  title: "HOORAB GROUP | Retail Distribution Services London   ",
  description:
    "HOORAB GROUP offers reliable Retail Distribution Services in London & UK. Supporting business growth through dependable distribution channels, smooth market delivery, and strategic product placement across retail networks in London, Manchester, Birmingham, and nationwide.",
  keywords:
    "retail distribution London, distribution services UK, product distribution London, retail supply chain UK, last mile delivery London, retail logistics UK, distribution channels London, HOORAB GROUP UK, retail network London, product placement UK, London logistics, UK warehouse distribution, e-commerce fulfillment London, wholesale distribution UK, 3PL London",
  authors: [{ name: "HOORAB GROUP UK", url: "https://www.hoorabgroup.com" }],
  
  openGraph: {
    title: "Retail Distribution Services London & UK | HOORAB GROUP",
    description:
      "Professional retail distribution services across London and the United Kingdom. Reliable distribution channels, last-mile delivery, and strategic product placement for retail networks.",
    url: "https://www.hoorabgroup.com/retail-distribution",
    siteName: "HOORAB GROUP UK",
    images: [
      {
        url: "https://www.hoorabgroup.com/process-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Retail Distribution Services London - HOORAB GROUP UK",
      },
    
    ],
    locale: "en_GB",
    alternateLocale: ["en_US", "en_AU"],
    type: "website",
    updatedTime: "2025-01-15T00:00:00.000Z",
  },
  

  
  alternates: {
    canonical: "https://www.hoorabgroup.com/retail-distribution",
    languages: {
      'en-GB': 'https://www.hoorabgroup.com/retail-distribution',
      'en-US': 'https://www.hoorabgroup.com/retail-distribution',
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
  
 
  category: "Logistics & Distribution Services UK",
  
  other: {
    "application-name": "HOORAB GROUP UK",
    "apple-mobile-web-app-title": "HOORAB UK Retail",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#1a2b3c",
    "theme-color": "#1a2b3c",
    "geo.region": "GB-LND",
    "geo.placename": "London",
    "geo.position": "51.5074;-0.1278",
    "ICBM": "51.5074, -0.1278",
    "google-site-verification": "your-code",
  },
};

export default function RetailDistributionLayout({ children }) {
  return (
    <>
      {children}
      
      {/* LocalBusiness Schema for London */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "HOORAB GROUP - Retail Distribution London",
            "description": "Professional retail distribution services across London and the United Kingdom",
            "url": "https://www.hoorabgroup.com/retail-distribution",
            "logo": "https://www.hoorabgroup.com/logo.png",
            "image": "https://www.hoorabgroup.com/process-hero.jpg",
            "telephone": "+44-20-XXXX-XXXX",
            "email": "info@hoorabgroup.com",
            "priceRange": "££",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Central London Distribution Hub",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "EC1A 1BB",
              "addressCountry": "UK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            "areaServed": {
              "@type": "City",
              "name": ["London", "Greater London", "Birmingham", "Manchester", "Liverpool", "Leeds", "Bristol", "Sheffield"]
            },
            "sameAs": [
               "https://www.linkedin.com/company/hoorab-group-of-companies-ltd",
      
            ]
          })
        }}
      />
      
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
                "position": 2,
                "name": "Retail Distribution London",
                "item": "https://www.hoorabgroup.com/retail-distribution"
              }
            ]
          })
        }}
      />
      
      {/* Service Schema with UK Focus */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Retail Distribution",
            "provider": {
              "@type": "Organization",
              "name": "HOORAB GROUP",
              "url": "https://www.hoorabgroup.com",
              "logo": "https://www.hoorabgroup.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/hoorab-group-of-companies-ltd",
               
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressRegion": "Greater London",
                "addressCountry": "UK"
              }
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "United Kingdom",
              "containsCity": [
                "London", "Birmingham", "Manchester", "Liverpool", 
                "Leeds", "Bristol", "Sheffield", "Newcastle", 
                "Nottingham", "Leicester"
              ]
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "UK Distribution Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Last Mile Delivery London",
                    "description": "Same-day and next-day last-mile delivery across Greater London"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UK Nationwide Distribution",
                    "description": "Comprehensive distribution coverage across all UK regions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Warehouse & Inventory Management",
                    "description": "Strategic inventory management from London distribution centers"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Fulfillment",
                    "description": "End-to-end e-commerce order fulfillment for UK retailers"
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "Custom",
                "priceCurrency": "GBP"
              }
            },
            "potentialAction": {
              "@type": "ViewAction",
              "target": "https://www.hoorabgroup.com/contact"
            }
          })
        }}
      />
      
      {/* Organization Schema with UK Details */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "HOORAB GROUP UK",
            "url": "https://www.hoorabgroup.com",
            "logo": "https://www.hoorabgroup.com/logo.png",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+44-20-XXXX-XXXX",
                "contactType": "customer service",
                "availableLanguage": ["English"],
                "areaServed": "GB",
                "contactOption": "TollFree"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+44-20-XXXX-XXXX",
                "contactType": "sales",
                "availableLanguage": ["English"],
                "areaServed": "GB-LND"
              }
            ],
            "sameAs": [
              "https://www.linkedin.com/company/hoorab-group-of-companies-ltd",
       
              "https://www.instagram.com/hoorabgroupuk"
            ],
            "foundingLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressCountry": "UK"
              }
            }
          })
        }}
      />
      
      {/* FAQ Schema for UK Retail Distribution */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Does HOORAB GROUP provide retail distribution services in London?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, HOORAB GROUP offers comprehensive retail distribution services across all London boroughs including Central London, East London, West London, North London, and South London, with same-day and next-day delivery options."
                }
              },
              {
                "@type": "Question",
                "name": "What areas of the UK do you cover for distribution?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide nationwide distribution across the United Kingdom including London, Birmingham, Manchester, Liverpool, Leeds, Bristol, Sheffield, Newcastle, Nottingham, Leicester, and all major cities and towns."
                }
              },
              {
                "@type": "Question",
                "name": "What distribution services do you offer in the UK?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer last-mile delivery, warehouse and inventory management, e-commerce fulfillment, wholesale distribution, retail network optimization, and supply chain integration across the UK."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer same-day delivery in London?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide same-day and next-day last-mile delivery services across Greater London for retail partners, with real-time tracking and delivery confirmation."
                }
              }
            ]
          })
        }}
      />
      
      {/* Product Schema for Distribution Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "UK Retail Distribution Services",
            "description": "Complete retail distribution and logistics solutions across London and the United Kingdom",
            "brand": {
              "@type": "Brand",
              "name": "HOORAB GROUP"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "price": "Custom pricing based on volume",
              "priceCurrency": "GBP",
              "eligibleRegion": {
                "@type": "Country",
                "name": "UK"
              }
            }
          })
        }}
      />
    </>
  );
}