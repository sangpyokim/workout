const express = require('express')
const app = express()

const PORT = 8080

app.get('/', (req, res) => {
    return res.json({
        message: "hello world",
        success: true
    })
})

app.listen(PORT, () => {
    console.log(`서버시작 http://localhost:${PORT}`)
})