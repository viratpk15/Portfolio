import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Allow opening the dev server via the LAN IP without cross-origin warnings. */
  allowedDevOrigins: ["192.0.0.2", "192.168.1.2", "192.168.1.5"],
};

export default nextConfig;
