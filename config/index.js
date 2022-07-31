let devServer = 'http://127.0.0.1:3000/'   // 内网dev
let sitServer = 'http://10.7.56.74:7201/openapi/component'   // 内网sit

const config = {
    apiAddress: devServer, // 代理服务器地址
    isMeasureSpeed: false, // 是否测试性能
    allowScreenshot: false, // 是否允许截图
    allowVConsole: true, // 是否开启vConsole
    sensorUrl: 'https://220.250.30.210:30001/sa?project=xzh'
}

if(process.env.NODE_ENV === 'production'){ // 生产环境
    config.sensorUrl = 'https://bigdata.cib.com.cn/sa?project=xzh'
    config.allowVConsole = false
}

module.exports = config
