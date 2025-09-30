/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Optimize for production
  swcMinify: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  },

  // Handle redirects for SEO
  async redirects() {
    return [
      {
        source: '/calculator',
        destination: '/#calculator',
        permanent: true,
      }
    ];
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // Don't fail build on errors in development
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },

  // Trailing slash handling
  trailingSlash: false,
};

module.exports = nextConfig;