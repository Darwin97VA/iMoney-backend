const express = require('express')
const cors = require('cors')
const path = require('path')
const path = require('path')

const PORT = process.env.PORT || 3030

const app = express()

app.use(cors())

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT)