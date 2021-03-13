const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js'
      },
    // devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html',
        })
      ],
    devServer: {
        hot: true,
        compress: true,
        historyApiFallback: true,
        port: 3000,
        host: 'localhost',
        proxy: {
            '/api': 'http://localhost:8000',
          },
    }
};
