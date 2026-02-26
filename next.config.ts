import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  outputFileTracingIncludes: {
    // Tells Vercel to explicitly bundle the engine files 
    // from the root .generated folder into all API routes
    "/api/**/*": ["./.generated/**/*"],
  },
};

export default nextConfig;
