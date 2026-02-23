// app/services/business-planning/layout.jsx

export const metadata = {
  title: "HOORAB GROUP | Business Planning Services",
  description:
    "HOORAB GROUP provides professional Business Planning consulting to help organizations design scalable strategies, optimize operations, and achieve sustainable growth.",
  keywords:
    "business planning, business strategy, strategic planning, financial forecasting, growth planning, HOORAB GROUP, corporate consulting",
  authors: [{ name: "HOORAB GROUP" }],
  openGraph: {
    title: "HOORAB GROUP | Business Planning Services",
    description:
      "Professional Business Planning consulting to help organizations design scalable strategies, optimize operations, and achieve sustainable growth.",
    url: "https://yourdomain.com/services/business-planning",
    siteName: "HOORAB GROUP",
    images: [
      {
        url: "https://yourdomain.com/business-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Business Planning Services",
      },
    ],
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOORAB GROUP | Business Planning Services",
    description:
      "Professional Business Planning consulting to help organizations design scalable strategies, optimize operations, and achieve sustainable growth.",
    images: ["https://yourdomain.com/business-hero.jpg"],
    creator: "@HOORABGROUP",
  },
};

export default function BusinessPlanningLayout({ children }) {
  return children;
}