/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["jedadrian.vercel.app"],
  },
};

module.exports = nextConfig;
