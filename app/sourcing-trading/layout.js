// app/services/sourcing-trading/layout.jsx

export const metadata = {
  title: "HOORAB GROUP | Sourcing & Trading Solutions",
  description:
    "HOORAB GROUP provides expert Sourcing & Trading Solutions connecting businesses with trusted suppliers, quality products, and profitable trading opportunities worldwide.",
  keywords:
    "sourcing solutions, trading solutions, global sourcing, supplier verification, quality control, product sourcing, international trade, supply chain management, HOORAB GROUP, wholesale trading, procurement services",
  authors: [{ name: "HOORAB GROUP" }],
  openGraph: {
    title: "HOORAB GROUP | Sourcing & Trading Solutions",
    description:
      "Expert Sourcing & Trading Solutions connecting businesses with trusted suppliers, quality products, and profitable trading opportunities worldwide.",
    url: "https://hoorabgroup.com/services/sourcing-trading",
    siteName: "HOORAB GROUP",
    images: [
      {
        url: "https://hoorabgroup.com/sourcing-trading-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sourcing & Trading Solutions",
      },
    ],
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOORAB GROUP | Sourcing & Trading Solutions",
    description:
      "Expert Sourcing & Trading Solutions connecting businesses with trusted suppliers, quality products, and profitable trading opportunities worldwide.",
    images: ["https://hoorabgroup.com/sourcing-trading-hero.jpg"],
    creator: "@HOORABGROUP",
  },
};

export default function SourcingTradingLayout({ children }) {
  return children;
}