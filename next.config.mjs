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
  },
};

export default nextConfig;
