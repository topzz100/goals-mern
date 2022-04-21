const express = require('express')
const router = express.Router()
const {getGoals, setGoals, updateGoals, deleteGoals} = require('../controllers/goalControllers')
const {protect} = require('../midddleware/authMiddleware')

router.get('/', protect, getGoals)
router.post('/',protect, setGoals)
router.put('/:id', protect, updateGoals)
router.delete('/:id', protect, deleteGoals)

module.exports = router