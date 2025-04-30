import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    unoptimized: true, // disable image optimization temporarily until next month kek
  }
};

export default nextConfig;
