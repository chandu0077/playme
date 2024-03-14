/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // nextScriptWorkers: true,
  },
  reactStrictMode: false,
  images: {
    dangerouslyAllowSVG: true,
    // domains: [
    //   "www.facebook.com",
    //   "cdn.gkstr.in",
    //   "images.rockstar.in",
    //   "rockstar-website-images.s3.ap-south-1.amazonaws.com",
    //   "rockstar-users-documents-prod.s3.ap-south-1.amazonaws.com",
    // ],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "rockstar-user-documents-dev.s3.ap-south-1.amazonaws.com",
    //     port: "",
    //   },
    // ],
  },
};

module.exports = nextConfig;
