const express = require('express')
const router = express().Router()
const {addUser, login, getUser} = require('../controllers/userControllers')
const {protect} = require('../midddleware/authMiddleware')
router.post('/', login)
router.post('/login', login)
router.get('/user', protect, login)

module.exports = router