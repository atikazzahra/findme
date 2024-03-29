const MinifyPlugin = require("babel-minify-webpack-plugin");
module.exports = {
  entry: [
    'themes/jupiter/source/js/app-catbus.js',
    'themes/jupiter/source/js/app-apartement.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          "minify",
          "@babel/preset-env",
          "@babel/preset-react",
        ]
      }
    }],
  },
  plugins: [
    new MinifyPlugin()
  ]
};