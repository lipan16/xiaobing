module.exports = api => {
    api.cache.using(() => process.env.NODE_ENV)
    return {
        "presets": [ // 它的功能相当于是下面plugins的一个集合，即插件集。有了它我们不用在plugins中一个一个的配置插件了
            [
                "@babel/preset-env", {
                    "targets": {
                        "node": true,
                        "chrome": "49",
                        "ios": "10"
                    }
                }
            ],
            '@babel/preset-react'
        ],
        plugins: [
            [
                "import", {
                    "libraryName": "antd-mobile",
                    "libraryDirectory": "es/components",
                    "style": false
                }
            ],
            api.env('development') && 'react-refresh/babel'
        ].filter(Boolean)
    }
}
