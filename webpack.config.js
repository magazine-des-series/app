var path = require("path");
var webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            "./app/js/index.js"
        ]
    },
    output: {
        path: path.join(__dirname, "dist"),
           filename: "[name].js",
           publicPath: "/",
    },
    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //new ExtractTextPlugin('dist/css/main.css')
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'es2015', 'react' ],
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                loader: 'file-loader?hash=sha512&digest=hex&name=[path][name].[ext]'
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ],
    },
    devServer: {
        hot: true,
        contentBase: "./app",
    }
}
