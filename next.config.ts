import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cesium will be loaded from CDN, so we just need basic config
  reactStrictMode: false, // Cesium has some react strict mode issues
};

export default nextConfig;
