const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')
const bcrypt = require('bycript')
const jwt = require('jsonwebtoken')

// @desc register user
// @route POST api/users
// @access Public
const addUser = asyncWrapper(async(req, res)=> {
  const {name, email, password} = req.body

  if(!name || !email || !password ){
    res.status(400)
    throw new Error('input all fields')
  }

  const userExist = await User.findOne({email})
  if(userExist){
    res.status(400)
    throw new Error('User already exists')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({
    user,
    email,
    password: hashedPassword
  })

  if(user){
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  }else{
    res.staus(400)
    throw new Error('invalid user data')
  }

})

// @desc authenticate user
// @route POST api/users/login
// @access Private
const login = asyncWrapper(async(req, res) => {
  const {email, password} = req.body

  const user =  await User.findOne({email})

  if(user && (await bcrypt.compare(password, user.password))){
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  }else{
    res.status(400)
    throw new Error('Invalid credentials')
  }
  
})

// @desc get user
// @route GET api/users/user
// @access Private
const getUser = asyncWrapper(async(req, res) => {
   const {_id, name, email} = await User.findById(req.user.id)

   res.status(200).json({
     id: _id,
     name,
     email 
   })
})

const generateToken = (id)=>{
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}


module.exports = {
  addUser,
  login,
  getUser
}