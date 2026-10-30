import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static-friendly App Router; Vercel free tier OK without `output: 'export'`
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
