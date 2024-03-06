/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.module.rules.push({
      test: /\.(pdf)$/i,
    });
    return config;
  },
};

export default nextConfig;
