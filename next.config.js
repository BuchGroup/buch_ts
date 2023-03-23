/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  nextBuildDir: require('path').join(__dirname, '_next'),
}

module.exports = nextConfig
