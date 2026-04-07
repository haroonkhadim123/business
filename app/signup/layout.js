// app/signup/layout.js
export const metadata = {
  title: "HOORAB GROUP | Sign Up",
  description: "Create your HOORAB GROUP account to access your dashboard, applications, and partnership portal. Join our community today!",
  keywords: ["sign up", "create account", "register", "hoorab group", "partner portal", "career portal", "join now"],
  robots: "index, follow",  // Allow search engines to index signup page
  openGraph: {
    title: "HOORAB GROUP | Sign Up",
    description: "Create your HOORAB GROUP account today",
    url: "https://hoorabgroup.com/signup",
    siteName: "HOORAB GROUP",
    type: "website",
  },
};

export default function SignupLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}