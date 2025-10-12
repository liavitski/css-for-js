import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/shop/bestsellers',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
