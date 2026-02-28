// page.js (server component)
export const metadata = {
  title: "HOORAB GROUP | Admin Dashboard",
  description:
    "Secure administration dashboard for HOORAB GROUP. Manage jobs, applications, brands, and corporate content efficiently.",
  robots: {
    index: false,  // Admin pages should not be indexed
    follow: false,
  },
  openGraph: {
    title: "HOORAB GROUP Admin Dashboard",
    description:
      "Corporate admin panel for managing jobs, brands, and applications.",
    url: "https://yourdomain.com/admin",
    siteName: "HOORAB GROUP",
    locale: "en_US",
    type: "website",
  },
};

import DashboardPageClient from "./dsahboardclientlayout"; // your "use client" page

export default function DashboardPage() {
  return <DashboardPageClient />;
}