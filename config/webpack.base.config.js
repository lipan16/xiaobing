const path = require('path')
const chalk = require('chalk') // 修改控制台字符串样式
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 优化css
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')// 进度条
const {WebpackManifestPlugin} = require('webpack-manifest-plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const isEnvProduction = process.env.NODE_ENV === 'production' // 是否生产环境

module.exports = {
    mode: 'development', // webpack打包环境是开发环境
    entry: './src/index.js', // 项目的入口文件,相对根目录
    output: { // 配置输出信息
        path: path.resolve(__dirname, '../build'), // 输出的路径，相对当前目录
        filename: isEnvProduction ? '[name].[contenthash:8].js' : 'bundle.js',  // 列在 entry 中,打包输出的文件名称
        chunkFilename: isEnvProduction ? '[name].[contenthash:8].chunk.js' : '[name].chunk.js' // 未列在 entry 中，却又需要被打包出来的文件的名称
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|less)$/,
                use: [
                    isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-pxtorem')({
                                        rootValue: 16,             // 根元素大小
                                        propList: ['*'],             // 存储将被转换的存储列表，‘*’表示所有
                                        unitPrecision: 3           // rem保留小数点位数
                                    })
                                ]
                            }
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            additionalData: (content, loaderContent) => {
                                const {resourcePath, rootContext} = loaderContent
                                const relativePath = path.relative(rootContext, resourcePath)
                                if(relativePath.includes('src')){
                                    return `@import "~@/styles/variables.less";` + '\n' + content
                                }
                                return content
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'imgs/[hash].[name][ext]'
                },
                exclude: /node_modules/,
                include: path.join(__dirname, '../src/assets')
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash].[name][ext]'
                },
                exclude: /node_modules/,
                include: path.join(__dirname, './src/assets/images')
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
            '@config': path.resolve(__dirname, './')
        },
        extensions: ['.js', '.css', '.less']
    },
    plugins: [
        new HtmlWebpackPlugin({ // 实例化Html模板模块
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, '../public'),
                    to: 'public',
                    toType: 'dir'
                }
            ]
        }),
        new ProgressBarPlugin({
            format: `   :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`
        }),
        new WebpackManifestPlugin({}),
        new MomentLocalesPlugin()
    ],
    optimization: { // 添加抽离公共代码插件的配置
        splitChunks: {
            cacheGroups: {
                commons: { // 打包公共模块
                    chunks: 'initial', // initial表示提取入口文件的公共部分
                    minChunks: 2, // 表示提取公共部分最少的文件数
                    minSize: 0, // 表示提取公共部分最小的大小
                    name: 'commons' // 提取出来的文件命名
                }
            }
        }
    }
}
