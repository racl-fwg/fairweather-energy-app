/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'fairweather.energy'], // Include production domain
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']  // Allow SVGs to be used as React components
    });
    return config;
  }
}

module.exports = nextConfig;
