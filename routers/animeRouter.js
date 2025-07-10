const express = require('express')
const router = express.Router()
const controller = require('../controllers/animeControllers')

router.get('/',controller.show)
router.get("/add/", controller.getAdd)
router.post("/add/", controller.postAdd)

module.exports = router