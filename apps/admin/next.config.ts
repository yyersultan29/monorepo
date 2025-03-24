import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // transpilePackages: ['@repo/ui'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port:"",
        pathname: "/id/**"
      }
    ]
  }
};

export default nextConfig;
