/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1r0ovlr0podg3.cloudfront.net'
      }
    ]
  }
}

module.exports = nextConfig
