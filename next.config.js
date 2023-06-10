/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MOBGODB_URI: process.env.MOBGODB_URI,
  }
}

module.exports = nextConfig
