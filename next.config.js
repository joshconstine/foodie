/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "sparksgallery.com", "i0.wp.com"],
  },
};

module.exports = nextConfig;
