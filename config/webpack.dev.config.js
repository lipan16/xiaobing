const {merge} = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const webpackConfigBase = require('./webpack.base.config')
const config = require('./index')

//性能
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()

const webpackConfigDev = {
    mode: 'development',
    target: 'web',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        devMiddleware: {
            writeToDisk: true
        },
        proxy: {
            '/api': {
                target: config.apiAddress,
                secure: false,
                changeOrigin: true
            },
            '/sse':{
                target: config.apiAddress,
                secure: false,
                changeOrigin: true
            },
            '/mxnzp': {
                target: 'https://www.mxnzp.com/',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/mxnzp': ''
                }
            },
        }
    },
    plugins: [
        new ReactRefreshWebpackPlugin()
    ]
}

module.exports = config.isMeasureSpeed ? smp.wrap(merge(webpackConfigBase, webpackConfigDev)) : merge(webpackConfigBase, webpackConfigDev)
