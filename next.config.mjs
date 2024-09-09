/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};

export default nextConfig;
