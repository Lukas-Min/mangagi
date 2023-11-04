const express = require('express')

const userController = require('../controllers/users_controllers')

const userRouter = express.Router()

userRouter.post('/register', userController.register)

module.exports = userRouter