    import type { NextConfig } from "next";

    const isProd = process.env.NODE_ENV === 'production';

    const nextConfig: NextConfig = {
      output: 'export',
      // Ensure folder-based routes like /projects/index.html
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
      // GitHub Pages project repo deployment (only in production)
      basePath: isProd ? '/Portfolio' : '',
      assetPrefix: isProd ? '/Portfolio' : '',
      env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? '/Portfolio' : '',
      },
    };

    export default nextConfig;
