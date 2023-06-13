/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MOBGODB_URI: process.env.MOBGODB_URI,
    DEV_URL: process.env.NEXT_PUBLIC_DEV_URL,
    PROD_URL: process.env.NEXT_PUBLIC_PROD_URL
  }
}

module.exports = nextConfig
