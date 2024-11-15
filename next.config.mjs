const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.flawlessfiles.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['cdn.myanimelist.net'],
  },
};

export default nextConfig;
