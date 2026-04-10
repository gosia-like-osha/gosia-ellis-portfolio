import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // In dev, Turbopack + `next/image` often triggers browser fetches to `/_next/image`
    // that fail with "TypeError: Failed to fetch", which blocks the whole page behind
    // the error overlay. Local assets are already full-size exports; skip optimization
    // only while `next dev` is running. Production keeps the default (optimized) behavior.
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
