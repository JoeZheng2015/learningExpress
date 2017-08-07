const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('get users')
})

router.post('/', (req, res) => {
    res.send('create user')
})

router.post('/:id', (req, res) => {
    res.send('update user')
})

router.delete('/:id', (req, res) => {
    res.send('delete user')
})

module.exports = router