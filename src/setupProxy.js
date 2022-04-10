const {createProxyMiddleware} = require('http-proxy-middleware');

let cookie;

// const baseUrl = 'https://www.cibxzh.cn/xzhopenapisit/component' // 外网sit
const baseUrl = 'http://10.7.59.155:7201/openapi/component';   // 内网dev
// const baseUrl = 'http://10.7.56.74:7201/openapi/component'   // 内网sit
// const baseUrl = 'http://168.7.61.180:7201/openapi/component'

module.exports = function(app){
    app.use(
        '/invoke.jsp',
        createProxyMiddleware({
            target      : baseUrl,
            changeOrigin: true,
            secure      : false,
            onProxyReq  : (proxyReq, req, res) => {
                cookie && proxyReq.setHeader('cookie', cookie);
            }
        })
    );
    app.use(
        '/loginS.jsp',
        createProxyMiddleware({
            target      : baseUrl,
            changeOrigin: true,
            secure      : false,
            onProxyRes  : (proxyRes, req, res) => {
                cookie = proxyRes.headers['set-cookie'];
            }
        })
    );
};
