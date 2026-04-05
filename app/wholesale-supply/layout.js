// app/services/wholesale-supply/layout.jsx

export const metadata = {
  title: "HOORAB GROUP | Wholesale Supply Solutions",
  description:
    "HOORAB GROUP provides dependable wholesale supply solutions with competitive pricing, consistent quality, and efficient product availability for retailers, resellers, and commercial partners.",
  keywords:
    "wholesale supply, bulk supply, wholesale distribution, product sourcing, wholesale pricing, supply chain solutions, wholesale products, HOORAB GROUP, B2B wholesale, commercial supply",
  authors: [{ name: "HOORAB GROUP" }],
  openGraph: {
    title: "HOORAB GROUP | Wholesale Supply Solutions",
    description:
      "Dependable wholesale supply solutions with competitive pricing, consistent quality, and efficient product availability for retailers, resellers, and commercial partners.",
    url: "https://hoorabgroup.com/services/wholesale-supply",
    siteName: "HOORAB GROUP",
    images: [
      {
        url: "https://hoorabgroup.com/wholesale-supply-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Wholesale Supply Solutions",
      },
    ],
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOORAB GROUP | Wholesale Supply Solutions",
    description:
      "Dependable wholesale supply solutions with competitive pricing, consistent quality, and efficient product availability for retailers, resellers, and commercial partners.",
    images: ["https://hoorabgroup.com/wholesale-supply-hero.jpg"],
    creator: "@HOORABGROUP",
  },
};

export default function WholesaleSupplyLayout({ children }) {
  return children;
}