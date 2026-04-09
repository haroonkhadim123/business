/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      // Add your own domain for optimized images
      {
        protocol: "https",
        hostname: "www.hoorabgroup.com",
      },
    ],
  },
  // Add www redirect
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://hoorabgroup.com/:path*',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'hoorabgroup.com',
          },
        ],
      },
    ];
  },
  // Optional: Add trailing slash handling
  trailingSlash: false,
  // Optional: Compress images
  compress: true,
};

export default nextConfig;