const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV !== "production",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 16: server actions are stable; removed experimental flag.
};

module.exports = withPWA(nextConfig);
