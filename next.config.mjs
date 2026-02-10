/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ghost-store',
  assetPrefix: '/ghost-store',
  devIndicators: {
    buildActivity: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google Profile Pictures
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash Images
      },
      {
        protocol: 'https',
        hostname: 'www.gstatic.com', // Firebase Assets
      }
    ],
  },
};

export default nextConfig;
