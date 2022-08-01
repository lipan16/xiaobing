const express = require('express')
const bodyParser = require('body-parser')
const {next} = require('lodash/seq')

const app = express()
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// 解析 application/json
app.use(bodyParser.json())
// 全局配置
app.all('*', (req, res, next) => {
    res.header({
        'Access-Control-Allow-Origin': '*', // 允许跨域访问
        'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type,Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Content-Type': 'application/json;charset=utf-8',
        'server': 'nginx'
    })
    if(req.method === 'OPTIONS'){ // 让options请求快速返回
        res.sendStatus(200)
    }else{
        next()
    }
})


app.get('/api/name/:id', (req, res) => {
    console.log('/api/:id 接受的参数：', req.params.id)
    res.send(JSON.stringify({
        flag: 200,
        info: {
            name: 'xiaobing',
            pwd: '520',
            verify: true
        }
    }))
})

app.get('/api/login', (req, res) => {
    console.log('/api/login 接受到的参数：', req.query)
    res.send(JSON.stringify({
        flag: 200,
        info: {
            name: 'xiaobing',
            pwd: '520',
            verify: true
        }
    }))
})

app.post('/api/post', (req, res) => {
    console.log('/api/post 接受到的参数：', req.body)

    res.send(JSON.stringify({
        flag: 200,
        info: {
            name: 'xiaobing',
            pwd: '520',
            verify: true
        }
    }))
})

app.listen(3000, () => {
    console.log('app listen 3000 port')
})
