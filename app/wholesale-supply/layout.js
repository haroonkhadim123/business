// app/services/wholesale-supply/layout.jsx

export const metadata = {
  title: "HOORAB GROUP | Wholesale Supply Solutions London UK  ",
  description:
    "HOORAB GROUP provides dependable wholesale supply solutions in London and across the UK with competitive pricing, consistent quality, and efficient product availability for retailers, resellers, and commercial partners. B2B wholesale distribution across the United Kingdom.",
  keywords:
    "wholesale supply London, wholesale distribution UK, bulk supply London, wholesale products UK, B2B wholesale London, wholesale suppliers UK, wholesale pricing London, supply chain solutions UK, wholesale marketplace London, bulk purchasing UK, wholesale logistics London, trade supply UK, volume pricing London, wholesale partners UK, London wholesale market, UK distribution centers, wholesale procurement London, commercial supply UK, wholesale inventory solutions London, UK wholesale network",
  authors: [{ name: "HOORAB GROUP UK", url: "https://www.hoorabgroup.com" }],
  
  openGraph: {
    title: "Wholesale Supply Solutions London & UK | HOORAB GROUP",
    description:
      "Dependable wholesale supply solutions across London and the United Kingdom. Competitive pricing, consistent quality, and efficient B2B wholesale distribution for retailers and commercial partners.",
    url: "https://www.hoorabgroup.com/wholesale-supply",
    siteName: "HOORAB GROUP UK",
    images: [
      {
        url: "https://www.hoorabgroup.com/images/og/wholesale-supply.jpg",
        width: 1200,
        height: 630,
        alt: "Wholesale Supply Solutions London - HOORAB GROUP UK B2B Distribution",
      },
  
    ],
    locale: "en_GB",
    alternateLocale: ["en_US", "en_SA", "en_AE", "en_AU"],
    type: "website",
    updatedTime: "2025-01-15T00:00:00.000Z",
    emails: [ "info@hoorabgroup.com"],
    phoneNumbers: ["+44-20-XXXX-XXXX", "+44-20-XXXX-XXXX"],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Wholesale Supply Solutions London & UK | HOORAB GROUP",
    description:
      "Dependable wholesale supply solutions across London and the United Kingdom. Competitive B2B wholesale distribution for retailers and commercial partners.",
  
    creator: "@HOORABGROUP",
    site: "@HOORABGROUP",
    label1: "Service Type",
    data1: "B2B Wholesale Supply UK",
    label2: "Min Order",
    data2: "Bulk Quantities",
    label3: "Coverage",
    data3: "London & UK Nationwide",
    label4: "Delivery",
    data4: "Next Day Delivery Available",
  },
  
  alternates: {
    canonical: "https://www.hoorabgroup.com/wholesale-supply",
 
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
  

  
  category: "Wholesale & Distribution Services UK",
  
  other: {
    "application-name": "HOORAB GROUP Wholesale UK",
    "apple-mobile-web-app-title": "HOORAB Wholesale London",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#1a2b3c",
    "theme-color": "#1a2b3c",
    "geo.region": "GB-LND",
    "geo.placename": "London",
    "geo.position": "51.5074;-0.1278",
    "ICBM": "51.5074, -0.1278",
    "copyright": "HOORAB GROUP UK",
    "business-hours": "Mon-Fri 8:00-18:00",
    "price-range": "££",
    "UK-company-number": "Your-Company-Number",
    "UK-VAT-number": "Your-VAT-Number",
  },
};

export default function WholesaleSupplyLayout({ children }) {
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
                "position": 2,
                "name": "Wholesale Supply Solutions UK",
                "item": "https://www.hoorabgroup.com/wholesale-supply"
              }
            ]
          })
        }}
      />
      
      {/* Wholesale Business Schema for London UK */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WholesaleStore",
            "name": "HOORAB GROUP Wholesale Supply - London UK",
            "description": "Dependable wholesale supply solutions across London and the United Kingdom with competitive pricing and consistent quality for retailers and commercial partners.",
            "url": "https://www.hoorabgroup.com/wholesale-supply",
            "logo": "https://www.hoorabgroup.com/logo.png",
            "image": "https://www.hoorabgroup.com/images/wholesale-supply.jpg",
            "telephone": "+44-20-XXXX-XXXX",
            "email": "info@hoorabgroup.com",
      
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "London Wholesale Distribution Centre",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "E1 6AN",
              "addressCountry": "UK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            ],
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": ["Greater London", "Birmingham", "Manchester", "Liverpool", "Leeds", "Bristol", "Sheffield", "Newcastle", "Nottingham", "Leicester", "Southampton", "Portsmouth"]
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Wholesale Product Categories UK",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Consumer Goods UK",
                    "description": "Bulk consumer products for UK retailers"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Industrial Supplies",
                    "description": "Industrial and commercial supplies for UK businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Food & Beverage",
                    "description": "Wholesale food and beverage products for UK market"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Electronics",
                    "description": "Bulk electronics and accessories for UK resellers"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Building Materials",
                    "description": "Construction and building supplies for UK projects"
                  }
                }
              ]
            },
            "paymentAccepted": ["Credit Card", "Debit Card", "Bank Transfer", "BACS", "Cheque", "Letter of Credit"],
            "currenciesAccepted": "GBP"
          })
        }}
      />
      
      {/* Service Schema for Wholesale Supply UK */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Wholesale Supply UK",
            "name": "B2B Wholesale Supply Solutions London & UK",
            "description": "Comprehensive wholesale supply services across the United Kingdom including bulk purchasing, inventory management, and B2B distribution with next-day delivery in London.",
            "provider": {
              "@type": "Organization",
              "name": "HOORAB GROUP UK",
              "url": "https://www.hoorabgroup.com",
              "logo": "https://www.hoorabgroup.com/logo.png",
              "sameAs": [
          "https://www.linkedin.com/company/hoorab-group-of-companies-ltd",
             
                "https://www.facebook.com/hoorabgroupuk"
              ]
            },
            "areaServed": {
              "@type": "Country",
              "name": "United Kingdom"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Wholesale Supply Services UK",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bulk Order Fulfillment UK",
                    "description": "Efficient processing and fulfillment of bulk wholesale orders across the UK"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Next Day Delivery London",
                    "description": "Fast next-day delivery for wholesale orders within Greater London"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UK Inventory Management",
                    "description": "Strategic inventory planning and stock optimization for UK businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Volume Pricing & Discounts",
                    "description": "Competitive wholesale pricing and volume discounts for UK retailers"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UK Quality Assurance",
                    "description": "Consistent quality control and product verification for UK standards"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UK Logistics Coordination",
                    "description": "End-to-end logistics and delivery management across the UK"
                  }
                }
              ]
            },
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "GBP",
              "lowPrice": "1000",
              "highPrice": "1000000",
              "offerCount": "5000+"
            },
            "potentialAction": {
              "@type": "OrderAction",
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
            "sameAs": [
              "https://www.linkedin.com/company/hoorab-group-of-companies-ltd",
  
              "https://www.facebook.com/hoorabgroup",
              "https://www.instagram.com/hoorabgroup"
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+44-20-XXXX-XXXX",
                "contactType": "wholesale sales",
                "availableLanguage": ["English"],
                "areaServed": "GB"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+44-20-XXXX-XXXX",
                "contactType": "customer support",
                "availableLanguage": ["English"],
                "areaServed": "GB-LND"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "London Wholesale Distribution Hub",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "E1 6AN",
              "addressCountry": "UK"
            },
            "foundingDate": "2010",
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": "50-100"
            },
         
          })
        }}
      />
      
      {/* Local Business Schema for London */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "HOORAB GROUP Wholesale Distribution Center - London",
            "description": "Leading wholesale supply and distribution center in London, serving retailers and businesses across the United Kingdom",
            "image": "https://www.hoorabgroup.com/images/wholesale-center-london.jpg",
            "telephone": "+44-20-XXXX-XXXX",
            "priceRange": "£££",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Industrial District, East London",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "E1 6AN",
              "addressCountry": "UK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "openingHours": "Mon-Fri 08:00-18:00",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "BACS", "Letter of Credit"],
            "currenciesAccepted": "GBP",
            "areaServed": {
              "@type": "City",
              "name": ["London", "Birmingham", "Manchester", "Liverpool", "Leeds", "Bristol"]
            }
          })
        }}
      />
      
      {/* Product Schema for Wholesale Items UK */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Wholesale Supply Catalog - UK",
            "description": "Comprehensive wholesale product catalog with competitive bulk pricing for UK retailers and businesses",
            "brand": {
              "@type": "Brand",
              "name": "HOORAB GROUP UK"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "HOORAB GROUP UK"
            },
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "GBP",
              "lowPrice": "1000",
              "highPrice": "1000000",
              "offerCount": "5000+"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "187",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
      
      {/* FAQ Schema for Wholesale Supply UK */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Does HOORAB GROUP offer wholesale supply in London?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, HOORAB GROUP provides comprehensive wholesale supply services across all London boroughs including Central London, East London, West London, North London, and South London with next-day delivery options available."
                }
              },
              {
                "@type": "Question",
                "name": "What wholesale products do you supply in the UK?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We supply a wide range of wholesale products across the UK including consumer goods, industrial supplies, food and beverage, electronics, building materials, retail products, and commercial equipment for B2B customers."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer volume discounts for UK wholesale orders?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer competitive wholesale pricing with volume-based discounts for UK businesses. The more you order, the better pricing you receive. Contact our UK wholesale team for custom quotes."
                }
              },
              {
                "@type": "Question",
                "name": "What is the minimum order quantity for wholesale in the UK?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Minimum order quantities vary by product category. Generally, our wholesale MOQ starts from £1,000 for UK customers. Contact us for specific product MOQ requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer next-day delivery in London?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer next-day delivery for wholesale orders within Greater London. Orders placed before 2 PM Monday-Thursday qualify for next-day delivery."
                }
              },
              {
                "@type": "Question",
                "name": "How do I become a wholesale partner in the UK?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To become a UK wholesale partner, contact our team via phone, email, or website contact form. You'll need to provide your UK business registration documents, and we'll set up your wholesale account with customized pricing."
                }
              },
              {
                "@type": "Question",
                "name": "Do you deliver wholesale orders across the United Kingdom?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide nationwide wholesale delivery across the United Kingdom including London, Birmingham, Manchester, Liverpool, Leeds, Bristol, Sheffield, Newcastle, Nottingham, Leicester, Southampton, Portsmouth, and all major cities."
                }
              }
            ]
          })
        }}
      />
      
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "HOORAB GROUP Wholesale UK",
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
      
      {/* UK Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "HOORAB GROUP UK Limited",
            "legalName": "HOORAB GROUP UK Ltd",
         
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "London Wholesale Centre",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "E1 6AN",
              "addressCountry": "UK"
            },
            "location": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "UK"
              }
            }
          })
        }}
      />
    </>
  );
}