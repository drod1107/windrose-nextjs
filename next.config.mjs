/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        // Redirect HTTP to HTTPS, except for localhost
        {
          source: '/:path*',
          has: [
            { type: 'host', value: '(?!www\\.).*' },
            { type: 'host', value: '(?!localhost).*' }
          ],
          destination: 'https://www.:host/:path*',
          permanent: true,
        },
        // Redirect windrose.dev to www.windrose.dev
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'windrose.dev' }],
          destination: 'https://www.windrose.dev/:path*',
          permanent: true,
        },
        // Redirect windroseandco.com to www.windroseandco.com
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'windroseandco.com' }],
          destination: 'https://www.windroseandco.com/:path*',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;