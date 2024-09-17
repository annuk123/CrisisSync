// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'imgs.search.brave.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  
