import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  outputFileTracingIncludes: {
    // This tells Next.js to include everything in your generated prisma folder
    // for all API routes. Use a relative path from the project root.
    "/api/**/*": ["./.generated/prisma/**/*"],
  },
};

export default nextConfig;