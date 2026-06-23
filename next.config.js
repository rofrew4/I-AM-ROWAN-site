/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep dev (.next) and production builds separate so `npm run build`
  // does not break a running dev server.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [48, 96, 128, 180, 220, 384],
  },
};

module.exports = nextConfig;
