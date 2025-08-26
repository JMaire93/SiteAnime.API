const express = require('express')
const router = express.Router()
const controller = require('../controllers/signInControllers')
const UserValidator = require('../joiValidators/UserValidator')

router.post("/", controller.postSignIn)

module.exports = router