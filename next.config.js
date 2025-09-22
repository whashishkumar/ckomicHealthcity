/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ckosmic.whdev.in",
        port: "",
        pathname: "/storage/**", // allow all images under /storage
      },
    ],
    unoptimized: process.env.NEXT_PUBLIC_IMAGE_URL === "true",
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL,
  },
};

module.exports = nextConfig;
