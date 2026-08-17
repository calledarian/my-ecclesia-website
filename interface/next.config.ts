// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.cdninstagram.com' },
      { protocol: 'https', hostname: '*.fbcdn.net' },
    ],
  },
  async redirects() {
    const legacyHosts = ['bec.arian.my', 'www.bec.arian.my', 'www.bec.cheddybytes.com'];

    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      ...legacyHosts.flatMap((host) => [
        {
          source: '/',
          has: [{ type: 'host' as const, value: host }],
          destination: 'https://bec.cheddybytes.com/',
          permanent: true,
        },
        {
          source: '/:path*',
          has: [{ type: 'host' as const, value: host }],
          destination: 'https://bec.cheddybytes.com/:path*',
          permanent: true,
        },
      ]),
    ];
  },
};

export default nextConfig;