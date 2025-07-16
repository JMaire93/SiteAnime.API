const express = require('express')
const router = express.Router()
const controller = require('../controllers/loginControllers')

router.post("/", controller.postLogin)
router.get('/',controller.showLogIn)

module.exports = router