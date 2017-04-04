const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('hello world'))

app.listen(8080, () => {
    console.log('服务器已经启动')
})