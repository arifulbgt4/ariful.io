const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV !== "production",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Turbopack (empty config silences webpack warning) and leave room for future tuning.
  turbopack: {},
  // Next.js 16: server actions are stable; removed experimental flag.
};

module.exports = withPWA(nextConfig);
