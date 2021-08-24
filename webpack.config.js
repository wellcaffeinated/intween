const webpack = require('webpack')
const path = require('path');
const pkg = require('./package.json');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const fileName = pkg.name;
const libraryName = 'InTween';
const outputFile = fileName + '.js';

const config = {
  devtool: 'source-map',
  output: {
    filename: outputFile,
    library: {
      name: libraryName,
      type: 'umd',
    }
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules')],
    extensions: ['.json', '.js'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  plugins: [
    new ESLintPlugin(),
    new webpack.BannerPlugin({
      banner: `${libraryName} version ${pkg.version}`
    })
  ],
};

module.exports = config;
