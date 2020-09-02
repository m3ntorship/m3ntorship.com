const HtmlCriticalPlugin = require('html-critical-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
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
    config.plugins.push(
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
        width: 1300,
        height: 900,
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
