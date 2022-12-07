const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

// enable body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// static folder to serve frontend
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))
