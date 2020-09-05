module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    path:  env('STRAPI_ADMIN_PATH', '/admin'),
  }
});
