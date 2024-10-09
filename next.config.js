/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  rules: {
    // Disable Next.js specific rules
    'next/no-img-element': 'off',
    // Other rules...
  }
}

module.exports = nextConfig
