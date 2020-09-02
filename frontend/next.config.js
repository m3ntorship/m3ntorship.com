const HtmlCriticalPlugin = require('html-critical-webpack-plugin');
module.exports = {
  webpack: (config, { isServer, webpack }) => {
    // Perform customizations to webpack config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    config.plugins.push(
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      })
    );
    config.module.push(
      new MiniCssExtractPlugin({
        //chunkFilename: "[id].css"
      })
    );
    config.plugins.push(
      new HtmlCriticalPlugin({
        base: path.join(path.resolve(__dirname), 'dist/'),
        src: 'index.html',
        dest: 'index.html',
        inline: true,
        minify: true,
        extract: true,
        width: 375,
        height: 565,
        penthouse: {
          blockJSRequests: false
        }
      })
    );
    config.module.rules.push({
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    });
    if (isServer) {
      require('./helper/generate-sitemap');
    }

    return config;
  },
  env: {
    url: process.env.M3NTORSHIP_APP_STRAPI_URL
  }
};
