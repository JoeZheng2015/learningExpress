const express = require('express')

const users = require('./users')

const PORT = 8080

const app = express()

app.use('/users', users)

app.get('/', (req, res) => {
	res.send('hello world')
})

app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`)
})
