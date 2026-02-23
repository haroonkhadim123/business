// app/services/corporate-strategy/layout.jsx

export const metadata = {
  title: "HOORAB GROUP | Corporate Strategy Services",
  description:
    "HOORAB GROUP provides expert Corporate Strategy consulting to help organizations define long-term vision, optimize performance, and achieve sustainable growth.",
  keywords:
    "corporate strategy, business strategy, strategic consulting, market analysis, growth planning, HOORAB GROUP, business consulting, competitive advantage",
  authors: [{ name: "HOORAB GROUP" }],
  openGraph: {
    title: "HOORAB GROUP | Corporate Strategy Services",
    description:
      "Expert Corporate Strategy consulting to help organizations define vision, optimize performance, and achieve sustainable growth.",
    url: "https://yourdomain.com/services/corporate-strategy",
    siteName: "HOORAB GROUP",
    images: [
      {
        url: "https://yourdomain.com/corporate-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Strategy Services",
      },
    ],
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOORAB GROUP | Corporate Strategy Services",
    description:
      "Expert Corporate Strategy consulting to help organizations define vision, optimize performance, and achieve sustainable growth.",
    images: ["https://yourdomain.com/corporate-hero.jpg"],
    creator: "@HOORABGROUP",
  },
};

export default function CorporateLayout({ children }) {
  return children;
}