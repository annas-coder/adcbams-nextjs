import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.adcb.com',
      },
      {
        protocol: 'https',
        hostname: 'media.adcb.com',
      },
    ],
  },
};

export default nextConfig;
