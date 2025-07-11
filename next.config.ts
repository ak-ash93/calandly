import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "lh3.googleusercontent.com", // Google
      "avatars.githubusercontent.com", // GitHub
    ],
  },
};

export default nextConfig;
