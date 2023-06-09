const express = require('express')
const app = express()

app.get('/', async function (req, res) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    res.json(data)
})

app.listen(3000)