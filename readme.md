# todo
思考 列表如何做缓存



# 项目依赖

## dependencies

| 名称 | 版本 | 描述 |
|------|------|------|
|@reduxjs/toolkit|^1.8.3 |官方推荐编写Redux逻辑的方法，解决配置store复杂，需要安装很多依赖才能让redux好用，有太多的模板代码，了解更多请看查看依赖包README。 |
|axios|^0.27.2 |Promise based HTTP client for the browser and node.js. |
|immutability-helper|^3.1.1 |Mutate a copy of data without changing the original source. 解决嵌套数据结构在react中更新视图的问题 |
|lodash|^4.17.21 | 提供模块化、性能和附加功能的现代JavaScript实用程序库|
|moment| ^2.29.2|时间格式化工具库 |
|prop-types| ^15.8.1|Runtime type checking for React props and similar objects. |
|react|^18.2.0 | React is a JavaScript library for creating user interfaces. |
|react-dom| ^18.2.0| This package serves as the entry point to the DOM and server renderers for React.|
|react-redux|^8.0.2 |Official React bindings for Redux. |
|react-router-dom|^6.3.0 |The react-router-dom package contains bindings for using React Route |
|vconsole|^3.14.6 |A lightweight, extendable front-end developer tool for mobile web page. |

## devDependencies

| 名称 | 版本      | 描述                                                                                                    |
|------|---------|-------------------------------------------------------------------------------------------------------|
|@babel/core| ^7.18.9 | Babel compiler core.                                                                                  |
|@babel/preset-env| ^7.18.9 | A Babel preset for each environment.用于babel配置预编译环境                                                    |
|@babel/preset-react| ^7.18.6 | Babel preset for all React plugins. 用于babel配置react插件的预编译                                              |
|pmmmwh/react-refresh-webpack-plugin| ^0.5.7  | react 热更新插件                                                                                           |
|babel-loader| ^8.2.5  | webpack 解析js文件用到的loader                                                                               |
|babel-plugin-import| ^1.13.5 | Modular import plugin for babel, compatible with antd , antd-mobile , lodash, material-ui , and so on |
|body-parser| ^1.20.0 | 解析客户端请求的body中的内容，JSON编码处理和url编码处理                                                                     |
|chalk| ^4.1.2  | Terminal string styling done right                                                                    |
|copy-webpack-plugin| ^11.0.0 | webpack打包时复制文件或文件夹到打包目录                                                                               |
|css-loader| ^6.7.1  | webpack css loader                                                                                    |
|css-minimizer-webpack-plugin| ^4.0.0  | 压缩优化css打包文件                                                                                           |
|eslint| ^8.20.0 | 代码风格检测                                                                                                |
|eslint-import-resolver-webpack| ^0.13.2 | Webpack-literate module resolution plugin for eslint-plugin-import                                    |
|eslint-plugin-import| ^2.26.0 | eslint import/export 插件.                                                                              |
|eslint-plugin-jsx-a11y| ^6.6.1  | eslint jsx rule 插件                                                                                    |
|eslint-plugin-react| ^7.30.1 | eslint react rule 插件                                                                                  |
|eslint-plugin-react-hooks| ^4.6.0  | ESLint react hooks rule 插件                                                                            |
|express| ^4.18.1 | 简洁而灵活的node.js Web应用框架                                                                                 |
|html-webpack-plugin| ^5.5.0  | webpack html 生成插件                                                                                     |
|husky| ^8.0.1  | git hooks 用于控制代码质量                                                                                    |
|jest| ^28.1.3 | 单元测试框架                                                                                                |
|less| ^4.1.2  | 动态样式语言                                                                                                |
|less-loader| ^11.0.0 | less 解析 webpack 插件                                                                                    |
|mini-css-extract-plugin| ^2.6.1  | 用于打包时拆分css文件                                                                                          |
|moment-locales-webpack-plugin| ^1.2.0  | 用于打包时删除momentjs没有用到的locales, 减小打包体积                                                                   |
|postcss-loader| ^7.0.1  | Loader to process CSS with PostCSS                                                                    |
|postcss-pxtorem| ^6.0.0  | 用于将css文件中的px转rem                                                                                      |
|progress-bar-webpack-plugin| ^2.1.0  | 编译进度条                                                                                                 |
|react-refresh| ^0.14.0 | 用于开发模式 react 热更不丢失状态                                                                                  |
|speed-measure-webpack-plugin| ^1.5.0  | 用于开发模式看编译速度                                                                                           |
|style-loader| ^3.3.1  | webpack loader用于将CSS 注入dom                                                                            |
|webpack| ^5.74.0 | 编译打包工具                                                                                                |
|webpack-bundle-analyzer| ^4.5.0  | 用webpack 打包体积分析                                                                                       |
|webpack-cli| ^4.10.0 | The official CLI of webpack                                                                           |
|webpack-dev-server| ^4.9.3  | 用于开发模式热更（这里是文件发生变更就自动刷新, 没有react-refresh就不能保存状态）                                                      |
|webpack-manifest-plugin| ^5.0.0  | 用于webpack生成资源结构                                                                                       |
|webpack-merge| ^5.8.0  | 用于组合webpack配置                                                                                         |
