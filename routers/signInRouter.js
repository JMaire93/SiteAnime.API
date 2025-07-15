const express = require('express')
const router = express.Router()
const controller = require('../controllers/signInControllers')

router.post("/", controller.postSignIn)
router.get("/", controller.coucou)

module.exports = router