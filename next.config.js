/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['via.placeholder.com', 'cdn.kidsplaza.vn', 'kidsplaza.vn', 'localhost', 'img.freepik.com'],
  },
};

module.exports = nextConfig;
