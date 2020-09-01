module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./helper/generate-sitemap');
    }

    return config;
  },
  env: {
    url: process.env.M3NTORSHIP_APP_STRAPI_URL
  }
};
