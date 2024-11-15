/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpackDevMiddleware: (config) => {
  //   reactStrictMode: true,
  //   config.watchOptions = {
  //     poll: 1000,
  //     aggregateTimeout: 300,
  //   }
  //   return config
  // },
  images: {
    domains: ['bpup5zgku1xlplc9.public.blob.vercel-storage.com'],
  },
}

module.exports = nextConfig
