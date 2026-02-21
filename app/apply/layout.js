// app/apply/page.js (or wherever your apply page lives)

// ----------------------
// SEO Metadata
// ----------------------
export const metadata = {
  title: "HOORAB GROUP | Apply Now",
  description:
    "Apply for exciting career opportunities at HOORAB GROUP in Saudi Arabia. Fill out the form to join our dynamic corporate team and build your professional future.",
  keywords: [
    "HOORAB GROUP Careers Saudi Arabia",
    "Jobs in Saudi Arabia",
    "Apply for Corporate Jobs KSA",
    "HOORAB GROUP Application Form",
  ],
  alternates: {
    canonical: "http://localhost:3000/apply", // replace with live domain later
  },
  openGraph: {
    title: "HOORAB GROUP | Apply Now",
    description:
      "Submit your application to join HOORAB GROUP's team in Saudi Arabia. Explore career opportunities and grow your professional journey.",
    url: "http://localhost:3000/apply",
    siteName: "HOORAB GROUP",
    
    locale: "en_SA",
    type: "website",
  },

};

// ----------------------
// Layout / Page
// ----------------------
export default function ApplyLayout({ children }) {
  return children;
}