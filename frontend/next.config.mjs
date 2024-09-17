// // next.config.mjs
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'imgs.search.brave.com',
//           pathname: '/**',
//         },
//       ],
//     },
//   };
  
//   export default nextConfig;
  


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
      // Add other remote patterns here if needed
    ],
  },
};

export default nextConfig;
