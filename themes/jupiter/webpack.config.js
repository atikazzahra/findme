module.exports = {
  entry: [
    'themes/jupiter/source/js/app.js',
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
        ]
      }
    }]
  }
};