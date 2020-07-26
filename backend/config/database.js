module.exports = () => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        database: `${process.env.DATABASE_NAME}`,
        host: `${process.env.DATABASE_HOST || "127.0.0.1"}`,
        srv: "true",
        port: 27017,
        username: `${process.env.DATABASE_USERNAME || ""}`,
        password: `${process.env.DATABASE_PASSWORD || ""}`,
      },
      options: {
        ssl: true,
      },
    },
  },
});
