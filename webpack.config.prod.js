const path = require('path');
const webpack = require('webpack');
const CopywebpackPlugin = require('copy-webpack-plugin');
const buildPath = path.resolve(__dirname, 'public');
const mainPath = path.resolve(__dirname, 'app/js/', 'index.js');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const imgPath = path.resolve(__dirname, 'app/img/');
const fontsPath = path.resolve(__dirname, 'app/fonts/');

module.exports = {
  entry : mainPath,
  output : {
    path : buildPath,
    filename : 'index.js',
    publicPath : 'http://dev.lemagazinedesseries.com',
  },
  plugins : [
    new CopywebpackPlugin([
      {
        from : imgPath,
        to : 'img',
      },
      {
        from : fontsPath,
        to : 'fonts',
      },
      {
        from : 'app/index.html',
        to : 'index.html',
      },
    ]),
    new webpack.LoaderOptionsPlugin({
      minimize : true,
      debug : false,
    }),
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV' : JSON.stringify('production'),
      'API_URL' : JSON.stringify('http://dev.lemagazinedesseries.com'),
    },
  }),
    new webpack.ProvidePlugin({
      Promise : 'es6-promise',
      fetch : 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    }),
    //new ExtractTextPlugin('dist/css/main.css')
  ],
  module : {
    loaders : [
      {
        test : /\.(js|jsx)$/,
        exclude : [nodeModulesPath],
        loader : 'babel-loader',
        query : {
          presets : ['es2015', 'react'],
        },
      },
      {
        test : /\.(css|scss)$/,
        loaders : ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test : /\.(png|gif|jpe?g|svg)$/i,
        loader : 'file-loader?hash=sha512&digest=hex&name=[path][name].[ext]',
      },
      {
        test : /\.(woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        loader : 'file-loader?hash=sha512&digest=hex&name=[path][name].[ext]',
      },
    ],
  },
};
