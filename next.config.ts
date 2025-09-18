import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [],
    domains: [],
  },
  trailingSlash: false,
  generateEtags: false,
};

export default nextConfig;
