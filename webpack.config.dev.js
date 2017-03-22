const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry : {
    index : [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './app/js/index.js',
    ],
  },
  output : {
    path : path.join(__dirname, 'dist'),
    filename : '[name].js',
    // publicPath: "/",
    publicPath : 'http://localhost:8080/',
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      Promise : 'es6-promise',
      fetch : 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    }),
    new webpack.DefinePlugin({
      'process.env' : {
        'NODE_ENV' : JSON.stringify('dev'),
        'API_URL' : JSON.stringify('http://localhost:3000'),
      },
    }),
    //new ExtractTextPlugin('dist/css/main.css')
  ],
  module : {
    loaders : [
      {
        test : /\.(js|jsx)$/,
        exclude : /node_modules/,
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
        loader : 'url-loader?limit=10000',
      },
    ],
  },
  devServer : {
    hot : true,
    contentBase : './app',
  },
};
