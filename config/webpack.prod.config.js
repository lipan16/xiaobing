const {merge} = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')

//optimization
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//performance
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const webpackConfigProd = {
    mode: 'production',
    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin()
        ],
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].chunk.css'
        })
    ]
}

module.exports = merge(webpackConfigBase, webpackConfigProd)
