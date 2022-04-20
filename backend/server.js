const express = require('express')
const dotenv = require('dotenv').config()
const goalRoutes = require('./routes/goalRoutes')

const port = process.env.POR || 5000

const app = express()

app.use('/api/goals', goalRoutes)

app.listen(port, ()=> console.log(`server running on port ${port}`))