import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    unoptimized: true, // Disable image optimization until usage reset
  }
};

export default nextConfig;
