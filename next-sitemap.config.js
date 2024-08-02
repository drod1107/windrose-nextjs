// next-sitemap.config.js
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.windroseandco.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/server-sitemap.xml'], // Exclude server-side sitemap from static generation
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.windroseandco.com/server-sitemap.xml', // Add server-side sitemap to robots.txt
      ],
    },
  }