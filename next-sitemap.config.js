// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.windroseandco.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.windroseandco.com/server-sitemap.xml',
    ],
    // GEO strategy (see redesign plan §6): ALLOW AI retrieval/search bots that
    // drive citations + referral traffic, BLOCK bulk training crawlers that
    // absorb content into model weights with no attribution. Adjustable.
    policies: [
      // --- AI retrieval / search bots: allowed (these cite + send visitors) ---
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'Claude-User', allow: '/' },
      { userAgent: 'Claude-SearchBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      // --- AI bulk training crawlers: blocked ---
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'ClaudeBot', disallow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'Google-Extended', disallow: '/' },
      { userAgent: 'Meta-ExternalAgent', disallow: '/' },
      { userAgent: 'Bytespider', disallow: '/' },
      { userAgent: 'Amazonbot', disallow: '/' },
      // --- Everyone else (Google, Bing, etc.): allowed ---
      { userAgent: '*', allow: '/' },
    ],
  },
}
