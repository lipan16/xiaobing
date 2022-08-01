const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// 添加json解析
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/api/name/:id', (req, res) => {
    console.log('/api/:id 接受的参数：' , req.params.id)
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
    res.header('Access-Control-Allow-Origin', '\*')
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
    res.header('Access-Control-Allow-Origin', '\*')
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
