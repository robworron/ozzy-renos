/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.ozzyrenos.ca",
  generateRobotsTxt: true,
  outDir: "./public",
  changefreq: "monthly",
  exclude: [],
  transform: async (config, path) => {
    let priority = 0.7;

    switch (path) {
      case "/":
        priority = 1.0;
        break;
      case "/services":
        priority = 0.9;
        break;
      case "/gallery":
        priority = 0.8;
        break;
      case "/contact":
        priority = 0.8;
        break;
      default:
        priority = 0.6;
    }

    return {
      loc: path,
      changefreq: "monthly",
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};
