const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports ={
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dev'),
    },
    watch: true,
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname,'dev'),
        compress: true,
        port: 8000,
        overlay: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node-modeles/'
        },
        {
            test: /\.scss$/,
            use:  [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
            test: /\.css$/,
            use:  [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dev']
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[name]'.css
        }),
        new HtmlWebpackPlugin({
          title: 'Webpack test',
          template: './src/index.html',
          filename: 'index.html'
        })
    ],
}