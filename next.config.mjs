/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect HTTP to HTTPS, except for localhost
      {
        source: "/:path*",
        has: [
          { type: "host", value: "(?!www\\.).*" },
          { type: "host", value: "(?!localhost|127\\.0\\.0\\.1).*" },
        ],
        destination: "https://www.:host/:path*",
        permanent: true,
      },
      // Redirect windrose.dev to www.windrose.dev
      {
        source: "/:path*",
        has: [{ type: "host", value: "windrose.dev" }],
        destination: "https://www.windrose.dev/:path*",
        permanent: true,
      },
      // Redirect windroseandco.com to www.windroseandco.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "windroseandco.com" }],
        destination: "https://www.windroseandco.com/:path*",
        permanent: true,
      },
      // Redirect windrose-nextjs-git-main-windrose.vercel.app
      {
        source: "/:path*",
        has: [{ type: "host", value: "windrose-nextjs-git-main-windrose.vercel.app" }],
        destination: "https://www.windrose-nextjs-git-main-windrose.vercel.app/:path*",
        permanent: true,
      },
      // Redirect windrose-nextjs.vercel.app
      {
        source: "/:path*",
        has: [{ type: "host", value: "windrose-nextjs.vercel.app" }],
        destination: "https://www.windrose-nextjs.vercel.app/:path*",
        permanent: true,
      },
      // Redirect vercel.live/link/windrose-nextjs-git-dev-windrose.vercel.app?via=deployment-domains-list-branch
      {
        source: "/link/windrose-nextjs-git-dev-windrose.vercel.app",
        has: [{ type: "host", value: "vercel.live" }],
        destination: "https://www.windrose-nextjs-git-dev-windrose.vercel.app",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
