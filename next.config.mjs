/** @type {import('next').NextConfig} */
const nextConfig = {
  // 캐싱 로그 확인
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // @svgr/webpack 설정
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
export default nextConfig;
