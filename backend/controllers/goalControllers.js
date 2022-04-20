const asyncHandler = require('express-async-handler')
// @desc get goals
// @route GET api/goal
// @access Private

const getGoals = aasyncHandler(async(req, res) => {

})

// @desc create goals
// @route POST api/goal
// @access Private

const setGoals = asyncHandler(async(req, res) => {

})
// @desc update goals
// @route PUT api/goal/:id
// @access Private

const updateGoals = asyncHandler(async(req, res) => {

})
// @desc delete goals
// @route DELETE api/goal/:id
// @access Private

const deleteGoals = asyncHandler(async(req, res) => {

})

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals
}