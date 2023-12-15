/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    URL_API_LOGIN: 'https://fakestoreapi.com/',
    URL_FETCH_DATA: 'http://localhost:8080/',
  },
  images: {
    domains: ['fakestoreapi.com'],
  },
};

module.exports = nextConfig;
