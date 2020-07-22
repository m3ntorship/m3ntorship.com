module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    url: env('STRAPI_ADMIN_PATH', 'admin'),
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'bcae3e8239c4bbfe9e1e50b956bf7963'),
    },
  },
});
