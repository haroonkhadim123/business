// app/services/retail-distribution/layout.jsx

export const metadata = {
  title: "HOORAB GROUP | Retail Distribution Services",
  description:
    "HOORAB GROUP offers reliable Retail Distribution Services supporting business growth through dependable distribution channels, smooth market delivery, and strategic product placement across retail networks.",
  keywords:
    "retail distribution, distribution services, product distribution, retail supply chain, last mile delivery, retail logistics, distribution channels, HOORAB GROUP, retail network, product placement",
  authors: [{ name: "HOORAB GROUP" }],
  openGraph: {
    title: "HOORAB GROUP | Retail Distribution Services",
    description:
      "Reliable Retail Distribution Services supporting business growth through dependable distribution channels, smooth market delivery, and strategic product placement across retail networks.",
    url: "https://hoorabgroup.com/services/retail-distribution",
    siteName: "HOORAB GROUP",
    images: [
      {
        url: "https://hoorabgroup.com/retail-distribution-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Retail Distribution Services",
      },
    ],
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOORAB GROUP | Retail Distribution Services",
    description:
      "Reliable Retail Distribution Services supporting business growth through dependable distribution channels, smooth market delivery, and strategic product placement across retail networks.",
    images: ["https://hoorabgroup.com/retail-distribution-hero.jpg"],
    creator: "@HOORABGROUP",
  },
};

export default function RetailDistributionLayout({ children }) {
  return children;
}