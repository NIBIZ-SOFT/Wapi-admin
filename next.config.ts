import type { NextConfig } from "next";

const BASE_PATH = "";

const nextConfig: NextConfig = {
  output: "standalone",
  basePath: BASE_PATH || undefined,
  reactStrictMode: false,
  serverExternalPackages: ["unzipper"],
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5500/api",
    NEXT_PUBLIC_API_BASE_URL: BASE_PATH + "/api",
    NEXT_PUBLIC_STORAGE_URL: process.env.NEXT_PUBLIC_STORAGE_URL || "http://127.0.0.1:5500",
    NEXT_PUBLIC_FRONT_URL: process.env.NEXT_PUBLIC_FRONT_URL || "http://localhost:3000",
  },
  redirects: async () => {
    const list: any[] = [
      {
        source: "/",
        destination: "/auth/login",
        permanent: true,
      },
    ];
    if (BASE_PATH) {
      list.push({
        source: "/",
        destination: BASE_PATH,
        basePath: false,
        permanent: false,
      });
    }
    return list;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
    ],
  },
};

export default nextConfig;
