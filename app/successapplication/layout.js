// app/successapplication/layout.jsx

export const metadata = {
  title: " HOORAB GROUP | Application Submitted Successfully",
  description:
    "Your application has been successfully submitted to HOORAB GROUP. Our team will review your details and contact you soon regarding partnership opportunities.",
  keywords:
    "application submitted, partnership application, HOORAB GROUP, success, thank you, business partnership, retail wholesale application",
  authors: [{ name: "HOORAB GROUP" }],
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Application Submitted Successfully | HOORAB GROUP",
    description:
      "Your application has been successfully submitted to HOORAB GROUP. Our team will review your details and contact you soon.",
    url: "https://hoorabgroup.com/successapplication",
    siteName: "HOORAB GROUP",
    images: [
      {
        url: "https://hoorabgroup.com/success-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Application Submitted Successfully",
      },
    ],
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Application Submitted Successfully | HOORAB GROUP",
    description:
      "Your application has been successfully submitted to HOORAB GROUP. Our team will review your details and contact you soon.",
    images: ["https://hoorabgroup.com/success-og-image.jpg"],
    creator: "@HOORABGROUP",
  },
};

export default function SuccessApplicationLayout({ children }) {
 return children;
}