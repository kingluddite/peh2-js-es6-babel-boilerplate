const path = require('path');

module.exports = {
  entry: {
    App: './src/assets/scripts/App.js',
    Vendor: './src/assets/scripts/Vendor.js'
  },
  output: {
    path: path.join(__dirname, './src/temp/scripts'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};
