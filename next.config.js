const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/_common.scss";`,
  },
  env: {
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    POCKET_BASE_URL: process.env.POCKET_BASE_URL,
    REDIRECT_URL: process.env.REDIRECT_URL,
  }
}

module.exports = nextConfig
