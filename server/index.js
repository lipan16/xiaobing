const express = require('express')
const app = express()

app.get('/api/login', (req, res) => {
    res.header('Access-Control-Allow-Origin', '\*')
    res.send({
        flag: 200,
        info: {
            name: 'xiaobing',
            pwd: '520',
            verify: true
        }
    })
})

app.listen(3000, () => {
    console.log('app listen 3000 port')
})
