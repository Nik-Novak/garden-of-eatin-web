import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  reactCompiler: true,
  outputFileTracingRoot: path.join(__dirname, '../../'),
  outputFileTracingIncludes: {
    "/api/**/*": ["./.generated/prisma/*.node"],
  },
};

export default nextConfig;