/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Add Cloudinary support
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      // Optional: If you're using Cloudinary with a subdomain
    
    ],
  },
};

export default nextConfig;