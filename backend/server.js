const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const goalRoutes = require('./routes/goalRoutes')
const userRoutes = require('./routes/userRoutes')
const { errorHandler } = require('./midddleware/errorMiddleware')
const connectDB = require('./config/db.js')
const port = process.env.POR || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', goalRoutes)
app.use('/api/users', userRoutes)

app.use(errorHandler)

app.listen(port, ()=> console.log(`server running on port ${port}`))