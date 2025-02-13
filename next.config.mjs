/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
  };
  
export default nextConfig;
