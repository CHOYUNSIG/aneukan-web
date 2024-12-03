import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "e7.pngegg.com",
        port: "",
        pathname: "/pngimages/**",
      },
    ],
  },
};

export default nextConfig;
