/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["localhost", "https://frontend-teste.vercel.app/"],
  },
};

module.exports = nextConfig;
