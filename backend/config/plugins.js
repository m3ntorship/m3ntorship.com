module.exports = ({ env }) => ({
  upload: {
    provider: "m3-minio",
    providerOptions: {
      public: env("MINIO_PUBLIC_KEY"),
      private: env("MINIO_PRIVATE_KEY"),
      endpoint: env("MINIO_URL"),
      bucket: env("MINIO_BUCKET"),
    },
  },
});
