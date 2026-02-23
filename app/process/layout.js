// app/services/process-optimization/layout.jsx

export const metadata = {
  title: "HOORAB GROUP | Process Optimization Services",
  description:
    "HOORAB GROUP offers expert Process Optimization consulting to streamline operations, improve efficiency, reduce costs, and enhance overall business performance.",
  keywords:
    "process optimization, operational efficiency, workflow improvement, cost reduction, business performance, HOORAB GROUP, corporate consulting",
  authors: [{ name: "HOORAB GROUP" }],
  openGraph: {
    title: "HOORAB GROUP | Process Optimization Services",
    description:
      "Expert Process Optimization consulting to streamline operations, improve efficiency, reduce costs, and enhance overall business performance.",
    url: "https://yourdomain.com/services/process-optimization",
    siteName: "HOORAB GROUP",
    images: [
      {
        url: "https://yourdomain.com/process-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Process Optimization Services",
      },
    ],
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOORAB GROUP | Process Optimization Services",
    description:
      "Expert Process Optimization consulting to streamline operations, improve efficiency, reduce costs, and enhance overall business performance.",
    images: ["https://yourdomain.com/process-hero.jpg"],
    creator: "@HOORABGROUP",
  },
};

export default function ProcessOptimizationLayout({ children }) {
  return children;
}