module.exports = {
    siteUrl: 'https://fairweather.energy',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: '/admin' },
      ],
    },
  };
  