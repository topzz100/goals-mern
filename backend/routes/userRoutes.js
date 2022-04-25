const express = require('express')
const router = express.Router()
const {addUser, login, getUser} = require('../controllers/userControllers')
const {protect} = require('../midddleware/authMiddleware')
router.post('/', addUser)
router.post('/login', login)
router.get('/me', protect, getUser)

module.exports = router