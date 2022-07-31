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
        port: 8090,
        open: true,
        proxy: {
            '/api': {
                target: config.apiAddress,
                secure: false,
                changeOrigin: true
            },
            '/loginS.jsp': {
                target: config.apiAddress,
                secure: false,
                changeOrigin: true
            }

        }
    },
    plugins: [
        new ReactRefreshWebpackPlugin()
    ]
}

module.exports = config.isMeasureSpeed ? smp.wrap(merge(webpackConfigBase, webpackConfigDev)) : merge(webpackConfigBase, webpackConfigDev)
