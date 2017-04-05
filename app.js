const express = require('express')
const {fetchShows} = require('./actions')


const app = express()

app.get('/', (req, res) => {
    fetchShows()
        .then(json => res.send(json))
})

app.listen(8080, () => {
    console.log('服务器已经启动')
})
