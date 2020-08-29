const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports ={
    mode: 'production',
    entry: {
        app: './src/index.js'
    },
    output: {
        // filename: '[name].[chunkhash].js',
        filename: '[name].js',
        path: path.resolve(__dirname, './build')
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
        }),
      ],
      splitChunks: {
        chunks: 'all',
      },
    },
    devtool: 'source-map',
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
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
            ],
        }],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build']
        }),
        new MiniCssExtractPlugin({
        //   filename: '[name].[contenthash].css', 
          filename: '[name].css', 
        }),
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html',
          minify: {
            removeComments: true,
            collapseWhitespace: true,
          },
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname,'build'),
        compress: true,
        port: 9000,
        open: true,
        overlay: true
    },
    watch: true,
}