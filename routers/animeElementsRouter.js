const express = require('express')
const router = express.Router()
const controller = require('../controllers/animeElementsControllers')

router.patch("/:id", controller.addAnimeElement)

module.exports = router