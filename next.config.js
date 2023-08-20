/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "pbs.twimg.com",
          pathname: "/profile_images/1627918970606198784/SEE8uYGM_400x400.jpg",
        },
      ],
    },
  },
};

module.exports = nextConfig;
